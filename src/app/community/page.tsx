'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    MessageCircle,
    Facebook,
    Video,
    Layout,
    CheckCircle,
    Users,
    Star,
    Heart,
    ChevronDown,
    ChevronUp,
    Zap,
    Globe
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button/Button';

// Testimonial Data
const TESTIMONIALS = [
    {
        id: 1,
        name: "Jessa",
        location: "Quezon City",
        quote: "Joined Discord on day 1 — got my first client in a week thanks to prompt tips from seniors!",
        avatar: "/community/community_avatar_1.png"
    },
    {
        id: 2,
        name: "Carlo",
        location: "Davao",
        quote: "The FB group motivated me to finish Advanced AI — now earning $1,200/month part-time.",
        avatar: "/community/community_avatar_2.png"
    },
    {
        id: 3,
        name: "Rina",
        location: "Cebu",
        quote: "Monthly meetups gave me confidence to apply — landed a long-term US client!",
        avatar: "/community/community_avatar_3.png"
    },
    {
        id: 4,
        name: "Mark",
        location: "Manila",
        quote: "Community helped me fix my profile — doubled my interview rate.",
        avatar: "/community/community_avatar_4.png"
    }
];

// FAQ Data
const FAQS = [
    {
        question: "Is the community really free?",
        answer: "Yes — no fees to join any channel."
    },
    {
        question: "What if I'm just starting?",
        answer: "Perfect! Beginners are welcome — lots of tips for Basic AI and first jobs."
    },
    {
        question: "Are there rules?",
        answer: "Yes — respect, positivity, no spam. Moderated for safety."
    },
    {
        question: "Can I share job leads?",
        answer: "Yes — many members share opportunities and referrals."
    }
];

