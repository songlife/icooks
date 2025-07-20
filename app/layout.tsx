import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR, Inter } from 'next/font/google'
import Providers from './providers'
import { Toaster } from '@/components/ui/toaster'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'iCooks - 어린이 및 사회복지시설 전문 급식관리 서비스',
  description: '7년 이상의 경험과 노하우로 어린이급식지원센터와 사회복지시설에 최적화된 식단 작성 및 감수 업무를 제공합니다. 성북어린이·사회복지급식지원센터, 강남어린이급식지원센터 파트너.',
  keywords: [
    '어린이급식지원센터',
    '사회복지급식',
    '식단작성',
    '급식감수',
    '영양관리',
    '어린이영양',
    '급식관리',
    '성북어린이급식지원센터',
    '강남어린이급식지원센터',
    'iCooks',
    '급식컨설팅',
    '영양교육'
  ],
  authors: [{ name: 'iCooks' }],
  creator: 'iCooks',
  publisher: 'iCooks',
  openGraph: {
    title: 'iCooks - 어린이 및 사회복지시설 전문 급식관리 서비스',
    description: '7년 이상의 경험과 노하우로 어린이급식지원센터와 사회복지시설에 최적화된 식단 작성 및 감수 업무를 제공합니다.',
    url: 'https://www.icooks.kr',
    siteName: 'iCooks',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'iCooks - 어린이 급식관리 전문 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iCooks - 어린이 및 사회복지시설 전문 급식관리 서비스',
    description: '7년 이상의 경험과 노하우로 어린이급식지원센터와 사회복지시설에 최적화된 식단 작성 및 감수 업무를 제공합니다.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://www.icooks.kr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "iCooks",
              "description": "어린이 및 사회복지시설 전문 급식관리 서비스",
              "url": "https://www.icooks.kr",
              "telephone": "+82-2-1234-5678",
              "email": "info@icooks.kr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "테헤란로 123",
                "addressLocality": "강남구",
                "addressRegion": "서울특별시",
                "addressCountry": "KR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.5665",
                "longitude": "126.9780"
              },
              "serviceArea": {
                "@type": "Place",
                "name": "서울특별시"
              },
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://www.facebook.com/icooks",
                "https://www.instagram.com/icooks",
                "https://www.youtube.com/icooks"
              ]
            })
          }}
        />
      </head>
      <body className="font-korean antialiased">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}