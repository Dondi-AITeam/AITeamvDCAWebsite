'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search,
    Filter,
    ChevronDown,
    Star,
    CheckCircle2,
    MapPin,
    Clock,
    DollarSign,
    PlayCircle,
    Grid,
    List,
    User,
    ShieldCheck,
    Zap,
    Users,
    FileText,
    Cpu,
    Briefcase,
    BadgeCheck
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button/Button';

// Updated Mock Data for VAs (Removed regions)
const MOCK_VAS = [
    {
        id: 1,
        name: "Maria S.",
        avatarUrl: "/avatars/maria.png",
        badges: ["Advanced AI", "B2 English", "Real Estate"],
        headline: "Advanced AI-Certified VA | Real Estate & Lead Nurturing Expert",
        english: "B2 (Upper Intermediate)",
        writtenEnglish: "C1 (Advanced)",
        aiCertification: "Advanced",
        industryExperience: ["Real Estate", "Lead Nurturing", "CRM Management"],
        availability: "20–40 hrs/week",
        rate: 12,
        hasVideo: true,
        bio: "Passionate about automating listings & CRM workflows with AI. 3+ years experience in managing real estate transactions and lead follow-ups.",
        rating: 5.0,
        reviews: 24,
        location: "Manila, PH"
    },
    {
        id: 2,
        name: 'Joshua R.',
        headline: 'Real Estate Virtual Assistant (ISA/Admin)',
        rating: 5.0,
        reviews: 28,
        rate: 10,
        english: 'C2 (Proficient)',
        writtenEnglish: 'C2 (Proficient)',
        aiCertification: 'Intermediate',
        industryExperience: ['Real Estate', 'Property Management', 'Sales'],
        availability: 'Immediate',
        badges: ['Real Estate Expert', 'Cold Calling Pro', 'Follow Up Boss'],
        bio: 'Dedicated Real Estate VA specializing in lead management, appointment setting, and CRM maintenance. Proficient with Follow Up Boss, Lofty, and KvCore. I help realtors scale by handling the busy work.',
        hasVideo: true,
        avatarUrl: '/avatars/joshua.png'
    },
    {
        id: 3,
        name: 'Anna C.',
        headline: 'Customer Support Specialist & E-commerce VA',
        rating: 4.8,
        reviews: 56,
        rate: 9,
        english: 'C1 (Advanced)',
        writtenEnglish: 'C1 (Advanced)',
        aiCertification: 'Advanced',
        industryExperience: ['E-commerce', 'SaaS', 'Retail'],
        availability: 'Part-Time',
        badges: ['Zendesk Certified', 'Shopify Expert', '24/7 Support'],
        bio: 'Reliable Customer Support Specialist with a background in E-commerce (Shopify/WooCommerce). I provide empathetic and efficient support via email, chat, and phone. Trained in using AI for faster response drafting.',
        hasVideo: false,
        avatarUrl: '/avatars/anna.png'
    },
    {
        id: 4,
        name: 'Miguel T.',
        headline: 'Technical Recruiter & HR Operations Specialist',
        rating: 4.9,
        reviews: 15,
        rate: 14,
        english: 'C2 (Proficient)',
        writtenEnglish: 'C2 (Proficient)',
        aiCertification: 'Intermediate',
        industryExperience: ['Recruitment', 'Technology', 'Startups'],
        availability: 'Full-Time',
        badges: ['LinkedIn Recruiter', 'Sourcing Expert', 'HR Admin'],
        bio: 'Results-driven Technical Recruiter with experience in sourcing top talent for tech startups. Skilled in full-cycle recruitment, candidate screening, and HR onboarding processes. Data-driven approach.',
        hasVideo: true,
        avatarUrl: '/avatars/miguel.png'
    },
    {
        id: 5,
        name: 'Sarah L.',
        headline: 'Creative Graphic Designer & Video Editor',
        rating: 4.7,
        reviews: 33,
        rate: 11,
        english: 'B2 (Upper Intermediate)',
        writtenEnglish: 'C1 (Advanced)',
        aiCertification: 'Advanced',
        industryExperience: ['Graphic Design', 'Marketing', 'Media'],
        availability: 'Immediate',
        badges: ['Adobe Creative Suite', 'Video Editing', 'Brand Identity'],
        bio: 'Creative multimedia specialist passionate about visual storytelling. Expert in Photoshop, Illustrator, and Premiere Pro. I create eye-catching social media graphics, video reels, and brand assets.',
        hasVideo: true,
        avatarUrl: '/avatars/sarah.png'
    },
    {
        id: 6,
        name: 'David G.',
        headline: 'Bookkeeper & Financial Assistant (Xero/QuickBooks)',
        rating: 5.0,
        reviews: 19,
        rate: 15,
        english: 'C1 (Advanced)',
        writtenEnglish: 'C1 (Advanced)',
        aiCertification: 'Basic',
        industryExperience: ['Finance', 'Accounting', 'Business Services'],
        availability: 'Part-Time',
        badges: ['Xero Advisor', 'QuickBooks Pro', 'Excel Expert'],
        bio: 'Certified Bookkeeper (CPA equivalent in PH) with expertise in cloud accounting. I handle reconciliation, invoicing, payroll, and financial reporting. Accurate, confidential, and timely.',
        hasVideo: false,
        avatarUrl: '/avatars/david.png'
    }
];

