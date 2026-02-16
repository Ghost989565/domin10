import Image from "next/image"

export function HeritageSection() {
  return (
    <section id="community" className="py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Logo Explanation */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="lg:py-12 order-2 lg:order-1">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">
              The Power Behind Our Ministry
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight text-balance">
              The Principles of the{" "}
              <span className="text-primary">Kingdom</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              The crown of thorns with royal shading symbolizes the way our Lord and Savior received the DOMIN10N we now
              so freely walk in.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              As royal sons and daughters of the Most High, we see suffering and the trials of this life differently as
              we take dominion over our respective areas of society knowing the true glory that is present.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty">
              True kingship is marked by service and sacrifice, not power and pride. The paradoxes of the kingdom are
              represented by the inverted crown of glory in our logo.
            </p>

            {/* Key Scripture */}
            <div className="border-l-2 border-primary pl-6 py-2">
              <p className="text-foreground italic font-serif text-xl leading-relaxed mb-2">
                {'"Behold, I give you authority... over all the power of the enemy."'}
              </p>
              <p className="text-sm text-primary font-semibold tracking-wide">Luke 10:19</p>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden order-1 lg:order-2 flex items-center justify-center">
            <Image
              src="/images/domin10n-logo.png"
              alt="DOMIN10N Logo - Crown of thorns and inverted royal crown symbolizing Kingdom paradoxes"
              width={400}
              height={400}
              className="invert opacity-80"
            />
          </div>
        </div>

        {/* December Recap / Impact */}
        <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">
                Impact Report
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
                Meeting Needs. Building Faith.{" "}
                <span className="text-primary">Advancing the Kingdom.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                From community park cleanups with PG Park Police to prayer walks through Adelphi neighborhoods, assisted
                living outreach, and bi-weekly Bible study series — DOMIN10N is actively demonstrating Christ&apos;s love
                through practical service.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                He didn&apos;t call you to survive — He called you to reign.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/december-2025-impact.png"
                  alt="DOMINION December 2025 - Community engagement, fellowship, Bible study, prayer walks, and assisted living outreach"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">6+</p>
                  <p className="text-sm text-muted-foreground">Monthly Events</p>
                </div>
                <div className="bg-background rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">3</p>
                  <p className="text-sm text-muted-foreground">Service Areas</p>
                </div>
                <div className="bg-background rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">DMV</p>
                  <p className="text-sm text-muted-foreground">Regional Focus</p>
                </div>
                <div className="bg-background rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">1</p>
                  <p className="text-sm text-muted-foreground">Kingdom Mission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
