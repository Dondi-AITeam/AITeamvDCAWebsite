export interface IndustryData {
    title: string;
    hero: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
        imageAlt: string;
    };
    overview: {
        title: string;
        intro: string;
        tiers: {
            title: string;
            description: string;
            skills: string;
            tools: string;
            benefit: string;
            images: { src: string; alt: string; caption?: string }[];
        }[];
    };
    capstone: {
        title: string;
        input: string;
        inputImage?: { src: string; alt: string };
        outputTitle: string;
        outputs: {
            text: string;
            image?: { src: string; alt: string };
        }[];
        result: string;
    };
    cta: {
        text: string;
        button: string;
    };
}

export const industriesData: Record<string, IndustryData> = {
    'real-estate': {
        title: 'AI Virtual Assistants for Real Estate',
        hero: {
            title: 'Smart Help That Saves You Time and Wins More Deals',
            subtitle: 'Let our trained VAs handle the everyday tasks — so you can focus on closing sales.',
            description: 'Stop Wasting Time on Busy Work. Start Closing More Homes.',
            image: 'https://placehold.co/1200x600/e2e8f0/1e293b?text=Modern+Luxury+Home+For+Sale',
            imageAlt: 'Modern luxury home exterior with For Sale sign',
        },
        overview: {
            title: 'Choose Your VA Level: Skills, Tools & Results',
            intro: 'Our certified aiTeam.ph VAs are trained in three levels using the best simple AI tools for brokers. Pick what fits now — upgrade anytime.',
            tiers: [
                {
                    title: 'Basic Level',
                    description: 'Fast daily admin support from day one — no follow-ups missed.',
                    skills: 'Draft emails/texts, update CRM, summarize documents/listings, extract PDF info, create simple graphics.',
                    tools: 'Claude (for writing & summaries), Canva Magic Studio (basics).',
                    benefit: 'Inbox & CRM always current, automated admin tasks done.',
                    images: [
                        { src: 'https://placehold.co/600x300/e2e8f0/1e293b?text=Claude+AI+Drafting+Emails', alt: 'Claude AI chat interface drafting real estate email', caption: 'Claude AI handling your inbox and summaries instantly.' }
                    ]
                },
                {
                    title: 'Intermediate Level',
                    description: 'Consistent, attractive marketing without your effort.',
                    skills: 'Branded social posts/carousels/market updates, short video clips, avatar videos (no filming), photo enhancements, basic scheduling automations.',
                    tools: 'Advanced Canva AI, Opus Clip/CapCut (video editing), HeyGen (AI avatars), Zapier (simple triggers).',
                    benefit: 'Strong online presence, automated listings marketing, and more leads attracted automatically.',
                    images: [
                        { src: 'https://placehold.co/600x300/e2e8f0/1e293b?text=Canva+Magic+Creating+Flyers', alt: 'Canva Magic Studio interface creating real estate social graphic', caption: 'Instant "Just Listed" graphics designed by your VA.' },
                        { src: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Social+Media+Carousel+Example', alt: 'Instagram carousel examples on phone screen' }
                    ]
                },
                {
                    title: 'Advanced Level',
                    description: 'Smart, self-running systems that handle complex work and track results.',
                    skills: 'Auto lead nurturing sequences, full listing-to-post pipelines, deadline/vendor/owner management, transaction tracking, compliance checks, performance monitoring.',
                    tools: 'Google Antigravity (custom agents), Follow Up Boss/Lofty AI features, AppFolio Realm-X (PM), advanced Zapier/Make.com.',
                    benefit: 'Faster conversions, smoother operations, measurable time & ROI gains.',
                    images: [
                        { src: 'https://placehold.co/600x300/e2e8f0/1e293b?text=CRM+Analytics+Dashboard', alt: 'Broker viewing lead CRM analytics dashboard', caption: 'Track every lead and automate follow-ups.' }
                    ]
                }
            ]
        },
        capstone: {
            title: 'Real Example: What Happens When You Give Us a New Listing',
            input: '"Here are photos of 123 Maple Dr — 3 beds, 2 baths, 1,800 sq ft, updated kitchen, near good schools. Make a Zillow description, 3 Instagram posts, a short video tour, and prep an email to my buyers."',
            inputImage: { src: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Raw+Kitchen+Photo+Input', alt: 'Raw output photo of kitchen interior' },
            outputTitle: 'Your VA delivers (usually in under 2 hours):',
            outputs: [
                { text: 'Clean, inviting Zillow/MLS write-up (professional & compliant)', image: { src: 'https://placehold.co/600x150/e2e8f0/1e293b?text=Polished+Zillow+Description', alt: 'Text snippet of engaging Zillow description' } },
                { text: '3 ready Instagram captions + carousel graphics', image: { src: 'https://placehold.co/600x300/e2e8f0/1e293b?text=IG+Carousel+Graphics', alt: 'Instagram carousel graphics for Just Listed' } },
                { text: '60-second avatar video highlighting the home (no camera needed)', image: { src: 'https://placehold.co/600x300/e2e8f0/1e293b?text=AI+Avatar+Market+Update', alt: 'HeyGen AI avatar video creation interface' } },
                { text: 'Email draft ready to send + setup for future auto-flows' }
            ],
            result: 'Result: Listing shines online fast, leads start coming in, you\'re free for showings & negotiations.'
        },
        cta: {
            text: 'Ready to Get Started? Add a reliable VA who grows with you.',
            button: 'Get Your Real Estate VA Now'
        }
    }
};
