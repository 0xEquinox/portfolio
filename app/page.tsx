"use client"

import { Navigation } from "@/components/navigation"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { BlogShowcase } from "@/components/blog-showcase"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { CustomCursor } from "@/components/ui/custom-cursor"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <FloatingParticles />
      <Navigation />
      <Header />
      <About />
      <Skills />
      <ProjectsShowcase />
      <BlogShowcase />
      <Contact />
      <Footer />
    </div>
  )
}
