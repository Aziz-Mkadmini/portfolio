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
        name: `${site.name} — ${site.title}`,
        alternateName: site.titleEn,
        description: site.tagline,
        serviceType: [
          "Automatisation n8n et agents IA",
          "Qualification de leads et réponse client automatisée",
          "Création et refonte de sites web",
          "Développement de SaaS et de tableaux de bord",
        ],
        availableLanguage: ["fr", "en", "ar"],
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
