import Image from "next/image"
import VideoPlayer from "./hsl-video"
import { cn } from "fumadocs-ui/utils/cn"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

export type SplitMBType = {
  media: {
    src: string
    type: "image" | "video"
  }
  className?: string,
  title: ReactNode
  description: ReactNode
  direction: "left" | "right"
  classNames?: {
    media?: string,
    text?: string
  }
  link?: {
    href: string,
    label: string
  },
}

export function SplitMB({ media, title, description, direction, link, className, classNames }: SplitMBType) {

  const router = useRouter()

  return (
    <section className={cn("mt-0 w-full relative container max-w-5xl mx-auto md:min-h-75 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8", className)}>
      {/* Media */}
      <div
        onClick={() => {
            if (link) {
                router.push(link.href)
            }
        }}
        className={cn(`
          min-h-75 md:min-h-0
          mb-8 md:mb-0
          border rounded-xl relative overflow-hidden
          order-1
          ${direction === "right" ? "md:order-2" : "md:order-1"}
        `,
        )}
      >
        {media.type == "image" ? <Image
          alt="gif"
          fill
          className={cn("object-cover object-left", classNames?.media, link ? "cursor-pointer duration-250 hover:opacity-75 hover:scale-120" : "")}
          src={media.src}
        /> : <VideoPlayer
          className={cn("object-cover object-left h-full", classNames?.media, link ? "cursor-pointer duration-250 hover:opacity-75 hover:scale-120" : "")}
          autoPlay
          loop
          playsInline
          muted
          src={media.src}
        />}
      </div>

      {/* Text */}
      <div
        className={cn(
          `flex flex-col gap-4 text-start items-start justify-center
          order-2`,
          direction === "right" ? "md:order-1" : "md:order-2"
        )}
      >
        <div className="text-4xl font-bold text-neutral-200">{title}</div>
        <div className="text-xl text-neutral-400">{description}</div>
        {link && <Link className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-semibold px-6 py-2 rounded-md" href={link.href} >{link.label}</Link>}
      </div>
    </section>
  )
}
