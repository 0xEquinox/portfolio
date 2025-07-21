"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { Card3D } from "@/components/ui/card-3d"
import { getProject, getAllProjects } from "@/lib/projects"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getAllProjects()
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <FloatingParticles />
      <Navigation />

      <div className="pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/projects">
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10 rounded-xl">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className={`h-80 bg-gradient-to-br ${project.gradient} rounded-2xl mb-8 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-6 left-6">
                <Badge className="bg-white/20 text-white border-white/30">{project.category}</Badge>
              </div>
              {project.featured && (
                <div className="absolute top-6 right-6">
                  <Badge className="bg-yellow-400 text-black">Featured</Badge>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl">💻</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-white/80 leading-relaxed mb-8">{project.longDescription}</p>

                <div className="flex gap-4 mb-8">
                  <Button className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white rounded-xl`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-xl">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Project Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 ">
                    <div>
                      <p className="text-white/60 text-sm">Timeline</p>
                      <p className="text-white">{project.timeline}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Team Size</p>
                      <p className="text-white">{project.teamSize}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">My Role</p>
                      <p className="text-white">{project.role}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-white/10 text-white border-white/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card3D>
                    <Card className="rounded-xl bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-white/80">{feature}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <Card3D>
                <Card className="rounded-xl bg-white/5 backdrop-blur-sm border-white/10 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-white/80 flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Card3D>

              <Card3D>
                <Card className="rounded-xl bg-white/5 backdrop-blur-sm border-white/10 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="text-white/80 flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Card3D>
            </div>
          </motion.div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Related Projects</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <Link href={`/projects/${relatedProject.slug}`}>
                      <Card3D className="h-full">
                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl overflow-hidden h-full">
                          <div className={`h-40 bg-gradient-to-br ${relatedProject.gradient} relative`}>
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-4xl">💻</div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">
                              {relatedProject.title}
                            </h3>
                            <p className="text-white/60 text-sm line-clamp-2">{relatedProject.description}</p>
                          </div>
                        </div>
                      </Card3D>
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
