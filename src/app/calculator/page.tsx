import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import SavingsCalculatorClient from '../hire-hybrid-talent/savings-calculator/SavingsCalculatorClient';

export const metadata: Metadata = {
    title: 'Hybrid AI VA Savings Calculator | See Your Cost Reduction | aiTeam.ph',
    description: 'Calculate how much you save hiring AI-certified virtual assistants from the Philippines. Up to 70% lower costs + 2–3x productivity. Free 7-day trial. Discover your hybrid future today.',
};

export default function SavingsCalculatorAliasPage() {
    // Reusing the same Layout/Client component
    // Duplicating Schema here for full SEO benefit on both routes if indexed
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Hybrid AI VA Savings Calculator",
        "applicationCategory": "BusinessApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Calculate cost savings and productivity gains by hiring AI-certified virtual assistants from the Philippines."
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navbar />

            <main style={{ flex: 1 }}>
                <SavingsCalculatorClient />
            </main>

            <Footer />
        </div>
    );
}
