"use client"

import Image from "next/image"
import { useEffect, useState } from "react";
import { Phone, MapPin, Clock, Leaf, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import { WhatsAppButton } from "@/components/common/whatsapp-button"
import Link from "next/link"

export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150); // Ativa a animação após 50px de scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="flex min-h-screen flex-col">

      <Header></Header>

    <main className="flex-1">

    <section className="relative overflow-hidden">
      {/* Background Gradiente Animado */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          scrolled
            ? "bg-[linear-gradient(135deg,_#A52A2A_0%,_#D35400_50%,_#8B4513_100%)]"
            : "bg-[linear-gradient(45deg,_#A52A2A_0%,_#D35400_30%,_#F39C12_70%,_#8B4513_100%)]"
        }`}
      >
        {/* Textura opcional para profundidade */}
        <div className="absolute inset-0 bg-[url('/textura-papel.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Container com Animação de Tamanho */}
      <div
        className={`relative mx-auto transition-[height,width] duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          scrolled
            ? "h-[500px] w-full max-w-[400px]"
            : "h-screen w-full"
        }`}
      >
        {/* Elementos decorativos (opcional) */}
        {!scrolled && (
          <>
            <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-amber-400/20 blur-xl"></div>
            <div className="absolute bottom-1/3 right-16 w-32 h-32 rounded-full bg-red-700/15 blur-lg"></div>
          </>
        )}
      </div>

      {/* Conteúdo centralizado */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg">
              Temperos que contam histórias do Nordeste
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium italic text-shadow">
              "Feito com alma, entregue com sabor."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/5575991696416?text=Olá, Gostaria de realizar um pedido!">
                <Button className="border-[#F1C40F] bg-white hover:bg-[#1f1e1d] text-gray-900 hover:text-white shadow-lg cursor-pointer p-8 transition-all">
                  Peça Agora
                </Button>
              </Link>
              <Link href="#produtos">
                <Button
                  variant="outline"
                  className="border-[#F1C40F] text-gray-900 hover:bg-[#1f1e1d] hover:text-white shadow-lg cursor-pointer p-8 transition-all"
                >
                  Conheça Nossos Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* About Section */}
        <section id="sobre" className="py-16 bg-amber-50">
          <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                  Nossa História
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                  Tradição e sabor do sertão para sua mesa
                </h2>
                <p className="text-gray-700 md:text-lg">
                  Nascida no coração da Bahia, a Moinho Nordeste traz para cada tempero a essência da culinária
                  nordestina. Selecionamos cuidadosamente cada ingrediente, preservando métodos artesanais que garantem
                  o sabor autêntico que só o Nordeste sabe oferecer.
                </p>
                <p className="text-gray-700 md:text-lg">
                  Nossos condimentos são moídos na hora, sem conservantes artificiais, para que você sinta o verdadeiro
                  sabor da terra em cada pitada.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/colaborador.png"
                  alt="Fábrica Moinho Nordeste"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produtos" className="py-16">
          <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">Nossos Produtos</h2>
              <p className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto">
                Descubra o sabor autêntico do Nordeste em cada um de nossos temperos artesanais, cuidadosamente
                preparados para transformar suas receitas.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Product Card 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg">
                <div className="aspect-square relative bg-amber-100">
                  <Image
                    src="/condimento.png"
                    alt="Tempero Baiano"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-amber-800">Tempero Baiano</h3>
                  <p className="mt-2 text-gray-600">
                    Mistura tradicional com pimentas selecionadas e ervas aromáticas. Ideal para feijão, carnes e
                    ensopados.
                  </p>
                  <Button className="mt-4 w-full bg-amber-600 hover:bg-amber-700">Saiba Mais</Button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg">
                <div className="aspect-square relative bg-amber-100">
                  <Image
                    src="/condimento.png"
                    alt="Pimenta Artesanal"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-amber-800">Pimenta Artesanal</h3>
                  <p className="mt-2 text-gray-600">
                    Pimentas cultivadas em solo nordestino, secas ao sol e moídas na hora. Sabor intenso com aroma
                    inconfundível.
                  </p>
                  <Button className="mt-4 w-full bg-amber-600 hover:bg-amber-700">Saiba Mais</Button>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg">
                <div className="aspect-square relative bg-amber-100">
                  <Image
                    src="/condimento.png"
                    alt="Colorau Premium"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-amber-800">Colorau Premium</h3>
                  <p className="mt-2 text-gray-600">
                    Extraído das sementes de urucum, traz cor vibrante e sabor suave às suas receitas. 100% natural.
                  </p>
                  <Button className="mt-4 w-full bg-amber-600 hover:bg-amber-700">Saiba Mais</Button>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                Ver Todos os Produtos
              </Button>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section id="diferenciais" className="py-16 bg-gradient-to-br from-amber-800 to-red-800 text-white">
          <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nossos Diferenciais</h2>
              <p className="mt-4 text-white/80 md:text-lg max-w-3xl mx-auto">
                O que torna os temperos Moinho Nordeste especiais e únicos no mercado
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Differential 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Leaf className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold">100% Natural</h3>
                <p className="mt-2 text-white/80">
                  Sem conservantes artificiais, corantes ou aditivos químicos. Apenas o sabor puro da natureza.
                </p>
              </div>

              {/* Differential 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Award className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold">Qualidade Premium</h3>
                <p className="mt-2 text-white/80">
                  Ingredientes selecionados e processos artesanais que garantem temperos de qualidade superior.
                </p>
              </div>

              {/* Differential 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Truck className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold">Entrega Rápida</h3>
                <p className="mt-2 text-white/80">
                  Enviamos para todo o Brasil com agilidade, para que você receba sempre produtos frescos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section (Optional) */}
        <section className="py-16 bg-amber-50">
          <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">
                O que dizem nossos clientes
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center">
                      <span className="text-amber-800 font-bold">MR</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Maria Rita</h4>
                    <p className="text-sm text-gray-500">Restaurante Sabor da Terra</p>
                  </div>
                </div>
                <p className="italic text-gray-700">
                  "Os temperos do Moinho Nordeste transformaram os pratos do meu restaurante. Meus clientes sempre
                  elogiam o sabor autêntico das comidas."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center">
                      <span className="text-amber-800 font-bold">JS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">João Silva</h4>
                    <p className="text-sm text-gray-500">Chef</p>
                  </div>
                </div>
                <p className="italic text-gray-700">
                  "Como chef, valorizo ingredientes de qualidade. O colorau e o tempero baiano do Moinho Nordeste são
                  indispensáveis na minha cozinha."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center">
                      <span className="text-amber-800 font-bold">CA</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Carla Almeida</h4>
                    <p className="text-sm text-gray-500">Cliente</p>
                  </div>
                </div>
                <p className="italic text-gray-700">
                  "Desde que descobri os temperos do Moinho Nordeste, minhas refeições em família ganharam um novo
                  sabor. Qualidade incomparável!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promotional Banner (Optional) */}
        <section className="py-8 bg-amber-600 text-white">
          <div className="container px-4 md:px-6 text-center lg:max-w-[1200px] max-w-[90%] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Frete Grátis para Serrinha</h3>
                <p>Em compras acima de R$ 50,00</p>
              </div>
              <Link href="https://wa.me/5575991696416?text=Olá, quero aproveitar o frete grátis!" target="_blank"
                  rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-100 cursor-pointer">
                    Aproveite Agora
                  </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16">
          <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900 mb-6">
                  Entre em Contato
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-amber-700 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Telefone</h3>
                      <p className="text-gray-700">(75) 99169-6416</p>
                      <Button variant="link" className="p-0 h-auto text-amber-700 font-bold">
                        <Link href="tel:+5575991696416">Ligar Agora</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-amber-700 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Endereço</h3>
                      <p className="text-gray-700">Av. Lomanto Júnior, Serrinha-BA</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-amber-700 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Horário de Atendimento</h3>
                      <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-700">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Fale conosco pelo WhatsApp</h3>
                <p className="mb-6 text-gray-700">
                  Estamos prontos para tirar suas dúvidas e receber seus pedidos!
                </p>
                <a
                  href="https://wa.me/5575991696416?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20temperos%20do%20Moinho%20Nordeste."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors w-full sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Conversar no WhatsApp
                </a>
                <p className="mt-4 text-sm text-gray-600 max-w-[280px] mx-auto">
                  Horário de atendimento: Segunda a Sexta, das 8h às 18h e Sábado das 8h às 12h
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton phoneNumber="5575991696416" />
      <Footer></Footer>
     
    </div>
  )
}

