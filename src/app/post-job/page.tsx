
import React from 'react';
import { Metadata } from 'next';
import PostJobWizard from './PostJobWizard';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'Post a Job & Hire AI-Certified Hybrid Talent | aiTeam.ph',
    description: 'Post your VA job in minutes and get matched to AI-powered talent from the Philippines. Easier than Upwork or LinkedIn – free to post, 7-day risk-free trial, save up to 70%.',
};

export default function PostJobPage() {
    // JSON-LD Schema for JobPosting (Template)
    // In a real app, this would be dynamic if viewing a specific job, 
    // but on the *posting* page, we can use WebPage or Service schema, 
    // or a generic JobPosting to indicate this IS a job board.
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Post a Job for AI-Certified Virtual Assistants",
        "description": "Post your job requirements and get matched with top 1% AI-trained talent from the Philippines.",
        "provider": {
            "@type": "Organization",
            "name": "aiTeam.ph",
            "url": "https://aiteam.ph"
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navbar />

            <div style={{ flex: 1 }}>
                <PostJobWizard />
            </div>

            <Footer />
        </div>
    );
}
