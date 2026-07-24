import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { news } from "../data/news"
import { asset } from "../lib/asset"

const datumFormat = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})

export default function NewsDetail() {
  const { slug } = useParams()
  const beitrag = news.find((n) => n.slug === slug)

  if (!beitrag) {
    return (
      <>
        <PageHeader title="Beitrag nicht gefunden" />
        <div className="mx-auto max-w-3xl px-4 md:px-8 mt-16 mb-16">
          <Link to="/aktuelles" className="text-brand-700 font-medium hover:underline">
            Zur Übersicht aller Meldungen
          </Link>
        </div>
      </>
    )
  }

  const [leitbild, ...weitereBilder] = beitrag.bilder

  return (
    <>
      <PageHeader title={beitrag.titel} subtitle={beitrag.vorspann} />

      <article className="mx-auto max-w-3xl px-4 md:px-8 mt-10 mb-16">
        <Link
          to="/aktuelles"
          className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-brand-700"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Alle Meldungen
        </Link>

        <time dateTime={beitrag.datum} className="mt-8 block text-sm font-medium text-brand-700">
          {datumFormat.format(new Date(beitrag.datum))}
        </time>

        {leitbild && (
          <FadeIn className="mt-6">
            <figure>
              <img
                src={asset(leitbild.src)}
                alt={leitbild.alt}
                className="card-cut w-full"
                loading="lazy"
              />
              {leitbild.bildunterschrift && (
                <figcaption className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {leitbild.bildunterschrift}
                </figcaption>
              )}
            </figure>
          </FadeIn>
        )}

        <div className="mt-10 space-y-6">
          {beitrag.absaetze.map((absatz, i) => (
            <div key={i}>
              {absatz.titel && (
                <h2 className="text-xl font-semibold tracking-tight mb-2">{absatz.titel}</h2>
              )}
              <p className="text-ink-600 leading-relaxed">{absatz.text}</p>
            </div>
          ))}
        </div>

        {weitereBilder.length > 0 && (
          <FadeIn className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight">Bilder</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {weitereBilder.map((bild) => (
                <figure key={bild.src}>
                  <img
                    src={asset(bild.src)}
                    alt={bild.alt}
                    className="card-cut w-full"
                    loading="lazy"
                  />
                  {bild.bildunterschrift && (
                    <figcaption className="mt-2 text-sm text-ink-600 leading-relaxed">
                      {bild.bildunterschrift}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </FadeIn>
        )}
      </article>
    </>
  )
}