const INDUSTRIES = [
    "Real Estate", "E-commerce / Online Retail", "Digital Marketing & Social Media",
    "General Administrative", "Customer Service", "Coaching & Consulting",
    "SaaS / Tech Startups", "Healthcare / Medical Admin", "Finance / Bookkeeping",
    "Content Creation & Writing", "Lead Generation & Sales", "Legal Support",
    "Recruitment / HR", "Graphic Design / Video Editing", "Project Management / Operations"
];

import { useSearchParams } from 'next/navigation';

export default function HirePageContent() {
    const searchParams = useSearchParams();
    const industryParam = searchParams.get('industry');
    const aiLevelParam = searchParams.get('ai_level');

    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [filtersOpen, setFiltersOpen] = useState(false); // Mobile filter toggle

    // Initial Filter State based on URL
    const [selectedIndustry, setSelectedIndustry] = useState(industryParam || 'Any');

    // Filter the candidates
    const filteredCandidates = MOCK_VAS.filter(candidate => {
        if (industryParam && industryParam !== 'Any') {
            // Simple string matching for now since mocks are limited
            const matchesIndustry = candidate.industryExperience.some(exp =>
                exp.toLowerCase().includes(industryParam.toLowerCase()) ||
                industryParam.toLowerCase().includes(exp.toLowerCase())
            ) || (candidate.badges && candidate.badges.some(b => b.toLowerCase().includes(industryParam.toLowerCase())));

            if (!matchesIndustry) return false;
        }

        // Add AI Level logic if needed, currently mocks are simple
        return true;
    });

    // Mock state for filters (visual only for now as requested layout is primary)
    const [rateRange, setRateRange] = useState([8, 20]);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb', fontFamily: 'sans-serif', color: '#111827' }}>
            <Navbar />

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .va-card {
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .va-card:hover {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    transform: translateY(-2px);
                }
                .sidebar-container {
                    display: none;
                }
                @media (min-width: 1024px) {
                    .sidebar-container {
                        display: block;
                    }
                }
                .main-content {
                    flex-direction: column;
                }
                @media (min-width: 1024px) {
                    .main-content {
                        flex-direction: row;
                    }
                }
                .split-row {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                @media (min-width: 1024px) {
                    .split-row {
                        flex-direction: row;
                    }
                    .split-col {
                        flex: 1;
                    }
                }
            `}</style>

            {/* Hero Section */}
            <section style={{ backgroundColor: '#fff', padding: '4rem 1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                        Browse Pre-Certified AI-Powered Virtual Assistants from the Philippines
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                        Discover skilled remote VAs trained in AI tools and your industry. Filter by certification level, English proficiency, availability, and more. Start building your high-output hybrid team with zero risk.
                    </p>

                    {/* Trust Signals */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem', fontSize: '0.9rem', color: '#374151' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={16} color="#28a745" /> 100% PH Talent – World's Top Remote Workforce
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ShieldCheck size={16} color="#28a745" /> 7-Day Money-Back Guarantee
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Zap size={16} color="#28a745" /> Average 2–3x Productivity Boost with AI
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <DollarSign size={16} color="#28a745" /> Save 50–70% vs. Local Hires
                        </div>
                    </div>

                    <Button
                        size="lg"
                        style={{
                            backgroundColor: '#28a745',
                            borderColor: '#28a745',
                            color: '#fff',
                            fontSize: '1.125rem',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            boxShadow: '0 4px 6px rgba(40, 167, 69, 0.2)'
                        }}
                        onClick={() => document.getElementById('filter-bar')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Find Your Perfect VA Match
                    </Button>
                </div>
            </section>

            {/* Sticky Search & Filter Bar */}
            <div id="filter-bar" style={{ position: 'sticky', top: '0', zIndex: 40, backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        {/* Search Input */}
                        <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
                            <Search size={20} color="#9ca3af" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                placeholder="Search by name, skill, industry (e.g., 'real estate AI VA')"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                    borderRadius: '8px',
                                    border: '1px solid #d1d5db',
                                    fontSize: '0.95rem'
                                }}
                            />
                        </div>

                        {/* Dropdown Filters (Visual Mock) */}
                        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0px' }} className="hide-scrollbar">
                            <select style={filterSelectStyle}>
                                <option>AI Certification Level: Any</option>
                                <option>Basic</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                            <select style={filterSelectStyle}>
                                <option>Industry: Any</option>
                                {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                            </select>
                            <select style={filterSelectStyle}>
                                <option>English: Any</option>
                                <option>B1 (Intermediate)</option>
                                <option>B2 (Upper Intermediate)</option>
                                <option>C1 (Advanced)</option>
                                <option>C2 (Proficient)</option>
                            </select>
                            <select style={filterSelectStyle}>
                                <option>Availability: Any</option>
                                <option>Immediate</option>
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                            </select>
                        </div>

                        {/* View Toggle & Sort */}
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: 'auto' }}>
                            <div style={{ display: 'flex', border: '1px solid #d1d5db', borderRadius: '8px', overflow: 'hidden' }}>
                                <button
                                    onClick={() => setViewMode('grid')}
                                    style={{ padding: '0.5rem', backgroundColor: viewMode === 'grid' ? '#f3f4f6' : '#fff', cursor: 'pointer' }}
                                >
                                    <Grid size={20} color={viewMode === 'grid' ? '#111827' : '#9ca3af'} />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    style={{ padding: '0.5rem', backgroundColor: viewMode === 'list' ? '#f3f4f6' : '#fff', cursor: 'pointer' }}
                                >
                                    <List size={20} color={viewMode === 'list' ? '#111827' : '#9ca3af'} />
                                </button>
                            </div>
                            <select style={{ ...filterSelectStyle, minWidth: '140px' }}>
                                <option>Sort: Best Match</option>
                                <option>Newest</option>
                                <option>Highest Rated</option>
                                <option>Lowest Rate</option>
                            </select>
                        </div>
                    </div>

                    {/* Active Filters / Counter Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#6b7280' }}>
                        <div>
                            Showing <span style={{ fontWeight: 'bold', color: '#111827' }}>{filteredCandidates.length}</span> AI-Ready VAs
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem' }}>
                            {/* Rate Slider Mock */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span>Rate: $8 - $20/hr</span>
                                {/* Interactive slider could go here, text is sufficient for mock */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="main-content" style={{ flex: 1, padding: '2rem 1.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%', gap: '3rem' }}>

                {/* Results Grid */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(300px, 1fr))' : '1fr',
                        gap: '2rem'
                    }}>
                        {filteredCandidates.map((va) => (
                            <div key={va.id} style={{
                                backgroundColor: '#fff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: viewMode === 'list' ? 'row' : 'column',
                            }}
                                className="va-card"
                            >
                                {/* Header / Avatar Section */}
                                <div style={{ padding: '1.5rem', borderBottom: '1px solid #f3f4f6', display: 'flex', flexDirection: viewMode === 'list' ? 'row' : 'column', alignItems: 'center', gap: '1rem', width: viewMode === 'list' ? '300px' : 'auto', flexShrink: 0 }}>
                                    <div style={{ position: 'relative' }}>
                                        {/* Avatar Placeholder */}
                                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#9ca3af', overflow: 'hidden' }}>
                                            {va.avatarUrl ? (
                                                <img src={va.avatarUrl} alt={va.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <User size={48} />
                                            )}
                                        </div>
                                        {/* Online Indicator */}
                                        <div style={{ position: 'absolute', bottom: '5px', right: '5px', width: '15px', height: '15px', backgroundColor: '#22c55e', borderRadius: '50%', border: '2px solid #fff' }}></div>
                                    </div>
                                    <div style={{ textAlign: viewMode === 'list' ? 'left' : 'center' }}>
                                        <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#111827' }}>{va.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: viewMode === 'list' ? 'flex-start' : 'center', gap: '0.25rem', color: '#fbbf24', marginTop: '0.25rem' }}>
                                            <Star size={14} fill="#fbbf24" />
                                            <span style={{ fontSize: '0.9rem', color: '#4b5563', fontWeight: 'bold' }}>{va.rating}</span>
                                            <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>({va.reviews})</span>
                                        </div>
                                        <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                                            {va.badges.slice(0, 2).map((badge, idx) => (
                                                <span key={idx} style={{ fontSize: '0.7rem', backgroundColor: '#eff6ff', color: '#1d4ed8', padding: '0.15rem 0.5rem', borderRadius: '999px', fontWeight: '500' }}>
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Body Section */}
                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                                        {va.headline}
                                    </h4>

                                    {/* Highlights */}
                                    <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#4b5563' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <span style={{ color: '#28a745' }}><CheckCircle2 size={14} /></span> Spoken English: {va.english}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <span style={{ color: '#28a745' }}><FileText size={14} /></span> Written English: {va.writtenEnglish}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <span style={{ color: '#28a745' }}><Cpu size={14} /></span> AI Certification: {va.aiCertification}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <span style={{ color: '#28a745', marginTop: '3px' }}><Briefcase size={14} /></span>
                                            <span style={{ flex: 1 }}>
                                                Experience: {va.industryExperience?.join(', ')}
                                            </span>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                            <span style={{ color: '#28a745' }}><Clock size={14} /></span> Avail: {va.availability}
                                        </div>
                                        {va.hasVideo && (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: '500' }}>
                                                <PlayCircle size={14} /> Video Intro Available
                                            </div>
                                        )}
                                    </div>

                                    <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.5', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {va.bio}
                                    </p>

                                    {/* Footer / Actions */}
                                    <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                        <div>
                                            <span style={{ display: 'block', fontSize: '0.8rem', color: '#6b7280' }}>From</span>
                                            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>${va.rate}<span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#6b7280' }}>/hr</span></span>
                                        </div>
                                        <Button style={{ flex: 1, backgroundColor: '#027bff', borderColor: '#027bff' }}>View Profile</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State / Pagination Hint */}
                    <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px dashed #d1d5db' }}>
                        <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Showing {filteredCandidates.length} of {MOCK_VAS.length} available VAs</p>
                        <Button variant="outline">Load More Talent</Button>
                    </div>
                </div>

                {/* Sidebar has been moved to bottom sections */}
            </main>

            {/* Why Choose Section (Full Width, Gray Background) */}
            <section style={{ backgroundColor: '#f3f4f6', padding: '4rem 1.5rem', borderTop: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>Why Choose AITeam.ph?</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Benefit 1 */}
                        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <BadgeCheck size={32} color="#16a34a" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>AI-Certified Talent</h3>
                            <p style={{ fontSize: '1.1rem', color: '#4b5563' }}>85% of our VAs have Intermediate+ AI Certification badges.</p>
                        </div>

                        {/* Benefit 2 */}
                        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <DollarSign size={32} color="#16a34a" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>Huge Cost Savings</h3>
                            <p style={{ fontSize: '1.1rem', color: '#4b5563' }}>Average client saves $20K–$50K/year vs local hiring.</p>
                        </div>

                        {/* Benefit 3 */}
                        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Star size={32} fill="#16a34a" color="#16a34a" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>Top Rated & Trusted</h3>
                            <p style={{ fontSize: '1.1rem', color: '#4b5563' }}>4.9/5 average rating from over 200+ successful hires.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Split Section: Top Rated & CTA */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }} className="split-section">

                <div className="split-row">
                    {/* Left: Top Rated in Real Estate */}
                    <div className="split-col" style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>Top Rated in Real Estate</h3>
                            <Link href="/industries/real-estate" style={{ color: '#2563eb', fontWeight: '500', fontSize: '0.9rem' }}>View All</Link>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[1, 2].map(i => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', border: '1px solid #f3f4f6', borderRadius: '12px', transition: 'background-color 0.2s' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e5e7eb', flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <User size={24} color="#9ca3af" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#111827' }}>Featured VA {i}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Real Estate Expert • $10/hr</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                                            <Star size={12} fill="#fbbf24" color="#fbbf24" />
                                            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#374151' }}>5.0</span>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="outline" style={{ marginLeft: 'auto' }}>View Profile</Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: CTA Banner */}
                    <div className="split-col" style={{
                        backgroundColor: '#1e3a8a',
                        backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                        borderRadius: '16px',
                        padding: '3rem 2rem',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: '0.1' }}>
                            <Zap size={200} />
                        </div>

                        <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>Ready to See Exponential Results?</h3>
                        <p style={{ fontSize: '1.1rem', color: '#bfdbfe', marginBottom: '2rem', maxWidth: '400px' }}>
                            Don't guess. Start with a 7-day risk-free trial and see the impact of an AI-powered team.
                        </p>
                        <Button
                            size="lg"
                            style={{
                                backgroundColor: '#22c55e',
                                borderColor: '#22c55e',
                                color: '#fff',
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                            }}
                        >
                            Browse & Hire Now
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer Bottom CTA */}
            <div style={{ backgroundColor: '#f3f4f6', padding: '4rem 1.5rem', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Can't find the perfect match?</h2>
                    <p style={{ color: '#4b5563', marginBottom: '2rem' }}>Let our matching experts find the right hybrid talent for your specific needs. Free consultation.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Button size="lg" style={{ backgroundColor: '#027bff', borderColor: '#027bff' }}>Get a Free Match</Button>
                    </div>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem', color: '#6b7280' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} /> Secure Payments</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} /> Money-Back Guarantee</span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

const filterSelectStyle = {
    padding: '0.5rem 2rem 0.5rem 1rem',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    backgroundColor: '#fff',
    fontSize: '0.9rem',
    color: '#374151',
    cursor: 'pointer',
    backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.7rem top 50%',
    backgroundSize: '0.65rem auto',
    appearance: 'none',
    whiteSpace: 'nowrap'
} as React.CSSProperties;
