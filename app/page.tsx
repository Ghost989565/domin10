import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CraftsmanshipSection } from "@/components/craftsmanship-section"
import { ProgramsSection } from "@/components/programs-section"
import { MediaSection } from "@/components/media-section"
import { CommunityCalendarSection } from "@/components/community-calendar-section"
import { EngagementSection } from "@/components/engagement-section"
import { OperationsSection } from "@/components/operations-section"
import { DonationsSection } from "@/components/donations-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CraftsmanshipSection />
      <ProgramsSection />
      <MediaSection />
      <CommunityCalendarSection />
      <EngagementSection />
      <OperationsSection />
      <DonationsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
