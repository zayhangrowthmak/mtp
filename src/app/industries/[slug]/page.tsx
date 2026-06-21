import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react'
import { getIndustry, INDUSTRY_SLUGS } from '@/lib/industries'
import { INDUSTRY_ICON } from '@/lib/industryIcons'
import { SOLUTION_ICON } from '@/lib/solutionIcons'
import { SITE } from '@/lib/site'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const ind = getIndustry(slug)
  if (!ind) return {}
  return {
    title: `${ind.name} Security Solutions`,
    description: `${ind.name}: ${ind.tagline} Security and safety solutions distributed by MTP across the UAE and Oman.`,
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: {
      title: `${ind.name} Security Solutions | MTP Distribution`,
      description: ind.tagline,
      url: `${SITE.baseUrl}/industries/${ind.slug}`,
    },
  }
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params
  const ind = getIndustry(slug)
  if (!ind) notFound()

  const Icon = INDUSTRY_ICON[ind.slug]

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE.baseUrl}/industries` },
      { '@type': 'ListItem', position: 3, name: ind.name, item: `${SITE.baseUrl}/industries/${ind.slug}` },
    ],
  }

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* 1 — Hero */}
      <section className="bg-[#0D1B3E] pt-40 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-white/45 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{ind.name}</span>
          </nav>

          <span className="w-12 h-12 rounded-xl bg-[#00B4C8]/15 flex items-center justify-center mb-5">
            {Icon && <Icon size={24} className="text-[#00B4C8]" />}
          </span>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-3xl mb-6">
            {ind.name}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">{ind.tagline}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
          >
            Discuss your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 2 — Challenges & requirements */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">The challenge</span>
            </div>
            <h2 className="text-[#0D1B3E] text-3xl font-semibold tracking-tight mb-5">
              What {ind.name.toLowerCase()} demands
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed">
              Operations in this sector carry distinct security, safety and uptime requirements. MTP and its
              integrator partners address them with engineered, multi-brand systems.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {ind.challenges.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 bg-[#F4F8FF] border border-[#E2ECF8] rounded-lg px-5 py-4"
                >
                  <CheckCircle2 size={18} className="text-[#00B4C8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0D1B3E] text-sm font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 3 — Recommended solutions */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
              Recommended solutions
            </h2>
            <p className="text-[#4A5568] text-base max-w-2xl mb-10">
              The solution lines MTP maps to {ind.name.toLowerCase()} — engineered to work as one.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ind.solutions.map((s, i) => {
              const SIcon = SOLUTION_ICON[s.id]
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="group flex items-center gap-4 bg-white border border-[#E2ECF8] rounded-xl p-6 hover:border-[#00B4C8]/50 hover:shadow-[0_12px_36px_-16px_rgba(13,27,62,0.2)] transition-all"
                  >
                    <span className="w-12 h-12 rounded-xl bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
                      {SIcon && <SIcon size={22} className="text-[#00B4C8]" />}
                    </span>
                    <span className="flex-1 text-[#0D1B3E] font-semibold">{s.name}</span>
                    <ArrowUpRight size={18} className="text-[#CBD5E1] group-hover:text-[#00B4C8] transition-colors" />
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4 — Reference projects */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="bg-[#0D1B3E] rounded-2xl px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Proof</span>
                <h2 className="text-white text-2xl font-semibold tracking-tight mt-2">
                  Reference projects in {ind.name.toLowerCase()}
                </h2>
                <p className="text-white/50 text-sm mt-2 max-w-xl">
                  Browse MTP case studies filtered to this sector.
                </p>
              </div>
              <Link
                href={`/projects?industry=${ind.slug}`}
                className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-6 py-3 rounded-sm transition-colors flex-shrink-0"
              >
                View Projects <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 — Enquiry CTA */}
      <CtaBand
        title={`Securing ${ind.name.toLowerCase()}?`}
        text="Share the site, scale and compliance needs. MTP pre-sales will recommend the solution mix and quote it across every brand we carry."
        primaryLabel="Request a Quote"
        secondaryLabel="View Solutions"
        secondaryHref="/solutions"
      />
    </main>
  )
}
