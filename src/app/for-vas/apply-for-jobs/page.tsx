'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
    Search,
    Filter,
    CheckCircle,
    Building,
    ArrowRight,
    Star,
    ShieldCheck,
    Zap,
    Users,
    User, // Added User
    FileText,
    Cpu,
    Globe,
    TrendingUp,
    Send,
    MessageSquare,
    ChevronDown,
    X
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button/Button';

// --- MOCK JOBS DATA - Updated with Region & Split English ---
const MOCK_JOBS = [
    {
        id: 1,
        title: "AI VA for Real Estate Lead Generation",
        industry: "Real Estate",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 20,
        rateMin: 12,
        rateMax: 15,
        currency: "USD",
        postedAt: "2 days ago",
        description: "Looking for an AI-savvy VA to automate listings, nurture leads with AI tools (ChatGPT/Jasper), and manage our CRM. Must know Follow Up Boss.",
        skills: ["Advanced AI", "B2 English", "CRM Experience", "Lead Gen"],
        aiLevel: "Advanced",
        spokenEnglish: "B2",
        writtenEnglish: "B2",
        availability: "Immediate",
        type: "Ongoing"
    },
    {
        id: 2,
        title: "E-commerce Customer Support Specialist",
        industry: "E-commerce / Online Retail",
        location: "United Kingdom",
        region: "Europe",
        locationType: "Remote",
        hours: 40,
        rateMin: 10,
        rateMax: 14,
        currency: "USD",
        postedAt: "5 hours ago",
        description: "Handle customer inquiries via email and chat for a growing Shopify store. Use AI to draft responses faster. Zendesk experience preferred.",
        skills: ["Intermediate AI", "C1 English", "Shopify", "Zendesk"],
        aiLevel: "Intermediate",
        spokenEnglish: "C1",
        writtenEnglish: "C1",
        availability: "Immediate",
        type: "Ongoing"
    },
    {
        id: 3,
        title: "Content Writer & Social Media Manager",
        industry: "Digital Marketing & Social Media",
        location: "Australia",
        region: "Oceania (AUS/NZ/others)",
        locationType: "Remote",
        hours: 15,
        rateMin: 15,
        rateMax: 20,
        currency: "USD",
        postedAt: "1 day ago",
        description: "Create engaging social media posts and blog articles using AI tools. Must be able to edit AI outputs for brand voice.",
        skills: ["Advanced AI", "C2 English", "Copywriting", "Canva"],
        aiLevel: "Advanced",
        spokenEnglish: "C2",
        writtenEnglish: "C2",
        availability: "Flexible",
        type: "Part-Time"
    },
    {
        id: 4,
        title: "General Admin & Scheduling Assistant",
        industry: "General Administrative",
        location: "Canada",
        region: "Americas",
        locationType: "Remote",
        hours: 10,
        rateMin: 8,
        rateMax: 12,
        currency: "USD",
        postedAt: "3 days ago",
        description: "Assist busy CEO with calendar management, email filtering, and travel booking. Basic AI knowledge for drafting emails required.",
        skills: ["Basic AI", "B2 English", "Google Workspace", "Organization"],
        aiLevel: "Basic",
        spokenEnglish: "B2",
        writtenEnglish: "B2",
        availability: "Within 1 Week",
        type: "Ongoing"
    },
    {
        id: 5,
        title: "SaaS Technical Support Rep",
        industry: "SaaS / Tech Startups",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 40,
        rateMin: 14,
        rateMax: 18,
        currency: "USD",
        postedAt: "Just now",
        description: "Provide technical support for our B2B SaaS platform. Tech-savvy VA who can use AI to troubleshoot and document solutions.",
        skills: ["Intermediate AI", "C1 English", "Tech Support", "Intercom"],
        aiLevel: "Intermediate",
        spokenEnglish: "C1",
        writtenEnglish: "C1",
        availability: "Immediate",
        type: "Ongoing"
    },
    {
        id: 6,
        title: "Bookkeeper & Financial Admin",
        industry: "Finance / Bookkeeping",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 20,
        rateMin: 15,
        rateMax: 22,
        currency: "USD",
        postedAt: "1 week ago",
        description: "Certified Bookkeeper needed for reconciliation and invoicing. Xero expertise required. AI usage for data entry is a plus.",
        skills: ["Basic AI", "C1 English", "Xero", "Accounting"],
        aiLevel: "Basic",
        spokenEnglish: "C1",
        writtenEnglish: "C1",
        availability: "Flexible",
        type: "Ongoing"
    },
    {
        id: 7,
        title: "Cold Caller & Appointment Setter",
        industry: "Lead Generation & Sales",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 30,
        rateMin: 10,
        rateMax: 15,
        currency: "USD",
        postedAt: "2 days ago",
        description: "Outbound calling to warm leads. Must have excellent spoken English. Use AI dialers and CRM notes.",
        skills: ["Basic AI", "C2 English", "Sales", "Cold Calling"],
        aiLevel: "Basic",
        spokenEnglish: "C2",
        writtenEnglish: "B2",
        availability: "Immediate",
        type: "Project-Based"
    },
    {
        id: 8,
        title: "Video Editor for YouTube Channel",
        industry: "Graphic Design / Video Editing",
        location: "United Kingdom",
        region: "Europe",
        locationType: "Remote",
        hours: 15,
        rateMin: 18,
        rateMax: 25,
        currency: "USD",
        postedAt: "4 days ago",
        description: "Edit 2-3 YouTube videos per week. expert in Premiere Pro and AI tools like Descript or Opus Clip.",
        skills: ["Advanced AI", "B2 English", "Video Editing", "Premiere Pro"],
        aiLevel: "Advanced",
        spokenEnglish: "B2",
        writtenEnglish: "B2",
        availability: "Immediate",
        type: "Part-Time"
    },
    {
        id: 9,
        title: "HR Assistant & Recruiter",
        industry: "Recruitment / HR",
        location: "Australia",
        region: "Oceania (AUS/NZ/others)",
        locationType: "Remote",
        hours: 25,
        rateMin: 12,
        rateMax: 16,
        currency: "USD",
        postedAt: "6 hours ago",
        description: "Assist with screening candidates and onboarding. Use AI to screen resumes and draft offer letters.",
        skills: ["Intermediate AI", "C1 English", "Recruitment", "LinkedIn"],
        aiLevel: "Intermediate",
        spokenEnglish: "C1",
        writtenEnglish: "C1",
        availability: "Within 1 Week",
        type: "Ongoing"
    },
    {
        id: 10,
        title: "Legal Executive Assistant",
        industry: "Legal Support",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 40,
        rateMin: 16,
        rateMax: 20,
        currency: "USD",
        postedAt: "3 days ago",
        description: "Support a busy law firm partner. Document management, legal research (using AI tools appropriately), and scheduling.",
        skills: ["Intermediate AI", "C2 English", "Legal Admin", "Detail Oriented"],
        aiLevel: "Intermediate",
        spokenEnglish: "C2",
        writtenEnglish: "C2",
        availability: "Immediate",
        type: "Ongoing"
    },
    {
        id: 11,
        title: "Project Coordinator",
        industry: "Project Management / Operations",
        location: "Singapore",
        region: "Asia",
        locationType: "Remote",
        hours: 35,
        rateMin: 15,
        rateMax: 19,
        currency: "USD",
        postedAt: "1 day ago",
        description: "Keep our team on track using Asana/ClickUp. AI-certified preferred for process automation.",
        skills: ["Advanced AI", "C1 English", "Project Management", "Asana"],
        aiLevel: "Advanced",
        spokenEnglish: "C1",
        writtenEnglish: "C1",
        availability: "Immediate",
        type: "Ongoing"
    },
    {
        id: 12,
        title: "Medical Receptionist (Virtual)",
        industry: "Healthcare / Medical Admin",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 40,
        rateMin: 11,
        rateMax: 14,
        currency: "USD",
        postedAt: "5 days ago",
        description: "Handle patient calls, scheduling, and intake forms. HIPAA awareness required. Compassionate and efficient.",
        skills: ["Basic AI", "C1 English", "Healthcare", "Phone Skills"],
        aiLevel: "Basic",
        spokenEnglish: "C1",
        writtenEnglish: "B2",
        availability: "Immediate",
        type: "Ongoing"
    },
    {
        id: 13,
        title: "Digital Marketing Assistant",
        industry: "Digital Marketing & Social Media",
        location: "Canada",
        region: "Americas",
        locationType: "Remote",
        hours: 20,
        rateMin: 12,
        rateMax: 16,
        currency: "USD",
        postedAt: "2 days ago",
        description: "Assist with email campaigns and social media scheduling. Mailchimp and Buffer experience key.",
        skills: ["Intermediate AI", "B2 English", "Email Marketing", "Social Media"],
        aiLevel: "Intermediate",
        spokenEnglish: "B2",
        writtenEnglish: "B2",
        availability: "Immediate",
        type: "Part-Time"
    },
    {
        id: 14,
        title: "Executive Assistant to Founder",
        industry: "General Administrative",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 30,
        rateMin: 15,
        rateMax: 20,
        currency: "USD",
        postedAt: "8 hours ago",
        description: "Right-hand person for a startup founder. Inbox zero, travel, research. High agency required.",
        skills: ["Advanced AI", "C2 English", "Executive Support", "Research"],
        aiLevel: "Advanced",
        spokenEnglish: "C2",
        writtenEnglish: "C2",
        availability: "Immediate",
        type: "Ongoing"
    },
    {
        id: 15,
        title: "Amazon Seller Central Expert",
        industry: "E-commerce / Online Retail",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 25,
        rateMin: 14,
        rateMax: 18,
        currency: "USD",
        postedAt: "3 days ago",
        description: "Manage FBA inventory, listings, and customer messages. Experience with Helium10 is a bonus.",
        skills: ["Intermediate AI", "B2 English", "Amazon FBA", "Seller Central"],
        aiLevel: "Intermediate",
        spokenEnglish: "B2",
        writtenEnglish: "B2",
        availability: "Flexible",
        type: "Ongoing"
    },
    {
        id: 16,
        title: "Podcast Producer / Editor",
        industry: "Graphic Design / Video Editing",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 10,
        rateMin: 20,
        rateMax: 30,
        currency: "USD",
        postedAt: "1 week ago",
        description: "Edit audio, create show notes (using AI), and publish episodes. Descript experience preferred.",
        skills: ["Advanced AI", "C1 English", "Audio Editing", "Podcasting"],
        aiLevel: "Advanced",
        spokenEnglish: "C1",
        writtenEnglish: "C1",
        availability: "Flexible",
        type: "Project-Based"
    },
    {
        id: 17,
        title: "Real Estate ISA (Inside Sales Agent)",
        industry: "Real Estate",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 40,
        rateMin: 12,
        rateMax: 16,
        currency: "USD",
        postedAt: "1 day ago",
        description: "Qualify leads from Facebook ads and set appointments for agents. High call volume.",
        skills: ["Basic AI", "C2 English", "Sales", "Real Estate"],
        aiLevel: "Basic",
        spokenEnglish: "C2",
        writtenEnglish: "B2",
        availability: "Immediate",
        type: "Ongoing"
    },
    {
        id: 18,
        title: "Technical Writer (AI Focused)",
        industry: "Content Creation & Writing",
        location: "Europe",
        region: "Europe",
        locationType: "Remote",
        hours: 20,
        rateMin: 18,
        rateMax: 25,
        currency: "USD",
        postedAt: "4 days ago",
        description: "Write documentation for AI software. Must understand LLMs and prompt engineering.",
        skills: ["Advanced AI", "C2 English", "Technical Writing", "Docs"],
        aiLevel: "Advanced",
        spokenEnglish: "C2",
        writtenEnglish: "C2",
        availability: "Flexible",
        type: "Project-Based"
    },
    {
        id: 19,
        title: "Customer Success Manager",
        industry: "SaaS / Tech Startups",
        location: "United States",
        region: "Americas",
        locationType: "Remote",
        hours: 40,
        rateMin: 16,
        rateMax: 22,
        currency: "USD",
        postedAt: "2 days ago",
        description: "Onboard new clients and ensure they get value from our product. Proactive outreach.",
        skills: ["Intermediate AI", "C2 English", "Customer Success", "Onboarding"],
        aiLevel: "Intermediate",
        spokenEnglish: "C2",
        writtenEnglish: "C2",
        availability: "Within 1 Week",
        type: "Ongoing"
    },
    {
        id: 20,
        title: "Data Entry Specialist",
        industry: "General Administrative",
        location: "United Kingdom",
        region: "Europe",
        locationType: "Remote",
        hours: 15,
        rateMin: 8,
        rateMax: 10,
        currency: "USD",
        postedAt: "1 day ago",
        description: "Accurate data entry into spreadsheets. Use AI to clean data where possible.",
        skills: ["Basic AI", "B1 English", "Excel", "Data Entry"],
        aiLevel: "Basic",
        spokenEnglish: "B1",
        writtenEnglish: "B1",
        availability: "Immediate",
        type: "Short-Term"
    }
];

