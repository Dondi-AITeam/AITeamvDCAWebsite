'use client';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Card } from '@/components/ui/Card/Card';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Laptop, Briefcase, ChevronRight, Check } from 'lucide-react';

export default function RegisterPage() {
    const router = useRouter();
    const [step, setStep] = useState<'role' | 'form'>('role');
    const [role, setRole] = useState<'CLIENT' | 'VA'>('CLIENT');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            // 1. Register User
            const registerRes = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    role
                }),
            });

            if (!registerRes.ok) {
                const msg = await registerRes.text();
                throw new Error(msg || 'Registration failed');
            }

            // 2. Sign In automatically
            const signInRes = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });

            if (signInRes?.error) {
                throw new Error('Login failed after registration');
            }

            // 3. Redirect based on role
            if (role === 'VA') {
                router.push('/for-vas/dashboard'); // Or welcome page
            } else {
                router.push('/hire/dashboard'); // Or client welcome
            }

        } catch (err: any) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    if (step === 'role') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb', padding: '1rem' }}>
                <div style={{ width: '100%', maxWidth: '900px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>Join the AI Workforce</h1>
                        <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>Select your role to get started</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* VA Card */}
                        <Card
                            style={{
                                padding: '3rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                border: '2px solid transparent',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                height: '100%'
                            }}
                            className="hover:border-green-500 hover:shadow-lg"
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: '#f0fdf4',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <Laptop size={40} color="#28a745" />
                            </div>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>I'm a VA</h2>
                            <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.1rem', flexGrow: 1 }}>
                                Get free AI training, badges, job applications, and join a supportive community.
                            </p>
                            <Button
                                size="lg"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#28a745',
                                    borderColor: '#28a745',
                                    fontSize: '1.1rem',
                                    padding: '1rem'
                                }}
                                onClick={() => { setRole('VA'); setStep('form'); }}
                            >
                                Sign Up as VA
                            </Button>
                        </Card>

                        {/* Employer Card */}
                        <Card
                            style={{
                                padding: '3rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                border: '2px solid transparent',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                height: '100%'
                            }}
                            className="hover:border-blue-500 hover:shadow-lg"
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: '#eff6ff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <Briefcase size={40} color="#027bff" />
                            </div>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>I'm an Employer</h2>
                            <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.1rem', flexGrow: 1 }}>
                                Access certified AI VAs, post jobs for free, and save 50–70% on payroll.
                            </p>
                            <Button
                                size="lg"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#027bff',
                                    borderColor: '#027bff',
                                    fontSize: '1.1rem',
                                    padding: '1rem'
                                }}
                                onClick={() => { setRole('CLIENT'); setStep('form'); }}
                            >
                                Sign Up as Employer
                            </Button>
                        </Card>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <p style={{ color: '#6b7280' }}>
                            Already have an account? <Link href="/login" style={{ color: '#027bff', fontWeight: '600' }}>Log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb', padding: '1rem' }}>
            <Card style={{ width: '100%', maxWidth: '500px', padding: '2.5rem' }}>
                <button
                    onClick={() => setStep('role')}
                    style={{
                        marginBottom: '1.5rem',
                        background: 'none',
                        border: 'none',
                        color: '#6b7280',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem'
                    }}
                >
                    ← Back to role selection
                </button>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: role === 'VA' ? '#f0fdf4' : '#eff6ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                    }}>
                        {role === 'VA' ? <Laptop size={30} color="#28a745" /> : <Briefcase size={30} color="#027bff" />}
                    </div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                        Sign up as {role === 'VA' ? 'a VA' : 'an Employer'}
                    </h1>
                    <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
                        {role === 'VA'
                            ? "Correct! Let's get your profile started."
                            : "Excellent choice. Let's maximize your team."}
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem', display: 'block', color: '#374151' }}>First Name</label>
                            <Input name="firstName" placeholder="Jane" required style={{ padding: '0.75rem' }} />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem', display: 'block', color: '#374151' }}>Last Name</label>
                            <Input name="lastName" placeholder="Doe" required style={{ padding: '0.75rem' }} />
                        </div>
                    </div>

                    <div>
                        <label style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem', display: 'block', color: '#374151' }}>Email Address</label>
                        <Input name="email" type="email" placeholder="jane@example.com" required style={{ padding: '0.75rem' }} />
                    </div>

                    <div>
                        <label style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem', display: 'block', color: '#374151' }}>Password</label>
                        <Input name="password" type="password" placeholder="••••••••" required minLength={6} style={{ padding: '0.75rem' }} />
                    </div>

                    {error && (
                        <div style={{ padding: '0.75rem', backgroundColor: '#fef2f2', color: '#dc2626', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center' }}>
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        style={{
                            marginTop: '0.5rem',
                            width: '100%',
                            backgroundColor: role === 'VA' ? '#28a745' : '#027bff',
                            borderColor: role === 'VA' ? '#28a745' : '#027bff',
                            fontSize: '1.1rem',
                            padding: '0.875rem'
                        }}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                </form>

                <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
                    <p style={{ color: '#6b7280' }}>
                        Already have an account? <Link href="/login" style={{ color: role === 'VA' ? '#28a745' : '#027bff', fontWeight: '600' }}>Sign in</Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}
