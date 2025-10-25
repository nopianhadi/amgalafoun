import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AmgalaVision: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    const scholarshipTypes = [
        {
            title: 'Full Scholarship',
            description: 'Complete coverage for outstanding students',
            coverage: ['100% tuition fees', 'Living allowance', 'Books & materials', 'Research funding'],
            eligibility: 'Top 5% academic performance',
            duration: '4 years undergraduate',
            amount: 'Up to Rp 200 million'
        },
        {
            title: 'Partial Scholarship',
            description: 'Support for promising students',
            coverage: ['50-75% tuition fees', 'Academic mentorship', 'Competition training', 'Networking access'],
            eligibility: 'Top 15% academic performance',
            duration: '4 years undergraduate',
            amount: 'Up to Rp 100 million'
        },
        {
            title: 'Research Grant',
            description: 'Funding for innovative research projects',
            coverage: ['Research materials', 'Lab access', 'Publication support', 'Conference attendance'],
            eligibility: 'Approved research proposal',
            duration: '1-2 years project',
            amount: 'Up to Rp 50 million'
        }
    ];

    const successStories = [
        {
            name: 'Rizki Pratama',
            field: 'Computer Science',
            achievement: 'Software Engineer at Gojek',
            story: 'Amgala Vision scholarship enabled me to study at ITB. Now I develop technology solutions that impact millions of Indonesians.',
            image: '/components/src/photo-1517180102446-f3ece451e9d8.jpeg',
            year: '2020 Graduate'
        },
        {
            name: 'Sari Indrawati',
            field: 'Biomedical Engineering',
            achievement: 'Research Published in Nature',
            story: 'Through the research program, my work on affordable medical devices is now helping rural communities across Indonesia.',
            image: '/components/src/photo-1523240795612-9a054b0db644.jpeg',
            year: '2021 Graduate'
        },
        {
            name: 'Ahmad Fauzi',
            field: 'Renewable Energy',
            achievement: 'Founded GreenTech Startup',
            story: 'The mentorship and network from Amgala Vision helped me launch a solar energy startup that serves 50+ villages.',
            image: '/components/src/photo-1524178232363-1fb2b075b655.jpeg',
            year: '2019 Graduate'
        }
    ];

    const visionPrograms = [
        {
            title: 'Scholarship Program',
            description: 'Full and partial scholarships for outstanding Indonesian students pursuing STEM education',
            features: ['Tuition coverage', 'Living allowance', 'Academic mentorship', 'Research opportunities'],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: 'STEM Competition',
            description: 'National and international science, technology, engineering, and mathematics competitions',
            features: ['Competition training', 'Expert coaching', 'Team formation', 'International exposure'],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: 'Research & Innovation',
            description: 'Collaborative research projects addressing Indonesia\'s technological and scientific challenges',
            features: ['Research funding', 'Lab access', 'Publication support', 'Patent assistance'],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: 'Technology Skills Development',
            description: 'Comprehensive training in cutting-edge technologies and digital skills',
            features: ['Coding bootcamps', 'AI/ML workshops', 'Digital literacy', 'Tech entrepreneurship'],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        }
    ];

    const successMetrics = [
        { number: '150+', label: 'Scholarships Awarded', description: 'Full and partial scholarships to Indonesian students' },
        { number: '85%', label: 'Graduate Success Rate', description: 'Alumni employed in STEM fields within 6 months' },
        { number: '25+', label: 'Research Publications', description: 'Peer-reviewed papers by program participants' },
        { number: '50+', label: 'Competition Awards', description: 'National and international STEM competition wins' }
    ];

    return (
        <div className="min-h-screen bg-surface">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-teal/20 to-primary-navy/20 rounded-full blur-2xl"></div>
                </div>
                
                <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block mb-6">
                            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                                🎓 Academic & Technology Excellence
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">Amgala Vision</h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Empowering Indonesian youth through STEM education, scholarships, and innovation programs that transform knowledge into meaningful impact for society.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/hubungi" className="bg-white text-primary-navy font-semibold py-4 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Apply for Scholarship
                            </Link>
                            <Link to="/benefit" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                View All Programs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarship Types */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Scholarship Opportunities</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
                                Multiple scholarship tiers designed to support Indonesian students at different academic levels
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {scholarshipTypes.map((scholarship, index) => (
                                <div key={index} className="bg-surface rounded-google-2xl p-8 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-navy/5 to-accent-blue/5 rounded-full blur-2xl"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-2xl font-bold text-primary-text">{scholarship.title}</h3>
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary-navy to-accent-blue rounded-google-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                        </div>
                                        
                                        <p className="text-secondary-text mb-6">{scholarship.description}</p>
                                        
                                        <div className="space-y-4 mb-6">
                                            <div>
                                                <h4 className="font-semibold text-primary-text mb-2">Coverage:</h4>
                                                <div className="space-y-2">
                                                    {scholarship.coverage.map((item, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <div className="w-4 h-4 bg-primary-navy rounded-full flex items-center justify-center">
                                                                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                                                                    <circle cx="4" cy="4" r="2"/>
                                                                </svg>
                                                            </div>
                                                            <span className="text-sm text-secondary-text">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant">
                                                <div>
                                                    <div className="text-sm text-secondary-text">Duration</div>
                                                    <div className="font-semibold text-primary-text">{scholarship.duration}</div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-secondary-text">Value</div>
                                                    <div className="font-semibold text-primary-navy">{scholarship.amount}</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-blue-50 rounded-google-lg p-4 mb-6">
                                            <div className="text-sm text-secondary-text mb-1">Eligibility</div>
                                            <div className="font-semibold text-primary-text">{scholarship.eligibility}</div>
                                        </div>
                                        
                                        <button className="w-full bg-primary-navy text-white py-3 px-6 rounded-google-xl font-semibold hover:bg-secondary-navy transition-all duration-300 group-hover:scale-105">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Programs */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Our Vision Programs</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
                                Comprehensive programs designed to nurture Indonesia's future STEM leaders and innovators
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {visionPrograms.map((program, index) => (
                                <div key={index} className="bg-surface-variant rounded-google-2xl p-8 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-blue rounded-google-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {program.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary-text">{program.title}</h3>
                                    </div>
                                    
                                    <p className="text-secondary-text leading-relaxed mb-6 text-lg">
                                        {program.description}
                                    </p>
                                    
                                    <div className="space-y-3">
                                        {program.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3 bg-surface rounded-google-lg">
                                                <div className="w-5 h-5 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-secondary-text font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Success Stories</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Meet our alumni who are making significant impact in STEM fields
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {successStories.map((story, index) => (
                                <div key={index} className="bg-surface rounded-google-2xl shadow-card border border-outline-variant overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group">
                                    <div className="relative">
                                        <img src={story.image} alt={story.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="bg-primary-navy px-3 py-1 rounded-full text-xs font-medium">
                                                {story.year}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-primary-text mb-2">{story.name}</h3>
                                        <div className="text-primary-navy font-semibold mb-1">{story.field}</div>
                                        <div className="text-accent-blue font-medium mb-4">{story.achievement}</div>
                                        <p className="text-secondary-text leading-relaxed text-sm italic">"{story.story}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Vision Impact</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Measurable outcomes from our academic excellence programs
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {successMetrics.map((metric, index) => (
                                <div key={index} className="text-center bg-surface-variant rounded-google-2xl p-6 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300">
                                    <div className="text-4xl font-bold text-primary-navy mb-2">{metric.number}</div>
                                    <div className="text-lg font-semibold text-primary-text mb-2">{metric.label}</div>
                                    <div className="text-sm text-secondary-text">{metric.description}</div>
                                </div>
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
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">How to Join Amgala Vision</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Simple steps to become part of our academic excellence community
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    1
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Academic Assessment</h3>
                                <p className="text-secondary-text text-sm">Submit academic transcripts and standardized test scores</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">STEM Portfolio</h3>
                                <p className="text-secondary-text text-sm">Showcase your science, technology, engineering, or math projects</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-primary-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Interview Process</h3>
                                <p className="text-secondary-text text-sm">Technical interview and discussion about your academic goals</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary-navy to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Start Journey</h3>
                                <p className="text-secondary-text text-sm">Begin your academic excellence journey with mentorship support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Excel in STEM?</h2>
                        <p className="text-xl text-white/90 mb-8">
                            Join Amgala Vision and transform your academic potential into meaningful impact for Indonesia's future
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

export default AmgalaVision;