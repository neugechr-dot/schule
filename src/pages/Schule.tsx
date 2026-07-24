import { Link } from "react-router-dom"
import { Award, ArrowRight, ExternalLink, FileText, Users } from "lucide-react"
import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { asset } from "../lib/asset"
import {
  schulleitung,
  gruesswort,
  geschichte,
  foerderverein,
  kooperationen,
  auszeichnungen,
} from "../data/schule"

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
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {schulleitung.slice(0, 3).map((person) => (
                <div key={person.name} className="rounded-2xl bg-ink-50 overflow-hidden">
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
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/schule/team"
              className="mt-6 inline-flex items-center gap-2 text-brand-700 font-medium hover:text-brand-800 group"
            >
              Gesamte Schulleitung und Verwaltung
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </section>
        </FadeIn>

        <FadeIn className="mt-16">
          <section aria-labelledby="ueberuns-heading">
            <h2 id="ueberuns-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Grußwort der Schulleitung
            </h2>
            <div className="mt-4 max-w-2xl text-ink-600 leading-relaxed space-y-4">
              <p>{gruesswort.anrede}</p>
              {gruesswort.absaetze.map((absatz, i) => (
                <p key={i}>{absatz}</p>
              ))}
              <p className="font-medium text-ink-900">{gruesswort.unterschrift}</p>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-16">
          <section aria-labelledby="geschichte-heading">
            <h2 id="geschichte-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Geschichte
            </h2>
            <p className="mt-4 max-w-2xl text-ink-600">
              Seit 1890 bilden die Beruflichen Schulen Bebra junge Menschen
              aus – über 125 Jahre Schulgeschichte in Etappen.
            </p>
            <div className="mt-8 max-w-2xl space-y-6">
              {geschichte.map((abschnitt) => (
                <div key={abschnitt.zeitraum} className="border-l-2 border-brand-500 pl-5">
                  <p className="font-semibold text-brand-700">{abschnitt.zeitraum}</p>
                  <p className="mt-1 text-ink-600 leading-relaxed">{abschnitt.text}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-16">
          <section aria-labelledby="auszeichnungen-heading">
            <h2
              id="auszeichnungen-heading"
              className="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-3"
            >
              <Award className="w-7 h-7 text-brand-600" aria-hidden="true" />
              Auszeichnungen
            </h2>
            <div className="mt-8 space-y-8">
              {auszeichnungen.map((a) => (
                <div key={a.slug} className="rounded-2xl bg-ink-50 p-6 md:p-8">
                  <h3 className="text-xl font-semibold">{a.name}</h3>
                  <p className="mt-1 text-sm text-brand-700 font-medium">{a.jahr}</p>
                  <div className="mt-4 space-y-3 max-w-3xl">
                    {a.absaetze.map((absatz, i) => (
                      <p key={i} className="text-ink-600 leading-relaxed">
                        {absatz}
                      </p>
                    ))}
                  </div>
                  {"teilzertifikate" in a && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {a.teilzertifikate.map((t) => (
                        <li
                          key={t.name}
                          className="rounded-full bg-white border border-ink-100 px-3 py-1.5 text-sm"
                        >
                          {t.name} <span className="text-ink-600">({t.jahr})</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {"ansprechpartner" in a && (
                    <p className="mt-4 text-sm text-ink-600">
                      Ansprechpartner: {a.ansprechpartner}
                    </p>
                  )}
                  <div className="mt-5 flex flex-wrap gap-5">
                    {"dokument" in a && (
                      <a
                        href={asset(a.dokument.datei)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-brand-700 font-medium hover:underline text-sm"
                      >
                        <FileText className="w-4 h-4" aria-hidden="true" />
                        {a.dokument.titel}
                      </a>
                    )}
                    {"link" in a && (
                      <a
                        href={a.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-brand-700 font-medium hover:underline text-sm"
                      >
                        {a.link.label}
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-16">
          <section aria-labelledby="foerderverein-heading">
            <h2 id="foerderverein-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Förderverein
            </h2>
            <p className="mt-4 max-w-2xl text-ink-600 leading-relaxed">
              {foerderverein.text}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-ink-600">
              {foerderverein.vorsitzender} ·{" "}
              <a href={`mailto:${foerderverein.email}`} className="text-brand-700 hover:underline">
                {foerderverein.email}
              </a>{" "}
              ·{" "}
              <a
                href={`https://${foerderverein.homepage}`}
                target="_blank"
                rel="noreferrer"
                className="text-brand-700 hover:underline"
              >
                {foerderverein.homepage}
              </a>
            </p>
          </section>
        </FadeIn>

        <FadeIn className="mt-16 mb-16">
          <section aria-labelledby="kooperationen-heading">
            <h2 id="kooperationen-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Kooperationen
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {kooperationen.map((gruppe) => (
                <div key={gruppe.kategorie} className="rounded-2xl bg-ink-50 p-6">
                  <h3 className="font-semibold text-brand-700">{gruppe.kategorie}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-600 leading-relaxed">
                    {gruppe.partner.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  )
}
