import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import DownloadListe from "../components/DownloadListe"
import { downloads, blockplaene, blockplaeneSchuljahr } from "../data/downloads"

export default function Service() {
  return (
    <>
      <PageHeader
        title="Service & Downloads"
        subtitle="Anmeldeformulare, Flyer und Blockpläne zum Herunterladen."
      />

      <div className="mx-auto max-w-4xl px-4 md:px-8 mb-16">
        <section aria-labelledby="blockplaene-heading" className="mt-16">
          <FadeIn>
            <h2 id="blockplaene-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Blockpläne {blockplaeneSchuljahr}
            </h2>
            <p className="mt-3 text-ink-600">
              Für Klassen mit Blockbeschulung. Bitte beachten Sie den jeweiligen Stand der
              Pläne – Änderungen sind möglich.
            </p>
            <div className="mt-6">
              <DownloadListe items={blockplaene} />
            </div>
          </FadeIn>
        </section>

        {downloads.map((gruppe, i) => (
          <section
            key={gruppe.kategorie}
            aria-labelledby={`dl-${i}`}
            className="mt-16"
          >
            <FadeIn>
              <h2 id={`dl-${i}`} className="text-2xl md:text-3xl font-semibold tracking-tight">
                {gruppe.kategorie}
              </h2>
              <div className="mt-6">
                <DownloadListe items={gruppe.items} />
              </div>
            </FadeIn>
          </section>
        ))}

        <FadeIn className="mt-16">
          <div className="card-cut bg-ink-50 p-6">
            <h2 className="text-xl font-semibold">Vertretungsplan</h2>
            <p className="mt-3 text-ink-600 leading-relaxed">
              {/* TODO: Auf der Altseite war der Menüpunkt „Vertretung" verlinkt, die Seite liefert
                  jedoch einen 404-Fehler. Zugang/Verfahren (z. B. DSBmobile, Untis) bei der Schule
                  erfragen und hier ergänzen. */}
              Informationen zum Vertretungsplan werden ergänzt, sobald der Zugang mit der Schule
              abgestimmt ist.
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  )
}
