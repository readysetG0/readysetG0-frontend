import { Inter } from 'next/font/google'
import 'leaflet/dist/leaflet.css'

const inter = Inter({ subsets: ['latin'] })

export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={inter.className}>
      <h1>hello~~~~</h1>
      {children}
    </div>
  )
}
