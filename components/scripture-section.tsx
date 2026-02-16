import Image from "next/image"

const scriptures = [
  {
    reference: "Genesis 1:28",
    text: "Be fruitful and multiply; fill the earth and subdue it; have dominion...",
  },
  {
    reference: "Acts 2:42",
    text: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.",
  },
  {
    reference: "Luke 10:19",
    text: "Behold, I give you authority... over all the power of the enemy.",
  },
  {
    reference: "Romans 8:37",
    text: "In all these things we are more than conquerors...",
  },
  {
    reference: "Matthew 28:19-20",
    text: "Therefore go and make disciples of all nations... And surely I am with you always, to the very end of the age.",
  },
  {
    reference: "Hebrews 10:24-25",
    text: "And let us consider how to stir up one another to love and good works, not neglecting to meet together.",
  },
]

export function ScriptureSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-card border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Our Foundation</p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
            Core Scriptures
          </h3>
        </div>

        <div className="max-w-2xl mx-auto mb-16 rounded-xl overflow-hidden border border-border">
          <Image
            src="/images/genesis-quote.png"
            alt="Then God said, Let us make man in our image, after our likeness. And let them have DOMINION - Genesis"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scriptures.map((s) => (
            <div
              key={s.reference}
              className="p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <p className="text-sm text-primary font-semibold tracking-wide mb-3">{s.reference}</p>
              <p className="text-foreground italic font-serif text-lg leading-relaxed">
                {'"'}
                {s.text}
                {'"'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
