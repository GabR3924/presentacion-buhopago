import './globals.css'

export const metadata = {
  title: 'Presentación BuhoPago',
  description: 'Plataforma de presentación para BuhoPago - Modelo de negocio y análisis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
