export default function Produkte() {
  return (
    <main className="min-h-screen font-sans bg-white text-neutral-900">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center">Unsere Produkte</h1>
        <p className="mt-4 text-center text-neutral-600">
          Wähle zwischen der flexiblen Quiz-Variante <strong>Basic</strong> oder der präzisen <strong>Pro</strong>-Analyse.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          {/* BASIC */}
          <article className="rounded-3xl border overflow-hidden">
            <div className="aspect-[21/9] relative">
              <img
                src="https://images.unsplash.com/photo-1600180758890-6f394f8a8e48?auto=format&fit=crop&w=1600&q=80"
                alt="Basic – Quiz-basiert"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-black/10" />
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium">Basic</span>
              </div>
            </div>
            <div className="p-8 bg-[#F7F3EE]">
              <h2 className="text-xl font-semibold">Basic – Quiz-basiert</h2>
              <p className="mt-3 text-neutral-700">
                Beantworte ein kurzes, wissenschaftlich fundiertes Quiz zu Zielen, Ernährung & Lifestyle. Wir erstellen deine maßgeschneiderte Mischung.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>3-Minuten-Quiz</li>
                <li>Individuelle Rezeptur & Dosierung</li>
                <li>Monatliche Lieferung in Tagespacks</li>
                <li>Preis: <strong>ab 39 €/Monat</strong></li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="/#quiz" className="rounded-full bg-neutral-900 text-white px-5 py-2 text-sm hover:bg-neutral-700">Quiz starten</a>
                <a href="#" className="rounded-full border border-neutral-300 px-5 py-2 text-sm hover:bg-neutral-100">Mehr erfahren</a>
              </div>
            </div>
          </article>

          {/* PRO */}
          <article className="rounded-3xl border overflow-hidden">
            <div className="aspect-[21/9] relative">
              <img
                src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=1600&q=80"
                alt="Pro – DNA-basiert"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-black/10" />
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium">Pro (DNA)</span>
              </div>
            </div>
            <div className="p-8 bg-[#F7F3EE]">
              <h2 className="text-xl font-semibold">Pro – DNA-Analyse</h2>
              <p className="mt-3 text-neutral-700">
                Mit einem DNA-Test identifizieren wir relevante genetische Marker und optimieren deine Formel für nachhaltige Wirkung.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>DNA-Kit inkl. Rückversand</li>
                <li>Analyse genetischer Marker</li>
                <li>Langfristige Optimierung deiner Rezeptur</li>
                <li>Preis: <strong>ab 99 €/Monat</strong></li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 text-white px-5 py-2 text-sm hover:opacity-90">DNA-Kit anfordern</a>
                <a href="/#faq" className="rounded-full border border-neutral-300 px-5 py-2 text-sm hover:bg-neutral-100">FAQ</a>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-14 text-center">
          <a href="/" className="text-sm underline hover:no-underline">Zurück zur Startseite</a>
        </div>
      </section>
    </main>
  );
}
