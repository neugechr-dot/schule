import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { jubilaeum } from "../data/jubilaeum"
import { asset } from "../lib/asset"

const datumFormat = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})

export default function Jubilaeum() {
  return (
    <>
      <PageHeader title="125 Jahre" subtitle={jubilaeum.motto} />

      <div className="mx-auto max-w-4xl px-4 md:px-8 mb-16">
        <FadeIn className="mt-16">
          <p className="text-lg text-brand-700 font-medium">{jubilaeum.zeitraum}</p>
          <p className="mt-4 text-ink-600 leading-relaxed">{jubilaeum.einleitung}</p>
          <p className="mt-4 text-ink-600 leading-relaxed">
            Die wichtigsten Entwicklungen der Schulgeschichte finden Sie unter{" "}
            <Link to="/schule#geschichte-heading" className="text-brand-700 font-medium hover:underline">
              Die Schule
            </Link>
            .
          </p>
        </FadeIn>

        <FadeIn className="mt-12">
          <div className="grid gap-5 sm:grid-cols-2">
            {jubilaeum.bilder.map((bild) => (
              <img
                key={bild.src}
                src={asset(bild.src)}
                alt={bild.alt}
                className="rounded-2xl w-full border border-ink-100"
                loading="lazy"
              />
            ))}
          </div>
          <p className="mt-4 text-ink-600 leading-relaxed">{jubilaeum.betonzahlen}</p>
        </FadeIn>

        <FadeIn className="mt-16">
          <section aria-labelledby="veranstaltungen-heading">
            <h2
              id="veranstaltungen-heading"
              className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
              Veranstaltungen im Jubiläumsjahr
            </h2>
            <ul className="mt-8 space-y-4">
              {jubilaeum.veranstaltungen.map((v, i) => (
                <li key={`${v.datum}-${i}`} className="rounded-2xl bg-ink-50 p-5">
                  <time dateTime={v.datum} className="text-sm font-semibold text-brand-700">
                    {datumFormat.format(new Date(v.datum))}
                  </time>
                  <p className="mt-1 font-medium">{v.titel}</p>
                  <p className="mt-1 text-sm text-ink-600">
                    {v.ort}
                    {v.zeit && ` · ${v.zeit}`}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>
      </div>
    </>
  )
}
