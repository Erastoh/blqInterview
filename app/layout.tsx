import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navs/NavBar'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TestValley - Buying Electronics',
  description: 'Buying Electronics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
        <NavBar></NavBar>
        <main className='flex-grow'>{children}</main>
          <Footer></Footer>
          </div>
      </body>
    </html>
  )
}
