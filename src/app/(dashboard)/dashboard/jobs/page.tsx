import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';

export default function JobsPage() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Jobs</h1>
                <Link href="/dashboard/jobs/new">
                    <Button>Post a New Job</Button>
                </Link>
            </div>
            <p>No jobs posted yet.</p>
        </div>
    );
}
