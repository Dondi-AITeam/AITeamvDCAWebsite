import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import { industriesData } from '@/lib/industry-data';
import { CheckCircle2, ArrowRight, Zap, Target, FileText } from 'lucide-react';
import { HeyGenEmbed } from '@/components/ui/HeyGenEmbed';

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Specific Single-Screen Layout for E-commerce
    if (slug === 'e-commerce-online-retail') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for E-Commerce / Retail
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate product listings, customer engagement, marketing, and order workflows
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Selling.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Fast admin & product management support from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude (writing & summarization), Canva Magic Studio (basics), Google Sheets/Excel AI features.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted product descriptions & customer emails</li>
                                                <li>Updated listings in Shopify, WooCommerce, Lazada, Shopee</li>
                                                <li>Order/inventory data extraction from PDFs/CSVs</li>
                                                <li>Simple promotional graphics</li>
                                                <li>Customer inquiry & order note logging</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Marketing, content & customer engagement on autopilot.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced Canva AI, HeyGen (AI avatars), Opus Clip/CapCut (video editing), ChatGPT/Claude (chat templates), Zapier (basic workflows).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Branded social posts, carousels, promotions</li>
                                                <li>Short product videos (TikTok, Instagram, YouTube Shorts)</li>
                                                <li>SEO-optimized product descriptions</li>
                                                <li>Multi-platform image resizing & enhancement</li>
                                                <li>Automated order/shipping notifications</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Automated systems, inventory forecasting & analytics-driven ops.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom agents), Shopify/WooCommerce AI integrations, Advanced Zapier/Make.com, Power BI/Google Data Studio (reporting).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Auto inventory monitoring & reorder alerts</li>
                                                <li>Lead nurturing & post-purchase sequences</li>
                                                <li>Dynamic pricing & discount campaign automation</li>
                                                <li>End-to-end order-to-delivery workflows</li>
                                                <li>Sales/performance dashboards with insights</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here are 5 new products for our Shopify store. Create product listings, 3 Instagram captions, a short promo video, and an email blast."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Fully formatted product listings with SEO-optimized descriptions</li>
                                                <li>3 social media captions + promotional graphics</li>
                                                <li>15–30 second product video</li>
                                                <li>Email/newsletter draft ready to send</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Products live quickly, marketing ready, customer engagement automated.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your E-Commerce VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Digital Marketing
    if (slug === 'digital-marketing-social-media') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Digital Marketing / Social Media
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate content creation, campaign management, lead nurturing, and performance reporting
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Growing.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Fast content & campaign admin support from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (copywriting & summaries), Canva Magic Studio (basics), Google Docs + Sheets AI features.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted captions, blog outlines, email newsletters</li>
                                                <li>Repurposed long-form content into short posts</li>
                                                <li>Basic hashtag research</li>
                                                <li>Updated content calendars</li>
                                                <li>Simple social graphics & quote cards</li>
                                                <li>CRM tagging & campaign notes</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>AI-powered content creation & marketing automation.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced Canva AI (brand kits/carousels), CapCut / Opus Clip (short videos), HeyGen (AI avatars), Meta Business Suite / LinkedIn Scheduler, Zapier (lead automations).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Branded carousels & campaign visuals</li>
                                                <li>Short-form videos (Reels, Shorts, TikTok)</li>
                                                <li>AI avatar explainer / lead magnet videos</li>
                                                <li>Multi-platform content repurposing</li>
                                                <li>Landing page copy drafts</li>
                                                <li>Basic funnel automations (lead form → email)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Performance systems, analytics, and AI-driven optimization.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom agents), Meta Ads / Google Ads AI features, Advanced Zapier / Make.com, GA4 reporting, Looker Studio dashboards.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated lead nurturing sequences</li>
                                                <li>Ad performance monitoring & reports</li>
                                                <li>A/B test tracking & summaries</li>
                                                <li>Funnel performance dashboards</li>
                                                <li>Audience retargeting workflows</li>
                                                <li>KPI-based campaign optimization suggestions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here’s a webinar recording and landing page link. Create 3 social posts, 1 short video clip, and a follow-up email."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>3 platform-optimized captions (LinkedIn, Facebook, Instagram)</li>
                                                <li>30–60 second highlight clip with captions</li>
                                                <li>Email draft with subject line variations</li>
                                                <li>Branded Canva graphic</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Campaign assets ready to publish the same day.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Digital Marketing VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for General Administrative
    if (slug === 'general-administrative') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for General Administrative Support
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate email management, reporting, scheduling, data handling, and workflow coordination
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Leading.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Fast admin execution from day 1 — accurate and efficient support.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (email & summaries), Google Docs & Sheets AI features, PDF AI tools (extraction & summarization), Canva Magic Studio (basics).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Professional email drafting & inbox replies</li>
                                                <li>Meeting notes & summary generation</li>
                                                <li>Calendar scheduling support</li>
                                                <li>Data entry & spreadsheet cleanup</li>
                                                <li>PDF-to-Excel data extraction</li>
                                                <li>Basic SOP formatting & documentation</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Workflow coordination, reporting & light automation.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced Google Workspace AI, Notion / ClickUp AI (task tracking), Zapier (basic automations), Loom (process docs), AI transcription tools.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Weekly/monthly executive reports</li>
                                                <li>Project status tracking dashboards</li>
                                                <li>Automated meeting reminders & follow-ups</li>
                                                <li>Client onboarding documentation</li>
                                                <li>Internal SOP creation & optimization</li>
                                                <li>Task automation across email/CRM/task manager</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Systems management, automation architecture & executive ops support.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom agents), Advanced Zapier / Make.com (multi-step automations), CRM AI features (HubSpot / Salesforce), Looker Studio or Power BI dashboards, Document management AI.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated reporting dashboards</li>
                                                <li>Cross-platform workflow automation</li>
                                                <li>Executive KPI tracking systems</li>
                                                <li>Vendor & contract tracking systems</li>
                                                <li>Recurring billing & invoice tracking workflows</li>
                                                <li>Internal compliance & audit-ready documentation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here are last week’s meeting recordings, expense receipts, and client emails. Prepare a summary report, update the tracker, and draft follow-up emails."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Executive summary of meetings (bullet + narrative)</li>
                                                <li>Updated project & expense tracker</li>
                                                <li>3 professional follow-up emails ready to send</li>
                                                <li>Organized folder structure with labeled files</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Leadership stays informed without doing admin work.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your General Admin VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Customer Support
    if (slug === 'customer-service-support') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Customer Support
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate ticket handling, response drafting, escalation routing, and customer retention workflows
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Delighting Customers.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Fast, professional customer response handling from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (response drafting & tone), Helpdesk AI (Zendesk/Freshdesk canned responses), Google Docs AI (knowledge base), AI grammar/tone checkers.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Accurate, empathetic customer replies</li>
                                                <li>Tone-adapted responses (friendly/formal/urgent)</li>
                                                <li>Ticket tagging & categorization</li>
                                                <li>FAQ/knowledge base formatting</li>
                                                <li>Long thread summarization</li>
                                                <li>Escalation identification</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Multi-channel support management & workflow automation.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced helpdesk automations (Zendesk/Freshdesk), Chatbot training (Intercom/ManyChat basics), Zapier (ticket routing), AI sentiment analysis, CRM integration features.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Managed email/chat/social inboxes</li>
                                                <li>Chatbot conversation flows</li>
                                                <li>Automated ticket routing & tagging</li>
                                                <li>CSAT follow-up sequences</li>
                                                <li>Complaint resolution frameworks</li>
                                                <li>Escalation workflows to internal teams</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>AI-driven support optimization, analytics & retention systems.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom support agents), Advanced CRM AI (HubSpot/Salesforce Service Cloud), Advanced Zapier/Make.com, Customer analytics (Looker Studio/Power BI), Churn prediction tools.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated response optimization workflows</li>
                                                <li>Customer retention & win-back sequences</li>
                                                <li>Escalation risk detection (VIP/high-value)</li>
                                                <li>CSAT & response time dashboards</li>
                                                <li>Root-cause reporting for recurring issues</li>
                                                <li>SOPs for service quality assurance</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here are 15 open tickets, 3 refund requests, and 2 negative reviews. Clear the queue and prepare a summary."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Personalized, brand-aligned responses for all tickets</li>
                                                <li>Refund decision drafts with policy references</li>
                                                <li>Professional public responses to negative reviews</li>
                                                <li>Summary report highlighting common complaint themes</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Inbox cleared, reputation protected, management informed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Customer Support VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Coaching & Consulting
    if (slug === 'coaching-consulting') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Coaching & Consulting
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate client follow-ups, content repurposing, funnel support, and program delivery systems
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Impacting More Lives.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Executive support & content repurposing from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (drafting & summaries), Google Docs AI (notes & formatting), Canva Magic Studio (basics), AI transcription tools (Zoom/Otter summaries).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Summarized coaching session recordings</li>
                                                <li>Drafted client follow-up emails</li>
                                                <li>Simple quote graphics from sessions</li>
                                                <li>Formatted worksheets & PDFs</li>
                                                <li>Updated CRM notes & client trackers</li>
                                                <li>Calendar scheduling & confirmations</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Content marketing, funnel support & audience engagement.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced Canva AI (carousels/templates), CapCut / Opus Clip (short videos), HeyGen (AI avatars), Email tools (Mailchimp/ConvertKit AI), Zapier (lead → CRM → email automations).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Webinar repurposed into social posts & short videos</li>
                                                <li>Lead magnets (checklists, mini guides)</li>
                                                <li>Drafted nurture email sequences</li>
                                                <li>Landing page copy drafts</li>
                                                <li>Basic funnel automation setup</li>
                                                <li>Client onboarding email flows</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Automated program delivery, analytics & scalable systems.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom agents), Advanced Zapier / Make.com workflows, CRM AI (HubSpot / GoHighLevel), Course platforms (Kajabi / Teachable AI), Looker Studio dashboards.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated client onboarding & milestone tracking</li>
                                                <li>Program completion tracking & reminders</li>
                                                <li>Revenue & funnel performance dashboards</li>
                                                <li>Upsell & renewal automation sequences</li>
                                                <li>Client feedback analysis & reporting</li>
                                                <li>SOPs for scalable delivery systems</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here’s a 60-minute coaching webinar recording. Create 3 social posts, a short video clip, and a 5-email follow-up sequence for attendees."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>3 optimized social captions + branded graphics</li>
                                                <li>30–60 second highlight clip with subtitles</li>
                                                <li>Structured 5-email nurture sequence</li>
                                                <li>Key takeaway summary PDF</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Webinar repurposed into multi-channel assets immediately.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Coaching VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for SaaS / Tech Startups
    if (slug === 'saas-tech-startups') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for SaaS / Tech Startups
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate onboarding, lead routing, CRM updates, analytics tracking, and growth operations
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Scaling.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Foundational startup admin & support from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (email & summaries), Google Docs & Sheets AI, Notion AI (wiki/task notes), AI transcription tools.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted customer emails & onboarding replies</li>
                                                <li>Meeting note summaries for founders</li>
                                                <li>Updated CRM & pipeline notes</li>
                                                <li>Formatted SOPs & internal documentation</li>
                                                <li>Calendar scheduling & demo confirmations</li>
                                                <li>Basic lead list cleanup</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Growth support, onboarding & workflow automation.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> HubSpot / Pipedrive AI features, Intercom / Customer.io basics, Zapier (lead → CRM → email), Loom (async walkthroughs), Canva AI (pitch decks & graphics).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated lead routing & demo scheduling</li>
                                                <li>Onboarding email sequences</li>
                                                <li>Customer FAQ documentation</li>
                                                <li>Product tutorial scripts & walkthrough outlines</li>
                                                <li>Basic KPI tracking spreadsheets</li>
                                                <li>Support-to-product feedback summaries</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Systems automation, analytics & revenue ops support.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom agents), Advanced Zapier / Make.com (multi-step workflows), CRM automation (HubSpot / Salesforce), Looker Studio / Power BI dashboards, No-code API/webhook integrations.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated onboarding & churn-risk alerts</li>
                                                <li>Revenue & pipeline dashboards</li>
                                                <li>Customer lifecycle tracking systems</li>
                                                <li>Cross-platform integration workflows</li>
                                                <li>Founder KPI summary reports</li>
                                                <li>Process optimization documentation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here are 25 new signups from this week. Update the CRM, send onboarding emails, schedule demos for qualified leads, and summarize churn feedback from last month."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Cleaned and updated CRM entries</li>
                                                <li>Personalized onboarding email sequence triggered</li>
                                                <li>Demo bookings scheduled for qualified leads</li>
                                                <li>Churn feedback summary with categorized themes</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Growth team gets clarity, founders stay focused on product.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your SaaS VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Healthcare / Medical Admin
    if (slug === 'healthcare-medical-admin') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Healthcare / Medical Admin
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate patient communication, appointment coordination, record updates, billing support, and compliance workflows
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Supporting Care.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value while prioritizing compliance and accuracy.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Core admin support for healthcare providers from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (email drafting & summaries), Google Docs & Sheets AI, PDF AI tools (forms/documents), Basic HIPAA-compliant data handling principles.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted patient emails & appointment reminders</li>
                                                <li>Summarized physician notes & meeting transcripts</li>
                                                <li>Updated patient records in EMR/CRM systems</li>
                                                <li>Data entry for appointments, billing, insurance claims</li>
                                                <li>Formatted healthcare forms & reports</li>
                                                <li>Calendar & scheduling support</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Workflow coordination, patient follow-ups & light automation.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced EMR/EHR AI features (Epic, Cerner, Athenahealth basics), Scheduling automation (Calendly/Acuity AI), Zapier (patient notifications), AI transcription & summarization.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Coordinated appointments across providers</li>
                                                <li>Automated follow-up emails & reminders</li>
                                                <li>Maintained medical & billing spreadsheets</li>
                                                <li>Summarized patient communications for physicians</li>
                                                <li>Tracked referral workflows</li>
                                                <li>Updated internal SOPs for admin efficiency</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Systems optimization, compliance & reporting analytics.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom agents), Advanced Zapier / Make.com automations, Healthcare CRM / EHR workflow automation (HIPAA-compliant), Looker Studio / Power BI dashboards, AI audit & compliance tools.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated patient follow-up sequences & escalation triggers</li>
                                                <li>EMR/EHR workflow optimization</li>
                                                <li>Reporting dashboards for visits, billing, referrals</li>
                                                <li>Compliance tracking & documentation</li>
                                                <li>SOP creation for operational consistency</li>
                                                <li>Analytics for satisfaction, no-shows, claims efficiency</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here are last week’s patient appointments, follow-up notes, and insurance forms. Update records, send reminders, and prepare a weekly summary report."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Updated patient records in EMR/CRM</li>
                                                <li>Sent automated follow-up reminders</li>
                                                <li>Summarized weekly patient visits & outstanding tasks</li>
                                                <li>Prepared billing & referral summary sheet</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Clinic admin streamlined, physicians focused on patient care.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Healthcare Admin VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Finance & Bookkeeping
    if (slug === 'finance-bookkeeping') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Finance & Accounting
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate bookkeeping, invoice processing, reconciliation, reporting, and financial workflows
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Managing Finances.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value and accuracy.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Core bookkeeping & finance admin from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (reports & emails), Google Sheets / Excel AI (formulas & cleaning), PDF AI tools (invoice/receipt extraction), Basic accounting principles.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Recorded invoices, payments & receipts</li>
                                                <li>Reconciled small accounts & transactions</li>
                                                <li>Drafted professional financial emails</li>
                                                <li>Summarized expenses for reports</li>
                                                <li>Formatted spreadsheets & simple dashboards</li>
                                                <li>Maintained digital filing for documents</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Automated bookkeeping, reporting & basic analysis.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> QuickBooks / Xero AI features (auto entry & reconciliation), Zapier (invoice/payment automation), Advanced Excel / Google Sheets AI (pivot tables, VLOOKUP/XLOOKUP), AI data cleaning & categorization.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Weekly/monthly bookkeeping reports</li>
                                                <li>Automated invoice generation & reminders</li>
                                                <li>Bank & payment reconciliation</li>
                                                <li>Expense categorization & analysis</li>
                                                <li>Drafted simple budget & cash flow summaries</li>
                                                <li>CRM/accounting integration for reporting</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Financial systems automation, analysis & decision support.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom finance agents), Advanced Zapier / Make.com (recurring automations), Accounting software dashboards (QuickBooks, Xero, Zoho Books), Looker Studio / Power BI reporting, AI forecasting tools.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated monthly/quarterly reports & dashboards</li>
                                                <li>Accounts payable/receivable workflow automation</li>
                                                <li>Financial KPI tracking (cash flow, budget vs actual)</li>
                                                <li>Forecasting & variance analysis summaries</li>
                                                <li>Audit-ready documentation preparation</li>
                                                <li>Compliance tracking & SOP creation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here are this month’s invoices, receipts, and bank statements. Update books, reconcile accounts, and prepare a summary for management."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Updated accounting books and transaction logs</li>
                                                <li>Reconciled bank statements</li>
                                                <li>Categorized expenses and revenue</li>
                                                <li>Summary report of cash flow & outstanding payments</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Management has up-to-date financials without manual effort.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Finance VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Content Creation & Writing
    if (slug === 'content-creation-writing') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Content Creation & Writing
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate content drafting, repurposing, SEO optimization, social posts, newsletters, and editorial workflows
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Creating Impact.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value and creative output.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Fast content drafting & admin support from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (copywriting & summaries), Google Docs & Sheets AI features, Canva Magic Studio (basics), AI grammar & tone checkers.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted blog posts, captions, emails & newsletters</li>
                                                <li>Repurposed long-form content into short posts</li>
                                                <li>Basic hashtag research & keyword suggestions</li>
                                                <li>Updated content calendars</li>
                                                <li>Simple social graphics & quote cards</li>
                                                <li>Formatted internal docs & client notes</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Full content production, repurposing & multi-channel publishing.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced Canva AI (carousels/templates), CapCut / Opus Clip (short videos), HeyGen (AI avatar videos), Meta Business Suite / LinkedIn Scheduler, Zapier (lead/content automations), Mailchimp / ConvertKit AI.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Branded social carousels & campaign visuals</li>
                                                <li>Short-form videos (Reels, Shorts, TikTok)</li>
                                                <li>AI avatar explainer & training content</li>
                                                <li>Multi-platform content repurposing</li>
                                                <li>SEO-optimized landing page & blog copy</li>
                                                <li>Automated nurture sequences & publishing schedules</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Content systems automation, performance analytics & optimization.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom content agents), Advanced Zapier / Make.com (multi-step workflows), GA4 & Looker Studio dashboards, AI SEO & topic research tools, Advanced CRM content automation (HubSpot).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated content pipelines & repurposing agents</li>
                                                <li>Performance dashboards (engagement, traffic, conversions)</li>
                                                <li>A/B test tracking & headline/copy optimization</li>
                                                <li>Topic cluster & content gap analysis reports</li>
                                                <li>Audience segmentation & personalized content sequences</li>
                                                <li>Editorial SOPs & workflow documentation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here’s a 60-minute webinar recording and topic brief. Create 3 social posts, a short video clip, and a 5-email follow-up sequence."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>3 optimized social captions + branded graphics</li>
                                                <li>30–60 second highlight clip with subtitles</li>
                                                <li>Structured 5-email nurture sequence</li>
                                                <li>Key takeaway summary PDF</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Content repurposed into multi-channel assets immediately.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Content Creation VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Lead Generation & Sales
    if (slug === 'lead-generation-sales') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Lead Generation & Sales
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate lead research, outreach personalization, multi-channel sourcing, scoring, and pipeline nurturing
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Filling Your Pipeline.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value and qualified leads.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Foundational lead research & data entry from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (research summaries & email drafts), LinkedIn / Sales Navigator AI features, Google Sheets AI (data entry & deduplication), Hunter.io / FindThatLead (basic discovery).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Identified potential leads based on criteria</li>
                                                <li>Researched basic contact info (emails, phones)</li>
                                                <li>Input leads into CRM or spreadsheets</li>
                                                <li>Drafted initial outreach email templates</li>
                                                <li>Simple lead verification checks</li>
                                                <li>Organized leads by priority or segment</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Multi-channel lead sourcing, outreach prep & automation support.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> LinkedIn / Apollo.io / ZoomInfo AI features, Email verification & outreach tools (Mailshake, Lemlist), ChatGPT / Claude (personalized copy), Zapier (CRM → email sequence automations).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Multi-source lead generation & validation</li>
                                                <li>Personalized outreach messages (email + LinkedIn)</li>
                                                <li>Lead segmentation for targeted campaigns</li>
                                                <li>Drip campaigns & follow-up sequence setup</li>
                                                <li>Updated CRM pipelines & lead status reporting</li>
                                                <li>Basic lead engagement analytics</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>AI-driven lead intelligence, performance tracking & outreach optimization.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom lead scoring & outreach agents), Advanced CRM automation (HubSpot / Salesforce), AI analytics dashboards (Looker Studio / Power BI), Sales automation tools (Outreach / Reply.io).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated lead scoring & prioritization</li>
                                                <li>Multi-step, cross-channel outreach automation</li>
                                                <li>Weekly lead performance & conversion dashboards</li>
                                                <li>Optimized messaging sequences using AI insights</li>
                                                <li>Predictive lead analytics & pipeline recommendations</li>
                                                <li>SOPs for scalable lead generation campaigns</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here’s a list of target companies in the SaaS industry. Find decision-makers, verify emails, draft personalized outreach messages, and upload to the CRM."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Verified contact list of decision-makers</li>
                                                <li>Personalized email and LinkedIn outreach templates</li>
                                                <li>Segmented leads by region or role</li>
                                                <li>Uploaded and organized leads in CRM</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Sales team receives qualified leads ready for engagement.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Lead Generation VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Legal Support
    if (slug === 'legal-support') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Legal Support
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate document drafting, case summarization, compliance tracking, workflow coordination, and client communication
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Focusing on Law.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value while maintaining strict confidentiality and compliance.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Foundational legal admin & document support from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (drafting & summaries), Google Docs & Sheets AI, PDF AI tools (contracts/forms), Basic legal document formatting & confidentiality principles.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted professional client & internal emails</li>
                                                <li>Summarized contracts, case notes & correspondence</li>
                                                <li>Formatted legal documents, forms & templates</li>
                                                <li>Data entry for case management systems or spreadsheets</li>
                                                <li>Maintained organized digital case files</li>
                                                <li>Scheduling & calendar support for meetings/court dates</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Case research, document preparation & workflow automation.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Legal research AI (Casetext, ROSS Intelligence basics), Contract analysis tools (Evisort, Luminance AI basics), Zapier / Make.com (case tracking automation), AI transcription & summarization.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted legal correspondence & memos</li>
                                                <li>Summarized case research & legal precedents</li>
                                                <li>Prepared contracts, agreements & filings</li>
                                                <li>Organized discovery materials & case documents</li>
                                                <li>Automated reminders for deadlines & filings</li>
                                                <li>Maintained legal task tracking & client updates</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>AI-driven document management, compliance & workflow optimization.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom legal agents), Advanced contract lifecycle AI (DocuSign CLM, Ironclad), CRM/case management AI workflows (Clio, PracticePanther), Looker Studio / Power BI dashboards, AI audit & compliance tools.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated contract review & risk alerts</li>
                                                <li>Legal case tracking dashboards & reports</li>
                                                <li>Compliance tracking & document audit readiness</li>
                                                <li>Workflow automation across communications, filing & deadlines</li>
                                                <li>SOPs for case & document management</li>
                                                <li>Predictive insights on case timelines & admin bottlenecks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here are client contracts, court filings, and meeting notes for this week. Summarize the key points, organize documents, and prepare a draft response for one client inquiry."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Summarized contracts and key clauses</li>
                                                <li>Organized files in case management system</li>
                                                <li>Drafted professional client response</li>
                                                <li>Updated task list with upcoming deadlines</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Attorneys get accurate summaries and organized workflow without administrative burden.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Legal Support VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Recruitment / HR
    if (slug === 'recruitment-hr-admin') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Recruitment & HR
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate candidate sourcing, resume screening, outreach, interview coordination, onboarding, and HR analytics
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Building Great Teams.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value and hiring efficiency.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Core recruitment & HR admin from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (candidate communication & summaries), Google Docs & Sheets AI, Applicant Tracking System (ATS) basics, AI grammar & tone checkers.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted candidate emails & interview confirmations</li>
                                                <li>Summarized resumes & candidate profiles</li>
                                                <li>Input candidate data into ATS or spreadsheets</li>
                                                <li>Scheduling interviews & calendar management</li>
                                                <li>Maintained candidate records & communication logs</li>
                                                <li>Basic internal reporting for hiring activity</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Candidate sourcing, outreach & interview coordination.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> LinkedIn / Indeed AI features for sourcing, ATS AI features (ranking/tagging/messaging), Zapier / Make.com (workflow automation), ChatGPT / Claude (personalized outreach).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Sourced candidates from multiple platforms & databases</li>
                                                <li>Screened & summarized candidate profiles</li>
                                                <li>Wrote personalized outreach emails & LinkedIn messages</li>
                                                <li>Coordinated interviews & sent automated reminders</li>
                                                <li>Updated ATS pipelines with status changes</li>
                                                <li>Basic reporting on candidate progress & hiring metrics</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Recruitment analytics, workflow optimization & talent strategy support.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom recruitment agents), Advanced ATS automation workflows (Greenhouse, Lever), CRM & HR analytics dashboards (Looker Studio / Power BI), AI candidate scoring & predictive hiring tools.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated candidate scoring & ranking</li>
                                                <li>Multi-step outreach sequences & follow-ups</li>
                                                <li>Recruitment metrics dashboards (time-to-fill, source effectiveness)</li>
                                                <li>Talent pipeline reporting & forecasting</li>
                                                <li>Workflow automation for approvals, onboarding & documentation</li>
                                                <li>SOPs for scalable recruiting operations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here’s a list of open positions. Source 20 qualified candidates, verify their profiles, draft personalized outreach emails, and schedule interviews for the top 10."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Verified candidate profiles from multiple platforms</li>
                                                <li>Personalized outreach emails ready for sending</li>
                                                <li>Scheduled interviews for top candidates</li>
                                                <li>Updated ATS with candidate statuses</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → HR team receives pre-qualified, engaged candidates ready for interviews.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Recruitment / HR VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Graphic Design & Video
    if (slug === 'graphic-design-video') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Graphic Design & Visual Content
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate graphic creation, image generation, video editing, branding assets, and multi-platform visual campaigns
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Designing Impact.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value and visual quality.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Foundational graphic support from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Canva Magic Studio (templates & branded graphics), DALL·E / MidJourney (basic image generation), ChatGPT / Claude (content suggestions).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Simple social media graphics & banners</li>
                                                <li>Template-based consistent branding</li>
                                                <li>AI-generated image drafts & concepts</li>
                                                <li>Text overlays, color adjustments & layouts</li>
                                                <li>Formatted graphics for web & social platforms</li>
                                                <li>Organized project files</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Multi-format content creation & refinement.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced Canva AI (carousels/infographics), CapCut / Runway / Opus Clip (short videos & animation), Adobe Firefly / Photoshop AI (editing & compositing), ChatGPT / Claude (prompts & copy integration).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Social media carousels, banners & ads</li>
                                                <li>Edited images & professional videos</li>
                                                <li>Branded visual templates for campaigns</li>
                                                <li>Repurposed content across formats</li>
                                                <li>Text + graphics with storytelling</li>
                                                <li>Basic scheduling for visual campaigns</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>AI-driven visual pipelines, strategy & performance integration.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom visual agents & automation), Adobe Creative Cloud AI (Photoshop/Illustrator/After Effects), Advanced Canva generative tools, Analytics dashboards (Looker Studio, Google Analytics, social metrics).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>End-to-end visual pipelines (concept → design → publish)</li>
                                                <li>Multi-platform design adaptation & optimization</li>
                                                <li>AI-assisted video graphics & animation</li>
                                                <li>Performance dashboards for engagement metrics</li>
                                                <li>Standardized templates & SOPs for brand consistency</li>
                                                <li>Automated workflows for repeated campaigns</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Create a 5-slide social media carousel from this blog post, produce one short animated video for Instagram, and prepare a static ad banner for Facebook."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>5-slide branded carousel ready for Instagram</li>
                                                <li>10–15 second animated video with captions</li>
                                                <li>Facebook ad banner optimized for ad specs</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Content ready for publishing across multiple channels with minimal oversight.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Graphic Design VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Project Management & Operations
    if (slug === 'project-management-ops') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Project Management & Operations
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate task tracking, workflow coordination, reporting, deadline management, and performance dashboards
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Delivering Projects.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <HeyGenEmbed videoId="f1902b1e68ea495fa612338b2b346b39" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value and project efficiency.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Core project admin & organization from day 1.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude / ChatGPT (task summaries & emails), Google Docs & Sheets AI, Trello / Asana / ClickUp basics, AI transcription tools (meeting summaries).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted project emails & status updates</li>
                                                <li>Summarized meeting notes & action items</li>
                                                <li>Input tasks & deadlines into PM tools</li>
                                                <li>Basic task prioritization & tracking</li>
                                                <li>Calendar management & meeting scheduling</li>
                                                <li>Simple status reports</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Task coordination, workflow optimization & basic automation.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced PM AI features (Asana, ClickUp, Monday.com), Zapier / Make.com (workflow automation), Google Workspace AI (Docs/Sheets/Slides), Slack / Teams AI integration.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Coordinated tasks & deadlines across teams</li>
                                                <li>Set up automated reminders & notifications</li>
                                                <li>Tracked progress & updated dashboards</li>
                                                <li>Prepared project reports for stakeholders</li>
                                                <li>Managed task dependencies & workload balancing</li>
                                                <li>Basic risk tracking & issue logging</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>AI-driven project oversight, analytics & process optimization.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom PM agents), Advanced Zapier / Make.com (multi-step workflows), Jira / Smartsheet AI dashboards, Looker Studio / Power BI (KPIs & analytics), AI risk & resource tools.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Automated task assignment & follow-up sequences</li>
                                                <li>Cross-project tracking dashboards with KPIs</li>
                                                <li>Resource allocation & dependency optimization</li>
                                                <li>Risk alerts & mitigation suggestions</li>
                                                <li>Project workflow optimization & SOP creation</li>
                                                <li>Executive-level reporting for portfolio management</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here are this month’s tasks for three ongoing projects. Update task statuses, send reminders for upcoming deadlines, and prepare a weekly project summary report."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Updated project task statuses across all boards</li>
                                                <li>Automated reminders sent to responsible team members</li>
                                                <li>Weekly summary report highlighting progress, bottlenecks, and deadlines</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Project managers get a clear overview without spending hours on updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Project Management VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    // Specific Single-Screen Layout for Real Estate
    if (slug === 'real-estate') {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />

                <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <section style={{ padding: '2rem 1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                            {/* Hero Section: 2 Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', marginBottom: '4rem', marginTop: '2rem' }}>

                                {/* Left Column: Copy */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', lineHeight: '1.2' }}>
                                        AI Virtual Assistants for Real Estate
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '0.5rem', fontWeight: '500' }}>
                                        Automate listings, lead nurturing, and transaction coordination
                                    </p>
                                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                                        with certified, AI-trained VAs from AITeam.ph.
                                    </p>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#111827' }}>
                                        Stop Doing Busy Work. Start Closing.
                                    </h2>
                                </div>

                                {/* Right Column: Video */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                        <iframe
                                            src="https://app.heygen.com/embedded-player/f1902b1e68ea495fa612338b2b346b39"
                                            title="HeyGen video player"
                                            frameBorder="0"
                                            allow="encrypted-media; fullscreen;"
                                            allowFullScreen
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#374151', marginBottom: '2rem', fontWeight: '500', textAlign: 'center' }}>
                                Our VAs are trained in three progressive levels using targeted AI tools to deliver increasing value.
                            </p>

                            {/* Content Columns */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'left', marginBottom: '3rem' }}>

                                {/* Left Column: Levels */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    {/* Basic */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Basic Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$7/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Fast admin support from day 1 — never miss a follow-up.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Claude (writing & summaries), Canva Magic Studio (basics).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Drafted emails, texts, follow-ups</li>
                                                <li>CRM updates & lead notes</li>
                                                <li>Document/listing summaries</li>
                                                <li>PDF data extraction for CRM</li>
                                                <li>Simple graphics & flyers</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Intermediate */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Intermediate Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$11/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Attractive marketing on autopilot — consistent online presence.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Advanced Canva AI, HeyGen (AI avatars), Opus Clip/CapCut (video editing), Zapier (simple triggers).</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Branded social posts, carousels, market updates</li>
                                                <li>Short video clips from tours</li>
                                                <li>Avatar-based walkthroughs & market videos</li>
                                                <li>Photo enhancements & multi-platform resizing</li>
                                                <li>Basic scheduling automations</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Advanced */}
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#027bff', marginBottom: '0.5rem' }}>
                                            Advanced Level <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: 'normal', marginLeft: '0.5rem' }}>~$15/hr</span>
                                        </h3>
                                        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem' }}>Self-running systems & measurable results — smoother operations.</p>
                                        <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.75rem' }}><strong>AI Tools Learned:</strong> Google Antigravity (custom agents), Follow Up Boss/Lofty AI features, AppFolio Realm-X (PM), advanced Zapier/Make.com.</p>
                                        <div style={{ fontSize: '1rem', color: '#4b5563' }}>
                                            <strong>Expected Outputs:</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'disc' }}>
                                                <li>Auto lead nurturing sequences & escalation</li>
                                                <li>Full listing-to-post pipelines</li>
                                                <li>Deadline/vendor/owner coordination</li>
                                                <li>Transaction milestone tracking</li>
                                                <li>Compliance checks & performance reports</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Sample Task */}
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <div style={{ backgroundColor: '#f8f9fa', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #e9ecef', position: 'sticky', top: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Sample Task</h3>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <strong style={{ display: 'block', color: '#b45309', marginBottom: '0.5rem', fontSize: '1.1rem' }}>INPUT</strong>
                                            <p style={{ fontSize: '1.1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                "Here are raw photos of 123 Maple Dr and basic specs (3bd, 2ba). Create a Zillow listing, 3 Instagram captions, and an email blast."
                                            </p>
                                        </div>

                                        <div>
                                            <strong style={{ display: 'block', color: '#15803d', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI+VA (Intermediate level) Output (under 2 hours)</strong>
                                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', listStyleType: 'disc', color: '#374151', lineHeight: '1.6' }}>
                                                <li>Engaging listing description (short/long versions)</li>
                                                <li>3 viral-style IG captions + carousels</li>
                                                <li>Formatted email/newsletter draft ready to send</li>
                                                <li>Image enhancement (lighting fixed via AI)</li>
                                            </ul>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'Bold', color: '#166534', marginTop: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                                                → Listing live fast, leads nurtured, you free to close.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CTA */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Ready to add trained AI talent?</p>
                                <Link href="/hire">
                                    <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '3rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        Get Your Real Estate VA Now
                                    </Button>
                                </Link>
                                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Results in hours.</p>
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    const data = industriesData[slug];

    if (!data) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
                <Navbar />
                <main style={{ padding: '6rem 2rem', flex: 1, maxWidth: '1000px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: '#111827' }}>Coming Soon</h1>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563' }}>Content for {slug} is being curated.</p>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', fontFamily: 'sans-serif' }}>
            <Navbar />

            {/* Hero Section */}
            <section style={{ padding: '6rem 2rem 4rem', backgroundColor: '#fff', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '3rem' }}>
                        <img src={data.hero.image} alt={data.hero.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', textAlign: 'left', color: 'white' }}>
                            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{data.hero.title}</h1>
                            <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>{data.hero.subtitle}</p>
                        </div>
                    </div>

                    <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', maxWidth: '800px', margin: '0 auto 2rem' }}>
                        {data.hero.description}
                    </h2>

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                        <img src="https://placehold.co/800x400/e2e8f0/1e293b?text=Agent+Closing+Deals+Not+Admin" alt="Productive Agent" style={{ borderRadius: '1rem', width: '100%', maxWidth: '800px', height: 'auto' }} />
                    </div>
                </div>
            </section>

            {/* Levels/Overview Section */}
            <section style={{ padding: '5rem 2rem', backgroundColor: '#f8fafc' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827', textAlign: 'center' }}>{data.overview.title}</h3>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        {data.overview.intro}
                    </p>

                    <div style={{ display: 'grid', gap: '4rem' }}>
                        {data.overview.tiers.map((tier, index) => (
                            <div key={index} style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '3rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                                <div style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', gap: '3rem', flexWrap: 'wrap' }}>
                                    <div style={{ flex: 1, minWidth: '300px' }}>
                                        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#dbeafe', color: '#027bff', fontWeight: 'bold', borderRadius: '2rem', marginBottom: '1rem' }}>
                                            {tier.title}
                                        </div>
                                        <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>{tier.description}</h4>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <strong style={{ display: 'block', color: '#4b5563', marginBottom: '0.25rem' }}>Skills & Output:</strong>
                                            <p style={{ color: '#6b7280' }}>{tier.skills}</p>
                                        </div>
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <strong style={{ display: 'block', color: '#4b5563', marginBottom: '0.25rem' }}>AI Tools Trained On:</strong>
                                            <p style={{ color: '#6b7280' }}>{tier.tools}</p>
                                        </div>
                                        <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', borderLeft: '4px solid #22c55e' }}>
                                            <strong style={{ color: '#166534' }}>→ You get:</strong> <span style={{ color: '#15803d' }}>{tier.benefit}</span>
                                        </div>
                                    </div>

                                    <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {tier.images.map((img, i) => (
                                            <div key={i} style={{ position: 'relative' }}>
                                                <img src={img.src} alt={img.alt} style={{ width: '100%', borderRadius: '0.75rem', objectFit: 'cover' }} />
                                                {img.caption && <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>{img.caption}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capstone Section */}
            <section style={{ padding: '5rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#eff6ff', borderRadius: '1.5rem', padding: '4rem', border: '1px solid #bfdbfe' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem', color: '#1e3a8a', textAlign: 'center' }}>{data.capstone.title}</h2>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#b45309', fontSize: '1.25rem' }}>You say:</strong>
                            <p style={{ fontSize: '1.25rem', color: '#4b5563', fontStyle: 'italic', marginBottom: '1.5rem' }}>{data.capstone.input}</p>
                        </div>
                        {data.capstone.inputImage && (
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <img src={data.capstone.inputImage.src} alt={data.capstone.inputImage.alt} style={{ width: '100%', borderRadius: '1rem', height: 'auto' }} />
                            </div>
                        )}
                    </div>

                    <div>
                        <strong style={{ display: 'block', marginBottom: '1.5rem', color: '#1e3a8a', fontSize: '1.5rem' }}>{data.capstone.outputTitle}</strong>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {data.capstone.outputs.map((output, idx) => (
                                <div key={idx} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.75rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                    <p style={{ color: '#1e40af', fontWeight: '600', marginBottom: '1rem' }}>{output.text}</p>
                                    {output.image && (
                                        <img src={output.image.src} alt={output.image.alt} style={{ width: '100%', borderRadius: '0.5rem', height: 'auto' }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', borderTop: '2px dashed #bfdbfe', paddingTop: '2rem', marginTop: '3rem' }}>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>{data.capstone.result}</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '6rem 2rem', backgroundColor: '#111827', color: '#fff', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem' }}>{data.cta.text}</h2>
                    <Link href="/hire">
                        <Button size="lg" style={{ fontSize: '1.25rem', padding: '1.25rem 3rem', borderRadius: '2rem', backgroundColor: '#22c55e', borderColor: '#22c55e', color: '#fff' }}>
                            {data.cta.button} <ArrowRight style={{ marginLeft: '0.5rem' }} />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
