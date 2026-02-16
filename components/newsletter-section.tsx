"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setStatus("success")
      setMessage("Thank you! You're on the list.")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setMessage(err instanceof Error ? err.message : "Please try again later.")
    }
  }

  return (
    <section className="py-32 px-6 lg:px-12 bg-background border-y border-border">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Stay Connected</p>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight text-balance">
          Get Updates &{" "}
          <span className="text-primary">Program News</span>
        </h3>
        <p className="text-muted-foreground mb-10 text-pretty">
          Join the mailing list for event invites, outreach updates, sponsor opportunities, and launch announcements.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="pl-11 h-12 bg-card border-border"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={status === "loading"}
            size="lg"
            className="h-12 px-8 font-semibold uppercase tracking-wider shrink-0"
          >
            {status === "loading" ? "Joining..." : "Subscribe"}
          </Button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm ${status === "success" ? "text-primary" : status === "error" ? "text-destructive" : "text-muted-foreground"}`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  )
}
