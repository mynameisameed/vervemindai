import React from 'react';
import { Metadata } from 'next';
import PricingClient from './components/PricingClient';

export const metadata: Metadata = {
  title: 'Pricing | VerveMind AI',
  description: 'Transparent pricing for our AI receptionist and autonomous reactivation engines. Calculate your ROI and book a strategy call.',
  alternates: {
    canonical: 'https://vervemindai.com/pricing',
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
