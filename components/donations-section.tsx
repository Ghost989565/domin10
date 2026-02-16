import Link from "next/link"
import { Heart, Shield } from "lucide-react"

const DONATION_URL = process.env.NEXT_PUBLIC_DONATION_URL || "#donate"

export function DonationsSection() {
  return (
    <section id="donate" className="py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Support the Mission</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
            Secure Giving for{" "}
            <span className="text-primary">Dominion Programs</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty">
            This giving module is ready for nonprofit verification and provider setup. Once enabled, supporters can
            contribute to outreach, training, and community activation from any device.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href={DONATION_URL}
              target={DONATION_URL.startsWith("http") ? "_blank" : undefined}
              rel={DONATION_URL.startsWith("http") ? "noopener noreferrer" : undefined}
              className="px-12 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-3"
            >
              <Heart size={20} />
              Give Now
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield size={16} className="shrink-0" />
            <span>Secure donations via trusted payment processors (provider to be finalized)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
