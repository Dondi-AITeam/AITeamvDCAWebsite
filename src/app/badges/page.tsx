'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Award,
    CheckCircle,
    Zap,
    TrendingUp,
    ShieldCheck,
    Rocket,
    ChevronDown,
    ChevronUp,
    Star,
    Users
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button/Button';

// Badge Data
const BADGES = [
    {
        id: 'basic-ai',
        name: 'Basic AI Certified',
        description: 'Master prompt basics with ChatGPT/Claude.',
        time: '2 hours',
        benefit: 'Instant profile boost + entry to marketplace',
        image: '/badges/badge_basic_ai.png',
        status: 'Start This Badge'
    },
    {
        id: 'intermediate-ai',
        name: 'Intermediate AI Pro',
        description: 'Advanced prompting, Zapier automation, Notion AI.',
        time: '8–12 hours total',
        benefit: 'Higher search ranking + priority client matches',
        image: '/badges/badge_intermediate_ai.png',
        status: 'Start This Badge'
    },
    {
        id: 'advanced-ai',
        name: 'Advanced AI Expert',
        description: 'Agentic workflows, custom AI tools, industry capstones.',
        time: '15–25 hours total',
        benefit: 'Elite tier, top visibility, higher rates',
        image: '/badges/badge_advanced_ai.png',
        status: 'Start This Badge'
    },
    {
        id: 'spoken-english',
        name: 'Spoken English Proficiency',
        description: 'B1–B2 level verified (AI or video assessment).',
        time: '10–20 min assessment',
        benefit: 'Clients filter for clear communication',
        image: '/badges/badge_english_spoken.png',
        status: 'Start This Badge'
    },
    {
        id: 'written-english',
        name: 'Written English Proficiency',
        description: 'B1–B2 level verified (grammar/vocab test).',
        time: '10–20 min assessment',
        benefit: 'Stronger written task credibility',
        image: '/badges/badge_english_written.png',
        status: 'Start This Badge'
    },
    {
        id: 'real-estate-ai',
        name: 'Real Estate AI Specialist',
        description: 'Master AI tools for Real Estate workflows.',
        time: '8–20 hours',
        benefit: 'Targeted visibility in Real Estate',
        image: '/badges/badge_real_estate.png',
        status: 'Start This Badge'
    }
];

// FAQ Data
const FAQS = [
    {
        question: "Is training really free?",
        answer: "Yes — 100% free for all Filipino VAs."
    },
    {
        question: "How long to earn a badge?",
        answer: "Basic AI: 2 hours; Intermediate: 8–12 hours; Advanced: 15–25 hours."
    },
    {
        question: "Do badges help get jobs?",
        answer: "Yes — certified VAs get priority visibility and higher rates."
    },
    {
        question: "Can I share badges?",
        answer: "Yes — QR-verifiable and LinkedIn-ready."
    }
];