export default function CommunityPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // SEO Schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "aiTeam.ph VA Community",
        "url": "https://aiteam.ph/community",
        "logo": "https://aiteam.ph/logo.png",
        "sameAs": [
            "https://www.facebook.com/groups/aiteamph",
            "https://discord.gg/aiteamph"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "support@aiteam.ph"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-geist-sans)' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Navbar />

            <main>
                {/* Hero / Intro Section */}
                <section style={{
                    position: 'relative',
                    padding: '8rem 1.5rem',
                    textAlign: 'center',
                    backgroundColor: '#f0fdf4',
                    overflow: 'hidden'
                }}>
                    {/* Background Image Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '50%',
                        height: '100%',
                        opacity: 0.1,
                        pointerEvents: 'none',
                        zIndex: 0
                    }}>
                        <Image
                            src="/community/community_hero.png"
                            alt="Young Pinoy VAs celebrating together on video call"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            priority
                        />
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #f0fdf4 0%, #f0fdf4 50%, rgba(240, 253, 244, 0.8) 100%)',
                        zIndex: 1
                    }} />

                    <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#dcfce7',
                            color: '#166534',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            marginBottom: '1.5rem',
                            border: '1px solid #86efac'
                        }}>
                            <Users size={18} /> Join 15,000+ Filipino VAs
                        </div>

                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: '800',
                            color: '#111827',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2'
                        }}>
                            Join the <span style={{ color: '#28a745' }}>aiTeam.ph</span> VA Community
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: '#4b5563',
                            maxWidth: '800px',
                            margin: '0 auto 2.5rem',
                            lineHeight: '1.6'
                        }}>
                            You're not alone on this journey. Connect with thousands of Pinoy VAs who are mastering AI, earning more, and building amazing remote careers. Share tips, celebrate wins, get advice, and grow together — all 100% free.
                        </p>

                        {/* Key Benefits Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '1000px', margin: '0 auto 3rem' }}>
                            {[
                                { icon: <CheckCircle color="#28a745" />, text: "Free & Open" },
                                { icon: <Zap color="#eab308" />, text: "Daily Tips & Wins" },
                                { icon: <Users color="#027bff" />, text: "Mentorship & Networking" },
                                { icon: <Globe color="#16a34a" />, text: "Job Leads & Referrals" },
                                { icon: <Heart color="#dc2626" />, text: "Fun & Motivation" }
                            ].map((benefit, i) => (
                                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '1rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                    {benefit.icon}
                                    <span style={{ fontSize: '1rem', fontWeight: '600', color: '#374151' }}>{benefit.text}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="https://discord.gg/aiteamph" target="_blank">
                                <Button
                                    size="lg"
                                    style={{
                                        backgroundColor: '#28a745',
                                        borderColor: '#28a745',
                                        borderRadius: '50px',
                                        fontSize: '1.1rem',
                                        padding: '0.75rem 2.5rem',
                                        boxShadow: '0 4px 6px -1px rgba(40, 167, 69, 0.4)'
                                    }}
                                >
                                    Join the Community Now
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                style={{
                                    borderColor: '#027bff',
                                    color: '#027bff',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    padding: '0.75rem 2.5rem',
                                    backgroundColor: 'transparent'
                                }}
                                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                See What Members Are Saying
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Core Content: Community Channels */}
                <section style={{ padding: '6rem 1.5rem', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                                Where to Join & What to Expect
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                                Our community is your support system — a place to ask questions, share AI prompts, celebrate new clients, and grow together. Whether you're just starting with Basic AI or already an Advanced Expert, there's a place for you.
                            </p>
                        </div>

                        {/* Channels Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                            {/* Discord Channel */}
                            <div style={{
                                borderRadius: '20px',
                                border: '1px solid #e5e7eb',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}>
                                <div style={{ height: '200px', position: 'relative' }}>
                                    <Image
                                        src="/community/community_discord.png"
                                        alt="Photo of friends at a laptop/coffee shop collaborating"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
                                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                                        <div style={{ backgroundColor: '#5865F2', padding: '0.5rem', borderRadius: '12px' }}>
                                            <MessageCircle size={24} color="white" fill="white" />
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Discord Server</h3>
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                        Active daily chat, voice channels, AI prompt sharing, job leads, mentorship rooms, and live Q&A sessions.
                                    </p>
                                    <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {['Real-time help', 'Fast networking', 'Exclusive events'].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#374151', fontSize: '0.95rem' }}>
                                                <CheckCircle size={16} color="#28a745" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="https://discord.gg/aiteamph" target="_blank" style={{ marginTop: 'auto' }}>
                                        <Button style={{ width: '100%', backgroundColor: '#5865F2', borderColor: '#5865F2' }} size="lg">
                                            Join Discord Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Facebook Group */}
                            <div style={{
                                borderRadius: '20px',
                                border: '1px solid #e5e7eb',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}>
                                <div style={{ height: '200px', position: 'relative' }}>
                                    <Image
                                        src="/community/community_fb.png"
                                        alt="Casual group selfie of Pinoy VAs celebrating"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
                                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                                        <div style={{ backgroundColor: '#1877F2', padding: '0.5rem', borderRadius: '12px' }}>
                                            <Facebook size={24} color="white" fill="white" />
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Facebook Group</h3>
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                        Post wins, ask questions, share memes, celebrate payouts, and connect with Pinoy VAs in a friendly group.
                                    </p>
                                    <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {['Easy to join', 'Great for beginners', 'Lots of local support'].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#374151', fontSize: '0.95rem' }}>
                                                <CheckCircle size={16} color="#28a745" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="https://facebook.com/groups/aiteamph" target="_blank" style={{ marginTop: 'auto' }}>
                                        <Button style={{ width: '100%', backgroundColor: '#1877F2', borderColor: '#1877F2' }} size="lg">
                                            Join FB Group
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Channels Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '2.5rem' }}>
                            {/* Monthly Meetups */}
                            <div style={{
                                borderRadius: '20px',
                                border: '1px solid #e5e7eb',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            }}>
                                <div style={{ height: '180px', position: 'relative' }}>
                                    <Image
                                        src="/community/community_meetup.png"
                                        alt="Zoom call screenshot with smiling faces"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
                                        <div style={{ backgroundColor: '#f59e0b', padding: '0.5rem', borderRadius: '12px' }}>
                                            <Video size={24} color="white" />
                                        </div>
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Monthly VA Meetups</h3>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <p style={{ color: '#4b5563', marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.5' }}>
                                        Live Zoom sessions to share success stories, learn new AI tools, network with clients, and get inspired.
                                    </p>
                                    <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {['Face-to-face vibe', 'Guest speakers', 'Q&A with team'].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#374151', fontSize: '0.9rem' }}>
                                                <CheckCircle size={14} color="#28a745" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" style={{ width: '100%', marginTop: 'auto', borderRadius: '8px' }}>
                                        Get Meetup Updates
                                    </Button>
                                </div>
                            </div>

                            {/* In-App Feed */}
                            <div style={{
                                borderRadius: '20px',
                                border: '1px solid #e5e7eb',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            }}>
                                <div style={{ height: '180px', position: 'relative', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Layout size={64} color="#9ca3af" />
                                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#111827' }}>
                                        <div style={{ backgroundColor: '#111827', padding: '0.5rem', borderRadius: '12px' }}>
                                            <Layout size={24} color="white" />
                                        </div>
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>In-App Community Feed</h3>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <p style={{ color: '#4b5563', marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.5' }}>
                                        Post updates, share badges, ask for feedback, and see recent wins right in your aiTeam.ph dashboard.
                                    </p>
                                    <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {['No need to leave the platform', 'Private & safe', 'Coming soon'].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#374151', fontSize: '0.9rem' }}>
                                                <CheckCircle size={14} color="#28a745" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" style={{ width: '100%', marginTop: 'auto', borderRadius: '8px' }}>
                                        Log In to See Feed
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories / Testimonials */}
                <section id="testimonials" style={{ padding: '6rem 1.5rem', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '3rem', textAlign: 'center' }}>
                            What Our Community Members Say
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {TESTIMONIALS.map((testimonial) => (
                                <div key={testimonial.id} style={{
                                    backgroundColor: '#fff',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid #e5e7eb',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ position: 'relative', width: '80px', height: '80px', marginBottom: '1.5rem' }}>
                                        <Image
                                            src={testimonial.avatar}
                                            alt={`Avatar of ${testimonial.name}`}
                                            fill
                                            style={{ objectFit: 'cover', borderRadius: '50%' }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="#fbbf24" color="#fbbf24" />)}
                                    </div>
                                    <p style={{ fontSize: '1.05rem', color: '#374151', fontStyle: 'italic', marginBottom: '1.5rem', flexGrow: 1 }}>
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '1.1rem' }}>{testimonial.name}</div>
                                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>{testimonial.location}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section style={{ padding: '5rem 1.5rem', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', marginBottom: '2rem', textAlign: 'center' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {FAQS.map((faq, index) => (
                                <div key={index} style={{
                                    backgroundColor: '#f9fafb',
                                    borderRadius: '12px',
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
                                        {openFaq === index ? <ChevronUp size={20} color="#6b7280" /> : <ChevronDown size={20} color="#6b7280" />}
                                    </button>
                                    {openFaq === index && (
                                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#4b5563', lineHeight: '1.6' }}>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section style={{
                    position: 'relative',
                    padding: '8rem 1.5rem',
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: '#166534', // Fallback color
                    overflow: 'hidden'
                }}>
                    {/* Background Image Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.25,
                        pointerEvents: 'none',
                        zIndex: 0
                    }}>
                        <Image
                            src="/community/community_cta.png" // Group high-five
                            alt="Joyful group high-five or celebration moment"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(22, 101, 52, 0.9), rgba(22, 101, 52, 1))',
                        zIndex: 1
                    }} />

                    <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                            Ready to Join Thousands of Pinoy VAs?
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#e0e7ff', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
                            Connect, learn, grow, and earn more — together. Free, friendly, and full of opportunities.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <Link href="https://discord.gg/aiteamph" target="_blank">
                                <Button
                                    size="lg"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        color: '#166534',
                                        borderColor: '#ffffff',
                                        borderRadius: '50px',
                                        padding: '0.75rem 2.5rem',
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Join the Community Now
                                </Button>
                            </Link>
                            <Link href="/badges">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    style={{
                                        borderColor: '#ffffff',
                                        color: '#ffffff',
                                        borderRadius: '50px',
                                        padding: '0.75rem 2.5rem',
                                        fontSize: '1.1rem',
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    Start Free Training First
                                </Button>
                            </Link>
                        </div>

                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '1rem', color: '#bbf7d0', flexWrap: 'wrap', fontWeight: '500' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} /> 100% Free</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} /> Safe & Moderated Spaces</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Users size={18} /> Thousands of Pinoy VAs Already Connected</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
