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

export default function StellarPage() {
  return (
    <main className="p-4 pt-0 flex min-h-screen relative flex-col bg-neutral-900 text-center overflow-hidden">
      <motion.header initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="container outline-2 rounded-b-xl outline-neutral-700 bg-gradient-to-r from-black via-transparent to-black mx-auto relative overflow-hidden h-100 w-full py-4 items-center justify-center flex flex-col">
      <Image src={"/logos/stellar.png"} className="scale-500 opacity-36 blur-[1em] saturate-500" quality={50} fill alt="stellar-logo" />
      <Image src={"/logos/stellar.png"} className="scale-150 rotate-180 blur-[2em] saturate-500" quality={50} fill alt="stellar-logo" />
      <div className="z-0 absolute inset-0 w-full opacity-50 skew-5 scale-150 bg-dotted-black"></div>
      {/* <div className="z-0 absolute inset-0 w-full bg-gradient-to-r opacity-85 from-rose-500 via-transparent to-amber-200"></div> */}
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
        val target: Player by args
        val message: String by args
        target.sendMessage(message)
    }`}
          speed={10}
        />
      </motion.div>

      
      <section className="mt-48 w-full relative container flex flex-row items-center justify-center mx-auto gap-4 md:gap-8">
        <Link href={"/docs/stellar/latest"} className="hover:underline flex flex-row gap-2 text-xl items-center" ><Book /> Documentation</Link>
        <Link href={"/docs/stellar/latest"} className="hover:underline flex flex-row gap-2 text-xl items-center" ><Github /> Github</Link>
        <Link href={"/docs/stellar/latest"} className="hover:underline flex flex-row gap-2 text-xl items-center" ><File /> Repository</Link>
      </section>

      <Divider />

      <SplitMB
        media={{type: "image", src:"http://cdn.undefinedcreations.com/stellar/gifs/entities/entity.gif"}}
        title="CREATE PROFESSIONAL COMMANDS QUICKLY"
        description="Stellar removes the bloated code required for command creation, and allowing you to focus on features, while Stellar handles the implementation."
        direction="left"
      />

      <Divider />

      <SplitMB
        media={{type: "image", src:"https://cdn.undefinedcreations.com/undefinedcreations/website/tpahere.gif"}}
        title={(<div className="flex flex-col gap-1"><span className="rounded-t-md">Example Command</span> <span className="font-semibold text-xl px-3 py-1 bg-neutral-800 rounded-md">/tphere</span></div>)}
        description="Here you can see how quickly and easily a tphere command is created using Stellar, utilizing its efficient Kotlin workflow."
        direction="right"
      />

      <Divider />

      <section className="mb-25 w-full relative container items-start max-w-5xl mx-auto min-h-75 flex flex-col gap-2 md:gap-4">
          <h1 className="text-3xl">Comparison</h1>
        <table className="rounded-xl outline-1 outline-neutral-800 overflow-hidden w-screen max-w-full text-left text-sm">
          <thead className=" text-gray-200 bg-neutral-800/50 backdrop-blur-2xl">
            <tr>
              <th className="px-4 py-3 border-b">{""}</th>
              <th className="px-4 py-3 border-b font-semibold text-white flex items-center"><Image src={"/logos/stellar.png"} className="scale-150 size-8" quality={100} width={64} height={64} alt="stellar-logo" />Stellar</th>
              <th className="px-4 py-3 border-b font-semibold text-white">CommandAPI</th>
              <th className="px-4 py-3 border-b font-semibold text-white">Lamp</th>
              <th className="px-4 py-3 border-b font-semibold text-white">LiteCommands</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-900/50 backdrop-blur-2xl">
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-300 flex flex-row items-center gap-2"><IoLibrary /> Brigadier Support</td>
              <IncludedRow />
              <IncludedRow />
              <PartialRow />
              <NotIncludedRow />
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-300 flex flex-row items-center gap-2"><SiKotlin />Kotlin Workflow</td>
              <IncludedRow />
              <NotIncludedRow />
              <NotIncludedRow />
              <NotIncludedRow />
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-300 flex flex-row items-center gap-2"><BiSolidError />Failure Executions</td>
              <IncludedRow />
              <NotIncludedRow />
              <PartialRow />
              <PartialRow />
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-300 flex flex-row items-center gap-2"><MdList />Custom Suggestions</td>
              <IncludedRow />
              <IncludedRow />
              <PartialRow />
              <PartialRow />
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-300">Custom Requirements</td>
              <IncludedRow />
              <IncludedRow />
              <IncludedRow />
              <PartialRow />
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-300">Unrestricted Word Argument</td>
              <IncludedRow />
              <NotIncludedRow />
              <NotIncludedRow />
              <NotIncludedRow />
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-300">Cooldown System</td>
              <IncludedRow />
              <NotIncludedRow />
              <IncludedRow />
              <IncludedRow />
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-300">Command Unregistration</td>
              <IncludedRow />
              <IncludedRow />
              <NotIncludedRow />
              <NotIncludedRow />
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-neutral-300">Version Support</td>
              <td className="px-4 py-3 text-neutral-300 font-semibold"><div className="flex flex-row items-center"><span>1.13</span><Plus size={16} strokeWidth={2} className="text-lime-50" /></div></td>
              <td className="px-4 py-3 text-neutral-300 font-semibold"><div className="flex flex-row items-center"><span>1.19.4</span><Plus size={16} strokeWidth={2} className="text-lime-50" /></div></td>
              <td className="px-4 py-3 text-neutral-300 font-semibold"><div className="flex flex-row items-center"><span>1.13</span><Plus size={16} strokeWidth={2} className="text-lime-50" /></div></td>
              <td className="px-4 py-3 text-neutral-300 font-semibold"><div className="flex flex-row items-center"><span>1.8.8</span><Plus size={16} strokeWidth={2} className="text-lime-50" /></div></td>
            </tr>
          </tbody>
        </table>
      </section>
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
          <p className="flex flex-row items-center"><Image src={"/logos/stellar.png"} className="scale-150 size-20 lg:size-48" quality={100} width={256} height={256} alt="stellar-logo" />Stellar</p>
        </motion.div>
        <motion.div
          initial={{ scale: 2, opacity: 0,  }}
          animate={{ scale: 1, opacity: 1,  }}
          transition={{ duration: 1, delay: 0.5, ease: "anticipate" }}
          className="font-black text-white text-9xl"
          >
          <p className="text-white mb-16 px-4 py-1 rounded-lg text-lg md:text-xl lg:text-2xl font-semibold text-shadow-title">Blazingly fast to develop</p>
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