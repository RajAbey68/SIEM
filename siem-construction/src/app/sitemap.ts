import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://siem.lk",                    lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://siem.lk/about-us",            lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
    { url: "https://siem.lk/services",            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://siem.lk/past-projects",       lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: "https://siem.lk/csr-sustainability",  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: "https://siem.lk/gallery",             lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://siem.lk/our-designs",         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://siem.lk/careers",             lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://siem.lk/news-updates",        lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: "https://siem.lk/contact-us",          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
  ];
}
