import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MH Digital Solutions - Soluções Digitais Completas",
  description:
    "Sites profissionais, lojas online, automação de WhatsApp, convites personalizados, catálogos digitais e landing pages. Transforme seu negócio digital.",
  keywords:
    "sites profissionais, lojas online, e-commerce, automação whatsapp, convites digitais, catálogos digitais, landing pages, páginas de venda",
  authors: [{ name: "MH Digital Solutions" }],
  openGraph: {
    title: "MH Digital Solutions - Soluções Digitais Completas",
    description: "Transforme seu negócio com soluções digitais profissionais",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
