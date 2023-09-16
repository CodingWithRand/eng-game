import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Preliminary`,
  description: '-',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='pre-lesson' lang="en">
      <body className={`${inter.className} pre-lesson`}>{children}</body>
    </html>
  )
}
