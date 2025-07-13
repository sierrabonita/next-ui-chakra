'use client'

import { Provider } from '@/components/ui/provider'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>
}
