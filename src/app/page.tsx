import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SolutionsSection from '@/components/sections/SolutionsSection'
import CounterSection from '@/components/sections/CounterSection'
import BrandsSection from '@/components/sections/BrandsSection'
import ClientsSection from '@/components/sections/ClientsSection'
import NewsSection from '@/components/sections/NewsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <CounterSection />
      <BrandsSection />
      <ClientsSection />
      <NewsSection />
      <ContactSection />
    </main>
  )
}
