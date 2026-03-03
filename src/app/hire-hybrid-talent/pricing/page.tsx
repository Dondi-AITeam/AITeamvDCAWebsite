import PricingPage, { metadata as originalMetadata } from '@/app/pricing/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    ...originalMetadata,
    alternates: {
        canonical: 'https://aiteam.ph/pricing',
    },
};

export default PricingPage;
