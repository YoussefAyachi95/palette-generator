import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ImageProvider } from '../context/imageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Color Palette | Home',
  description: 'Check the color palette of your images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ImageProvider>
        <body className={inter.className}>{children}</body>
      </ImageProvider>
    </html>
  )
}
