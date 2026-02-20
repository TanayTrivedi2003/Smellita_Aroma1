"use client"

import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function WhatsAppFloat() {
  const handleClick = () => {
    const message = "Hi, I would like to know more about your perfumes!"
    const whatsappUrl = `https://wa.me/917887037749?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-600 p-0 text-white shadow-lg transition-all hover:bg-green-700 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </Button>
  )
}
