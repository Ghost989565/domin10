import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="connect" className="py-20 px-6 lg:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-20 py-16 bg-card rounded-2xl border border-border">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Get Connected</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance px-6">
            Ready to Build with{" "}
            <span className="text-primary">Dominion?</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed px-6 text-pretty">
            Join the newsletter, follow social updates, and partner with Dominion&apos;s next phase of outreach and
            impact programming.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
            <a
              href="https://www.instagram.com/_domin10n?igsh=aDRjeGZpNmpjdHN0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-3"
            >
              <Instagram size={18} />
              Follow Us on Instagram
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/domin10n-logo.png"
                alt="Dominion logo"
                width={36}
                height={36}
                className="invert"
              />
              <span className="text-xl font-bold tracking-wider text-foreground">
                Dominion
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-4 text-pretty">
              A digital-first platform for outreach storytelling, partner activation, secure giving, and community
              training programs.
            </p>
            <p className="text-sm text-muted-foreground">
              Built by Chesapeake Project Management Solution (CPMS)
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-wider uppercase text-foreground mb-6 font-semibold">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                Programs
              </Link>
              <Link href="#calendar" className="text-muted-foreground hover:text-foreground transition-colors">
                Calendar
              </Link>
              <Link href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </Link>
              <Link href="#operations" className="text-muted-foreground hover:text-foreground transition-colors">
                Operations
              </Link>
              <Link href="#donate" className="text-muted-foreground hover:text-foreground transition-colors">
                Donate
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm tracking-wider uppercase text-foreground mb-6 font-semibold">Connect</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/_domin10n?igsh=aDRjeGZpNmpjdHN0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <Instagram size={16} />
                @_domin10n
              </a>
              <span className="text-muted-foreground">Chesapeake Region + Virtual</span>
              <span className="text-muted-foreground text-sm">Dominion Web Presence</span>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            Dominion {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground italic font-serif">
            Structured and managed by CPMS.
          </p>
        </div>
      </div>
    </footer>
  )
}
