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
  "description": "AI-powered knowledge management platform with Ghost Protocol zero-retention security",
  "email": "hello@axiohub.io",
  "sameAs": [
    "https://twitter.com/axiohub"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@axiohub.io"
    },
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "sales@axiohub.io"
    }
  ]
});

export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${BASE_URL}/#software`,
  "name": "Axio Hub",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Knowledge Management",
  "operatingSystem": "Web Browser",
  "description": "The intelligence layer for your files—from personal projects to field ops. AI-powered knowledge management with Ghost Protocol zero-retention security.",
  "url": BASE_URL,
  "image": `${BASE_URL}/favicon.png`,
  "provider": {
    "@id": `${BASE_URL}/#organization`
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "4.99",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": `${BASE_URL}/pricing`,
      "description": "50 files, 100MB storage, 5 data sources, 1M AI tokens/month"
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": `${BASE_URL}/pricing`,
      "description": "2,000 files, 10GB storage, 100 data sources, 10M AI tokens/month, 5 team members"
    }
  ],
  "featureList": [
    "Ghost Protocol Zero-Retention Security",
    "AES-256 Encryption",
    "Multiple Native Integrations",
    "Scope Guard Intelligence",
    "Source Citations",
    "Hybrid AI Search"
  ]
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "name": "Axio Hub",
  "url": BASE_URL,
  "description": "Your Knowledge, Unified. AI-powered knowledge management with Ghost Protocol zero-retention security.",
  "publisher": {
    "@id": `${BASE_URL}/#organization`
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

export const getProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Axio Hub",
  "description": "AI-powered knowledge management with Ghost Protocol zero-retention security",
  "brand": {
    "@type": "Brand",
    "name": "Axio Hub"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "4.99",
    "highPrice": "29",
    "priceCurrency": "USD",
    "offerCount": "3"
  }
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Axio Hub Knowledge Management",
  "description": "Connect your data sources, let AI process and secure them with Ghost Protocol, and chat with your knowledge base.",
  "provider": {
    "@id": `${BASE_URL}/#organization`
  },
  "serviceType": "Knowledge Management Platform",
  "areaServed": "Worldwide"
});
