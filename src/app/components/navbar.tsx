"use client"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    
    return(

<div>
        
<div className="flex h-[60px] px-6 sm:px-14 w-full bg-black py-10 text-white justify-between items-center">
            <div className="flex justify-between items-center font-bold font-mono text-4xl " >
                
                <Image     
                    loading="lazy"
                    src="/apple.png"
                    alt="logo"
                    width={35}
                    height={35}
                    className="mr-5"
                    />
                    Tjakra Tech
            </div>
               {/* Hamburger Icon (mobile only) */}
            <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

            <div className={`sm:flex gap-4 text-sm font-bold ${isOpen? 'flex flex-col absolute top-[60px] right-0 bg-black w-full py-4 items-center z-50' : 'hidden sm:flex' } ease-in-out`}>
          <Link href={"/#aboutus"} onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">About Us</Link>
          <Link href={"/#services"} onClick={() => setIsOpen(false)}className="hover:text-blue-500 transition" >Services</Link>
          <Link href={"#teams"} onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">Teams</Link>
            </div>
        </div>
        </div>
    )
}