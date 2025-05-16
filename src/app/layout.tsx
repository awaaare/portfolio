import type { Metadata } from 'next'
import '@/styles/globals.css'
import CanvasBackground from '@/components/CanvasBackground'

export const metadata: Metadata = {
  title: 'aware',
  icons: {
    icon: '/images/avatar.png'
  },
  description: 'Personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="demo-3">
      <body className="min-h-screen">
        {children}
        <CanvasBackground />
        {/* Подключаем скрипты */}
        <script src="/js/noise.min.js" async />
        <script src="/js/util.js" async />
      </body>
    </html>
  )
}