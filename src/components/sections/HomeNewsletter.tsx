import { Mail } from 'lucide-react'
import Reveal from '@/components/Reveal'
import NewsletterForm from '@/components/layout/NewsletterForm'

export default function HomeNewsletter() {
  return (
    <section className="py-20 bg-[#F4F8FF] border-y border-[#E2ECF8]">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="bg-white border border-[#E2ECF8] rounded-2xl px-8 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <span className="w-12 h-12 rounded-xl bg-[#00B4C8]/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <Mail size={22} className="text-[#00B4C8]" />
              </span>
              <h2 className="text-[#0D1B3E] text-2xl lg:text-3xl font-semibold tracking-tight mb-2">
                Stay ahead of the curve
              </h2>
              <p className="text-[#4A5568] text-base max-w-md">
                Brand launches, new projects, events and training dates — straight to your inbox.
              </p>
            </div>
            <div className="flex-shrink-0">
              <NewsletterForm variant="light" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
