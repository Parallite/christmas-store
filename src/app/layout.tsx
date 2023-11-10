import type { Metadata } from 'next'
import './globals.css'
import { eczarFont } from '@/fonts/fonts'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Christmas gifts store',
  description: 'Find the Christmas gifts in our online store. Creative decorations, lights, toys and fresh trees',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={eczarFont.className}>
        <div className='relative flex justify-between flex-col bg-gradient-primary-bg'>
          <Header />
          <main className='bg-primary-bg'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
