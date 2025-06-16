import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export default function Footer(){
  return(
    <footer className="bg-amber-900 text-white py-12">
    <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logo.jpg"
              alt="Condimentos Nordeste Logo"
              width={40}
              height={40}
              className="rounded-md bg-white"
            />
            <span className="text-xl font-bold">Condimentos Nordeste</span>
          </div>
          <p className="text-amber-200 text-sm">"Feito com alma, entregue com sabor."</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contato</h3>
          <div className="space-y-2 text-amber-100">
            <p className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <Link href="tel:+5575991696416" className="hover:underline">
                (75) 99169-6416
              </Link>
            </p>
            <p className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Av. Lomanto Júnior, Serrinha-BA
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-amber-100">
            <li>
              <Link href="#sobre" className="hover:text-white transition-colors">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="#produtos" className="hover:text-white transition-colors">
                Produtos
              </Link>
            </li>
            <li>
              <Link href="#contato" className="hover:text-white transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/moinhonordeste_/" target="_blank"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-amber-800 hover:bg-amber-700 transition-colors"
            >
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200 text-sm">
        <p><Link href='/'>Condimentos Nordeste</Link> &copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
        <p className="mt-2">Desenvolvido por{' '}  
          <Link href='https://marketilize.com.br/' legacyBehavior>
            <a target="_blank" className="underline">Marketilize</a>
          </Link>
        </p>
      </div>
    </div>
  </footer>
  )
}