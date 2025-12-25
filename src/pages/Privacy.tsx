import { LegalPageLayout, LegalSection, LegalCallout } from '@/components/legal/LegalPageLayout';

const sections = [
  { id: 'introduction', title: 'Introduction & Scope' },
  { id: 'zero-copy', title: 'Zero-Copy Architecture' },
  { id: 'data-collection', title: 'Data We Collect' },
  { id: 'data-usage', title: 'How We Use Your Data' },
  { id: 'data-sharing', title: 'Data Sharing' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'security', title: 'Security Measures' },
  { id: 'contact', title: 'Contact Us' },
];

const Privacy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Effective Date: December 25, 2025 · Data Controller: FITTECHS YAZILIM ANONIM ŞİRKETİ"
      sections={sections}
    >
      <LegalSection id="introduction" title="1. Introduction & Scope">
        <p>
          Welcome to Axio Hub. We are committed to protecting your personal data. This Privacy Policy 
          explains how we collect, use, and safeguard your information in compliance with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong className="text-foreground">GDPR</strong> (General Data Protection Regulation - EU)</li>
          <li><strong className="text-foreground">KVKK</strong> (Personal Data Protection Law No. 6698 - Turkey)</li>
          <li><strong className="text-foreground">CCPA</strong> (California Consumer Privacy Act - USA)</li>
        </ul>
      </LegalSection>

      <LegalSection id="zero-copy" title="2. The Zero-Copy Architecture">
        <LegalCallout type="important" title="Critical: Your Files Stay Where They Are">
          <p>
            Unlike traditional cloud storage, Axio Hub operates on a <strong>Zero-Copy Architecture</strong>. 
            We DO NOT store your original files. Your PDFs, Notion pages, and Drive documents remain 
            hosted on your original platforms.
          </p>
        </LegalCallout>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-foreground">Vector Processing:</strong> We process your documents to create 
            "Vector Embeddings" (mathematical representations of text) to enable AI search.
          </li>
          <li>
            <strong className="text-foreground">Ephemeral Processing:</strong> Once the vectors are generated, 
            the raw text content is discarded from our processing memory. We only retain the encrypted 
            vectors and metadata (file names, URLs).
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="data-collection" title="3. Data We Collect">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Identity Data:</strong> Name, email address, profile picture (via OAuth).</li>
          <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information.</li>
          <li><strong className="text-foreground">Usage Data:</strong> Search queries, chat history, and interaction logs.</li>
          <li><strong className="text-foreground">Vector Data:</strong> Encrypted mathematical representations of your knowledge base content.</li>
        </ul>
      </LegalSection>

      <LegalSection id="data-usage" title="4. How We Use Your Data">
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide the AI Search and Chat service.</li>
          <li>To synchronize your "Vector Index" with your source platforms (Notion, Drive).</li>
          <li>To improve our AI models (only aggregate, anonymized usage data; never your private content).</li>
          <li>To comply with legal obligations (KVKK/GDPR).</li>
        </ul>
      </LegalSection>

      <LegalSection id="data-sharing" title="5. Data Sharing & Sub-processors">
        <p>
          We share data only with trusted third-party service providers (Sub-processors) necessary to run the service:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong className="text-foreground">Supabase:</strong> Database and Vector Storage (Encryption at Rest).</li>
          <li>
            <strong className="text-foreground">OpenAI / LLM Providers:</strong> For generating answers. 
            <em className="text-muted-foreground/80"> Note: We have "Zero-Data Retention" agreements with our AI providers. They do not train on your data.</em>
          </li>
          <li><strong className="text-foreground">AWS:</strong> Cloud Infrastructure.</li>
        </ul>
      </LegalSection>

      <LegalSection id="your-rights" title="6. Your Rights (GDPR, KVKK, CCPA)">
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong className="text-foreground">Access:</strong> Request a copy of the data we hold about you.</li>
          <li><strong className="text-foreground">Rectification:</strong> Correct inaccurate data.</li>
          <li><strong className="text-foreground">Erasure (Right to be Forgotten):</strong> Request deletion of your account and all associated Vector Indices.</li>
          <li><strong className="text-foreground">Portability:</strong> Receive your data in a structured format.</li>
          <li><strong className="text-foreground">KVKK Article 11:</strong> Residents of Turkey have specific rights to inquire about data processing status.</li>
        </ul>
      </LegalSection>

      <LegalSection id="security" title="7. Security Measures">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Row-Level Security (RLS):</strong> Ensures you can only access your own vectors.</li>
          <li><strong className="text-foreground">Encryption:</strong> All data is encrypted in transit (TLS 1.2+) and at rest (AES-256).</li>
          <li><strong className="text-foreground">OAuth Tokens:</strong> We store access tokens in an encrypted vault and never see your passwords.</li>
        </ul>
      </LegalSection>

      <LegalSection id="contact" title="8. Contact Us">
        <p>For any privacy concerns or to exercise your rights:</p>
        <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-border/50">
          <p><strong className="text-foreground">Company:</strong> FITTECHS YAZILIM ANONIM ŞİRKETİ</p>
          <p><strong className="text-foreground">Email:</strong> support@fittechs.com</p>
          <p><strong className="text-foreground">Address:</strong> Gayrettepe Mahallesi Yildiz Posta Caddesi Akin Sitesi 8/34 Besiktas İstanbul Türkiye</p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default Privacy;
