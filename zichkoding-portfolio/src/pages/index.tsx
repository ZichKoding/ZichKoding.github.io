import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Header />
      <main
        data-theme="business"
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
      </main>
    </>
  )
}
