import { Card } from '@/components/ui/Card/Card';

export default function DashboardPage() {
    return (
        <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Dashboard</h1>
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <Card>
                    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Active Courses</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>1</p>
                </Card>
                <Card>
                    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Completed Certifications</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>0</p>
                </Card>
                <Card>
                    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Job Applications</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>0</p>
                </Card>
            </div>
        </div>
    );
}
