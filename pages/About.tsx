import React from 'react';
import { Link } from 'react-router-dom';
import { TIMELINE_EVENTS } from '../constants';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-surface">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy py-20 text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">About Amgala Foundation</h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Empowering Indonesian children and youth to become future leaders with character, logic, and global mindset through comprehensive programs and community impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/benefit" className="bg-white text-primary-navy font-semibold py-3 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Explore Our Programs
                            </Link>
                            <Link to="/hubungi" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                Get Involved
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Our Mission & Vision</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Mission */}
                            <div className="bg-surface-variant rounded-google-2xl p-8 shadow-card border border-outline-variant">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-blue rounded-google-xl flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary-text">Our Mission</h3>
                                </div>
                                <p className="text-secondary-text leading-relaxed text-lg">
                                    Memberdayakan anak dan remaja Indonesia melalui program holistik yang mengembangkan karakter, keunggulan akademik, dan tanggung jawab sosial, menciptakan pemimpin masa depan yang akan mendorong perubahan positif di komunitas mereka dan sekitarnya.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-surface-variant rounded-google-2xl p-8 shadow-card border border-outline-variant">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-teal rounded-google-xl flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary-text">Our Vision</h3>
                                </div>
                                <p className="text-secondary-text leading-relaxed text-lg">
                                    Menjadi yayasan pemberdayaan pemuda terdepan di Indonesia, memelihara generasi pemimpin yang mewujudkan nilai-nilai Islam, unggul secara akademis, dan berkontribusi bermakna bagi kemajuan dan pembangunan masyarakat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Our Core Values</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
                                The fundamental principles that guide our work and shape our approach to youth empowerment
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Character */}
                            <div className="text-center p-6 bg-surface rounded-google-xl shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-text mb-3">Character</h3>
                                <p className="text-secondary-text">Membangun fondasi moral yang kuat berdasarkan nilai-nilai Islam dan prinsip-prinsip etika</p>
                            </div>

                            {/* Logic */}
                            <div className="text-center p-6 bg-surface rounded-google-xl shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-secondary-navy rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-text mb-3">Logic</h3>
                                <p className="text-secondary-text">Mengembangkan pemikiran kritis, keterampilan analitis, dan pengambilan keputusan berbasis bukti</p>
                            </div>

                            {/* Global Mindset */}
                            <div className="text-center p-6 bg-surface rounded-google-xl shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-text mb-3">Global Mindset</h3>
                                <p className="text-secondary-text">Memupuk perspektif internasional sambil tetap berakar pada identitas Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Leadership Team</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Meet the dedicated leaders driving our mission forward
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-surface-variant rounded-google-2xl p-8 shadow-card border border-outline-variant text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                                <div className="w-24 h-24 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-text mb-2">Andintya Maris</h3>
                                <p className="text-primary-navy font-semibold mb-3">Chairwoman & Founder</p>
                                <p className="text-secondary-text text-sm">Visionary leader with 15+ years experience in youth development and social entrepreneurship.</p>
                            </div>
                            
                            <div className="bg-surface-variant rounded-google-2xl p-8 shadow-card border border-outline-variant text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                                <div className="w-24 h-24 bg-gradient-to-br from-accent-blue to-accent-teal rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-text mb-2">Dr. Rahman Hakim</h3>
                                <p className="text-primary-navy font-semibold mb-3">Academic Director</p>
                                <p className="text-secondary-text text-sm">Former university professor specializing in STEM education and research methodology.</p>
                            </div>
                            
                            <div className="bg-surface-variant rounded-google-2xl p-8 shadow-card border border-outline-variant text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                                <div className="w-24 h-24 bg-gradient-to-br from-accent-teal to-primary-navy rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-text mb-2">Siti Nurhaliza</h3>
                                <p className="text-primary-navy font-semibold mb-3">Community Impact Director</p>
                                <p className="text-secondary-text text-sm">Expert in community development with extensive experience in rural empowerment programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Our Journey</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Key milestones in our mission to empower Indonesian youth
                            </p>
                        </div>
                        
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-navy to-accent-blue"></div>
                            
                            <div className="space-y-12">
                                {TIMELINE_EVENTS.map((event, index) => (
                                    <div key={index} className="relative flex items-center gap-8">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg relative z-10">
                                            {event.date}
                                        </div>
                                        <div className="flex-1 bg-surface rounded-google-2xl p-6 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                            <h3 className="text-lg font-semibold text-primary-text mb-2">{event.title}</h3>
                                            <div className="w-12 h-0.5 bg-gradient-to-r from-primary-navy to-accent-blue rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy text-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact</h2>
                            <p className="text-xl text-white/90">
                                Real numbers, real change, real hope for Indonesia's future
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">15+</div>
                                <div className="text-white/80">Cities Reached</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">1,200+</div>
                                <div className="text-white/80">Youth Engaged</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">150+</div>
                                <div className="text-white/80">Scholarships</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">800+</div>
                                <div className="text-white/80">Volunteers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-6">Join Our Mission</h2>
                        <p className="text-xl text-secondary-text mb-8">
                            Be part of the movement that's shaping Indonesia's future leaders
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/benefit" className="bg-primary-navy text-white font-semibold py-4 px-8 rounded-google-2xl hover:bg-secondary-navy transition-all duration-200">
                                Explore Programs
                            </Link>
                            <Link to="/hubungi" className="border-2 border-primary-navy text-primary-navy font-semibold py-4 px-8 rounded-google-2xl hover:bg-primary-navy hover:text-white transition-all duration-200">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;