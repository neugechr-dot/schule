import { Link } from "react-router-dom"
import { ExternalLink, MapPin, Phone, Printer } from "lucide-react"
import { schulinfo } from "../data/schule"
import { asset } from "../lib/asset"

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <img
            src={asset("/logo-bs-bebra-invers.png")}
            alt="Berufliche Schulen Bebra"
            width={466}
            height={258}
            className="h-14 w-auto"
          />
          <p className="sr-only">{schulinfo.name}</p>
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
            <li><Link to="/schule/team" className="hover:text-white">Schulleitung &amp; Verwaltung</Link></li>
            <li><Link to="/schule/organisation" className="hover:text-white">Organisation</Link></li>
            <li><Link to="/bildungsgaenge" className="hover:text-white">Bildungsgänge</Link></li>
            <li><Link to="/angebote" className="hover:text-white">Weitere Angebote</Link></li>
            <li><Link to="/aktuelles" className="hover:text-white">Aktuelles</Link></li>
            <li><Link to="/service" className="hover:text-white">Service &amp; Downloads</Link></li>
            <li><Link to="/kontakt" className="hover:text-white">Kontakt &amp; Anfahrt</Link></li>
          </ul>
        </nav>

        <div>
          <nav aria-label="Rechtliches">
            <p className="font-semibold">Rechtliches</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white">Datenschutzerklärung</Link></li>
            </ul>
          </nav>
          <p className="mt-8 font-semibold">Folgen Sie uns</p>
          <a
            href="https://www.instagram.com/berufliche_schulen_bebra/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ExternalLink className="w-4 h-4 text-brand-400" aria-hidden="true" />
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 md:px-8 py-4 text-xs text-white/60">
          © {new Date().getFullYear()} {schulinfo.name}
        </p>
      </div>
    </footer>
  )
}
