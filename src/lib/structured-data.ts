const BASE_URL = 'https://axiohub.io';

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Axio Hub",
  "url": BASE_URL,
  "logo": `${BASE_URL}/favicon.png`,
  "description": "AI-powered knowledge management platform with Zero-Copy Architecture",
  "email": "support@fittechs.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gayrettepe Mahallesi Yildiz Posta Caddesi Akin Sitesi 8/34",
    "addressLocality": "Besiktas",
    "addressRegion": "Istanbul",
    "addressCountry": "TR"
  }
});

export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Axio Hub",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "The intelligence layer for your files—from personal projects to field ops. AI-powered knowledge management that works with your existing tools.",
  "url": BASE_URL,
  "offers": [
    {
      "@type": "Offer",
      "name": "Individual",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "description": "Free plan with 500MB storage and 50 queries/month"
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "description": "Pro plan with 25GB storage and unlimited queries"
    }
  ],
  "featureList": [
    "Zero-Copy Architecture",
    "AI-Powered Search",
    "Multiple Integrations (Notion, Google Drive, Confluence)",
    "End-to-End Encryption",
    "Real-time Sync"
  ]
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Axio Hub",
  "url": BASE_URL,
  "description": "Your Knowledge, Unified. The intelligence layer for your files.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

export const getFAQSchema = (faqItems: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
