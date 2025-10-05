import { cn } from "fumadocs-ui/utils/cn";
import Prism from "prismjs"
import "prismjs/components/prism-kotlin"
import 'prismjs/themes/prism-okaidia.css';
import { useEffect, useRef, useState } from "react";

export default function TypingCodeBlock({
  text,
  speed = 50,
  onComplete,
  className
}: {
  text: string
  speed?: number,
  className?: string,
  onComplete?: () => void
}) {
  const [displayed, setDisplayed] = useState("")
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let i = 0
    let cancelled = false

    const typeChar = () => {
      if (cancelled) return
      if (i <= text.length) {
        setDisplayed(text.slice(0, i))
        i++
        setTimeout(typeChar, speed)
      } else {
        onComplete?.()
      }
    }

    setDisplayed("")
    typeChar()

    return () => {
      cancelled = true
    }
  }, [text, speed, onComplete])

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [displayed])

  return (
    <div className={cn("bg-neutral-900/50 backdrop-blur-xl w-full max-w-[90vw] h-fit rounded-lg px-4 py-2 border-2", className)}>
      <pre className="w-full max-w-screen bg-neutral-800 p-0">
        <code ref={codeRef} className="language-kotlin">
          {displayed}
        </code>
      </pre>
    </div>
  )
}