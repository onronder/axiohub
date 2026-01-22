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
const DEFAULT_DESCRIPTION = 'Connect all your data sources to one AI knowledge base. Chat with documents securely. Enterprise RAG platform with zero-retention security.';
const DEFAULT_KEYWORDS = ['AI knowledge base', 'chat with documents', 'enterprise RAG platform', 'multi-source document AI', 'ChatGPT for company documents'];
const DEFAULT_OG_IMAGE = '/favicon.png';
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
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | AI Knowledge Base - Chat with Documents`;
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

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
