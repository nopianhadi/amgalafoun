
import React from 'react';
import FaqAccordion from '../components/FaqAccordion';
import { FAQ_ITEMS } from '../constants';

const Faq: React.FC = () => {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-primary-text text-center mb-12 tracking-tight">Frequently Asked Questions</h1>
                    <FaqAccordion items={FAQ_ITEMS} />
                </div>
            </div>
        </div>
    );
};

export default Faq;
