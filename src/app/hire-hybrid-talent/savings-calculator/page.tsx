import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import SavingsCalculatorClient from './SavingsCalculatorClient';

export const metadata: Metadata = {
    title: 'Hybrid AI VA Savings Calculator | See Your Cost Reduction | aiTeam.ph',
    description: 'Calculate how much you save hiring AI-certified virtual assistants from the Philippines. Up to 70% lower costs + 2–3x productivity. Free 7-day trial. Discover your hybrid future today.',
};

export default function SavingsCalculatorPage() {
    // JSON-LD Schema
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
        "description": "Calculate cost savings and productivity gains by hiring AI-certified virtual assistants from the Philippines.",
        "operatingSystem": "Web",
        "browserRequirements": "Requires JavaScript. Optimized for all modern browsers.",
        "softwareHelp": {
            "@type": "CreativeWork",
            "url": "https://aiteam.ph/hire-hybrid-talent/savings-calculator"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "How much can I save with an AI-certified VA?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most clients save between 50% to 70% compared to local hiring costs, while gaining 2-3x productivity through AI automation."
            }
        }, {
            "@type": "Question",
            "name": "Are the Philippines VA rates accurate?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our calculator uses 2026 market benchmarks for screened, AI-certified talent in the Philippines, including all platform fees."
            }
        }]
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Navbar />

            <main style={{ flex: 1 }}>
                <SavingsCalculatorClient />
            </main>

            <Footer />
        </div>
    );
}
