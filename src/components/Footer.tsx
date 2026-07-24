import { Link } from "react-router-dom"
import { MapPin, Phone, Printer } from "lucide-react"
import { schulinfo } from "../data/schule"

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-semibold text-lg">{schulinfo.name}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
              <span>
                {schulinfo.strasse}
                <br />
                {schulinfo.ort}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-brand-400" aria-hidden="true" />
              <a href="tel:+496622430820" className="hover:text-white">
                {schulinfo.telefon}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Printer className="w-4 h-4 shrink-0 text-brand-400" aria-hidden="true" />
              <span>Fax {schulinfo.fax}</span>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer-Navigation">
          <p className="font-semibold">Seiten</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/schule" className="hover:text-white">Die Schule</Link></li>
            <li><Link to="/bildungsgaenge" className="hover:text-white">Bildungsgänge</Link></li>
            <li><Link to="/aktuelles" className="hover:text-white">Aktuelles</Link></li>
            <li><Link to="/kontakt" className="hover:text-white">Kontakt &amp; Anfahrt</Link></li>
          </ul>
        </nav>

        <nav aria-label="Rechtliches">
          <p className="font-semibold">Rechtliches</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-white">Datenschutzerklärung</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 md:px-8 py-4 text-xs text-white/60">
          © {new Date().getFullYear()} {schulinfo.name}
        </p>
      </div>
    </footer>
  )
}
