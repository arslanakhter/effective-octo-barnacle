import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wisconsin Family Dental - Comprehensive Dental Care',
  description: 'Leading dental clinic in Wisconsin offering comprehensive family dentistry, cosmetic procedures, implants, and preventive care. Accepting new patients.',
  openGraph: {
    title: 'Wisconsin Family Dental - Comprehensive Dental Care',
    description: 'Leading dental clinic in Wisconsin offering comprehensive family dentistry, cosmetic procedures, and preventive care.',
    type: 'website',
    url: 'https://wisconsindental.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisconsin Family Dental',
    description: 'Comprehensive dental care in Wisconsin',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dentist',
            name: 'Wisconsin Family Dental',
            description: 'Comprehensive dental care in Wisconsin',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Madison',
              addressRegion: 'WI',
              addressCountry: 'US',
            },
          })}
        </script>
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
