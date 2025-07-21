"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <motion.div className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}
