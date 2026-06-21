import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/projects'
import { INDUSTRIES } from '@/lib/site'
import Reveal from '@/components/Reveal'

const industryName = (slug: string) => INDUSTRIES.find((i) => i.slug === slug)?.name ?? slug

export default function HomeProjects() {
  const featured = PROJECTS.slice(0, 3)

  return (
    <section className="py-24 lg:py-32 bg-[#0D1B3E] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-px bg-[#00B4C8]" />
                <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Projects</span>
              </div>
              <h2 className="text-white text-4xl lg:text-5xl font-semibold tracking-tight">
                Proof, deployed across the Gulf
              </h2>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-[#00B4C8] font-semibold text-sm hover:gap-3 transition-all"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block h-full bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-[#00B4C8]/40 hover:bg-white/[0.07] transition-all"
              >
                <span className="text-[#00B4C8] text-[10px] font-semibold tracking-widest uppercase">
                  {industryName(p.industry)}
                </span>
                <h3 className="text-white font-semibold text-lg leading-tight mt-2 mb-3">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{p.summary}</p>
                <span className="flex items-center gap-1 text-[#00B4C8] text-xs font-semibold group-hover:gap-2 transition-all">
                  Read case study <ArrowUpRight size={13} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
