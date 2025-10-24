import React from 'react';

const DownloadLink: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-gradient-to-r from-lavender-soft to-sky-light p-6 rounded-xl shadow-google border border-border-gray flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div>
            <h3 className="text-lg font-semibold text-primary-text">{title}</h3>
            <p className="text-sm text-secondary-text mt-1">{description}</p>
        </div>
        <a href="#" className="flex-shrink-0 bg-accent-green text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300">
            Download
        </a>
    </div>
);


const Guide: React.FC = () => {
    const resources = [
        { title: 'Buku Panduan', description: 'Panduan lengkap program Startup Desa 2025.' },
        { title: 'Template Pitch Deck', description: 'Gunakan template ini untuk presentasi ide bisnismu.' },
        { title: 'Template Surat Rekomendasi Tokoh Masyarakat', description: 'Format surat rekomendasi yang dibutuhkan.' },
        { title: 'Template CV', description: 'Contoh CV untuk melengkapi pendaftaranmu.' },
        { title: 'Kebutuhan Logo dan Lainnya (Media Kit)', description: 'Aset grafis resmi untuk keperluan media.' },
    ];

    return (
        <div className="bg-light-gray-bg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-primary-text text-center mb-12 tracking-tight">Panduan & Sumber Daya</h1>
                    <div className="space-y-6">
                        {resources.map((res, index) => (
                           <DownloadLink key={index} title={res.title} description={res.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;