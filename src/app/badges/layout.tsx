import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Earn AI Badges & Certifications – Free for Pinoy VAs | aiTeam.ph",
    description: "Get free AI certifications (Basic to Advanced) + English proficiency badges. Stack credentials to boost your profile, attract higher-paying clients, and land jobs faster. Start today – 100% free for Filipino VAs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
