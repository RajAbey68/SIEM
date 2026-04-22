import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "News & Updates | Siem Construction",
  description: "Latest news, project updates and announcements from Siem Construction.",
};

const placeholderNews = [
  { title: "Siem Construction completes Phase 1 of Crystal Sands", date: "March 2024", excerpt: "Our team has successfully completed the structural phase of the Crystal Sands luxury residential development in Colombo." },
  { title: "Safety First: Annual training programme completed", date: "January 2024", excerpt: "All site staff have completed the annual health and safety certification programme in line with our zero-incident commitment." },
  { title: "New partnership with leading BIM software provider", date: "November 2023", excerpt: "Siem Construction has adopted Autodesk Revit across all projects as part of our Design-Build transformation initiative." },
];

export default function NewsUpdates() {
  return (
    <PageLayout title="News & Updates" breadcrumbs={[{ label: "Home", href: "/" }, { label: "News & Updates" }]}>
      <div className="container-site section-pad">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem", alignItems: "start" }} className="news-grid">
          {/* News list */}
          <div>
            <div style={{ background: "var(--brand-teal-light)", border: "1px solid var(--brand-teal)", borderRadius: "4px", padding: "1rem 1.25rem", marginBottom: "2rem" }}>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--brand-teal)", margin: 0, fontWeight: 600 }}>
                🚧 This section is being updated. Content below is illustrative — real news to be added post-launch.
              </p>
            </div>
            {placeholderNews.map((post) => (
              <article key={post.title} style={{ borderBottom: "1px solid var(--brand-border)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "var(--brand-teal)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                  {post.date}
                </p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--brand-heading)", marginBottom: "0.5rem" }}>
                  {post.title}
                </h3>
                <p style={{ color: "var(--brand-body)", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ border: "1px solid var(--brand-border)", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ background: "var(--brand-teal)", padding: "0.75rem 1rem" }}>
                <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", fontWeight: 600, color: "#fff", margin: 0 }}>Quick Links</h4>
              </div>
              <div style={{ padding: "1rem" }}>
                {[["External Links", "/news-updates/external-links"], ["Gallery", "/gallery"], ["Past Projects", "/past-projects"]].map(([label, href]) => (
                  <a key={href} href={href} style={{ display: "block", color: "var(--brand-teal)", fontFamily: "var(--font-ui)", fontSize: "0.85rem", textDecoration: "none", padding: "0.4rem 0", borderBottom: "1px solid var(--brand-border)" }}>
                    › {label}
                  </a>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/ai-news-csr.png" alt="Siem CSR activities — AI Visualisation Placeholder" width={400} height={280} style={{ width: "100%", height: "auto" }} />
              <p style={{ fontSize: "0.72rem", color: "var(--brand-body)", fontFamily: "var(--font-ui)", textAlign: "center", fontStyle: "italic", marginTop: "0.4rem" }}>
                AI Visualisation · Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .news-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}
