// FIX: Import `ReactNode` type from 'react' to resolve 'Cannot find namespace 'React'' error.
import type { ReactNode } from 'react';

export interface TimelineEvent {
  date: string;
  title: string;
}

export interface Testimonial {
  photoUrl: string;
  name: string;
  title: string;
  quote: string;
}

export interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BeritaItem {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    content: string;
}

export interface ProfileData {
    fullName: string;
    email: string;
    phone1: string;
    phone2: string;
}


export interface NavLinkItem {
  name: string;
  path: string;
}

export interface DropdownLink {
    name: string;
    path: string;
}

export interface NavItem {
  name: string;
  path?: string;
  dropdown?: DropdownLink[];
}