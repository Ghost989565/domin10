"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import type { Program } from "@/lib/programs"

export function ProgramsCarousel({ items }: { items: Program[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scrollByCard(direction: "left" | "right") {
    const el = scrollRef.current
    if (!el) return
    const amount = Math.round(el.clientWidth * 0.85)
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" })
  }

  return (
    <div>
      <div className="flex items-center justify-end gap-2 mb-5">
        <button
          onClick={() => scrollByCard("left")}
          className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-50 transition"
          aria-label="Scroll programs left"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scrollByCard("right")}
          className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-50 transition"
          aria-label="Scroll programs right"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((card) => (
          <article
            key={card.slug}
            className="snap-start min-w-[85%] sm:min-w-[60%] lg:min-w-[36%] bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition group"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image src={card.image} alt={card.title} fill className="object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{card.description}</p>
              <ul className="space-y-3 mb-8">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" /> {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href={`/programs/${card.slug}`}
                className="block w-full py-3 border border-black rounded text-center font-bold text-xs uppercase tracking-widest group-hover:bg-black group-hover:text-white transition"
              >
                {card.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
