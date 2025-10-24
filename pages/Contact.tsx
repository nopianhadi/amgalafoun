import React, { useState, useEffect } from 'react';
import { DEFAULT_PROFILE_DATA } from '../constants';
import type { ProfileData } from '../types';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [contactInfo, setContactInfo] = useState<ProfileData>(DEFAULT_PROFILE_DATA);

    useEffect(() => {
        const storedProfile = localStorage.getItem('profileData');
        if (storedProfile) {
            setContactInfo(JSON.parse(storedProfile));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Pesan terkirim! (Simulasi)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-light-gray-bg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-primary-text text-center mb-12 tracking-tight">Hubungi Kami</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gradient-to-r from-lavender-soft to-sky-light p-8 rounded-xl shadow-google border border-border-gray">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-primary-text tracking-tight">Startup Desa 2025 (Vol.2)</h2>
                                <p className="text-secondary-text mt-1">Program Kewirausahaan Pemula Kabupaten Pandeglang 2025.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span className="text-secondary-text">{contactInfo.email}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span className="text-secondary-text">{contactInfo.phone1}</span>
                                </div>
                                 <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span className="text-secondary-text">{contactInfo.phone2}</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="sr-only">Nama Anda</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Nama Anda" required className="w-full px-4 py-3 rounded-lg border border-border-gray focus:outline-none focus:ring-2 focus:ring-accent-green/50 focus:border-accent-green transition-shadow bg-white/70"/>
                            </div>
                             <div>
                                <label htmlFor="email" className="sr-only">Email Anda</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email Anda" required className="w-full px-4 py-3 rounded-lg border border-border-gray focus:outline-none focus:ring-2 focus:ring-accent-green/50 focus:border-accent-green transition-shadow bg-white/70"/>
                            </div>
                             <div>
                                <label htmlFor="subject" className="sr-only">Subjek</label>
                                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} placeholder="Subjek" required className="w-full px-4 py-3 rounded-lg border border-border-gray focus:outline-none focus:ring-2 focus:ring-accent-green/50 focus:border-accent-green transition-shadow bg-white/70"/>
                            </div>
                             <div>
                                <label htmlFor="message" className="sr-only">Pesan</label>
                                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Pesan" required className="w-full px-4 py-3 rounded-lg border border-border-gray focus:outline-none focus:ring-2 focus:ring-accent-green/50 focus:border-accent-green transition-shadow bg-white/70"></textarea>
                            </div>
                             <div>
                                <button type="submit" className="w-full bg-accent-green text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300">
                                    Kirim Pesan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;