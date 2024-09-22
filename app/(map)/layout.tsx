import 'leaflet/dist/leaflet.css'


export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
    </div>
  )
}
