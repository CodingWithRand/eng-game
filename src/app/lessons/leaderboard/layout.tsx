import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./l.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leaderboard',
  description: '-',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='leaderboard' lang="en">
      <body className={`${inter.className} leaderboard`}>{children}</body>
    </html>
  )
}
