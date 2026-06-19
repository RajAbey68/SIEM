import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Allow locally hosted images in /public (default) + any external domains if needed later
    formats: ["image/avif", "image/webp"],
    // Serve smallest viable image: AVIF first, WebP fallback
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for static images
  },
  // Compress all responses
  compress: true,
};

export default nextConfig;
