import HowItWorksPage, { metadata as originalMetadata } from '@/app/hire-hybrid-talent/how-it-works/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    ...originalMetadata,
    alternates: {
        canonical: 'https://aiteam.ph/hire-hybrid-talent/how-it-works',
    },
};

export default HowItWorksPage;
