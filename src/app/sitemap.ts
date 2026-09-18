import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const pages: { path: string; changeFrequency: 'weekly' | 'monthly'; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/menu', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/clients', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/gallery', changeFrequency: 'monthly', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
