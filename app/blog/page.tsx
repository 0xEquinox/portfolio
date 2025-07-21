"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Card3D } from "@/components/ui/card-3d"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { useState } from "react"
import { CustomCursor } from "@/components/ui/custom-cursor"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const allPosts: any[] = []
  const categories = ["All", "React", "Next.js", "TypeScript", "AI", "CSS", "Database", "Architecture", "Performance"]

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <FloatingParticles />
      <Navigation />

      <div className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link href="/">
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10 mb-8 rounded-xl">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blog Posts
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Thoughts, insights, and tutorials on modern web development and technology
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md rounded-xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4 rounded-xl" />
                <Input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded-xl pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-400"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "border-white/30 text-white hover:bg-white/10 bg-transparent"
                  } px-4 py-2 rounded-full transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Featured Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <Card3D className="h-full">
                        <Card className="rounded-xl h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                          <div className={`h-64 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-white/20 text-white border-white/30">{post.category}</Badge>
                            </div>
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-yellow-400 text-black">Featured</Badge>
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
                            <CardTitle className="text-white group-hover:text-purple-400 transition-colors text-xl">
                              {post.title}
                            </CardTitle>
                            <CardDescription className="text-white/70">{post.excerpt}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform flex items-center">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                          </CardContent>
                        </Card>
                      </Card3D>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-white">
              {selectedCategory === "All" ? "All Posts" : `${selectedCategory} Posts`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card3D className="h-full">
                      <Card className="rounded-xl h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
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
                          <div className="text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform flex items-center">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </CardContent>
                      </Card>
                    </Card3D>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <p className="text-white/60 text-lg">No posts found matching your criteria.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
