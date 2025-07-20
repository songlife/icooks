import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import AboutSection from '@/components/about-section'
import SuccessStoriesSection from '@/components/success-stories-section'
import PortfolioSection from '@/components/portfolio-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'iCooks - 어린이 및 사회복지시설 전문 급식관리 서비스',
  description: '7년 이상의 경험과 노하우로 어린이급식지원센터와 사회복지시설에 최적화된 식단 작성 및 감수 업무를 제공합니다. 성북어린이·사회복지급식지원센터, 강남어린이급식지원센터와 파트너십.',
  alternates: {
    canonical: 'https://www.icooks.kr',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SuccessStoriesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}