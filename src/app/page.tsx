import HeroSection from '@/components/sections/HeroSection'
import CounterSection from '@/components/sections/CounterSection'
import SolutionsSection from '@/components/sections/SolutionsSection'
import BrandsSection from '@/components/sections/BrandsSection'
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection'
import HomeWhyMtp from '@/components/sections/HomeWhyMtp'
import HomeIndustries from '@/components/sections/HomeIndustries'
import HomeProjects from '@/components/sections/HomeProjects'
import ClientsSection from '@/components/sections/ClientsSection'
import HomeEvents from '@/components/sections/HomeEvents'
import NewsSection from '@/components/sections/NewsSection'
import HomeNewsletter from '@/components/sections/HomeNewsletter'
import CtaBand from '@/components/CtaBand'

// Homepage section order follows the Build Reference sheet (15 sections):
// utility bar + mega-nav + footer are global (in the layout).
export default function HomePage() {
  return (
    <main>
      <HeroSection />            {/* 3 — Hero */}
      <CounterSection />         {/* 4 — Trust / Stats bar */}
      <SolutionsSection />       {/* 5 — Solutions overview */}
      <BrandsSection />          {/* 6 — Brands showcase (→ brand pages) */}
      <FeaturedProductsSection />{/* Featured Products (client-requested) */}
      <HomeWhyMtp />             {/* 7 — Why MTP / Value-Added */}
      <HomeIndustries />         {/* 8 — Industries served */}
      <HomeProjects />           {/* 9 — Featured Projects / Case Studies */}
      <ClientsSection />         {/* 10 — Clients / References logos */}
      <HomeEvents />             {/* 11 — Events & Activities highlight */}
      <CtaBand                   /* 12 — Partner CTA band */
        title="Become an MTP partner"
        text="Multi-brand sourcing, project pricing and pre-sales engineering — built to help system integrators win and deliver."
        primaryLabel="Become a Partner"
        primaryHref="/partners"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
      <NewsSection />            {/* 13 — News / Insights teaser */}
      <HomeNewsletter />         {/* 14 — Newsletter signup */}
    </main>
  )
}
