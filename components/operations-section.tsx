import Link from "next/link"
import { ShoppingBag, GraduationCap } from "lucide-react"

const MERCH_URL = process.env.NEXT_PUBLIC_MERCH_URL || "#operations"
const COURSE_URL = process.env.NEXT_PUBLIC_COURSE_URL || "#operations"

const modules = [
  {
    icon: ShoppingBag,
    title: "E-Commerce Foundation",
    description:
      "Merchandise storefront structure for apparel, campaigns, and supporter products. Product pages and payment flows are ready for provider integration.",
    cta: "Preview Store",
    href: MERCH_URL,
  },
  {
    icon: GraduationCap,
    title: "Education Framework",
    description:
      "Course hosting structure for internal onboarding and external training, including curriculum tracks, lesson modules, and future gated content.",
    cta: "View Learning Hub",
    href: COURSE_URL,
  },
]

export function OperationsSection() {
  return (
    <section id="operations" className="py-28 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Operational Modules</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            Build Once. Scale <span className="text-primary">Across Programs.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {modules.map((module) => {
            const isExternal = module.href.startsWith("http")
            return (
              <article key={module.title} className="rounded-xl border border-border bg-card p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-5">
                  <module.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{module.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-6">{module.description}</p>
                <Link
                  href={module.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
                >
                  {module.cta}
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
