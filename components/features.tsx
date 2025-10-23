import { CheckCircle2 } from "lucide-react"

const features = [
  "Design moderno e responsivo",
  "Otimização para mecanismos de busca (SEO)",
  "Integração com redes sociais",
  "Suporte técnico dedicado",
  "Entrega rápida e eficiente",
  "Preços competitivos",
]

export function Features() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MH Digital Solutions?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos especialistas em transformação digital. Nossa missão é levar seu negócio para o ambiente online com
              soluções profissionais, modernas e eficientes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <div className="text-6xl font-bold text-primary">100+</div>
                  <div className="text-lg text-muted-foreground">Projetos Entregues</div>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-bold text-secondary">24/7</div>
                  <div className="text-lg text-muted-foreground">Suporte Disponível</div>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-bold text-accent">5★</div>
                  <div className="text-lg text-muted-foreground">Avaliação dos Clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
