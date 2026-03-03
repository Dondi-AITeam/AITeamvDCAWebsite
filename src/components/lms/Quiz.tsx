'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import styles from './Quiz.module.css';

type Question = {
    id: string;
    text: string;
    options: string[];
    correctOption: number;
};

export function Quiz({ lessonId, questions, onComplete }: {
    lessonId: string;
    questions: Question[];
    onComplete?: (score: number, passed: boolean) => void;
}) {
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleSubmit = () => {
        let correct = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correctOption) correct++;
        });
        const finalScore = (correct / questions.length) * 100;
        setScore(finalScore);
        setSubmitted(true);

        const passed = finalScore >= 80;
        if (onComplete) onComplete(finalScore, passed);
    };

    const handleRetry = () => {
        setSubmitted(false);
        setAnswers({});
        setScore(0);
    };

    if (!questions || questions.length === 0) return null;

    return (
        <div className={styles.quiz}>
            <h2 className={styles.title}>Quiz Assessment</h2>
            <div className={styles.questionList}>
                {questions.map((q, idx) => (
                    <Card key={q.id} className={styles.questionCard}>
                        <p className={styles.questionText}><strong>{idx + 1}.</strong> {q.text}</p>
                        <div className={styles.options}>
                            {q.options.map((opt, i) => (
                                <label key={i} className={styles.option}>
                                    <input
                                        type="radio"
                                        name={q.id}
                                        value={i}
                                        checked={answers[q.id] === i}
                                        onChange={() => setAnswers(prev => ({ ...prev, [q.id]: i }))}
                                        disabled={submitted}
                                        className={styles.radio}
                                    />
                                    <span className={styles.optionText}>{opt}</span>
                                </label>
                            ))}
                        </div>
                        {submitted && answers[q.id] !== q.correctOption && (
                            <p className={styles.incorrect}>Correct answer: {q.options[q.correctOption]}</p>
                        )}
                    </Card>
                ))}
            </div>

            <div className={styles.actions}>
                {!submitted ? (
                    <Button onClick={handleSubmit} disabled={Object.keys(answers).length < questions.length}>
                        Submit Answers
                    </Button>
                ) : (
                    <div className={styles.result}>
                        <h3 className={score >= 80 ? styles.passText : styles.failText}>
                            You scored {score.toFixed(0)}%
                        </h3>
                        {score >= 80 ? (
                            <p className={styles.passMessage}>Congratulations! You have passed this lesson.</p>
                        ) : (
                            <div className={styles.failContainer}>
                                <p className={styles.failMessage}>You need 80% to pass. Please review the material and try again.</p>
                                <Button onClick={handleRetry} variant="outline">
                                    Retry Quiz
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
