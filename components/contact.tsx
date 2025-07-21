"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-t from-purple-900/20 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm always excited to work on innovative solutions and collaborate
            with forward-thinking teams.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
