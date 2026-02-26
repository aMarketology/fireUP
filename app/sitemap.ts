import { MetadataRoute } from 'next';
import { contentRegistry } from '@/lib/content-registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fireuphibachi.com';

  // Core site pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-02-26'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-02-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-02-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date('2026-02-26'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-started`,
      lastModified: new Date('2026-02-26'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-02-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Location pages from content registry
  const locationPages: MetadataRoute.Sitemap = contentRegistry.map((entry) => ({
    url: `${baseUrl}${entry.slug}`,
    lastModified: new Date(entry.modifiedDate),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  return [...corePages, ...locationPages];
}
