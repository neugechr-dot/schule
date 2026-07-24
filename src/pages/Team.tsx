import { Clock, MapPin } from "lucide-react"
import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { asset } from "../lib/asset"
import {
  schulleitung,
  sekretariat,
  hausmeister,
  verwaltung,
  schulinfo,
  type Person,
} from "../data/schule"

function PersonenGrid({ personen }: { personen: Person[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {personen.map((person, i) => (
        <FadeIn key={person.name} delay={i * 0.06}>
          <div className="rounded-2xl bg-ink-50 h-full overflow-hidden">
            {person.foto && (
              <img
                src={asset(person.foto)}
                alt={`Porträt von ${person.name}`}
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
            )}
            <div className="p-5">
              <p className="font-semibold text-lg">{person.name}</p>
              <p className="mt-1 text-sm text-brand-700 font-medium">{person.rolle}</p>
              {person.seit && <p className="mt-2 text-sm text-ink-600">{person.seit}</p>}
              {person.faecher && (
                <p className="mt-1 text-sm text-ink-600">Fächer: {person.faecher}</p>
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}

export default function Team() {
  return (
    <>
      <PageHeader
        title="Schulleitung & Verwaltung"
        subtitle="Ihre Ansprechpartnerinnen und Ansprechpartner an den Beruflichen Schulen Bebra."
      />

      <div className="mx-auto max-w-6xl px-4 md:px-8 mb-16">
        <section aria-labelledby="schulleitung-heading" className="mt-16">
          <FadeIn>
            <h2 id="schulleitung-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Schulleitung
            </h2>
          </FadeIn>
          <PersonenGrid personen={schulleitung} />
        </section>

        <section aria-labelledby="sekretariat-heading" className="mt-16">
          <FadeIn>
            <h2 id="sekretariat-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Schulsekretariat
            </h2>
            <div className="mt-6 rounded-2xl bg-ink-50 p-6 max-w-2xl">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-ink-600">{verwaltung.ort}</span>
              </p>
              <div className="mt-4 flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium">Öffnungszeiten</p>
                  <ul className="mt-1 text-ink-600 text-sm">
                    {verwaltung.oeffnungszeiten.map((zeit) => (
                      <li key={zeit}>{zeit}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-ink-600">{verwaltung.hinweis}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-600">
                Telefon:{" "}
                <a href="tel:+496622430820" className="text-brand-700 hover:underline">
                  {schulinfo.telefon}
                </a>
              </p>
            </div>
          </FadeIn>
          <PersonenGrid personen={sekretariat} />
        </section>

        <section aria-labelledby="hausmeister-heading" className="mt-16">
          <FadeIn>
            <h2 id="hausmeister-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Hausmeister
            </h2>
          </FadeIn>
          <PersonenGrid personen={hausmeister} />
        </section>

        <FadeIn className="mt-16">
          <p className="text-sm text-ink-600 max-w-2xl">
            {/* TODO: Kollegiumsliste – die Altseite führt auf der Seite „Kollegium" nur historische
                Gruppenfotos, keine Namensliste. Bei Bedarf aktuelle Liste von der Schule anfordern. */}
            Eine vollständige Übersicht des Kollegiums lag auf der bisherigen Website nicht vor
            und wird nachgereicht.
          </p>
        </FadeIn>
      </div>
    </>
  )
}
