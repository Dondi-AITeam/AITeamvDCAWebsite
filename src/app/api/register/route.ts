
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, password, role } = body;

        if (!email || !password || !firstName || !lastName || !role) {
            return new NextResponse('Missing required fields', { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return new NextResponse('User already exists', { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const name = `${firstName} ${lastName}`.trim();

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role as 'VA' | 'CLIENT', // Ensure this matches Prisma enum
                // Automatically create a profile for VAs
                profile: role === 'VA' ? {
                    create: {
                        skills: [],
                    }
                } : undefined
            },
        });

        // Don't return the password
        const { password: _, ...userWithoutPassword } = user;

        return NextResponse.json(userWithoutPassword);
    } catch (error: any) {
        console.error('Registration error:', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
