import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | VerveMind AI Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://vervemindai.com/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: `https://vervemindai.com/blog/${post.slug}` },
  };
}

function renderMarkdown(content: string) {
  // Simple markdown-to-HTML renderer for blog posts
  let html = content
    // Headers
    .replace(/^### (.*$)/gm, '<h3 style="font-size:20px;font-weight:700;color:#fff;margin:32px 0 12px;letter-spacing:-0.02em">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 style="font-size:28px;font-weight:700;color:#fff;margin:48px 0 16px;letter-spacing:-0.03em">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 style="font-size:clamp(32px,5vw,48px);font-weight:800;color:#fff;margin:0 0 24px;letter-spacing:-0.04em;line-height:1.1">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#fff;font-weight:600">$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote style="border-left:3px solid #00F5D4;padding:12px 20px;margin:24px 0;background:rgba(0,245,212,0.04);border-radius:0 12px 12px 0;color:#d4d4d8;font-style:italic">$1</blockquote>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#00F5D4;text-decoration:underline;text-underline-offset:4px" target="_blank" rel="noopener">$1</a>')
    // Tables
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.every(c => /^[\s-]+$/.test(c))) return ''; // separator row
      const isHeader = cells.some(c => c.includes('**') || /^[A-Z]/.test(c.trim()));
      const tag = 'td';
      const cellsHtml = cells.map(c => `<${tag} style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.06);color:#d4d4d8;font-size:14px">${c.trim()}</${tag}>`).join('');
      return `<tr>${cellsHtml}</tr>`;
    })
    // Horizontal rules
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:48px 0"/>')
    // Unordered lists
    .replace(/^- (.*$)/gm, '<li style="color:#A1A1AA;margin:8px 0;padding-left:8px">$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gm, '<li style="color:#A1A1AA;margin:8px 0;padding-left:8px">$1</li>')
    // Paragraphs (lines that don't start with HTML tags)
    .replace(/^(?!<[a-zA-Z])((?!^\s*$).+)$/gm, '<p style="color:#A1A1AA;font-size:17px;line-height:1.8;margin:16px 0">$1</p>');

  // Wrap table rows in table elements
  html = html.replace(/((<tr>[\s\S]*?<\/tr>\s*)+)/g, '<div style="overflow-x:auto;margin:24px 0"><table style="width:100%;border-collapse:collapse;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;overflow:hidden">$1</table></div>');

  return html;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author, url: 'https://www.linkedin.com/company/vervemind-ai' },
    publisher: { '@type': 'Organization', name: 'VerveMind AI', url: 'https://vervemindai.com' },
    mainEntityOfPage: `https://vervemindai.com/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vervemindai.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vervemindai.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://vervemindai.com/blog/${post.slug}` }
    ]
  };

  return (
    <div style={{ minHeight: '100vh', background: '#09090B', color: '#E5E2E1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px 120px' }}>
        {/* Back Link */}
        <Link href="/blog" style={{ color: '#71717A', textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40 }}>
          <ArrowLeft size={14} /> All Articles
        </Link>

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 999,
            background: 'rgba(0,245,212,0.1)', color: '#00F5D4',
            border: '1px solid rgba(0,245,212,0.2)',
          }}>{post.category}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#52525B', fontSize: 13 }}>
            <Calendar size={13} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#52525B', fontSize: 13 }}>
            <Clock size={13} /> {post.readTime}
          </span>
        </div>

        {/* Content */}
        <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />

        {/* Bottom CTA */}
        <div style={{
          background: 'linear-gradient(180deg, rgba(0,245,212,0.06) 0%, rgba(0,223,193,0.02) 100%)',
          border: '1px solid rgba(0,245,212,0.15)',
          borderRadius: 24, padding: 40, textAlign: 'center', marginTop: 64,
        }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>Ready to see it in action?</h3>
          <p style={{ color: '#A1A1AA', fontSize: 16, margin: '0 0 24px' }}>Book a free 15-minute demo and see how VerveMind AI works for your business.</p>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px',
            borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none',
            background: 'linear-gradient(135deg, #00DFC1, #00F5D4)', color: '#09090B',
            boxShadow: '0 8px 24px rgba(0,245,212,0.2)',
          }}>
            Book Your Demo →
          </a>
        </div>
      </article>
    </div>
  );
}
