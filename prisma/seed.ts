import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const basicCourse = await prisma.course.upsert({
        where: { id: 'basic-ai-cert' },
        update: {},
        create: {
            id: 'basic-ai-cert',
            title: 'Basic AI Certification',
            description: 'Master the fundamentals of AI for Virtual Assistants. In this course, you will learn how to use AI tools like ChatGPT to 10x your productivity.',
            level: 'BASIC',
            published: true,
            price: 0,
            modules: {
                create: [
                    {
                        title: 'Introduction to AI',
                        order: 1,
                        lessons: {
                            create: [
                                {
                                    title: 'What is AI and Why it Matters',
                                    content: 'AI is transforming the VA industry...',
                                    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
                                    order: 1
                                },
                                {
                                    title: 'Core Prompting Basics',
                                    content: '## The Perfect Prompt Formula\n\n1. Role\n2. Task\n3. Context\n4. Format',
                                    order: 2
                                }
                            ]
                        }
                    },
                    {
                        title: 'Practical Application',
                        order: 2,
                        lessons: {
                            create: [
                                {
                                    title: '5 Simple Prompts for Everyday Tasks',
                                    content: 'Here are 5 prompts you can use right now...',
                                    order: 1
                                }
                            ]
                        }
                    }
                ]
            }
        }
    })

    console.log({ basicCourse })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
