import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HOTMESS Editorial Commerce',
  description: 'Queer engine. Streamed. Scanned. Worn.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}