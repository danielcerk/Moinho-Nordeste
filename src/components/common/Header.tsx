"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#produtos", label: "Produtos" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden">
      <div className="container flex h-16 items-center justify-between lg:max-w-[1200px] max-w-[90%] mx-auto">
      <Link href="/">
        <div className="flex items-center gap-3 p-1.5 pr-4 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 group">
          <Image
            src="/logo.jpg"
            alt="Moinho Nordeste Logo"
            width={48}
            height={48}
            className="rounded-full border-[3px] border-amber-600 group-hover:border-amber-700 transition-colors duration-300 shadow-lg group-hover:shadow-md"
          />
          <span className="text-xl font-semibold bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent group-hover:from-amber-800 group-hover:to-amber-900 transition-all duration-500">
            Moinho Nordeste
          </span>
        </div>
      </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#sobre" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Sobre
          </Link>
          <Link href="#produtos" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Produtos
          </Link>
          <Link href="#diferenciais" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Diferenciais
          </Link>
          <Link href="#contato" className="text-sm font-medium hover:text-amber-700 transition-colors">
            Contato
          </Link>
        </nav>
        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex items-center border-amber-600 text-amber-700 hover:bg-amber-50/80 hover:text-amber-800 hover:border-amber-700 transition-all duration-300 rounded-full shadow-sm hover:shadow-md gap-2 backdrop-blur-sm bg-white/90"
        >
          <Phone className="h-4 w-4 text-amber-600 animate-pulse hover:animate-none" />
          <Link 
            href="tel:+5575991696416" 
            className="font-medium hover:underline underline-offset-4 decoration-amber-600"
          >
            (75) 99169-6416
          </Link>
        </Button>

  
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-gradient-to-br from-[#A52A2A] via-[#D35400] to-[#8B4513] border-none text-white hover:from-[#A52A2A] hover:via-[#D35400] hover:to-[#8B4513] hover:opacity-90"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] p-6">
        <SheetTitle className="text-left mb-8 text-xl text-[#D35400]">Menu</SheetTitle>
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium hover:text-[#F39C12] transition-colors px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 px-2">
            <Button
              variant="default"
              size="sm"
              className="w-full justify-start h-12 bg-gradient-to-r from-[#A52A2A] via-[#D35400] to-[#8B4513] hover:opacity-90 border-none text-white"
              asChild
            >
              <Link href="tel:+5575991696416" className="flex items-center">
                <Phone className="mr-3 h-5 w-5" />
                (75) 99169-6416
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
      </div>
    </header>
  )
}

