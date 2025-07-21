"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card3D } from "@/components/ui/card-3d"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { CustomCursor } from "@/components/ui/custom-cursor"

export default function ProjectsPage() {
  const allProjects = [
    {
      title: "ContentMatterz Project Management Dashboard",
      description: "Customizable client focused dashboard providing real-time project insights and seamless integration with existing tools",
      tech: ["Typescript", "React", "Next", "Supabase", "Postgres"],
      github: "#",
      live: "#",
      featured: true,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      category: "Full-Stack",
      slug: "ai-analytics-dashboard",
    },
    {
      title: "AI Personal Finance App",
      description: "Uses a finely tuned AI model to provide personalized financial advice for budgeting, saving, investing, and debt management",
      tech: ["Dart", "Flutter", "Rust", "Rocket", "MySQL"],
      github: "#",
      live: "#",
      featured: true,
      gradient: "from-green-400 via-blue-500 to-purple-600",
      category: "Mobile",
      slug: "blockchain-trading-platform",
    },
    {
      title: "HackPNW",
      description:
        "Founded and ran the biggest high school hackathon in the Pacific Northwest, bringing together over 500 students to learn and innovate",
      tech: ["Svelte", "SvelteKit", "Tailwind CSS", "Node.js", "MongoDB", "MySQL"],
      github: "#",
      live: "#",
      featured: false,
      gradient: "from-yellow-400 via-red-500 to-pink-500",
      category: "Event",
      slug: "ar-shopping-experience",
    },
    {
      title: "Synapse Grade Viewer Mobile App",
      description:
        "Created a mobile app for students in school distrcts using Synergy for their grades, providing a modern and user-friendly interface with new features to help students achieve their gaols",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Redis", "WebRTC"],
      github: "#",
      live: "#",
      featured: false,
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      category: "Full-Stack",
      slug: "realtime-collaboration-tool",
    },
  ]

  const categories = ["All", "Full-Stack", "Blockchain", "Mobile", "AI/ML", "IoT"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? allProjects : allProjects.filter((project) => project.category === selectedCategory)

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
              All Projects
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A comprehensive showcase of my work across different technologies and domains
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "border-white/30 text-white hover:bg-white/10 bg-transparent"
                } px-6 py-2 rounded-full transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/projects/${project.slug}`}>
                  <Card3D className="h-full">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl overflow-hidden">
                      <div
                        className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center`}
                      >
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="w-16 h-16 text-white/80 z-10 text-4xl">💻</div>
                        {project.featured && (
                          <motion.div
                            className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Star className="w-3 h-3" />
                            Featured
                          </motion.div>
                        )}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/20 text-white border-white/30 text-xs">{project.category}</Badge>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech} className="bg-white/10 text-white border-white/20 text-xs px-2 py-1">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge className="bg-white/10 text-white border-white/20 text-xs px-2 py-1">
                              +{project.tech.length - 3} more
                            </Badge>
                          )}
                        </div>

                        <Button className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white w-full rounded-xl`}>
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card3D>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
