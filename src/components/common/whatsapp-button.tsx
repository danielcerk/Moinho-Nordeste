"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  showOnMobile?: boolean
}

export function WhatsAppButton({
  phoneNumber,
  message = "Olá, gostaria de mais informações!",
  position = "bottom-right",
  showOnMobile = true,
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  }

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl",
        positionClasses[position],
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        !showOnMobile && "hidden md:flex",
      )}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="sr-only">Contato via WhatsApp</span>
    </a>
  )
}

