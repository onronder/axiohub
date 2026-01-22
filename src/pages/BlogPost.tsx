import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, User, Tag, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, getRecentPosts } from '@/data/blog-posts';
import { getBreadcrumbSchema } from '@/lib/structured-data';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://axiohub.io" },
    { name: "Blog", url: "https://axiohub.io/blog" },
    { name: post.title, url: `https://axiohub.io/blog/${post.slug}` }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Axio Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://axiohub.io/favicon.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://axiohub.io/blog/${post.slug}`
    }
  };

  const relatedPosts = getRecentPosts(3).filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEO 
        title={post.title}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        keywords={post.tags}
        ogType="article"
        ogImage={post.ogImage || '/og-blog.png'}
        structuredData={[breadcrumbData, articleSchema]}
      />
      <main className="bg-background min-h-screen">
        <Header />
        
        {/* Article Header */}
        <section className="pt-32 pb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {post.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border/50 pb-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl mx-auto prose prose-invert prose-lg 
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-muted-foreground prose-ul:my-4
                prose-ol:text-muted-foreground prose-ol:my-4
                prose-li:my-1
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.article>
          </div>
        </section>

        {/* Tags */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 border-t border-border/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">Continue Reading</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.article
                      key={relatedPost.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <Link to={`/blog/${relatedPost.slug}`} className="block">
                        <div className="glass-card p-5 h-full hover:border-primary/30 transition-all duration-300 group-hover:bg-primary/5">
                          <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {relatedPost.category}
                          </span>
                          <h3 className="text-lg font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedPost.description}
                          </p>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Ready to experience it yourself?
              </h2>
              <p className="text-muted-foreground mb-6">
                Try Axio Hub free. Connect your data sources and start chatting with your documents.
              </p>
              <a 
                href="https://app.axiohub.io/register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-medium rounded-full transition-all"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BlogPost;
