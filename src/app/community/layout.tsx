import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Join the Community – Connect with Pinoy AI VAs | aiTeam.ph",
    description: "Join our free community for Filipino VAs. Network, share tips, get mentorship, celebrate wins, and grow together with AI-certified talent. Free Discord, FB group & more – start connecting today!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
