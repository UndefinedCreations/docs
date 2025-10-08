import Link from "next/link";
import { BsDiscord } from "react-icons/bs";

export default function BasicFooter () {
    return (
        <footer className='min-h-50 inset-shadow-neutral-900 border-t-1 inset-shadow-sm bg-neutral flex flex-col items-center justify-center gap-2'>
          <div className='flex flex-col'>
            <h1>© {new Date().getFullYear()} Undefined Creations | All Rights Reserved</h1>
          </div>
          <div className='flex flex-row gap-4'>
            <Link href={"https://discord.gg/VxJMQ24pUF"} className='flex flex-row text-violet-300 gap-2 items-center'><BsDiscord /> Discord</Link>
          </div>
        </footer>
    )
}