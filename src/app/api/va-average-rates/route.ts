
import { NextResponse } from 'next/server';

// Mock Data for Base Rates (USD)
const BASE_RATES: Record<string, number> = {
    'real-estate': 10,
    'ecommerce': 11,
    'digital-marketing': 12,
    'general-admin': 8,
    'customer-service': 9,
    'healthcare': 14,
    'finance': 15,
    'content-creation': 11,
    'sales': 13,
    'legal': 16,
    'hr': 12,
    'design': 14,
    'project-management': 18,
    'default': 10
};

// Standardized Industry Samples for "What You Get" Section
const INDUSTRY_SAMPLES: Record<string, {
    aiStack: string[];
    sampleTask: string;
    sampleOutput: string;
    savingsImpact: string;
}> = {
    'real-estate': {
        aiStack: ['Follow Up Boss', 'Lofty', 'ChatGPT', 'Canva'],
        sampleTask: 'Create a listing description and social media post for a 3-bed home in Austin.',
        sampleOutput: 'Compelling 300-word Zillow description + 3 Instagram captions with hashtags + matching Canva visual template.',
        savingsImpact: 'Saves 2+ hours per new listing'
    },
    'ecommerce': {
        aiStack: ['Shopify', 'Klaviyo', 'Gorgias', 'Midjourney'],
        sampleTask: 'Write product descriptions and set up an abandoned cart email sequence.',
        sampleOutput: '5 SEO-optimized product pages + 3-part email flow with personalized subject lines targeting 20% recovery.',
        savingsImpact: 'Increases conversion by ~15%'
    },
    'digital-marketing': {
        aiStack: ['HubSpot', 'Meta Ads', 'Jasper', 'SurferSEO'],
        sampleTask: 'Plan a month of content and draft 5 blog posts.',
        sampleOutput: '30-day social media calendar + 5 long-form articles (1500w) optimized for keywords + ad copy variants.',
        savingsImpact: 'Reduces content costs by 60%'
    },
    'general-admin': {
        aiStack: ['Notion', 'Slack', 'ChatGPT', 'Zoom'],
        sampleTask: 'Organize meeting notes and draft follow-up emails for the week.',
        sampleOutput: 'Summarized action items from 10 meetings + drafted emails sent to stakeholders within 1 hour.',
        savingsImpact: 'Frees up 10 hours/week'
    },
    'customer-service': {
        aiStack: ['Zendesk', 'Intercom', 'TextExpander', 'Claude'],
        sampleTask: 'Handle incoming support tickets and update help center articles.',
        sampleOutput: 'Resolved 50+ tickets/day with AI-assisted responses + updated 3 FAQ articles based on common queries.',
        savingsImpact: '24/7 coverage at 1/3 cost'
    },
    'coaching-consulting': {
        aiStack: ['Kajabi', 'Circle', 'Descript', 'Zoom'],
        sampleTask: 'Repurpose a 1-hour coaching call into social clips and a newsletter.',
        sampleOutput: '3 short video clips with captions + a newsletter summary sent to your email list.',
        savingsImpact: 'Multiplies content output by 5x'
    },
    'saas-tech-startups': {
        aiStack: ['Jira', 'Notion', 'GitHub', 'Linear'],
        sampleTask: 'Triaging user bug reports and updating documentation.',
        sampleOutput: 'Categorized 20 bug reports with reproduction steps + updated API docs for new release.',
        savingsImpact: 'Accelerates dev cycles'
    },
    'healthcare': {
        aiStack: ['DrChrono', 'Kara', 'Trello', 'RingCentral'],
        sampleTask: 'Process patient intake forms and verify insurance eligibility.',
        sampleOutput: 'Verified 15 patients for tomorrow\'s schedule + prepared digital charts with pre-visit notes.',
        savingsImpact: 'Reduces admin overhead by 40%'
    },
    'finance': {
        aiStack: ['QuickBooks', 'Xero', 'Dext', 'Excel AI'],
        sampleTask: 'Reconcile weekly transactions and generate an expense report.',
        sampleOutput: 'Categorized 200+ transactions + created a visual expense breakdown report for management.',
        savingsImpact: 'Ensures books are always current'
    },
    'content-creation': {
        aiStack: ['Premiere Pro', 'CapCut', 'Midjourney', 'Copy.ai'],
        sampleTask: 'Edit raw footage into 5 TikToks/Reels.',
        sampleOutput: '5 engaging short-form videos with hooks, captions, and trending audio.',
        savingsImpact: ' consistently posts daily content'
    },
    'lead-generation': {
        aiStack: ['Apollo', 'LinkedIn Sales Nav', 'Instantly', 'Pipedrive'],
        sampleTask: 'Build a list of 100 qualified leads and draft cold outreach.',
        sampleOutput: 'Verified list of 100 decision-makers + 3-step personalized email sequence loaded into CRM.',
        savingsImpact: 'Fills pipeline on autopilot'
    },
    'legal': {
        aiStack: ['Clio', 'LexisNexis', 'Otter.ai', 'DocuSign'],
        sampleTask: 'Transcribe client meeting and draft a retainer agreement.',
        sampleOutput: 'Accurate transcript + customized retainer agreement ready for signature.',
        savingsImpact: 'Bill more hours on strategy'
    },
    'recruitment-hr': {
        aiStack: ['LinkedIn Recruiter', 'Greenhouse', 'Ashby', 'ChatGPT'],
        sampleTask: 'Screen resumes and schedule initial interviews.',
        sampleOutput: 'Screened 50 applicants, shortlisted 10, and scheduled 5 interviews with calendar invites sent.',
        savingsImpact: 'Cuts time-to-hire by 50%'
    },
    'graphic-design': {
        aiStack: ['Adobe Creative Cloud', 'Canva', 'Midjourney', 'Figma'],
        sampleTask: 'Design social media assets for a new campaign launch.',
        sampleOutput: 'Set of 10 cohesive graphics (posts, stories, banners) adhering to brand guidelines.',
        savingsImpact: 'On-demand creative scale'
    },
    'project-management': {
        aiStack: ['Asana', 'Monday.com', 'ClickUp', 'Slack'],
        sampleTask: 'Update project timelines and chase team deliverables.',
        sampleOutput: 'Updated Gantt charts + status report sent to leadership + blockers flagged in Slack.',
        savingsImpact: 'Keeps projects on track'
    },
    'default': {
        aiStack: ['Notion', 'Slack', 'ChatGPT', 'Zoom'],
        sampleTask: 'Manage calendar and inbox zero.',
        sampleOutput: 'Organized schedule, prioritized emails, and drafted replies for approval.',
        savingsImpact: 'Reclaim 10+ hours/week'
    }
};

