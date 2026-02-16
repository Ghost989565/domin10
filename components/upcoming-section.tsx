import { GraduationCap, Building2, Network, ArrowUpRight } from "lucide-react"

const projects = [
  {
    icon: GraduationCap,
    title: "Student Discipleship",
    status: "Launching Next School Year",
    description:
      "Recurring Saturday gatherings designed to pour into students spiritually, relationally, and practically. Focusing on biblical foundations, identity in Christ, and leadership development.",
    goals: [
      "Cultivate strong biblical foundations",
      "Equip students to apply faith in everyday life",
      "Foster mentorship and healthy peer community",
      "Develop emerging leaders rooted in faith",
    ],
  },
  {
    icon: Network,
    title: "Kingdom Resource Network",
    status: "In Development",
    description:
      "A trusted, centralized list of faith-aligned resources, Kingdom businesses, and service providers accessible to the community — free or at discounted rates.",
    goals: [
      "Reduce financial barriers to services",
      "Increase support for Kingdom businesses",
      "Strengthen community connections",
      "Demonstrate faith through generosity",
    ],
  },
  {
    icon: Building2,
    title: "Future Building",
    status: "Long-Term Vision",
    description:
      "A permanent hub for discipleship, outreach, and community connection — with rooms for gatherings, workshops, prayer, counseling, a food pantry, and community closet.",
    goals: [
      "Establish a permanent ministry home",
      "Create Christ-centered space for growth",
      "Expand programming and outreach",
      "Food pantry and community closet",
    ],
  },
]

export function UpcomingSection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">What&apos;s Next</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            Upcoming{" "}
            <span className="text-primary">Projects</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-xl border border-border p-8 flex flex-col hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <span className="inline-block text-xs tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-md mb-4 self-start font-semibold">
                {project.status}
              </span>

              <h4 className="text-xl font-bold text-foreground mb-3">{project.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{project.description}</p>

              <ul className="flex flex-col gap-2">
                {project.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
