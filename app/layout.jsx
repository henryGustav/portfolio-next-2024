import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
// components
import Header from '@/components/Header'
import CursorGlow from '@/components/CursorGlow'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
import "primereact/resources/themes/lara-light-cyan/theme.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
})

export const metadata = {
  title: 'Henry Tipantuña | Desarrollador Full Stack',
  description:
    'Portafolio de Henry Tipantuña, desarrollador full stack con más de 4 años de experiencia creando aplicaciones web de alto impacto.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <PrimeReactProvider>
          <CursorGlow />
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </PrimeReactProvider>
      </body>
    </html>
  )
}
