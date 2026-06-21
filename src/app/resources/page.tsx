import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import { CONTACT } from '@/lib/site'
import { RESOURCES, RESOURCE_TYPES } from '@/lib/resources'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import ResourceLibrary from '@/components/resources/ResourceLibrary'

export const metadata: Metadata = {
  title: 'Resources & Downloads',
  description:
    'Datasheets, brochures, catalogs and whitepapers across every MTP solution and brand — plus the MTP company profile. Filter by type.',
  alternates: { canonical: '/resources' },
}

export default function ResourcesHubPage() {
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
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Resources & Downloads</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mb-6">
            Everything you need to spec, in one place
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-10">
            Datasheets, brochures, catalogs and whitepapers across every solution and brand — plus the MTP
            company profile.
          </p>
          <a
            href={CONTACT.brochureUrl}
            className="inline-flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
          >
            <Download size={16} /> Company Brochure
          </a>
        </div>
      </section>

      {/* Library */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-2">Resource library</h2>
            <p className="text-[#4A5568] text-base max-w-2xl mb-10">
              Filter by type. Some items download directly; others are available on request.
            </p>
          </Reveal>
          <ResourceLibrary resources={RESOURCES} filters={RESOURCE_TYPES} />
        </div>
      </section>

      <CtaBand
        title="Can't find a document?"
        text="Tell us the brand or product and we'll send the latest datasheet, catalog or pricing straight to your inbox."
        primaryLabel="Request a Document"
        secondaryLabel="View Solutions"
        secondaryHref="/solutions"
      />
    </main>
  )
}
