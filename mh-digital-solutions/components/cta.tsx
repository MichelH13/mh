import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CTA() {
  const whatsappLink = "https://wa.me/5511974225724?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground text-balance">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
            Entre em contato agora e receba um orçamento personalizado. Vamos juntos construir sua presença digital de
            sucesso!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
