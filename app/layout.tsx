import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | 🌍ReadySetGo✈',
    default: '🌍ReadySetGo✈',
  },
  description: '레디셋고 1차 개발',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
