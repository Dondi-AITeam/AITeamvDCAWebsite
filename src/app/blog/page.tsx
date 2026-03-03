'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Search,
    ChevronDown,
    ChevronUp,
    Clock,
    User,
    Calendar,
    ArrowRight,
    Mail,
    Filter
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button/Button';

// Blog Post Data (Mock)
const BLOG_POSTS = [
    {
        id: 1,
        title: "5 AI Prompts Every VA Needs in 2026 (Save 10+ Hours/Week)",
        category: "AI Tips",
        excerpt: "These ChatGPT & Claude prompts will automate your most time-consuming tasks — copy-paste ready for Pinoy VAs...",
        image: "/blog/blog_ai_prompts.png",
        author: "aiTeam.ph Team",
        date: "Feb 15, 2026",
        readTime: "5 min read",
        featured: true
    },
    {
        id: 2,
        title: "From ₱15k to ₱80k/month: How I Used AI Badges to 5× My Income",
        category: "Success Stories",
        excerpt: "Maria from Cebu shares her journey — Basic AI badge → first client → Advanced certification → full-time remote freedom...",
        image: "/blog/blog_success_story.png",
        author: "Maria S.",
        date: "Feb 12, 2026",
        readTime: "7 min read",
        featured: true
    },
    {
        id: 3,
        title: "The Future Is Hybrid: Why Clients Are Paying More for AI-Trained VAs",
        category: "Hybrid Work",
        excerpt: "2026 trends show clients value AI skills — here's how to position yourself and charge premium rates...",
        image: "/blog/blog_hybrid_work.png",
        author: "Sarah J.",
        date: "Feb 10, 2026",
        readTime: "6 min read",
        featured: true
    },
    {
        id: 4,
        title: "Top 10 Free AI Tools Pinoy VAs Are Using Right Now",
        category: "AI Tips",
        excerpt: "Notion AI, Zapier, Claude, Canva Magic Studio — quick overview + how to get started today...",
        image: "/blog/blog_ai_tools.png",
        author: "aiTeam.ph Team",
        date: "Feb 8, 2026",
        readTime: "4 min read",
        featured: true
    },
    // Mock additional posts for the grid
    {
        id: 5,
        title: "How to Optimize Your VA Profile for Better Matches",
        category: "Career Growth",
        excerpt: "Learn the keywords clients are searching for and how to showcase your AI badges effectively.",
        image: "/blog/blog_ai_prompts.png", // Reuse for mock
        author: "aiTeam.ph Team",
        date: "Feb 5, 2026",
        readTime: "5 min read",
        featured: false
    },
    {
        id: 6,
        title: "Balancing Multiple Clients: Schedule Management Tips",
        category: "Career Growth",
        excerpt: "Expert advice on managing time zones, deadlines, and communication without burning out.",
        image: "/blog/blog_hybrid_work.png", // Reuse for mock
        author: "Chris L.",
        date: "Feb 1, 2026",
        readTime: "6 min read",
        featured: false
    }
];

const CATEGORIES = ["All", "AI Tips", "Career Growth", "Success Stories", "Hybrid Work", "Tools & Resources"];

