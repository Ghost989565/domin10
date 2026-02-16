import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { programs } from "@/lib/programs"

type Params = {
  slug: string
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const program = programs.find((item) => item.slug === params.slug)

  if (!program) {
    return { title: "Program | Dominion Ministry Network" }
  }

  return {
    title: `${program.title} | Dominion Ministry Network`,
    description: program.description,
  }
}

export default function ProgramDetailPage({ params }: { params: Params }) {
  const program = programs.find((item) => item.slug === params.slug)

  if (!program) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-14">
        <Link href="/#programs" className="text-sm font-semibold text-blue-700 hover:text-blue-600">
          ← Back to Programs
        </Link>

        <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <div className="relative aspect-[16/7]">
            <Image src={program.image} alt={program.title} fill className="object-cover" />
          </div>
          <div className="p-8 bg-white">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">{program.title}</h1>
            <p className="text-slate-700 leading-relaxed mb-6">{program.details.overview}</p>

            {program.details.partner && (
              <p className="mb-6 rounded-lg bg-blue-50 border border-blue-200 px-4 py-3 text-sm text-blue-900">
                Collaboration Partner: <span className="font-semibold">{program.details.partner}</span>
              </p>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-slate-200 p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Program Focus</h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {program.details.focus.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Expected Outcomes</h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {program.details.outcomes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
