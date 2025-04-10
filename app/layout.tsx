import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from "@/contexts/CartContext"
import SiteHeader from "@/components/site-header"

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <CartProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
