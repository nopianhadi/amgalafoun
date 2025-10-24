import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
    return (
        <div className="bg-light-gray-bg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-primary-text text-center mb-12 tracking-tight">Benefit Program</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {BENEFITS.map((benefit, index) => (
                        <div key={index} className="bg-gradient-to-r from-lavender-soft to-sky-light p-8 rounded-xl shadow-google border border-border-gray text-center flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-primary-text mb-2">{benefit.title}</h3>
                            <p className="text-secondary-text flex-grow">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;