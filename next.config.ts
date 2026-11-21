import type { NextConfig } from "next";

// Next's dev runtime (React Refresh) needs eval; production keeps the strict policy.
const scriptSrc =
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'";

// The Fakhfakh gallery (public/fakhfakh, a standalone client demo) needs the camera for
// "Voir chez moi", WebXR for wall AR, three.js / model-viewer / QR libraries from jsDelivr,
// Google Fonts and blob: URLs for the generated 3D model and photos. Those permissions are
// granted to /fakhfakh only; every other route keeps the strict policy below.
const fakhfakhCsp = [
  "default-src 'self'",
  "img-src 'self' data: blob: https:",
  "media-src 'self' blob: mediastream:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
  "connect-src 'self' blob: data: https:",
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  // /fakhfakh -> the gallery's static index.html
  async rewrites() {
    return [{ source: "/fakhfakh", destination: "/fakhfakh/index.html" }];
  },
  async headers() {
    return [
      {
        // everything except the Fakhfakh gallery
        source: "/((?!fakhfakh).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; img-src 'self' data: https:; media-src 'self'; style-src 'self' 'unsafe-inline'; ${scriptSrc}; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';`,
          },
        ],
      },
      {
        source: "/fakhfakh/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(self), xr-spatial-tracking=(self), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: fakhfakhCsp },
        ],
      },
      {
        source: "/fakhfakh",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(self), xr-spatial-tracking=(self), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: fakhfakhCsp },
        ],
      },
    ];
  },
};

export default nextConfig;
