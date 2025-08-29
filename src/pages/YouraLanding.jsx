import SiteFooter from "../components/Footer.jsx";

export default function YouraLanding() {
  return (
    <div className="min-h-screen font-sans bg-youraIvory text-neutral-900">
      <Hero />
      <ProductStrip />
      <Ingredients />
      <HowItWorks />
      <Quality />
      <Quiz />
      <Testimonials />
      <FAQ />
      <SiteFooter />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] flex items-center">
      {/* Luxus-Video-Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
        src="https://cdn.coverr.co/videos/coverr-luxury-smooth-bottle-label-1735/1080p.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 -z-10" />
      <div className="mx-auto max-w-7xl px-6 text-white text-left md:text-center">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Personalisierte Supplements,<br className="hidden md:block" /> luxuriös verpackt.
        </h1>
        <p className="mt-6 text-white/80 text-lg max-w-2xl md:mx-auto">
          Wähle zwischen <strong>Basic</strong> (Quiz) und <strong>Pro</strong> (DNA-Analyse). Präzise, individuell, jeden Monat geliefert.
        </p>
        <div className="mt-8 flex gap-4 md:justify-center">
          <a href="#quiz" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 px-6 py-3 text-sm font-medium text-white hover:opacity-90">Quiz starten</a>
          <a href="/produkte" className="rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white/10">Produkte ansehen</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCT STRIP (MEN / WOMEN) ---------------- */
function ProductStrip() {
  const items = [
    {
      label: "MEN",
      bg: "bg-[#3B221E]",
      img: "https://images.unsplash.com/photo-1616587895537-5f9c1a40add4?auto=format&fit=crop&w=1200&q=80",
      accent: "from-rose-400 to-orange-400"
    },
    {
      label: "WOMEN",
      bg: "bg-[#2B1834]",
      img: "https://images.unsplash.com/photo-1612831662375-295c1003d3ca?auto=format&fit=crop&w=1200&q=80",
      accent: "from-fuchsia-400 to-pink-400"
    }
  ];
  return (
    <section className="relative bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.label} className={`rounded-3xl border overflow-hidden ${it.bg}`}>
            <div className="p-6 text-white/80 text-sm">{it.label}</div>
            <div className="relative aspect-[4/5]">
              <img src={it.img} alt={`${it.label} Bottle`} className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
              <div className="absolute bottom-6 left-6">
                <div className={`rounded-xl bg-gradient-to-r ${it.accent} px-6 py-3 text-lg font-semibold text-white`}>YOURA</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- INGREDIENTS ---------------- */
function Ingredients() {
  return (
    <section id="ingredients" className="bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-semibold text-center">Inhaltsstoffe</h2>
        <p className="mt-4 text-center text-neutral-600 max-w-2xl mx-auto">
          Eine kuratierte Kombination aus Vitaminen, Mineralstoffen, Adaptogenen, Botanicals und Probiotika – transparent erklärt.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <IngredientCard title="Vitamine" text="A–Z, abgestimmt auf dein Profil." />
          <IngredientCard title="Mineralstoffe" text="Magnesium, Zink, Eisen – individuell dosiert." />
          <IngredientCard title="Botanicals" text="Adaptogene & Pflanzenextrakte für Fokus & Balance." />
        </div>
      </div>
    </section>
  );
}
function IngredientCard({ title, text }) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{text}</p>
    </div>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  return (
    <section id="how" className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-semibold text-center">So funktioniert's</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
          <Step num="1" title="Quiz" text="Beantworte in 3 Minuten Fragen zu Zielen & Lifestyle." />
          <Step num="2" title="Formel" text="Unsere Engine erstellt deine individuelle Rezeptur." />
          <Step num="3" title="Lieferung" text="Monatliche Packs bequem nach Hause." />
        </div>
      </div>
    </section>
  );
}
function Step({ num, title, text }) {
  return (
    <div>
      <div className="text-4xl font-bold text-fuchsia-500">{num}</div>
      <h3 className="mt-3 font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{text}</p>
    </div>
  );
}

/* ---------------- QUALITY ---------------- */
function Quality() {
  return (
    <section id="science" className="bg-youraPlum text-white border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">Qualität & Wissenschaft</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <QualityCard title="EU-Produktion" text="Herstellung in zertifizierten EU-Betrieben." />
          <QualityCard title="Transparenz" text="Volle Rückverfolgbarkeit aller Rohstoffe." />
          <QualityCard title="Evidenzbasiert" text="Dosierungen nach EFSA & Studienlage." />
        </div>
      </div>
    </section>
  );
}
function QualityCard({ title, text }) {
  return (
    <div className="p-6 rounded-2xl bg-white/10">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-white/80">{text}</p>
    </div>
  );
}

/* ---------------- QUIZ ---------------- */
function Quiz() {
  return (
    <section id="quiz" className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">Dein Quiz</h2>
        <p className="mt-4 text-neutral-600">
          Schnelles Quiz zu Zielen, Ernährung, Schlaf. Erhalte sofort deine personalisierte Empfehlung.
        </p>
        <div className="mt-8">
          <a href="#" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 px-8 py-4 text-white text-sm font-medium hover:opacity-90">Quiz starten</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section className="bg-youraCocoa text-white border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">Was Kund:innen sagen</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/10">“Endlich ein Supplement, das zu mir passt.”</div>
          <div className="p-6 rounded-2xl bg-white/10">“Luxuriöses Design & spürbare Wirkung.”</div>
          <div className="p-6 rounded-2xl bg-white/10">“Einfaches Quiz, klare Empfehlung – perfekt.”</div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  return (
    <section id="faq" className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold text-center">FAQ</h2>
        <div className="mt-10 space-y-6">
          <FaqItem q="Wie funktioniert die Personalisierung?" a="Über Quiz oder DNA-Test wird deine Mischung berechnet." />
          <FaqItem q="Kann ich kündigen?" a="Ja, jederzeit monatlich kündbar oder pausierbar." />
          <FaqItem q="Wohin liefert ihr?" a="Deutschland, Österreich, Schweiz." />
        </div>
      </div>
    </section>
  );
}
function FaqItem({ q, a }) {
  return (
    <div>
      <h3 className="font-medium">{q}</h3>
      <p className="text-sm text-neutral-600">{a}</p>
    </div>
  );
}
