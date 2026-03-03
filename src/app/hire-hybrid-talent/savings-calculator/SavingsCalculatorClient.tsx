'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Card } from '@/components/ui/Card/Card';
import { CheckCircle2, DollarSign, Zap, TrendingUp, ShieldCheck, ArrowRight, User, Loader2 } from 'lucide-react';

const LOCATIONS = [
    { value: 'US', label: 'United States', currency: '$', defaultRate: 35 },
    { value: 'AU', label: 'Australia', currency: 'A$', defaultRate: 40 },
    { value: 'UK', label: 'United Kingdom', currency: '£', defaultRate: 25 },
    { value: 'CA', label: 'Canada', currency: 'C$', defaultRate: 30 },
    { value: 'Other', label: 'Other', currency: '$', defaultRate: 20 },
];

const INDUSTRIES = [
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'e-commerce-online-retail', label: 'E-commerce / Online Retail' },
    { value: 'digital-marketing-social-media', label: 'Digital Marketing & Social Media' },
    { value: 'general-administrative', label: 'General Administrative / Executive Support' },
    { value: 'customer-service-support', label: 'Customer Service / Support' },
    { value: 'coaching-consulting', label: 'Coaching, Consulting & Online Education' },
    { value: 'saas-tech-startups', label: 'SaaS / Tech Startups' },
    { value: 'healthcare-medical-admin', label: 'Healthcare / Medical Admin' },
    { value: 'finance-bookkeeping', label: 'Finance / Bookkeeping / Accounting' },
    { value: 'content-creation-writing', label: 'Content Creation & Writing' },
    { value: 'lead-generation-sales', label: 'Lead Generation & Sales Support' },
    { value: 'legal-support', label: 'Legal Support' },
    { value: 'recruitment-hr-admin', label: 'Recruitment / HR Admin' },
    { value: 'graphic-design-video', label: 'Graphic Design / Video Editing' },
    { value: 'project-management-ops', label: 'Project Management / Operations' },
];

const WEEKS_PER_YEAR = 52;
const FALLBACK_PH_RATE = 12;

