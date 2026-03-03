import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';

// Define return type explicitly
export type TalentWithProfile = Prisma.UserGetPayload<{
    include: { profile: true, certifications: { include: { course: true } } }
}>;

export async function searchTalent(query?: string): Promise<TalentWithProfile[]> {
    try {
        const whereClause: Prisma.UserWhereInput = {
            role: 'VA',
            profile: {
                isNot: null,
            }
        };

        if (query) {
            whereClause.profile = {
                ...whereClause.profile,
                // @ts-ignore - OR inside relation filter is tricky in Prisma types sometimes, but valid in SQL
                OR: [
                    { title: { contains: query, mode: 'insensitive' } },
                    { bio: { contains: query, mode: 'insensitive' } }
                ]
            };
        }

        return await prisma.user.findMany({
            where: whereClause,
            include: {
                profile: true,
                certifications: {
                    include: { course: true }
                }
            }
        });
    } catch (error) {
        console.error('Error searching talent:', error);
        return [];
    }
}
