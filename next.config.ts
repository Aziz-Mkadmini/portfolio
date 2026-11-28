import type { NextConfig } from "next";

// Next's dev runtime (React Refresh) needs eval; production keeps the strict policy.
const scriptSrc =
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'";

// The 3D galleries (public/fakhfakh and public/artiste) need the camera for
// "Voir chez moi", WebXR for wall AR, three.js / model-viewer / QR libraries from jsDelivr,
// Google Fonts and blob: URLs for the generated 3D model and photos. Those permissions are
// granted to /fakhfakh and /artiste only; every other route keeps the strict policy below.
const fakhfakhCsp = [
  "default-src 'self'",
  "img-src 'self' data: blob: https:",
  "media-src 'self' blob: mediastream:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://cdn.jsdelivr.net",
  "connect-src 'self' blob: data: https:",
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

// BIF Cosmétique (public/bif) is a multi-page static e-commerce concept: Google Fonts,
// inline scripts, localStorage cart, WhatsApp links. No camera or third-party scripts.
const bifCsp = [
  "default-src 'self'",
  "img-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const bifHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: bifCsp },
];

// VÉLORIX (public/velorix) is a multi-page static luxury motorcycle concept: scroll-scrubbed
// video and frame sequences, Google Fonts files and remote poster images. No third-party scripts.
const velorixCsp = [
  "default-src 'self'",
  "img-src 'self' data: blob: https:",
  "media-src 'self' blob:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data: https://fonts.gstatic.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const velorixHeaders = bifHeaders.map((h) =>
  h.key === "Content-Security-Policy" ? { ...h, value: velorixCsp } : h,
);

const galleryHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(self), xr-spatial-tracking=(self), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: fakhfakhCsp },
];

const gallerySlugs = ["fakhfakh", "artiste"];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  // /fakhfakh and /artiste -> each gallery's static index.html
  // /bif and /velorix -> the site's home page (a redirect, so relative links between pages keep working)
  async redirects() {
    return [
      { source: "/bif", destination: "/bif/index.html", permanent: false },
      { source: "/bif/", destination: "/bif/index.html", permanent: false },
      { source: "/velorix", destination: "/velorix/index.html", permanent: false },
      { source: "/velorix/", destination: "/velorix/index.html", permanent: false },
    ];
  },
  async rewrites() {
    return gallerySlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/${slug}/index.html`,
    }));
  },
  async headers() {
    return [
      {
        // everything except the two galleries and the BIF and VÉLORIX concepts
        source: "/((?!fakhfakh|artiste|bif/|velorix/).*)",
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
      ...gallerySlugs.flatMap((slug) => [
        { source: `/${slug}/:path*`, headers: galleryHeaders },
        { source: `/${slug}`, headers: galleryHeaders },
      ]),
      { source: "/bif/:path*", headers: bifHeaders },
      { source: "/velorix/:path*", headers: velorixHeaders },
    ];
  },
};

export default nextConfig;
