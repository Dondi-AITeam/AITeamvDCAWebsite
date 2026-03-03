import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AiTeam Academy',
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
