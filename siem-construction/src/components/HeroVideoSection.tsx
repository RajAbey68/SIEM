"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Play } from "lucide-react";

export default function HeroVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        background: "var(--teal-950)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.35,
        }}
        poster="https://siem.lk/wp-content/uploads/2016/05/slider-02.jpg"
      >
        {/* Video source — replace with actual footage */}
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(4,31,31,0.92) 0%, rgba(13,79,79,0.7) 50%, rgba(139,58,26,0.4) 100%)",
        }}
      />

      {/* Decorative vertical line */}
      <div
        style={{
          position: "absolute",
          left: "6rem",
          top: 0,
          bottom: 0,
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent)",
        }}
        className="hide-sm"
      />

      {/* Content */}
      <div
        className="container-site"
        style={{
          position: "relative",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <div>
          {/* Eyebrow */}
          <p
            className="eyebrow animate-fade-up"
            style={{ marginBottom: "1.5rem", color: "var(--terra-400)" }}
          >
            Integrated Project Delivery · Sri Lanka
          </p>

          {/* Main Heading */}
          <h1
            className="display-xl animate-fade-up"
            style={{
              color: "var(--white)",
              marginBottom: "1.5rem",
              animationDelay: "0.1s",
            }}
          >
            We Built
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
              }}
            >
              Sri Lanka.
            </span>
            <br />
            <span style={{ color: "var(--teal-300)" }}>Now We</span>
            <br />
            Build the Future.
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "540px",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              animationDelay: "0.2s",
            }}
          >
            Established 1993. Re-born 2026. Siem Construction combines three
            decades of Sri Lankan mastery with BIM-driven Design-Build
            standards — delivering certainty at scale.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              animationDelay: "0.3s",
            }}
          >
            <a href="#projects" className="btn btn-primary">
              <Play size={14} />
              View Our Projects
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
        </div>

        {/* Stats column */}
        <div
          className="hide-sm animate-fade-up"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            minWidth: "180px",
            animationDelay: "0.4s",
          }}
        >
          {[
            { value: "33+", label: "Years Operating" },
            { value: "200+", label: "Projects Delivered" },
            { value: "100%", label: "Client Retention" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                borderLeft: "2px solid var(--terra-500)",
                paddingLeft: "1.25rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "0.4rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "rgba(255,255,255,0.4)",
          animation: "bounce 2s infinite",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ArrowDown size={14} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          .hide-sm { display: none !important; }
        }
      `}</style>
    </section>
  );
}
