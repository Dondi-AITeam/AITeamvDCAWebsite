import { getLesson } from '@/lib/courses';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import { Quiz } from '@/components/lms/Quiz';

export default async function LessonPage({ params }: { params: Promise<{ courseId: string; lessonId: string }> }) {
    const { lessonId, courseId } = await params;
    const lesson = await getLesson(lessonId);
    if (!lesson) return <div>Lesson not found</div>;

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 'bold' }}>{lesson.title}</h1>

            {lesson.videoUrl && (
                <div style={{ aspectRatio: '16/9', backgroundColor: '#000', marginBottom: '2rem', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                    {/* Placeholder for real video player */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#fff', flexDirection: 'column', gap: '1rem' }}>
                        <p>Video Player Placeholder</p>
                        <a href={lesson.videoUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                            Watch on Source
                        </a>
                    </div>
                </div>
            )}

            {lesson.content && (
                <div className="prose" style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '3rem' }}>
                    {lesson.content.split('\n').map((line, i) => (
                        <p key={i} style={{ marginBottom: '1em' }}>{line}</p>
                    ))}
                </div>
            )}

            {lesson.quiz && lesson.quiz.questions.length > 0 && (
                // @ts-ignore
                <Quiz lessonId={lesson.id} questions={lesson.quiz.questions} />
            )}

            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <Button variant="outline" disabled>Previous Lesson</Button>
                <Button>Next Lesson</Button>
            </div>
        </div>
    );
}
