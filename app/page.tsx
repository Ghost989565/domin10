import Image from "next/image"
import {
  Calendar,
  BookOpen,
  ShoppingBag,
  Heart,
  ArrowRight,
  CheckCircle2,
  Play,
  Users,
  Mail,
  Instagram,
} from "lucide-react"
import { ProgramsCarousel } from "@/components/programs-carousel"
import { programs } from "@/lib/programs"

const merchPreview = [
  "/images/collage.png",
  "/images/mission-statements.png",
  "/images/genesis-quote.png",
  "/images/domin10n-logo.png",
]

const meetingLocations = [
  {
    title: "Home Gatherings",
    detail: "Initial ministry gatherings hosted in-home while scaling to larger spaces.",
  },
  {
    title: "The Pit (Restaurant)",
    detail: "Potential nearby partner location for Bible study, fellowship, and community events.",
  },
  {
    title: "Community Centers & Parks",
    detail: "Use of local centers and park properties for outreach and recurring events.",
  },
  {
    title: "Partnering Churches & Ministries",
    detail: "Collaborative spaces for larger gatherings and aligned ministry activities.",
  },
  {
    title: "Host Houses + Rental Spaces",
    detail: "Homelike host homes plus flexible event rentals for conferences and growth.",
  },
]

const currentRoleNeeds = [
  "Brainstorm fun gatherings (game nights, cookouts, themed events).",
  "Scout and select accessible, budget-friendly venues.",
  "Build event calendars and manage event logistics.",
  "Connect the ministry with community needs and partners.",
  "Promote events, document them, and engage the community online.",
  "Ensure attendees feel welcomed, comfortable, and connected.",
]

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/domin10n-logo.png"
              alt="Dominion logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span className="font-black text-xl tracking-tight uppercase">Dominion Ministry Network</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#programs" className="hover:text-blue-600 transition">
              Programs
            </a>
            <a href="#learning" className="hover:text-blue-600 transition">
              Learning Hub
            </a>
            <a href="#events" className="hover:text-blue-600 transition">
              Events
            </a>
            <a href="#store" className="hover:text-blue-600 transition">
              Store
            </a>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition shadow-lg shadow-black/10">
            SUPPORT THE MISSION
          </button>
        </div>
      </nav>

      <section className="relative h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <Image
          src="/images/hero-background.png"
          alt="Dominion hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            DOMINION: <br />
            <span className="text-blue-500 underline decoration-4 underline-offset-8">OUTREACH.</span> GROWTH.
            COMMUNITY.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
            A relationship-first initiative dedicated to reentry support, leadership training, and local neighborhood
            impact.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-10 py-4 rounded-md font-bold text-lg hover:bg-blue-500 hover:text-white transition">
              Explore Programs
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition">
              Join the Movement
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Building a Scalable Web Presence for Dominion.</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In partnership with <strong>CPMS</strong>, Dominion is transitioning from a localized effort to a
            digital-first mission hub. This platform is engineered to facilitate real-world impact through streamlined
            communication and resource delivery.
          </p>
          <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg border-l-4 border-blue-600">
            <p className="italic text-slate-700">
              "Structured and managed by Chesapeake Project Management Solution (CPMS)."
            </p>
          </div>
        </div>
        <div className="aspect-square rounded-2xl overflow-hidden border border-slate-300 shadow-lg">
          <Image
            src="/images/mission-statements.png"
            alt="Dominion mission statements"
            width={1080}
            height={1350}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="programs" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Core Program Modules</h2>
            <div className="w-24 h-2 bg-blue-600 mt-4" />
          </div>

          <ProgramsCarousel items={programs} />
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 italic tracking-tight">"The Dominion Story"</h2>
          <p className="text-slate-400 mb-12">Watch our latest outreach documentary and see the mission in action.</p>

          <div className="aspect-video rounded-2xl relative shadow-2xl border border-white/10 group overflow-hidden">
            <Image
              src="/images/december-2025-impact.png"
              alt="Dominion story and impact collage"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div id="events" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="text-blue-600" />
              <h3 className="font-bold text-xl uppercase tracking-widest">Community Calendar</h3>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <div className="bg-black text-white p-2 rounded text-center min-w-[50px]">
                  <span className="block text-xs uppercase">Oct</span>
                  <span className="block text-xl font-bold leading-none">{15 + i}</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Outreach Strategy Meeting</h4>
                  <p className="text-xs text-slate-500">10:00 AM | Virtual Hub</p>
                  <button className="mt-2 text-[10px] font-bold uppercase text-blue-600 flex items-center gap-1">
                    Register <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div id="store" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="text-blue-600" />
              <h3 className="font-bold text-xl uppercase tracking-widest">Dominion Store</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {merchPreview.map((image, i) => (
                <div key={image} className="aspect-square bg-slate-200 rounded-lg relative overflow-hidden">
                  <Image src={image} alt={`Dominion merch preview ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="bg-slate-100 p-6 rounded-lg text-center border-t-2 border-black">
              <p className="text-sm font-bold mb-4 uppercase tracking-tighter">Official Apparel Coming Soon</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white border border-slate-300 rounded px-3 py-2 text-xs w-full outline-none focus:border-blue-600"
                />
                <button className="bg-black text-white px-4 py-2 text-[10px] font-bold uppercase whitespace-nowrap">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          <div id="learning" className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-blue-600" />
              <h3 className="font-bold text-xl uppercase tracking-widest">Learning Hub</h3>
            </div>
            <div className="space-y-4">
              {["Onboarding 101", "Leadership Certification", "Community Ethics"].map((course) => (
                <div
                  key={course}
                  className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-between"
                >
                  <span className="font-bold text-sm">{course}</span>
                  <div className="px-3 py-1 bg-slate-100 text-[10px] font-bold text-slate-500 rounded uppercase tracking-widest">
                    Coming Soon
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Proposed Meeting Locations</h3>
            <div className="space-y-4">
              {meetingLocations.map((location) => (
                <article key={location.title} className="bg-white border border-slate-200 rounded-lg p-5">
                  <h4 className="font-bold text-slate-900 mb-1">{location.title}</h4>
                  <p className="text-sm text-slate-600">{location.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Current Roles / Needs</h3>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <ul className="space-y-3">
                {currentRoleNeeds.map((need) => (
                  <li key={need} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                    {need}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-5 text-sm text-slate-600">
              Additional upcoming initiative from the proposal: <span className="font-semibold">EXCHANGE Expansion</span>{" "}
              for young adult fellowship and resource-sharing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Support the Mission</h2>
            <p className="text-blue-100 text-lg mb-8">
              Your contribution fuels local neighborhood impact and reentry programs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-blue-700/50 p-4 rounded-lg border border-blue-400/30">
                <Heart className="shrink-0" fill="currentColor" />
                <p className="text-sm">
                  <strong>$50</strong> provides 10 essential care packages for neighbors in transition.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-blue-700/50 p-4 rounded-lg border border-blue-400/30">
                <Users className="shrink-0" fill="currentColor" />
                <p className="text-sm">
                  <strong>$250</strong> sponsors a full Leadership Certification for a local student.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900 text-center">
            <p className="text-slate-400 font-mono text-[10px] mb-8 uppercase tracking-widest">
              [SECURE STRIPE/PAYPAL INTEGRATION SLOT]
            </p>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {["$25", "$50", "$100"].map((val) => (
                <button
                  key={val}
                  className="py-4 border-2 border-slate-200 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition"
                >
                  {val}
                </button>
              ))}
            </div>
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-black/20 mb-4">
              Give Once
            </button>
            <button className="w-full bg-slate-100 text-slate-700 py-4 rounded-xl font-bold">Give Monthly</button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6 text-white">
                <Image src="/images/domin10n-logo.png" alt="Dominion icon" width={30} height={30} className="w-8 h-8" />
                <span className="font-black text-lg tracking-tight uppercase">Dominion Ministry Network</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                A mission-driven organization dedicated to bridging gaps in community, leadership, and personal growth
                through actionable outreach programs.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                  <Instagram size={16} /> Instagram
                </li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                  <Mail size={16} /> Email Update
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
              <p className="text-[10px] leading-relaxed italic">
                Structured and managed by <br />
                <span className="text-white font-bold">Chesapeake Project Management Solution (CPMS)</span>.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
            <p>© 2026 Dominion. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
