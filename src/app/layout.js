import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rest Country Api',
  description: 'View list of countries',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* header */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}