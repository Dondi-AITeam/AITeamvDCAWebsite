import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
    CheckCircle,
    X,
    Info,
    ShieldCheck,
    Clock,
    DollarSign,
    TrendingUp,
    Star,
    ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pricing | Hire AI-Certified Hybrid VAs from the Philippines | aiTeam.ph',
    description: 'Transparent pricing for AI-powered virtual assistants. Free to post, 15–20% platform fee only on ongoing hires, 7-day money-back guarantee. Save up to 70%.',
};

export default function PricingPage() {
    // FAQ Schema
    const faqs = [
        {
            question: "Is posting really free?",
            answer: "Yes. You can post unlimited jobs and browse our entire talent pool of AI-certified VAs without paying a cent. No credit card is required to get started."
        },
        {
            question: "How is the 15–20% fee calculated?",
            answer: "The platform fee is a transparent markup added to the VA's base rate. For example, if a VA sets their rate at $10/hr, and the fee is 20%, your total billing rate is $12/hr. This covers aiTrack™ protection, support, and continuous AI training."
        },
        {
            question: "What happens after the 7-day trial?",
            answer: "If you're happy with your VA, you simply continue working with them. We will then bill you for the hours worked during the trial and ongoing weeks. If you're not satisfied, you pay nothing for practically zero risk."
        },
        {
            question: "Can I hire the VA directly?",
            answer: "Yes. We offer a buyout option after 12 months of active billing. The fee is typically equivalent to 2 months of average billing. However, most clients choose to stay on-platform for the time-tracking tools, dispute protection, and replacement guarantee."
        },
        {
            question: "Are there any hidden fees?",
            answer: "None. You only pay the hourly rate (VA base + platform fee) for hours actively worked. There are no setup fees, recruitment fees, or monthly subscription costs unless you opt for the Premium add-on."
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

    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "aiTeam.ph",
        "url": "https://aiteam.ph",
        "logo": "https://aiteam.ph/logo.png",
        "description": "Premium AI-powered virtual assistant platform based in the Philippines.",
        "brand": {
            "@type": "Brand",
            "name": "aiTeam.ph"
        },
        "priceRange": "$10-$25/hour"
    };

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-geist-sans)' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, organizationJsonLd]) }}
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
                            Simple, Transparent Pricing
                        </div>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: '800',
                            color: '#111827',
                            lineHeight: '1.2',
                            marginBottom: '1.5rem'
                        }}>
                            Zero Upfront Costs.<br />
                            <span style={{ color: '#027bff' }}>Pay Only for Results.</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#4b5563',
                            maxWidth: '750px',
                            margin: '0 auto 2.5rem',
                            lineHeight: '1.6'
                        }}>
                            Free to post jobs and browse talent. You pay only when you hire — a clear 15–20% platform fee on ongoing billings after the 7-day risk-free trial. No hidden costs.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                            <Link href="/post-job">
                                <Button size="lg" variant="outline" style={{ fontSize: '1.1rem', padding: '1.5rem 2.5rem' }}>
                                    Post a Job Free
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Benefits Bar */}
                <section style={{ backgroundColor: '#0f172a', padding: '1.5rem 0', color: 'white' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <CheckCircle size={20} color="#28a745" />
                            <span style={{ fontWeight: '600' }}>Free to Start</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <ShieldCheck size={20} color="#28a745" />
                            <span style={{ fontWeight: '600' }}>7-Day Money-Back Guarantee</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <DollarSign size={20} color="#28a745" />
                            <span style={{ fontWeight: '600' }}>15–20% Platform Fee</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <TrendingUp size={20} color="#28a745" />
                            <span style={{ fontWeight: '600' }}>Save 50–70%</span>
                        </div>
                    </div>
                </section>

                {/* Core Pricing Explanation */}
                <section style={{ padding: '5rem 1.5rem', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                            How Pricing Works – <span style={{ color: '#027bff' }}>No Surprises</span>
                        </h2>
                        <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.6' }}>
                            We make hiring simple and predictable. You set the VA’s base rate with the talent you choose. We add a transparent 15–20% platform fee to cover matching, <span style={{ fontWeight: '600', color: '#111827' }}>aiTrack™</span> time protection, support, and continuous AI training. You pay only for hours worked after the 7-day trial — and only if you're happy.
                        </p>
                    </div>

                    {/* Pricing Breakdown Table */}
                    <div style={{ maxWidth: '1000px', margin: '0 auto', overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '0.5rem', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '1.125rem', color: '#475569', fontWeight: '600' }}>Item</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '1.125rem', color: '#027bff', fontWeight: '700' }}>Cost to You</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '1.125rem', color: '#475569', fontWeight: '600' }}>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#1e293b' }}>Posting a Job</td>
                                    <td style={{ padding: '1.5rem', color: '#28a745', fontWeight: '700' }}>Free</td>
                                    <td style={{ padding: '1.5rem', color: '#64748b' }}>Unlimited postings, no credit card required</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#1e293b' }}>Browsing Talent</td>
                                    <td style={{ padding: '1.5rem', color: '#28a745', fontWeight: '700' }}>Free</td>
                                    <td style={{ padding: '1.5rem', color: '#64748b' }}>Full access to profiles, videos, badges, rates</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#1e293b' }}>7-Day Trial Period</td>
                                    <td style={{ padding: '1.5rem', color: '#28a745', fontWeight: '700' }}>Pay only if satisfied</td>
                                    <td style={{ padding: '1.5rem', color: '#64748b' }}>Full money-back guarantee – test the hybrid boost risk-free</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#1e293b' }}>Platform Fee</td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#0f172a' }}>15–20% <span style={{ fontSize: '0.875rem', fontWeight: '400', color: '#64748b' }}>(on billings)</span></td>
                                    <td style={{ padding: '1.5rem', color: '#64748b' }}>Added to VA base rate (e.g., VA $10/hr → you pay $12/hr)</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#1e293b' }}>Premium Membership <span style={{ fontSize: '0.75rem', backgroundColor: '#1e293b', color: 'white', padding: '0.125rem 0.375rem', borderRadius: '4px', marginLeft: '0.5rem', verticalAlign: 'middle' }}>Optional</span></td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#0f172a' }}>$99/month</td>
                                    <td style={{ padding: '1.5rem', color: '#64748b' }}>Priority matching, dedicated support, fee discount optional</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#1e293b' }}>Buyout Option</td>
                                    <td style={{ padding: '1.5rem', fontWeight: '700', color: '#0f172a' }}>2× monthly billing</td>
                                    <td style={{ padding: '1.5rem', color: '#64748b' }}>Optional exit fee to hire VA directly (after 12 months)</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem', color: '#64748b', fontStyle: 'italic' }}>
                            * VA base rates typically range from $8–$20/hr. Total client cost is typically $9.60–$24/hr after fees. We verify that 100% of the base rate goes to the VA.
                        </p>
                    </div>
                </section>

                {/* Comparison Section */}
                <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f1f5f9' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem', color: '#111827' }}>
                            Why aiTeam.ph Pricing <span style={{ color: '#28a745' }}>Beats the Competition</span>
                        </h2>
                        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem', fontSize: '1.125rem' }}>
                            With aiTeam.ph, you pay for results — not ads, hidden fees, or uncertainty.
                        </p>

                        <div style={{ overflowX: 'auto', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#0f172a', color: 'white' }}>
                                        <th style={{ padding: '1.25rem', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                                        <th style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '700', backgroundColor: '#28a745' }}>aiTeam.ph</th>
                                        <th style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '600', color: '#cbd5e1' }}>Upwork</th>
                                        <th style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '600', color: '#cbd5e1' }}>LinkedIn / Indeed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: '600', color: '#1e293b' }}>Cost to Post</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '700', color: '#28a745' }}>Free</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>Free (hidden fees)</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>$150+/mo or CPC</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: '600', color: '#1e293b' }}>Platform Fee</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '700', color: '#28a745' }}>15–20%</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>5–20% + Client Fees</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>None (pay for ads)</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: '600', color: '#1e293b' }}>Trial / Risk-Free</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '700', color: '#28a745' }}>7-Day Money-Back</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>None</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>None</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: '600', color: '#1e293b' }}>Transparency</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '700', color: '#28a745' }}>High (Rate + Fee)</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>Variable / Hidden</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>Bid-based Spikes</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1.25rem', fontWeight: '600', color: '#1e293b' }}>Anti-Circumvention</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '700', color: '#28a745' }}>Tools + Incentives</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>Strict Bans</td>
                                        <td style={{ padding: '1.25rem', textAlign: 'center', color: '#64748b' }}>Weak</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section style={{ backgroundColor: '#ffffff', padding: '5rem 1.5rem' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
                            Common Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {faqs.map((faq, index) => (
                                <div key={index} style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>{faq.question}</h3>
                                    <p style={{ color: '#4b5563', lineHeight: '1.5' }}>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section style={{ padding: '6rem 1.5rem', textAlign: 'center', background: 'linear-gradient(to bottom, #f0f9ff, white)' }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                            Ready to Start Saving <span style={{ color: '#28a745' }}>50–70%</span> on Talent?
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2.5rem' }}>
                            Post your job free or browse certified VAs today. No credit card needed to begin.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
                            <Link href="/post-job">
                                <Button size="lg" style={{ backgroundColor: '#28a745', borderColor: '#28a745', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                                    Post a Job Free
                                </Button>
                            </Link>
                            <Link href="/hire">
                                <Button size="lg" variant="outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                                    Browse AI-Certified VAs
                                </Button>
                            </Link>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', color: '#64748b', fontSize: '0.875rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ShieldCheck size={16} /> Secure Payments</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><CheckCircle size={16} /> Data Privacy Compliant</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Star size={16} /> Money-Back Guarantee</span>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
