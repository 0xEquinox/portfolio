"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Users } from "lucide-react"
import { Card3D } from "@/components/ui/card-3d"

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 leading-relaxed mb-8"
            >
              I’m a software developer who builds full-stack tools, mobile apps, and real-world software that people use. I’ve worked with small businesses, helped launch a student hackathon, and shipped internal platforms — all while studying Computer Science at the University of Washington (Go Dawgs!).
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-white/70 leading-relaxed"
            >
              When I'm not coding, you'll find me exploring emerging technology, enjoying the pacific northwest scenery, or learning about obscure programming languages. I'm passionate about what I do, and always eager to learn more.
            </motion.p>
          </div>

          {/* Headshot with floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Floating elements around headshot */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"
                animate={{ x: [-5, 5, -5], rotate: [0, 90, 180] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Headshot placeholder */}
              <Card3D>
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                  {/*<img*/}
                  {/*  src="/headshot.png"*/}
                  {/*  alt="John Developer"*/}
                  {/*  className="w-full h-full object-cover rounded-2xl"*/}
                  {/*/>*/}
u
                </div>
              </Card3D>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: "Clean Code", desc: "Maintainable, scalable solutions", delay: 0 },
            { icon: Palette, title: "Design Systems", desc: "Beautiful, consistent UX", delay: 0.1 },
            { icon: Zap, title: "Performance", desc: "Lightning-fast applications", delay: 0.2 },
            { icon: Users, title: "Leadership", desc: "Team collaboration & mentoring", delay: 0.3 },
          ].map((item, index) => (
            <Card3D key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
