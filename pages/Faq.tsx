
import React from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import { FAQ_ITEMS, TESTIMONIALS } from '../constants';

const Faq: React.FC = () => {
    const successStories = [
        {
            name: 'Ahmad Rizki',
            program: 'Amgala Vision Scholar',
            achievement: 'Software Engineer at Tech Startup',
            story: 'Through the scholarship program, I was able to pursue my computer science degree and now work at a leading Indonesian tech startup, developing solutions for rural communities.',
            image: '/components/src/photo-1517180102446-f3ece451e9d8.jpeg'
        },
        {
            name: 'Sari Dewi',
            program: 'Amgala Impact Leader',
            achievement: 'Founded Community Education Center',
            story: 'The leadership training helped me establish a learning center in my village that has educated over 200 children from underprivileged families.',
            image: '/components/src/photo-1523240795612-9a054b0db644.jpeg'
        },
        {
            name: 'Budi Santoso',
            program: 'Amgala Vision Graduate',
            achievement: 'Research Published in International Journal',
            story: 'With mentorship from the program, my research on sustainable agriculture was published internationally and is now being implemented in several provinces.',
            image: '/components/src/photo-1524178232363-1fb2b075b655.jpeg'
        }
    ];

    return (
        <div className="min-h-screen bg-surface">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy py-20 text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">Success Stories</h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Discover inspiring stories from our alumni who are making a difference in Indonesia and beyond through their achievements and community impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/benefit" className="bg-white text-primary-navy font-semibold py-3 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Join Our Programs
                            </Link>
                            <Link to="/hubungi" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                Share Your Story
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Success Stories */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Alumni Achievements</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
                                Meet some of our outstanding alumni who are leading change in their communities and industries
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {successStories.map((story, index) => (
                                <div key={index} className="bg-surface rounded-google-2xl shadow-card border border-outline-variant overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group">
                                    <div className="relative">
                                        <img src={story.image} alt={story.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <div className="bg-primary-navy/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-2">
                                                {story.program}
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-primary-text mb-2">{story.name}</h3>
                                        <div className="text-primary-navy font-semibold mb-3">{story.achievement}</div>
                                        <p className="text-secondary-text leading-relaxed text-sm italic">"{story.story}"</p>
                                        
                                        <div className="mt-4 pt-4 border-t border-outline-variant">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm text-secondary-text">Alumni</span>
                                                </div>
                                                <button className="text-primary-navy hover:text-accent-blue transition-colors duration-200">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">What Our Alumni Say</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            <p className="text-secondary-text mt-4">
                                Hear directly from program participants about their transformative experiences
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div key={index} className="bg-surface-variant rounded-google-2xl p-8 shadow-card border border-outline-variant hover:shadow-card-hover transition-all duration-300">
                                    <div className="flex items-start gap-6">
                                        <img 
                                            src={testimonial.photoUrl} 
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                                        />
                                        <div className="flex-1">
                                            <div className="mb-4">
                                                <svg className="w-8 h-8 text-primary-navy/20" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                                </svg>
                                            </div>
                                            <p className="text-secondary-text leading-relaxed mb-4 italic">
                                                "{testimonial.quote}"
                                            </p>
                                            <div>
                                                <div className="font-semibold text-primary-text">{testimonial.name}</div>
                                                <div className="text-sm text-primary-navy">{testimonial.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Numbers */}
            <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy text-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Alumni Impact</h2>
                        <p className="text-xl text-white/90 mb-12">
                            The ripple effect of empowered youth across Indonesia
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">500+</div>
                                <div className="text-white/80">Alumni Network</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">50+</div>
                                <div className="text-white/80">Community Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">25+</div>
                                <div className="text-white/80">Startups Founded</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">10,000+</div>
                                <div className="text-white/80">Lives Impacted</div>
                            </div>
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
                            <p className="text-secondary-text mt-4">
                                Find answers to common questions about our programs and application process
                            </p>
                        </div>
                        <FaqAccordion items={FAQ_ITEMS} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-6">Ready to Write Your Success Story?</h2>
                        <p className="text-xl text-secondary-text mb-8">
                            Join our community of young leaders who are making a difference in Indonesia
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/benefit" className="bg-primary-navy text-white font-semibold py-4 px-8 rounded-google-2xl hover:bg-secondary-navy transition-all duration-200">
                                Explore Programs
                            </Link>
                            <Link to="/hubungi" className="border-2 border-primary-navy text-primary-navy font-semibold py-4 px-8 rounded-google-2xl hover:bg-primary-navy hover:text-white transition-all duration-200">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
