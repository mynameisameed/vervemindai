import React from 'react';
import { Metadata } from 'next';
import ContactClient from './components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | VerveMind AI',
  description: 'Get in touch with VerveMind AI support and deployment teams. Book a strategy call directly on our calendar.',
  alternates: {
    canonical: 'https://vervemindai.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
