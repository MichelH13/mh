import { Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const whatsappLink = "https://wa.me/5511974225724"
  const instagramLink = "https://www.instagram.com/mh_digital_solutions/profilecard/?igsh=MTN1czlnMXlpbGFkcQ=="

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="relative w-32 h-32">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MH_Digital_Solutions_5MB.png-vLT7ud1fLoWFE7NmJhdkqRhMWOvB2W.jpeg"
                alt="MH Digital Solutions"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluções digitais completas para impulsionar seu negócio no ambiente online.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Sites Profissionais</li>
              <li>Lojas Online</li>
              <li>Automação WhatsApp</li>
              <li>Convites Digitais</li>
              <li>Catálogos Digitais</li>
              <li>Landing Pages</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                +55 11 97422-5724
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @mh_digital_solutions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MH Digital Solutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
