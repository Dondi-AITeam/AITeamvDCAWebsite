'use client';

import { useActionState } from 'react';
import { createJob } from '@/lib/actions/jobs';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Card } from '@/components/ui/Card/Card';
import { useFormStatus } from 'react-dom';

const initialState = {
    message: '',
    errors: {} as Record<string, string[]>,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return <Button type="submit" isLoading={pending}>Post Job</Button>;
}

export default function NewJobPage() {
    const [state, formAction] = useActionState(createJob, initialState);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Post a New Job</h1>
            <form action={formAction}>
                <Card style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {state.message && <p style={{ color: 'var(--destructive)' }}>{state.message}</p>}

                    <div>
                        <label>Job Title</label>
                        <Input name="title" placeholder="e.g. AI Content Writer Needed" error={!!state.errors?.title} />
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea
                            name="description"
                            style={{ width: '100%', minHeight: '150px', padding: '0.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--input)' }}
                            placeholder="Detailed job description..."
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label>Budget ($)</label>
                            <Input name="budget" type="number" placeholder="500" />
                        </div>
                        <div>
                            <label>Type</label>
                            <select name="type" style={{ width: '100%', height: '2.5rem', padding: '0 0.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--input)' }}>
                                <option value="FIXED">Fixed Price</option>
                                <option value="HOURLY">Hourly Rate</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <SubmitButton />
                    </div>
                </Card>
            </form>
        </div>
    );
}
