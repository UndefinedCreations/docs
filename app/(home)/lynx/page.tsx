"use client"

import React, { useState, useEffect, useRef } from "react"
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
import TypingCodeBlock from "@/app/components/typing-code-block"

type CodeExample = {
  code: string,
  title: string,
}

const examples: CodeExample[] = [
  {
    "title": "Spawn NPC",
    "code": "location.spawnNPC(\n    name = \"FakePlayer\",\n    skin = Skin(texture, signature)\n).onClick {\n    sender.sendMessage(clickType.name)\n}.setScale(10.0)"
  },
  {
    "title": "Nick Player",
    "code": "player.setName(newName)\nplayer.setSkin(Skin(texture, signature))"
  },
  {
    "title": "Sidebar/Scoreboard",
    "code": "sidebar(\"Survival\") {\n    addEmptyLine()\n    addUpdatablePlayerLine { \"${ChatColor.AQUA}${it.name}\" }\n    addUpdatablePlayerTimerLine(20) { \"${ChatColor.RED}Kills : ${ChatColor.GRAY}${it.getStatistic(Statistic.PLAYER_KILLS)}\" }\n    addUpdatablePlayerTimerLine(20) { \"${ChatColor.DARK_PURPLE}Deaths : ${ChatColor.GRAY}${it.getStatistic(Statistic.DEATHS)}\" }\n    addUpdatablePlayerTimerLine(20) { \"${ChatColor.DARK_AQUA}Ping : ${ChatColor.GRAY}${it.ping}\" }\n    addEmptyLine()\n    addUpdatablePlayerTimerLine(20) { \"${ChatColor.AQUA}Rank : ${ChatColor.GRAY}OWNER\" }\n    addUpdatableTimerLine(20) { \"${ChatColor.AQUA}Online : ${ChatColor.GRAY}${Bukkit.getOnlinePlayers().size}\" }\n    addEmptyLine()\n}"
  },
  {
    "title": "Scheduler",
    "code": "delay(20) {\n Bukkit.broadcastMessage(\"Hello World!!\")\n}"
  }
]


export default function LynxPage() {

  const [codeExample, setCodeExample] = useState<CodeExample | null>(null)

  useEffect(() => {
    setCodeExample(examples[Math.floor(Math.random() * examples.length)])
  }, [])

  return (
    <main className="p-4 pt-0 flex min-h-screen relative flex-col bg-neutral-900 text-center overflow-hidden">
      <motion.header initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className="container outline-2 rounded-b-xl outline-neutral-700 bg-gradient-to-r from-blue-900 to-violet-700 mx-auto relative overflow-hidden h-100 w-full py-4 items-center justify-center flex flex-col">
      <div className="z-0 absolute inset-0 w-full opacity-50 skew-5 scale-150 bg-dotted-black"></div>
      <div className="z-0 absolute inset-0 w-full bg-gradient-to-r opacity-75 from-blue-500 via-transparent to-violet-500"></div>
      <div className="z-1 w-full h-full inset-0 absolute flex flex-col items-center justify-center ">
        <Amazing delay={0} />
      </div>
      </motion.header>

      <motion.div
        className="rounded-xl p-0 h-auto max-w-4xl mx-auto shadow-md text-left"
        initial={{ translateY: -75, opacity: 0 }}
        animate={{ translateY: -75, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "anticipate" }}
      >
        {codeExample && <h2 className="text-xl bg-neutral-800/75 border-2 border-b-0 border-neutral-800/25 backdrop-blur-3xl mb-0 rounded-none rounded-t-md px-4 py-1 w-fit">{codeExample?.title}</h2>}
        {codeExample && <TypingCodeBlock
          text={codeExample?.code || ""}
          onComplete={()=>{}}
          speed={5}
          className={"rounded-tl-none rounded-b-2xl border-neutral-800/25"}
        />}
      </motion.div>
      
      <section className="w-full relative container flex flex-row items-center justify-center mx-auto gap-4 md:gap-8">
        <Link href={"/docs/lynx/latest"} className="hover:underline flex flex-row gap-2 text-xl items-center" ><Book /> Documentation</Link>
        <Link href={"https://github.com/UndefinedCreations/Lynx"} className="hover:underline flex flex-row gap-2 text-xl items-center" ><Github /> Github</Link>
        {/* <Link href={"/docs/stellar/latest"} className="hover:underline flex flex-row gap-2 text-xl items-center" ><File /> Repository</Link> */}
      </section>

      <Divider />
      <section className="mb-32 h-fit">
        <SplitMB
          media={{type: "image", src:"https://cdn.undefinedcreations.com/undefinedcreations/website/group-photo.png"}}
          title="Spawn NPCs"
          description="You can spawn player specific NPCs. You can use this to create mirrored NPC skins, make the npc look at the player, or simply hide unimportant ones from other players."
          direction="right"
          // link={{label: "See Example", href: "/docs/lynx/latest/modules/display/examples/custom-gui"}}
          />
      </section>
      <section className="mb-32 h-fit">
        <SplitMB
          media={{type: "image", src:"https://cdn.discordapp.com/attachments/1366490793212117137/1424847782216208394/Adobe_Express_-_Untitled_1.gif?ex=68e57067&is=68e41ee7&hm=4cdda1c77708035178dd0470a47214bd7834cb2d1ebcbfb7f1eb3ebb2a44a217&"}}
          title="Edit players names"
          description="You can even nick players with protocols to make client specific changes. Imagine giving different names to teammates in a minigame or a friend prefix."
          direction="left"
          classNames={{media: "object-center scale-125"}}
          // link={{label: "See Example", href: "/docs/lynx/latest/modules/display/examples/custom-gui"}}
          />
      </section>
      <section className="mb-32 h-fit">
        <SplitMB
          media={{type: "image", src:"https://cdn.discordapp.com/attachments/1366490793212117137/1424850149154357288/2025-10-06_22.03.45.png?ex=68e5729b&is=68e4211b&hm=f022bd8331c59d5047c1393e4977301e30f783b1126a6416a7ab168a6724dcca&"}}
          title="Client-side sidebar"
          description="Easy to create with no flickering and a scoreboard per player Due to its smart client-side implementation this sidebar will only be rendered on the client as the server only handles delivering its content."
          direction="right"
          classNames={{media: "object-right scale-100"}}
          />
      </section>
      <section className="mb-32">
        <SplitMB
          media={{type: "image", src:"https://cdn.undefinedcreations.com/lynx/display/cusotm-gui-example.gif"}}
          title="Easily create complex & performant features"
          description="In this example Lynx leverages NMS and Packet Display Entities to create, player-specific GUIs without using Spigot's performance-heavy API, saving server resources."
          direction="left"
          classNames={{media: "object-contain max-w-fit rounded-md mx-auto flex items-center justify-center"}}
          link={{label: "See Example", href: "/docs/lynx/latest/modules/display/examples/custom-gui"}}
          />
        </section>

      <Divider />


    </main>
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