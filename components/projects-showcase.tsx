"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card3D } from "@/components/ui/card-3d"

export const ProjectsShowcase = () => {
  const featuredProjects = [
    {
      title: "ContentMatterz Project Management Dashboard",
      description: "Customizable client focused dashboard providing real-time project insights and seamless integration with existing tools",
      tech: ["Typescript", "React", "Next", "Supabase", "Postgres"],
      github: "#",
      live: "#",
      featured: true,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      slug: "placeholder-project",
    },
    {
      title: "AI Personal Finance App",
      description: "Uses a finely tuned AI model to provide personalized financial advice for budgeting, saving, investing, and debt management",
      tech: ["Dart", "Flutter", "Rust", "Rocket", "MySQL"],
      github: "#",
      live: "#",
      featured: true,
      gradient: "from-green-400 via-blue-500 to-purple-600",
      slug: "placeholder-project",
    },
  ]

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">A showcase of my most innovative and impactful work</p>
        </motion.div>

        <div className="space-y-32 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Link href={`/projects/${project.slug}`}>
                  <Card3D>
                    <div
                      className={`relative h-80 rounded-2xl bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="w-24 h-24 text-white/80 z-10 text-6xl">💻</div>
                      {project.featured && (
                        <motion.div
                          className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Star className="w-4 h-4" />
                          Featured
                        </motion.div>
                      )}
                    </div>
                  </Card3D>
                </Link>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-white"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/80 mb-6 leading-relaxed"
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-xl">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 rounded-xl`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </motion.div>
              </div>
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
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
