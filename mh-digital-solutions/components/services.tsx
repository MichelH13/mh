import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ShoppingCart, MessageSquare, FileImage, Palette, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Sites modernos, responsivos e otimizados para conversão. Presença digital que impressiona seus clientes.",
  },
  {
    icon: ShoppingCart,
    title: "Lojas Online Completas",
    description: "E-commerce completo com sistema de pagamento, gestão de produtos e painel administrativo.",
  },
  {
    icon: MessageSquare,
    title: "Automação de WhatsApp",
    description: "Atendimento automatizado 24/7. Aumente suas vendas e melhore o relacionamento com clientes.",
  },
  {
    icon: FileImage,
    title: "Convites Personalizados",
    description: "Convites digitais únicos e elegantes para eventos especiais, casamentos e celebrações.",
  },
  {
    icon: Palette,
    title: "Catálogos Digitais",
    description: "Catálogos interativos e profissionais para apresentar seus produtos de forma impactante.",
  },
  {
    icon: TrendingUp,
    title: "Landing Pages",
    description: "Páginas de venda otimizadas para conversão. Transforme visitantes em clientes.",
  },
]

export function Services() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluções digitais completas para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
