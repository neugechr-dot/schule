import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { news } from "../data/news"

const datumFormat = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})

export default function Aktuelles() {
  return (
    <>
      <PageHeader
        title="Aktuelles"
        subtitle="Neuigkeiten und Berichte aus dem Schulleben der Beruflichen Schulen Bebra."
      />

      <div className="mx-auto max-w-6xl px-4 md:px-8 mt-16">
        {news.length === 0 ? (
          <FadeIn>
            <p className="text-ink-600 max-w-2xl">
              Die Meldungen der bisherigen Website werden derzeit übernommen und
              erscheinen in Kürze hier.
            </p>
          </FadeIn>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {news.map((n, i) => (
              <FadeIn key={n.slug} delay={i * 0.08}>
                <article className="card-cut bg-ink-50 p-6 h-full">
                  <time dateTime={n.datum} className="text-sm text-brand-700 font-medium">
                    {datumFormat.format(new Date(n.datum))}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold">{n.titel}</h2>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{n.teaser}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
