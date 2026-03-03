'use server';

import { auth } from '@/auth';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { redirect } from 'next/navigation';

const JobSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(20),
    budget: z.number().min(1),
    type: z.enum(['HOURLY', 'FIXED']),
});

export async function createJob(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) return { message: 'Not authenticated' };

    const rawData = {
        title: formData.get('title'),
        description: formData.get('description'),
        budget: Number(formData.get('budget')),
        type: formData.get('type'),
    };

    const validated = JobSchema.safeParse(rawData);
    if (!validated.success) {
        return { message: 'Validation Error', errors: validated.error.flatten().fieldErrors };
    }

    try {
        await prisma.job.create({
            data: {
                clientId: session.user.id,
                ...validated.data
            }
        });
    } catch (e) {
        return { message: 'Database error' };
    }

    revalidatePath('/dashboard/jobs');
    redirect('/dashboard/jobs');
}
