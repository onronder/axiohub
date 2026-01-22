import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Send, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { SEO } from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structured-data";

const breadcrumbData = getBreadcrumbSchema([
  { name: "Home", url: "https://axiohub.io" },
  { name: "Contact", url: "https://axiohub.io/contact" }
]);

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Contact"
        description="Contact Axio Hub for questions about our AI knowledge base and enterprise RAG platform. Sales, support, and partnership inquiries."
        canonical="/contact"
        keywords={['AI knowledge base', 'enterprise RAG platform', 'contact Axio Hub']}
        ogImage="/og-contact.png"
        structuredData={breadcrumbData}
      />
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md"
              aria-label="Back to Home page"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
          </div>
        </header>

        <main id="main-content" className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about Axio Hub? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card/50 border border-border/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={errors.name ? "true" : undefined}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive" role="alert">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={errors.email ? "true" : undefined}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive" role="alert">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    aria-invalid={errors.subject ? "true" : undefined}
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-destructive" role="alert">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={errors.message ? "true" : undefined}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive" role="alert">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card/50 border border-border/50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:support@fittechs.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      support@fittechs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 border border-border/50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Company</h3>
                    <p className="text-muted-foreground">
                      FITTECHS YAZILIM ANONIM ŞİRKETİ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/50 border border-border/50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Gayrettepe Mahallesi Yildiz Posta Caddesi<br />
                      Akin Sitesi 8/34 Besiktas<br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 rounded-xl">
                <h3 className="font-medium mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to inquiries within 24-48 hours during business days. For urgent matters, please indicate so in your subject line.
                </p>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Contact;
