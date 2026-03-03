'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import { Input } from '@/components/ui/Input/Input';
import {
    CheckCircle,
    ChevronRight,
    ChevronLeft,
    Sparkles,
    Zap,
    Clock,
    DollarSign,
    Briefcase,
    ShieldCheck,
    Eye,
    Save,
    Lock,
    Search
} from 'lucide-react';

const INDUSTRIES = [
    "General Administrative",
    "Real Estate",
    "E-commerce / Online Retail",
    "Digital Marketing & Social Media",
    "Customer Service",
    "Coaching & Consulting",
    "SaaS / Tech Startups",
    "Healthcare / Medical Admin",
    "Finance / Bookkeeping",
    "Content Creation & Writing",
    "Lead Generation & Sales",
    "Legal Support",
    "Recruitment / HR",
    "Graphic Design / Video Editing",
    "Project Management / Operations"
];

const SKILL_SUGGESTIONS: Record<string, string[]> = {
    "Real Estate": ["Lead Nurturing", "CRM Mgmt (Follow Up Boss)", "Listing Optimization", "Appointment Setting"],
    "E-commerce / Online Retail": ["Shopify Mgmt", "Customer Support", "Order Processing", "Product Research"],
    "Digital Marketing & Social Media": ["Content Scheduling", "Canva Design", "Social Engagement", "Ad Performance Tracking"],
    "General Administrative": ["Email Mgmt", "Calendar Scheduling", "Travel Planning", "Data Entry"],
    "default": ["Communication", "Time Management", "Organization", "Google Workspace"]
};

