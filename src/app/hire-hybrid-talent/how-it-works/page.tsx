import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import { Input } from '@/components/ui/Input/Input';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
    Search,
    Calendar,
    ShieldCheck,
    TrendingUp,
    CheckCircle,
    Clock,
    DollarSign,
    Star,
    ChevronDown,
    ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'How It Works | Hire AI-Certified Hybrid Talent | aiTeam.ph',
    description: 'Hire pre-certified AI-powered VAs from the Philippines in 4 simple steps. Free to post, 15–20% platform fee only on ongoing hires, 7-day money-back guarantee. Save up to 70%.',
};

export default function HowItWorksPage() {
    // FAQ Schema
    const faqs = [
        {
            question: "How much does it cost to post a job?",
            answer: "It is completely free to post a job and browse our talent pool. You only pay once you decide to hire a VA and the 7-day trial period begins."
        },
        {
            question: "What is the 15-20% platform fee for?",
            answer: "This transparent fee covers our AI matching technology, aiTrack™ protection, ongoing support, and continuous AI upskilling for your Virtual Assistants. It is added to the VA's base rate, so you always see the total hourly cost upfront."
        },
        {
            question: "How does the 7-day money-back guarantee work?",
            answer: "We offer a risk-free trial. If you are not satisfied with your VA's performance within the first 7 days, we will refund 100% of your payment for that week. No questions asked."
        },
        {
            question: "What are the typical hourly rates?",
            answer: "Most AI-certified VAs have total rates (including fee) between $10 and $18 per hour, depending on their experience and AI certification level (Basic to Advanced). This represents a ~70% saving compared to US equivalents."
        },
        {
            question: "Can I upgrade to Premium?",
            answer: "Yes. For $99/mo, you get priority matching (within 12 hours), unlimited job postings, and a dedicated Success Manager to help you build your hybrid team faster."
        },
        {
            question: "What happens if I hire off-platform?",
            answer: "Our platform provides essential tools like time tracking, secure payments, and contracts. Hiring off-platform violates our terms and removes protections like the money-back guarantee and dispute resolution."
        },
        {
            question: "Do I need to pay a setup fee?",
            answer: "No. There are zero upfront recruiting or setup fees. You only pay the hourly rate once you start working with your VA."
        },
        {
            question: "Is my data secure?",
            answer: "Yes. All our VAs are trained in data privacy and security best practices. We also offer optional NDA contracts for added protection."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navbar />

            <main>
                {/* Hero Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    padding: '6rem 1.5rem',
                    textAlign: 'center',
                    borderBottom: '1px solid #bae6fd'
                }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-block',
                            backgroundColor: '#dbeafe',
                            color: '#027bff',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            marginBottom: '1.5rem',
                            border: '1px solid #bfdbfe'
                        }}>
                            The Future is Hybrid
                        </div>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: '800',
                            color: '#111827',
                            lineHeight: '1.2',
                            marginBottom: '1.5rem'
                        }}>
                            Hire Hybrid AI Talent in <br />
                            <span style={{ color: '#027bff' }}>4 Simple Steps</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#4b5563',
                            maxWidth: '750px',
                            margin: '0 auto 2.5rem',
                            lineHeight: '1.6'
                        }}>
                            Get matched to skilled, AI-certified virtual assistants from the Philippines — trained to multiply your productivity. Free to post, transparent 15–20% platform fee only on ongoing hires, full 7-day money-back guarantee.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link href="/hire">
                                <Button size="lg" style={{
                                    backgroundColor: '#28a745',
                                    borderColor: '#28a745',
                                    fontSize: '1.1rem',
                                    padding: '1.5rem 2.5rem'
                                }}>
                                    Browse AI-Certified VAs Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Trust Bar */}
                <section style={{ backgroundColor: '#0f172a', padding: '1.5rem 0', color: 'white' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <CheckCircle size={20} color="#28a745" />
                            <span style={{ fontWeight: '600' }}>Free to Post & Browse</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <CheckCircle size={20} color="#28a745" />
                            <span style={{ fontWeight: '600' }}>15–20% Platform Fee</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <ShieldCheck size={20} color="#28a745" />
                            <span style={{ fontWeight: '600' }}>7-Day Money-Back Guarantee</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Star size={20} color="#eab308" fill="#eab308" />
                            <span style={{ fontWeight: '600' }}>4.9/5 from 200+ Clients</span>
                        </div>
                    </div>
                </section>

                {/* 4-Step Visual Timeline */}
                <section style={{ padding: '6rem 1.5rem', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem', color: '#111827' }}>
                            Your Path to a <span style={{ color: '#027bff' }}>Hybrid Workforce</span>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative' }}>
                            {/* Vertical Line for Desktop need CSS module really but keeping simple inline style for this specific page request */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                bottom: '0',
                                width: '4px',
                                backgroundColor: '#e5e7eb',
                                transform: 'translateX(-50%)',
                                zIndex: 0,
                                // Note: In a real responsive CSS module, this would be hidden on mobile
                            }} className="timeline-line"></div>

                            {/* Step 1 */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 1 }}>
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', display: 'inline-block', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                        <Search size={48} color="#027bff" />
                                    </div>
                                </div>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#027bff', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0,
                                    boxShadow: '0 0 0 8px white'
                                }}>1</div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111827', marginBottom: '0.75rem' }}>Browse & Match</h3>
                                    <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '1rem' }}>
                                        Filter pre-certified VA talent by industry, AI level (Basic to Advanced), English proficiency (B1–B2), and availability. See video intros, badges, and transparent rates upfront — free to browse.
                                    </p>
                                    <Link href="/hire" style={{ color: '#027bff', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Start Browsing Talent <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 1, flexDirection: 'row-reverse' }}>
                                <div style={{ flex: 1, textAlign: 'left' }}>
                                    <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '1rem', display: 'inline-block', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                        <Calendar size={48} color="#28a745" />
                                    </div>
                                </div>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#28a745', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0,
                                    boxShadow: '0 0 0 8px white'
                                }}>2</div>
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111827', marginBottom: '0.75rem' }}>Choose Your Package</h3>
                                    <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '1rem' }}>
                                        Select flexible weekly hours: 10, 20, or 40 hours per week. The VA sets their base rate, and we add a transparent 15–20% platform fee. You see the total cost clearly with no hidden charges.
                                    </p>
                                    <Link href="/pricing" style={{ color: '#027bff', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                        See Transparent Pricing <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 1 }}>
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <div style={{ backgroundColor: '#fff7ed', padding: '1.5rem', borderRadius: '1rem', display: 'inline-block', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                        <ShieldCheck size={48} color="#ea580c" />
                                    </div>
                                </div>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ea580c', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0,
                                    boxShadow: '0 0 0 8px white'
                                }}>3</div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111827', marginBottom: '0.75rem' }}>Start Risk-Free</h3>
                                    <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '1rem' }}>
                                        Begin with a full 7-day trial period — pay only if satisfied. Test the hybrid productivity boost (AI + VA = 2–3x output). Full refund if not right. No questions asked.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 1, flexDirection: 'row-reverse' }}>
                                <div style={{ flex: 1, textAlign: 'left' }}>
                                    <div style={{ backgroundColor: '#faf5ff', padding: '1.5rem', borderRadius: '1rem', display: 'inline-block', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                        <TrendingUp size={48} color="#9333ea" />
                                    </div>
                                </div>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#9333ea', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0,
                                    boxShadow: '0 0 0 8px white'
                                }}>4</div>
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111827', marginBottom: '0.75rem' }}>Scale Your Hybrid Team</h3>
                                    <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '1rem' }}>
                                        Love the results? Continue seamlessly — recurring 15–20% fee only on ongoing hours. Add more VAs, upgrade to premium ($99/mo for priority matching), and scale your high-output team.
                                    </p>
                                    <Link href="/post-job" style={{ color: '#027bff', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                        Post a Job to Get Started <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section style={{ backgroundColor: '#f9fafb', padding: '5rem 1.5rem' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {faqs.map((faq, index) => (
                                <div key={index} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>{faq.question}</h3>
                                    <p style={{ color: '#4b5563', lineHeight: '1.5' }}>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA & Lead Capture */}
                <section style={{ padding: '6rem 1.5rem', textAlign: 'center', background: 'linear-gradient(to bottom, white, #f0f9ff)' }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                            Ready to Embrace the <span style={{ color: '#027bff' }}>Hybrid Future</span>?
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2.5rem' }}>
                            Start hiring AI-certified VAs today — free to post, transparent fees, massive ROI.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
                            <Link href="/hire">
                                <Button size="lg" style={{ backgroundColor: '#28a745', borderColor: '#28a745', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                                    Browse AI-Certified VAs Now
                                </Button>
                            </Link>
                            <Link href="/post-job">
                                <Button size="lg" variant="outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                                    Post a Job & Get Matches
                                </Button>
                            </Link>
                        </div>

                        {/* Optional Lead Capture */}
                        <Card style={{ padding: '2rem', backgroundColor: '#fff', border: '1px solid #e2e8f0', maxWidth: '500px', margin: '0 auto' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Want a free savings estimate?</h3>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Enter your email to receive our "Hybrid Hiring Guide".</p>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <Input placeholder="Enter your email" style={{ flex: 1 }} />
                                <Button style={{ backgroundColor: '#027bff', borderColor: '#027bff' }}>Send Me Info</Button>
                            </div>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
