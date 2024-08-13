import React from "react"

import './globals.css'
import { Metadata } from "next"
import Header from "@/components/partials/Header"
import Footer from "@/components/partials/Footer"

export const metadata: Metadata = {
  title: "Sua Melhor Escolha para Habitação Segura - Cooperativa Habitacional Diamond",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}