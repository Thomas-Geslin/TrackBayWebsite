import type { MetadataRoute } from 'next';

const base = 'https://trackbayapp.com';

const locales = ['en', 'fr', 'es'];

const routes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/privacy_policy', priority: 0.4, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.4, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${base}/${locale}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  );
}
