import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts, getFeaturedPosts } from '@/data/blog-posts';
import { getBreadcrumbSchema } from '@/lib/structured-data';

const breadcrumbData = getBreadcrumbSchema([
  { name: "Home", url: "https://axiohub.io" },
  { name: "Blog", url: "https://axiohub.io/blog" }
]);

const Blog = () => {
  const featuredPosts = getFeaturedPosts();
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <SEO 
        title="Blog"
        description="Explore insights on AI knowledge bases, document AI, and enterprise RAG platforms. Learn how to chat with documents, improve productivity, and unlock value from your data."
        canonical="/blog"
        keywords={['AI knowledge base', 'chat with documents', 'enterprise RAG platform', 'document AI blog']}
        ogImage="/og-blog.png"
        structuredData={breadcrumbData}
      />
      <main className="bg-background min-h-screen">
        <Header />
        
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Resources & Insights</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">The </span>
                <span className="gradient-text">Axio Hub Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Practical guides on AI knowledge bases, document intelligence, and the future of enterprise search.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-foreground mb-8"
              >
                Featured Articles
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300 group-hover:bg-primary/5">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {post.category}
                          </span>
                          <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                            Featured
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' 
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8"
            >
              All Articles
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300 group-hover:bg-primary/5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to try AI-powered knowledge management?
              </h2>
              <p className="text-muted-foreground mb-6">
                Connect your data sources, ask questions in plain English, and get answers with citations.
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

export default Blog;
