"use client"

import { Play } from "lucide-react"

// Add your YouTube video IDs via env: NEXT_PUBLIC_VIDEO_1, NEXT_PUBLIC_VIDEO_2, etc.
// Get from the URL: youtube.com/watch?v=VIDEO_ID
const VIDEOS = [
  process.env.NEXT_PUBLIC_VIDEO_1,
  process.env.NEXT_PUBLIC_VIDEO_2,
  process.env.NEXT_PUBLIC_VIDEO_3,
].filter(Boolean) as string[]

export function MediaSection() {
  return (
    <section id="media" className="py-32 px-6 lg:px-12 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Brand Storytelling</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            Documentary-Style Mission{" "}
            <span className="text-primary">Narrative</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-pretty">
            Use YouTube-hosted content to present Dominion&apos;s story, mission statement, and outreach testimony
            without adding heavy hosting overhead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((videoId, i) => (
            <div
              key={videoId}
              className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-secondary"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title={`DOMIN10N Video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary/90 rounded-full p-4">
                  <Play size={24} className="text-primary-foreground fill-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {VIDEOS.length === 0 && (
          <div className="aspect-video max-w-3xl mx-auto rounded-xl border border-dashed border-border flex items-center justify-center bg-secondary/50">
            <div className="text-center px-6">
              <Play size={48} className="mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-muted-foreground mb-2">Your documentary and mission videos will appear here.</p>
              <p className="text-sm text-muted-foreground">
                Add <code className="bg-muted px-2 py-1 rounded">NEXT_PUBLIC_VIDEO_1</code> in .env.local with your YouTube video ID
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
