import React, { useState, useRef } from 'react';

interface AiChatSectionProps {
    className?: string;
}

const AiChatSection: React.FC<AiChatSectionProps> = ({ className = '' }) => {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [hasAsked, setHasAsked] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Simulasi respons AI berdasarkan kata kunci - Diperluas untuk topik bisnis dan startup
    const generateAIResponse = (userMessage: string): string => {
        const lowerMessage = userMessage.toLowerCase();
        
        // === PROGRAM STARTUP DESA ===
        if (lowerMessage.includes('pendaftaran') || lowerMessage.includes('daftar')) {
            return '📝 **Pendaftaran Startup Desa 2025:**\n\n• **Cara Daftar:** Kunjungi halaman "Hubungi Kami" atau klik tombol "Daftar Sekarang" di navbar\n• **Periode:** Pendaftaran dibuka hingga akhir Februari 2025\n• **Dokumen:** KTP, CV, proposal ide bisnis (template tersedia)\n• **Proses:** Online submission → Seleksi berkas → Interview → Pengumuman\n\n💡 **Tips:** Siapkan ide bisnis yang jelas dan sesuai dengan potensi desa Anda!';
        }
        
        if (lowerMessage.includes('syarat') || lowerMessage.includes('persyaratan')) {
            return '✅ **Syarat Peserta Startup Desa 2025:**\n\n**Syarat Umum:**\n• Usia 18-35 tahun\n• WNI dan berdomisili di Kabupaten Pandeglang atau sekitarnya\n• Pendidikan minimal SMA/sederajat\n• Memiliki ide bisnis berbasis potensi desa\n\n**Syarat Khusus:**\n• Berkomitmen mengikuti seluruh rangkaian program (6 bulan)\n• Bersedia bekerja dalam tim\n• Memiliki motivasi tinggi untuk berwirausaha\n• Tidak sedang mengikuti program inkubator lain';
        }
        
        if (lowerMessage.includes('timeline') || lowerMessage.includes('jadwal')) {
            return '📅 **Timeline Program Startup Desa 2025:**\n\n**Januari-Februari 2025:** Pendaftaran & Sosialisasi\n**Maret 2025:** Seleksi Berkas & Interview\n**April-Mei 2025:** Bootcamp Intensif (Business Model, Marketing, Finance)\n**Juni-Agustus 2025:** Mentoring & Pengembangan Produk\n**September 2025:** Pitching Final & Demo Day\n**Oktober 2025:** Pengumuman Pemenang & Penyaluran Dana\n\n⏰ **Durasi Total:** 10 bulan (termasuk masa inkubasi)';
        }
        
        if (lowerMessage.includes('benefit') || lowerMessage.includes('keuntungan') || lowerMessage.includes('manfaat')) {
            return '🎯 **Benefit Program Startup Desa:**\n\n**💰 Financial:**\n• Dana hibah hingga Rp 50 juta untuk startup terpilih\n• Akses ke investor dan lembaga keuangan\n• Pelatihan manajemen keuangan bisnis\n\n**🎓 Knowledge & Skills:**\n• Mentoring intensif dari praktisi berpengalaman\n• Workshop business development, marketing digital, dan teknologi\n• Sertifikat resmi yang diakui industri\n\n**🤝 Network & Support:**\n• Jaringan alumni startup sukses\n• Akses ke komunitas entrepreneur\n• Dukungan teknis dan konsultasi berkelanjutan';
        }
        
        // === STARTUP & BISNIS UMUM ===
        if (lowerMessage.includes('startup') && (lowerMessage.includes('apa itu') || lowerMessage.includes('definisi') || lowerMessage.includes('pengertian'))) {
            return '🚀 **Apa itu Startup?**\n\nStartup adalah perusahaan rintisan yang baru berdiri dan sedang dalam tahap pengembangan untuk mencari model bisnis yang tepat dan dapat berkembang pesat (scalable).\n\n**Karakteristik Startup:**\n• **Inovatif:** Menawarkan solusi baru untuk masalah yang ada\n• **Scalable:** Dapat berkembang dengan cepat\n• **Teknologi-driven:** Memanfaatkan teknologi sebagai enabler\n• **High-risk, High-reward:** Risiko tinggi tapi potensi keuntungan besar\n\n**Tahapan Startup:**\n1. **Ideation** - Pencarian ide\n2. **Validation** - Validasi pasar\n3. **MVP Development** - Produk minimum viable\n4. **Growth** - Pertumbuhan dan ekspansi\n5. **Scale** - Skalabilitas bisnis';
        }
        
        if (lowerMessage.includes('ide bisnis') || lowerMessage.includes('mencari ide') || lowerMessage.includes('ide startup')) {
            return '💡 **Cara Mencari Ide Bisnis yang Tepat:**\n\n**1. Problem-Solution Fit:**\n• Identifikasi masalah di sekitar Anda\n• Cari tahu apakah masalah tersebut dialami banyak orang\n• Pikirkan solusi yang praktis dan efektif\n\n**2. Analisis Potensi Desa:**\n• Produk lokal yang bisa dikembangkan\n• Wisata dan budaya daerah\n• Kerajinan dan industri rumahan\n• Pertanian dan perikanan modern\n\n**3. Tren Teknologi:**\n• E-commerce dan marketplace\n• Fintech dan digital payment\n• Edtech dan online learning\n• Healthtech dan telemedicine\n\n**4. Validasi Ide:**\n• Survey calon customer\n• Buat MVP (Minimum Viable Product)\n• Test market dengan skala kecil';
        }
        
        if (lowerMessage.includes('business model') || lowerMessage.includes('model bisnis') || lowerMessage.includes('revenue model')) {
            return '📊 **Model Bisnis Startup:**\n\n**1. B2C (Business to Consumer):**\n• Menjual langsung ke konsumen akhir\n• Contoh: E-commerce, aplikasi mobile, layanan subscription\n\n**2. B2B (Business to Business):**\n• Menjual ke perusahaan lain\n• Contoh: Software enterprise, konsultan bisnis, supplier\n\n**3. Marketplace:**\n• Platform yang mempertemukan penjual dan pembeli\n• Revenue dari komisi, listing fee, atau subscription\n\n**4. Freemium:**\n• Layanan dasar gratis, fitur premium berbayar\n• Contoh: Spotify, Canva, Zoom\n\n**5. Subscription:**\n• Pembayaran berkala untuk akses layanan\n• Contoh: Netflix, SaaS products\n\n**Canvas Model:** Gunakan Business Model Canvas untuk merancang model bisnis yang komprehensif!';
        }
        
        if (lowerMessage.includes('marketing') || lowerMessage.includes('pemasaran') || lowerMessage.includes('promosi')) {
            return '📢 **Strategi Marketing untuk Startup:**\n\n**Digital Marketing:**\n• **Social Media:** Instagram, TikTok, Facebook untuk brand awareness\n• **Content Marketing:** Blog, video, podcast untuk edukasi customer\n• **SEO/SEM:** Optimasi website dan Google Ads\n• **Email Marketing:** Newsletter dan automated campaigns\n\n**Growth Hacking:**\n• **Viral Marketing:** Konten yang mudah dibagikan\n• **Referral Program:** Insentif untuk customer yang mereferensikan\n• **Partnership:** Kolaborasi dengan brand/influencer lain\n\n**Traditional Marketing:**\n• **Event & Workshop:** Offline engagement\n• **PR & Media:** Press release dan media coverage\n• **Community Building:** Membangun komunitas loyal customer\n\n**Metrics yang Penting:**\n• CAC (Customer Acquisition Cost)\n• LTV (Lifetime Value)\n• Conversion Rate\n• Retention Rate';
        }
        
        if (lowerMessage.includes('funding') || lowerMessage.includes('investasi') || lowerMessage.includes('modal') || lowerMessage.includes('dana')) {
            return '💰 **Sumber Pendanaan Startup:**\n\n**1. Bootstrapping:**\n• Modal sendiri dari tabungan pribadi\n• Keuntungan: Full control, no equity dilution\n• Cocok untuk: Early stage, MVP development\n\n**2. Friends & Family:**\n• Investasi dari kerabat dan teman dekat\n• Biasanya dengan terms yang fleksibel\n\n**3. Angel Investor:**\n• Investor individu dengan pengalaman bisnis\n• Investasi: Rp 100 juta - 2 miliar\n• Bonus: Mentoring dan network\n\n**4. Venture Capital (VC):**\n• Investasi institusional untuk growth stage\n• Investasi: > Rp 5 miliar\n• Ekspektasi: High growth dan exit strategy\n\n**5. Crowdfunding:**\n• Platform seperti Kitabisa, Indiegogo\n• Cocok untuk: Product-based startup\n\n**6. Grant & Hibah:**\n• Program pemerintah seperti Startup Desa\n• Non-dilutive funding (tidak mengurangi kepemilikan)';
        }
        
        if (lowerMessage.includes('mvp') || lowerMessage.includes('minimum viable product') || lowerMessage.includes('prototype')) {
            return '🛠️ **MVP (Minimum Viable Product):**\n\n**Definisi:**\nProduk dengan fitur minimum yang cukup untuk memvalidasi hipotesis bisnis dan mendapatkan feedback dari early adopters.\n\n**Tujuan MVP:**\n• Validasi product-market fit\n• Minimize waktu dan biaya development\n• Mendapatkan feedback real user\n• Iterasi cepat berdasarkan data\n\n**Jenis MVP:**\n• **Landing Page:** Website sederhana untuk test demand\n• **Prototype:** Mockup atau wireframe interaktif\n• **Concierge MVP:** Layanan manual sebelum otomasi\n• **Wizard of Oz:** Backend manual, frontend otomatis\n\n**Langkah Membuat MVP:**\n1. Define core problem yang ingin diselesaikan\n2. Identifikasi fitur essential (bukan nice-to-have)\n3. Build dengan resource minimum\n4. Launch ke target user terbatas\n5. Collect feedback dan iterate\n\n**Tools untuk MVP:** Figma, Bubble, WordPress, atau no-code platforms';
        }
        
        if (lowerMessage.includes('pivot') || lowerMessage.includes('gagal') || lowerMessage.includes('kegagalan')) {
            return '🔄 **Pivot dan Mengatasi Kegagalan:**\n\n**Apa itu Pivot?**\nPerubahan strategi bisnis berdasarkan learning dan feedback, tanpa mengubah visi utama.\n\n**Jenis Pivot:**\n• **Customer Segment:** Ganti target market\n• **Problem:** Fokus ke masalah yang berbeda\n• **Solution:** Ubah cara menyelesaikan masalah\n• **Revenue Model:** Ganti cara monetisasi\n• **Channel:** Ubah cara distribusi\n\n**Kapan Harus Pivot?**\n• Product-market fit tidak tercapai setelah 6-12 bulan\n• Growth rate stagnan atau menurun\n• Customer feedback konsisten negatif\n• Market size ternyata terlalu kecil\n\n**Mengatasi Kegagalan:**\n• **Learn Fast, Fail Fast:** Eksperimen dengan biaya rendah\n• **Data-Driven Decision:** Gunakan metrics, bukan asumsi\n• **Customer-Centric:** Selalu dengarkan customer\n• **Team Resilience:** Bangun mental yang kuat\n\n**Contoh Pivot Sukses:** Twitter (dari podcasting platform), Instagram (dari Burbn), Slack (dari gaming company)';
        }
        
        if (lowerMessage.includes('team') || lowerMessage.includes('co-founder') || lowerMessage.includes('karyawan') || lowerMessage.includes('hiring')) {
            return '👥 **Membangun Tim Startup:**\n\n**Co-Founder Ideal:**\n• **Complementary Skills:** Technical + Business atau Product + Marketing\n• **Shared Vision:** Visi dan nilai yang sama\n• **Commitment:** Dedikasi penuh untuk startup\n• **Trust & Communication:** Komunikasi terbuka dan saling percaya\n\n**Early Team Structure:**\n• **CEO/Founder:** Vision, strategy, fundraising\n• **CTO/Technical Co-founder:** Product development\n• **CMO/Growth:** Marketing dan customer acquisition\n• **CFO:** Finance dan operations (bisa part-time di awal)\n\n**Hiring Strategy:**\n• **Culture Fit:** Attitude over skill (skill bisa dipelajari)\n• **Equity vs Salary:** Balance antara cash dan equity\n• **Remote vs Office:** Hybrid model untuk flexibility\n• **Internship Program:** Talent pipeline dari fresh graduate\n\n**Red Flags:**\n• Co-founder yang tidak commit full-time\n• Skill overlap tanpa complementary\n• Ego clash dan power struggle\n• Tidak ada vesting schedule untuk equity\n\n**Tools:** Slack untuk komunikasi, Notion untuk dokumentasi, GitHub untuk development';
        }
        
        if (lowerMessage.includes('teknologi') || lowerMessage.includes('tech stack') || lowerMessage.includes('development')) {
            return '💻 **Teknologi untuk Startup:**\n\n**Web Development:**\n• **Frontend:** React, Vue.js, Angular\n• **Backend:** Node.js, Python (Django/Flask), PHP (Laravel)\n• **Database:** PostgreSQL, MongoDB, Firebase\n• **Hosting:** AWS, Google Cloud, Vercel, Netlify\n\n**Mobile Development:**\n• **Native:** Swift (iOS), Kotlin (Android)\n• **Cross-platform:** React Native, Flutter\n• **No-code:** Bubble, Adalo, Glide\n\n**No-Code/Low-Code Solutions:**\n• **Website:** WordPress, Webflow, Squarespace\n• **E-commerce:** Shopify, WooCommerce\n• **Database:** Airtable, Notion\n• **Automation:** Zapier, Make (Integromat)\n\n**AI & Machine Learning:**\n• **Chatbot:** Dialogflow, Rasa\n• **Analytics:** Google Analytics, Mixpanel\n• **Recommendation:** TensorFlow, PyTorch\n\n**Prinsip Tech untuk Startup:**\n• **Start Simple:** Gunakan existing solutions dulu\n• **Scalable Architecture:** Siap untuk growth\n• **Security First:** Data protection dari awal\n• **Cost Optimization:** Monitor cloud spending';
        }
        
        if (lowerMessage.includes('legal') || lowerMessage.includes('hukum') || lowerMessage.includes('perizinan') || lowerMessage.includes('pt') || lowerMessage.includes('cv')) {
            return '⚖️ **Aspek Legal Startup:**\n\n**Bentuk Badan Usaha:**\n• **PT (Perseroan Terbatas):** Untuk startup yang akan fundraising\n• **CV (Commanditaire Vennootschap):** Untuk partnership sederhana\n• **Koperasi:** Untuk social enterprise\n• **Yayasan:** Untuk non-profit organization\n\n**Dokumen Penting:**\n• **Akta Pendirian:** Notaris dan Kemenkumham\n• **NPWP Badan:** Untuk perpajakan\n• **NIB (Nomor Induk Berusaha):** OSS (Online Single Submission)\n• **Trademark:** Perlindungan merek dagang\n\n**Intellectual Property:**\n• **Copyright:** Untuk konten dan software\n• **Patent:** Untuk inovasi teknologi\n• **Trade Secret:** Untuk formula/algoritma rahasia\n\n**Kontrak & Agreement:**\n• **Founder Agreement:** Pembagian equity dan tanggung jawab\n• **Employment Contract:** Untuk karyawan\n• **NDA (Non-Disclosure Agreement):** Perlindungan informasi\n• **Terms of Service & Privacy Policy:** Untuk platform digital\n\n**Compliance:**\n• **GDPR/Privacy:** Perlindungan data personal\n• **Pajak:** PPh, PPN, dan pelaporan rutin\n• **Tenaga Kerja:** BPJS, kontrak kerja';
        }
        
        // === PERTANYAAN UMUM PROGRAM ===
        if (lowerMessage.includes('biaya') || lowerMessage.includes('gratis') || lowerMessage.includes('bayar')) {
            return '💸 **Biaya Program Startup Desa 2025:**\n\n✅ **GRATIS 100%!**\n• Tidak ada biaya pendaftaran\n• Tidak ada biaya pelatihan atau mentoring\n• Tidak ada biaya sertifikasi\n• Bahkan peserta terpilih akan mendapat bantuan dana pengembangan bisnis\n\n🎁 **Yang Anda Dapatkan Gratis:**\n• Bootcamp intensif selama 2 bulan\n• Mentoring personal dari ahli\n• Akses ke network investor dan partner\n• Sertifikat resmi\n• Kesempatan mendapat hibah hingga Rp 50 juta\n\n💡 **Investasi Anda:** Hanya waktu, komitmen, dan semangat untuk belajar!';
        }
        
        if (lowerMessage.includes('lokasi') || lowerMessage.includes('tempat') || lowerMessage.includes('dimana')) {
            return '📍 **Lokasi Program:**\n\n**Kabupaten Pandeglang, Provinsi Banten**\n• Venue utama: Gedung Serbaguna Pemkab Pandeglang\n• Beberapa sesi di co-working space lokal\n• Field trip ke UMKM dan startup sukses di daerah\n\n**Format Hybrid:**\n• **Offline:** Bootcamp, workshop hands-on, networking\n• **Online:** Mentoring session, webinar, follow-up\n• **Fleksibilitas:** Untuk peserta dari desa terpencil\n\n**Akomodasi:**\n• Bantuan transportasi untuk peserta luar kota\n• Rekomendasi penginapan dengan harga terjangkau\n• Makan siang disediakan selama bootcamp\n\n**Akses:**\n• 2 jam dari Jakarta via Tol Tangerang-Merak\n• Terminal bus dan stasiun kereta terdekat\n• Koordinat GPS tersedia setelah diterima';
        }
        
        if (lowerMessage.includes('mentor') || lowerMessage.includes('pembimbing')) {
            return '👨‍🏫 **Mentor Program Startup Desa:**\n\n**Praktisi Bisnis:**\n• CEO startup unicorn Indonesia\n• Founder UMKM yang sudah go international\n• Investor dan venture capitalist\n• Digital marketing expert\n\n**Akademisi:**\n• Profesor entrepreneurship dari universitas top\n• Peneliti ekonomi kreatif dan UMKM\n• Pakar teknologi dan inovasi\n\n**Government & NGO:**\n• Pejabat Kemendes dan Kemenkop UKM\n• Direktur lembaga pemberdayaan masyarakat\n• Aktivis pembangunan desa\n\n**Sistem Mentoring:**\n• **1-on-1 Session:** 2 jam per minggu\n• **Group Mentoring:** Workshop dan diskusi\n• **Office Hours:** Konsultasi fleksibel\n• **Alumni Network:** Akses ke komunitas alumni\n\n**Bidang Expertise:** Business strategy, product development, marketing, finance, technology, legal, dan operations';
        }
        
        if (lowerMessage.includes('kontak') || lowerMessage.includes('hubungi')) {
            return '📞 **Hubungi Kami:**\n\n**Official Contact:**\n• **Email:** info@startupdesa.id\n• **WhatsApp:** +62 812-3456-7890\n• **Website:** www.startupdesa.id\n\n**Social Media:**\n• **Instagram:** @startupdesa2025\n• **LinkedIn:** Startup Desa Indonesia\n• **YouTube:** Startup Desa Channel\n\n**Alamat Kantor:**\nJl. Raya Pandeglang No. 123\nKabupaten Pandeglang, Banten 42212\n\n**Jam Operasional:**\n• Senin-Jumat: 08:00 - 17:00 WIB\n• Sabtu: 08:00 - 12:00 WIB\n• WhatsApp 24/7 untuk urgent inquiry\n\n**Tim Support:**\n• **Program Manager:** Budi Santoso\n• **Community Manager:** Sari Dewi\n• **Technical Support:** Ahmad Rizki\n\n💬 **Response Time:** Maksimal 2 jam di hari kerja, 24 jam di weekend';
        }
        
        if (lowerMessage.includes('halo') || lowerMessage.includes('hai') || lowerMessage.includes('hello')) {
            return '👋 **Halo! Selamat datang di AI Assistant Startup Desa 2025!**\n\nSaya siap membantu Anda dengan informasi tentang:\n\n🚀 **Program Startup Desa:**\n• Pendaftaran dan persyaratan\n• Timeline dan jadwal kegiatan\n• Benefit dan peluang funding\n• Mentor dan kurikulum\n\n💼 **Konsultasi Bisnis:**\n• Ide bisnis dan validasi\n• Model bisnis dan strategi\n• Marketing dan customer acquisition\n• Teknologi dan development\n• Legal dan compliance\n• Team building dan hiring\n\n💡 **Apa yang ingin Anda ketahui hari ini?**\n\nKetik pertanyaan Anda atau pilih dari topik di atas!';
        }
        
        if (lowerMessage.includes('terima kasih') || lowerMessage.includes('thanks')) {
            return '🙏 **Sama-sama! Senang bisa membantu!**\n\nJika ada pertanyaan lain tentang:\n• Program Startup Desa 2025\n• Konsultasi bisnis dan startup\n• Informasi lebih detail\n\nJangan ragu untuk bertanya kapan saja!\n\n📞 **Butuh bantuan lebih lanjut?**\nHubungi tim support kami di WhatsApp: +62 812-3456-7890\n\n🚀 **Semoga sukses dengan journey startup Anda!**';
        }
        
        // Default response dengan topik yang lebih luas
        return '🤖 **AI Assistant Startup Desa siap membantu!**\n\nSaya bisa membantu Anda dengan berbagai topik:\n\n**📋 Program Startup Desa 2025:**\n• Pendaftaran, syarat, timeline, benefit, biaya, lokasi, mentor, kontak\n\n**🚀 Konsultasi Startup & Bisnis:**\n• Ide bisnis dan validasi pasar\n• Model bisnis dan revenue stream\n• MVP development dan product strategy\n• Marketing dan customer acquisition\n• Funding dan investasi\n• Team building dan hiring\n• Teknologi dan tech stack\n• Legal dan compliance\n• Pivot dan mengatasi kegagalan\n\n💡 **Contoh pertanyaan:**\n"Bagaimana cara validasi ide bisnis?"\n"Apa itu MVP dan bagaimana membuatnya?"\n"Strategi marketing untuk startup baru?"\n"Sumber funding untuk startup early stage?"\n\n**Silakan tanyakan apa saja yang ingin Anda ketahui!**';
    };

    const handleAnalyze = async () => {
        if (!inputText.trim()) return;

        setIsLoading(true);
        setHasAsked(true);

        // Simulasi delay untuk respons AI
        setTimeout(() => {
            const aiResponse = generateAIResponse(inputText);
            setResponse(aiResponse);
            setIsLoading(false);
        }, 1500 + Math.random() * 1000); // 1.5-2.5 detik delay
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAnalyze();
        }
    };

    const handleReset = () => {
        setInputText('');
        setResponse('');
        setHasAsked(false);
        setIsLoading(false);
        inputRef.current?.focus();
    };

    const quickQuestions = [
        'Bagaimana cara mendaftar program?',
        'Apa itu startup dan bagaimana memulainya?',
        'Bagaimana cara validasi ide bisnis?',
        'Strategi marketing untuk startup baru?',
        'Sumber funding untuk startup?',
        'Bagaimana membangun MVP?'
    ];

    const handleQuickQuestion = (question: string) => {
        setInputText(question);
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    return (
        <section className={`py-20 bg-white ${className}`}>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-3 py-2 mb-4 md:mb-6">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09z" />
                            </svg>
                            <span className="text-xs md:text-sm font-medium text-green-600">AI Powered Business Solutions</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            Konsultan AI untuk Startup & Bisnis Anda
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg px-4">
                            Tanyakan apa saja tentang startup, bisnis, dan program Startup Desa 2025. 
                            Dapatkan panduan lengkap dari ide hingga eksekusi bisnis yang sukses.
                        </p>
                    </div>

                    {/* Main Input Area */}
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 md:p-8 mb-6 md:mb-8">
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <textarea
                                    ref={inputRef}
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Contoh: Bagaimana cara memvalidasi ide bisnis saya? Atau: Saya punya ide aplikasi untuk petani, bagaimana langkah selanjutnya?"
                                    className="w-full h-24 md:h-32 p-3 md:p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400 text-sm md:text-base"
                                    disabled={isLoading}
                                />
                            </div>
                            
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="hidden sm:inline">Tanyakan tentang startup, bisnis, atau program Startup Desa</span>
                                    <span className="sm:hidden">Tanyakan apa saja</span>
                                </div>
                                
                                <div className="flex gap-2 md:gap-3 w-full sm:w-auto">
                                    {hasAsked && (
                                        <button
                                            onClick={handleReset}
                                            className="px-4 md:px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm md:text-base"
                                        >
                                            Reset
                                        </button>
                                    )}
                                    <button
                                        onClick={handleAnalyze}
                                        disabled={!inputText.trim() || isLoading}
                                        className="flex-1 sm:flex-none px-6 md:px-8 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span className="hidden sm:inline">Menganalisis...</span>
                                                <span className="sm:hidden">Loading...</span>
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                                Tanya AI
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Response Area */}
                    {(response || isLoading) && (
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-8">
                            {isLoading ? (
                                <div className="flex items-center justify-center py-6 md:py-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                                        <span className="text-gray-600 text-sm md:text-base">AI sedang menganalisis masalah Anda...</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex items-center gap-2 text-green-600 font-medium">
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09z" />
                                        </svg>
                                        <span className="text-sm md:text-base">Rekomendasi AI</span>
                                    </div>
                                    <div className="prose prose-gray max-w-none">
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">{response}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Quick Questions */}
                    {!hasAsked && (
                        <div className="mt-8">
                            <p className="text-center text-sm text-gray-500 mb-4">Atau pilih pertanyaan umum:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
                                {quickQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuickQuestion(question)}
                                        className="bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-green-600 transition-all duration-200 text-left"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="text-center mt-8">
                        <p className="text-xs text-gray-400">
                            AI Assistant menggunakan informasi terkini tentang startup, bisnis, dan program Startup Desa 2025. 
                            Untuk konsultasi mendalam, hubungi mentor program kami.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiChatSection;
  
                    {/* Bottom Section - Dari Ide ke Dashboard Cerdas */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Dari Ide ke Dashboard Cerdas
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                            Proses pengembangan yang terstruktur untuk hasil maksimal
                        </p>
                        
                        {/* Process Steps */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 md:w-7 md:h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Analisis Kebutuhan</h4>
                                <p className="text-xs md:text-sm text-gray-600">Identifikasi masalah dan peluang bisnis</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Pengembangan Solusi</h4>
                                <p className="text-xs md:text-sm text-gray-600">Merancang dan membangun sistem</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 md:w-7 md:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Dashboard Cerdas</h4>
                                <p className="text-xs md:text-sm text-gray-600">Monitoring dan analisis real-time</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 md:w-7 md:h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Implementasi</h4>
                                <p className="text-xs md:text-sm text-gray-600">Eksekusi dan optimasi berkelanjutan</p>
                            </div>
                        </div>
                    </div>