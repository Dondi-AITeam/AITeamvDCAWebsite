import { getCourse } from '@/lib/courses';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

export default async function CourseIntroPage({ params }: { params: Promise<{ courseId: string }> }) {
    const { courseId } = await params;
    const course = await getCourse(courseId);
    if (!course) return <div>Course not found</div>;

    const firstLesson = course.modules[0]?.lessons[0];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{course.title}</h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1.25rem', margin: '1rem 0 2rem' }}>
                {course.description}
            </p>

            {firstLesson ? (
                <Link href={`/learn/${course.id}/lesson/${firstLesson.id}`}>
                    <Button size="lg">
                        <PlayCircle size={20} style={{ marginRight: '0.5rem' }} />
                        Start Learning
                    </Button>
                </Link>
            ) : (
                <p>No lessons available yet.</p>
            )}
        </div>
    );
}
