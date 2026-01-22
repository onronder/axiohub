import { SEO } from '@/components/SEO';
import { LegalPageLayout, LegalSection, LegalCallout } from '@/components/legal/LegalPageLayout';
import { getBreadcrumbSchema } from '@/lib/structured-data';

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'description', title: 'Description of Service' },
  { id: 'responsibilities', title: 'User Responsibilities' },
  { id: 'ai-disclaimer', title: 'AI Disclaimer' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'subscription', title: 'Subscription & Termination' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact' },
];

const breadcrumbData = getBreadcrumbSchema([
  { name: "Home", url: "https://axiohub.io" },
  { name: "Terms of Service", url: "https://axiohub.io/terms" }
]);

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Read the Terms of Service for Axio Hub. Understand your rights and responsibilities when using our AI knowledge base and enterprise RAG platform."
        canonical="/terms"
        keywords={['AI knowledge base', 'enterprise RAG platform', 'terms of service']}
        structuredData={breadcrumbData}
      />
      <LegalPageLayout
        title="Terms of Service"
        subtitle="Last Updated: December 25, 2025 · Contracting Entity: FITTECHS YAZILIM ANONIM ŞİRKETİ"
        sections={sections}
      >
      <LegalSection id="acceptance" title="1. Acceptance of Terms">
        <p>
          By accessing or using Axio Hub ("the Service"), you agree to be bound by these Terms. 
          If you are using the Service on behalf of an organization (e.g., HOP Energy), you agree 
          to these Terms for that organization.
        </p>
      </LegalSection>

      <LegalSection id="description" title="2. Description of Service">
        <p>
          Axio Hub is an AI-powered knowledge management platform that indexes data from third-party 
          sources (Notion, Google Drive, etc.) to provide search and chat capabilities.
        </p>
      </LegalSection>

      <LegalSection id="responsibilities" title="3. User Responsibilities">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-foreground">Content Ownership:</strong> You retain all rights and ownership 
            of your original files. Axio Hub claims no ownership over your intellectual property.
          </li>
          <li>
            <strong className="text-foreground">Prohibited Content:</strong> You may not process illegal, harmful, 
            or malicious content through Axio Hub.
          </li>
          <li>
            <strong className="text-foreground">API Usage:</strong> You must not reverse engineer or abuse the Axio Hub API.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="ai-disclaimer" title="4. AI Disclaimer">
        <LegalCallout type="warning" title="Important: AI Limitations">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Accuracy:</strong> Axio Hub uses Artificial Intelligence (LLMs). AI can occasionally 
              produce incorrect or misleading information ("hallucinations").
            </li>
            <li>
              <strong>No Professional Advice:</strong> Responses provided by Axio Hub should not be considered 
              professional legal, medical, or financial advice. Always verify critical information from the 
              original source file.
            </li>
          </ul>
        </LegalCallout>
      </LegalSection>

      <LegalSection id="liability" title="5. Limitation of Liability">
        <p>To the maximum extent permitted by law (including Turkish Code of Obligations):</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            FITTECHS YAZILIM A.Ş. shall not be liable for any indirect, incidental, or consequential 
            damages resulting from the use of the Service.
          </li>
          <li>
            Our total liability for any claim is limited to the amount you paid us in the past 12 months.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="subscription" title="6. Subscription & Termination">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Trial Period:</strong> Provided "as is" without warranty. Access is revoked if no valid subscription is active after the trial.</li>
          <li><strong className="text-foreground">Paid Subscriptions:</strong> Billed in advance. Refunds are subject to our Refund Policy.</li>
          <li><strong className="text-foreground">Termination:</strong> We reserve the right to suspend accounts that violate these Terms.</li>
        </ul>
      </LegalSection>

      <LegalSection id="governing-law" title="7. Governing Law & Dispute Resolution">
        <ul className="list-disc pl-6 space-y-2">
          <li>These Terms are governed by the laws of the <strong className="text-foreground">Republic of Turkey</strong>.</li>
          <li>
            Any disputes arising from these Terms shall be resolved in the 
            <strong className="text-foreground"> Courts of Istanbul (Çağlayan/Anadolu)</strong>.
          </li>
          <li>
            <strong className="text-foreground">International Users:</strong> If you reside outside Turkey, 
            local mandatory consumer laws may apply.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="contact" title="8. Contact">
        <p>For any questions regarding these Terms:</p>
        <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-border/50">
          <p><strong className="text-foreground">Company:</strong> FITTECHS YAZILIM ANONIM ŞİRKETİ</p>
          <p><strong className="text-foreground">Email:</strong> support@fittechs.com</p>
          <p><strong className="text-foreground">Address:</strong> Gayrettepe Mahallesi Yildiz Posta Caddesi Akin Sitesi 8/34 Besiktas İstanbul Türkiye</p>
        </div>
      </LegalSection>
      </LegalPageLayout>
    </>
  );
};

export default Terms;
