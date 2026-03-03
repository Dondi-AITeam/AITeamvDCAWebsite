'use server';

import { auth } from '@/auth';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const ProfileSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    bio: z.string().min(10, "Bio must be at least 10 characters"),
    hourlyRate: z.number().min(1, "Hourly rate must be at least $1"),
    skills: z.string().min(1, "Skills are required"),
});

export async function updateProfile(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) return { message: 'Not authenticated', success: false };

    const rawData = {
        title: formData.get('title'),
        bio: formData.get('bio'),
        hourlyRate: Number(formData.get('hourlyRate')),
        skills: formData.get('skills'),
    };

    const validated = ProfileSchema.safeParse(rawData);
    if (!validated.success) {
        return {
            message: 'Validation Error',
            errors: validated.error.flatten().fieldErrors,
            success: false
        };
    }

    const { title, bio, hourlyRate, skills } = validated.data;
    const skillsArray = skills.split(',').map(s => s.trim()).filter(Boolean);

    try {
        await prisma.profile.upsert({
            where: { userId: session.user.id },
            create: {
                userId: session.user.id,
                title,
                bio,
                hourlyRate,
                skills: skillsArray
            },
            update: {
                title,
                bio,
                hourlyRate,
                skills: skillsArray
            }
        });
        revalidatePath('/dashboard/profile');
        return { message: 'Profile updated successfully', success: true };
    } catch (e) {
        console.error(e);
        return { message: 'Database error', success: false };
    }
}
