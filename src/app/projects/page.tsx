import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { SOLUTION_NAV, INDUSTRIES } from '@/lib/site'
import { PROJECTS } from '@/lib/projects'
import { CLIENTS } from '@/lib/data'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import ProjectGrid from '@/components/projects/ProjectGrid'

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'How MTP-distributed security and infrastructure systems are deployed across the Gulf — filter case studies by industry, solution and brand.',
  alternates: { canonical: '/projects' },
}

const solutionFilters = [
  { id: 'all', label: 'All projects' },
  ...SOLUTION_NAV.map((s) => ({ id: s.id, label: s.short })),
]
const industryNames = Object.fromEntries(INDUSTRIES.map((i) => [i.slug, i.name]))
const clientLogos = CLIENTS.filter((c) => c.logo && c.logo.endsWith('.jpg'))

export default function ProjectsHubPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-44 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-[#00B4C8]" />
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Projects</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mb-6">
            Proof, deployed across the Gulf
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-10">
            From government surveillance to energy, transport and data centres — see how MTP-distributed
            systems perform in the region&apos;s most demanding environments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
          >
            Discuss your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-start gap-3 bg-[#FFF7ED] border border-[#FED7AA] rounded-lg px-5 py-3.5 mb-10">
              <Info size={18} className="text-[#EA580C] flex-shrink-0 mt-0.5" />
              <p className="text-[#9A3412] text-sm">
                <span className="font-semibold">Illustrative samples.</span> These case studies are
                placeholders demonstrating the format — real, permission-cleared deployments will replace
                them before launch.
              </p>
            </div>
          </Reveal>
          <ProjectGrid projects={PROJECTS} solutionFilters={solutionFilters} industryNames={industryNames} />
        </div>
      </section>

      {/* Client references */}
      {clientLogos.length > 0 && (
        <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Reveal>
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Trusted by</span>
              <h2 className="text-[#0D1B3E] text-2xl lg:text-3xl font-semibold tracking-tight mt-3 mb-10">
                Institutions that rely on MTP-distributed systems
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {clientLogos.map((c) => (
                <div
                  key={c.slug}
                  className="flex items-center justify-center h-20 bg-white border border-[#E2ECF8] rounded-lg px-4"
                  title={c.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={`${c.name} logo`} className="max-h-11 max-w-[80%] w-auto object-contain mix-blend-multiply" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Have a project in mind?"
        text="Tell us the site, scale and timeline. MTP pre-sales will scope it and put the right integrator partner on it."
        primaryLabel="Request a Quote"
        secondaryLabel="View Industries"
        secondaryHref="/industries"
      />
    </main>
  )
}
