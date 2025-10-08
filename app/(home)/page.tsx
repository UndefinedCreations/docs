"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { SplitMB } from "../components/Split-media-body";
import { ReactNode, useEffect, useRef } from "react";
import { cn } from "fumadocs-ui/utils/cn";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { useFetch } from "../components/hooks/use-fetch";
import TypingCodeBlock from "../components/typing-code-block";

const lynxModules = ["NPC's", "Scoreboard", "Tab", "Easy Events", "ItemBuilder", "Logging", "Player Meta", "Sceduler"]

type GitHubMember = {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

export default function HomePage() {

  const members = useFetch<GitHubMember[]>(
    "https://api.github.com/orgs/UndefinedCreations/members"
  )

  return (
    <main className="text-white flex flex-1 relative flex-col gap-64 text-center overflow-x-hidden bg-neutral-950">
      <div className="mx-auto w-full h-full">
        <BentoGrid />
      </div>

            <section className="bg-radial from-rose-700/25 to-75% to-transparent">
              <h1 className="text-5xl font-black mb-8 tracking-wider">Ours Solutions</h1>
      
              <SplitMB
                className="my-16"
                media={{type: "image", src:"https://cdn.undefinedcreations.com/undefinedcreations/website/tpahere.gif"}}
                title="Stellar Command API"
                description="The best way to create commands. With next to no time to develop and maintain, and ease of use with Kotlin features."
                direction="left"
                classNames={{media: "object-center skew-5 scale-150"}}
                link={{href:"/stellar", "label": "Learn more"}}
                />
                
              <SplitMB
                className="my-16"
                media={{type: "image", src:"https://cdn.undefinedcreations.com/lynx/playerMeta/game-profle.gif"}}
                title={(<p className="flex flex-row gap-4 items-center">Lynx <span className="text-base font-medium text-rose-200 h-fit px-4 py-0.5 rounded-full text-center bg-rose-800/50">Beta</span></p>)}
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
      
      <section className="container mt-16 w-full mx-auto h-200 flex flex-col">
        <h1 className="text-5xl font-black mb-8 tracking-wider">Contributors</h1>

        <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
          {members.loading && <p className="text-neutral-400">Loading contributors…</p>}
          {members.error && <p className="text-red-400">Failed to load contributors</p>}

          {!members.loading && members.data?.map((m) => (
            <Contributor
              key={m.id}
              name={m.login}
              avatar={m.avatar_url}
              github={m.html_url}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function Contributor ({name, avatar, github}:{name: string, avatar: string, github?: string}) {
  return (
    <Link href={github || "/"} className="p-4 px-6 rounded-xl flex flex-row gap-4 items-center bg-neutral-800/25 hover:bg-neutral-800/75 transition-colors duration-150 border-1 backdrop-blur-xl">
      <Image className="rounded-full size-12" width={128} height={128} alt="avatar" src={avatar} />
      <div className="flex flex-col gap-1">
        <h2 className="text-xl">{name}</h2>
        {/* <div className="flex flex-row gap-2">
          {github && <Link href={github} ><BsGithub size={16}/></Link>}
        </div> */}
      </div>
    </Link>
  )
}

function BentoGrid() {
  return (
    <header className="flex flex-col bg-radial from-rose-500/25 via-rose-700/10 to-black min-h-200 w-full pb-20 p-0">

      <div className="h-60 mt-25 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-black tracking-wider">WAYS TO CREATE <span className="text-rose-500 text-shadow-sm text-shadow-rose-900">MORE</span> <span className="italic font-medium">faster</span></h1>
      </div>

      <motion.div
        // initial={{translateY: 500, scale: 1.2, opacity: 0}}
        // animate={{translateY: 0, scale: 1, opacity: 1}}
        // transition={{delay: 0, duration: 1, ease: "anticipate"}}
        className={cn(
          "w-full h-160 container mx-auto",
          "grid grid-cols-12 grid-rows-12 gap-4 p-4"
        )}
      >
        <BentoCard colStart={4} colEnd={13} rowStart={1} rowEnd={13} className="bg-neutral-950 rounded-2xl" >
          <div className="duration-200 shadow-2xl shadow-black inset-0 z-0 absolute rounded-xl overflow-hidden object-cover">
            <Image alt="gradle" className="object-cover" fill quality={100} src={"https://cdn.undefinedcreations.com/undefinedcreations/website/group-photo.png"} />
          </div>
        </BentoCard>
        <BentoCard
          colStart={1}
          colEnd={4}
          rowStart={1}
          rowEnd={6}
          className="cursor-pointer bg-gradient-to-tr group from-neutral-950/75 to-neutral-950/50 flex flex-col items-start justify-end text-start gap-4"
        >

          <div className="skew-y-4 group-hover:-translate-y-10 duration-200 shadow-2xl shadow-black left-4 top-4 z-0 right-4 bottom-12 absolute rounded-md overflow-hidden object-cover">
            <Image alt="gradle" className="object-cover" fill quality={25} src={"https://cdn.undefinedcreations.com/undefinedcreations/website/tpahere.gif"} />
          </div>

          <div className="rounded-lg flex flex-col z-10 gap-2 h-full items-start justify-end p-4 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent">
            <h2 className="text-neutral-300/90 text-3xl flex  items-center font-semibold"><SiGradle className="mr-4 inline" />Gradle Plugins</h2>
            <p className="font-normal text-neutral-500">Improve the experience of project setup & create <span className="text-rose-800 font-bold">better, faster</span></p>
          </div>

        </BentoCard>

          <BentoCard
            colStart={1}
            colEnd={4}
            rowStart={6}
            rowEnd={13}
            className="flex rounded-lg bg-gradient-to-tr group from-rose-950/0 to-rose-700/25 gap-4"
            >
            <Link href={"/stellar"} className="flex flex-col items-start justify-end text-start gap-4 p-4">
            
              <div className="shadow-2xl group-hover:-translate-x-8 duration-200 shadow-black relative rounded-md overflow-hidden object-cover">
                <Image alt="stellar" className="object-cover w-full h-full flex-1" height={700} width={500} quality={25} src={"https://cdn.undefinedcreations.com/undefinedcreations/website/tpahere.gif"} />
              </div>

              <div className="rounded-lg flex flex-col z-10 gap-2 -m-4 h-fit mt-auto items-start justify-end p-4 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent">
                <h2 className="text-neutral-300/90 text-3xl flex  items-center font-semibold">Stellar</h2>
                <p className="font-normal text-neutral-500">Easily create amazing commands with as few lines as possible.</p>
              </div>
            </Link>
          </BentoCard>
      </motion.div>
    </header>
  )
}

function BentoCard({
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  className,
  children,
  ...props
}: {
  colStart: number
  colEnd: number
  rowStart: number
  rowEnd: number
} & React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      style={{
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        position: "relative",
        ...(props.style || {}), // Allow user-provided styles to override
      }}
      className={cn("bento-card bg-neutral-900 rounded-lg", className)}
    >
      {children}
    </div>
  )
}

import Prism from "prismjs"
import "prismjs/components/prism-kotlin"
import "prismjs/themes/prism-okaidia.css"
import { SiGradle } from "react-icons/si";

function AppleCodeBlock ({code}:{code: string}) {
  

  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <div className={cn("w-full h-full relative items-center justify-center flex flex-col bg-neutral-900 rounded-lg p-4 pt-8 text-start")}>
      <div className="absolute flex flex-row gap-2 p-2 z-10 top-0 left-0 w-full h-20">
        <span className="size-4 bg-red-400 rounded-full"></span>
        <span className="size-4 bg-amber-300 rounded-full"></span>
        <span className="size-4 bg-green-500 rounded-full"></span>
      </div>
      <pre className="w-full text-[1vw] p-0 overflow-hidden">
        <code ref={codeRef} className="language-kotlin">
          {code}
        </code>
      </pre>
    </div>
  )
}

export { BentoGrid, BentoCard }