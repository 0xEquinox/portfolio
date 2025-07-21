"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Javascript", "Flutter","Tailwind CSS", "Svelte", "SvelteKit"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Backend",
      skills: ["Java", "Rust", "Python", "C", "Rocket", "Actix", "PostgreSQL", "MySql"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "CI/CD", "Supabase"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Figma", "Linux"],
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Technologies I use to bring innovative ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-white font-semibold mb-6`}
                >
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-base py-2 px-4 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
