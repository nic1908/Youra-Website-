export default function SiteFooter() {
  return (
    <footer className="bg-youraPlum text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold tracking-[0.2em]">YOURA</div>
          <p className="mt-3 text-white/70">Personalisierte Supplements – schlicht, präzise, luxuriös.</p>
        </div>
        <div>
          <div className="font-medium">Links</div>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="/produkte" className="hover:text-white">Produkte</a></li>
            <li><a href="/#ingredients" className="hover:text-white">Inhaltsstoffe</a></li>
            <li><a href="/#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Rechtliches</div>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="#" className="hover:text-white">Impressum</a></li>
            <li><a href="#" className="hover:text-white">Datenschutz</a></li>
            <li><a href="#" className="hover:text-white">AGB</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 text-center text-xs py-6 text-white/50">
        © {new Date().getFullYear()} Youra
      </div>
    </footer>
  );
}