export default function EarnBadgesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // SEO Schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": BADGES.map((badge, index) => ({
            "@type": "Course",
            "position": index + 1,
            "name": badge.name,
            "description": badge.description,
            "provider": {
                "@type": "Organization",
                "name": "aiTeam.ph",
                "sameAs": "https://aiteam.ph"
            },
            "educationalCredentialAwarded": badge.name,
            "image": `https://aiteam.ph${badge.image}`
        }))
    };

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-geist-sans)' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <Navbar />

            <main>
                {/* Hero / Intro Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                    padding: '8rem 1.5rem',
                    textAlign: 'center',
                    borderBottom: '1px solid #bbf7d0'
                }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: '800',
                            color: '#111827',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2'
                        }}>
                            Earn Free AI Badges & Certifications <br />
                            <span style={{ color: '#28a745' }}>Level Up Your VA Career</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#4b5563',
                            maxWidth: '780px',
                            margin: '0 auto 2.5rem',
                            lineHeight: '1.6'
                        }}>
                            Build world-class credentials in AI skills and English proficiency — all 100% free. Stack badges to stand out, get priority matches, and earn 25–50% more with global clients.
                        </p>

                        {/* Key Benefits Grid */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '1000px', margin: '0 auto 3rem' }}>
                            {[
                                { icon: <CheckCircle color="#28a745" />, text: "100% Free – No fees, no catch" },
                                { icon: <Zap color="#eab308" />, text: "Quick Wins – Basic AI badge in 2 hrs" },
                                { icon: <ShieldCheck color="#027bff" />, text: "Verifiable & LinkedIn-ready" },
                                { icon: <TrendingUp color="#16a34a" />, text: "Earn 25–50% More" },
                                { icon: <Rocket color="#dc2626" />, text: "Fast-Track Jobs" }
                            ].map((benefit, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {benefit.icon}
                                    <span style={{ fontSize: '1rem', fontWeight: '600', color: '#374151' }}>{benefit.text}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/for-vas/start-free-training">
                                <Button
                                    size="lg"
                                    style={{
                                        backgroundColor: '#28a745',
                                        borderColor: '#28a745',
                                        borderRadius: '50px',
                                        boxShadow: '0 4px 6px -1px rgba(40, 167, 69, 0.3)',
                                        fontSize: '1.1rem',
                                        padding: '0.75rem 2.5rem'
                                    }}
                                >
                                    Start Free Training Now
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                style={{
                                    borderColor: '#027bff',
                                    color: '#027bff',
                                    borderRadius: '50px',
                                    backgroundColor: 'transparent',
                                    fontSize: '1.1rem',
                                    padding: '0.75rem 2.5rem'
                                }}
                                onClick={() => document.getElementById('badge-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                See All Badges
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Core Content: Badge Showcase */}
                <section id="badge-showcase" style={{ padding: '6rem 1.5rem', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                                Your Path to AI-Powered VA Success
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                                Complete short, practical training modules to earn badges that prove your skills. Each badge is verifiable, shareable on LinkedIn/Facebook, and boosts your profile visibility to clients. Start with Basic AI (2 hours) and stack as many as you want — the more you earn, the faster you get hired.
                            </p>
                        </div>

                        {/* Badge Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2rem'
                        }}>
                            {BADGES.map((badge) => (
                                <div key={badge.id} style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    padding: '2rem',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
                                    }}
                                >
                                    <div style={{
                                        position: 'relative',
                                        width: '120px',
                                        height: '120px',
                                        marginBottom: '1.5rem',
                                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                                    }}>
                                        <Image
                                            src={badge.image}
                                            alt={`${badge.name} Badge Icon`}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>

                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>{badge.name}</h3>
                                    <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.5', minHeight: '3em' }}>
                                        {badge.description}
                                    </p>

                                    <div style={{ width: '100%', marginTop: 'auto', backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '12px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#4b5563', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.5rem' }}>
                                            <span>Time:</span>
                                            <span style={{ fontWeight: '600' }}>{badge.time}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '1rem', color: '#4b5563' }}>
                                            <span>Config:</span>
                                            <span style={{ fontWeight: '600', color: '#027bff' }}>{badge.benefit}</span>
                                        </div>
                                        <Button
                                            style={{
                                                width: '100%',
                                                backgroundColor: '#28a745',
                                                borderColor: '#28a745',
                                                borderRadius: '8px',
                                                fontWeight: '600'
                                            }}
                                            // Mock Link
                                            onClick={() => { }}
                                        >
                                            {badge.status}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Earn Badges Section */}
                <section style={{ padding: '6rem 1.5rem', backgroundColor: '#fff' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '3rem', textAlign: 'center' }}>
                            How to Earn Your Badges
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                            {[
                                { title: "1. Sign Up Free", desc: "Create your profile in 30 seconds." },
                                { title: "2. Check English", desc: "Optional quick assessment (15 mins)." },
                                { title: "3. Start Basic AI", desc: "Watch videos & take the quiz (2 hrs)." },
                                { title: "4. Earn Badge", desc: "Pass and get your digital badge instantly." },
                                { title: "5. Stack More", desc: "Unlock Intermediate, Advanced & Industry modules." },
                                { title: "6. Get Hired", desc: "Badges appear on your profile for clients to see." }
                            ].map((step, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        backgroundColor: '#e6fffa',
                                        color: '#0d9488',
                                        minWidth: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '0.4rem', fontSize: '1.1rem' }}>{step.title}</h4>
                                        <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: '1.5' }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{
                            marginTop: '4rem',
                            padding: '2.5rem',
                            backgroundColor: '#f0fdf4',
                            borderRadius: '20px',
                            border: '1px solid #bbf7d0',
                            textAlign: 'center'
                        }}>
                            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <Star fill="#166534" size={28} />
                                "VAs with 3+ badges get 3× more profile views and land jobs faster. You’re next!"
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section style={{ padding: '6rem 1.5rem', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#111827', marginBottom: '2.5rem', textAlign: 'center' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {FAQS.map((faq, index) => (
                                <div key={index} style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '16px',
                                    border: '1px solid #e5e7eb',
                                    overflow: 'hidden'
                                }}>
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        style={{
                                            width: '100%',
                                            padding: '1.5rem',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            fontWeight: '600',
                                            fontSize: '1.1rem',
                                            color: '#111827'
                                        }}
                                    >
                                        {faq.question}
                                        {openFaq === index ? <ChevronUp size={24} color="#6b7280" /> : <ChevronDown size={24} color="#6b7280" />}
                                    </button>
                                    {openFaq === index && (
                                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#4b5563', lineHeight: '1.6', fontSize: '1rem' }}>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section style={{ padding: '8rem 1.5rem', backgroundColor: '#fff', textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#111827', marginBottom: '1.5rem' }}>
                            Ready to Earn Your First Badge?
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                            Start free today — Basic AI certification takes just 2 hours. Unlock higher pay and better clients.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            <Link href="/for-vas/start-free-training">
                                <Button
                                    size="lg"
                                    style={{
                                        backgroundColor: '#28a745',
                                        borderColor: '#28a745',
                                        borderRadius: '50px',
                                        padding: '0.75rem 3rem',
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 10px 15px -3px rgba(40, 167, 69, 0.4)'
                                    }}
                                >
                                    Start Free AI Training Now
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                style={{
                                    borderColor: '#027bff',
                                    color: '#027bff',
                                    borderRadius: '50px',
                                    padding: '0.75rem 3rem',
                                    fontSize: '1.2rem',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                See All Certification Paths
                            </Button>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '1rem', color: '#6b7280', flexWrap: 'wrap', fontWeight: '500' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={20} color="#28a745" /> 100% Free</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={20} color="#027bff" /> Verifiable Digital Badges</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Users size={20} color="#111827" /> Join 5,000+ Pinoy VAs</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
