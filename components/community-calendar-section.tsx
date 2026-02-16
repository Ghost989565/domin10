"use client"

import { useMemo, useState } from "react"
import { Calendar } from "@/components/ui/calendar"

type EventItem = {
  date: string
  title: string
  location: string
  time: string
}

const EVENTS: EventItem[] = [
  { date: "2026-03-05", title: "Welcome Home Outreach Orientation", location: "Community Hub", time: "6:30 PM" },
  { date: "2026-03-15", title: "Client Review + Strategy Session", location: "Dominion HQ", time: "3:00 PM" },
  { date: "2026-03-21", title: "Neighborhood Service Day", location: "Prince George's County", time: "9:00 AM" },
  { date: "2026-03-28", title: "Volunteer Training Cohort", location: "Virtual", time: "11:00 AM" },
]

function toDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function CommunityCalendarSection() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date("2026-03-15"))

  const selectedEvents = useMemo(() => {
    const dateKey = toDateKey(selectedDate)
    return EVENTS.filter((event) => event.date === dateKey)
  }, [selectedDate])

  const eventDates = useMemo(() => EVENTS.map((event) => new Date(event.date + "T12:00:00")), [])

  return (
    <section id="calendar" className="py-28 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Community Calendar</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            Track Upcoming <span className="text-primary">Events & Outreach</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-border bg-card p-5 sm:p-7">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(day) => day && setSelectedDate(day)}
              modifiers={{ hasEvent: eventDates }}
              modifiersClassNames={{ hasEvent: "bg-primary/20 rounded-md" }}
              className="w-full"
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              {selectedDate.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
            </p>

            {selectedEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedEvents.map((event) => (
                  <article key={event.title} className="rounded-lg border border-border bg-background p-5">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground leading-relaxed">
                No published events on this date yet. New activities are posted as outreach and training dates are finalized.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
