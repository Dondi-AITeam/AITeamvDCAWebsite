import { Metadata } from 'next';
import HirePageContent from './HirePageContent';

export const metadata: Metadata = {
    title: 'Browse AI-Certified Virtual Assistants from the Philippines | aiTeam.ph',
    description: 'Find pre-vetted, AI-powered VAs specialized in Real Estate, E-commerce, Digital Marketing & more. Filter by AI level, English proficiency, industry. 7-day money-back guarantee. Hire hybrid talent today.',
};

export default function HirePage() {
    return <HirePageContent />;
}
