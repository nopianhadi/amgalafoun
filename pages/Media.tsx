
import React, { useState } from 'react';
import { BERITA_ITEMS } from '../constants';
import type { BeritaItem } from '../types';

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
                className="bg-white rounded-xl shadow-google border border-border-gray w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-4 text-secondary-text hover:text-primary-text text-4xl font-light"
                    aria-label="Tutup artikel"
                >
                    &times;
                </button>
                <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-t-xl" />
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-primary-text mb-4 tracking-tight">{article.title}</h1>
                    <div className="text-secondary-text leading-relaxed space-y-4">
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

    return (
        <div className="bg-white py-20">
            <BeritaModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-primary-text text-center mb-12 tracking-tight">Berita & Liputan Media</h1>
                
                {BERITA_ITEMS.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {BERITA_ITEMS.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl shadow-google border border-border-gray overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-semibold text-primary-text mb-3">{item.title}</h2>
                                    <p className="text-secondary-text leading-relaxed flex-grow">{item.excerpt}</p>
                                    <div className="mt-4">
                                        <button 
                                            onClick={() => setSelectedArticle(item)}
                                            className="font-semibold text-accent-green hover:underline"
                                        >
                                            Baca Selengkapnya &rarr;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                     <div className="max-w-4xl mx-auto mt-10 text-center text-secondary-text">
                        <p>Belum ada berita saat ini. Silakan periksa kembali nanti.</p>
                     </div>
                )}
            </div>
        </div>
    );
};

export default Media;