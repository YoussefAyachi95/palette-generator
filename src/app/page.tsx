"use client"

import Navbar from './components/Navbar'
import DisplayImage from './components/DisplayImage'
import ColorThief from 'colorthief'
import { useState } from 'react'

export default function Home() {
  const [colorPalette, setColorPalette] = useState<string[] | null>(null);

  return (
    <section className="h-screen bg-black/90 text-lg text-yellow-200">
      <Navbar />
      <div className="min-h-[90vh] py-8 px-16 flex items-center justify-center">
          <DisplayImage />
      </div>
    </section>
  )
}
