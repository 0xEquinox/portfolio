"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <FloatingParticles />
      <Navigation />

      <div className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10 rounded-xl">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className={`h-64 bg-gradient-to-br ${post.gradient} rounded-2xl mb-8 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-6 left-6">
                <Badge className="bg-white/20 text-white border-white/30">{post.category}</Badge>
              </div>
              {post.featured && (
                <div className="absolute top-6 right-6">
                  <Badge className="bg-yellow-400 text-black">Featured</Badge>
                </div>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/70 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-white/30 text-white/70">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-xl text-white/80 leading-relaxed">{post.excerpt}</p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <MarkdownRenderer content={post.content} />
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Related Posts</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl overflow-hidden h-full">
                        <div className={`h-32 bg-gradient-to-br ${relatedPost.gradient} relative`}>
                          <div className="absolute inset-0 bg-black/20" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-white/60 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
