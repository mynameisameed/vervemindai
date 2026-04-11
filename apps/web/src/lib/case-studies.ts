import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies');

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  results: {
    stat1: string;
    label1: string;
    stat2: string;
    label2: string;
    stat3: string;
    label3: string;
  };
  content: string;
}

export function getAllCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(caseStudiesDirectory);
  const allCaseStudies = fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(caseStudiesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        client: data.client || '',
        industry: data.industry || 'Unknown',
        results: data.results || {},
        content
      } as CaseStudy;
    });

  return allCaseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    const fullPathMdx = path.join(caseStudiesDirectory, `${slug}.mdx`);
    const fullPathMd = path.join(caseStudiesDirectory, `${slug}.md`);
    
    let fileContents = '';
    if (fs.existsSync(fullPathMdx)) {
      fileContents = fs.readFileSync(fullPathMdx, 'utf8');
    } else if (fs.existsSync(fullPathMd)) {
      fileContents = fs.readFileSync(fullPathMd, 'utf8');
    } else {
      return null;
    }

    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      client: data.client || '',
      industry: data.industry || 'Unknown',
      results: data.results || {},
      content
    } as CaseStudy;
  } catch (e) {
    return null;
  }
}
