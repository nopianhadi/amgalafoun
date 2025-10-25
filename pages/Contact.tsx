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
        alert('Message sent! (Simulation)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-surface-variant py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-primary-text mb-4 tracking-tight">Contact Us</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full mb-6"></div>
                        <p className="text-secondary-text text-lg">
                            Get in touch with our team to learn more about our youth programs, apply for scholarships, or explore volunteer opportunities.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-surface p-8 rounded-google-xl shadow-card border border-outline-variant">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-primary-text tracking-tight">Amgala Foundation</h2>
                                <p className="text-secondary-text mt-1">Empowering children & youth to lead Indonesia's future.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span className="text-secondary-text">{contactInfo.email}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span className="text-secondary-text">{contactInfo.phone1}</span>
                                </div>
                                 <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span className="text-secondary-text">{contactInfo.phone2}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span className="text-secondary-text">Menara Caraka, Mega Kuningan, Jakarta Selatan, Indonesia</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="sr-only">Your Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="modern-input w-full"/>
                            </div>
                             <div>
                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="modern-input w-full"/>
                            </div>
                             <div>
                                <label htmlFor="subject" className="sr-only">Subject</label>
                                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="modern-input w-full"/>
                            </div>
                             <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Your Message" required className="modern-input w-full resize-none"></textarea>
                            </div>
                             <div>
                                <button type="submit" className="btn-primary w-full">
                                    Send Message
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