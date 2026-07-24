import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { unterrichtszeiten, gebaeude } from "../data/schule"
import { asset } from "../lib/asset"

function Stundenplan({
  zeiten,
}: {
  zeiten: readonly { stunde: string; zeit: string; pause?: boolean }[]
}) {
  return (
    <table className="w-full text-left">
      <caption className="sr-only">Übersicht der Unterrichtsstunden mit Uhrzeiten</caption>
      <thead>
        <tr className="border-b border-ink-200">
          <th scope="col" className="py-2 pr-4 text-sm font-semibold">
            Stunde
          </th>
          <th scope="col" className="py-2 text-sm font-semibold">
            Uhrzeit
          </th>
        </tr>
      </thead>
      <tbody>
        {zeiten.map((z, i) => (
          <tr
            key={`${z.stunde}-${i}`}
            className={`border-b border-ink-100 ${z.pause ? "text-ink-600" : ""}`}
          >
            <td className="py-2 pr-4 text-sm">{z.stunde}</td>
            <td className="py-2 text-sm">{z.zeit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Organisation() {
  return (
    <>
      <PageHeader
        title="Organisation"
        subtitle="Unterrichtszeiten, Organigramm und Lageplan der Beruflichen Schulen Bebra."
      />

      <div className="mx-auto max-w-6xl px-4 md:px-8 mb-16">
        <section aria-labelledby="unterrichtszeiten-heading" className="mt-16">
          <FadeIn>
            <h2
              id="unterrichtszeiten-heading"
              className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
              Unterrichtszeiten
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="card-cut bg-ink-50 p-6">
                <h3 className="font-semibold mb-4">Regulärer Unterricht</h3>
                <div className="overflow-x-auto">
                  <Stundenplan zeiten={unterrichtszeiten.regulaer} />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="card-cut bg-ink-50 p-6">
                <h3 className="font-semibold mb-4">
                  Fachschule für Technik (Dienstag und Donnerstag)
                </h3>
                <div className="overflow-x-auto">
                  <Stundenplan zeiten={unterrichtszeiten.fachschule} />
                </div>
                <p className="mt-4 text-sm text-ink-600">
                  Samstags findet der Unterricht von 7:30 bis 14:15 Uhr statt.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section aria-labelledby="gebaeude-heading" className="mt-16">
          <FadeIn>
            <h2 id="gebaeude-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Gebäude und Lageplan
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gebaeude.map((g, i) => (
              <FadeIn key={g.nummer} delay={i * 0.06}>
                <div className="card-cut border border-ink-100 p-6 h-full">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {g.nummer}
                  </p>
                  <h3 className="mt-1 font-semibold">{g.name}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{g.beschreibung}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-8">
            <figure>
              <img
                src={asset("/media/schule/lageplan.jpg")}
                alt="Lageplan des Schulgeländes der Beruflichen Schulen Bebra mit den Gebäuden 1 bis 5"
                className="card-cut w-full border border-ink-100"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-ink-600">
                Lageplan des Schulgeländes
              </figcaption>
            </figure>
          </FadeIn>
        </section>

        <section aria-labelledby="organigramm-heading" className="mt-16">
          <FadeIn>
            <h2
              id="organigramm-heading"
              className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
              Organigramm
            </h2>
            <figure className="mt-8">
              <img
                src={asset("/media/schule/organigramm-2020.jpg")}
                alt="Organigramm der Beruflichen Schulen Bebra mit Schulleitung, Abteilungen und Fachbereichen"
                className="card-cut w-full border border-ink-100"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-ink-600">
                {/* TODO: Aktualisiertes Organigramm anfordern – die Vorlage stammt von 2020. */}
                Organisationsstruktur der Schule (Stand 2020)
              </figcaption>
            </figure>
          </FadeIn>
        </section>
      </div>
    </>
  )
}
