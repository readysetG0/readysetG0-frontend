import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { pretendardFont, raleway } from './font'


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
      <body className={`${pretendardFont.className} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  )
}
