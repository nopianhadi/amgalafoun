import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import StatsCard from '../components/StatsCard';
import FloatingElements from '../components/FloatingElements';
import FeatureCard from '../components/FeatureCard';
import { TIMELINE_EVENTS, TESTIMONIALS, BENEFITS, FAQ_ITEMS } from '../constants';

const HeroSection: React.FC = () => (
    <section className="relative bg-gradient-to-br from-surface-variant via-surface to-surface-container py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img 
                src="/components/src/hero-empowering-indonesian-youth-By-8_TUU.jpg" 
                alt="Empowering Indonesian Youth"
                className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 via-secondary-navy/10 to-accent-navy/20"></div>
        </div>
        
        <FloatingElements />

        {/* Additional background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-navy/10 to-secondary-navy/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-navy/10 to-accent-blue/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-blue/10 to-accent-orange/10 rounded-full blur-xl"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
            <div className="text-center">
                {/* Enhanced announcement badge */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-3 bg-surface/90 backdrop-blur-sm border border-outline-variant rounded-google-2xl px-6 py-3 mb-6 shadow-card">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent-blue rounded-full pulse-animation"></div>
                            <span className="text-sm font-medium text-secondary-text">Amgala Youth Program</span>
                        </div>
                        <div className="w-px h-4 bg-outline-variant"></div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="text-sm font-medium text-accent-orange">Together, We Empower Change</span>
                        </div>
                    </div>
                </div>

                {/* Enhanced main title with better typography */}
                <div className="mb-8">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-accent-blue to-accent-teal text-white px-4 py-2 rounded-full text-sm font-medium">
                            🇮🇩 Empowering Indonesia's Future
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-text tracking-tight mb-6 leading-tight">
                        <span
                            className="text-gradient block mb-3"
                            style={{
                                background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Together, We Empower Change
                        </span>
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-secondary-text block leading-relaxed">
                            Empowering Children & Youth to Lead
                        </span>
                    </h1>
                </div>

                {/* Enhanced description */}
                <div className="max-w-5xl mx-auto mb-10 sm:mb-12">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-text leading-relaxed mb-6 px-4">
                        Shaping Indonesia's young generation through Islamic values, global excellence, and social responsibility.
                    </p>

                    {/* Enhanced value propositions with icons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
                        <div className="hero-stat-card bg-white/95 backdrop-blur-sm rounded-google-xl p-6 border border-gray-200 shadow-lg text-center group hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="font-bold text-gray-900 text-3xl mb-1 counter-animation">15+</div>
                            <p className="text-sm text-gray-600 font-medium">Cities Reached</p>
                        </div>

                        <div className="hero-stat-card bg-white/95 backdrop-blur-sm rounded-google-xl p-6 border border-gray-200 shadow-lg text-center group hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-navy to-secondary-navy rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="font-bold text-gray-900 text-3xl mb-1 counter-animation">1,200+</div>
                            <p className="text-sm text-gray-600 font-medium">Youth Engaged</p>
                        </div>

                        <div className="hero-stat-card bg-white/95 backdrop-blur-sm rounded-google-xl p-6 border border-gray-200 shadow-lg text-center group hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div className="font-bold text-gray-900 text-3xl mb-1 counter-animation">150+</div>
                            <p className="text-sm text-gray-600 font-medium">Scholarships</p>
                        </div>

                        <div className="hero-stat-card bg-white/95 backdrop-blur-sm rounded-google-xl p-6 border border-gray-200 shadow-lg text-center group hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <div className="font-bold text-gray-900 text-3xl mb-1 counter-animation">800+</div>
                            <p className="text-sm text-gray-600 font-medium">Volunteers</p>
                        </div>
                    </div>
                </div>

                {/* Enhanced CTA buttons with better design */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                    <Link to="/benefit" className="cta-primary group relative overflow-hidden bg-gradient-to-r from-primary-navy to-secondary-navy text-white text-lg px-12 py-5 rounded-google-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center gap-3">
                            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Join Amgala Youth
                            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>

                    <Link to="/panduan" className="cta-secondary group bg-surface border-2 border-primary-navy text-primary-navy text-lg px-12 py-5 rounded-google-2xl font-semibold hover:bg-primary-navy hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Learn More
                        </span>
                    </Link>

                    <button className="cta-tertiary group bg-surface/80 backdrop-blur-sm border border-outline-variant text-primary-navy font-medium text-lg px-8 py-4 rounded-google-2xl flex items-center gap-3 hover:bg-surface hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-orange to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                        <span className="group-hover:underline">Watch Our Story</span>
                    </button>
                </div>

                {/* Additional info section */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-surface/60 backdrop-blur-sm rounded-google-2xl p-6 sm:p-8 border border-outline-variant/50 shadow-card">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Join Our Youth Movement</h3>
                                <p className="text-secondary-text">Be part of a transformative community that's empowering Indonesian youth to become leaders of character, logic, and global mindset.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="text-center">
                                    <div className="text-sm text-secondary-text">Next Application</div>
                                    <div className="text-lg font-bold text-accent-orange">March 2025</div>
                                </div>
                                <div className="hidden sm:block w-px bg-outline-variant"></div>
                                <div className="text-center">
                                    <div className="text-sm text-secondary-text">Impact Scale</div>
                                    <div className="text-lg font-bold text-primary-navy">Indonesia Wide</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ProgramHighlightsSection: React.FC = () => (
    <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">AMGALA YOUTH PROGRAM</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-3xl mx-auto text-lg">
                    Building Leaders for Indonesia's Future. Through our Vision and Impact programs, we nurture leaders who are academically excellent, socially conscious, and grounded in values.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Amgala Vision - Enhanced */}
                <div className="program-card group bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-google-2xl p-8 shadow-card hover:shadow-2xl border border-outline-variant relative overflow-hidden transition-all duration-500 hover:scale-105">
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent-blue to-purple-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-400 to-blue-500 rounded-full blur-2xl"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-navy to-accent-blue rounded-google-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-primary-text mb-1">Amgala Vision</h3>
                                <p className="text-secondary-text font-medium">Academic & Technology Excellence</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">STEM Focus</span>
                                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">Innovation</span>
                                </div>
                            </div>
                        </div>
                        
                        <p className="text-secondary-text leading-relaxed mb-6 text-lg">
                            A strong pathway in STEM and innovation through scholarships, competitions, and mentoring that turn knowledge into impact.
                        </p>
                        
                        <div className="grid grid-cols-1 gap-3 mb-6">
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-google-lg">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-secondary-text">Scholarships & Academic Support</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-google-lg">
                                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-secondary-text">STEM Competition & Research</span>
                            </div>
                        </div>
                        
                        <Link to="/benefit" className="inline-flex items-center gap-2 bg-primary-navy text-white px-6 py-3 rounded-google-xl font-semibold hover:bg-secondary-navy transition-all duration-300 group-hover:scale-105">
                            Explore Vision Programs
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Amgala Impact - Enhanced */}
                <div className="program-card group bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 rounded-google-2xl p-8 shadow-card hover:shadow-2xl border border-outline-variant relative overflow-hidden transition-all duration-500 hover:scale-105">
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary-navy to-accent-navy rounded-full blur-2xl"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-navy to-accent-blue rounded-google-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-primary-text mb-1">Amgala Impact</h3>
                                <p className="text-secondary-text font-medium">Social & Community Leaders</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Community</span>
                                    <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">Social Impact</span>
                                </div>
                            </div>
                        </div>
                        
                        <p className="text-secondary-text leading-relaxed mb-6 text-lg">
                            A movement of young volunteers and social entrepreneurs transforming communities—one project at a time.
                        </p>
                        
                        <div className="grid grid-cols-1 gap-3 mb-6">
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-google-lg">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary-navy to-accent-blue rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-secondary-text">Volunteer Movement & Squad</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-google-lg">
                                <div className="w-8 h-8 bg-gradient-to-br from-secondary-navy to-accent-teal rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-secondary-text">UMKM & Social Innovation</span>
                            </div>
                        </div>
                        
                        <Link to="/benefit" className="inline-flex items-center gap-2 bg-primary-navy text-white px-6 py-3 rounded-google-xl font-semibold hover:bg-secondary-navy transition-all duration-300 group-hover:scale-105">
                            Explore Impact Programs
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const StatsSection: React.FC = () => (
    <section className="py-20 bg-gradient-to-br from-surface-variant to-surface-container">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Our Impact in Numbers</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Every number represents real change, real growth, and real hope for Indonesia's future</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
                <StatsCard
                    title="Cities Reached"
                    value="15+"
                    description="Across Indonesia"
                    trend="up"
                    trendValue="+25% expansion"
                    color="blue"
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Youth Engaged"
                    value="1,200+"
                    description="Future leaders developed"
                    trend="up"
                    trendValue="+40% growth"
                    color="green"
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Scholarships"
                    value="150+"
                    description="Academic excellence supported"
                    trend="up"
                    trendValue="150+ awarded"
                    color="orange"
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Volunteers"
                    value="800+"
                    description="Community impact makers"
                    trend="up"
                    trendValue="Growing network"
                    color="purple"
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    }
                />
            </div>
        </div>
    </section>
);

const AboutSection: React.FC = () => (
    <section className="py-24 bg-gradient-to-br from-surface to-surface-variant relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-accent-blue to-accent-teal rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent-orange to-accent-red rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-primary-navy to-secondary-navy text-white px-4 py-2 rounded-full text-sm font-medium">
                            About Our Foundation
                        </span>
                    </div>
                    <h2 className="enhanced-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-6 tracking-tight">
                        Empowering Indonesia's Future
                    </h2>
                    <p className="text-xl text-secondary-text max-w-3xl mx-auto leading-relaxed">
                        Building tomorrow's leaders through values-based education and community empowerment
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="space-y-8">
                        <div className="bg-white rounded-google-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-google-xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                    <p className="text-gray-600 font-medium">Transforming Lives</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Amgala Foundation is dedicated to empowering Indonesian children and youth to become future leaders grounded in Islamic values, academic excellence, and social responsibility. We invest in the next generation through comprehensive programs that nurture character, logic, and global mindset.
                            </p>
                            
                            {/* Key Values */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded-google-lg">
                                    <div className="text-2xl font-bold text-blue-700">Character</div>
                                    <div className="text-sm text-blue-600">Islamic Values</div>
                                </div>
                                <div className="text-center p-4 bg-green-50 border border-green-100 rounded-google-lg">
                                    <div className="text-2xl font-bold text-green-700">Logic</div>
                                    <div className="text-sm text-green-600">Critical Thinking</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 border border-purple-100 rounded-google-lg">
                                    <div className="text-2xl font-bold text-purple-700">Global</div>
                                    <div className="text-sm text-purple-600">Mindset</div>
                                </div>
                                <div className="text-center p-4 bg-orange-50 border border-orange-100 rounded-google-lg">
                                    <div className="text-2xl font-bold text-orange-700">Impact</div>
                                    <div className="text-sm text-orange-600">Social Change</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Chairwoman Section */}
                        <div className="bg-white rounded-google-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 relative">
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">AM</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Leadership Vision</h3>
                                    <p className="text-gray-600 font-medium">Chairwoman's Message</p>
                                </div>
                            </div>
                            
                            <blockquote className="text-gray-700 leading-relaxed text-lg italic mb-6">
                                "We invest in children and youth—so Indonesia rises with leaders of character, logic, and global mindset. Through our three pillars (Social, Academic, Economic, Spiritual), we create transformative programs that shape Indonesia's young generation for a brighter future."
                            </blockquote>
                            
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Andintya Maris</div>
                                    <div className="text-sm text-gray-600">Chairwoman, Amgala Foundation</div>
                                </div>
                            </div>
                        </div>

                        {/* CIO Section */}
                        <div className="bg-white rounded-google-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 relative">
                            {/* Tech Icon */}
                            <div className="absolute top-6 right-6 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <img 
                                    src="/components/src/photo-1559027615-cd4628902d4a.jpeg" 
                                    alt="Chief Information Officer"
                                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Technology Leadership</h3>
                                    <p className="text-gray-600 font-medium">Chief Information Officer</p>
                                </div>
                            </div>
                            
                            <blockquote className="text-gray-700 leading-relaxed text-lg italic mb-6">
                                "Technology is the bridge that connects our mission to the digital generation. Through innovative platforms and digital solutions, we're making education and empowerment accessible to every Indonesian youth, regardless of their location or background."
                            </blockquote>
                            
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Sarah Wijaya</div>
                                    <div className="text-sm text-gray-600">Chief Information Officer, Amgala Foundation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Foundation Pillars */}
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-white rounded-google-xl border border-gray-200 shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Social</h4>
                        <p className="text-sm text-gray-600">Community engagement and social responsibility</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-google-xl border border-gray-200 shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Academic</h4>
                        <p className="text-sm text-gray-600">Excellence in education and STEM innovation</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-google-xl border border-gray-200 shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Economic</h4>
                        <p className="text-sm text-gray-600">Entrepreneurship and financial literacy</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-google-xl border border-gray-200 shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Spiritual</h4>
                        <p className="text-sm text-gray-600">Islamic values and character development</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ImageShowcaseSection: React.FC = () => (
    <section className="py-20 bg-surface-variant">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">See Amgala Squad in Action</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-3xl mx-auto">
                    Discover the transformative work we're doing across Indonesian communities. Every photo tells a story of empowerment, growth, and positive change.
                </p>
            </div>

            {/* Enhanced Grid Layout with Better Image Distribution */}
            <div className="max-w-7xl mx-auto">
                {/* Featured Large Image */}
                <div className="mb-8">
                    <div className="relative group overflow-hidden rounded-google-2xl shadow-card-hover">
                        <img 
                            src="/components/src/hero-children-youth-B48hUzOo.jpg" 
                            alt="Empowering Indonesian Children and Youth"
                            className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/30 to-transparent">
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Empowering Indonesian Youth</h3>
                                <p className="text-lg opacity-90">Building the next generation of leaders through education and mentorship</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                    <div className="relative group overflow-hidden rounded-google-xl shadow-card card-hover">
                        <img 
                            src="/components/src/amgala-mengaji-DOFVphT5.jpg" 
                            alt="Iqra by Amgala"
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold text-sm">Iqra by Amgala</h3>
                                <p className="text-xs opacity-90">Religious education and character building</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-google-xl shadow-card card-hover">
                        <img 
                            src="/components/src/volunteers-mentoring-B2KyuvTF.jpg" 
                            alt="Youth Mentorship"
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold text-sm">Youth Mentorship</h3>
                                <p className="text-xs opacity-90">One-on-one mentoring sessions</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-google-xl shadow-card card-hover">
                        <img 
                            src="/components/src/amal-bridge-project-CaTwULYk.jpg" 
                            alt="Amal Bridge Project"
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold text-sm">Amal Bridge Project</h3>
                                <p className="text-xs opacity-90">Infrastructure development</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-google-xl shadow-card card-hover">
                        <img 
                            src="/components/src/aspire-podcast-D5XBfofA.jpg" 
                            alt="ASPIRE Podcast"
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold text-sm">ASPIRE Podcast</h3>
                                <p className="text-xs opacity-90">Inspiring conversations</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Images Row */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    <div className="relative group overflow-hidden rounded-google-lg shadow-card card-hover">
                        <img 
                            src="/components/src/amgala-vision-header-DKoyXJcd.jpg" 
                            alt="Amgala Vision Program"
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">Vision</span>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-google-lg shadow-card card-hover">
                        <img 
                            src="/components/src/amgala-impact-header-Dx8EKBwn.jpg" 
                            alt="Amgala Impact Program"
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">Impact</span>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-google-lg shadow-card card-hover">
                        <img 
                            src="/components/src/photo-1522202176988-66273c2fd55f.jpeg" 
                            alt="Community Engagement"
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">Community</span>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-google-lg shadow-card card-hover">
                        <img 
                            src="/components/src/photo-1523240795612-9a054b0db644.jpeg" 
                            alt="Educational Programs"
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">Education</span>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-google-lg shadow-card card-hover">
                        <img 
                            src="/components/src/photo-1524178232363-1fb2b075b655.jpeg" 
                            alt="Youth Development"
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">Youth</span>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-google-lg shadow-card card-hover">
                        <img 
                            src="/components/src/photo-1544717297-fa95b6ee9643.jpeg" 
                            alt="Leadership Training"
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">Leadership</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <p className="text-secondary-text mb-4">Latest from @amgalasquad</p>
                <p className="text-sm text-tertiary-text">Follow our daily journey and see more behind-the-scenes moments</p>
                <a 
                    href="https://instagram.com/amgalasquad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary-navy font-semibold hover:text-secondary-navy transition-colors"
                >
                    Follow
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
);

const TestimonialsSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Mengelompokkan testimoni menjadi pasangan (2 per slide)
    const testimonialsPerSlide = 2;
    const totalSlides = Math.ceil(TESTIMONIALS.length / testimonialsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getCurrentTestimonials = () => {
        const startIndex = currentSlide * testimonialsPerSlide;
        return TESTIMONIALS.slice(startIndex, startIndex + testimonialsPerSlide);
    };

    return (
        <section className="py-20 bg-surface-variant">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Stories of Impact</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                    <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Real stories from young Indonesians whose lives have been transformed through Amgala Foundation's programs and scholarships</p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {getCurrentTestimonials().map((testimonial, index) => (
                            <div key={index} className="bg-surface rounded-google-xl p-8 shadow-card card-hover border border-outline-variant">
                                <div className="flex items-center gap-4 mb-6">
                                    <img 
                                        src={testimonial.photoUrl} 
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-primary-text">{testimonial.name}</h4>
                                        <p className="text-sm text-secondary-text">{testimonial.title}</p>
                                    </div>
                                </div>
                                <blockquote className="text-secondary-text leading-relaxed italic">
                                    "{testimonial.quote}"
                                </blockquote>
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button 
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-surface border border-outline-variant hover:bg-surface-variant transition-colors"
                        >
                            <svg className="w-5 h-5 text-secondary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <div className="flex gap-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        index === currentSlide ? 'bg-primary-navy' : 'bg-outline-variant'
                                    }`}
                                />
                            ))}
                        </div>
                        
                        <button 
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-surface border border-outline-variant hover:bg-surface-variant transition-colors"
                        >
                            <svg className="w-5 h-5 text-secondary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    </section>
    );
};

const BenefitsSection: React.FC = () => (
    <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Our Programs</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Three pillars that strengthen our core mission through charity, spiritual development, and inspiration</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {BENEFITS.map((benefit, index) => (
                    <div key={index} className="bg-surface-variant rounded-google-xl p-8 shadow-card card-hover border border-outline-variant text-center group">
                        <div className="mb-6 p-4 bg-gradient-to-br from-primary-navy/10 to-secondary-navy/10 rounded-google-xl group-hover:scale-110 transition-transform duration-300">
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-primary-text mb-4">{benefit.title}</h3>
                        <p className="text-secondary-text leading-relaxed">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);



const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <ProgramHighlightsSection />
            <StatsSection />
            <AboutSection />
            <ImageShowcaseSection />
            <BenefitsSection />
            <TestimonialsSection />
        </>
    );
};

export default Home;