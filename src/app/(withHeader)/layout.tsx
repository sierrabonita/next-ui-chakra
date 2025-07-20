import { Providers } from '@/app/providers'
import Header from '@/components/ui/Header'

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
