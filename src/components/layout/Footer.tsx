import Link from 'next/link';

export function Footer() {
    return (
        <footer style={{ borderTop: '1px solid var(--border)', padding: '4rem 2rem', marginTop: 'auto', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem' }}><span style={{ color: 'var(--secondary)' }}>ai</span>Team.ph</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>The Philippines' AI VA Powerhouse.</p>
                </div>
                <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Platform</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><Link href="/hire" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>Hire Talent</Link></li>
                        <li><Link href="/work" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>Find Work</Link></li>
                        <li><Link href="/dashboard/courses" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>Free Training</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Company</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><Link href="/about" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>About Us</Link></li>
                        <li><Link href="/contact" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>Contact</Link></li>
                        <li><Link href="/privacy" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div style={{ maxWidth: '1200px', margin: '2rem auto 0', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                &copy; {new Date().getFullYear()} aiTeam.ph. All rights reserved.
            </div>
        </footer>
    );
}
