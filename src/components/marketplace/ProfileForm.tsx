'use client';

import { useActionState } from 'react';
import { updateProfile } from '@/lib/actions/profile';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Card } from '@/components/ui/Card/Card';
import { useFormStatus } from 'react-dom';

const initialState = {
    message: '',
    errors: {} as Record<string, string[]>,
    success: false,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" isLoading={pending}>
            Save Profile
        </Button>
    );
}

// Simple Textarea component for MVP
function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={className}
            style={{
                width: '100%',
                minHeight: '100px',
                padding: '0.5rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--input)',
                fontFamily: 'inherit',
                resize: 'vertical'
            }}
            {...props}
        />
    );
}

export function ProfileForm({ profile }: { profile: any }) {
    const [state, formAction] = useActionState(updateProfile, initialState);

    return (
        <form action={formAction}>
            <Card style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {state.success && (
                    <div style={{ padding: '1rem', backgroundColor: '#ecfdf5', color: '#047857', borderRadius: 'var(--radius)' }}>
                        {state.message}
                    </div>
                )}

                {state.message && !state.success && (
                    <div style={{ padding: '1rem', backgroundColor: '#fef2f2', color: '#991b1b', borderRadius: 'var(--radius)' }}>
                        {state.message}
                    </div>
                )}

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Professional Title</label>
                    <Input
                        name="title"
                        defaultValue={profile?.title || ''}
                        placeholder="e.g. AI-Enhanced Virtual Assistant"
                        error={!!state.errors?.title}
                    />
                    {state.errors?.title && <p style={{ color: 'var(--destructive)', fontSize: '0.875rem' }}>{state.errors.title[0]}</p>}
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Bio</label>
                    <Textarea
                        name="bio"
                        defaultValue={profile?.bio || ''}
                        placeholder="Describe your experience and AI skills..."
                    />
                    {state.errors?.bio && <p style={{ color: 'var(--destructive)', fontSize: '0.875rem' }}>{state.errors.bio[0]}</p>}
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Hourly Rate ($)</label>
                    <Input
                        name="hourlyRate"
                        type="number"
                        defaultValue={profile?.hourlyRate || ''}
                        placeholder="e.g. 15"
                        error={!!state.errors?.hourlyRate}
                    />
                    {state.errors?.hourlyRate && <p style={{ color: 'var(--destructive)', fontSize: '0.875rem' }}>{state.errors.hourlyRate[0]}</p>}
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Skills (comma separated)</label>
                    <Input
                        name="skills"
                        defaultValue={profile?.skills?.join(', ') || ''}
                        placeholder="e.g. ChatGPT, Notion, Python, copywriting"
                        error={!!state.errors?.skills}
                    />
                    {state.errors?.skills && <p style={{ color: 'var(--destructive)', fontSize: '0.875rem' }}>{state.errors.skills[0]}</p>}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <SubmitButton />
                </div>
            </Card>
        </form>
    );
}
