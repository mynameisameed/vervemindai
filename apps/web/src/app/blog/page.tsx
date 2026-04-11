import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';
import BlogPostCard from '../../components/BlogPostCard';

export const metadata: Metadata = {
  title: 'Blog | VerveMind AI — Insights on AI Automation for SMBs',
  description: 'Expert insights on AI voice agents, patient reactivation, and autonomous business automation for MedSpa, Dental, and Home Service businesses.',
  alternates: { canonical: 'https://vervemindai.com/blog' },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ minHeight: '100vh', background: '#09090B', color: '#E5E2E1' }}>
      {/* Header */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '100px 24px 60px' }}>
        <Link href="/" style={{ color: '#71717A', textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 16px' }}>
          The <span style={{ background: 'linear-gradient(135deg, #00DFC1, #00F5D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Intelligence</span> Feed
        </h1>
        <p style={{ color: '#A1A1AA', fontSize: 18, lineHeight: 1.6, maxWidth: 600 }}>
          Deep dives on AI automation, patient reactivation, and the economics of autonomous business operations.
        </p>
      </div>

      {/* Posts Grid */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 100px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        {posts.map((post) => (
          <BlogPostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            category={post.category}
            readTime={post.readTime}
          />
        ))}
      </div>
    </div>
  );
}
