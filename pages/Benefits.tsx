import React from 'react';
import { Link } from 'react-router-dom';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
    const corePrograms = [
        {
            title: 'Amgala Vision',
            subtitle: 'Academic & Technology Excellence',
            description: 'STEM scholarships, research opportunities, and innovation programs for academically gifted Indonesian youth.',
            features: ['Full & partial scholarships', 'STEM competition training', 'Research mentorship', 'Technology skills development'],
            color: 'from-blue-50 to-indigo-50',
            link: '/amgala-vision',
            participants: '150+ scholars',
            icon: (
                <svg className="w-12 h-12 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: 'Amgala Impact',
            subtitle: 'Social & Community Leadership',
            description: 'Volunteer programs, social entrepreneurship, and community development initiatives across Indonesia.',
            features: ['Volunteer coordination', 'Social entrepreneurship', 'UMKM development', 'Leadership training'],
            color: 'from-teal-50 to-blue-50',
            link: '/amgala-impact',
            participants: '800+ volunteers',
            icon: (
                <svg className="w-12 h-12 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-surface">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy py-20 text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Programs</h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Comprehensive youth empowerment programs designed to nurture Indonesian leaders with character, logic, and global mindset through academic excellence and community impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/amgala-vision" className="bg-white text-primary-navy font-semibold py-3 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Explore Vision
                            </Link>
                            <Link to="/amgala-impact" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                Explore Impact
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Programs */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Core Programs</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
                                Two flagship programs that form the foundation of our youth empowerment mission
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                            {corePrograms.map((program, index) => (
                                <div key={index} className={`bg-gradient-to-br ${program.color} rounded-google-2xl p-8 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group`}>
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            {program.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-primary-text mb-2">{program.title}</h3>
                                            <p className="text-primary-navy font-semibold mb-3">{program.subtitle}</p>
                                            <div className="bg-white/60 px-3 py-1 rounded-full text-sm font-medium text-primary-navy inline-block">
                                                {program.participants}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-secondary-text leading-relaxed mb-6 text-lg">
                                        {program.description}
                                    </p>
                                    
                                    <div className="space-y-3 mb-8">
                                        {program.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-5 h-5 bg-primary-navy rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-secondary-text">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <Link 
                                        to={program.link} 
                                        className="inline-flex items-center gap-2 bg-primary-navy text-white px-6 py-3 rounded-google-xl font-semibold hover:bg-secondary-navy transition-all duration-300 group-hover:scale-105"
                                    >
                                        Learn More
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Supporting Programs */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Supporting Programs</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
                                Additional programs that complement our core initiatives and strengthen our holistic approach
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {BENEFITS.slice(2).map((benefit, index) => (
                                <div key={index} className="bg-surface-variant p-8 rounded-google-xl shadow-card border border-outline-variant text-center flex flex-col items-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2">
                                    <div className="mb-6 p-4 bg-gradient-to-br from-primary-navy/10 to-secondary-navy/10 rounded-google-xl">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary-text mb-4">{benefit.title}</h3>
                                    <p className="text-secondary-text flex-grow leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Impact */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Program Impact</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full mb-8"></div>
                        <p className="text-secondary-text text-lg mb-12">
                            Real numbers showing the transformative impact of our programs across Indonesia
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary-navy mb-2">15+</div>
                                <div className="text-secondary-text">Cities Reached</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary-navy mb-2">1,200+</div>
                                <div className="text-secondary-text">Youth Engaged</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary-navy mb-2">150+</div>
                                <div className="text-secondary-text">Scholarships</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary-navy mb-2">50+</div>
                                <div className="text-secondary-text">Community Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">How to Join</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Simple steps to become part of the Amgala Foundation community
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    1
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Choose Program</h3>
                                <p className="text-secondary-text text-sm">Select between Amgala Vision or Amgala Impact based on your interests and goals</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Submit Application</h3>
                                <p className="text-secondary-text text-sm">Complete the application form with required documents and essays</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-primary-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Assessment Process</h3>
                                <p className="text-secondary-text text-sm">Participate in interviews and assessments to evaluate fit and potential</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary-navy to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Start Journey</h3>
                                <p className="text-secondary-text text-sm">Begin your transformative journey as an Amgala Foundation member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
                        <p className="text-xl text-white/90 mb-8">
                            Join thousands of Indonesian youth who are building character, developing logic, and creating global impact
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/hubungi" className="bg-white text-primary-navy font-semibold py-4 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Apply Now
                            </Link>
                            <Link to="/faq" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benefits;