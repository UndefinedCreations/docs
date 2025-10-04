"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CodeBlock } from "fumadocs-ui/components/codeblock"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import Image from "next/image"
import { TypeTable } from "fumadocs-ui/components/type-table"
import { Book, Check, Circle, Clock, Cross, File, GitBranch, Github, LucideGitPullRequest, Plus, Share, X } from "lucide-react"
import Link from "next/link"
import { SiKotlin } from "react-icons/si"
import { IoLibrary } from "react-icons/io5"
import { BiSolidError } from "react-icons/bi"
import { MdList } from "react-icons/md"
import ParallaxLogo from "./parallax"
import { SplitMB } from "@/app/components/Split-media-body"

export default function LynxPage() {
  return (
    <main className="p-4 pt-0 flex min-h-screen relative flex-col bg-neutral-900 text-center overflow-hidden">
      <motion.header initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="container outline-2 rounded-b-xl outline-neutral-700 bg-gradient-to-r from-blue-900 to-violet-700 mx-auto relative overflow-hidden h-100 w-full py-4 items-center justify-center flex flex-col">
      {/* <Image src={"/logos/stellar.png"} className="scale-500 opacity-36 blur-[1em] saturate-500" quality={50} fill alt="stellar-logo" /> */}
      {/* <Image src={"/logos/stellar.png"} className="scale-150 rotate-180 blur-[2em] saturate-500" quality={50} fill alt="stellar-logo" /> */}
      <div className="z-0 absolute inset-0 w-full opacity-50 skew-5 scale-150 bg-dotted-black"></div>
      <div className="z-0 absolute inset-0 w-full bg-gradient-to-r opacity-75 from-blue-500 via-transparent to-violet-500"></div>
      <div className="z-1 w-full h-full inset-0 absolute flex flex-col items-center justify-center ">
        <Amazing delay={0} />
      </div>
      </motion.header>
      
      <section className="mt-24 w-full relative container flex flex-row items-center justify-center mx-auto gap-4 md:gap-8">
        <Link href={"/docs/lynx/latest"} className="hover:underline flex flex-row gap-2 text-xl items-center" ><Book /> Documentation</Link>
        {/* <Link href={"/docs/stellar/latest"} className="hover:underline flex flex-row gap-2 text-xl items-center" ><Github /> Github</Link> */}
        {/* <Link href={"/docs/stellar/latest"} className="hover:underline flex flex-row gap-2 text-xl items-center" ><File /> Repository</Link> */}
      </section>

      <Divider />

      <SplitMB
        media={{type: "image", src:"https://cdn.undefinedcreations.com/lynx/display/cusotm-gui-example.gif"}}
        title="Create 3D menus"
        description="With hte use of Display Entities we can easily create a custom game-space GUI."
        direction="left"
        className="h-100"
        link={{label: "See Example", href: "/docs/lynx/latest/modules/display/examples/custom-gui"}}
      />

      <Divider />

      <SplitMB
        media={{type: "image", src:"https://cdn.undefinedcreations.com/undefinedcreations/website/tpahere.gif"}}
        title={(<div className="flex flex-col gap-1"><span className="rounded-t-md">Example Command</span> <span className="font-semibold text-xl px-3 py-1 bg-neutral-800 rounded-md">/tphere</span></div>)}
        description="Here you can see how quickly and easily a tphere command is created using Stellar, utilizing its efficient Kotlin workflow."
        direction="right"
      />

      <Divider />


    </main>
  )
}

function IncludedRow () {
  return (
    <td className="px-4 py-3 text-lime-500 font-semibold text-[0.9em] gap-2"><div className="flex flex-row gap-2 items-center"><Check size={22} strokeWidth={4} className="text-white bg-lime-600 p-1 rounded-md" /> <span className="hidden md:inline">Included</span></div></td>
  )
}
function NotIncludedRow () {
  return (
    <td>{""}</td>
  )
}
function PartialRow () {
  return (
    <td className="px-4 py-3 text-amber-400 font-regular text-[0.9em] gap-2"><div className="flex flex-row gap-2 items-center"><Clock size={22} strokeWidth={2} className="text-amber-400" /><span className="hidden md:inline">Partial</span></div></td>
  )
}

function Divider () {
  return (
    <div className="container mx-auto w-full my-24 h-0.5 bg-gradient-to-r to-transparent via-neutral-700 from-transparent" />
  )
}

// Title animation
function Amazing({ delay }: { delay: number }) {
  return (
    <React.Fragment>
        <motion.div
          initial={{ scale: 2, opacity: 0, letterSpacing: "64px" }}
          animate={{ scale: 1, opacity: 1, letterSpacing: ["4px"] }}
          transition={{ duration: 1, delay, ease: "anticipate" }}
          className="font-black text-shadow-title text-white text-6xl md:7xl lg:text-8xl xl:text-9xl"
          >
          <p className="flex flex-row items-center"><Image src={"/logos/lynx.svg"} className="scale-100 size-20 lg:size-48" quality={100} width={256} height={256} alt="stellar-logo" />Lynx</p>
        </motion.div>
        <motion.div
          initial={{ scale: 2, opacity: 0,  }}
          animate={{ scale: 1, opacity: 1,  }}
          transition={{ duration: 1, delay: 0.5, ease: "anticipate" }}
          className="font-black text-white text-9xl"
          >
          <p className="text-white mb-16 px-4 py-1 rounded-lg text-lg md:text-xl lg:text-2xl font-semibold text-shadow-title">General Purpose API for future servers</p>
        </motion.div>
    </React.Fragment>
  )
}

export function TypingCodeBlock({
  text,
  speed = 50,
}: {
  text: string
  speed?: number
}) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    let i = 0
    let cancelled = false

    const typeChar = () => {
      if (cancelled) return
      if (i <= text.length) {
        setDisplayed(text.slice(0, i)) // <-- slice ensures correctness
        i++
        setTimeout(typeChar, speed)
      }
    }

    setDisplayed("")
    typeChar()

    return () => {
      cancelled = true
    }
  }, [text, speed])

  return (
    <DynamicCodeBlock
      lang="kotlin"
      code={displayed}
      options={{ theme: "dracula-soft" }}
    />
  )
}