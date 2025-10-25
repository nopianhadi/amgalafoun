import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AmgalaImpact: React.FC = () => {
    const [activeProject, setActiveProject] = useState(0);
    
    const volunteerRoles = [
        {
            title: 'Community Coordinator',
            description: 'Lead local community development projects',
            responsibilities: ['Project planning', 'Team coordination', 'Community engagement', 'Impact measurement'],
            commitment: '10-15 hours/week',
            locations: 'Jakarta, Surabaya, Medan',
            skills: ['Leadership', 'Communication', 'Project Management']
        },
        {
            title: 'Education Mentor',
            description: 'Support educational programs in underserved areas',
            responsibilities: ['Teaching assistance', 'Student mentoring', 'Curriculum development', 'Progress tracking'],
            commitment: '8-12 hours/week',
            locations: 'Rural areas nationwide',
            skills: ['Teaching', 'Patience', 'Subject expertise']
        },
        {
            title: 'Social Media Advocate',
            description: 'Amplify our impact through digital storytelling',
            responsibilities: ['Content creation', 'Social media management', 'Story documentation', 'Community building'],
            commitment: '5-8 hours/week',
            locations: 'Remote/Flexible',
            skills: ['Digital marketing', 'Content creation', 'Photography']
        }
    ];

    const impactStories = [
        {
            title: 'Clean Water for Pesantren Al-Hidayah',
            location: 'Lampung',
            beneficiaries: '300+ students',
            description: 'Built a sustainable water filtration system providing clean drinking water to pesantren students.',
            image: '/components/src/photo-1517180102446-f3ece451e9d8.jpeg',
            impact: 'Reduced waterborne diseases by 80%',
            volunteers: 15
        },
        {
            title: 'Digital Literacy for UMKM',
            location: 'Yogyakarta',
            beneficiaries: '150+ businesses',
            description: 'Trained small business owners in digital marketing and e-commerce platforms.',
            image: '/components/src/photo-1523240795612-9a054b0db644.jpeg',
            impact: 'Average 40% increase in sales',
            volunteers: 25
        },
        {
            title: 'School Bridge Construction',
            location: 'Papua',
            beneficiaries: '500+ students',
            description: 'Built a bridge connecting remote villages to the nearest school, reducing travel time by 2 hours.',
            image: '/components/src/photo-1524178232363-1fb2b075b655.jpeg',
            impact: '95% increase in school attendance',
            volunteers: 30
        }
    ];

    const impactPrograms = [
        {
            title: 'Community Volunteer Squad',
            description: 'Organized volunteer groups working on local community development projects across Indonesia',
            features: ['Local project coordination', 'Volunteer training', 'Community needs assessment', 'Impact measurement'],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: 'Social Entrepreneurship',
            description: 'Supporting young entrepreneurs who create businesses that solve social and environmental problems',
            features: ['Business mentorship', 'Seed funding', 'Market validation', 'Scaling support'],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: 'UMKM Development',
            description: 'Empowering small and medium enterprises through digital transformation and capacity building',
            features: ['Digital marketing training', 'E-commerce setup', 'Financial literacy', 'Product development'],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: 'Leadership Development',
            description: 'Comprehensive leadership training programs for young community leaders and changemakers',
            features: ['Leadership workshops', 'Public speaking training', 'Project management', 'Team building'],
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        }
    ];

    const impactMetrics = [
        { number: '800+', label: 'Active Volunteers', description: 'Young volunteers across Indonesia' },
        { number: '50+', label: 'Community Projects', description: 'Completed social impact initiatives' },
        { number: '200+', label: 'UMKM Supported', description: 'Small businesses empowered' },
        { number: '15+', label: 'Cities Reached', description: 'Communities transformed nationwide' }
    ];

    const projectCategories = [
        {
            title: 'Education Access',
            description: 'Building schools, libraries, and learning centers in underserved communities',
            projects: 15,
            beneficiaries: '3,000+ students'
        },
        {
            title: 'Clean Water & Sanitation',
            description: 'Installing wells, water filtration systems, and sanitation facilities',
            projects: 12,
            beneficiaries: '5,000+ people'
        },
        {
            title: 'Economic Empowerment',
            description: 'Supporting local businesses and creating sustainable livelihood opportunities',
            projects: 25,
            beneficiaries: '1,500+ families'
        },
        {
            title: 'Environmental Conservation',
            description: 'Reforestation, waste management, and renewable energy projects',
            projects: 8,
            beneficiaries: '10+ communities'
        }
    ];

    return (
        <div className="min-h-screen bg-surface">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-blue/20 to-primary-navy/20 rounded-full blur-2xl"></div>
                </div>
                
                <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block mb-6">
                            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                                🤝 Social & Community Leadership
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">Amgala Impact</h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            A movement of young volunteers and social entrepreneurs transforming Indonesian communities through sustainable projects and innovative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/hubungi" className="bg-white text-primary-navy font-semibold py-4 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Join as Volunteer
                            </Link>
                            <Link to="/benefit" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                View All Programs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer Opportunities */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Volunteer Opportunities</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
                                Join our volunteer community and make a meaningful difference in Indonesian communities
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {volunteerRoles.map((role, index) => (
                                <div key={index} className="bg-surface rounded-google-2xl p-8 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-primary-text">{role.title}</h3>
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-navy to-accent-teal rounded-google-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <p className="text-secondary-text mb-6">{role.description}</p>
                                    
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h4 className="font-semibold text-primary-text mb-2">Key Responsibilities:</h4>
                                            <div className="space-y-2">
                                                {role.responsibilities.map((resp, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-4 h-4 bg-primary-navy rounded-full flex items-center justify-center">
                                                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                                                                <circle cx="4" cy="4" r="2"/>
                                                            </svg>
                                                        </div>
                                                        <span className="text-sm text-secondary-text">{resp}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 gap-3 pt-4 border-t border-outline-variant">
                                            <div>
                                                <div className="text-sm text-secondary-text">Time Commitment</div>
                                                <div className="font-semibold text-primary-text">{role.commitment}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-secondary-text">Locations</div>
                                                <div className="font-semibold text-primary-navy">{role.locations}</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-teal-50 rounded-google-lg p-4 mb-6">
                                        <div className="text-sm text-secondary-text mb-2">Required Skills</div>
                                        <div className="flex flex-wrap gap-2">
                                            {role.skills.map((skill, idx) => (
                                                <span key={idx} className="bg-primary-navy text-white text-xs px-2 py-1 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <button className="w-full bg-primary-navy text-white py-3 px-6 rounded-google-xl font-semibold hover:bg-secondary-navy transition-all duration-300 group-hover:scale-105">
                                        Apply to Volunteer
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stories */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Impact Stories</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Real projects creating lasting change in Indonesian communities
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {impactStories.map((story, index) => (
                                <div key={index} className="bg-surface-variant rounded-google-2xl shadow-card border border-outline-variant overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group">
                                    <div className="relative">
                                        <img src={story.image} alt={story.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="bg-primary-navy px-3 py-1 rounded-full text-xs font-medium">
                                                {story.volunteers} volunteers
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-4 h-4 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="text-sm text-accent-teal font-medium">{story.location}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary-text mb-2">{story.title}</h3>
                                        <div className="text-primary-navy font-semibold mb-3">{story.beneficiaries}</div>
                                        <p className="text-secondary-text leading-relaxed mb-4 text-sm">{story.description}</p>
                                        <div className="bg-blue-50 rounded-google-lg p-3">
                                            <div className="text-sm text-secondary-text">Impact Achieved</div>
                                            <div className="font-semibold text-primary-navy">{story.impact}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Programs */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Our Impact Programs</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
                                Comprehensive programs designed to create lasting positive change in Indonesian communities
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {impactPrograms.map((program, index) => (
                                <div key={index} className="bg-surface rounded-google-2xl p-8 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-teal rounded-google-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {program.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary-text">{program.title}</h3>
                                    </div>
                                    
                                    <p className="text-secondary-text leading-relaxed mb-6 text-lg">
                                        {program.description}
                                    </p>
                                    
                                    <div className="space-y-3">
                                        {program.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-3 bg-surface-variant rounded-google-lg">
                                                <div className="w-5 h-5 bg-gradient-to-br from-primary-navy to-accent-teal rounded-full flex items-center justify-center">
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

            {/* Project Categories */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Impact Areas</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Key areas where our volunteers are making a difference
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {projectCategories.map((category, index) => (
                                <div key={index} className="bg-surface-variant rounded-google-2xl p-8 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300">
                                    <h3 className="text-2xl font-bold text-primary-text mb-4">{category.title}</h3>
                                    <p className="text-secondary-text leading-relaxed mb-6">{category.description}</p>
                                    
                                    <div className="flex justify-between items-center">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-primary-navy">{category.projects}</div>
                                            <div className="text-sm text-secondary-text">Projects</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-primary-navy">{category.beneficiaries}</div>
                                            <div className="text-sm text-secondary-text">Beneficiaries</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Our Community Impact</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Measurable outcomes from our community development initiatives
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {impactMetrics.map((metric, index) => (
                                <div key={index} className="text-center bg-surface rounded-google-2xl p-6 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300">
                                    <div className="text-4xl font-bold text-primary-navy mb-2">{metric.number}</div>
                                    <div className="text-lg font-semibold text-primary-text mb-2">{metric.label}</div>
                                    <div className="text-sm text-secondary-text">{metric.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Join */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">How to Join Amgala Impact</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Simple steps to become part of our community impact movement
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    1
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Show Your Passion</h3>
                                <p className="text-secondary-text text-sm">Demonstrate your commitment to community service and social change</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Skills Assessment</h3>
                                <p className="text-secondary-text text-sm">Identify your strengths and areas where you can make the biggest impact</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-primary-navy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Training Program</h3>
                                <p className="text-secondary-text text-sm">Complete our comprehensive volunteer training and leadership development</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary-navy to-accent-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Make Impact</h3>
                                <p className="text-secondary-text text-sm">Start contributing to meaningful projects in your community</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Create Impact?</h2>
                        <p className="text-xl text-white/90 mb-8">
                            Join Amgala Impact and be part of the movement transforming Indonesian communities through collective action
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/hubungi" className="bg-white text-primary-navy font-semibold py-4 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Become a Volunteer
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

export default AmgalaImpact;