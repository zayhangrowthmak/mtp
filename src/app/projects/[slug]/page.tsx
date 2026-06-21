import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, ChevronRight, CheckCircle2, Info } from 'lucide-react'
import { PROJECTS, PROJECT_SLUGS, projectBySlug } from '@/lib/projects'
import { SOLUTION_NAV, INDUSTRIES, SITE } from '@/lib/site'
import { SOLUTION_ICON } from '@/lib/solutionIcons'
import { brandBySlug } from '@/lib/brands'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = projectBySlug(slug)
  if (!p) return {}
  return {
    title: `${p.title} — Case Study`,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: `${p.title} | MTP Distribution`, description: p.summary, url: `${SITE.baseUrl}/projects/${p.slug}` },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const p = projectBySlug(slug)
  if (!p) notFound()

  const industryName = INDUSTRIES.find((i) => i.slug === p.industry)?.name ?? p.industry
  const solutions = p.solutions.map((id) => SOLUTION_NAV.find((s) => s.id === id)).filter(Boolean) as {
    id: string; slug: string; name: string; short: string
  }[]
  const brands = p.brands.map(brandBySlug).filter(Boolean) as NonNullable<ReturnType<typeof brandBySlug>>[]
  const related = PROJECTS.filter(
    (o) => o.slug !== p.slug && (o.industry === p.industry || o.solutions.some((s) => p.solutions.includes(s)))
  ).slice(0, 3)

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE.baseUrl}/projects` },
      { '@type': 'ListItem', position: 3, name: p.title, item: `${SITE.baseUrl}/projects/${p.slug}` },
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
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{p.title}</span>
          </nav>

          <Link
            href={`/industries/${p.industry}`}
            className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase hover:underline"
          >
            {industryName}
          </Link>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-3xl mt-3 mb-4">
            {p.title}
          </h1>
          <p className="text-white/45 text-sm mb-5">{p.client}</p>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{p.summary}</p>
        </div>
      </section>

      {/* Sample notice */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="flex items-start gap-3 bg-[#FFF7ED] border border-[#FED7AA] rounded-lg px-5 py-3.5">
          <Info size={18} className="text-[#EA580C] flex-shrink-0 mt-0.5" />
          <p className="text-[#9A3412] text-sm">
            <span className="font-semibold">Illustrative sample.</span> Placeholder case study — to be
            replaced with an approved, permission-cleared deployment.
          </p>
        </div>
      </div>

      {/* 2 — Challenge / Solution / Result */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <Reveal>
            <h2 className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase mb-3">Challenge</h2>
            <p className="text-[#4A5568] text-base leading-relaxed">{p.challenge}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase mb-3">Solution</h2>
            <p className="text-[#4A5568] text-base leading-relaxed">{p.solution}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <h2 className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase mb-3">Result</h2>
            <ul className="space-y-2.5">
              {p.result.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00B4C8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0D1B3E] text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 3 — Solutions & brands used */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#0D1B3E] text-xl font-semibold tracking-tight mb-5">Solutions used</h2>
            <div className="flex flex-wrap gap-3">
              {solutions.map((s) => {
                const Icon = SOLUTION_ICON[s.id]
                return (
                  <Link
                    key={s.slug}
                    href={`/solutions/${s.slug}`}
                    className="flex items-center gap-2 bg-white border border-[#E2ECF8] rounded-full px-4 py-2 text-sm text-[#0D1B3E] hover:border-[#00B4C8]/50 transition-colors"
                  >
                    {Icon && <Icon size={15} className="text-[#00B4C8]" />}
                    {s.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div>
            <h2 className="text-[#0D1B3E] text-xl font-semibold tracking-tight mb-5">Brands deployed</h2>
            <div className="flex flex-wrap gap-3">
              {brands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}`}
                  className="bg-white border border-[#E2ECF8] rounded-full px-4 py-2 text-sm text-[#0D1B3E] hover:border-[#00B4C8]/50 transition-colors"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Related projects */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[#0D1B3E] text-2xl lg:text-3xl font-semibold tracking-tight mb-8">Related projects</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/projects/${r.slug}`}
                  className="group bg-white border border-[#E2ECF8] rounded-xl p-6 hover:border-[#00B4C8]/50 hover:shadow-[0_12px_36px_-16px_rgba(13,27,62,0.2)] transition-all"
                >
                  <span className="text-[#00B4C8] text-[10px] font-semibold tracking-widest uppercase">
                    {INDUSTRIES.find((i) => i.slug === r.industry)?.name}
                  </span>
                  <h3 className="text-[#0D1B3E] font-semibold mt-2 mb-3 leading-tight">{r.title}</h3>
                  <span className="flex items-center gap-1 text-[#00B4C8] text-xs font-semibold group-hover:gap-2 transition-all">
                    Read <ArrowUpRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5 — Enquiry CTA */}
      <CtaBand
        title="Planning something similar?"
        text="Share the requirement and MTP pre-sales will scope the solution, brands and integrator for your site."
        primaryLabel="Request a Quote"
        secondaryLabel="View All Projects"
        secondaryHref="/projects"
      />
    </main>
  )
}
