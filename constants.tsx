
import React from 'react';
import type { TimelineEvent, Testimonial, Benefit, FaqItem, NavItem, BeritaItem, ProfileData } from './types';

// Icons
const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);
const ImpactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const AmalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);
const IqraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);
const AspireIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
);
const ScholarshipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);


export const NAV_LINKS: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Amgala Vision', path: '/amgala-vision' },
    { name: 'Amgala Impact', path: '/amgala-impact' },
    { name: 'Programs', path: '/benefit' },
    { name: 'About', path: '/tentang' },
    { name: 'Stories', path: '/faq' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
    { date: '2018', title: 'Foundation Established' },
    { date: '2019', title: 'First Scholarship Program' },
    { date: '2020', title: 'Amgala Vision Launch' },
    { date: '2021', title: 'Amgala Impact Initiative' },
    { date: '2022', title: 'National Expansion' },
    { date: '2023', title: '1000+ Youth Engaged' },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        photoUrl: '/components/src/photo-1517180102446-f3ece451e9d8.jpeg',
        name: 'Sari Wijaya',
        title: 'Scholarship Recipient - Amgala Vision',
        quote: 'Thanks to Amgala Foundation\'s scholarship, I was able to pursue my dream of studying engineering. The mentorship program helped me develop both academically and personally. Now I\'m working as a software engineer and giving back to my community.'
    },
    {
        photoUrl: '/components/src/photo-1523240795612-9a054b0db644.jpeg',
        name: 'Ahmad Rahman',
        title: 'Program Graduate - Amgala Impact',
        quote: 'The leadership development program transformed my perspective on community service. I learned valuable skills in project management and public speaking. Today, I lead youth initiatives in my village and have impacted over 200 young people.'
    },
    {
        photoUrl: '/components/src/photo-1524178232363-1fb2b075b655.jpeg',
        name: 'Maya Putri',
        title: 'Mentee - Amgala Mengaji',
        quote: 'Through the Quran recitation program, I not only improved my tajwid but also gained confidence in myself. The supportive environment and dedicated teachers made learning enjoyable. I now teach younger children in my community.'
    },
    {
        photoUrl: '/components/src/photo-1559027615-cd4628902d4a.jpeg',
        name: 'Rizki Hernawan',
        title: 'Youth Leader - Amgala Vision',
        quote: 'The scholarship opened doors I never thought possible. Beyond financial support, the mentorship and networking opportunities helped me secure internships at top tech companies. I\'m now pursuing my master\'s degree while working part-time.'
    }
];

export const BENEFITS: Benefit[] = [
    {
        icon: <VisionIcon />,
        title: 'Amgala Vision',
        description: 'Academic & Technology Excellence through scholarships, STEM competitions, and mentoring that turn knowledge into impact for Indonesian youth.'
    },
    {
        icon: <ImpactIcon />,
        title: 'Amgala Impact',
        description: 'Social & Community Leadership movement of young volunteers and social entrepreneurs transforming communities across Indonesia.'
    },
    {
        icon: <AmalIcon />,
        title: 'Amal by Amgala',
        description: 'Aid that supports children and youth: building wells for pesantren, bridges for schools, rice for santri, and mosques that nurture values.'
    },
    {
        icon: <IqraIcon />,
        title: 'Iqra by Amgala',
        description: 'Quran and character at the core—nurturing leadership grounded in faith and integrity through Tahsin, Tajwid, and Islamic education.'
    },
    {
        icon: <AspireIcon />,
        title: 'Aspire by Amgala',
        description: 'Stories that spark action—podcasts and media to inspire the next wave of changemakers and young Indonesian leaders.'
    },
    {
        icon: <ScholarshipIcon />,
        title: 'Scholarship Programs',
        description: 'Comprehensive scholarship support for Indonesian youth pursuing higher education with mentorship and professional development.'
    }
];

