import { Users } from "lucide-react"
import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { schulleitung } from "../data/schule"

export default function Schule() {
  return (
    <>
      <PageHeader
        title="Die Schule"
        subtitle="Die Beruflichen Schulen Bebra – ein Lernort mit Tradition und Zukunft im Herzen von Nordhessen."
      />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <FadeIn className="mt-16">
          <section aria-labelledby="schulleitung-heading">
            <h2 id="schulleitung-heading" className="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-3">
              <Users className="w-7 h-7 text-brand-600" aria-hidden="true" />
              Schulleitung
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 max-w-2xl">
              {schulleitung.map((person) => (
                <div key={person.name} className="card-cut bg-ink-50 p-6">
                  {/* TODO: Portraitfotos ergänzen, sobald Bildmaterial vorliegt */}
                  <p className="font-semibold text-lg">{person.name}</p>
                  <p className="mt-1 text-sm text-brand-700 font-medium">{person.rolle}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-16">
          <section aria-labelledby="ueberuns-heading">
            <h2 id="ueberuns-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Über uns
            </h2>
            <p className="mt-4 max-w-2xl text-ink-600 leading-relaxed">
              {/* TODO: Grußwort/Über-uns-Text von bs-bebra.de übernehmen (Schule → Über Uns → Grußwort) */}
              Der ausführliche Text über unsere Schule wird derzeit überarbeitet
              und erscheint in Kürze an dieser Stelle.
            </p>
          </section>
        </FadeIn>

        <FadeIn className="mt-16">
          <section aria-labelledby="geschichte-heading">
            <h2 id="geschichte-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Geschichte
            </h2>
            <p className="mt-4 max-w-2xl text-ink-600 leading-relaxed">
              {/* TODO: Inhalte von bs-bebra.de (Schule → Geschichte, "125 Jahre") migrieren */}
              Über 125 Jahre Schulgeschichte – die ausführliche Chronik wird
              derzeit für die neue Website aufbereitet.
            </p>
          </section>
        </FadeIn>

        <FadeIn className="mt-16">
          <section aria-labelledby="foerderverein-heading">
            <h2 id="foerderverein-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Förderverein &amp; Kooperationen
            </h2>
            <p className="mt-4 max-w-2xl text-ink-600 leading-relaxed">
              {/* TODO: Inhalte von bs-bebra.de (Schule → Förderverein / Kooperationen) migrieren */}
              Informationen zu Förderverein und unseren Kooperationspartnern
              folgen in Kürze.
            </p>
          </section>
        </FadeIn>
      </div>
    </>
  )
}
