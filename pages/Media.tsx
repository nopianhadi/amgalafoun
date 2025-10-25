
import React, { useState } from 'react';
import { BERITA_ITEMS } from '../constants';
import type { BeritaItem } from '../types';
import { Link } from 'react-router-dom';

const BeritaModal: React.FC<{ article: BeritaItem | null; onClose: () => void }> = ({ article, onClose }) => {
    if (!article) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-google-2xl shadow-card border border-outline-variant w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 w-10 h-10 bg-surface hover:bg-surface-variant rounded-full flex items-center justify-center text-secondary-text hover:text-primary-text transition-all duration-200 z-10"
                    aria-label="Tutup artikel"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-t-google-2xl" />
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-primary-text mb-4 tracking-tight">{article.title}</h1>
                    <div className="text-secondary-text leading-relaxed space-y-4 text-lg">
                        {article.content.split('\n').map((paragraph, index) => (
                            paragraph.trim() && <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Media: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<BeritaItem | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = [
        { id: 'all', name: 'All News', count: BERITA_ITEMS.length },
        { id: 'programs', name: 'Programs', count: 2 },
        { id: 'achievements', name: 'Achievements', count: 1 },
        { id: 'community', name: 'Community', count: 1 }
    ];

    const featuredArticle = BERITA_ITEMS[0];
    const otherArticles = BERITA_ITEMS.slice(1);

    return (
        <div className="min-h-screen bg-surface">
            <BeritaModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy py-20 text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">Media & News</h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Stay updated with the latest news, achievements, and stories from Amgala Foundation's youth empowerment programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/hubungi" className="bg-white text-primary-navy font-semibold py-3 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Media Inquiries
                            </Link>
                            <Link to="/benefit" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                Our Programs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            {featuredArticle && (
                <section className="py-20 bg-surface-variant">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Featured Story</h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                            </div>
                            
                            <div className="bg-surface rounded-google-2xl shadow-card border border-outline-variant overflow-hidden hover:shadow-card-hover transition-all duration-300">
                                <div className="grid lg:grid-cols-2 gap-0">
                                    <div className="relative">
                                        <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-64 lg:h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
                                    </div>
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="mb-4">
                                            <span className="bg-primary-navy text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-primary-text mb-4 leading-tight">{featuredArticle.title}</h3>
                                        <p className="text-secondary-text leading-relaxed mb-6 text-lg">{featuredArticle.excerpt}</p>
                                        <button 
                                            onClick={() => setSelectedArticle(featuredArticle)}
                                            className="inline-flex items-center gap-2 bg-primary-navy text-white px-6 py-3 rounded-google-xl font-semibold hover:bg-secondary-navy transition-all duration-300 self-start"
                                        >
                                            Read Full Story
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* News Categories */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Latest News</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-google-2xl font-medium transition-all duration-200 ${
                                        selectedCategory === category.id
                                            ? 'bg-primary-navy text-white shadow-lg'
                                            : 'bg-surface-variant text-secondary-text hover:bg-surface-container hover:text-primary-text'
                                    }`}
                                >
                                    {category.name} ({category.count})
                                </button>
                            ))}
                        </div>

                        {/* News Grid */}
                        {BERITA_ITEMS.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {BERITA_ITEMS.map((item) => (
                                    <article key={item.id} className="bg-surface-variant rounded-google-2xl shadow-card border border-outline-variant overflow-hidden flex flex-col transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 group">
                                        <div className="relative overflow-hidden">
                                            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="mb-3">
                                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">News</span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-primary-text mb-3 leading-tight group-hover:text-primary-navy transition-colors duration-200">{item.title}</h3>
                                            <p className="text-secondary-text leading-relaxed flex-grow mb-4">{item.excerpt}</p>
                                            <button 
                                                onClick={() => setSelectedArticle(item)}
                                                className="inline-flex items-center gap-2 font-semibold text-primary-navy hover:text-accent-blue transition-colors duration-200 self-start"
                                            >
                                                Read More
                                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 bg-surface-variant rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-secondary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-primary-text mb-2">No News Available</h3>
                                <p className="text-secondary-text">Check back later for the latest updates and stories.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Media Kit Section */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Media Resources</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full mb-8"></div>
                        <p className="text-secondary-text text-lg mb-12">
                            Access our media kit, press releases, and official resources for media coverage
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-surface p-6 rounded-google-xl shadow-card border border-outline-variant text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-accent-blue rounded-google-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Media Kit</h3>
                                <p className="text-secondary-text text-sm mb-4">Logos, brand guidelines, and official photos</p>
                                <button className="bg-primary-navy text-white px-4 py-2 rounded-google-lg text-sm font-medium hover:bg-secondary-navy transition-colors">
                                    Download
                                </button>
                            </div>
                            
                            <div className="bg-surface p-6 rounded-google-xl shadow-card border border-outline-variant text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-teal rounded-google-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Press Releases</h3>
                                <p className="text-secondary-text text-sm mb-4">Official announcements and statements</p>
                                <button className="bg-primary-navy text-white px-4 py-2 rounded-google-lg text-sm font-medium hover:bg-secondary-navy transition-colors">
                                    View All
                                </button>
                            </div>
                            
                            <div className="bg-surface p-6 rounded-google-xl shadow-card border border-outline-variant text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-teal to-primary-navy rounded-google-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-primary-text mb-2">Media Contact</h3>
                                <p className="text-secondary-text text-sm mb-4">Get in touch for interviews and coverage</p>
                                <Link to="/hubungi" className="bg-primary-navy text-white px-4 py-2 rounded-google-lg text-sm font-medium hover:bg-secondary-navy transition-colors inline-block">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Stay Updated</h2>
                        <p className="text-xl text-white/90 mb-8">
                            Subscribe to our newsletter for the latest news and program updates
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-google-lg text-primary-text focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <button className="bg-white text-primary-navy font-semibold py-3 px-6 rounded-google-lg hover:bg-surface-variant transition-all duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Media;