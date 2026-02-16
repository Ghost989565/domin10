import Image from "next/image"
import { Crown, Flame, Heart, Users, Sparkles } from "lucide-react"

const values = [
  {
    icon: Crown,
    title: "Kingdom Identity",
    description:
      "We believe every believer is a child of God, created with purpose and endowed with authority. Dominion begins with knowing who we are in Christ.",
  },
  {
    icon: Flame,
    title: "Holy Boldness",
    description:
      "We believe Christians should be bold, not passive — walking in authority over fear, sin, and worldly limitations.",
  },
  {
    icon: Sparkles,
    title: "Transformation & Impact",
    description:
      "Dominion is not about status — it's about transformation. We aim to impact lives, families, communities, and industries through kingdom living.",
  },
  {
    icon: Heart,
    title: "Authentic Community",
    description:
      "We foster real, vulnerable, and accountable relationships rooted in love, support, and mutual encouragement. No one walks alone.",
  },
  {
    icon: Users,
    title: "Unity in Diversity",
    description:
      "We honor the diverse gifts, cultures, and callings in the Body of Christ. Dominion is built on collaboration, not competition.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Our Values</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            The Principles That{" "}
            <span className="text-primary">Guide Us</span>
          </h3>
        </div>

        <div className="relative w-full max-w-4xl mx-auto mb-20 rounded-xl overflow-hidden border border-border">
          <Image
            src="/images/mission-statements.png"
            alt="DOMIN10N Mission Statements - Unity in Diversity, Kingdom Identity, Authentic Community, Holy Boldness, Transformation & Impact"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-8 bg-secondary/50 rounded-xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
