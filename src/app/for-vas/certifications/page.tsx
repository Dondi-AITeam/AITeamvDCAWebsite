import EarnBadgesPage from '@/app/badges/page';
import { metadata as originalMetadata } from '@/app/badges/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    ...originalMetadata,
    alternates: {
        canonical: 'https://aiteam.ph/for-vas/earn-badges',
    },
};

export default EarnBadgesPage;
