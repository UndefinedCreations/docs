"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CodeBlock } from "fumadocs-ui/components/codeblock"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import Image from "next/image"
import VideoPlayer from "@/app/components/hsl-video"

export default function HomePage() {
  return (
    <main className="p-4 pt-0 flex min-h-screen relative flex-col bg-neutral-900 text-center overflow-hidden">
      <motion.header initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="container outline-2 rounded-b-xl outline-neutral-700 bg-gradient-to-r from-rose-400 transaprent to-blue-500 mx-auto relative overflow-hidden h-100 w-screen py-4 items-center justify-center flex flex-col">
      <VideoPlayer
        className="w-full h-full blur-sm z-0 absolute inset-0 object-cover opacity-75"
        controls={false} loop muted playsInline autoPlay src={"https://bamblingen.no/api/v1/files/video?v=20250927-b47fc640b07187e5"}
        />
      <div className="z-1 w-full h-full inset-0 absolute flex flex-col items-center justify-center ">
        <Amazing delay={0} />
      </div>
      </motion.header>

      <motion.div
        className="absolute top-120 left-1/2 -translate-1/2 rounded-xl p-0 h-auto max-w-4xl mx-auto shadow-md text-left"
        initial={{ translateY: 0, opacity: 0 }}
        animate={{ translateY: -50, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "anticipate" }}
      >
        <TypingCodeBlock
          text={`StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution<Player> {
        val target = getArgument<Player>("target")
        val message = getArgument<String>("message")
        target.sendMessage(message)
    }`}
          speed={10}
        />
      </motion.div>
    </main>
  )
}

// Title animation
function Amazing({ delay }: { delay: number }) {
  return (
    <React.Fragment>
        <motion.div
          initial={{ scale: 2, opacity: 0, letterSpacing: "64px" }}
          animate={{ scale: 1, opacity: 1, letterSpacing: "8px" }}
          transition={{ duration: 1, delay, ease: "anticipate" }}
          className="font-black text-shadow-title text-white text-9xl"
          >
          <Image className="mb-2" alt="akari" unoptimized width={320} height={100} src={"/logos/akari.svg"} ></Image>
        </motion.div>
        <motion.div
          initial={{ scale: 2, opacity: 0,  }}
          animate={{ scale: 1, opacity: 1,  }}
          transition={{ duration: 1, delay: 0.5, ease: "anticipate" }}
          className="font-black text-white text-9xl"
          >
          <p className="text-white bg-neutral-900 px-4 py-1 rounded-lg border border-neutral-600 text-2xl font-semibold text-shadow-title">In-game cinematics, no mods</p>
        </motion.div>
    </React.Fragment>
  )
}

// Typewriter effect, but using fumadocs-ui's CodeBlock for formatting
function TypingCodeBlock({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i])
        i++
      } else {
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return <DynamicCodeBlock
  lang="Kotlin"
  code={displayed}
  options={{ theme: "dracula-soft" }}
/>
}
