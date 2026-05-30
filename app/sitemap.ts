import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://williamloxford.com'; // TODO: update with live domain
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/works`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/works/the-anagram-stories`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/works/the-vanishing-alphabet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}