// FAQ Data
const FAQS = [
    {
        question: "How often do you post new articles?",
        answer: "Weekly — always free and practical."
    },
    {
        question: "Can I suggest topics?",
        answer: "Yes! Join the community and share your ideas."
    },
    {
        question: "Are the tips beginner-friendly?",
        answer: "Yes — from Basic AI to advanced workflows."
    }
];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const filteredPosts = selectedCategory === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === selectedCategory);

    const featuredPosts = BLOG_POSTS.filter(post => post.featured);

    // SEO Schema for Featured Post
    const featuredPostSchema = featuredPosts.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": featuredPosts[0].title,
        "image": `https://aiteam.ph${featuredPosts[0].image}`,
        "author": {
            "@type": "Person",
            "name": featuredPosts[0].author
        },
        "publisher": {
            "@type": "Organization",
            "name": "aiTeam.ph",
            "logo": {
                "@type": "ImageObject",
                "url": "https://aiteam.ph/logo.png"
            }
        },
        "datePublished": "2026-02-15",
        "description": featuredPosts[0].excerpt
    } : {};

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-geist-sans)' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredPostSchema) }}
            />

            <Navbar />

            <main>
                {/* Hero / Intro Section */}
                <section style={{
                    padding: '8rem 1.5rem',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    borderBottom: '1px solid #f3f4f6'
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-block',
                            backgroundColor: '#f0fdf4',
                            color: '#166534',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            border: '1px solid #bbf7d0'
                        }}>
                            New Articles Every Week
                        </div>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: '800',
                            color: '#111827',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2'
                        }}>
                            aiTeam.ph Blog – <br />
                            <span style={{ color: '#28a745' }}>Level Up Your Skills & Career</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#4b5563',
                            maxWidth: '700px',
                            margin: '0 auto 2.5rem',
                            lineHeight: '1.6'
                        }}>
                            Practical AI tips, success stories from Pinoy VAs, career advice, and insights on building high-output hybrid teams. Free resources to help you earn more and work smarter.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button
                                size="lg"
                                style={{
                                    backgroundColor: '#28a745',
                                    borderColor: '#28a745',
                                    borderRadius: '50px',
                                    padding: '0.75rem 2.5rem',
                                    fontSize: '1.1rem'
                                }}
                                onClick={() => document.getElementById('featured-posts')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Start Reading Now
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                style={{
                                    borderColor: '#027bff',
                                    color: '#027bff',
                                    borderRadius: '50px',
                                    padding: '0.75rem 2.5rem',
                                    fontSize: '1.1rem',
                                    backgroundColor: 'transparent'
                                }}
                                onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Subscribe for Updates
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Featured Posts Section */}
                <section id="featured-posts" style={{ padding: '6rem 1.5rem', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827' }}>Featured Stories</h2>
                        </div>

                        {/* Horizontal Scroll Container for Mobile */}
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            overflowX: 'auto',
                            paddingBottom: '2rem',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            // Styles for hiding scrollbar but keeping functionality
                            WebkitOverflowScrolling: 'touch'
                        }}>
                            {featuredPosts.map((post) => (
                                <div key={post.id} style={{
                                    minWidth: '320px',
                                    maxWidth: '380px',
                                    flex: '0 0 auto', // Prevent shrinking
                                    backgroundColor: '#fff',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid #e5e7eb',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            left: '1rem',
                                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                            color: '#111827',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600'
                                        }}>
                                            {post.category}
                                        </div>
                                    </div>
                                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                                            {post.title}
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.5', flexGrow: 1 }}>
                                            {post.excerpt}
                                        </p>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#9ca3af', marginBottom: '1rem' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={14} /> {post.author}</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <Link href="#" style={{ color: '#027bff', fontWeight: '600', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            Read Article <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content Area: Sidebar + Grid */}
                <section style={{ padding: '6rem 1.5rem', backgroundColor: '#fff' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                        {/* Main Grid Section (Left/Top) */}
                        <div style={{ gridColumn: 'span 2' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827' }}>Latest Articles</h2>
                                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', maxWidth: '100%' }}>
                                    {CATEGORIES.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '20px',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                border: selectedCategory === cat ? '1px solid #28a745' : '1px solid #e5e7eb',
                                                backgroundColor: selectedCategory === cat ? '#f0fdf4' : '#fff',
                                                color: selectedCategory === cat ? '#166534' : '#4b5563',
                                                cursor: 'pointer',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                                {filteredPosts.map((post) => (
                                    <div key={post.id} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ position: 'relative', height: '200px', borderRadius: '12px', overflow: 'hidden' }}>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div>
                                            <div style={{ color: '#027bff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>{post.category}</div>
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                                                {post.title}
                                            </h3>
                                            <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1rem', lineHeight: '1.5' }}>
                                                {post.excerpt}
                                            </p>
                                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#9ca3af' }}>
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination Mock */}
                            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                                <Button variant="outline" size="sm" disabled>Previous</Button>
                                <Button style={{ backgroundColor: '#28a745', borderColor: '#28a745', color: '#fff' }} size="sm">1</Button>
                                <Button variant="outline" size="sm">2</Button>
                                <Button variant="outline" size="sm">3</Button>
                                <Button variant="outline" size="sm">Next</Button>
                            </div>
                        </div>

                        {/* Sidebar (Right/Bottom) */}
                        <div style={{ gridColumn: 'span 1' }}>
                            {/* Subscribe Box */}
                            <div id="subscribe" style={{
                                backgroundColor: '#f0fdf4',
                                borderRadius: '16px',
                                padding: '2rem',
                                border: '1px solid #bbf7d0',
                                marginBottom: '3rem'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534', marginBottom: '1rem' }}>
                                    Get Weekly AI Tips
                                </h3>
                                <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
                                    Join 15,000+ VAs getting exclusive prompts, tips, and job alerts.
                                </p>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '8px',
                                        border: '1px solid #d1d5db',
                                        marginBottom: '1rem',
                                        fontSize: '1rem'
                                    }}
                                />
                                <Button style={{ width: '100%', backgroundColor: '#28a745', borderColor: '#28a745' }}>
                                    Subscribe Free
                                </Button>
                            </div>

                            {/* Popular Posts */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem', borderBottom: '2px solid #28a745', paddingBottom: '0.5rem', display: 'inline-block' }}>
                                    Popular Posts
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {BLOG_POSTS.slice(0, 3).map((post, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e5e7eb' }}>0{i + 1}</div>
                                            <div>
                                                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#374151', lineHeight: '1.4', marginBottom: '0.25rem' }}>
                                                    {post.title}
                                                </h4>
                                                <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{post.readTime}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Community Callout */}
                            <div style={{
                                backgroundColor: '#eff6ff',
                                borderRadius: '16px',
                                padding: '2rem',
                                border: '1px solid #dbeafe',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>
                                    Join the Community
                                </h3>
                                <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                    Loving the tips? Join our Discord & FB group to ask questions and share your wins!
                                </p>
                                <Link href="/community">
                                    <Button variant="outline" style={{ width: '100%', borderColor: '#1e40af', color: '#1e40af', backgroundColor: 'transparent' }}>
                                        Join Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section style={{ padding: '6rem 1.5rem', backgroundColor: '#fff', textAlign: 'center', borderTop: '1px solid #f3f4f6' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                            Ready to Level Up?
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2.5rem' }}>
                            New articles every week to help you earn more, work smarter, and build the remote career you deserve.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button
                                size="lg"
                                style={{
                                    backgroundColor: '#28a745',
                                    borderColor: '#28a745',
                                    borderRadius: '50px',
                                    padding: '0.75rem 2.5rem',
                                    fontSize: '1.1rem'
                                }}
                                onClick={() => document.getElementById('featured-posts')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Start Reading Now
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                style={{
                                    borderColor: '#027bff',
                                    color: '#027bff',
                                    borderRadius: '50px',
                                    padding: '0.75rem 2.5rem',
                                    fontSize: '1.1rem',
                                    backgroundColor: 'transparent'
                                }}
                                onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Subscribe for Updates
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f9fafb' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', marginBottom: '2rem', textAlign: 'center' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {FAQS.map((faq, index) => (
                                <div key={index} style={{
                                    backgroundColor: '#fff',
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
            </main>
        </div>
    );
}