const MOCK_CANDIDATES = [
    // Real Estate
    {
        id: 1,
        name: "Maria S.",
        role: "Real Estate VA",
        headline: "Real Estate Admin & Lead Manager",
        rate: 12,
        image: "/avatars/maria.png",
        topSkill: "Lead Nurturing",
        badges: ["Advanced AI", "Real Estate Specialist"],
        englishLevel: "C1",
        availability: "Immediate",
        industry: "real-estate"
    },
    {
        id: 2,
        name: "Joshua R.",
        role: "ISA / Admin",
        headline: "Inside Sales Agent (ISA) with AI Ops",
        rate: 10,
        image: "/avatars/joshua.png",
        topSkill: "Follow Up Boss",
        badges: ["Intermediate AI", "Cold Calling"],
        englishLevel: "B2",
        availability: "Full-Time",
        industry: "real-estate"
    },
    {
        id: 101,
        name: "Ana M.",
        role: "Transaction Coordinator",
        headline: "Certified Transaction Coordinator",
        rate: 14,
        image: "/avatars/ana.png",
        topSkill: "Dotloop / Docusign",
        badges: ["Advanced AI", "Detail Oriented"],
        englishLevel: "C2",
        availability: "< 1 Week",
        industry: "real-estate"
    },

    // E-commerce
    {
        id: 3,
        name: "Elena R.",
        role: "E-com Specialist",
        headline: "Shopify Store Manager & Support",
        rate: 11,
        image: "/avatars/elena.png",
        topSkill: "Shopify Mgmt",
        badges: ["Advanced AI", "Customer Obsessed"],
        englishLevel: "C1",
        availability: "Immediate",
        industry: "ecommerce"
    },
    {
        id: 102,
        name: "Mark D.",
        role: "Amazon VA",
        headline: "Amazon FBA & PPC Assistant",
        rate: 13,
        image: "/avatars/mark.png",
        topSkill: "Seller Central",
        badges: ["Intermediate AI", "PPC Expert"],
        englishLevel: "B2",
        availability: "Part-Time",
        industry: "ecommerce"
    },
    {
        id: 103,
        name: "Sarah L.",
        role: "Customer Success / E-com",
        headline: "E-commerce CS Rep (Gorgias/Zendesk)",
        rate: 9,
        image: "/avatars/sarah.png",
        topSkill: "Conflict Resolution",
        badges: ["Basic AI", "Empathetic"],
        englishLevel: "C2",
        availability: "Immediate",
        industry: "ecommerce"
    },

    // Digital Marketing
    {
        id: 104,
        name: "Jasmine P.",
        role: "Social Media Manager",
        headline: "Creative SMM & Content Strategist",
        rate: 12,
        image: "/avatars/jasmine.png",
        topSkill: "Content Calendar",
        badges: ["Advanced AI", "Creative"],
        englishLevel: "C1",
        availability: "Immediate",
        industry: "digital-marketing"
    },
    {
        id: 105,
        name: "Ryan K.",
        role: "SEO Specialist",
        headline: "SEO & Content Writer using AI",
        rate: 15,
        image: "/avatars/ryan.png",
        topSkill: "On-Page SEO",
        badges: ["Advanced AI", "Tech Savvy"],
        englishLevel: "B2",
        availability: "Project-Based",
        industry: "digital-marketing"
    },
    {
        id: 106,
        name: "Katrina B.",
        role: "Paid Ads Specialist",
        headline: "Meta & Google Ads Junior Buyer",
        rate: 14,
        image: "/avatars/katrina.png",
        topSkill: "Ad Optimization",
        badges: ["Intermediate AI", "Data Driven"],
        englishLevel: "C1",
        availability: "Full-Time",
        industry: "digital-marketing"
    },

    // SaaS / Tech
    {
        id: 4,
        name: "Chris T.",
        role: "Tech Support VA",
        headline: "L1/L2 Technical Support Rep",
        rate: 14,
        image: "/avatars/chris.png",
        topSkill: "Zendesk AI",
        badges: ["Advanced AI", "Tech Support"],
        englishLevel: "C2",
        availability: "Immediate",
        industry: "saas-tech-startups"
    },
    {
        id: 107,
        name: "James F.",
        role: "SaaS Sales Dev",
        headline: "SDR / Outbound Lead Gen",
        rate: 15,
        image: "/avatars/james.png",
        topSkill: "Cold Email",
        badges: ["Intermediate AI", "Sales Hunter"],
        englishLevel: "C2",
        availability: "Immediate",
        industry: "saas-tech-startups"
    },

    // Healthcare
    {
        id: 108,
        name: "Nurse Joy C.",
        role: "Medical VA",
        headline: "Registered Nurse / Medical Admin",
        rate: 16,
        image: "/avatars/joy.png",
        topSkill: "Medical Scribing",
        badges: ["HIPAA Trained", "Advanced AI"],
        englishLevel: "C2",
        availability: "Night Shift",
        industry: "healthcare"
    },
    {
        id: 109,
        name: "Peter H.",
        role: "Patient Coordinator",
        headline: "Clinic Scheduler & Intake",
        rate: 12,
        image: "/avatars/peter.png",
        topSkill: "EHR Management",
        badges: ["Basic AI", "Organized"],
        englishLevel: "C1",
        availability: "Full-Time",
        industry: "healthcare"
    },

    // Finance
    {
        id: 110,
        name: "Michael B.",
        role: "Bookkeeper",
        headline: "Xero/QBO Certified Bookkeeper",
        rate: 15,
        image: "/avatars/michael.png",
        topSkill: "Reconciliation",
        badges: ["CPA", "Intermediate AI"],
        englishLevel: "B2",
        availability: "Part-Time",
        industry: "finance"
    },

    // General Admin
    {
        id: 5,
        name: "Sarah J.",
        role: "Executive Assistant",
        headline: "Proactive EA for C-Suite",
        rate: 15,
        image: "/avatars/sarah.png",
        topSkill: "Agentic Workflows",
        badges: ["Advanced AI", "Problem Solver"],
        englishLevel: "C2",
        availability: "Immediate",
        industry: "general-admin"
    },
    {
        id: 111,
        name: "Lovely P.",
        role: "General VA",
        headline: "Reliable General Admin Support",
        rate: 9,
        image: "/avatars/lovely.png",
        topSkill: "Data Entry",
        badges: ["Basic AI", "Fast Learner"],
        englishLevel: "B2",
        availability: "Full-Time",
        industry: "general-admin"
    },

    // HR / Recruitment
    {
        id: 6,
        name: "Miguel T.",
        role: "HR Specialist",
        headline: "Recruiter & Onboarding Specialist",
        rate: 13,
        image: "/avatars/miguel.png",
        topSkill: "Recruitment AI",
        badges: ["Intermediate AI", "People Person"],
        englishLevel: "C1",
        availability: "Immediate",
        industry: "recruitment-hr"
    },

    // Legal
    {
        id: 112,
        name: "Atty. Rose M.",
        role: "Legal Assistant",
        headline: "Paralegal / Legal Researcher",
        rate: 16,
        image: "/avatars/rose.png",
        topSkill: "Legal Drafting",
        badges: ["Law Graduate", "Advanced AI"],
        englishLevel: "C2",
        availability: "20 hrs/wk",
        industry: "legal"
    },

    // Content Creation
    {
        id: 113,
        name: "Nico D.",
        role: "Video Editor",
        headline: "Short-Form Video Editor (CapCut/Premiere)",
        rate: 12,
        image: "/avatars/nico.png",
        topSkill: "Video Editing",
        badges: ["Creative", "Intermediate AI"],
        englishLevel: "B2",
        availability: "Project-Based",
        industry: "content-creation"
    }
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const industry = searchParams.get('industry') || 'default';
    const aiLevel = searchParams.get('ai_level') || 'any';
    const englishLevel = searchParams.get('english_level') || 'any';

    // Base Rate Lookup
    let baseRate = BASE_RATES[industry] || BASE_RATES['default'];

    // Multipliers
    if (aiLevel === 'intermediate') baseRate *= 1.1;
    if (aiLevel === 'advanced') baseRate *= 1.3;

    if (englishLevel === 'b2') baseRate *= 1.1; // C1/C2 implied as standard or premium

    // Final Calculations
    // Round to nearest 0.50
    const finalBaseRate = Math.round(baseRate * 2) / 2;
    const clientRate = finalBaseRate * 1.25; // 25% Platform Fee

    // Filter Candidates
    // If industry not found in mock, return generic/random ones
    let sampleCandidates = MOCK_CANDIDATES.filter(c => c.industry === industry);
    if (sampleCandidates.length === 0) {
        sampleCandidates = MOCK_CANDIDATES.slice(0, 3); // Fallback
    }

    const sampleData = INDUSTRY_SAMPLES[industry] || INDUSTRY_SAMPLES['default'];

    const data = {
        averageBaseRate: finalBaseRate,
        averageClientRate: clientRate,
        sample: sampleData,
        candidates: sampleCandidates
    };

    // Simulate Network Delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json(data);
}
