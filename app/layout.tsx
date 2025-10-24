import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Mathieu Ridet | Full Stack Developer',
  description: 'Portfolio of Mathieu Ridet - React, Web3, Smart Contracts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-2">
          <Link href="/about#about-this-site" className="text-xs text-slate-500 hover:text-blue-400 transition">
            Built with AI assistance (color-blind developer) →
          </Link>
        </div>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}