import React from 'react';
import { Link } from 'react-router-dom';

const Pengumuman: React.FC = () => {
    const timLolos = [
        'Agrotics Nusantara', 'Havis Production', 'Angfau Craft', 'Biochar Arang Sekam',
        'Banana Ships', 'Bank Sampah GEN Z', 'Snack Bar Daun Bayam', 'Bumi Teduh',
        'Emping Jahe Merah', 'Cocopeat Bina Desa', 'KemonMate Store', 'House Mushroom',
        'Salacca Brew', 'Syahmir Susu Kurma Gula Arena', 'DA Groups', 'Budidaya Ayam Petelur',
        'Abon Jantung Pisang', 'Sharing Bisnis Digital (SBD)', 'Sabun Cuci Piring BU-Clean',
        'Sekolah Atletik Badak Pandeglang', 'Pondok Sayuran Madina Al Hijrah'
    ];

    const pemateri = [
        {
            nama: 'Dr. H. Sutoto',
            jabatan: 'Kepala Bappeda Pandeglang',
            tema: 'Kewirausahaan dan Pemuda dalam Perencanaan Pembangunan Kabupaten Pandeglang'
        },
        {
            nama: 'Faridha Siregar',
            jabatan: 'Kepala BJB Cabang Pandeglang',
            tema: 'Kewirausahaan dan Pemuda dalam Perencanaan Pembangunan Kabupaten Pandeglang'
        },
        {
            nama: 'Muhamad Syahrial',
            jabatan: 'Kepala BPJS Ketenagakerjaan Cabang Pandeglang-Labuan',
            tema: 'Kewirausahaan dan Pemuda dalam Perencanaan Pembangunan Kabupaten Pandeglang'
        },
        {
            nama: 'TB. Asep Rafiudin Arief, M.I.Kom.',
            jabatan: 'Anggota DPRD Kabupaten Pandeglang',
            materi: 'Pemuda Pandeglang Dalam Lanskap Indonesia Emas 2045'
        },
        {
            nama: 'Sukron Mulyadi, S.Sos., M.M.',
            jabatan: 'Pemerhati Kepemudaan',
            materi: 'Redefinisi Peran Pemuda Pandeglang dalam Pembangunan Daerah'
        },
        {
            nama: 'Andi Suhud T.',
            jabatan: 'Dewan Pendiri Fekraf Banten',
            materi: 'Startup Desa dalam Kerangka Pembangunan Ekonomi Kreatif di Provinsi Banten'
        },
        {
            nama: 'Eko Prasetyo, M.A.',
            jabatan: 'Akademisi FISIP UNIS Tangerang/Praktisi Mindfulness',
            materi: 'Mindfulness for Leadership & Business'
        }
    ];

    const faqItems = [
        {
            question: 'Bagaimana jika nama kelompok saya tidak ada di daftar?',
            answer: 'Jika nama kelompok Anda tidak tercantum, artinya Anda belum berhasil lolos. Jangan berkecil hati, tingkatkan proposal Anda dan coba lagi di kesempatan berikutnya!'
        },
        {
            question: 'Apakah akomodasi/penginapan disediakan oleh panitia?',
            answer: 'Ya, panitia telah menyediakan akomodasi (penginapan) untuk seluruh peserta selama kegiatan bootcamp. Peserta hanya perlu membawa perlengkapan dan kebutuhan pribadi yang dirasa perlu.'
        },
        {
            question: 'Bagaimana cara anggota tim saya bergabung ke grup WhatsApp?',
            answer: 'Anggota tim dapat bergabung ke group Whatsapp menggunakan email dan nomor ketua yang terdaftar'
        },
        {
            question: 'Apakah seluruh anggota tim wajib hadir penuh selama bootcamp?',
            answer: 'Seluruh Anggota tim wajib hadir pada event bootcamp, dan sangat di sarankan mengikuti penuh kegiatan'
        },
        {
            question: 'Saya tidak bisa join WA Grup, bagaimana solusinya?',
            answer: 'Pastikan nomor dan email yang di inputkan adalah yang di gunakan untuk mendaftar di formulir, jika masih ada kendala bisa hubungi admin 085810130690'
        },
        {
            question: 'Ke mana saya harus bertanya jika ada pertanyaan lain?',
            answer: 'Untuk pertanyaan lain yang tidak terjawab di sini, Anda dapat menghubungi panitia secara langsung melalui ikon WhatsApp yang ada di pojok kanan bawah halaman website ini.'
        }
    ];

    return (
        <div className="min-h-screen bg-surface">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy py-20 text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Pengumuman Penjurian</h1>
                        <p className="text-xl mb-8 text-white/90">Selamat kepada kelompok yang berhasil melaju ke tahap selanjutnya!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#daftar-lolos" className="bg-white text-primary-navy font-semibold py-3 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Lihat Daftar Lolos
                            </a>
                            <a href="https://wa.me/group" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                Gabung Grup WA
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Daftar Tim Lolos */}
            <section id="daftar-lolos" className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Daftar Tim Lolos Penjurian</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-navy to-secondary-navy mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {timLolos.map((tim, index) => (
                                <div key={index} className="bg-surface-variant rounded-google-lg p-4 shadow-card card-hover border border-outline-variant">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-br from-primary-navy to-secondary-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <span className="font-medium text-primary-text">{tim}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Informasi Bootcamp */}
            <section className="py-20 bg-surface-variant">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">Informasi Awal Bootcamp</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-accent-yellow mx-auto rounded-full"></div>
                        <p className="text-secondary-text mt-4">Persiapkan diri untuk sesi bootcamp yang intensif dan menyenangkan.</p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Juknis & Aturan */}
                        <div className="bg-surface rounded-google-xl p-8 shadow-card mb-8">
                            <h3 className="text-2xl font-bold text-primary-text mb-6">Juknis & Aturan Bootcamp 2025</h3>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold text-lg text-primary-text mb-4">📅 Tanggal & Waktu</h4>
                                    <p className="text-secondary-text mb-6">14 - 15 Juli 2025</p>
                                    
                                    <h4 className="font-semibold text-lg text-primary-text mb-4">📍 Lokasi</h4>
                                    <p className="text-secondary-text">
                                        Pesona Curug Goong<br />
                                        Jl. Raya Mandalawangi No.16, Kurungkambing<br />
                                        Kec. Mandalawangi, Kabupaten Pandeglang<br />
                                        Banten 42271
                                    </p>
                                </div>
                                
                                <div className="bg-gradient-to-br from-primary-navy/5 to-secondary-navy/5 rounded-google-lg p-6">
                                    <h4 className="font-semibold text-lg text-primary-text mb-4">📋 Hal Penting</h4>
                                    <ul className="text-secondary-text space-y-2">
                                        <li>• Akomodasi disediakan panitia</li>
                                        <li>• Seluruh anggota tim wajib hadir</li>
                                        <li>• Bawa perlengkapan pribadi</li>
                                        <li>• Ikuti kegiatan penuh</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pemateri */}
                        <div className="bg-surface rounded-google-xl p-8 shadow-card">
                            <h3 className="text-2xl font-bold text-primary-text mb-6">Pemateri dan Materi Bootcamp</h3>
                            
                            <div className="space-y-6">
                                {pemateri.map((speaker, index) => (
                                    <div key={index} className="bg-surface-variant rounded-google-lg p-6 border border-outline-variant">
                                        <h4 className="font-semibold text-lg text-primary-text mb-2">{speaker.nama}</h4>
                                        <p className="text-primary-navy font-medium mb-2">{speaker.jabatan}</p>
                                        {speaker.materi && (
                                            <p className="text-secondary-text italic">Materi: {speaker.materi}</p>
                                        )}
                                        {speaker.tema && (
                                            <p className="text-secondary-text italic">Tema: {speaker.tema}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-4">FAQ Seputar Pengumuman & Bootcamp</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-accent-red to-accent-orange mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqItems.map((item, index) => (
                            <div key={index} className="bg-surface-variant rounded-google-xl p-6 shadow-card border border-outline-variant">
                                <h4 className="font-semibold text-lg text-primary-text mb-3">{item.question}</h4>
                                <p className="text-secondary-text leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-accent-navy">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="text-white">
                        <h3 className="text-3xl font-bold mb-6">Siap untuk Bootcamp?</h3>
                        <p className="text-xl mb-8 text-white/90">Bergabunglah dengan grup WhatsApp untuk informasi terbaru</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://wa.me/group" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-navy font-semibold py-4 px-8 rounded-google-2xl hover:bg-surface-variant transition-all duration-200">
                                Gabung Grup WA
                            </a>
                            <Link to="/hubungi" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-google-2xl hover:bg-white hover:text-primary-navy transition-all duration-200">
                                Hubungi Panitia
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pengumuman;