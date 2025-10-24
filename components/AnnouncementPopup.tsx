import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnnouncementPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Cek apakah popup sudah pernah ditampilkan hari ini
        const today = new Date().toDateString();
        const lastShown = localStorage.getItem('announcementPopupLastShown');

        if (lastShown !== today) {
            // Tampilkan popup setelah 2 detik
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Simpan tanggal hari ini agar popup tidak muncul lagi hari ini
        const today = new Date().toDateString();
        localStorage.setItem('announcementPopupLastShown', today);
    };

    const handleViewAnnouncement = () => {
        handleClose();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-surface rounded-google-2xl shadow-card max-w-md w-full mx-4 animate-fade-in-up">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-green to-secondary-green text-white p-6 rounded-t-google-2xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold">Pengumuman Penting!</h3>
                        </div>
                        <button
                            onClick={handleClose}
                            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-green/10 to-secondary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-primary-green" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-primary-text mb-2">Hasil Penjurian Telah Keluar!</h4>
                        <p className="text-secondary-text mb-4">
                            Selamat kepada tim yang berhasil lolos ke tahap bootcamp.
                            Lihat daftar lengkap dan informasi bootcamp.
                        </p>
                    </div>

                    {/* Quick Info */}
                    <div className="bg-surface-variant rounded-google-lg p-4 mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-semibold text-primary-text">Bootcamp: 14-15 Juli 2025</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-secondary-text text-sm">Pesona Curug Goong, Pandeglang</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <Link
                            to="/pengumuman"
                            onClick={handleViewAnnouncement}
                            className="bg-gradient-to-r from-primary-green to-secondary-green text-white font-semibold py-3 px-6 rounded-google-2xl text-center hover:opacity-90 transition-opacity duration-200"
                        >
                            Lihat Pengumuman Lengkap
                        </Link>
                        <button
                            onClick={handleClose}
                            className="bg-surface-container text-secondary-text font-medium py-3 px-6 rounded-google-2xl hover:bg-surface-container-high transition-colors duration-200"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementPopup;