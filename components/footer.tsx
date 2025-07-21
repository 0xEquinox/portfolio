"use client"

import { motion } from "framer-motion"

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/60"
        >
          © 2024 Will McDonald. Crafted with passion using Next.js and lots of ☕
        </motion.p>
      </div>
    </footer>
  )
}
