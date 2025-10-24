import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-primary-text text-center mb-10 tracking-tight">Tentang Startup Desa 2025</h1>
                    <div className="p-8 bg-gradient-to-r from-lavender-soft to-sky-light rounded-xl border border-border-gray space-y-6 text-secondary-text leading-relaxed shadow-google">
                        <p>
                            Program STARTUP DESA dirancang sebagai ruang temu potensi desa, pengetahuan dan teknologi yang dimiliki oleh kampus, dan pemuda perdesaan sebagai aktor utamanya. Melalui serangkaian kegiatan mulai dari pendaftaran, bootcamp, mentoring bisnis, hingga babak final, program ini bertujuan menciptakan wirausaha pemula yang inovatif dan berdampak. Startup Desa Vol.2 tahun 2025 kembali bergulir dengan format yang lebih segar.
                        </p>
                        <p>
                            Kini, selain untuk umum (pemuda/mahasiswa), Startup Desa Vol.2 juga mengajak para santri sebagai bagian dari ikhtiar bersama dalam mengembangkan potensi kewirausahaan di lingkungan pondok pesantren melalui program yaitu Ponpes Go.
                        </p>
                        <div className="pt-4">
                            <h2 className="text-2xl font-semibold text-primary-text mb-3 tracking-tight">Visi Kami</h2>
                            <p>Menjadi akselerator utama bagi lahirnya startup-startup berbasis potensi lokal yang mampu bersaing di tingkat nasional dan memberikan dampak ekonomi signifikan bagi masyarakat desa.</p>
                        </div>
                         <div className="pt-4">
                            <h2 className="text-2xl font-semibold text-primary-text mb-3 tracking-tight">Misi Kami</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Mengidentifikasi dan membina talenta wirausaha di kalangan pemuda desa.</li>
                                <li>Menyediakan platform pembelajaran, mentoring, dan pendanaan awal.</li>
                                <li>Membangun ekosistem kolaboratif antara akademisi, pemerintah, dan pelaku bisnis.</li>
                                <li>Mendorong inovasi teknologi yang relevan untuk memecahkan masalah di perdesaan.</li>
                            </ul>
                        </div>
                    </div>
                     <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="rounded-xl shadow-google overflow-hidden">
                            <img src="https://picsum.photos/seed/gallery1/400/300" alt="Kegiatan Startup Desa 1" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"/>
                        </div>
                        <div className="rounded-xl shadow-google overflow-hidden">
                            <img src="https://picsum.photos/seed/gallery2/400/300" alt="Kegiatan Startup Desa 2" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"/>
                        </div>
                        <div className="rounded-xl shadow-google overflow-hidden">
                             <img src="https://picsum.photos/seed/gallery3/400/300" alt="Kegiatan Startup Desa 3" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"/>
                        </div>
                        <div className="rounded-xl shadow-google overflow-hidden">
                            <img src="https://picsum.photos/seed/gallery4/400/300" alt="Kegiatan Startup Desa 4" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;