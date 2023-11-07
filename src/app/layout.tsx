import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { eczarFont } from '../../public/fonts/fonts'

export const metadata: Metadata = {
  title: 'Christmas gifts',
  description: 'Christmas online shop hemo page',
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
