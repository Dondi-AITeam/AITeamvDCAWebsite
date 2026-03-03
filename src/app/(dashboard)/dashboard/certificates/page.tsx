import { Card } from '@/components/ui/Card/Card';

export default function CertificatesPage() {
    return (
        <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>My Certifications</h1>
            <Card>
                <p>No certifications earned yet. Complete a course to earn your first badge!</p>
            </Card>
        </div>
    );
}
