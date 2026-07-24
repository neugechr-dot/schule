import PageHeader from "../components/PageHeader"
import { schulinfo, schulleitung, traeger } from "../data/schule"

export default function Impressum() {
  return (
    <>
      <PageHeader title="Impressum" />

      <div className="mx-auto max-w-3xl px-4 md:px-8 mt-16 space-y-10">
        <section aria-labelledby="anbieter-heading">
          <h2 id="anbieter-heading" className="text-xl font-semibold">Angaben zur Schule</h2>
          <p className="mt-3 text-ink-600 leading-relaxed">
            {schulinfo.name}
            <br />
            {schulinfo.strasse}
            <br />
            {schulinfo.ort}
          </p>
          <p className="mt-3 text-ink-600 leading-relaxed">
            Telefon: {schulinfo.telefon}
            <br />
            Fax: {schulinfo.fax}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${schulinfo.email}`} className="text-brand-700 hover:underline">
              {schulinfo.email}
            </a>
          </p>
        </section>

        <section aria-labelledby="vertretung-heading">
          <h2 id="vertretung-heading" className="text-xl font-semibold">Vertreten durch</h2>
          <ul className="mt-3 text-ink-600 leading-relaxed">
            {schulleitung.map((p) => (
              <li key={p.name}>
                {p.name} ({p.rolle})
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="traeger-heading" className="rounded-2xl bg-ink-50 p-6">
          <h2 id="traeger-heading" className="text-xl font-semibold">Schulträger &amp; Aufsichtsbehörde</h2>
          <p className="mt-3 text-ink-600 leading-relaxed">
            Schulträger: {traeger.schultraeger}
            <br />
            Aufsichtsbehörde: {traeger.aufsichtsbehoerde}
          </p>
          <p className="mt-3 text-xs text-ink-600">
            {/* TODO: Angaben vor Launch mit dem Schulträger final abstimmen und freigeben lassen */}
            Hinweis: Diese Angaben sind vor Veröffentlichung noch mit dem
            Schulträger final abzustimmen und freizugeben.
          </p>
        </section>
      </div>
    </>
  )
}
