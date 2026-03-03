'use client';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Card } from '@/components/ui/Card/Card';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
// import { signIn } from 'next-auth/react'; // Client-side sign in if preferred, or use server action

export default function LoginPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb' }}>
            <Navbar />
            <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <Card style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Welcome Back</h1>
                        <p style={{ color: 'var(--muted-foreground)' }}>Sign in to aiTeam.ph</p>
                    </div>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', display: 'block' }}>Email</label>
                            <Input type="email" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', display: 'block' }}>Password</label>
                            <Input type="password" placeholder="••••••••" />
                        </div>
                        <Button type="submit" style={{ marginTop: '1rem' }}>Sign In</Button>
                    </form>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
                        <p style={{ color: 'var(--muted-foreground)' }}>
                            Don't have an account? <Link href="/register" style={{ color: 'var(--primary)', fontWeight: '500' }}>Sign up</Link>
                        </p>
                    </div>
                </Card>
            </main>
        </div>
    );
}
