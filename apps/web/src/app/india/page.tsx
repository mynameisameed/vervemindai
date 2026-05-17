import React from 'react';
import { Metadata } from 'next';
import IndiaClient from './IndiaClient';

export const metadata: Metadata = {
  title: 'AI Automation for Indian Businesses | VerveMind AI',
  description: 'WhatsApp-first AI receptionist for dental clinics, MedSpas, hospitals, and real estate brokers in India. Multilingual AI in Telugu, Hindi-Urdu, and English. INR pricing starting at ₹14,999/month.',
  alternates: { canonical: 'https://vervemindai.com/india' },
  openGraph: {
    title: 'VerveMind AI India — WhatsApp-First AI for Bharat',
    description: 'AI receptionist that answers calls, books appointments, and follows up on WhatsApp in Telugu, Hindi & English. Starting ₹14,999/mo.',
    type: 'website',
    url: 'https://vervemindai.com/india',
  },
};

export default function IndiaPage() {
  return <IndiaClient />;
}
