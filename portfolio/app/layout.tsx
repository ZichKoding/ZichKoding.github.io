import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-gradient-to-t from-sky-950 to-sky-100">
      <body className={`min-h-screen flex flex-col ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
