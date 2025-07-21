"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "hero", label: "Home", isSection: true, href: "/" },
    { id: "about", label: "About", isSection: true, href: isHomePage ? undefined : "/#about" },
    { id: "skills", label: "Skills", isSection: true, href: isHomePage ? undefined : "/#skills" },
    { id: "projects", label: "Projects", isSection: false, href: "/projects" },
    { id: "blog", label: "Blog", isSection: false, href: "/blog" },
    { id: "contact", label: "Contact", isSection: true, href: isHomePage ? undefined : "/#contact" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-xl border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
             WM
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.isSection && isHomePage ? (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative capitalize transition-colors ${
                      activeSection === item.id ? "text-purple-400" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                        layoutId="activeSection"
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className={`text-white/70 hover:text-white transition-colors capitalize ${
                      pathname === item.href ? "text-purple-400" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
