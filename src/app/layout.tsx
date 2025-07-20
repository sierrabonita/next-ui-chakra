import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/app/providers'

export const metadata: Metadata = {
  title: 'next-chakra-ui',
  description: 'Next.js + Chakra UI',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
