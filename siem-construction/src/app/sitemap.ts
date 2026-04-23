import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://siem-construction.vercel.app",                    lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://siem-construction.vercel.app/about-us",            lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
    { url: "https://siem-construction.vercel.app/services",            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://siem-construction.vercel.app/past-projects",       lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: "https://siem-construction.vercel.app/csr-sustainability",  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: "https://siem-construction.vercel.app/gallery",             lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://siem-construction.vercel.app/our-designs",         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://siem-construction.vercel.app/careers",             lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://siem-construction.vercel.app/news-updates",        lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: "https://siem-construction.vercel.app/contact-us",          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
  ];
}
