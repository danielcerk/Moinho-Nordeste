"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react";
import { Phone, MapPin, Clock, Leaf, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import { WhatsAppButton } from "@/components/common/whatsapp-button"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const refs = {
    about: useRef(null),
    products: useRef(null),
    differentials: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null)
  };

  const isInView = {
    about: useInView(refs.about, { once: true, margin: "-100px" }),
    products: useInView(refs.products, { once: true, margin: "-100px" }),
    differentials: useInView(refs.differentials, { once: true, margin: "-100px" }),
    testimonials: useInView(refs.testimonials, { once: true, margin: "-100px" }),
    contact: useInView(refs.contact, { once: true, margin: "-100px" })
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const produtos = [
    {
      id: 1,
      nome: "Tempero Baiano",
      descricao:
        "Mistura tradicional com pimentas selecionadas e ervas aromáticas. Ideal para feijão, carnes e ensopados.",
      imagem: "/condimento.png",
    },
    {
      id: 2,
      nome: "Pimenta Artesanal",
      descricao:
        "Pimentas cultivadas em solo nordestino, secas ao sol e moídas na hora. Sabor intenso com aroma inconfundível.",
      imagem: "/condimento.png",
    },
    {
      id: 3,
      nome: "Colorau Premium",
      descricao: "Extraído das sementes de urucum, traz cor vibrante e sabor suave às suas receitas. 100% natural.",
      imagem: "/condimento.png",
    },
    {
      id: 4,
      nome: "Cominho Sertanejo",
      descricao:
        "Cominho cultivado no sertão nordestino, com aroma intenso e sabor marcante. Perfeito para carnes, feijão e arroz.",
      imagem: "/condimento.png",
    },
    {
      id: 5,
      nome: "Mix de Ervas Finas",
      descricao:
        "Combinação equilibrada de ervas aromáticas cultivadas organicamente. Ideal para peixes, aves e saladas.",
      imagem: "/condimento.png",
    },
    {
      id: 6,
      nome: "Sal de Ervas Nordestino",
      descricao:
        "Sal marinho enriquecido com ervas típicas do Nordeste. Baixo teor de sódio e alto sabor para suas refeições.",
      imagem: "/condimento.png",
    },
    {
      id: 7,
      nome: "Pimenta Malagueta em Conserva",
      descricao:
        "Pimentas malagueta conservadas em azeite de oliva e ervas aromáticas. Adiciona um toque picante às suas receitas.",
      imagem: "/condimento.png",
    },
    {
      id: 8,
      nome: "Tempero para Churrasco",
      descricao:
        "Blend especial de ervas e especiarias para realçar o sabor das carnes grelhadas. Indispensável nos seus churrascos.",
      imagem: "/condimento.png",
    },
    {
      id: 9,
      nome: "Alho Desidratado",
      descricao: "Alho cultivado no agreste, desidratado e moído. Prático e com todo o sabor do alho fresco.",
      imagem: "/condimento.png",
    },
  ]

  const [showAll, setshowAll] = useState(false)

  const produtosExibidos = showAll ? produtos : produtos.slice(0, 3)

  const toggleshowAll = () => {
    setshowAll(!showAll)

    if (showAll) {
      document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <Image 
            src="/logoerased.png"
            alt="Moinho Nordeste Logo"
            fill
            className="absolute inset-0 bg-[url('/condimento.png')] opacity-20 mix-blend-overlay z-10 w-auto h-auto md:max-w-6xl mx-auto"
          />
          
          <motion.div
            initial={{ background: "linear-gradient(45deg, #A52A2A 0%, #D35400 30%, #F39C12 70%, #8B4513 100%)" }}
            animate={{
              background: scrolled
                ? "linear-gradient(135deg, #A52A2A 0%, #D35400 50%, #8B4513 100%)"
                : "linear-gradient(45deg, #A52A2A 0%, #D35400 30%, #F39C12 70%, #8B4513 100%)"
            }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[url('/condimento.png')] opacity-10 mix-blend-overlay"></div>
          </motion.div>

          <motion.div
            initial={{ height: "100vh", width: "100%" }}
            animate={{
              height: scrolled ? "500px" : "100vh",
              width: scrolled ? "100%" : "100%",
              maxWidth: scrolled ? "400px" : "100%"
            }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="relative mx-auto"
          >
            {!scrolled && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-amber-400/20 blur-xl"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-1/3 right-16 w-32 h-32 rounded-full bg-red-700/15 blur-lg"
                ></motion.div>
              </>
            )}
          </motion.div>


          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-3xl mx-auto space-y-6"
              >
                <motion.h1 
                  variants={fadeIn}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg"
                >
                  Temperos que contam histórias do Nordeste
                </motion.h1>
                <motion.p 
                  variants={fadeIn}
                  className="text-xl md:text-2xl text-white font-medium italic text-shadow"
                >
                  "Feito com alma, entregue com sabor."
                </motion.p>
                <br />
                <br />
                <motion.div 
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href="https://wa.me/5575991696416?text=Olá, Gostaria de realizar um pedido!" >
                    <Button className="cursor-pointer  bg-white hover:bg-[#1f1e1d] text-gray-900 hover:text-white shadow-lg p-8 transition-all w-full max-w-[90%] md:w-auto">
                      Peça Agora
                    </Button>
                  </Link>
                  <Link href="#produtos" >
                    <Button
                      className="cursor-pointer  bg-white hover:bg-[#1f1e1d] text-gray-900 hover:text-white shadow-lg p-8 transition-all w-full max-w-[90%] md:w-auto"
                    >
                      Conheça Nossos Produtos
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 bg-amber-50" ref={refs.about}>
          <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
            <motion.div
              initial="hidden"
              animate={isInView.about ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-10 lg:grid-cols-2 items-center"
            >
              <motion.div variants={slideInFromLeft} className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800"
                >
                  Nossa História
                </motion.div>
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
              </motion.div>
              <motion.div 
                variants={slideInFromRight}
                className="relative h-[400px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/colaborador.png"
                  alt="Fábrica Moinho Nordeste"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
    <section id="produtos" className="py-16" ref={refs.products}>
      <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView.products ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">
            {showAll ? "Todos os Nossos Produtos" : "Nossos Produtos"}
          </motion.h2>
          <motion.p variants={fadeIn} className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto">
            {showAll
              ? "Explore nossa linha completa de temperos artesanais nordestinos, produzidos com ingredientes selecionados e técnicas tradicionais."
              : "Descubra o sabor autêntico do Nordeste em cada um de nossos temperos artesanais, cuidadosamente preparados para transformar suas receitas."}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView.products ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {produtosExibidos.map((produto) => (
            <motion.div
              key={produto.id}
              variants={scaleUp}
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-square relative bg-amber-100">
                <Image
                  src={produto.imagem || "/placeholder.svg"}
                  alt={produto.nome}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-amber-800">{produto.nome}</h3>
                <p className="mt-2 text-gray-600">{produto.descricao}</p>
                <Button className="mt-4 w-full bg-amber-600 hover:bg-amber-700">Saiba Mais</Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView.products ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-amber-600 text-amber-700 hover:bg-amber-50"
            onClick={toggleshowAll}
          >
            {showAll ? "Mostrar Menos Produtos" : "Ver Todos os Produtos"}
          </Button>
        </motion.div>
      </div>
    </section>

        {/* Differentials Section */}
        <section id="diferenciais" className="py-24 bg-gradient-to-br from-amber-800 to-red-800 text-white" ref={refs.differentials}>
          <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
            <motion.div
              initial="hidden"
              animate={isInView.differentials ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center mb-10"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Nossos Diferenciais
              </motion.h2>
              <motion.p variants={fadeIn} className="mt-4 text-white/80 md:text-lg max-w-3xl mx-auto">
                O que torna os temperos Moinho Nordeste especiais e únicos no mercado
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView.differentials ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {/* Differential 1 */}
              <motion.div 
                variants={scaleUp}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Leaf className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold">100% Natural</h3>
                <p className="mt-2 text-white/80">
                  Sem conservantes artificiais, corantes ou aditivos químicos. Apenas o sabor puro da natureza.
                </p>
              </motion.div>

              {/* Differential 2 */}
              <motion.div 
                variants={scaleUp}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Award className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold">Qualidade Premium</h3>
                <p className="mt-2 text-white/80">
                  Ingredientes selecionados e processos artesanais que garantem temperos de qualidade superior.
                </p>
              </motion.div>

              {/* Differential 3 */}
              <motion.div 
                variants={scaleUp}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Truck className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold">Entrega Rápida</h3>
                <p className="mt-2 text-white/80">
                  Enviamos para todo o Brasil com agilidade, para que você receba sempre produtos frescos.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-amber-50" ref={refs.testimonials}>
          <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
            <motion.div
              initial="hidden"
              animate={isInView.testimonials ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center mb-10"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">
                O que dizem nossos clientes
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView.testimonials ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {/* Testimonial 1 */}
              <motion.div 
                variants={scaleUp}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
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
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div 
                variants={scaleUp}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
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
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div 
                variants={scaleUp}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
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
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Promotional Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-8 bg-amber-600 text-white"
        >
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
        </motion.section>

        {/* Contact Section */}
        <section id="contato" className="py-24" ref={refs.contact}>
          <div className="container px-4 md:px-6 lg:max-w-[1200px] max-w-[90%] mx-auto">
            <motion.div
              initial="hidden"
              animate={isInView.contact ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-10 lg:grid-cols-2"
            >
              <motion.div variants={slideInFromLeft}>
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
              </motion.div>

              <motion.div 
                variants={slideInFromRight}
                className="bg-amber-50 p-6 rounded-lg text-center"
              >
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
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <WhatsAppButton phoneNumber="5575991696416" />
      <Footer />
    </div>
  )
}