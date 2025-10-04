"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { SplitMB } from "../components/Split-media-body";
import { ReactNode } from "react";
import { cn } from "fumadocs-ui/utils/cn";

const lynxModules = ["NPC's", "Scoreboard", "Tab", "Easy Events", "ItemBuilder", "Logging", "Player Meta", "Sceduler"]

export default function HomePage() {
  return (
    <main className="flex flex-1 relative flex-col text-center overflow-x-hidden">

      <Hero />
      
      <Divider className="mt-0" />

        <div
          className=" absolute max-w-screen inset-0 overflow-hidden -z-1"
          >
          <Image className="-z-1 h-full w-full webkit-user-drag user-select-none select-none scale-200 opacity-5 inset-0 blur-[5em] saturate-200" width={256} height={256} alt="logo" src={"https://cdn.undefinedcreations.com/undefinedcreations/logo.png"} />
        </div>
{/* 
      <div className="mt-0 flex flex-col items-start justify-center p-4 container mx-auto">
        <h1 className="text-8xl flex flex-row flex-wrap items-center justify-center gap-2 gap-x-6 font-bold"><Amazing delay={0.5} /> <span>products</span> <span>deserve</span> <Amazing delay={0.75}/> <span>tools</span></h1>
      </div> */}
{/* 
      <Divider /> */}

      {/* <header className="outline-2 outline-neutral-950/25 container mx-auto rounded-xl mt-8 bg-dotted-black relative overflow-hidden h-full py-4 items-center justify-center flex flex-col">
        <div
          className="bg-gradient-to-r from-violet-600 via-red-500 to-amber-500 absolute max-w-screen inset-0 overflow-hidden -z-1"
          >
          <Image className="-z-1 h-full w-full webkit-user-drag user-select-none select-none scale-200 opacity-75 inset-0 blur-[1em] saturate-200" width={256} height={256} alt="logo" src={"https://cdn.undefinedcreations.com/undefinedcreations/logo.png"} />
        </div>
        <div className="z-1 grid grid-cols-2 h-100 w-full container mx-auto gap-4">
          <div className="border relative inset-shadow-neutral-950 inset-shadow-sm rounded-xl bg-neutral-900 w-full">
          </div>
          <div className="border  inset-shadow-neutral-950 inset-shadow-sm rounded-xl bg-neutral-900 w-full"></div>
        </div>
      </header> */}

      <h1 className="text-5xl font-black mb-8 tracking-wider">Ours Solutions</h1>

      <section className="bg-radial from-rose-700/25 to-75% to-transparent">
        <SplitMB
          className="my-16"
          media={{type: "image", src:"https://cdn.undefinedcreations.com/undefinedcreations/website/tpahere.gif"}}
          title="Stellar Command API"
          description="The best way to create commands. With next to no time to develop and maintain, and ease of use with Kotlin features."
          direction="left"
          classNames={{media: "object-center skew-5 scale-150"}}
          link={{href:"/stellar", "label": "Learn more"}}
          />
      </section>

      <section className="">
        <SplitMB
          className="my-16"
          media={{type: "image", src:"https://cdn.undefinedcreations.com/undefinedcreations/website/tpahere.gif"}}
          title="Lynx "
          description={(
            <div className="flex flex-col gap-2">
              <p>A general purpose api with efficient and powerful features to develop with less hassle.</p>
              <div className="flex flex-row flex-wrap gap-1">
                {lynxModules.map((m, i) => <span key={m} className="text-sm rounded bg-neutral-800 px-2 py-1">{m}</span>)}
              </div>
            </div>)}
          direction="right"
          classNames={{media: "object-center skew-5 scale-150"}}
          link={{href:"/lynx", "label": "Learn more"}}
          />
      </section>

      <Divider />
      
    </main>
  );
}

function Divider ({className}:{className?: string}) {
  return (
    <div className={cn("container mx-auto w-full my-24 h-0.5 bg-gradient-to-r to-transparent via-neutral-700 from-transparent", className)} />
  )
}

function Amazing ({delay}:{delay:number}) {
  return (
    <motion.p
      initial={{scale: 3, opacity: 0, filter: "saturate(0px)"}}
      animate={{scale: 1, opacity: 1}}
      transition={{duration: 1, delay, ease: "anticipate"}}
      className="font-black bg-gradient-to-r from-violet-400 via-red-400 to-amber-200 text-transparent bg-clip-text"
      >
      AMAZING
    </motion.p>
  )
}


export function Hero() {
  return (
    <header className="relative w-full overflow-hidden h-200 flex items-center justify-center">
      {/* Background image */}
      <Image
        src="https://cdn.undefinedcreations.com/undefinedcreations/website/code-stock-footage.jpg"
        alt="Hero background"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-0" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-2 h-full container mx-auto text-center text-white px-6">
        <div className="text-start flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Undefined Creations
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          We develop APIs for Minecraft servers. Our aim is to simplify developers'
          work and deliver practical, reliable tools.
        </p>
        </div>

        <motion.div
          initial={{translateY: "100%"}}
          animate={{translateY: "0px"}}
          transition={{duration: 2, ease: "circInOut"}}
          className="h-full absolute right-0 w-1/2"
          >
          <Image quality={100} className="absolute inset-0 object-cover object-top w-full h-full" alt="team" height={927} width={422} src={"/undefined-render.png"} />
        </motion.div>
      </div>
    </header>
  )
}