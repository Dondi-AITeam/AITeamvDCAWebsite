import prisma from '@/lib/prisma';

export async function getCourses() {
    try {
        return await prisma.course.findMany({
            where: { published: true },
            include: {
                modules: {
                    orderBy: { order: 'asc' }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    } catch (error) {
        console.error('Error fetching courses:', error);
        return [];
    }
}

export async function getCourse(id: string) {
    try {
        return await prisma.course.findUnique({
            where: { id },
            include: {
                modules: {
                    include: {
                        lessons: {
                            orderBy: { order: 'asc' }
                        }
                    },
                    orderBy: { order: 'asc' }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching course:', error);
        return null;
    }
}

export async function getLesson(id: string) {
    try {
        return await prisma.lesson.findUnique({
            where: { id },
            include: {
                module: {
                    include: {
                        course: true
                    }
                },
                quiz: {
                    include: { questions: true }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching lesson:', error);
        return null;
    }
}
