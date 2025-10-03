"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"

export default function ParallaxLogo() {
  const { scrollY } = useScroll()

  // Create a mapped value based on scroll
  const rawY = useTransform(scrollY, [0, 1000], [0, -200])
  const rawScale = useTransform(scrollY, [0, 1000], [0.5, 0.6])
  const rawBlur = useTransform(scrollY, [0, 1000], [0.5, 1])

  // Apply a spring for smooth "follow" motion
  const y = useSpring(rawY, { stiffness: 50, damping: 20, mass: 0.8 })
  const scale = useSpring(rawScale, { stiffness: 50, damping: 20, mass: 0.8 })
  const blur = useSpring(rawBlur, { stiffness: 50, damping: 20, mass: 0.8 })

  return (
    <motion.div
      className="fixed -top-1/4 right-1/3 w-full h-screen overflow-hidden pointer-events-none"
      style={{ y, scale, x: y, filter:(`blur(${blur.get()}px)`) }}
    >
      <Image
        src="/logos/stellar.png"
        alt="stellar-logo"
        width={1920}
        height={800}
        quality={50}
        priority
        className="w-full h-full object-contain opacity-25 blur-2xl saturate-500"
      />
    </motion.div>
  )
}
