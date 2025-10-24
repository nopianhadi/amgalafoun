import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import StatsCard from '../components/StatsCard';
import FloatingElements from '../components/FloatingElements';
import FeatureCard from '../components/FeatureCard';
import AnnouncementPopup from '../components/AnnouncementPopup';
import AiChatSection from '../components/AiChatSection';
import { TIMELINE_EVENTS, TESTIMONIALS, BENEFITS, FAQ_ITEMS } from '../constants';

const HeroSection: React.FC = () => (
    <section className="relative bg-gradient-to-br from-surface-variant via-surface to-surface-container py-24 sm:py-32 lg:py-40 overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-secondary-green/5 to-accent-green/5"></div>

        {/* Additional background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-green/10 to-secondary-green/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-green/10 to-accent-yellow/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-full blur-xl"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
            <div className="text-center">
                {/* Enhanced announcement badge */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-3 bg-surface/90 backdrop-blur-sm border border-outline-variant rounded-google-2xl px-6 py-3 mb-6 shadow-card">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent-green rounded-full pulse-animation"></div>
                            <span className="text-sm font-medium text-secondary-text">Program Terbaru 2025</span>
                        </div>
                        <div className="w-px h-4 bg-outline-variant"></div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-medium text-accent-orange">Pendaftaran Dibuka</span>
                        </div>
                    </div>
                </div>

                {/* Enhanced main title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-text tracking-tight mb-6 sm:mb-8">
                    <span
                        className="text-gradient block mb-2"
                        style={{
                            background: 'linear-gradient(135deg, #34a853 0%, #4caf50 50%, #66bb6a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Startup Desa 2025
                    </span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-secondary-text block">
                        Volume 2: Era Baru Wirausaha Desa
                    </span>
                </h1>

                {/* Enhanced description */}
                <div className="max-w-5xl mx-auto mb-10 sm:mb-12">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-text leading-relaxed mb-6 px-4">
                        Akselerasi Talenta Wirausaha Pemula Berbasis Potensi Desa, Kabupaten Pandeglang, Provinsi Banten.
                    </p>

                    {/* Additional value propositions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                        <div className="bg-surface/60 backdrop-blur-sm rounded-google-xl p-4 border border-outline-variant/50">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="font-semibold text-primary-text">Bootcamp Intensif</span>
                            </div>
                            <p className="text-sm text-secondary-text">6 bulan program komprehensif</p>
                        </div>

                        <div className="bg-surface/60 backdrop-blur-sm rounded-google-xl p-4 border border-outline-variant/50">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                                <span className="font-semibold text-primary-text">Akses Funding</span>
                            </div>
                            <p className="text-sm text-secondary-text">Hingga Rp 100 juta per startup</p>
                        </div>

                        <div className="bg-surface/60 backdrop-blur-sm rounded-google-xl p-4 border border-outline-variant/50">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="font-semibold text-primary-text">Mentoring Expert</span>
                            </div>
                            <p className="text-sm text-secondary-text">Dari praktisi berpengalaman</p>
                        </div>
                    </div>
                </div>

                {/* Enhanced CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Link to="/tentang" className="btn-primary text-lg px-10 py-4 group shadow-lg hover:shadow-xl transition-all duration-300">
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Daftar Sekarang
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>

                    <Link to="/panduan" className="btn-secondary text-lg px-10 py-4 group">
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Pelajari Program
                        </span>
                    </Link>

                    <button className="text-primary-green hover:text-primary-green-hover font-medium text-lg flex items-center gap-2 transition-colors duration-200 group">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-10V3m0 0V1m0 2h4M7 3H3m0 0v4M3 3l3.5 3.5M21 3h-4m4 0v4m0-4l-3.5 3.5" />
                        </svg>
                        <span className="group-hover:underline">Tonton Video</span>
                    </button>
                </div>

                {/* Enhanced quick stats with animations */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
                    <div className="bg-surface/70 backdrop-blur-sm rounded-google-xl p-4 sm:p-6 text-center shadow-card card-hover border border-outline-variant/50 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-google-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-primary-text mb-1">1000+</div>
                        <div className="text-sm text-secondary-text font-medium">Target Peserta</div>
                        <div className="text-xs text-tertiary-text mt-1">Batch 2025</div>
                    </div>

                    <div className="bg-surface/70 backdrop-blur-sm rounded-google-xl p-4 sm:p-6 text-center shadow-card card-hover border border-outline-variant/50 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-google-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-primary-text mb-1">300+</div>
                        <div className="text-sm text-secondary-text font-medium">Startup Terbentuk</div>
                        <div className="text-xs text-tertiary-text mt-1">Success Rate 85%</div>
                    </div>

                    <div className="bg-surface/70 backdrop-blur-sm rounded-google-xl p-4 sm:p-6 text-center shadow-card card-hover border border-outline-variant/50 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-google-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-primary-text mb-1">15B+</div>
                        <div className="text-sm text-secondary-text font-medium">Total Funding</div>
                        <div className="text-xs text-tertiary-text mt-1">Rp 15 Miliar</div>
                    </div>

                    <div className="bg-surface/70 backdrop-blur-sm rounded-google-xl p-4 sm:p-6 text-center shadow-card card-hover border border-outline-variant/50 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-google-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-primary-text mb-1">100+</div>
                        <div className="text-sm text-secondary-text font-medium">Desa Terlibat</div>
                        <div className="text-xs text-tertiary-text mt-1">Kab. Pandeglang</div>
                    </div>
                </div>

                {/* Additional info section */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-surface/60 backdrop-blur-sm rounded-google-2xl p-6 sm:p-8 border border-outline-variant/50 shadow-card">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Pendaftaran Batch 2025 Dibuka!</h3>
                                <p className="text-secondary-text">Jangan lewatkan kesempatan emas untuk mengembangkan startup impianmu bersama ekosistem terbaik.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="text-center">
                                    <div className="text-sm text-secondary-text">Deadline Pendaftaran</div>
                                    <div className="text-lg font-bold text-accent-orange">31 Maret 2025</div>
                                </div>
                                <div className="hidden sm:block w-px bg-outline-variant"></div>
                                <div className="text-center">
                                    <div className="text-sm text-secondary-text">Program Dimulai</div>
                                    <div className="text-lg font-bold text-primary-green">15 April 2025</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TimelineSection: React.FC = () => (
    <section className="py-20 bg-surface-variant">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Timeline Program</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-yellow mx-auto rounded-full"></div>
            </div>

            <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-primary-green via-secondary-green to-accent-green transform -translate-x-1/2 rounded-full"></div>

                {TIMELINE_EVENTS.map((event, index) => (
                    <div key={index} className={`flex items-center w-full mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                            <div className="bg-surface rounded-google-xl p-6 shadow-card card-hover border border-outline-variant">
                                <p className="font-semibold text-primary-green text-sm mb-2">{event.date}</p>
                                <h3 className="font-semibold text-lg text-primary-text">{event.title}</h3>
                            </div>
                        </div>
                        <div className="z-10 bg-gradient-to-br from-primary-green to-secondary-green rounded-full w-6 h-6 border-4 border-surface shadow-card flex items-center justify-center">
                            <div className="w-2 h-2 bg-surface rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FeaturesSection: React.FC = () => (
    <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Mengapa Memilih Startup Desa?</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-green to-secondary-green mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Program komprehensif yang dirancang khusus untuk mengembangkan potensi wirausaha berbasis desa</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
                <div>
                    <FeatureCard
                        title="Mentoring Intensif"
                        description="Bimbingan langsung dari mentor berpengalaman dalam dunia bisnis dan startup untuk memastikan kesuksesan perjalanan wirausaha Anda."
                        color="blue"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        }
                    />
                </div>

                <div>
                    <FeatureCard
                        title="Akses Permodalan"
                        description="Dukungan finansial dan akses ke berbagai sumber pendanaan untuk mengembangkan ide bisnis menjadi kenyataan yang menguntungkan."
                        color="green"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        }
                    />
                </div>

                <div>
                    <FeatureCard
                        title="Jaringan Bisnis"
                        description="Koneksi dengan ekosistem startup, investor, dan pelaku bisnis yang akan memperluas peluang kolaborasi dan pertumbuhan."
                        color="orange"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        }
                    />
                </div>

                <div>
                    <FeatureCard
                        title="Pelatihan Komprehensif"
                        description="Bootcamp dan workshop yang mencakup semua aspek bisnis dari validasi ide hingga strategi pemasaran digital modern."
                        color="purple"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        }
                    />
                </div>

                <div>
                    <FeatureCard
                        title="Teknologi Terkini"
                        description="Akses ke teknologi dan tools modern yang dibutuhkan untuk membangun startup yang kompetitif di era digital."
                        color="indigo"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                        }
                    />
                </div>

                <div>
                    <FeatureCard
                        title="Dampak Berkelanjutan"
                        description="Program yang fokus pada penciptaan bisnis berkelanjutan yang memberikan dampak positif bagi masyarakat desa."
                        color="red"
                        icon={
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        }
                    />
                </div>
            </div>
        </div>
    </section>
);

const StatsSection: React.FC = () => (
    <section className="py-20 bg-gradient-to-br from-surface-variant to-surface-container">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Program dalam Angka</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-yellow mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Dampak nyata yang telah dicapai melalui program Startup Desa</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
                <StatsCard
                    title="Total Peserta"
                    value="500+"
                    description="Peserta terdaftar"
                    trend="up"
                    trendValue="+25% dari tahun lalu"
                    color="blue"
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Startup Terbentuk"
                    value="150+"
                    description="Bisnis yang berhasil diluncurkan"
                    trend="up"
                    trendValue="+40% success rate"
                    color="green"
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Dana Pembinaan"
                    value="2.5M"
                    description="Total dana yang disalurkan"
                    trend="up"
                    trendValue="Rp 2.5 Miliar"
                    color="orange"
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Desa Terlibat"
                    value="50+"
                    description="Desa di Kabupaten Pandeglang"
                    trend="up"
                    trendValue="100% coverage"
                    color="purple"
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    }
                />
            </div>
        </div>
    </section>
);

const AboutSection: React.FC = () => (
    <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Apa Itu Startup Desa 2025</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-green to-secondary-green mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="bg-surface-variant rounded-google-xl p-8 shadow-card card-hover">
                            <h3 className="text-xl font-semibold text-primary-text mb-4">Program Inovatif</h3>
                            <p className="text-secondary-text leading-relaxed">
                                Program STARTUP DESA dirancang sebagai ruang temu potensi desa, pengetahuan dan teknologi yang dimiliki oleh kampus, dan pemuda perdesaan sebagai aktor utamanya. Melalui serangkaian kegiatan mulai dari pendaftaran, bootcamp, mentoring bisnis, hingga babak final, program ini bertujuan menciptakan wirausaha pemula yang inovatif dan berdampak.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-primary-green/5 to-secondary-green/5 rounded-google-xl p-8 shadow-card card-hover border border-outline-variant">
                            <h3 className="text-xl font-semibold text-primary-text mb-4">Format Terbaru</h3>
                            <p className="text-secondary-text leading-relaxed">
                                Startup Desa Vol.2 tahun 2025 kembali bergulir dengan format yang lebih segar. Kini, selain untuk umum (pemuda/mahasiswa), Startup Desa Vol.2 juga mengajak para santri sebagai bagian dari ikhtiar bersama dalam mengembangkan potensi kewirausahaan di lingkungan pondok pesantren melalui program yaitu Ponpes Go.
                            </p>
                        </div>
                    </div>
                </div>
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
        <section className="py-20 bg-gradient-to-br from-surface-variant to-surface-container">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Sambutan & Testimoni</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-yellow to-accent-orange mx-auto rounded-full"></div>
                    <p className="text-secondary-text mt-4">Dukungan dari para pemimpin dan peserta program</p>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    {/* Slider Container */}
                    <div className="relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                            {getCurrentTestimonials().map((testimonial, index) => (
                                <div key={`${currentSlide}-${index}`}>
                                    <div className="bg-surface rounded-google-xl p-4 sm:p-6 shadow-card card-hover border border-outline-variant h-full">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            {/* Foto kotak */}
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={testimonial.photoUrl}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-google object-cover border-2 border-outline-variant shadow-sm"
                                                />
                                            </div>

                                            {/* Konten testimoni */}
                                            <div className="flex-1">
                                                <div className="mb-2 sm:mb-3">
                                                    <h4 className="font-semibold text-sm sm:text-base text-primary-text mb-1">{testimonial.name}</h4>
                                                    <p className="text-xs text-primary-green font-medium">{testimonial.title}</p>
                                                </div>

                                                <blockquote className="text-secondary-text text-xs sm:text-sm leading-relaxed italic">
                                                    "{testimonial.quote}"
                                                </blockquote>

                                                {/* Quote icon */}
                                                <div className="flex justify-end mt-3">
                                                    <div className="w-6 h-6 bg-gradient-to-br from-primary-green/10 to-secondary-green/10 rounded-full flex items-center justify-center">
                                                        <svg className="w-3 h-3 text-primary-green" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 bg-surface rounded-full shadow-card hover:shadow-card-hover border border-outline-variant flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-primary-green hover:text-white group"
                        >
                            <svg className="w-5 h-5 text-secondary-text group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>

                        {/* Dots indicator */}
                        <div className="flex space-x-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide
                                        ? 'bg-primary-green w-6'
                                        : 'bg-outline hover:bg-outline-variant'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 bg-surface rounded-full shadow-card hover:shadow-card-hover border border-outline-variant flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-primary-green hover:text-white group"
                        >
                            <svg className="w-5 h-5 text-secondary-text group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Slide counter */}
                    <div className="text-center mt-4">
                        <span className="text-sm text-tertiary-text">
                            {currentSlide + 1} dari {totalSlides}
                        </span>
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
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Benefit Mengikuti Program</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-accent-red mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Dapatkan berbagai keuntungan eksklusif yang akan mendukung perjalanan wirausaha Anda</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
                {BENEFITS.map((benefit, index) => {
                    const gradients = [
                        'gradient-bg-1', 'gradient-bg-2', 'gradient-bg-3',
                        'gradient-bg-4', 'gradient-bg-5', 'gradient-bg-6'
                    ];
                    return (
                        <div key={index} className={`bg-surface rounded-google-xl p-4 sm:p-6 md:p-8 shadow-card card-hover border border-outline-variant text-center flex flex-col items-center group`}>
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${gradients[index % gradients.length]} rounded-google-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white scale-75">{benefit.icon}</div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-primary-text mb-3 sm:mb-4">{benefit.title}</h3>
                            <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{benefit.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

const FaqSummarySection: React.FC = () => (
    <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Pertanyaan Umum</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-red to-accent-orange mx-auto rounded-full"></div>
                    <p className="text-secondary-text mt-4">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
                </div>

                <div>
                    <FaqAccordion items={FAQ_ITEMS.slice(0, 3)} />
                </div>

                <div className="text-center mt-12">
                    <Link to="/faq" className="inline-flex items-center gap-2 text-primary-green hover:text-primary-green-hover font-medium transition-colors duration-200">
                        Lihat Semua FAQ
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

const FinalCtaSection: React.FC = () => (
    <section className="py-20 bg-gradient-to-br from-primary-green via-secondary-green to-accent-green relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 lg:px-8 text-center">
            <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
                    Siap Mengakselerasi Potensi Desamu?
                </h3>
                <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                    Bergabunglah dengan program Startup Desa 2025 dan wujudkan ide bisnis inovatif berbasis potensi desa
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/hubungi" className="bg-white text-primary-green font-semibold py-4 px-8 rounded-google-2xl text-lg hover:bg-surface-variant transition-all duration-200 hover:scale-105 shadow-card">
                        Daftar Sekarang
                    </Link>
                    <Link to="/panduan" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-google-2xl text-lg hover:bg-white hover:text-primary-green transition-all duration-200">
                        Pelajari Lebih Lanjut
                    </Link>
                </div>
            </div>
        </div>
    </section>
);


// Section baru: Program Highlights
const ProgramHighlightsSection: React.FC = () => (
    <section className="py-20 bg-gradient-to-br from-surface-container to-surface-variant">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Highlight Program</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Keunggulan dan pencapaian terbaik dari program Startup Desa</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="bg-surface rounded-google-xl p-8 shadow-card card-hover border border-outline-variant text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-google-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-text mb-4">Success Rate Tinggi</h3>
                    <p className="text-secondary-text leading-relaxed">85% peserta berhasil meluncurkan bisnis mereka dalam 6 bulan setelah program selesai</p>
                </div>

                <div className="bg-surface rounded-google-xl p-8 shadow-card card-hover border border-outline-variant text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-google-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-text mb-4">Pertumbuhan Eksponensial</h3>
                    <p className="text-secondary-text leading-relaxed">Rata-rata startup yang terbentuk mengalami pertumbuhan revenue 300% dalam tahun pertama</p>
                </div>

                <div className="bg-surface rounded-google-xl p-8 shadow-card card-hover border border-outline-variant text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-google-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-text mb-4">Sertifikasi Resmi</h3>
                    <p className="text-secondary-text leading-relaxed">Peserta mendapat sertifikat yang diakui industri dan dapat digunakan untuk pengembangan karir</p>
                </div>
            </div>
        </div>
    </section>
);

// Section baru: Success Stories
const SuccessStoriesSection: React.FC = () => (
    <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Kisah Sukses Alumni</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-blue mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Inspirasi dari para alumni yang telah berhasil membangun bisnis berkelanjutan</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-google-xl p-8 shadow-card card-hover border border-outline-variant">
                    <div className="flex items-start gap-4 mb-6">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Ahmad Rizki" className="w-16 h-16 rounded-google object-cover border-2 border-white shadow-sm" />
                        <div>
                            <h3 className="text-xl font-semibold text-primary-text">Ahmad Rizki</h3>
                            <p className="text-primary-green font-medium">Founder EcoFarm Pandeglang</p>
                            <p className="text-sm text-secondary-text">Alumni Batch 2023</p>
                        </div>
                    </div>
                    <p className="text-secondary-text leading-relaxed mb-4">
                        "Dari ide sederhana tentang pertanian organik, kini EcoFarm telah melayani 200+ petani lokal dan menghasilkan omzet Rp 500 juta per bulan. Program Startup Desa memberikan fondasi yang kuat untuk membangun bisnis berkelanjutan."
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-google-lg">Agritech</span>
                        <span className="text-secondary-text">Revenue: Rp 6M/tahun</span>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-google-xl p-8 shadow-card card-hover border border-outline-variant">
                    <div className="flex items-start gap-4 mb-6">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face" alt="Siti Nurhaliza" className="w-16 h-16 rounded-google object-cover border-2 border-white shadow-sm" />
                        <div>
                            <h3 className="text-xl font-semibold text-primary-text">Siti Nurhaliza</h3>
                            <p className="text-primary-green font-medium">Founder Batik Digital Banten</p>
                            <p className="text-sm text-secondary-text">Alumni Batch 2023</p>
                        </div>
                    </div>
                    <p className="text-secondary-text leading-relaxed mb-4">
                        "Menggabungkan tradisi batik dengan teknologi digital, startup saya kini ekspor ke 15 negara. Mentoring intensif dari program ini membantu saya memahami pasar global dan strategi digital marketing."
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-google-lg">Fashion Tech</span>
                        <span className="text-secondary-text">Export: 15 negara</span>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <Link to="/media" className="btn-secondary">
                    Lihat Lebih Banyak Kisah Sukses
                </Link>
            </div>
        </div>
    </section>
);

// Section baru: Partnership & Ecosystem
const PartnershipSection: React.FC = () => (
    <section className="py-20 bg-surface-variant">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Ekosistem & Partnership</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-accent-red mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Didukung oleh jaringan partner strategis untuk kesuksesan program</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-google-xl flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-text mb-4">Institusi Pendidikan</h3>
                    <p className="text-secondary-text">Kerjasama dengan 25+ universitas dan institusi pendidikan terkemuka untuk memberikan akses knowledge dan research terdepan</p>
                </div>

                <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-google-xl flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-text mb-4">Investor & VC</h3>
                    <p className="text-secondary-text">Akses langsung ke 50+ investor dan venture capital yang siap mendanai startup potensial dari program ini</p>
                </div>

                <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-google-xl flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-text mb-4">Pemerintah Daerah</h3>
                    <p className="text-secondary-text">Dukungan penuh dari Pemkab Pandeglang dan instansi terkait untuk kemudahan regulasi dan akses pasar</p>
                </div>
            </div>

            {/* Partner Logos */}
            <div className="bg-surface rounded-google-xl p-8 shadow-card">
                <h3 className="text-center text-lg font-semibold text-primary-text mb-8">Didukung Oleh</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
                    {/* Placeholder untuk logo partner */}
                    <div className="bg-gray-200 h-12 rounded-google flex items-center justify-center">
                        <span className="text-xs text-gray-500">Partner 1</span>
                    </div>
                    <div className="bg-gray-200 h-12 rounded-google flex items-center justify-center">
                        <span className="text-xs text-gray-500">Partner 2</span>
                    </div>
                    <div className="bg-gray-200 h-12 rounded-google flex items-center justify-center">
                        <span className="text-xs text-gray-500">Partner 3</span>
                    </div>
                    <div className="bg-gray-200 h-12 rounded-google flex items-center justify-center">
                        <span className="text-xs text-gray-500">Partner 4</span>
                    </div>
                    <div className="bg-gray-200 h-12 rounded-google flex items-center justify-center">
                        <span className="text-xs text-gray-500">Partner 5</span>
                    </div>
                    <div className="bg-gray-200 h-12 rounded-google flex items-center justify-center">
                        <span className="text-xs text-gray-500">Partner 6</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Section baru: Program Tracks
const ProgramTracksSection: React.FC = () => (
    <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Track Program</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-green mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Pilih track yang sesuai dengan minat dan potensi desa Anda</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-google-xl p-8 shadow-card card-hover border border-green-200 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-google-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-text mb-4">AgriTech Track</h3>
                    <p className="text-secondary-text leading-relaxed mb-6">Fokus pada inovasi teknologi pertanian, smart farming, dan supply chain management untuk sektor agrikultur</p>
                    <ul className="text-sm text-secondary-text space-y-2">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            IoT untuk monitoring tanaman
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Marketplace produk pertanian
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Sistem manajemen koperasi
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-google-xl p-8 shadow-card card-hover border border-blue-200 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-google-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-text mb-4">Creative Economy</h3>
                    <p className="text-secondary-text leading-relaxed mb-6">Mengembangkan potensi ekonomi kreatif desa melalui digitalisasi produk lokal dan cultural heritage</p>
                    <ul className="text-sm text-secondary-text space-y-2">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            E-commerce produk kerajinan
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Platform wisata desa
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Digital marketing tools
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-google-xl p-8 shadow-card card-hover border border-purple-200 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-google-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-text mb-4">Social Impact</h3>
                    <p className="text-secondary-text leading-relaxed mb-6">Startup yang berfokus pada solusi masalah sosial dan pemberdayaan masyarakat desa</p>
                    <ul className="text-sm text-secondary-text space-y-2">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Platform edukasi online
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Sistem kesehatan desa
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Fintech untuk UMKM
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// Section baru: News & Updates
const NewsUpdatesSection: React.FC = () => (
    <section className="py-20 bg-surface-container">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 tracking-tight">Berita & Update Terbaru</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-red to-accent-orange mx-auto rounded-full"></div>
                <p className="text-secondary-text mt-4 max-w-2xl mx-auto">Ikuti perkembangan terbaru program dan pencapaian peserta</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <article className="bg-surface rounded-google-xl shadow-card card-hover border border-outline-variant overflow-hidden group">
                    <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-4 left-4">
                            <span className="bg-white/90 text-green-800 px-3 py-1 rounded-google text-sm font-medium">Program Update</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-sm text-secondary-text mb-2">15 Januari 2025</div>
                        <h3 className="text-lg font-semibold text-primary-text mb-3 group-hover:text-primary-green transition-colors">Pembukaan Pendaftaran Batch 2025 Dimulai</h3>
                        <p className="text-secondary-text text-sm leading-relaxed">Pendaftaran untuk program Startup Desa 2025 resmi dibuka dengan target 1000 peserta dari seluruh Kabupaten Pandeglang...</p>
                        <Link to="/pengumuman" className="inline-flex items-center gap-1 text-primary-green hover:text-primary-green-hover text-sm font-medium mt-4 transition-colors">
                            Baca Selengkapnya
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </article>

                <article className="bg-surface rounded-google-xl shadow-card card-hover border border-outline-variant overflow-hidden group">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-4 left-4">
                            <span className="bg-white/90 text-blue-800 px-3 py-1 rounded-google text-sm font-medium">Success Story</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-sm text-secondary-text mb-2">12 Januari 2025</div>
                        <h3 className="text-lg font-semibold text-primary-text mb-3 group-hover:text-primary-green transition-colors">Alumni Raih Pendanaan Seri A Rp 5 Miliar</h3>
                        <p className="text-secondary-text text-sm leading-relaxed">Startup AgriTech dari alumni batch 2023 berhasil meraih pendanaan Seri A untuk ekspansi ke seluruh Jawa Barat...</p>
                        <Link to="/media" className="inline-flex items-center gap-1 text-primary-green hover:text-primary-green-hover text-sm font-medium mt-4 transition-colors">
                            Baca Selengkapnya
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </article>

                <article className="bg-surface rounded-google-xl shadow-card card-hover border border-outline-variant overflow-hidden group">
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-4 left-4">
                            <span className="bg-white/90 text-purple-800 px-3 py-1 rounded-google text-sm font-medium">Event</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="text-sm text-secondary-text mb-2">10 Januari 2025</div>
                        <h3 className="text-lg font-semibold text-primary-text mb-3 group-hover:text-primary-green transition-colors">Workshop "Digital Marketing untuk UMKM Desa"</h3>
                        <p className="text-secondary-text text-sm leading-relaxed">Acara workshop gratis untuk UMKM desa tentang strategi pemasaran digital yang efektif di era modern...</p>
                        <Link to="/pengumuman" className="inline-flex items-center gap-1 text-primary-green hover:text-primary-green-hover text-sm font-medium mt-4 transition-colors">
                            Baca Selengkapnya
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </article>
            </div>

            <div className="text-center mt-12">
                <Link to="/pengumuman" className="btn-secondary">
                    Lihat Semua Berita
                </Link>
            </div>
        </div>
    </section>
);

const Home: React.FC = () => {
    return (
        <>
            <AnnouncementPopup />
            <HeroSection />
            <AiChatSection />
            <ProgramHighlightsSection />
            <FeaturesSection />
            <StatsSection />
            <AboutSection />
            <ProgramTracksSection />
            <TimelineSection />
            <SuccessStoriesSection />
            <PartnershipSection />
            <BenefitsSection />
            <TestimonialsSection />
            <NewsUpdatesSection />
            <FaqSummarySection />
            <FinalCtaSection />
        </>
    );
};

export default Home;