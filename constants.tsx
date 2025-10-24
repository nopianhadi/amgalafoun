
import React from 'react';
import type { TimelineEvent, Testimonial, Benefit, FaqItem, NavItem, BeritaItem, ProfileData } from './types';

// Icons
const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
);
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.044-.044a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-2.829 2.829a2 2 0 01-2.828 0l-2.829-2.829a2 2 0 010-2.828l2.829-2.829z" />
    </svg>
);
const PlaneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);


export const NAV_LINKS: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Tentang', path: '/tentang' },
    { name: 'Benefit', path: '/benefit' },
    { name: 'FAQ', path: '/faq' },
    {
        name: 'Panduan',
        dropdown: [
            { name: 'Buku Panduan', path: '/panduan' },
            { name: 'Template Pitch Deck', path: '/panduan' },
            { name: 'Template Surat Rekomendasi', path: '/panduan' },
            { name: 'Template CV', path: '/panduan' },
            { name: 'Kebutuhan Logo & Lainnya', path: '/panduan' }
        ]
    },
    { name: 'Media', path: '/media' },
    { name: 'Pengumuman', path: '/pengumuman' },
    { name: 'Hubungi', path: '/hubungi' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
    { date: '31 Mei - 9 Juni', title: 'Pendaftaran' },
    { date: '10 - 17 Juni', title: 'Seleksi Berkas' },
    { date: '28 Juni', title: 'Pengumuman Lolos Seleksi Berkas' },
    { date: '14-15 Juli', title: 'Startup Desa Bootcamp' },
    { date: '30 Juli', title: 'Mentoring Bisnis' },
    { date: '(Tanggal Menyusul)', title: 'Babak Final' },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        photoUrl: 'https://picsum.photos/seed/faridha/100/100',
        name: 'Faridha Siregar',
        title: 'Kepala Cabang BJB Pandeglang',
        quote: 'Kami mendukung program STARTUP DESA 2025 dalam upaya meningkatkan perekonomian desa melalui inovasi dan kewirausahaan pemuda. Ini adalah langkah strategis untuk masa depan yang lebih cerah.'
    },
    {
        photoUrl: 'https://picsum.photos/seed/lini/100/100',
        name: 'Lini Septiana',
        title: 'Ketua Pelaksana',
        quote: 'Startup Desa adalah wadah bagi talenta muda untuk mengubah potensi lokal menjadi bisnis berkelanjutan. Kami bangga bisa memfasilitasi perjalanan mereka menuju kesuksesan.'
    },
    {
        photoUrl: 'https://picsum.photos/seed/atih/100/100',
        name: 'Atih Ardiansyah',
        title: 'Pembina Program',
        quote: 'Melalui bimbingan intensif dan jaringan yang kami sediakan, kami yakin para peserta dapat berkembang menjadi wirausahawan tangguh yang membawa dampak positif bagi komunitasnya.'
    },
    {
        photoUrl: 'https://picsum.photos/seed/asep/100/100',
        name: 'Asep Rahmat',
        title: 'Mentor Bisnis',
        quote: 'Semangat dan ide-ide segar dari para peserta Startup Desa sangat menginspirasi. Saya senang bisa berbagi pengalaman untuk membantu mereka merealisasikan visi bisnis mereka.'
    }
];

export const BENEFITS: Benefit[] = [
    {
        icon: <GiftIcon />,
        title: 'Hadiah Uang Pembinaan',
        description: 'Peserta akan mendapatkan uang pembinaan untuk pengembangan awal ide bisnis mereka.'
    },
    {
        icon: <BriefcaseIcon />,
        title: 'Modal Bisnis',
        description: 'Dukungan Modal Pengembangan Bisnis untuk tim terbaik yang lolos ke tahap selanjutnya.'
    },
    {
        icon: <UsersIcon />,
        title: 'Bimbingan Bisnis',
        description: 'Peserta akan mendapatkan coaching dan mentoring bisnis dari para profesional berpengalaman.'
    },
    {
        icon: <UsersIcon />,
        title: 'Jaringan Bisnis',
        description: 'Peserta akan mendapatkan jaringan pasar yang berguna untuk keberlanjutan dan skala bisnis.'
    },
    {
        icon: <GlobeIcon />,
        title: 'Mewakili Daerah',
        description: 'Finalis dan atau juara akan mendapatkan kesempatan untuk mewakili Kabupaten Pandeglang.'
    },
    {
        icon: <PlaneIcon />,
        title: 'Trip by skuyind.id',
        description: 'Pemenang akan mendapatkan paket trip rekreasi eksklusif ke Sangiang Island.'
    }
];

