'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ReactNode } from 'react'

type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0]

export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />
}
