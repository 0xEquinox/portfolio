import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio showcasing projects, skills, and blog posts.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
