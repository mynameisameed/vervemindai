import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCaseStudies, getCaseStudyBySlug } from '../../../lib/case-studies';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map(cs => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};

  return {
    title: `${study.title} | VerveMind Case Studies`,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      type: 'article',
    },
    alternates: { canonical: `https://vervemindai.com/case-studies/${study.slug}` },
  };
}

function renderMarkdown(content: string) {
  let html = content
    .replace(/^### (.*$)/gm, '<h3 style="font-size:20px;font-weight:700;color:#fff;margin:32px 0 12px;letter-spacing:-0.02em">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 style="font-size:28px;font-weight:700;color:#fff;margin:48px 0 16px;letter-spacing:-0.03em">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 style="font-size:clamp(32px,5vw,48px);font-weight:800;color:#fff;margin:0 0 24px;letter-spacing:-0.04em;line-height:1.1">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#fff;font-weight:600">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^> ([\s\S]*?)(?=\n\n|\n$)/gm, '<blockquote style="border-left:3px solid #00F5D4;padding:12px 20px;margin:32px 0;background:rgba(0,245,212,0.04);border-radius:0 12px 12px 0;color:#d4d4d8;font-size:18px;font-style:italic">$1</blockquote>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#09090B;text-decoration:none;background:#FFF;padding:12px 24px;border-radius:12px;font-weight:700;display:inline-flex;margin-top:24px" target="_blank" rel="noopener">$1</a>')
    .replace(/^- (.*$)/gm, '<li style="color:#d4d4d8;margin:12px 0;padding-left:12px;display:flex;align-items:flex-start;gap:12px"><span style="color:#00F5D4;margin-top:4px">✓</span> $1</li>')
    .replace(/^(?!<[a-zA-Z])((?!^\s*$).+)$/gm, '<p style="color:#A1A1AA;font-size:18px;line-height:1.7;margin:16px 0">$1</p>');
  
  // Wrap list items
  html = html.replace(/((<li[\s\S]*?<\/li>\s*)+)/g, '<ul style="list-style:none;padding:0;margin:24px 0">$1</ul>');

  return html;
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return (
    <div style={{ minHeight: '100vh', background: '#09090B', color: '#E5E2E1' }}>
      
      {/* Article Header */}
      <header style={{ padding: '160px 24px 80px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'radial-gradient(circle at top, rgba(0,245,212,0.05), transparent 60%)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link href="/case-studies" style={{ color: '#71717A', textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40 }}>
            <ArrowLeft size={14} /> All Case Studies
          </Link>
          
          <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, color: '#FFF', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24 }}>
            {study.title}
          </h1>
          <p style={{ fontSize: 20, color: '#A1A1AA', lineHeight: 1.6, marginBottom: 40 }}>
            {study.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24, background: 'rgba(255,255,255,0.02)', padding: 32, borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
            <div>
              <div style={{ fontSize: 13, color: '#71717A', fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>{study.results.label1}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#FFF' }}>{study.results.stat1}</div>
            </div>
            <div>
              <div style={{ fontSize: 13, color: '#71717A', fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>{study.results.label2}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#00F5D4' }}>{study.results.stat2}</div>
            </div>
            <div>
              <div style={{ fontSize: 13, color: '#71717A', fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>{study.results.label3}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#FFF' }}>{study.results.stat3}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Body */}
      <article style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px 120px' }}>
        <div dangerouslySetInnerHTML={{ __html: renderMarkdown(study.content) }} />
      </article>

    </div>
  );
}
