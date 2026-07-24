import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { bildungsgaenge, weitereAngebote } from "../data/bildungsgaenge"

export default function Bildungsgaenge() {
  const vollzeit = bildungsgaenge.filter((bg) => bg.form === "Vollzeit")
  const teilzeit = bildungsgaenge.filter((bg) => bg.form === "Teilzeit")

  return (
    <>
      <PageHeader
        title="Bildungsgänge"
        subtitle="Vom Mittleren Abschluss bis zum Abitur, von der dualen Ausbildung bis zur Technikerweiterbildung."
      />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {[
          { label: "Vollzeit-Schulformen", items: vollzeit },
          { label: "Teilzeit-Schulformen", items: teilzeit },
        ].map((gruppe) => (
          <section key={gruppe.label} aria-label={gruppe.label} className="mt-16">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {gruppe.label}
              </h2>
            </FadeIn>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {gruppe.items.map((bg, i) => (
                <FadeIn key={bg.slug} delay={i * 0.1}>
                  <article className="card-cut bg-ink-50 p-6 md:p-8 h-full">
                    <div className="flex items-center gap-4">
                      <span className="btn-cut-sm bg-brand-500 text-white w-12 h-12 flex items-center justify-center shrink-0">
                        <bg.icon className="w-6 h-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{bg.name}</h3>
                        <p className="text-sm text-brand-700 font-medium">{bg.kuerzel} · {bg.form}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-ink-600 leading-relaxed">{bg.beschreibung}</p>
                    <p className="mt-4 text-sm font-medium">
                      <span className="text-ink-600">Abschluss:</span>{" "}
                      {bg.abschluss}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </section>
        ))}

        <section aria-labelledby="angebote-heading" className="mt-16">
          <FadeIn>
            <h2 id="angebote-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Weitere Angebote
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {weitereAngebote.map((angebot, i) => (
              <FadeIn key={angebot.name} delay={i * 0.08}>
                <div className="card-cut border border-ink-100 p-6 h-full">
                  <h3 className="font-semibold text-brand-700">{angebot.name}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    {angebot.beschreibung}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
