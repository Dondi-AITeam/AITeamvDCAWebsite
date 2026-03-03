import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';

export default function IndustriesPage() {
    const industries = [
        { name: 'Real Estate', slug: 'real-estate', description: 'AI listing optimization, lead gen & transaction coordination' },
        { name: 'E-commerce / Online Retail', slug: 'e-commerce-online-retail', description: 'Product uploads, AI descriptions & inventory automation' },
        { name: 'Digital Marketing & Social Media', slug: 'digital-marketing-social-media', description: 'AI content creation, scheduling & ad performance' },
        { name: 'General Administrative / Executive Support', slug: 'general-administrative', description: 'Email, calendar & AI workflow automation' },
        { name: 'Customer Service / Support', slug: 'customer-service-support', description: '24/7 AI-assisted support & ticket resolution' },
        { name: 'Coaching, Consulting & Online Education', slug: 'coaching-consulting', description: 'Student onboarding, community mgmt & course creation' },
        { name: 'SaaS / Tech Startups', slug: 'saas-tech-startups', description: 'SDR outreach, demo booking & churn reduction' },
        { name: 'Healthcare / Medical Admin', slug: 'healthcare-medical-admin', description: 'HIPAA-compliant scheduling & patient intake' },
        { name: 'Finance / Bookkeeping / Accounting', slug: 'finance-bookkeeping', description: 'Invoice processing, expense tracking & reporting' },
        { name: 'Content Creation & Writing', slug: 'content-creation-writing', description: 'Blog writing, SEO optimization & script generation' },
        { name: 'Lead Generation & Sales Support', slug: 'lead-generation-sales', description: 'Data enrichment, prospecting & pipeline mgmt' },
        { name: 'Legal Support', slug: 'legal-support', description: 'Document review, research & case management' },
        { name: 'Recruitment / HR Admin', slug: 'recruitment-hr-admin', description: 'Candidate sourcing, screening & onboarding' },
        { name: 'Graphic Design / Video Editing', slug: 'graphic-design-video', description: 'Social graphics, basic video editing & branding' },
        { name: 'Project Management / Operations', slug: 'project-management-ops', description: 'Task tracking, sprint planning & team coordination' },
    ];

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
            <Navbar />
            <main style={{ padding: '6rem 2rem', flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827', textAlign: 'center' }}>Explore Our Top AI-Trained VA Industries</h1>
                <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    Find pre-certified virtual assistants specialized in your sector – powered by AI for exponential productivity.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {industries.map((industry) => (
                        <Link key={industry.slug} href={`/industries/${industry.slug}`} style={{ textDecoration: 'none' }}>
                            <div style={{ padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '1rem', transition: 'all 0.2s', height: '100%' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>{industry.name}</h2>
                                <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>{industry.description}</p>
                                <span style={{ color: '#027bff', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    View VAs &rarr;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
