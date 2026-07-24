import { Link } from "react-router-dom"
import { ArrowRight, CalendarDays, MapPin, Phone } from "lucide-react"
import FadeIn from "../components/FadeIn"
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"
import { bildungsgaenge } from "../data/bildungsgaenge"
import { termine, sprechzeitenSommerferien } from "../data/termine"
import { news } from "../data/news"
import { schulinfo } from "../data/schule"

const datumFormat = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})

export default function Home() {
  return (
    <>
      <section className="relative bg-ink-900 text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="anim-fade absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(67,173,71,0.35),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(67,173,71,0.15),transparent_50%)]"
          style={{ animationDelay: "0.2s" }}
        />
        {/* TODO: Hero-Foto/Video der Schule einsetzen, sobald Bildmaterial vorliegt */}
        <div className="relative mx-auto max-w-6xl px-4 md:px-8 py-24 md:py-36">
          <p
            className="anim-stagger text-brand-300 font-medium tracking-[0.2em] uppercase text-xs md:text-sm"
            style={{ animationDelay: "0.1s" }}
          >
            Berufliche Schulen Bebra
          </p>
          <h1
            className="anim-stagger mt-4 text-4xl md:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] max-w-3xl"
            style={{ animationDelay: "0.25s" }}
          >
            Dein Weg.
            <br />
            Deine Ausbildung.
            <br />
            <span className="text-brand-400">Deine Zukunft.</span>
          </h1>
          <p
            className="anim-stagger mt-6 max-w-xl text-white/80 text-base md:text-lg leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            Vom Abitur am Beruflichen Gymnasium bis zur Weiterbildung an der
            Fachschule für Technik – fünf Schulformen unter einem Dach in Bebra.
          </p>
          <div
            className="anim-stagger mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.55s" }}
          >
            <LiquidMetalButton to="/bildungsgaenge" label="Bildungsgänge entdecken" />
            <LiquidMetalButton
              to="/kontakt"
              label="Kontakt aufnehmen"
              variant="ghost"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8 mt-20 md:mt-28" aria-labelledby="bildungsgaenge-heading">
        <FadeIn>
          <h2 id="bildungsgaenge-heading" className="text-2xl md:text-4xl font-semibold tracking-tight">
            Unsere Bildungsgänge
          </h2>
          <p className="mt-3 text-ink-600 max-w-2xl">
            Ob Vollzeit oder begleitend zur Ausbildung – bei uns findest du den
            passenden Abschluss.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bildungsgaenge.map((bg, i) => (
            <FadeIn key={bg.slug} delay={i * 0.1}>
              <Link
                to={`/bildungsgaenge/${bg.slug}`}
                className="card-cut group block bg-ink-50 hover:bg-brand-50 transition-colors p-6 h-full"
              >
                <bg.icon className="w-8 h-8 text-brand-600" aria-hidden="true" />
                <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-brand-700">
                  {bg.form}
                </p>
                <h3 className="mt-1 text-lg font-semibold group-hover:text-brand-700 transition-colors">
                  {bg.name}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {bg.abschluss}
                </p>
              </Link>
            </FadeIn>
          ))}
          <FadeIn delay={bildungsgaenge.length * 0.1}>
            <Link
              to="/bildungsgaenge"
              className="card-cut flex flex-col items-start justify-center bg-ink-900 text-white p-6 h-full group"
            >
              <p className="text-lg font-semibold">Alle Angebote im Überblick</p>
              <span className="mt-3 inline-flex items-center gap-2 text-brand-400 text-sm font-medium">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8 mt-20 md:mt-28 grid gap-10 lg:grid-cols-2" aria-labelledby="termine-heading">
        <FadeIn>
          <h2 id="termine-heading" className="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-3">
            <CalendarDays className="w-7 h-7 text-brand-600" aria-hidden="true" />
            Termine
          </h2>
          <ul className="mt-6 space-y-4">
            {termine.map((t) => (
              <li key={t.titel} className="card-cut bg-ink-50 p-5">
                <time dateTime={t.datum} className="text-sm font-semibold text-brand-700">
                  {datumFormat.format(new Date(t.datum))}
                </time>
                <p className="mt-1 font-medium">{t.titel}</p>
                {t.beschreibung && (
                  <p className="mt-1 text-sm text-ink-600">{t.beschreibung}</p>
                )}
              </li>
            ))}
          </ul>
          <div className="card-cut mt-5 border border-ink-100 p-5">
            <p className="font-medium">Sprechzeiten der Schulleitung</p>
            <p className="mt-1 text-sm text-ink-600 leading-relaxed">
              {sprechzeitenSommerferien.hinweis}
            </p>
            <p className="mt-2 text-sm text-ink-600 leading-relaxed">
              {sprechzeitenSommerferien.notfallkontakt}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Aktuelles
          </h2>
          <ul className="mt-6 space-y-4">
            {news.slice(0, 3).map((n) => (
              <li key={n.slug}>
                <Link
                  to={`/aktuelles/${n.slug}`}
                  className="card-cut group block bg-ink-50 hover:bg-brand-50 transition-colors p-5"
                >
                  <time dateTime={n.datum} className="text-sm text-ink-600">
                    {datumFormat.format(new Date(n.datum))}
                  </time>
                  <p className="mt-1 font-medium group-hover:text-brand-700 transition-colors">
                    {n.titel}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/aktuelles"
            className="mt-6 inline-flex items-center gap-2 text-brand-700 font-medium hover:text-brand-800 group"
          >
            Alle Meldungen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8 mt-20 md:mt-28" aria-labelledby="kontakt-heading">
        <FadeIn>
          <div className="card-cut bg-ink-900 text-white p-8 md:p-12 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 id="kontakt-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
                Fragen? Wir sind für euch da.
              </h2>
              <p className="mt-3 text-white/80">
                Das Sekretariat hilft bei Fragen zu Anmeldung, Bildungsgängen
                und Terminen gerne weiter.
              </p>
              <div className="mt-6 space-y-2 text-sm text-white/80">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-400" aria-hidden="true" />
                  {schulinfo.strasse}, {schulinfo.ort}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-400" aria-hidden="true" />
                  {schulinfo.telefon}
                </p>
              </div>
            </div>
            <div className="md:justify-self-end">
              <LiquidMetalButton to="/kontakt" label="Kontakt & Anfahrt" />
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
