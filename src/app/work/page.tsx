import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import { GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

export default function WorkPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <main>
                {/* Hero */}
                <section style={{ padding: '6rem 2rem', textAlign: 'center', background: '#f0f9ff' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                            Future-Proof Your Career with <span style={{ color: 'var(--secondary)' }}>AI</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', marginBottom: '2.5rem' }}>
                            Join the elite network of AI-upskilled Virtual Assistants. Free training, higher rates, and premium global clients.
                        </p>
                        <Link href="/register">
                            <Button size="lg">Join aiTeam.ph Today</Button>
                        </Link>
                    </div>
                </section>

                {/* Benefits */}
                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <GraduationCap size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Free AI Certification</h3>
                            <p style={{ color: 'var(--muted-foreground)' }}>Master ChatGPT, Midjourney, and more with our integrated LMS. Get certified and stand out.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <TrendingUp size={48} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Earn Higher Rates</h3>
                            <p style={{ color: 'var(--muted-foreground)' }}>AI-skilled VAs earn 30-50% more than traditional VAs. Unlock your earning potential.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Briefcase size={48} style={{ color: 'var(--foreground)', marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Direct Client Access</h3>
                            <p style={{ color: 'var(--muted-foreground)' }}>No middlemen taking a cut. Work directly with top global companies.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
