
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog | AI VA Tips, Career Growth & Hybrid Work Trends | aiTeam.ph",
    description: "Latest articles on AI tools for virtual assistants, career advice for Pinoy VAs, client success stories, and the future of hybrid teams. Free tips to earn more and work smarter.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-geist-sans)' }}>
            {children}
        </div>
    );
}

