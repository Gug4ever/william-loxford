import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://williamloxford.com/sitemap.xml', // TODO: update with live domain
  };
}
