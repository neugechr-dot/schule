import { ExternalLink } from "lucide-react"
import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { angebote } from "../data/angebote"
import { asset } from "../lib/asset"

export default function Angebote() {
  return (
    <>
      <PageHeader
        title="Weitere Angebote"
        subtitle="Lernplattform, Zertifizierung, Beratung und praxisnahes Lernen – über den Unterricht hinaus."
      />

      <div className="mx-auto max-w-4xl px-4 md:px-8 mb-16">
        {angebote.map((angebot, i) => (
          <FadeIn key={angebot.slug} delay={i * 0.05} className="mt-16">
            <section id={angebot.slug} aria-labelledby={`${angebot.slug}-heading`}>
              <h2
                id={`${angebot.slug}-heading`}
                className="text-2xl md:text-3xl font-semibold tracking-tight"
              >
                {angebot.name}
              </h2>
              <p className="mt-1 text-brand-700 font-medium">{angebot.untertitel}</p>

              <div className="mt-4 space-y-4">
                {angebot.absaetze.map((absatz, j) => (
                  <p key={j} className="text-ink-600 leading-relaxed">
                    {absatz}
                  </p>
                ))}
              </div>

              {angebot.liste && (
                <div className="mt-6">
                  <h3 className="font-semibold">{angebot.liste.titel}</h3>
                  <ul className="mt-3 space-y-2">
                    {angebot.liste.punkte.map((punkt) => (
                      <li key={punkt} className="flex gap-3 text-ink-600 leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1.5 h-1.5 bg-brand-500 shrink-0"
                        />
                        {punkt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {angebot.kontakt && (
                <div className="rounded-2xl mt-6 bg-ink-50 p-6">
                  <p className="font-semibold">{angebot.kontakt.name}</p>
                  {angebot.kontakt.rolle && (
                    <p className="text-sm text-brand-700 font-medium">{angebot.kontakt.rolle}</p>
                  )}
                  <ul className="mt-3 space-y-1 text-sm text-ink-600">
                    {angebot.kontakt.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {angebot.bild && (
                <img
                  src={asset(angebot.bild.src)}
                  alt={angebot.bild.alt}
                  className="rounded-2xl mt-6 w-full border border-ink-100"
                  loading="lazy"
                />
              )}

              {angebot.links && (
                <ul className="mt-6 space-y-2">
                  {angebot.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-brand-700 font-medium hover:underline"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </FadeIn>
        ))}
      </div>
    </>
  )
}
