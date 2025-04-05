import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header(){
  return(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between lg:max-w-[1200px] max-w-[90%] mx-auto">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.jpg"
          alt="Moinho Nordeste Logo"
          width={40}
          height={40}
          className="rounded-full border-3 border-black"
        />
        <span className="text-xl font-bold text-amber-700">Moinho Nordeste</span>
      </div>
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
      <Button variant="outline" size="sm" className="hidden md:flex">
        <Phone className="mr-2 h-4 w-4" />
        (75) 99169-6416
      </Button>
      <Button variant="outline" size="icon" className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </Button>
    </div>
  </header>
  )
}