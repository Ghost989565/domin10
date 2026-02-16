"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300 ease-out">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/domin10n-logo.png"
              alt="Dominion logo"
              width={40}
              height={40}
              className="invert"
            />
            <span className="text-xl font-bold tracking-wider text-foreground">
              Dominion
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
            >
              About
            </Link>
            <Link
              href="#programs"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
            >
              Programs
            </Link>
            <Link
              href="#media"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
            >
              Story
            </Link>
            <Link
              href="#calendar"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
            >
              Calendar
            </Link>
            <Link
              href="#community"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
            >
              Community
            </Link>
            <Link
              href="#donate"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
            >
              Donate
            </Link>
            <Link
              href="#connect"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-lg hover:bg-primary/90 transition-all duration-200 ease-out"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-in slide-in-from-top-2 fade-in-0 duration-200">
          <nav className="flex flex-col items-center py-8 gap-6">
            <Link
              href="#about"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#programs"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="#media"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Story
            </Link>
            <Link
              href="#calendar"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Calendar
            </Link>
            <Link
              href="#community"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="#donate"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            <Link
              href="#connect"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-lg hover:bg-primary/90 transition-all duration-200 ease-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
