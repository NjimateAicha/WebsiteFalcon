import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FalconDeev — Web, SaaS & Mobile | Aicha Njimate',
  description:
    'Agence de développement web, mobile et SaaS à Kenitra, Maroc. React.js, Laravel, Flutter. Fondée par Aicha Njimate. Web, mobile & SaaS development agency in Kenitra, Morocco.',
  keywords: [
    'agence web Kenitra',
    'développement web Maroc',
    'React Laravel Flutter',
    'FalconDeev',
    'Aicha Njimate',
    'développeuse full-stack Maroc',
    'SaaS MVP Maroc',
    'mobile app development Morocco',
    'web agency Morocco',
    'Next.js Laravel agency',
  ],
  authors: [{ name: 'Aicha Njimate', url: 'https://aichanjimate.com' }],
  creator: 'Aicha Njimate',
  publisher: 'FalconDeev',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://falcondeev.com',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    alternateLocale: 'en_US',
    url: 'https://falcondeev.com',
    siteName: 'FalconDeev',
    title: 'FalconDeev — Web, SaaS & Mobile | Aicha Njimate',
    description:
      'Agence de développement web, mobile et SaaS à Kenitra, Maroc. React.js, Laravel, Flutter. Fondée par Aicha Njimate.',
    images: [
      {
        url: 'https://www.aichanjimate.com/assets/img/me.jpeg',
        width: 1200,
        height: 630,
        alt: 'FalconDeev — Aicha Njimate — Web, SaaS & Mobile Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FalconDeev — Web, SaaS & Mobile | Aicha Njimate',
    description:
      'Agence de développement web, mobile et SaaS à Kenitra, Maroc. Fondée par Aicha Njimate.',
    images: ['https://www.aichanjimate.com/assets/img/me.jpeg'],
    creator: '@falcondeev',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://falcondeev.com/#organization',
      name: 'FalconDeev',
      url: 'https://falcondeev.com',
      logo: 'https://falcondeev.com/logo.svg',
      description:
        'Agence de développement web, mobile et SaaS à Kenitra, Maroc. Fondée par Aicha Njimate.',
      foundingDate: '2022',
      founder: {
        '@type': 'Person',
        '@id': 'https://falcondeev.com/#person',
        name: 'Aicha Njimate',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kenitra',
        addressCountry: 'MA',
      },
      sameAs: [
        'https://www.instagram.com/falcondeev',
        'https://www.linkedin.com/in/aicha-njimate',
        'https://www.tiktok.com/@falcondeev',
        'https://www.youtube.com/@AichaNjimate',
        'https://github.com/NjimateAicha',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'njimateaicha@gmail.com',
        availableLanguage: ['French', 'English', 'Arabic'],
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://falcondeev.com/#person',
      name: 'Aicha Njimate',
      url: 'https://aichanjimate.com',
      jobTitle: 'CEO & Founder, Full-Stack Developer',
      worksFor: {
        '@id': 'https://falcondeev.com/#organization',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kenitra',
        addressCountry: 'MA',
      },
      sameAs: [
        'https://www.linkedin.com/in/aicha-njimate',
        'https://github.com/NjimateAicha',
        'https://aichanjimate.com',
      ],
      knowsAbout: ['React.js', 'TypeScript', 'Laravel', 'Flutter', 'Next.js', 'DevOps', 'SaaS'],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://falcondeev.com/#localbusiness',
      name: 'FalconDeev',
      url: 'https://falcondeev.com',
      description:
        'Web, mobile & SaaS development agency founded by Aicha Njimate in Kenitra, Morocco.',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kenitra',
        addressRegion: 'Rabat-Salé-Kénitra',
        addressCountry: 'MA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '34.2610',
        longitude: '-6.5802',
      },
      openingHours: 'Mo-Fr 09:00-18:00',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web & Mobile Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full-Stack Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS & MVP Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce & WordPress' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '1:1 Tech Consultation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deployment & DevOps' } },
        ],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  )
}