export const FAQ_ITEMS: FaqItem[] = [
    {
        question: 'What is Amgala Foundation?',
        answer: 'Amgala Foundation is a youth empowerment organization dedicated to nurturing Indonesian children and youth to become future leaders grounded in Islamic values, academic excellence, and social responsibility. We operate through three main pillars: Amgala Vision, Amgala Impact, and our core programs (Amal, Iqra, Aspire).'
    },
    {
        question: 'How can I apply for Amgala scholarships?',
        answer: 'You can apply for our scholarship programs through our website. We offer various scholarships for STEM education, Islamic studies, and leadership development. Applications typically include academic records, essays, and recommendations. Visit our "Join Amgala Youth" section for detailed application guidelines.'
    },
    {
        question: 'What is the difference between Amgala Vision and Amgala Impact?',
        answer: 'Amgala Vision focuses on Academic & Technology Excellence through scholarships, STEM competitions, and mentoring. Amgala Impact focuses on Social & Community Leadership, developing young volunteers and social entrepreneurs who transform their communities through various projects and initiatives.'
    },
    {
        question: 'How can I become a volunteer with Amgala Foundation?',
        answer: 'We welcome volunteers who want to make a meaningful impact in Indonesian youth development. You can contribute through educational mentoring, program support, or community outreach. We offer flexible time commitments with both remote and on-site opportunities. Join our 800+ volunteer community!'
    },
    {
        question: 'What are the Amal, Iqra, and Aspire programs?',
        answer: 'Amal by Amgala provides aid and infrastructure support (wells, bridges, rice for santri, mosque renovations). Iqra by Amgala focuses on Quranic education and character building through Tahsin, Tajwid, and Islamic leadership programs. Aspire by Amgala creates inspiring content through podcasts and media featuring youth innovators and social movers.'
    },
    {
        question: 'In which cities does Amgala Foundation operate?',
        answer: 'We currently operate in 15+ cities across Indonesia, with our main office in Jakarta (Menara Caraka, Mega Kuningan). Our programs reach youth in various provinces, and we continue expanding our presence to serve more Indonesian communities nationwide.'
    }
];

export const BERITA_ITEMS: BeritaItem[] = [
    {
        id: 1,
        title: 'Amgala Youth Program Reaches 1,200+ Indonesian Students',
        excerpt: 'Amgala Foundation celebrates a major milestone as our youth empowerment programs successfully engage over 1,200 students across 15+ cities in Indonesia.',
        imageUrl: 'https://picsum.photos/seed/youth1/600/400',
        content: `Our comprehensive youth development programs have reached a significant milestone, engaging over 1,200 Indonesian students through our Amgala Vision and Amgala Impact initiatives. The programs focus on academic excellence, STEM education, and community leadership development.\n\nThrough scholarships, mentoring, and hands-on projects, we're nurturing the next generation of Indonesian leaders who combine academic achievement with strong Islamic values and social responsibility. Our participants have shown remarkable growth in both personal development and community impact.`
    },
    {
        id: 2,
        title: 'Infrastructure Development: 25+ Community Projects Completed',
        excerpt: 'Amal by Amgala successfully completes 25+ infrastructure projects including wells for pesantren, bridges for schools, and mosque renovations across Indonesia.',
        imageUrl: 'https://picsum.photos/seed/infrastructure/600/400',
        content: `Our Amal by Amgala program has made significant strides in community infrastructure development, completing over 25 projects that directly benefit Indonesian communities. These projects include building wells for pesantren, constructing bridges to improve school access, and renovating mosques that serve as community centers.\n\nEach project is carefully selected based on community needs and implemented with the help of our 800+ volunteer network. The impact extends beyond physical infrastructure, as these projects strengthen community bonds and provide practical learning experiences for our youth participants.`
    },
    {
        id: 3,
        title: 'Scholarship Success: 150+ Students Supported in Higher Education',
        excerpt: 'Amgala Foundation\'s scholarship program celebrates the success of 150+ Indonesian students who have received comprehensive academic and mentorship support.',
        imageUrl: 'https://picsum.photos/seed/scholarship/600/400',
        content: `Our scholarship program has successfully supported over 150 Indonesian students in pursuing higher education, with a focus on STEM fields and Islamic studies. Beyond financial support, our scholars receive comprehensive mentorship, professional development opportunities, and networking access.\n\n"The scholarship program doesn't just provide funding—it creates a supportive ecosystem that helps students thrive academically and personally," said Andintya Maris, Chairwoman of Amgala Foundation. "We're proud to see our scholars becoming leaders in their fields and giving back to their communities."`
    }
];

export const DEFAULT_PROFILE_DATA: ProfileData = {
    fullName: 'Amgala Foundation Admin',
    email: 'info@amgalafoundation.org',
    phone1: '+62 21 5794 1234',
    phone2: '+62 812 3456 7890'
};