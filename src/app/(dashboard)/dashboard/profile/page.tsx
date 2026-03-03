import { auth } from '@/auth';
import prisma from '@/lib/prisma';
import { ProfileForm } from '@/components/marketplace/ProfileForm';

export default async function ProfilePage() {
    const session = await auth();
    if (!session?.user?.id) return <div style={{ padding: '2rem' }}>Access Denied. Please log in.</div>;

    const profile = await prisma.profile.findUnique({
        where: { userId: session.user.id }
    });

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Edit User Profile</h1>
            <ProfileForm profile={profile} />
        </div>
    );
}