export default function PostJobWizard() {
    // Wizard State
    const [step, setStep] = useState(1);
    const [isAiGenerating, setIsAiGenerating] = useState(false);

    // Form Data
    const [formData, setFormData] = useState({
        jobTitle: '',
        industry: 'General Administrative',
        description: '',
        aiLevel: 'Any',
        englishSpoken: 'Any',
        englishWritten: 'Any',
        skills: [] as string[],
        otherPrefs: {
            immediate: false,
            video: false,
            portfolio: false
        },
        hourlyRate: [12, 15], // Min, Max
        hoursPerWeek: '20',
        startDate: 'Immediate',
        duration: 'Ongoing',
        isPrivate: false,
        isBoosted: false
    });

    const [skillInput, setSkillInput] = useState('');

    // Helper functions
    const nextStep = () => setStep(s => Math.min(s + 1, 4));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const updateField = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const togglePref = (pref: keyof typeof formData.otherPrefs) => {
        setFormData(prev => ({
            ...prev,
            otherPrefs: { ...prev.otherPrefs, [pref]: !prev.otherPrefs[pref] }
        }));
    };

    // AI Simulation
    const generateDescription = async () => {
        if (!formData.jobTitle) return;
        setIsAiGenerating(true);

        // Mock API delay
        await new Promise(r => setTimeout(r, 1500));

        const mockDescriptions: Record<string, string> = {
            "Real Estate": "We are seeking a highly organized AI-Certified Virtual Assistant to manage our real estate leads and listings. Responsibilities include:\n\n• Managing CRM (Follow Up Boss) and nurturing leads via email/SMS.\n• Coordinating showing appointments and calendar capability.\n• Preparing listing presentations and marketing materials using Canva.\n• Utilizing AI tools to draft property descriptions and client communications.\n\nIdeal candidate is proactive, tech-savvy, and experienced in US real estate workflows.",
            "default": `We are looking for a skilled Virtual Assistant to support our team with ${formData.jobTitle || 'daily operations'}. \n\nKey responsibilities:\n• Manage email correspondence and calendar scheduling.\n• Assist with data entry and document organization.\n• Use AI tools to improve workflow efficiency.\n\nThe ideal candidate has excellent English communication skills and is eager to learn new technologies.`
        };

        const desc = formData.industry.includes("Real Estate") ? mockDescriptions["Real Estate"] : mockDescriptions["default"];
        updateField('description', desc);
        setIsAiGenerating(false);
    };

    const addSkill = (skill: string) => {
        if (!formData.skills.includes(skill)) {
            updateField('skills', [...formData.skills, skill]);
        }
        setSkillInput('');
    };

    const removeSkill = (skill: string) => {
        updateField('skills', formData.skills.filter(s => s !== skill));
    };

    // Render Steps
    const renderStepIndicator = () => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            {[1, 2, 3, 4].map(num => (
                <React.Fragment key={num}>
                    <div style={{
                        width: '32px', height: '32px', borderRadius: '50%',
                        backgroundColor: step >= num ? '#027bff' : '#e5e7eb',
                        color: step >= num ? 'white' : '#6b7280',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 'bold', zIndex: 1, position: 'relative'
                    }}>
                        {step > num ? <CheckCircle size={16} /> : num}
                    </div>
                    {num < 4 && (
                        <div style={{ flex: 1, height: '2px', backgroundColor: step > num ? '#027bff' : '#e5e7eb', margin: '0 0.5rem' }} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'sans-serif' }}>
            {/* Steps Progress (Sticky) */}
            <div style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontWeight: 'bold', color: '#111827' }}>Post a Job</div>
                        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem' }}>
                            <span style={{ color: step >= 1 ? '#027bff' : '#9ca3af', fontWeight: step === 1 ? 'bold' : 'normal' }}>1. Basics</span>
                            <span style={{ color: step >= 2 ? '#027bff' : '#9ca3af', fontWeight: step === 2 ? 'bold' : 'normal' }}>2. Skills</span>
                            <span style={{ color: step >= 3 ? '#027bff' : '#9ca3af', fontWeight: step === 3 ? 'bold' : 'normal' }}>3. Budget</span>
                            <span style={{ color: step >= 4 ? '#027bff' : '#9ca3af', fontWeight: step === 4 ? 'bold' : 'normal' }}>4. Review</span>
                        </div>
                        <Button variant="ghost" size="sm" style={{ color: '#6b7280' }}>Save Draft</Button>
                    </div>
                    {/* Visual Progress Bar for Mobile/Desktop */}
                    <div style={{ height: '4px', backgroundColor: '#f3f4f6', marginTop: '1rem', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${(step / 4) * 100}%`, backgroundColor: '#027bff', transition: 'width 0.3s ease' }} />
                    </div>
                </div>
            </div>

            <main style={{ maxWidth: '1000px', margin: '2rem auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>

                {/* Left Column: Form Steps */}
                <div>
                    {/* Hero Intro (Only Step 1) */}
                    {step === 1 && (
                        <div style={{ marginBottom: '2rem' }}>
                            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>
                                Find Your <span style={{ color: '#027bff' }}>Hybrid AI Team</span> in Minutes
                            </h1>
                            <p style={{ color: '#4b5563', fontSize: '1.1rem' }}>
                                Post your job for free and get matched with pre-vetted, AI-certified talent.
                            </p>
                        </div>
                    )}

                    <Card style={{ padding: '2rem' }}>
                        {step === 1 && (
                            <div className="space-y-6">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Job Basics</h2>

                                <div>
                                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Job Title <span style={{ color: 'red' }}>*</span></label>
                                    <Input
                                        placeholder="e.g. Real Estate VA for Lead Management"
                                        value={formData.jobTitle}
                                        onChange={(e) => updateField('jobTitle', e.target.value)}
                                        style={{ fontSize: '1.1rem', padding: '0.75rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Industry <span style={{ color: 'red' }}>*</span></label>
                                    <select
                                        value={formData.industry}
                                        onChange={(e) => updateField('industry', e.target.value)}
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', backgroundColor: 'white' }}
                                    >
                                        {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <label style={{ fontWeight: '600', color: '#374151' }}>Job Description <span style={{ color: 'red' }}>*</span></label>
                                        <button
                                            onClick={generateDescription}
                                            disabled={isAiGenerating || !formData.jobTitle}
                                            style={{ fontSize: '0.85rem', color: '#027bff', display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}
                                        >
                                            <Sparkles size={14} /> {isAiGenerating ? 'Generating...' : 'Auto-Generate with AI'}
                                        </button>
                                    </div>
                                    <textarea
                                        rows={8}
                                        placeholder="Describe the responsibilities and requirements..."
                                        value={formData.description}
                                        onChange={(e) => updateField('description', e.target.value)}
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit' }}
                                    />
                                    <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.5rem' }}>
                                        Tip: Be specific about tools and daily tasks. Our AI matching engine looks for keywords.
                                    </p>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Skills & Requirements</h2>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>AI Certification Level</label>
                                        <select
                                            value={formData.aiLevel}
                                            onChange={(e) => updateField('aiLevel', e.target.value)}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '0.95rem' }}
                                        >
                                            <option value="Any">Any Level</option>
                                            <option value="Basic">Basic (Standard Tools)</option>
                                            <option value="Intermediate">Intermediate (Workflows)</option>
                                            <option value="Advanced">Advanced (Custom Automation)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Min. English Proficiency</label>
                                        <select
                                            value={formData.englishSpoken}
                                            onChange={(e) => updateField('englishSpoken', e.target.value)}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '0.95rem' }}
                                        >
                                            <option value="Any">Any Level</option>
                                            <option value="B1">B1 (Intermediate)</option>
                                            <option value="B2">B2 (Upper Intermediate)</option>
                                            <option value="C1">C1 (Advanced)</option>
                                            <option value="C2">C2 (Proficient)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Key Skills & Tools</label>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                        <Input
                                            placeholder="Add a skill (e.g. Canva, Excel)..."
                                            value={skillInput}
                                            onChange={(e) => setSkillInput(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && addSkill(skillInput)}
                                        />
                                        <Button onClick={() => addSkill(skillInput)} variant="outline">Add</Button>
                                    </div>
                                    {/* Suggested Skills */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '0.85rem', color: '#6b7280', alignSelf: 'center', marginRight: '0.5rem' }}>Suggested:</span>
                                        {(SKILL_SUGGESTIONS[formData.industry] || SKILL_SUGGESTIONS['default']).map(skill => (
                                            <button
                                                key={skill}
                                                onClick={() => addSkill(skill)}
                                                style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '15px', backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb', cursor: 'pointer', color: '#4b5563' }}
                                            >
                                                + {skill}
                                            </button>
                                        ))}
                                    </div>
                                    {/* Active Tags */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', minHeight: '40px', padding: '0.5rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px dashed #d1d5db' }}>
                                        {formData.skills.length === 0 && <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>No skills added yet.</span>}
                                        {formData.skills.map(skill => (
                                            <span key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: '#e0f2fe', color: '#0284c7', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: '600' }}>
                                                {skill}
                                                <button onClick={() => removeSkill(skill)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#0284c7', fontWeight: 'bold' }}>&times;</button>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Preferences (Optional)</label>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                                            <input type="checkbox" checked={formData.otherPrefs.immediate} onChange={() => togglePref('immediate')} style={{ width: '18px', height: '18px' }} />
                                            <span>Immediate availability required</span>
                                        </label>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                                            <input type="checkbox" checked={formData.otherPrefs.video} onChange={() => togglePref('video')} style={{ width: '18px', height: '18px' }} />
                                            <span>Video introduction required</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Budget & Timeline</h2>

                                <div>
                                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '1rem' }}>
                                        Hourly Rate Range (USD)
                                        <span style={{ marginLeft: '0.5rem', fontSize: '0.85rem', fontWeight: 'normal', color: '#6b7280' }}>Includes platform fee</span>
                                    </label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ flex: 1, textAlign: 'center', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #d1d5db' }}>
                                            <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Min</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>${formData.hourlyRate[0]}</div>
                                        </div>
                                        <span style={{ fontWeight: 'bold', color: '#9ca3af' }}>-</span>
                                        <div style={{ flex: 1, textAlign: 'center', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #d1d5db' }}>
                                            <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Max</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>${formData.hourlyRate[1]}</div>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="5" max="50"
                                        value={formData.hourlyRate[1]}
                                        onChange={(e) => updateField('hourlyRate', [formData.hourlyRate[0], parseInt(e.target.value)])}
                                        style={{ width: '100%', cursor: 'pointer' }}
                                    />
                                    <p style={{ fontSize: '0.85rem', color: '#22c55e', marginTop: '0.5rem', fontWeight: '600' }}>
                                        <DollarSign size={14} style={{ verticalAlign: 'middle', marginRight: '2px' }} />
                                        You save approx. 65% compared to local hiring.
                                    </p>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Weekly Hours</label>
                                        <select
                                            value={formData.hoursPerWeek}
                                            onChange={(e) => updateField('hoursPerWeek', e.target.value)}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '0.95rem' }}
                                        >
                                            <option value="10">10 hrs/week</option>
                                            <option value="20">20 hrs/week (Part-time)</option>
                                            <option value="40">40 hrs/week (Full-time)</option>
                                            <option value="Custom">Custom</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Duration</label>
                                        <select
                                            value={formData.duration}
                                            onChange={(e) => updateField('duration', e.target.value)}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '0.95rem' }}
                                        >
                                            <option value="Ongoing">Ongoing / Long-term</option>
                                            <option value="Project">Project-Based</option>
                                            <option value="Short">Short-Term (&lt; 1 month)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-6">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Review & Post</h2>

                                <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <div>
                                            <div style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Job Post Preview</div>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>{formData.jobTitle}</h3>
                                        </div>
                                        <Button variant="ghost" size="sm" onClick={() => setStep(1)}>Edit</Button>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '4px', fontWeight: '600' }}>
                                            {formData.industry}
                                        </span>
                                        <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', backgroundColor: '#f3f4f6', color: '#4b5563', borderRadius: '4px' }}>
                                            ${formData.hourlyRate[0]} - ${formData.hourlyRate[1]}/hr
                                        </span>
                                        <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', backgroundColor: '#f3f4f6', color: '#4b5563', borderRadius: '4px' }}>
                                            {formData.hoursPerWeek} {formData.hoursPerWeek === 'Custom' ? '' : 'hrs/week'}
                                        </span>
                                    </div>

                                    <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', whiteSpace: 'pre-wrap' }}>
                                        {formData.description}
                                    </p>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Skills Required:</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                            {formData.skills.map(s => (
                                                <span key={s} style={{ fontSize: '0.8rem', border: '1px solid #d1d5db', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', marginBottom: '0.5rem' }}>
                                        <input type="checkbox" checked={formData.isPrivate} onChange={() => updateField('isPrivate', !formData.isPrivate)} />
                                        <span><strong>Make Private</strong> (Only visible to invited VAs)</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={formData.isBoosted} onChange={() => updateField('isBoosted', !formData.isBoosted)} />
                                        <span><strong>Boost this Job</strong> (+$10) - Get 3x more views</span>
                                        <span style={{ fontSize: '0.7rem', backgroundColor: '#fef3c7', color: '#d97706', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 'bold' }}>RECOMMENDED</span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
                            {step > 1 ? (
                                <Button variant="outline" onClick={prevStep}>Back</Button>
                            ) : (
                                <div></div>
                            )}

                            {step < 4 ? (
                                <Button
                                    onClick={nextStep}
                                    disabled={!formData.jobTitle && step === 1}
                                    style={{ backgroundColor: '#28a745', borderColor: '#28a745', paddingLeft: '2rem', paddingRight: '2rem' }}
                                >
                                    Next Step <ChevronRight size={16} />
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => alert("Job Posted Successfully! (Mock)")}
                                    style={{ backgroundColor: '#28a745', borderColor: '#28a745', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '1.1rem' }}
                                >
                                    Post Job Now
                                </Button>
                            )}
                        </div>
                    </Card>
                </div>

                {/* Right Column: Live Preview / Trust / Summary */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Trust Card */}
                    <Card style={{ padding: '1.5rem', backgroundColor: '#fff' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#111827', fontWeight: 'bold' }}>
                            <ShieldCheck size={20} color="#28a745" /> Why Post Here?
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#6b7280', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li style={{ display: 'flex', gap: '0.5rem' }}>
                                <Zap size={16} color="#eab308" style={{ flexShrink: 0 }} />
                                Matches in &lt; 24 hours
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#28a745" style={{ flexShrink: 0 }} />
                                AI-Certified Talent Only
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}>
                                <DollarSign size={16} color="#027bff" style={{ flexShrink: 0 }} />
                                Zero Upfront Fees
                            </li>
                        </ul>
                    </Card>

                    {/* Completion Estimation */}
                    <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#9ca3af' }}>
                        <p>Estimated time to complete: <span style={{ fontWeight: 'bold', color: '#4b5563' }}>2 mins</span></p>
                    </div>

                    {/* Preview Widget (Steps 1-3) */}
                    {step < 4 && (
                        <Card style={{ padding: '1rem', backgroundColor: '#f0f9ff', border: '1px dashed #bfdbfe' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#0369a1', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Live Preview</div>
                            <div style={{ fontWeight: 'bold', fontSize: '1rem', color: '#111827', marginBottom: '0.25rem' }}>
                                {formData.jobTitle || "Your Job Title"}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                {formData.industry} • ${formData.hourlyRate[0]}/hr+
                            </div>
                        </Card>
                    )}
                </div>
            </main>
        </div>
    );
}
