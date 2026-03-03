'use client';

import { Button } from '@/components/ui/Button/Button';
import { useParams } from 'next/navigation';

export default function CertificateViewPage() {
    const params = useParams();
    const id = params?.id;

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{
                border: '10px solid var(--primary)',
                padding: '4rem',
                maxWidth: '800px',
                margin: '0 auto',
                background: '#fff',
                color: '#000',
                fontFamily: 'serif'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Certificate of Completion</h1>
                <p style={{ fontSize: '1.5rem' }}>This certifies that</p>
                <h2 style={{ fontSize: '2.5rem', margin: '1rem 0', textDecoration: 'underline' }}>[Student Name]</h2>
                <p style={{ fontSize: '1.5rem' }}>has successfully completed the course</p>
                <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>Basic AI Certification</h2>
                <p style={{ fontSize: '1.25rem' }}>on {new Date().toLocaleDateString()}</p>

                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', padding: '0 4rem' }}>
                    <div style={{ borderTop: '1px solid #000', paddingTop: '0.5rem', width: '200px' }}>Signature</div>
                    <div style={{ borderTop: '1px solid #000', paddingTop: '0.5rem', width: '200px' }}>aiTeam.ph</div>
                </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button onClick={() => window.print()}>Print Certificate</Button>
            </div>
        </div>
    );
}
