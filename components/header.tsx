"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, ChevronDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"

export const Header = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <motion.div className="text-center z-10 max-w-6xl mx-auto px-6" style={{ opacity, scale }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <AnimatedText
            text="Will McDonald"
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-light text-white/80 mb-4">
            Software Developer & Innovator
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            I create digital solutions spanning web applications, AI integrations, mobile apps, and immersive experiences. I'm passionate about leveraging technology to solve real-world problems and enhance user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
              onClick={() => scrollToSection("projects")}
            >
              Explore My Work
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex justify-center space-x-8"
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {social.label}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
      </motion.div>
    </section>
  )
}
