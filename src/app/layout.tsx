import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mima Booking',
  description: 'Discover Your Next Adventure: Explore our website to seamlessly book tours and hotels worldwide. Uncover unforgettable travel experiences with ease and convenience.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any'/>
      </head>
      <body className={jost.className}>{children}</body>
    </html>
  )
}