export default function SavingsCalculatorClient() {
    const [location, setLocation] = useState(LOCATIONS[0]);
    const [hourlyRate, setHourlyRate] = useState(LOCATIONS[0].defaultRate);
    const [hours, setHours] = useState(40);
    const [aiBoost, setAiBoost] = useState(40);
    const [targetHours, setTargetHours] = useState(40);

    // New Filters
    const [industry, setIndustry] = useState(INDUSTRIES[0].value);
    const [aiLevel, setAiLevel] = useState('intermediate');
    const [englishLevel, setEnglishLevel] = useState('b2');

    // API Data State
    const [phRate, setPhRate] = useState(FALLBACK_PH_RATE);
    const [isLoadingRate, setIsLoadingRate] = useState(true);
    const [apiData, setApiData] = useState<any>(null);

    // Results State
    const [results, setResults] = useState({
        currentAnnual: 0,
        hybridAnnual: 0,
        savings: 0,
        savingsPercent: 0,
        productivityMultiplier: 0
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // Fetch Rates Effect
    useEffect(() => {
        let isCancelled = false;

        const fetchRates = async () => {
            setIsLoadingRate(true);
            try {
                const query = new URLSearchParams({
                    industry,
                    ai_level: aiLevel,
                    english_level: englishLevel
                });

                const res = await fetch(`/api/va-average-rates?${query.toString()}`);
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();

                if (!isCancelled) {
                    setPhRate(data.averageClientRate);
                    setApiData(data);
                }
            } catch (error) {
                console.error("Error fetching rates:", error);
                if (!isCancelled) {
                    setPhRate(FALLBACK_PH_RATE); // Fallback
                    setApiData(null);
                }
            } finally {
                if (!isCancelled) setIsLoadingRate(false);
            }
        };

        const timer = setTimeout(fetchRates, 500); // 500ms debounce
        return () => {
            clearTimeout(timer);
            isCancelled = true;
        };
    }, [industry, aiLevel, englishLevel]);

    // Calculate Results
    useEffect(() => {
        const currentAnnual = hourlyRate * hours * WEEKS_PER_YEAR;
        const hybridAnnual = phRate * targetHours * WEEKS_PER_YEAR;
        const savings = currentAnnual - hybridAnnual;
        const savingsPercent = currentAnnual > 0 ? Math.round((savings / currentAnnual) * 100) : 0;

        const effectiveOutputHours = targetHours * (1 + (aiBoost / 100));
        const productivityMultiplier = hours > 0 ? (effectiveOutputHours / hours).toFixed(1) : '0';

        setResults({
            currentAnnual,
            hybridAnnual,
            savings,
            savingsPercent,
            productivityMultiplier: Number(productivityMultiplier)
        });
    }, [hourlyRate, hours, targetHours, aiBoost, phRate]);

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = LOCATIONS.find(l => l.value === e.target.value) || LOCATIONS[0];
        setLocation(selected);
        setHourlyRate(selected.defaultRate);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsFormSubmitted(true);
    };

    return (
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#111827', lineHeight: 1.5 }}>

            {/* Hero Section */}
            <section style={{ backgroundColor: '#fff', padding: '4rem 1.5rem', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#dcfce7', borderRadius: '9999px', color: '#16a34a', fontWeight: '600', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                        <Zap size={16} fill="currentColor" /> The Future is Hybrid
                    </div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
                        Calculate Your <span style={{ color: '#28a745' }}>Hybrid AI Talent</span> Savings
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem', maxWidth: '650px', marginInline: 'auto' }}>
                        See exactly how switching to AI-powered remote VAs from the Philippines can cut your hiring costs by <span style={{ fontWeight: 'bold', color: '#111827' }}>50–70%</span> while boosting productivity exponentially.
                    </p>

                    {/* Trust Signals */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontSize: '0.9rem', color: '#6b7280' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} color="#28a745" /> Based on 2026 Real PH VA Rates</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} color="#28a745" /> Avg Savings $20k-$50k/yr</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} color="#28a745" /> 7-Day Money-Back Guarantee</span>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section style={{ padding: '4rem 1.5rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>

                    {/* LEFT: Inputs */}
                    <Card style={{ padding: '2rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Your Needs & Setup</h2>

                            {/* Industry & Skills */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Industry</label>
                                    <select
                                        value={industry}
                                        onChange={(e) => setIndustry(e.target.value)}
                                        style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: '#fff', fontSize: '0.9rem' }}
                                    >
                                        {INDUSTRIES.map(ind => (
                                            <option key={ind.value} value={ind.value}>{ind.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>AI Skill Level</label>
                                    <select
                                        value={aiLevel}
                                        onChange={(e) => setAiLevel(e.target.value)}
                                        style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: '#fff', fontSize: '0.9rem' }}
                                    >
                                        <option value="basic">Basic</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                            </div>

                            {/* Location */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Current Hiring Location</label>
                                <select
                                    value={location.value}
                                    onChange={handleLocationChange}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: '#fff', fontSize: '1rem' }}
                                >
                                    {LOCATIONS.map(loc => (
                                        <option key={loc.value} value={loc.value}>{loc.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Hourly Rate */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <label style={{ fontWeight: '600' }}>Current Hourly Cost</label>
                                    <span style={{ color: '#027bff', fontWeight: 'bold' }}>{location.currency}{hourlyRate}/hr</span>
                                </div>
                                <input
                                    type="range"
                                    min="15"
                                    max="150"
                                    step="1"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                                    style={{ width: '100%', accentColor: '#027bff', cursor: 'pointer' }}
                                />
                                <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>Include salary + benefits/overhead (typical US admin ~$40–$60/hr)</p>
                            </div>

                            {/* Weekly Hours */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <label style={{ fontWeight: '600' }}>Weekly Hours Needed</label>
                                    <span style={{ fontWeight: 'bold' }}>{hours} hrs/wk</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="60"
                                    step="5"
                                    value={hours}
                                    onChange={(e) => {
                                        setHours(Number(e.target.value));
                                        setTargetHours(Number(e.target.value)); // Sync target by default
                                    }}
                                    style={{ width: '100%', accentColor: '#027bff', cursor: 'pointer' }}
                                />
                            </div>
                        </div>

                        <div style={{ paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Zap size={24} color="#f59e0b" fill="#f59e0b" /> AI Productivity Boost
                            </h2>

                            {/* AI Boost */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <label style={{ fontWeight: '600' }}>Expected Efficiency Gain</label>
                                    <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>+{aiBoost}% Boost</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="10"
                                    value={aiBoost}
                                    onChange={(e) => setAiBoost(Number(e.target.value))}
                                    style={{ width: '100%', accentColor: '#f59e0b', cursor: 'pointer' }}
                                />
                                <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>AI-trained VAs automate routine tasks (avg 40–60%)</p>
                            </div>
                        </div>
                    </Card>

                    {/* RIGHT: Results */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <Card style={{ padding: '2rem', backgroundColor: '#1e3a8a', color: '#fff', backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)', border: 'none' }}>
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '500', opacity: 0.9, marginBottom: '0.5rem' }}>Your Estimated Annual Savings</h3>
                                <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#4ade80', lineHeight: 1, marginBottom: '0.5rem' }}>
                                    ${results.savings.toLocaleString()}
                                </div>
                                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '9999px', fontSize: '0.9rem' }}>
                                    Save {results.savingsPercent}% vs Local Hire
                                </div>
                            </div>

                            {/* Live Rate Feedback */}
                            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>Estimated PH VA Rate:</span>
                                    {isLoadingRate ? (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><Loader2 size={14} className="animate-spin" /> Updating...</span>
                                    ) : (
                                        <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#4ade80' }}>${phRate.toFixed(2)}/hr</span>
                                    )}
                                </div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                                    {apiData ? "Real average based on your selected industry & skill level (includes 25% fee)." : "Standard estimate for general admin roles."}
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-end', height: '150px', gap: '2rem', padding: '0 1rem', marginBottom: '2rem' }}>
                                {/* Chart: Current */}
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                                    <div style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold' }}>${(results.currentAnnual / 1000).toFixed(0)}k</div>
                                    <div style={{ height: '100%', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '8px 8px 0 0', position: 'relative' }}></div>
                                </div>
                                {/* Chart: Hybrid */}
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                                    <div style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold', color: '#4ade80' }}>${(results.hybridAnnual / 1000).toFixed(0)}k</div>
                                    <div style={{ height: `${(results.hybridAnnual / results.currentAnnual) * 100}%`, backgroundColor: '#4ade80', borderRadius: '8px 8px 0 0', position: 'relative', minHeight: '10px', transition: 'height 0.5s ease' }}></div>
                                </div>
                            </div>

                            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <TrendingUp size={24} color="#4ade80" />
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>{results.productivityMultiplier}x Productivity Output</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Equivalent to hiring {(results.productivityMultiplier)} people</div>
                                </div>
                            </div>
                        </Card>

                        {/* Sample Tools & Output */}
                        {apiData && apiData.sample && (
                            <Card style={{ padding: '0', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                                <div style={{ padding: '1.25rem 1.5rem', backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                                    <h4 style={{ fontWeight: '800', fontSize: '1.1rem', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Zap size={18} fill="#28a745" color="#28a745" />
                                        What You Get <span style={{ fontWeight: '400', color: '#6b7280' }}>(Sample)</span>
                                    </h4>
                                </div>

                                <div style={{ padding: '1.5rem' }}>
                                    {/* AI Stack */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '0.75rem' }}>
                                            Typical AI Stack
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {apiData.sample.aiStack.map((tool: string, i: number) => (
                                                <span key={i} style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', backgroundColor: '#eff6ff', color: '#027bff', borderRadius: '9999px', border: '1px solid #bfdbfe', fontWeight: '600' }}>
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Task & Output Split */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {/* Client Request */}
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <User size={16} color="#4b5563" />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#4b5563', marginBottom: '0.2rem' }}>You Request:</div>
                                                <div style={{ fontSize: '0.95rem', color: '#111827', fontStyle: 'italic' }}>
                                                    "{apiData.sample.sampleTask}"
                                                </div>
                                            </div>
                                        </div>

                                        {/* Arrow Down Mobile / Connector */}
                                        <div style={{ paddingLeft: '15px' }}>
                                            <div style={{ width: '2px', height: '15px', backgroundColor: '#e5e7eb' }}></div>
                                        </div>

                                        {/* VA Output */}
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <Zap size={16} fill="#16a34a" color="#16a34a" />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#16a34a', marginBottom: '0.2rem' }}>VA Delivers:</div>
                                                <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>
                                                    {apiData.sample.sampleOutput}
                                                </div>
                                                <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', backgroundColor: '#ecfdf5', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                                                    <TrendingUp size={12} /> {apiData.sample.savingsImpact}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6', textAlign: 'center' }}>
                                        <Button
                                            size="sm"
                                            style={{ backgroundColor: '#28a745', borderColor: '#28a745', width: '100%', fontSize: '1rem', fontWeight: 'bold' }}
                                            onClick={() => {
                                                const params = new URLSearchParams({
                                                    industry,
                                                    ai_level: aiLevel,
                                                    english_spoken: englishLevel,
                                                    english_written: englishLevel
                                                });
                                                window.location.href = `/hire-hybrid-talent/browse?${params.toString()}`;
                                            }}
                                        >
                                            Hire a VA for This Now
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        )}

                        {/* CTA / Report Box */}
                        <Card style={{ padding: '2rem', border: '1px solid #28a745' }}>
                            {!isFormSubmitted ? (
                                <>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>Get Your Personalized Report</h3>
                                    <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                        We'll email you this full cost breakdown + a list of AI-certified VAs that match your industry.
                                    </p>
                                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <Input placeholder="Full Name" required style={{ width: '100%' }} />
                                        <Input placeholder="Work Email" type="email" required style={{ width: '100%' }} />
                                        <Button type="submit" style={{ width: '100%', backgroundColor: '#28a745', borderColor: '#28a745' }}>
                                            Send My Savings Report
                                        </Button>
                                    </form>
                                </>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                                    <div style={{ width: '60px', height: '60px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                                        <CheckCircle2 size={32} color="#16a34a" />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Report Sent!</h3>
                                    <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>Check your email for your personalized breakdown and candidate matches.</p>
                                    <Button onClick={() => window.location.href = '/hire-hybrid-talent/browse'} style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>
                                        Browse Certified VAs Now <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                                    </Button>
                                </div>
                            )}

                            {!isFormSubmitted && (
                                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                    <a href="/hire-hybrid-talent/browse" style={{ color: '#027bff', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>Skip & Browse Candidates &rarr;</a>
                                </div>
                            )}
                        </Card>
                    </div>

                </div>
            </section>

            {/* Meets Your Future Team (Sample Candidates) - Below AI Productivity Boost area (functionally below the calc) */}
            {/* Sample Matching Candidates - Below AI Productivity Boost area */}
            {apiData && apiData.candidates && apiData.candidates.length > 0 && (
                <section style={{ padding: '5rem 1.5rem', backgroundColor: '#fff', borderTop: '1px solid #e5e7eb' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1rem', color: '#111827', letterSpacing: '-0.025em' }}>
                                Sample Matching Candidates
                            </h2>
                            <p style={{ color: '#6b7280', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                                Based on your selection of <span style={{ color: '#28a745', fontWeight: '600' }}>{INDUSTRIES.find(i => i.value === industry)?.label || industry}</span> expertise,
                                these pre-certified VAs are ready to interview.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                            {apiData.candidates.map((candidate: any) => (
                                <Card key={candidate.id} style={{ padding: '0', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid #e5e7eb', overflow: 'hidden' }} className="hover:shadow-lg hover:border-green-500 hover:-translate-y-1">
                                    {/* Card Header / Avatar */}
                                    <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', flexShrink: 0 }}>
                                            <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#9ca3af', fontWeight: '600' }}>
                                                {candidate.image && candidate.image.startsWith('/') ? (
                                                    <img src={candidate.image} alt={candidate.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerText = candidate.name.charAt(0); }} />
                                                ) : (
                                                    candidate.name.charAt(0)
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', lineHeight: 1.2 }}>{candidate.name}</h3>
                                            <p style={{ color: '#28a745', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>{candidate.role}</p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                                {candidate.badges?.map((badge: string, idx: number) => (
                                                    <span key={idx} style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', backgroundColor: '#eef2ff', color: '#4f46e5', borderRadius: '9999px', fontWeight: '600', border: '1px solid #e0e7ff' }}>
                                                        {badge}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mini Headline */}
                                    <div style={{ padding: '0 1.5rem 1rem', flex: 1 }}>
                                        <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: '1.5', fontWeight: '500' }}>
                                            "{candidate.headline || `Experienced ${candidate.role} ready to assist.`}"
                                        </p>
                                    </div>

                                    {/* Details Grid */}
                                    <div style={{ padding: '1rem 1.5rem', backgroundColor: '#f9fafb', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem' }}>
                                        <div>
                                            <div style={{ color: '#6b7280', marginBottom: '0.1rem' }}>English</div>
                                            <div style={{ fontWeight: '600', color: '#111827' }}>{candidate.englishLevel || 'B2+'} / C2</div>
                                        </div>
                                        <div>
                                            <div style={{ color: '#6b7280', marginBottom: '0.1rem' }}>Availability</div>
                                            <div style={{ fontWeight: '600', color: '#111827' }}>{candidate.availability || 'Immediate'}</div>
                                        </div>
                                    </div>

                                    {/* Footer / CTA */}
                                    <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
                                        <div>
                                            <span style={{ display: 'block', fontSize: '0.75rem', color: '#6b7280' }}>Platform Rate</span>
                                            <span style={{ fontWeight: '800', color: '#28a745', fontSize: '1.1rem' }}>${candidate.rate}/hr</span>
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            style={{ fontSize: '0.85rem', color: '#027bff', borderColor: '#bfdbfe', backgroundColor: '#eff6ff' }}
                                        >
                                            View Profile
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <Button
                                size="lg"
                                style={{ backgroundColor: '#28a745', borderColor: '#28a745', padding: '1rem 3.5rem', fontSize: '1.2rem', fontWeight: '700', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                onClick={() => {
                                    const params = new URLSearchParams({
                                        industry,
                                        ai_level: aiLevel,
                                        english_spoken: englishLevel,
                                        english_written: englishLevel
                                    });
                                    window.location.href = `/hire-hybrid-talent/browse?${params.toString()}`;
                                }}
                            >
                                Browse more candidates <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                            </Button>
                            <p style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>
                                View full pool of 350+ AI-Certified VAs
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Disclaimer / Footer */}
            <div style={{ textAlign: 'center', padding: '2rem', fontSize: '0.8rem', color: '#9ca3af', maxWidth: '800px', margin: '0 auto' }}>
                <p>
                    Estimates are based on industry averages (PH rates $8–$15/hr base + fees) and typical Western market rates.
                    Productivity boost percentages are based on internal benchmarks of AI-augmented workflows.
                    Actual savings may vary by role complexity and specific requirements.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ShieldCheck size={14} /> SSL Secure</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><User size={14} /> No Data Shared</span>
                </div>
            </div>

        </div>
    );
}