const INDUSTRIES = [
    "Real Estate", "E-commerce / Online Retail", "Digital Marketing & Social Media",
    "General Administrative", "Customer Service", "Coaching & Consulting",
    "SaaS / Tech Startups", "Healthcare / Medical Admin", "Finance / Bookkeeping",
    "Content Creation & Writing", "Lead Generation & Sales", "Legal Support",
    "Recruitment / HR", "Graphic Design / Video Editing", "Project Management / Operations"
];

const PROFIENCY_LEVELS = ["B1", "B2", "C1", "C2"];
const AI_LEVELS = ["Basic", "Intermediate", "Advanced"];
const AVAILABILITY_OPTIONS = ["Immediate", "Within 1 Week", "Flexible"];
const REGIONS = ["Oceania (AUS/NZ/others)", "Americas", "Europe", "Asia", "Middle East/Africa", "Other"];

// Constant for Rate Conversion
const USD_TO_PHP = 58;

export default function ApplyForJobsPage() {
    // State for Search & Filters
    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        industry: 'Any',
        hours: 'Any',
        rateMinUSD: 0,
        rateMaxUSD: 50,
        aiLevel: 'Any',
        spokenEnglish: 'Any',
        writtenEnglish: 'Any',
        region: 'Any',
        availability: 'Any',
        jobType: 'Any',
        videoIntro: false,
        portfolio: false
    });

    const [filteredJobs, setFilteredJobs] = useState(MOCK_JOBS);

    // Initial Filter Apply (on mount)
    useEffect(() => {
        setFilteredJobs(MOCK_JOBS);
    }, []);

    // Filter Logic (Live Filtering)
    useEffect(() => {
        let results = MOCK_JOBS;

        // Search Query
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            results = results.filter(job =>
                job.title.toLowerCase().includes(lowerQuery) ||
                job.industry.toLowerCase().includes(lowerQuery) ||
                job.skills.some(skill => skill.toLowerCase().includes(lowerQuery))
            );
        }

        // Industry Filter
        if (filters.industry !== 'Any') {
            results = results.filter(job => job.industry === filters.industry);
        }

        // Region Filter
        if (filters.region !== 'Any') {
            results = results.filter(job => job.region === filters.region);
        }

        // English Filters
        if (filters.spokenEnglish !== 'Any') {
            const filterIndex = PROFIENCY_LEVELS.indexOf(filters.spokenEnglish);
            results = results.filter(job => {
                const jobIndex = PROFIENCY_LEVELS.indexOf(job.spokenEnglish);
                return jobIndex >= filterIndex;
            });
        }
        if (filters.writtenEnglish !== 'Any') {
            const filterIndex = PROFIENCY_LEVELS.indexOf(filters.writtenEnglish);
            results = results.filter(job => {
                const jobIndex = PROFIENCY_LEVELS.indexOf(job.writtenEnglish);
                return jobIndex >= filterIndex;
            });
        }

        // AI Level Filter
        if (filters.aiLevel !== 'Any') {
            results = results.filter(job => job.aiLevel === filters.aiLevel);
        }

        // Rate Filter (USD) - Min/Max Overlap Logic
        // Filter jobs where the JOB'S rate range overlaps with the USER'S filter range.
        // Overlap condition: Math.max(job.rateMin, filters.rateMinUSD) <= Math.min(job.rateMax, filters.rateMaxUSD)
        if (filters.rateMinUSD > 0 || filters.rateMaxUSD < 50) {
            results = results.filter(job => {
                const overlapMin = Math.max(job.rateMin, filters.rateMinUSD);
                const overlapMax = Math.min(job.rateMax, filters.rateMaxUSD);
                return overlapMin <= overlapMax;
            });
        }

        // Hours Filter
        if (filters.hours !== 'Any') {
            if (filters.hours === '40 hrs (Full-Time)') results = results.filter(job => job.hours === 40);
            else if (filters.hours === '20 hrs') results = results.filter(job => job.hours >= 20 && job.hours < 40);
            else if (filters.hours === '10 hrs') results = results.filter(job => job.hours >= 10 && job.hours < 20);
        }

        // Availability Filter
        if (filters.availability !== 'Any') {
            results = results.filter(job => job.availability === filters.availability);
        }

        // Job Type Filter
        if (filters.jobType !== 'Any') {
            results = results.filter(job => job.type === filters.jobType);
        }

        setFilteredJobs(results);
    }, [searchQuery, filters]);

    const handleFilterChange = (key: string, value: any) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    // Apply button is now just for visual confirmation / scroll
    const handleManualApply = () => {
        const resultsSection = document.getElementById('job-results');
        if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // SEO Schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": filteredJobs.slice(0, 5).map((job, index) => ({
            "@type": "JobPosting",
            "position": index + 1,
            "title": job.title,
            "description": job.description,
            "hiringOrganization": {
                "@type": "Organization",
                "name": "aiTeam.ph Client",
                "sameAs": "https://aiteam.ph"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": job.location
                }
            },
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": job.currency,
                "value": {
                    "@type": "QuantitativeValue",
                    "minValue": job.rateMin,
                    "maxValue": job.rateMax,
                    "unitText": "HOUR"
                }
            },
            "employmentType": job.type === "Ongoing" ? "FULL_TIME" : "PART_TIME"
        }))
    };

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-geist-sans)' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <title>Apply for Jobs – Get Hired as an AI-Powered VA | aiTeam.ph</title>
            <meta name="description" content="Browse and filter live job postings from all over the world. Use your AI badges to apply fast, get priority matches, and earn higher rates. Free for VAs – start applying today!" />


            <Navbar />

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .job-card {
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .job-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }
                .filter-select {
                    padding: 0.5rem 2rem 0.5rem 1rem;
                    border-radius: 8px;
                    border: 1px solid #d1d5db;
                    background-color: #fff;
                    font-size: 0.9rem;
                    color: #374151;
                    cursor: pointer;
                    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
                    background-repeat: no-repeat;
                    background-position: right 0.7rem top 50%;
                    background-size: 0.65rem auto;
                    appearance: none;
                    white-space: nowrap;
                }
            `}</style>

            <main>
                {/* Hero Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                    padding: '5rem 1.5rem',
                    textAlign: 'center',
                    borderBottom: '1px solid #bbf7d0'
                }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
                            <Briefcase size={16} /> Live Job Board
                        </div>
                        <h1 style={{
                            fontSize: '3rem',
                            fontWeight: '800',
                            color: '#111827',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2'
                        }}>
                            Apply for Jobs – Find Your <br />
                            <span style={{ color: '#28a745' }}>Next Remote Gig Now</span>
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#4b5563',
                            maxWidth: '780px',
                            margin: '0 auto 2.5rem',
                            lineHeight: '1.6'
                        }}>
                            Browse live job postings from all over the world. Filter by industry, hours, rate, and required AI level — then apply in one click using your certified profile. No fees, fast matches, higher pay for badge holders.
                        </p>

                        {/* Benefits Grid in Hero */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.6)', padding: '1rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '600', color: '#166534', border: '1px solid #bbf7d0' }}>
                                Live Job Board
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.6)', padding: '1rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '600', color: '#166534', border: '1px solid #bbf7d0' }}>
                                Smart Filters
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.6)', padding: '1rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '600', color: '#166534', border: '1px solid #bbf7d0' }}>
                                One-Click Apply
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.6)', padding: '1rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '600', color: '#166534', border: '1px solid #bbf7d0' }}>
                                No Fees for VAs
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {/* Buttons removed as per request */}
                        </div>
                    </div>
                </section>

                {/* Sticky Filter Bar */}
                <div id="jobs-filter-bar" style={{ position: 'sticky', top: '0', zIndex: 40, backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                            {/* Layer 1: Primary Filters & Actions */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '0.75rem',
                                alignItems: 'center'
                            }}>
                                {/* Search (Span 2 cols if space allows, or flex grow) */}
                                <div style={{ minWidth: '220px', position: 'relative', gridColumn: 'span 1' }}>
                                    <Search size={18} color="#9ca3af" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                                    <input
                                        type="text"
                                        placeholder="Search jobs (e.g., 'real estate 20 hrs')"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '0.6rem 1rem 0.6rem 2.2rem',
                                            borderRadius: '50px',
                                            border: '1px solid #d1d5db',
                                            fontSize: '0.9rem',
                                            outline: 'none',
                                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                                        }}
                                    />
                                </div>

                                <select
                                    className="filter-select"
                                    value={filters.industry}
                                    onChange={(e) => handleFilterChange('industry', e.target.value)}
                                >
                                    <option value="Any">Industry: Any</option>
                                    {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                                </select>

                                <select
                                    className="filter-select"
                                    value={filters.region}
                                    onChange={(e) => handleFilterChange('region', e.target.value)}
                                >
                                    <option value="Any">Region: Any</option>
                                    {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                                </select>

                                <select
                                    className="filter-select"
                                    value={filters.spokenEnglish}
                                    onChange={(e) => handleFilterChange('spokenEnglish', e.target.value)}
                                    title="Spoken English"
                                >
                                    <option value="Any">Spoken English: Any</option>
                                    {PROFIENCY_LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                                </select>

                                <select
                                    className="filter-select"
                                    value={filters.writtenEnglish}
                                    onChange={(e) => handleFilterChange('writtenEnglish', e.target.value)}
                                    title="Written English"
                                >
                                    <option value="Any">Written English: Any</option>
                                    {PROFIENCY_LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                                </select>


                            </div>

                            <style dangerouslySetInnerHTML={{
                                __html: `
                                @media (max-width: 768px) {
                                    .mobile-toggle { display: block !important; }
                                    .layer-2-wrapper { display: none; }
                                    .layer-2-wrapper.open { display: grid !important; margin-top: 0.5rem; }
                                }
                                @media (min-width: 769px) {
                                    .mobile-toggle { display: none !important; }
                                    .layer-2-wrapper { display: grid !important; border-top: 1px solid #f3f4f6; padding-top: 0.75rem; }
                                }
                            `}} />

                            {/* Mobile Toggle Button */}
                            <div className="mobile-toggle" style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem', marginBottom: '0.25rem' }}>
                                <button
                                    onClick={() => setShowMoreFilters(!showMoreFilters)}
                                    style={{ color: '#027bff', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                                >
                                    {showMoreFilters ? 'Hide Filters' : 'More Filters'}
                                </button>
                            </div>

                            {/* Layer 2: Secondary Filters */}
                            <div className={`layer-2-wrapper ${showMoreFilters ? 'open' : ''}`} style={{
                                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                gap: '0.75rem',
                                alignItems: 'center'
                            }}>
                                <select
                                    className="filter-select"
                                    value={filters.aiLevel}
                                    onChange={(e) => handleFilterChange('aiLevel', e.target.value)}
                                    style={{ fontSize: '0.85rem', padding: '0.4rem 2rem 0.4rem 0.8rem' }}
                                >
                                    <option value="Any">AI Level: Any</option>
                                    {AI_LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                                </select>

                                {/* Rate Filter (USD) - Min/Max Inputs */}
                                <div style={{
                                    border: '1px solid #d1d5db',
                                    borderRadius: '12px',
                                    padding: '0.75rem',
                                    backgroundColor: '#fff',
                                    minWidth: '220px',
                                    width: '100%',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#374151' }}>
                                            Hourly rate: <span style={{ color: '#027bff' }}>${filters.rateMinUSD} - ${filters.rateMaxUSD}</span>
                                        </div>
                                        <button
                                            onClick={() => setFilters(prev => ({ ...prev, rateMinUSD: 0, rateMaxUSD: 50 }))}
                                            style={{ fontSize: '0.75rem', color: '#9ca3af', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
                                        >
                                            Clear
                                        </button>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ fontSize: '0.7rem', color: '#6b7280', display: 'block', marginBottom: '2px' }}>Min ($)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="50"
                                                placeholder="0"
                                                value={filters.rateMinUSD === 0 ? '' : filters.rateMinUSD}
                                                onChange={(e) => handleFilterChange('rateMinUSD', e.target.value === '' ? 0 : parseInt(e.target.value))}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.3rem',
                                                    fontSize: '0.85rem',
                                                    borderRadius: '6px',
                                                    border: '1px solid #d1d5db'
                                                }}
                                            />
                                        </div>
                                        <span style={{ color: '#9ca3af', marginTop: '14px' }}>-</span>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ fontSize: '0.7rem', color: '#6b7280', display: 'block', marginBottom: '2px' }}>Max ($)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                placeholder="50"
                                                value={filters.rateMaxUSD === 0 ? '' : filters.rateMaxUSD}
                                                onChange={(e) => handleFilterChange('rateMaxUSD', e.target.value === '' ? 0 : parseInt(e.target.value))}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.3rem',
                                                    fontSize: '0.85rem',
                                                    borderRadius: '6px',
                                                    border: '1px solid #d1d5db'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <select
                                    className="filter-select"
                                    value={filters.hours}
                                    onChange={(e) => handleFilterChange('hours', e.target.value)}
                                    style={{ fontSize: '0.85rem', padding: '0.4rem 2rem 0.4rem 0.8rem' }}
                                >
                                    <option value="Any">Hours: Any</option>
                                    <option value="10 hrs">10-15 hrs</option>
                                    <option value="20 hrs">20-30 hrs</option>
                                    <option value="40 hrs">40 hrs (Full-Time)</option>
                                </select>

                                <select
                                    className="filter-select"
                                    value={filters.availability}
                                    onChange={(e) => handleFilterChange('availability', e.target.value)}
                                    style={{ fontSize: '0.85rem', padding: '0.4rem 2rem 0.4rem 0.8rem' }}
                                >
                                    <option value="Any">Availability: Any</option>
                                    {AVAILABILITY_OPTIONS.map(a => <option key={a} value={a}>{a}</option>)}
                                </select>

                                {/* Job Type */}
                                <select
                                    className="filter-select"
                                    value={filters.jobType}
                                    onChange={(e) => handleFilterChange('jobType', e.target.value)}
                                    style={{ fontSize: '0.85rem', padding: '0.4rem 2rem 0.4rem 0.8rem' }}
                                >
                                    <option value="Any">Job Type: Any</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Short-Term">Short-Term</option>
                                    <option value="Project-Based">Project-Based</option>
                                </select>

                                {/* Toggles */}
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <div
                                        onClick={() => handleFilterChange('videoIntro', !filters.videoIntro)}
                                        style={{
                                            fontSize: '0.75rem',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '50px',
                                            border: filters.videoIntro ? '1px solid #027bff' : '1px solid #d1d5db',
                                            backgroundColor: filters.videoIntro ? '#e0f2fe' : '#fff',
                                            color: filters.videoIntro ? '#027bff' : '#6b7280',
                                            cursor: 'pointer',
                                            userSelect: 'none',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        Video Intro
                                    </div>
                                    <div
                                        onClick={() => handleFilterChange('portfolio', !filters.portfolio)}
                                        style={{
                                            fontSize: '0.75rem',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '50px',
                                            border: filters.portfolio ? '1px solid #027bff' : '1px solid #d1d5db',
                                            backgroundColor: filters.portfolio ? '#e0f2fe' : '#fff',
                                            color: filters.portfolio ? '#027bff' : '#6b7280',
                                            cursor: 'pointer',
                                            userSelect: 'none',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        Portfolio
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons (Apply/Clear) */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-start', marginTop: '1rem', marginBottom: '0.5rem' }}>
                                <Button
                                    size="sm"
                                    onClick={handleManualApply}
                                    style={{
                                        borderRadius: '50px',
                                        backgroundColor: '#027bff',
                                        borderColor: '#027bff',
                                        padding: '0.5rem 1.5rem',
                                        fontSize: '0.9rem',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Apply filters
                                </Button>
                                <button
                                    onClick={() => {
                                        setFilters({
                                            industry: 'Any',
                                            hours: 'Any',
                                            rateMinUSD: 0,
                                            rateMaxUSD: 50,
                                            aiLevel: 'Any',
                                            spokenEnglish: 'Any',
                                            writtenEnglish: 'Any',
                                            region: 'Any',
                                            availability: 'Any',
                                            jobType: 'Any',
                                            videoIntro: false,
                                            portfolio: false
                                        });
                                        setSearchQuery('');
                                    }}
                                    style={{
                                        fontSize: '0.9rem',
                                        color: '#027bff',
                                        cursor: 'pointer',
                                        background: 'none',
                                        border: 'none',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Clear
                                </button>
                            </div>

                            {/* Results Count Line */}
                            <div style={{ fontSize: '0.85rem', color: '#6b7280', paddingLeft: '0.25rem' }}>
                                Showing <span style={{ fontWeight: 'bold', color: '#111827' }}>{filteredJobs.length}</span> live jobs
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Listings Grid */}
                <section style={{ padding: '2rem 1.5rem', backgroundColor: '#f9fafb', minHeight: '600px' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        {filteredJobs.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '5rem 0', color: '#6b7280' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>No jobs match your filters</h3>
                                <p>Try broadening your search or earning more badges to unlock matches.</p>
                                <Button
                                    variant="outline"
                                    style={{ marginTop: '1.5rem' }}
                                    onClick={() => {
                                        const reset = {
                                            industry: 'Any',
                                            hours: 'Any',
                                            rateMinUSD: 0,
                                            rateMaxUSD: 50,
                                            aiLevel: 'Any',
                                            spokenEnglish: 'Any',
                                            writtenEnglish: 'Any',
                                            region: 'Any',
                                            availability: 'Any',
                                            jobType: 'Any',
                                            videoIntro: false,
                                            portfolio: false
                                        };
                                        setFilters(reset);
                                        setSearchQuery('');
                                    }}
                                >
                                    Reset Filters
                                </Button>
                            </div>
                        ) : (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                                {filteredJobs.map(job => (
                                    <div key={job.id} className="job-card" style={{
                                        backgroundColor: '#fff',
                                        borderRadius: '12px',
                                        border: '1px solid #e5e7eb',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#027bff', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                                                    {job.industry}
                                                </div>
                                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', lineHeight: '1.3' }}>
                                                    {job.title}
                                                </h3>
                                            </div>
                                            <div style={{ backgroundColor: '#f3f4f6', padding: '0.5rem', borderRadius: '8px' }}>
                                                <Building size={20} color="#6b7280" />
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: '#6b7280', marginBottom: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <MapPin size={14} /> {job.location}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <Clock size={14} /> {job.postedAt}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                            {job.skills.slice(0, 3).map((skill, idx) => (
                                                <span key={idx} style={{
                                                    backgroundColor: skill.includes('AI') ? '#dcfce7' : '#eff6ff',
                                                    color: skill.includes('AI') ? '#166534' : '#1e40af',
                                                    fontSize: '0.75rem',
                                                    padding: '0.25rem 0.5rem',
                                                    borderRadius: '4px',
                                                    fontWeight: '600'
                                                }}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.5', marginBottom: '1.5rem', flex: 1 }}>
                                            {job.description}
                                        </p>

                                        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1rem', marginTop: 'auto' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#111827' }}>
                                                    ${job.rateMin}–${job.rateMax}<span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#6b7280' }}>/hr</span>
                                                </div>
                                                <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>
                                                    {job.hours} hrs/wk
                                                </div>
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                                <Button size="sm" variant="outline" style={{ borderColor: '#e5e7eb', color: '#374151' }}>View Details</Button>
                                                <Button size="sm" style={{ backgroundColor: '#28a745', borderColor: '#28a745', color: '#fff' }}>Apply Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Supporting Sections */}

                {/* Tips */}
                <section style={{ backgroundColor: '#fff', padding: '4rem 1.5rem', borderTop: '1px solid #e5e7eb' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '2rem' }}>Quick Tips for Getting Hired Faster</h2>
                        <div style={{ textAlign: 'left', display: 'grid', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#eff6ff', padding: '0.5rem', borderRadius: '50%', height: 'fit-content' }}><User size={20} color="#027bff" /></div>
                                <div>
                                    <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#111827' }}>1. Complete your profile</h4>
                                    <p style={{ color: '#4b5563' }}>Profiles with a photo, video intro, and resume get 3× more views.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#dcfce7', padding: '0.5rem', borderRadius: '50%', height: 'fit-content' }}><Star size={20} color="#16a34a" /></div>
                                <div>
                                    <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#111827' }}>2. Earn more badges</h4>
                                    <p style={{ color: '#4b5563' }}>Advanced AI VAs get priority placement in searches and applicant lists.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#eff6ff', padding: '0.5rem', borderRadius: '50%', height: 'fit-content' }}><Send size={20} color="#027bff" /></div>
                                <div>
                                    <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#111827' }}>3. Apply to 5–10 jobs per week</h4>
                                    <p style={{ color: '#4b5563' }}>Consistency increases your chances dramatically. Don't wait for the perfect one apply to good matches.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section style={{ backgroundColor: '#f0fdf4', padding: '5rem 1.5rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem', color: '#111827' }}>
                            Pinoy VAs <span style={{ color: '#28a745' }}>Crushing It Globally</span>
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { name: "Maria, Cebu", quote: "Applied after earning Intermediate AI badge — got hired in 4 days at $16/hr! The client loved my video intro.", role: "Real Estate VA" },
                                { name: "John, Davao", quote: "The Basic AI + B2 English badges really helped. I got 3 interview requests in my first week. This platform works.", role: "General Admin" },
                                { name: "Anna, Manila", quote: "Now earning $1,200/month part-time. My Advanced AI Expert badge was the key differentiator.", role: "Marketing Specialist" }
                            ].map((story, i) => (
                                <div key={i} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #bbf7d0' }}>
                                    <Star size={24} fill="#fbbf24" color="#fbbf24" style={{ marginBottom: '1rem' }} />
                                    <p style={{ fontSize: '1.1rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>"{story.quote}"</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '48px', height: '48px', backgroundColor: '#e5e7eb', borderRadius: '50%' }}></div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#111827' }}>{story.name}</div>
                                            <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>{story.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section style={{ backgroundColor: '#fff', padding: '5rem 1.5rem' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>Frequently Asked Questions</h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                { q: "How do I apply?", a: "One-click apply with your profile — no long forms. Just click 'Apply Now' on any job card." },
                                { q: "Do I need to be certified?", a: "Not always, but badges give you priority and higher rates. Most clients filter for AI-certified VAs." },
                                { q: "How fast can I get hired?", a: "Many certified VAs get offers within 1–2 weeks, sometimes as fast as 4 days." },
                                { q: "Is there a fee to apply?", a: "No — completely free for VAs. You keep 100% of your earnings." }
                            ].map((faq, i) => (
                                <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
                                    <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem', color: '#111827' }}>{faq.q}</h4>
                                    <p style={{ color: '#4b5563' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section style={{
                    padding: '6rem 1.5rem',
                    textAlign: 'center',
                    background: 'linear-gradient(to bottom, #dcfce7, white)',
                    borderTop: '1px solid #bbf7d0'
                }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                            Your Next Job Is Waiting
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2.5rem' }}>
                            Apply today — the more badges you have, the faster clients reach out.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
                            <Button size="lg" style={{ backgroundColor: '#28a745', borderColor: '#28a745', fontSize: '1.1rem', padding: '1rem 2rem' }}
                                onClick={() => document.getElementById('jobs-filter-bar')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Browse & Apply to Jobs Now
                            </Button>
                            <Link href="/for-vas/earn-badges">
                                <Button size="lg" variant="outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem', color: '#027bff', borderColor: '#027bff' }}>
                                    Earn More Badges First
                                </Button>
                            </Link>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', color: '#64748b', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><CheckCircle size={16} /> No Fees for VAs</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ShieldCheck size={16} /> Secure Payments via Wise/Xendit</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ShieldCheck size={16} /> 7-Day Client Guarantee</span>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

