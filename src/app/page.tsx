"use client"

import Navbar from './components/Navbar'
import DisplayImage from './components/DisplayImage'

export default function Home() {
  return (
    <section className="h-screen bg-black/90 text-lg text-yellow-200">
      <Navbar />
      <div className="min-h-[90vh] py-8 px-16 flex items-center justify-center">
          <DisplayImage />
      </div>
    </section>
  )
}
