import { getCourses } from '@/lib/courses';
import { Card } from '@/components/ui/Card/Card';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';

export default async function CoursesPage() {
    const courses = await getCourses();

    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Available Courses</h1>
            </header>

            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                {courses.length === 0 ? (
                    <p>No courses available yet.</p>
                ) : (
                    courses.map(course => (
                        <Card key={course.id} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>{course.title}</h3>
                                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>{course.description}</p>
                            </div>
                            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                                <Link href={`/learn/${course.id}`}>
                                    <Button size="sm">Start Learning</Button>
                                </Link>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
