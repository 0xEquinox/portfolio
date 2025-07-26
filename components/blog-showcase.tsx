"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Card3D } from "@/components/ui/card-3d"

export const BlogShowcase = () => {
  const featuredPosts = [
    {
      title: "Placeholder",
      excerpt: "Placeholder text for a blog post about the latest trends in web development.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "React",
      gradient: "from-blue-500 to-purple-600",
      slug: "placeholder-post",
    },
    {
      title: "Placeholder",
      excerpt: "Placeholder text for a blog post discussing the future of AI in web development.",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "AI",
      gradient: "from-green-500 to-teal-600",
      slug: "placeholder-post",
    },
    {
      title: "Placeholder",
      excerpt: "Placeholder text for a blog post exploring the new features in Next.js 14.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "Next.js",
      gradient: "from-purple-500 to-pink-600",
      slug: "placeholder-post",
    },
  ]

  return (
    <section id="blog" className="py-32 px-6 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Thoughts, insights, and tutorials on modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <Card3D className="h-full rounded-xl">
                  <Card className="h-full rounded-xl bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                    <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/20 text-white border-white/30">{post.category}</Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="ghost"
                        className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </Card3D>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              View All Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
