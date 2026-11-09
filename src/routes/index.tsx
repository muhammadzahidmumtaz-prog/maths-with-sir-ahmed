import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, Instagram, Facebook, Award, Video, BookOpen, Zap, FileText, GraduationCap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923021442606";
const TITLE = "Maths with Sir Ahmed | O & A Level Mathematics, Lahore";
const DESC = "One goal. One mindset. The Path to A* starts here. Online O & A Level Mathematics classes with Cambridge Certified teacher Ahmed Mumtaz.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WaButton({ label = "Message on WhatsApp" }: { label?: string }) {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-primary/40">
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
}

function Section({ id, eyebrow, title, children, alt }: { id: string; eyebrow: string; title: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${alt ? "bg-navy-deep" : ""}`}>
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-4xl md:text-5xl">{title}</h2>
        <div className="mt-6 h-px w-16 bg-primary" />
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

const courses = [
  { icon: BookOpen, t: "O Level Mathematics", d: "Concept-first teaching covering the complete syllabus." },
  { icon: GraduationCap, t: "A Level Mathematics", d: "Pure, mechanics and statistics with depth and clarity." },
  { icon: Zap, t: "Crash Course", d: "Focused, intensive revision before your exams." },
  { icon: FileText, t: "Past Paper Practice", d: "Exam technique built through structured past paper work." },
];

const awards = [
  { t: "High Achievement Award", p: "Lahore Grammar School", y: "2023 · 2025 · 2026" },
  { t: "Outstanding Achievement Award", p: "Bloomfield Hall School", y: "CAIE May/June 2025 · CAIE 2026" },
];

function Index() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-serif text-xl">
            <span className="text-2xl text-primary">Σ</span> Maths with Sir Ahmed
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {["About", "Courses", "Fee", "FAQ", "Contact"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-primary">{n}</a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="hero-glow relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <span aria-hidden className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-serif text-[22rem] leading-none text-primary/[0.07] md:text-[36rem]">Σ</span>
        <div className="fade-up relative mx-auto w-full max-w-5xl">
          <p className="eyebrow">O & A Level Mathematics · Lahore</p>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">Maths with<br /><span className="text-primary">Sir Ahmed</span></h1>
          <p className="mt-8 max-w-xl font-serif text-2xl italic text-muted-foreground md:text-3xl">
            One goal. One mindset.<br />The Path to A* starts here.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <WaButton />
            <span className="text-sm text-muted-foreground">Admissions open — message for next batch details.</span>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="About" title="Ahmed Mumtaz" alt>
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            A Cambridge Certified Mathematics Teacher with 15 years of experience teaching at some of Lahore's leading schools — LGS, Beaconhouse and Bloomfield Hall.
          </p>
          <dl className="grid grid-cols-2 gap-6">
            <div className="border-l border-primary pl-4"><dt className="font-serif text-5xl text-primary">15</dt><dd className="mt-1 text-sm text-muted-foreground">Years of experience</dd></div>
            <div className="border-l border-primary pl-4"><dt className="font-serif text-5xl text-primary">CAIE</dt><dd className="mt-1 text-sm text-muted-foreground">Cambridge Certified</dd></div>
            <div className="col-span-2 text-sm text-muted-foreground">LGS · Beaconhouse · Bloomfield Hall</div>
          </dl>
        </div>
      </Section>

      <Section id="courses" eyebrow="Courses" title="What I teach">
        <div className="grid gap-5 sm:grid-cols-2">
          {courses.map((c) => (
            <div key={c.t} className="rounded-lg border bg-card p-7 transition hover:border-primary/60">
              <c.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-2xl">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><Video className="h-4 w-4 text-primary" /> All classes are online on Zoom or Google Meet.</p>
      </Section>

      <Section id="achievements" eyebrow="Recognition" title="Achievements" alt>
        <div className="grid gap-5 md:grid-cols-2">
          {awards.map((a) => (
            <div key={a.t} className="rounded-lg border bg-card p-8">
              <Award className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-2xl">{a.t}</h3>
              <p className="mt-1 text-muted-foreground">{a.p}</p>
              <p className="mt-4 text-sm font-semibold tracking-wide text-primary">{a.y}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Awarded for outstanding results in Mathematics.</p>
      </Section>

      <Section id="join" eyebrow="Getting started" title="How to join">
        <ol className="grid gap-8 md:grid-cols-3">
          {["Message on WhatsApp", "Free initial guidance", "Start your classes"].map((s, i) => (
            <li key={s}>
              <span className="font-serif text-6xl text-primary/80">0{i + 1}</span>
              <h3 className="mt-3 text-2xl">{s}</h3>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="fee" eyebrow="Fee" title="Simple, transparent fee" alt>
        <div className="max-w-md rounded-lg border border-primary/50 bg-card p-10">
          <p className="font-serif text-6xl text-primary">Rs 6,500</p>
          <p className="mt-2 text-muted-foreground">per month — for a group of 5 students</p>
          <div className="mt-8"><WaButton label="Enquire on WhatsApp" /></div>
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Questions">
        <Accordion type="single" collapsible className="max-w-3xl">
          {([
            ["Are the classes online?", "Yes. All classes are held online on Zoom or Google Meet."],
            ["Who can join?", "O Level and A Level Mathematics students."],
            ["Is the fee per student?", "No. The fee is Rs 6,500 per month for a group of 5 students."],
            ["How do I register?", "Simply send a message on WhatsApp at 0302 1442606. Admissions are open — message for next batch details."],
          ] as [string, string][]).map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="font-serif text-xl hover:text-primary hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Get in touch" alt>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { i: MessageCircle, l: "WhatsApp", v: "0302 1442606", h: WA },
            { i: Mail, l: "Email", v: "TheSirAhmed.ME@gmail.com", h: "mailto:TheSirAhmed.ME@gmail.com" },
            { i: Instagram, l: "Instagram", v: "@MathswithSirAhmed", h: "https://www.instagram.com/MathswithSirAhmed" },
            { i: Facebook, l: "Facebook", v: "Maths with Sir Ahmed", h: "https://www.facebook.com/profile.php?id=61596396359962" },
          ].map((c) => (
            <a key={c.l} href={c.h} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border bg-card p-6 transition hover:border-primary/60">
              <c.i className="h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0"><p className="text-xs uppercase tracking-widest text-muted-foreground">{c.l}</p><p className="mt-1 truncate">{c.v}</p></div>
            </a>
          ))}
        </div>
      </Section>

      <footer className="border-t px-6 py-10 text-center text-sm text-muted-foreground">
        <span className="font-serif text-xl text-primary">Σ</span>
        <p className="mt-2">© {new Date().getFullYear()} Maths with Sir Ahmed · Lahore, Pakistan</p>
      </footer>
    </main>
  );
}
