const testimonials = [
  {
    quote:
      "Dominion helped us move from planning to action. The team brought structure, care, and consistency to our outreach goals.",
    author: "Community Volunteer",
  },
  {
    quote:
      "The Welcome Home framework gave our partners a clear way to support families with dignity and accountability.",
    author: "Program Partner",
  },
]

const sponsors = ["Partner Church Network", "Local Business Coalition", "Community Impact Alliance", "Regional Training Collective"]

export function EngagementSection() {
  return (
    <section id="community" className="py-28 px-6 lg:px-12 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Community Engagement</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            Testimonials, Partners, and Sponsor <span className="text-primary">Visibility</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-xl border border-border bg-background p-7">
              <p className="text-lg font-serif text-foreground leading-relaxed mb-5">"{testimonial.quote}"</p>
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">{testimonial.author}</p>
            </article>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-background p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">Current and Future Sponsors</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sponsors.map((sponsor) => (
              <div key={sponsor} className="rounded-lg border border-border bg-card px-4 py-5 text-center text-sm text-muted-foreground">
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