export const FAQ_ITEMS: FaqItem[] = [
    {
        question: 'Apa itu Program STARTUP DESA 2025?',
        answer: 'Program STARTUP DESA 2025 adalah program akselerasi yang dirancang sebagai ruang temu antara potensi desa, pengetahuan & teknologi kampus, dan pemuda perdesaan sebagai aktor utamanya untuk menciptakan wirausaha pemula yang inovatif.'
    },
    {
        question: 'Siapa saja yang dapat mendaftar?',
        answer: 'Program ini terbuka untuk umum, termasuk pemuda, mahasiswa, dan juga para santri dari pondok pesantren di wilayah Kabupaten Pandeglang, Provinsi Banten.'
    },
    {
        question: 'Bagaimana cara mendaftar program ini?',
        answer: 'Pendaftaran dilakukan secara online melalui tautan yang akan kami sediakan di website ini selama periode pendaftaran dibuka. Pastikan untuk mengisi semua data yang diperlukan dengan benar.'
    },
    {
        question: 'Apa saja persyaratan pendaftaran?',
        answer: 'Persyaratan pendaftaran meliputi identitas diri, proposal ide bisnis yang berbasis potensi desa, surat rekomendasi dari tokoh masyarakat, dan CV. Detail lengkap akan ada di buku panduan.'
    },
    {
        question: 'Bagaimana jika saya mengalami kendala teknis saat pendaftaran?',
        answer: 'Jika terdapat kendala teknis, Anda dapat menghubungi tim kami melalui detail kontak yang tertera di halaman Hubungi Kami. Tim kami akan siap membantu Anda.'
    },
    {
        question: 'Siapa yang dimaksud dengan "Tokoh Masyarakat" untuk surat rekomendasi?',
        answer: 'Tokoh masyarakat bisa berupa kepala desa, ketua RT/RW, pimpinan pondok pesantren, dosen, atau figur publik lain yang relevan dan mengenal baik Anda atau tim Anda.'
    }
];

export const BERITA_ITEMS: BeritaItem[] = [
    {
        id: 1,
        title: 'Kick-off Startup Desa 2025: Mendorong Inovasi dari Perdesaan',
        excerpt: 'Program Startup Desa 2025 resmi dibuka, menandai dimulainya perjalanan para wirausahawan muda untuk mengubah potensi desa menjadi bisnis yang berkelanjutan.',
        imageUrl: 'https://picsum.photos/seed/berita1/600/400',
        content: `Acara kick-off Startup Desa 2025 (Vol. 2) yang diadakan di Pendopo Kabupaten Pandeglang berlangsung meriah. Dihadiri oleh berbagai tokoh masyarakat, perwakilan pemerintah daerah, dan calon peserta, acara ini menjadi simbol dimulainya sebuah gerakan baru untuk pemberdayaan ekonomi desa.\n\nDalam sambutannya, Ketua Pelaksana, Lini Septiana, menekankan pentingnya peran pemuda sebagai motor penggerak inovasi. "Kami percaya bahwa di setiap desa tersimpan potensi luar biasa yang menunggu untuk digali. Startup Desa adalah jembatan untuk menghubungkan potensi tersebut dengan pengetahuan, teknologi, dan pasar," ujarnya.`
    },
    {
        id: 2,
        title: 'Bootcamp Intensif: Peserta Dibekali Keterampilan Bisnis Digital',
        excerpt: 'Selama dua hari penuh, para peserta mendapatkan materi mendalam tentang model bisnis, pemasaran digital, dan manajemen keuangan dari para mentor ahli.',
        imageUrl: 'https://picsum.photos/seed/berita2/600/400',
        content: `Bertempat di Aula BJB Pandeglang, bootcamp Startup Desa 2025 berhasil memberikan wawasan baru bagi 50 tim yang lolos seleksi berkas. Sesi-sesi yang dibawakan oleh mentor bisnis berpengalaman, seperti Asep Rahmat, mencakup topik-topik krusial mulai dari validasi ide, penyusunan business model canvas, hingga strategi pemasaran digital yang efektif.\n\n"Antusiasme peserta sangat tinggi. Mereka tidak hanya belajar, tetapi juga aktif berdiskusi dan berjejaring. Ini adalah fondasi yang kuat untuk membangun ekosistem wirausaha yang solid di Pandeglang," kata Atih Ardiansyah, selaku pembina program.`
    },
    {
        id: 3,
        title: 'Kolaborasi dengan BJB Pandeglang: Akses Permodalan Dipermudah',
        excerpt: 'Startup Desa 2025 menjalin kemitraan strategis dengan Bank BJB cabang Pandeglang untuk memberikan akses permodalan dan literasi keuangan bagi para finalis.',
        imageUrl: 'https://picsum.photos/seed/berita3/600/400',
        content: `Sebuah langkah maju yang signifikan telah diambil melalui penandatanganan MoU antara panitia Startup Desa 2025 dengan Bank BJB Cabang Pandeglang. Kemitraan ini bertujuan untuk mengatasi salah satu tantangan terbesar bagi wirausaha pemula, yaitu akses permodalan.\n\nFaridha Siregar, Kepala Cabang BJB Pandeglang, menyatakan, "Kami tidak hanya akan memberikan dukungan finansial, tetapi juga pendampingan dalam hal manajemen keuangan. Kami ingin memastikan bahwa bisnis yang lahir dari program ini dapat tumbuh berkelanjutan dan memberikan dampak ekonomi yang nyata bagi masyarakat."`
    }
];

export const DEFAULT_PROFILE_DATA: ProfileData = {
    fullName: 'Admin Startup Desa',
    email: 'cendekiawan.kampung@gmail.com',
    phone1: '+62 838 4868 7828',
    phone2: '0857 1477 5246'
};