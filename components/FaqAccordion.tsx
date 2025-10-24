import React, { useState } from 'react';
import type { FaqItem } from '../types';

interface AccordionItemProps {
    item: FaqItem;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-surface rounded-google-xl overflow-hidden shadow-card border border-outline-variant card-hover">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none hover:bg-surface-variant transition-colors duration-200"
            >
                <h3 className="text-lg font-semibold text-primary-text pr-4">{item.question}</h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-green/10 flex items-center justify-center transition-all duration-200 ${isOpen ? 'bg-primary-green text-white' : 'text-primary-green'}`}>
                    <svg className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                 <div className="px-6 pb-6 border-t border-outline-variant bg-surface-variant/30">
                    <div className="pt-4">
                        <p className="text-secondary-text leading-relaxed">{item.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


interface FaqAccordionProps {
    items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <AccordionItem key={index} item={item} />
            ))}
        </div>
    );
};

export default FaqAccordion;