import { Car, Mail, MapPin, Phone, Printer, TrainFront } from "lucide-react"
import PageHeader from "../components/PageHeader"
import FadeIn from "../components/FadeIn"
import { schulinfo, anreise } from "../data/schule"

export default function Kontakt() {
  return (
    <>
      <PageHeader
        title="Kontakt & Anfahrt"
        subtitle="So erreichen Sie die Beruflichen Schulen Bebra."
      />

      <div className="mx-auto max-w-6xl px-4 md:px-8 mt-16 grid gap-10 lg:grid-cols-2">
        <FadeIn>
          <section aria-labelledby="kontaktdaten-heading">
            <h2 id="kontaktdaten-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Kontaktdaten
            </h2>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="btn-cut-sm bg-brand-700 text-white w-10 h-10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">{schulinfo.name}</p>
                  <p className="text-ink-600">
                    {schulinfo.strasse}
                    <br />
                    {schulinfo.ort}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="btn-cut-sm bg-brand-700 text-white w-10 h-10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a href="tel:+496622430820" className="text-ink-600 hover:text-brand-700">
                    {schulinfo.telefon}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="btn-cut-sm bg-brand-700 text-white w-10 h-10 flex items-center justify-center shrink-0">
                  <Printer className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Fax</p>
                  <p className="text-ink-600">{schulinfo.fax}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="btn-cut-sm bg-brand-700 text-white w-10 h-10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <a href={`mailto:${schulinfo.email}`} className="text-ink-600 hover:text-brand-700">
                    {schulinfo.email}
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}>
          <section aria-labelledby="anfahrt-heading">
            <h2 id="anfahrt-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Anfahrt
            </h2>
            <div className="card-cut mt-8 bg-ink-50 p-6">
              <p className="flex items-center gap-3 font-semibold">
                <TrainFront className="w-5 h-5 text-brand-600" aria-hidden="true" />
                Mit Bahn und Bus
              </p>
              <p className="mt-2 text-ink-600 text-sm leading-relaxed">
                {anreise.oeffentlich}
              </p>
            </div>
            <div className="card-cut mt-5 bg-ink-50 p-6">
              <p className="flex items-center gap-3 font-semibold">
                <Car className="w-5 h-5 text-brand-600" aria-hidden="true" />
                Mit dem Auto
              </p>
              <p className="mt-2 text-ink-600 text-sm leading-relaxed">
                {anreise.auto}
              </p>
              <p className="mt-2 text-ink-600 text-sm leading-relaxed">
                {anreise.parken}
              </p>
            </div>
            <div className="card-cut mt-5 bg-ink-100 aspect-video flex items-center justify-center">
              {/* TODO: Karte einbinden – Datenschutz klären (OpenStreetMap-Embed oder statisches Kartenbild) */}
              <p className="text-ink-600 text-sm px-6 text-center">
                Kartenansicht folgt – bis dahin:{" "}
                <a
                  href="https://www.openstreetmap.org/search?query=Auestra%C3%9Fe%2030%2C%2036179%20Bebra"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-700 font-medium hover:underline"
                >
                  Adresse auf OpenStreetMap öffnen
                </a>
              </p>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  )
}
