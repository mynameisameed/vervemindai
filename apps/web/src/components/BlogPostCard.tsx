"use client";

import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

const categoryColors: Record<string, string> = {
  MedSpa: '#a78bfa',
  Dental: '#38bdf8',
  Industry: '#00F5D4',
  Roofing: '#fb923c',
  General: '#909099',
};

export default function BlogPostCard({ slug, title, description, date, category, readTime }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20,
        padding: 'clamp(24px, 4vw, 40px)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,245,212,0.2)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,245,212,0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 999,
            background: `${categoryColors[category] || '#909099'}20`,
            color: categoryColors[category] || '#909099',
            border: `1px solid ${categoryColors[category] || '#909099'}30`,
          }}>
            {category}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: 13 }}>
            <Calendar size={13} /> {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: 13 }}>
            <Clock size={13} /> {readTime}
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 12px', color: 'var(--text)', lineHeight: 1.3 }}>
          {title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
          {description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#00F5D4', fontSize: 14, fontWeight: 600 }}>
          Read Article <ArrowRight size={16} />
        </div>
      </article>
    </Link>
  );
}
