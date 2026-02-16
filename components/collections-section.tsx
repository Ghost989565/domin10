import Image from "next/image"
import { BookOpen, HandHeart, Music, Users, Gamepad2, Mic, Globe, Briefcase } from "lucide-react"

const primaryServices = [
  {
    icon: BookOpen,
    title: "Bible Study",
    description:
      "Deep dives into principles of the Kingdom with guided teaching, open discussion, and practical application.",
    image: "/images/bible-study.png",
  },
  {
    icon: HandHeart,
    title: "Prayer Nights",
    description:
      "Peaceful, faith-filled environments where participants intercede for one another, the community, and global needs.",
    image: "/images/prayer-nights.png",
  },
  {
    icon: Users,
    title: "Fellowship",
    description:
      "Regular gatherings that build authentic relationships through shared meals, conversations, and uplifting connection.",
    image: null,
  },
]

const secondaryServices = [
  {
    icon: Music,
    title: "Worship Nights",
    description: "Praise, music, and reflection — encountering God and worshipping freely.",
  },
  {
    icon: Gamepad2,
    title: "Game Nights",
    description: "Fun activities that strengthen friendships through board games and team challenges.",
  },
  {
    icon: Mic,
    title: "Open Mic Nights",
    description: "A safe platform for spoken word, music, testimonies, and God-centered creativity.",
  },
  {
    icon: Globe,
    title: "Community Service",
    description: "Food drives, neighborhood cleanups, and support for vulnerable groups in action.",
  },
  {
    icon: Briefcase,
    title: "Business Showcase",
    description: "Entrepreneurs and ministry leaders present their work and network with others.",
  },
]

export function CollectionsSection() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">What We Do</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            Our Services{" "}
            <span className="text-primary">in Action</span>
          </h3>
        </div>

        {/* Primary Services with Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {primaryServices.map((service) => (
            <div key={service.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-secondary">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-primary/10 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-primary/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-background/40" />
                <div className="absolute bottom-4 left-4 bg-primary rounded-lg p-2">
                  <service.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Secondary Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {secondaryServices.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">{service.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
