import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCard: React.FC<{ 
    title: string; 
    description: string; 
    features: string[];
    icon: React.ReactNode;
    color: string;
    link: string;
}> = ({ title, description, features, icon, color, link }) => (
    <div className={`bg-gradient-to-br ${color} rounded-google-2xl p-8 shadow-card hover:shadow-2xl border border-outline-variant relative overflow-hidden transition-all duration-500 hover:scale-105 group`}>
        <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-blue rounded-google-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-primary-text mb-1">{title}</h3>
                </div>
            </div>
            
            <p className="text-secondary-text leading-relaxed mb-6 text-lg">
                {description}
            </p>
            
            <div className="space-y-3 mb-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-google-lg">
                        <div className="w-6 h-6 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-secondary-text">{feature}</span>
                    </div>
                ))}
            </div>
            
            <Link to={link} className="inline-flex items-center gap-2 bg-primary-navy text-white px-6 py-3 rounded-google-xl font-semibold hover:bg-secondary-navy transition-all duration-300 group-hover:scale-105">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </div>
    </div>
);

const ResourceCard: React.FC<{ title: string; description: string; type: string }> = ({ title, description, type }) => (
    <div className="bg-surface p-6 rounded-google-xl shadow-card border border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-navy to-accent-blue rounded-google-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-primary-text">{title}</h3>
                <p className="text-sm text-secondary-text mt-1">{description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mt-2">{type}</span>
            </div>
        </div>
        <button className="flex-shrink-0 bg-primary-navy text-white font-semibold py-2 px-6 rounded-google-lg hover:bg-secondary-navy transition-all duration-300">
            Download
        </button>
    </div>
);

const Guide: React.FC = () => {
    const programs = [
        {
            title: 'Amgala Vision',
            description: 'Academic & Technology Excellence pathway through scholarships, STEM competitions, and mentoring that turn knowledge into impact.',
            features: [
                'Scholarship opportunities for STEM education',
                'Research and innovation projects',
                'Academic mentorship program',
                'Technology skills development'
            ],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            color: 'from-blue-50 via-indigo-50 to-purple-50',
            link: '/benefit'
        },
        {
            title: 'Amgala Impact',
            description: 'Social & Community Leadership movement of young volunteers and social entrepreneurs transforming communities across Indonesia.',
            features: [
                'Community service projects',
                'Social entrepreneurship training',
                'Leadership development workshops',
                'Volunteer coordination programs'
            ],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: 'from-blue-50 via-slate-50 to-indigo-50',
            link: '/benefit'
        }
    ];

    const resources = [
        { 
            title: 'Program Application Guide', 
            description: 'Complete guide for applying to Amgala Youth programs.',
            type: 'PDF Guide'
        },
        { 
            title: 'Scholarship Application Template', 
            description: 'Template and guidelines for scholarship applications.',
            type: 'Document'
        },
        { 
            title: 'Community Project Proposal Template', 
            description: 'Format for proposing community impact projects.',
            type: 'Template'
        },
        { 
            title: 'Youth Leadership Handbook', 
            description: 'Essential guide for developing leadership skills.',
            type: 'Handbook'
        },
        { 
            title: 'Amgala Foundation Media Kit', 
            description: 'Official logos, brand guidelines, and media assets.',
            type: 'Media Kit'
        },
    ];

    return (
        <div className="min-h-screen bg-surface">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy py-20 text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">Program Guide</h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Your comprehensive guide to joining Amgala Youth programs and making a meaningful impact in Indonesia's future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/benefit" className="bg-white text-primary-navy font-semibold py-3 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                View All Programs
                            </Link>
                            <Link to="/hubungi" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                Get Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Overview */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Our Programs</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
                                Choose the program that aligns with your interests and goals
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                            {programs.map((program, index) => (
                                <ProgramCard key={index} {...program} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">How to Apply</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Simple steps to join our youth empowerment programs
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    1
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Choose Program</h3>
                                <p className="text-secondary-text text-sm">Select between Amgala Vision or Amgala Impact based on your interests</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Prepare Documents</h3>
                                <p className="text-secondary-text text-sm">Gather required documents including academic records and recommendations</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-primary-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Submit Application</h3>
                                <p className="text-secondary-text text-sm">Complete online application form with all required information</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary-navy to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Join Program</h3>
                                <p className="text-secondary-text text-sm">Start your journey as an Amgala Youth member and make impact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Resources & Downloads</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Essential documents and resources to help you succeed
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            {resources.map((resource, index) => (
                                <ResourceCard key={index} {...resource} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Frequently Asked Questions</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="bg-surface p-6 rounded-google-xl shadow-card border border-outline-variant">
                                <h3 className="text-lg font-semibold text-primary-text mb-3">Who can apply for Amgala Youth programs?</h3>
                                <p className="text-secondary-text">Indonesian students aged 15-25 who demonstrate academic potential, leadership qualities, and commitment to community service.</p>
                            </div>
                            
                            <div className="bg-surface p-6 rounded-google-xl shadow-card border border-outline-variant">
                                <h3 className="text-lg font-semibold text-primary-text mb-3">What is the application deadline?</h3>
                                <p className="text-secondary-text">Applications are typically open from January to March each year. Check our announcements for specific dates.</p>
                            </div>
                            
                            <div className="bg-surface p-6 rounded-google-xl shadow-card border border-outline-variant">
                                <h3 className="text-lg font-semibold text-primary-text mb-3">Is there any cost to join the programs?</h3>
                                <p className="text-secondary-text">No, all Amgala Youth programs are completely free. We also provide scholarships and support for selected participants.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-xl text-white/90 mb-8">
                            Join thousands of Indonesian youth who are making a difference in their communities
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/benefit" className="bg-white text-primary-navy font-semibold py-4 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Apply Now
                            </Link>
                            <Link to="/hubungi" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Guide;