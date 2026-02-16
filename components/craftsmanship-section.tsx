import Image from "next/image"

export function CraftsmanshipSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
            <Image
              src="/images/collage.png"
              alt="DOMIN10N Ministry community in action - fellowship, service, and prayer"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:py-12">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Who We Are</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight text-balance">
              Building a Scalable Web Presence for{" "}
              <span className="text-primary">Dominion</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              This platform is designed as Dominion&apos;s central digital hub where the mission can be clearly
              communicated and supporters can engage across outreach, events, and programs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty">
              The site architecture supports storytelling, donations, e-commerce, and education while staying lightweight
              through YouTube video embeds and a mobile-first user experience.
            </p>

            {/* Scripture */}
            <div className="border-l-2 border-primary pl-6 py-2 mb-10">
              <p className="text-foreground italic font-serif text-xl leading-relaxed mb-2">
                {'"A clear mission deserves a clear platform."'}
              </p>
              <p className="text-sm text-primary font-semibold tracking-wide">Dominion Web Presence Initiative</p>
            </div>

            <div className="grid grid-cols-2 gap-8 place-items-center">
              <div className="text-center w-full">
                <p className="text-4xl font-bold text-primary mb-2">30</p>
                <p className="text-sm tracking-wide text-muted-foreground">Projected launch (days)</p>
              </div>
              <div className="text-center w-full">
                <p className="text-4xl font-bold text-primary mb-2">4</p>
                <p className="text-sm tracking-wide text-muted-foreground">Core operational modules</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
