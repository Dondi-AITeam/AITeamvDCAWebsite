'use client'; // Mobile Navbar Implementation

import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import styles from './Navbar.module.css';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveMobileDropdown(null);
    };

    const toggleMobileDropdown = (name: string) => {
        setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
                    <span style={{ color: 'var(--secondary)' }}>ai</span>Team<span className={styles.dot}>.ph</span>
                </Link>

                {/* Mobile Toggle Button */}
                <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Nav Links */}
                <div className={styles.navLinks}>
                    <div className={styles.linkItem}>
                        <Link href="/" className={styles.link}>Home</Link>
                    </div>

                    <div className={styles.linkItem}>
                        <span className={styles.link}>Hire Hybrid Talent <ChevronDown size={14} /></span>
                        <div className={styles.dropdown}>
                            <Link href="/hire" className={styles.dropdownLink}>Browse AI-Certified VAs</Link>
                            <Link href="/post-job" className={styles.dropdownLink}>Post A Job</Link>
                            <Link href="/calculator" className={styles.dropdownLink}>Savings Calculator</Link>
                            <Link href="/how-it-works" className={styles.dropdownLink}>How It Works</Link>
                            <Link href="/pricing" className={styles.dropdownLink}>Pricing</Link>
                        </div>
                    </div>

                    <div className={styles.linkItem}>
                        <span className={styles.link}>Industries <ChevronDown size={14} /></span>
                        <div className={styles.megaMenu}>
                            <div className={styles.megaMenuHeader}>
                                <div className={styles.megaMenuTitle}>Explore Our Top AI-Trained VA Industries</div>
                                <div className={styles.megaMenuSubtitle}>Find pre-certified virtual assistants specialized in your sector – powered by AI for exponential productivity</div>
                            </div>

                            <div className={styles.industryGrid}>
                                {[
                                    { name: 'Real Estate', slug: 'real-estate', benefit: 'AI listing optimization, lead gen & transaction coordination' },
                                    { name: 'E-commerce / Online Retail', slug: 'e-commerce-online-retail', benefit: 'Product uploads, AI descriptions & inventory automation' },
                                    { name: 'Digital Marketing & Social Media', slug: 'digital-marketing-social-media', benefit: 'AI content creation, scheduling & ad performance' },
                                    { name: 'General Administrative / Executive Support', slug: 'general-administrative', benefit: 'Email, calendar & AI workflow automation' },
                                    { name: 'Customer Service / Support', slug: 'customer-service-support', benefit: '24/7 AI-assisted support & ticket resolution' },
                                    { name: 'Coaching, Consulting & Online Education', slug: 'coaching-consulting', benefit: 'Student onboarding, community mgmt & course creation' },
                                    { name: 'SaaS / Tech Startups', slug: 'saas-tech-startups', benefit: 'User onboarding & AI support workflows' },
                                    { name: 'Healthcare / Medical Admin', slug: 'healthcare-medical-admin', benefit: 'Scheduling, transcription & HIPAA-aware admin' },
                                    { name: 'Finance / Bookkeeping / Accounting', slug: 'finance-bookkeeping', benefit: 'Reconciliation, invoicing & reporting automation' },
                                    { name: 'Content Creation & Writing', slug: 'content-creation-writing', benefit: 'AI generation, editing & research acceleration' },
                                    { name: 'Lead Generation & Sales Support', slug: 'lead-generation-sales', benefit: 'Outreach, qualification & predictive scoring' },
                                    { name: 'Legal Support', slug: 'legal-support', benefit: 'Document review, research & contract analysis' },
                                    { name: 'Recruitment / HR Admin', slug: 'recruitment-hr-admin', benefit: 'Candidate screening & onboarding automation' },
                                    { name: 'Graphic Design / Video Editing', slug: 'graphic-design-video', benefit: 'AI image generation & light editing coordination' },
                                    { name: 'Project Management / Operations', slug: 'project-management-ops', benefit: 'Task tracking & resource forecasting' },
                                ].map((industry) => (
                                    <Link key={industry.slug} href={`/industries/${industry.slug}`} className={styles.industryItem}>
                                        <div className={styles.industryContent}>
                                            <span className={styles.industryName}>{industry.name}</span>
                                            <span className={styles.industryBenefit}>{industry.benefit}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className={styles.viewAllLink}>
                                <Link href="/industries">
                                    <Button variant="outline" size="sm">View All Industries</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.linkItem}>
                        <span className={styles.link}>For VAs <ChevronDown size={14} /></span>
                        <div className={styles.dropdown}>
                            <Link href="/courses" className={styles.dropdownLink}>Start Free AI Training</Link>
                            <Link href="/badges" className={styles.dropdownLink}>Earn Badges & Certifications</Link>
                            <Link href="/for-vas/apply-for-jobs" className={styles.dropdownLink}>Apply for Jobs</Link>
                            <Link href="/community" className={styles.dropdownLink}>Join the Community</Link>
                        </div>
                    </div>

                    <div className={styles.linkItem}>
                        <Link href="/blog" className={styles.link}>Blog</Link>
                    </div>

                    <div className={styles.linkItem}>
                        <Link href="/login" className={styles.link}>Login</Link>
                    </div>

                    <Link href="/register">
                        <Button size="sm" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Sign Up</Button>
                    </Link>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={clsx(styles.mobileMenu, isMobileMenuOpen && styles.mobileMenuOpen)}>
                    <div className={styles.mobileNavLinks}>
                        <Link href="/" className={styles.mobileLink} onClick={closeMobileMenu}>Home</Link>

                        {/* Mobile Hire Talent Accordion */}
                        <div className={styles.mobileAccordion}>
                            <button
                                className={styles.mobileAccordionToggle}
                                onClick={() => toggleMobileDropdown('hire')}
                            >
                                Hire Hybrid Talent
                                {activeMobileDropdown === 'hire' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            <div className={clsx(styles.mobileAccordionContent, activeMobileDropdown === 'hire' && styles.open)}>
                                <Link href="/hire" className={styles.mobileSubLink} onClick={closeMobileMenu}>Browse AI-Certified VAs</Link>
                                <Link href="/post-job" className={styles.mobileSubLink} onClick={closeMobileMenu}>Post A Job</Link>
                                <Link href="/calculator" className={styles.mobileSubLink} onClick={closeMobileMenu}>Savings Calculator</Link>
                                <Link href="/how-it-works" className={styles.mobileSubLink} onClick={closeMobileMenu}>How It Works</Link>
                                <Link href="/pricing" className={styles.mobileSubLink} onClick={closeMobileMenu}>Pricing</Link>
                            </div>
                        </div>

                        {/* Mobile Industries Accordion */}
                        <div className={styles.mobileAccordion}>
                            <button
                                className={styles.mobileAccordionToggle}
                                onClick={() => toggleMobileDropdown('industries')}
                            >
                                Industries
                                {activeMobileDropdown === 'industries' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            <div className={clsx(styles.mobileAccordionContent, activeMobileDropdown === 'industries' && styles.open)}>
                                {[
                                    { name: 'Real Estate', slug: 'real-estate' },
                                    { name: 'E-commerce / Online Retail', slug: 'e-commerce-online-retail' },
                                    { name: 'Digital Marketing & Social Media', slug: 'digital-marketing-social-media' },
                                    { name: 'General Administrative / Executive Support', slug: 'general-administrative' },
                                    { name: 'Customer Service / Support', slug: 'customer-service-support' },
                                    { name: 'Coaching, Consulting & Online Education', slug: 'coaching-consulting' },
                                    { name: 'SaaS / Tech Startups', slug: 'saas-tech-startups' },
                                    { name: 'Healthcare / Medical Admin', slug: 'healthcare-medical-admin' },
                                    { name: 'Finance / Bookkeeping / Accounting', slug: 'finance-bookkeeping' },
                                    { name: 'Content Creation & Writing', slug: 'content-creation-writing' },
                                    { name: 'Lead Generation & Sales Support', slug: 'lead-generation-sales' },
                                    { name: 'Legal Support', slug: 'legal-support' },
                                    { name: 'Recruitment / HR Admin', slug: 'recruitment-hr-admin' },
                                    { name: 'Graphic Design / Video Editing', slug: 'graphic-design-video' },
                                    { name: 'Project Management / Operations', slug: 'project-management-ops' },
                                ].map(i => (
                                    <Link key={i.slug} href={`/industries/${i.slug}`} className={styles.mobileSubLink} onClick={closeMobileMenu}>
                                        {i.name}
                                    </Link>
                                ))}
                                <Link href="/industries" className={styles.mobileSubLink} onClick={closeMobileMenu} style={{ fontWeight: 'bold', color: '#027bff' }}>
                                    View All Industries
                                </Link>
                            </div>
                        </div>

                        {/* Mobile For VAs Accordion */}
                        <div className={styles.mobileAccordion}>
                            <button
                                className={styles.mobileAccordionToggle}
                                onClick={() => toggleMobileDropdown('vas')}
                            >
                                For VAs
                                {activeMobileDropdown === 'vas' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            <div className={clsx(styles.mobileAccordionContent, activeMobileDropdown === 'vas' && styles.open)}>
                                <Link href="/courses" className={styles.mobileSubLink} onClick={closeMobileMenu}>Start Free AI Training</Link>
                                <Link href="/badges" className={styles.mobileSubLink} onClick={closeMobileMenu}>Earn Badges & Certifications</Link>
                                <Link href="/for-vas/apply-for-jobs" className={styles.mobileSubLink} onClick={closeMobileMenu}>Apply for Jobs</Link>
                                <Link href="/community" className={styles.mobileSubLink} onClick={closeMobileMenu}>Join the Community</Link>
                            </div>
                        </div>

                        <Link href="/blog" className={styles.mobileLink} onClick={closeMobileMenu}>Blog</Link>
                        <Link href="/login" className={styles.mobileLink} onClick={closeMobileMenu}>Login</Link>
                        <Link href="/register" className={styles.mobileLink} onClick={closeMobileMenu} style={{ color: '#027bff', fontWeight: 'bold' }}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
