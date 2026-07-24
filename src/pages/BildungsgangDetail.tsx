import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ExternalLink } from "lucide-react"
import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import DownloadListe from "../components/DownloadListe"
import { bildungsgaenge, lehrplanFachschule } from "../data/bildungsgaenge"
import { asset } from "../lib/asset"

export default function BildungsgangDetail() {
  const { slug } = useParams()
  const bg = bildungsgaenge.find((b) => b.slug === slug)

  if (!bg) {
    return (
      <>
        <PageHeader title="Bildungsgang nicht gefunden" />
        <div className="mx-auto max-w-3xl px-4 md:px-8 mt-16">
          <Link to="/bildungsgaenge" className="text-brand-700 font-medium hover:underline">
            Zur Übersicht aller Bildungsgänge
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <PageHeader title={bg.name} subtitle={bg.beschreibung} />

      <div className="mx-auto max-w-4xl px-4 md:px-8 mt-10 mb-16">
        <Link
          to="/bildungsgaenge"
          className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-brand-700"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Alle Bildungsgänge
        </Link>

        <FadeIn className="mt-8">
          <dl className="rounded-2xl bg-ink-50 p-6 grid gap-5 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                Schulform
              </dt>
              <dd className="mt-1 font-medium">{bg.form}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                Dauer
              </dt>
              <dd className="mt-1 font-medium">{bg.dauer}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                Abschluss
              </dt>
              <dd className="mt-1 font-medium">{bg.abschluss}</dd>
            </div>
          </dl>
        </FadeIn>

        {bg.schwerpunkte && (
          <FadeIn className="mt-12">
            <section aria-labelledby="schwerpunkte-heading">
              <h2 id="schwerpunkte-heading" className="text-2xl font-semibold tracking-tight">
                Fachrichtungen und Schwerpunkte
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {bg.schwerpunkte.map((s) => (
                  <div key={s.name} className="rounded-2xl border border-ink-100 p-6">
                    <h3 className="font-semibold text-brand-700">{s.name}</h3>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        )}

        {bg.abschnitte.map((abschnitt, i) => (
          <FadeIn key={abschnitt.titel} delay={i * 0.05} className="mt-12">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">{abschnitt.titel}</h2>
              {abschnitt.absaetze?.map((absatz, j) => (
                <p key={j} className="mt-4 text-ink-600 leading-relaxed">
                  {absatz}
                </p>
              ))}
              {abschnitt.liste && (
                <ul className="mt-4 space-y-2">
                  {abschnitt.liste.map((punkt) => (
                    <li key={punkt} className="flex gap-3 text-ink-600 leading-relaxed">
                      <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 bg-brand-500 shrink-0" />
                      {punkt}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </FadeIn>
        ))}

        {bg.slug === "fachoberschule" && (
          <FadeIn className="mt-12">
            <section aria-labelledby="fos-grafiken-heading">
              <h2 id="fos-grafiken-heading" className="text-2xl font-semibold tracking-tight">
                Einordnung und Aufnahmevoraussetzungen
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <figure>
                  <img
                    src={asset("/media/angebote/fos-schulwesen.jpg")}
                    alt="Schaubild zur Einordnung der Fachoberschule im hessischen Schulwesen"
                    className="rounded-2xl w-full border border-ink-100"
                  />
                  <figcaption className="mt-2 text-sm text-ink-600">
                    Einordnung der FOS im hessischen Schulwesen
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={asset("/media/angebote/fos-aufnahmevoraussetzungen.jpg")}
                    alt="Tabelle mit den Aufnahmevoraussetzungen für die Fachoberschule"
                    className="rounded-2xl w-full border border-ink-100"
                  />
                  <figcaption className="mt-2 text-sm text-ink-600">
                    Aufnahmevoraussetzungen im Überblick
                  </figcaption>
                </figure>
              </div>
            </section>
          </FadeIn>
        )}

        {bg.slug === "fachschule-technik" && (
          <FadeIn className="mt-8">
            <a
              href={lehrplanFachschule}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-700 font-medium hover:underline"
            >
              Lehrplan Maschinentechnik (Hessisches Kultusministerium)
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </FadeIn>
        )}

        <FadeIn className="mt-12">
          <section aria-labelledby="downloads-heading">
            <h2 id="downloads-heading" className="text-2xl font-semibold tracking-tight">
              Formulare und Downloads
            </h2>
            <div className="mt-6">
              <DownloadListe items={bg.dokumente} />
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  )
}
