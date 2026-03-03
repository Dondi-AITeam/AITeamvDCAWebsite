import { getCourse } from '@/lib/courses';
import Link from 'next/link';
import styles from './layout.module.css';

export default async function CourseLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ courseId: string }>;
}) {
    const { courseId } = await params;
    const course = await getCourse(courseId);

    if (!course) {
        return <div style={{ padding: '2rem' }}>Course not found</div>;
    }

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.header}>
                    <Link href="/dashboard/courses" className={styles.backLink}>← Dashboard</Link>
                    <h2 className={styles.courseTitle}>{course.title}</h2>
                </div>
                <nav className={styles.nav}>
                    {course.modules.map((module) => (
                        <div key={module.id} className={styles.module}>
                            <h4 className={styles.moduleTitle}>{module.title}</h4>
                            <ul className={styles.lessonList}>
                                {module.lessons.map((lesson) => (
                                    <li key={lesson.id}>
                                        <Link
                                            href={`/learn/${course.id}/lesson/${lesson.id}`}
                                            className={styles.lessonLink}
                                        >
                                            {lesson.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
