import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { news } from "../data/news"
import { asset } from "../lib/asset"

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

      <div className="mx-auto max-w-6xl px-4 md:px-8 mt-16 mb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {news.map((n, i) => (
            <FadeIn key={n.slug} delay={i * 0.08}>
              <article className="card-cut bg-ink-50 h-full flex flex-col overflow-hidden">
                {n.bilder[0] && (
                  <img
                    src={asset(n.bilder[0].src)}
                    alt={n.bilder[0].alt}
                    className="w-full aspect-[16/9] object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <time dateTime={n.datum} className="text-sm text-brand-700 font-medium">
                    {datumFormat.format(new Date(n.datum))}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold">{n.titel}</h2>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{n.teaser}</p>
                  <Link
                    to={`/aktuelles/${n.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-brand-700 font-medium hover:text-brand-800 group self-start"
                  >
                    Weiterlesen
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  )
}
