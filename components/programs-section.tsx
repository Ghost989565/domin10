import { Home, HandHeart, GraduationCap } from "lucide-react"

const programs = [
  {
    icon: Home,
    title: "Dominion Welcome Home Outreach",
    description:
      "A relationship-first outreach program connecting individuals and families with practical resources, faith support, and stable community pathways.",
    pillars: ["Reentry and stabilization support", "Prayer and mentorship touchpoints", "Community resource navigation"],
  },
  {
    icon: HandHeart,
    title: "Neighborhood Impact",
    description:
      "Service initiatives that meet local needs through volunteer projects, care packages, partner activations, and direct neighborhood engagement.",
    pillars: ["Quarterly service campaigns", "Partnered outreach days", "Volunteer leadership development"],
  },
  {
    icon: GraduationCap,
    title: "Dominion Learning Track",
    description:
      "Internal and external learning experiences designed to equip volunteers, leaders, and participants with practical and mission-aligned training.",
    pillars: ["Leadership and team onboarding", "Faith and life-skills sessions", "Digital curriculum framework"],
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-28 px-6 lg:px-12 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Program Architecture</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            Outreach Programs Built for <span className="text-primary">Real Impact</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <article key={program.title} className="rounded-xl border border-border bg-background p-7">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-5">
                <program.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{program.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-5">{program.description}</p>
              <ul className="space-y-2">
                {program.pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
