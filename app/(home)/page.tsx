"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { SplitMB } from "../components/Split-media-body";

export default function HomePage() {
  return (
    <main className="flex flex-1 relative flex-col text-center overflow-x-hidden">

        <div
          className=" absolute max-w-screen inset-0 overflow-hidden -z-1"
          >
          <Image className="-z-1 h-full w-full webkit-user-drag user-select-none select-none scale-200 opacity-5 inset-0 blur-[5em] saturate-200" width={256} height={256} alt="logo" src={"https://cdn.undefinedcreations.com/undefinedcreations/logo.png"} />
        </div>

      <div className="mt-8 flex flex-col items-start justify-center p-4 container mx-auto">
        <h1 className="text-8xl flex flex-row flex-wrap items-center justify-center gap-2 gap-x-6 font-bold"><Amazing delay={0.5} /> <span>products</span> <span>deserve</span> <Amazing delay={0.75}/> <span>tools</span></h1>
      </div>

      <header className="outline-2 outline-neutral-950/25 container mx-auto rounded-xl mt-8 bg-dotted-black relative overflow-hidden h-full py-4 items-center justify-center flex flex-col">
        <div
          className="bg-gradient-to-r from-violet-600 via-red-500 to-amber-500 absolute max-w-screen inset-0 overflow-hidden -z-1"
          >
          <Image className="-z-1 h-full w-full webkit-user-drag user-select-none select-none scale-200 opacity-75 inset-0 blur-[1em] saturate-200" width={256} height={256} alt="logo" src={"https://cdn.undefinedcreations.com/undefinedcreations/logo.png"} />
        </div>
        <div className="z-1 grid grid-cols-2 h-100 w-full container mx-auto gap-4">
          <div className="border  inset-shadow-neutral-950 inset-shadow-sm rounded-xl bg-neutral-900 w-full"></div>
          <div className="border  inset-shadow-neutral-950 inset-shadow-sm rounded-xl bg-neutral-900 w-full"></div>
        </div>
      </header>

      <div className="bg-radial from-rose-700/25 to-75% to-transparent">
        <SplitMB
          className="my-16"
          media={{type: "image", src:"https://cdn.undefinedcreations.com/undefinedcreations/website/tpahere.gif"}}
          title="STELLAR Command API"
          description="The best way to create commands. With next to no time to develop and maintain, and ease of use with Kotlin features."
          direction="left"
          classNames={{media: "object-center skew-5 scale-150"}}
          link={{href:"/stellar", "label": "Learn more"}}
          />
      </div>
    </main>
  );
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
