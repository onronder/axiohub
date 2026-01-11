const BASE_URL = 'https://axiohub.io';

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": "Axio Hub",
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/favicon.png`,
    "width": 512,
    "height": 512
  },
  "description": "AI-powered knowledge management platform with Zero-Copy Architecture",
  "email": "support@fittechs.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gayrettepe Mahallesi Yildiz Posta Caddesi Akin Sitesi 8/34",
    "addressLocality": "Besiktas",
    "addressRegion": "Istanbul",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "support@fittechs.com"
  }
});

export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${BASE_URL}/#software`,
  "name": "Axio Hub",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Knowledge Management",
  "operatingSystem": "Web Browser",
  "description": "The intelligence layer for your files—from personal projects to field ops. AI-powered knowledge management that works with your existing tools.",
  "url": BASE_URL,
  "image": `${BASE_URL}/favicon.png`,
  "provider": {
    "@id": `${BASE_URL}/#organization`
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Individual",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": `${BASE_URL}/#pricing`,
      "description": "Free plan with 500MB storage and 50 queries/month"
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": `${BASE_URL}/#pricing`,
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
  "@id": `${BASE_URL}/#website`,
  "name": "Axio Hub",
  "url": BASE_URL,
  "description": "Your Knowledge, Unified. The intelligence layer for your files.",
  "publisher": {
    "@id": `${BASE_URL}/#organization`
  },
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
  "@id": `${BASE_URL}/faq#faqpage`,
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
