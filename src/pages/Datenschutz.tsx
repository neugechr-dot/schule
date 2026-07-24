import PageHeader from "../components/PageHeader"
import { schulinfo } from "../data/schule"

export default function Datenschutz() {
  return (
    <>
      <PageHeader title="Datenschutzerklärung" />

      <div className="mx-auto max-w-3xl px-4 md:px-8 mt-16 space-y-10">
        <section aria-labelledby="verantwortlich-heading">
          <h2 id="verantwortlich-heading" className="text-xl font-semibold">Verantwortlicher</h2>
          <p className="mt-3 text-ink-600 leading-relaxed">
            {schulinfo.name}
            <br />
            {schulinfo.strasse}, {schulinfo.ort}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${schulinfo.email}`} className="text-brand-700 hover:underline">
              {schulinfo.email}
            </a>
          </p>
        </section>

        <section aria-labelledby="entwurf-heading" className="card-cut bg-ink-50 p-6">
          <h2 id="entwurf-heading" className="text-xl font-semibold">Hinweis</h2>
          <p className="mt-3 text-ink-600 leading-relaxed">
            {/* TODO: Vollständige Datenschutzerklärung mit Schulträger/
                Datenschutzbeauftragten abstimmen (Hosting, Server-Logs,
                externe Links, Betroffenenrechte nach DSGVO/HDSIG).
                Auf der Altseite war keine eigene Datenschutzerklärung
                auffindbar – vor Launch zwingend ergänzen. */}
            Die vollständige Datenschutzerklärung wird derzeit mit den
            zuständigen Stellen abgestimmt und vor Veröffentlichung der
            Website an dieser Stelle ergänzt. Diese Website verwendet keine
            Cookies zu Analyse- oder Werbezwecken.
          </p>
        </section>
      </div>
    </>
  )
}
