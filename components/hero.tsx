import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const whatsappLink =
    "https://wa.me/5511974225724?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20MH%20Digital%20Solutions"
  const instagramLink = "https://www.instagram.com/mh_digital_solutions/profilecard/?igsh=MTN1czlnMXlpbGFkcQ=="

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Logo */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MH_Digital_Solutions_5MB.png-vLT7ud1fLoWFE7NmJhdkqRhMWOvB2W.jpeg"
              alt="MH Digital Solutions"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Headline */}
          <div className="max-w-4xl space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Transforme seu negócio com{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                soluções digitais completas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Sites profissionais, lojas online, automação de WhatsApp e muito mais. Levamos sua empresa para o próximo
              nível digital.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale Conosco no WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 bg-transparent" asChild>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Siga no Instagram
              </a>
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="pt-8 animate-fade-in-up">
            <p className="text-sm text-muted-foreground mb-4">
              Soluções digitais completas para empresas de todos os tamanhos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
