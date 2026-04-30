import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.tagline,
      },
      {
        "@type": "ProfilePage",
        name: site.name,
        url: site.url,
        mainEntity: {
          "@type": "Person",
          name: site.name,
          jobTitle: site.title,
          url: site.url,
          email: site.email,
          sameAs: [site.linkedin, site.github],
        },
      },
      {
        "@type": "ProfessionalService",
        name: `${site.name} — Software Engineering & AI Solutions`,
        serviceType: [
          "Software engineering",
          "AI solutions development",
          "Full-stack web development",
          "Business process automation",
        ],
        areaServed: "Worldwide",
        url: site.url,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
