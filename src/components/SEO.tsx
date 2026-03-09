import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: object | object[];
  keywords?: string[];
}

const SITE_NAME = 'Axio Hub';
const DEFAULT_DESCRIPTION = 'Zero-Retention AI Agent for enterprise. Deploy an Employee Agent that analyzes documents in ephemeral memory and destroys the source. Enterprise RAG platform with Ghost Protocol security.';
const DEFAULT_KEYWORDS = ['AI Agent', 'Zero-Retention AI', 'Enterprise RAG', 'Employee Agent', 'Zero-Retention AI Agent', 'RAG Platform', 'Secure AI', 'Ghost Protocol', 'Ephemeral AI', 'HIPAA-Ready AI', 'SOC2 AI Agent'];
const DEFAULT_OG_IMAGE = '/og-image.png';
const BASE_URL = 'https://axiohub.io';

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  structuredData,
  keywords = DEFAULT_KEYWORDS,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Zero-Retention AI Agent & Enterprise RAG Platform`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  // Always emit a canonical URL — strip trailing slashes for normalization
  const getCanonicalUrl = () => {
    if (canonical) {
      const normalized = canonical.replace(/\/+$/, '') || '/';
      return `${BASE_URL}${normalized}`;
    }
    // Fallback: use current pathname (works for pages without explicit canonical prop)
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/\/+$/, '') || '/';
      return `${BASE_URL}${path}`;
    }
    return undefined;
  };

  const fullCanonical = getCanonicalUrl();

  const jsonLdData = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Axio Hub" />
      
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : <meta name="robots" content="index,follow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:site_name" content={SITE_NAME} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data (JSON-LD) */}
      {jsonLdData?.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
