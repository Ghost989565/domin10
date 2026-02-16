import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Crown of thorns - symbol of dominion through Christ"
          fill
          className="object-cover transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-background/85 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 mt-20 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center hero-animate hero-animate-delay-1">
          <Image
            src="/images/domin10n-logo.png"
            alt="Dominion logo"
            width={120}
            height={120}
            className="invert opacity-90"
          />
        </div>
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-semibold hero-animate hero-animate-delay-2">
          Outreach. Growth. Community.
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-8 leading-tight text-balance hero-animate hero-animate-delay-3">
          A Digital Home for
          <br />
          <span className="text-primary">Dominion.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty hero-animate hero-animate-delay-4">
          Dominion&apos;s web presence is built to share the mission, activate support, and equip the community through
          outreach programs, giving, merchandise, and education.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-animate hero-animate-delay-5">
          <Link
            href="#programs"
            className="px-10 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Programs
          </Link>
          <Link
            href="#donate"
            className="px-10 py-4 border border-border text-foreground text-sm font-semibold tracking-wider uppercase rounded-lg hover:bg-secondary transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
          >
            Support The Mission
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hero-animate hero-animate-delay-6">
        <div className="flex flex-col items-center gap-3 animate-bounce-slow">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
