import { useId, useState, type FormEvent } from "react"
import { Send } from "lucide-react"
import { schulinfo } from "../data/schule"

interface Felder {
  name: string
  email: string
  betreff: string
  nachricht: string
  einwilligung: boolean
}

const leer: Felder = {
  name: "",
  email: "",
  betreff: "",
  nachricht: "",
  einwilligung: false,
}

function pruefe(felder: Felder) {
  const fehler: Partial<Record<keyof Felder, string>> = {}
  if (!felder.name.trim()) fehler.name = "Bitte geben Sie Ihren Namen an."
  if (!felder.email.trim()) {
    fehler.email = "Bitte geben Sie Ihre E-Mail-Adresse an."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(felder.email.trim())) {
    fehler.email = "Diese E-Mail-Adresse scheint nicht vollständig zu sein."
  }
  if (!felder.betreff.trim()) fehler.betreff = "Bitte geben Sie einen Betreff an."
  if (!felder.nachricht.trim()) {
    fehler.nachricht = "Bitte geben Sie Ihre Nachricht ein."
  } else if (felder.nachricht.trim().length < 10) {
    fehler.nachricht = "Bitte formulieren Sie Ihre Nachricht etwas ausführlicher."
  }
  if (!felder.einwilligung) {
    fehler.einwilligung = "Ohne Ihre Einwilligung können wir die Nachricht nicht verarbeiten."
  }
  return fehler
}

export default function Kontaktformular() {
  const id = useId()
  const [felder, setFelder] = useState<Felder>(leer)
  const [fehler, setFehler] = useState<Partial<Record<keyof Felder, string>>>({})
  const [uebergeben, setUebergeben] = useState(false)
  const [honigtopf, setHonigtopf] = useState("")

  const feldKlasse = (feld: keyof Felder) =>
    `mt-2 w-full rounded-xl border px-4 py-2.5 text-ink-900 bg-white transition-colors ${
      fehler[feld] ? "border-red-600" : "border-ink-200 hover:border-brand-500"
    }`

  function absenden(e: FormEvent) {
    e.preventDefault()
    if (honigtopf) return

    const gefunden = pruefe(felder)
    setFehler(gefunden)
    if (Object.keys(gefunden).length > 0) {
      document.getElementById(`${id}-${Object.keys(gefunden)[0]}`)?.focus()
      return
    }

    const koerper = `${felder.nachricht.trim()}\n\n---\n${felder.name.trim()}\n${felder.email.trim()}`
    window.location.href = `mailto:${schulinfo.email}?subject=${encodeURIComponent(
      felder.betreff.trim(),
    )}&body=${encodeURIComponent(koerper)}`
    setUebergeben(true)
  }

  return (
    <form onSubmit={absenden} noValidate className="rounded-2xl border border-brand-500 p-6">
      <p className="text-sm text-ink-600 leading-relaxed">
        Das Formular übergibt Ihre Angaben an Ihr E-Mail-Programm, vorausgefüllt an{" "}
        {schulinfo.email}. Abgeschickt wird die Nachricht erst dort durch Sie selbst. Mit{" "}
        <span aria-hidden="true">*</span> markierte Felder sind Pflichtfelder.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="font-medium">
            Name <span className="text-red-700">*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={felder.name}
            onChange={(e) => setFelder({ ...felder, name: e.target.value })}
            aria-required="true"
            aria-invalid={!!fehler.name}
            aria-describedby={fehler.name ? `${id}-name-fehler` : undefined}
            className={feldKlasse("name")}
          />
          {fehler.name && (
            <p id={`${id}-name-fehler`} className="mt-1 text-sm text-red-700">
              {fehler.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-email`} className="font-medium">
            E-Mail <span className="text-red-700">*</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={felder.email}
            onChange={(e) => setFelder({ ...felder, email: e.target.value })}
            aria-required="true"
            aria-invalid={!!fehler.email}
            aria-describedby={fehler.email ? `${id}-email-fehler` : undefined}
            className={feldKlasse("email")}
          />
          {fehler.email && (
            <p id={`${id}-email-fehler`} className="mt-1 text-sm text-red-700">
              {fehler.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-betreff`} className="font-medium">
          Betreff <span className="text-red-700">*</span>
        </label>
        <input
          id={`${id}-betreff`}
          name="betreff"
          type="text"
          value={felder.betreff}
          onChange={(e) => setFelder({ ...felder, betreff: e.target.value })}
          aria-required="true"
          aria-invalid={!!fehler.betreff}
          aria-describedby={fehler.betreff ? `${id}-betreff-fehler` : undefined}
          className={feldKlasse("betreff")}
        />
        {fehler.betreff && (
          <p id={`${id}-betreff-fehler`} className="mt-1 text-sm text-red-700">
            {fehler.betreff}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-nachricht`} className="font-medium">
          Nachricht <span className="text-red-700">*</span>
        </label>
        <textarea
          id={`${id}-nachricht`}
          name="nachricht"
          rows={6}
          value={felder.nachricht}
          onChange={(e) => setFelder({ ...felder, nachricht: e.target.value })}
          aria-required="true"
          aria-invalid={!!fehler.nachricht}
          aria-describedby={fehler.nachricht ? `${id}-nachricht-fehler` : undefined}
          className={`${feldKlasse("nachricht")} resize-y`}
        />
        {fehler.nachricht && (
          <p id={`${id}-nachricht-fehler`} className="mt-1 text-sm text-red-700">
            {fehler.nachricht}
          </p>
        )}
      </div>

      <div className="mt-5">
        <div className="flex items-start gap-3">
          <input
            id={`${id}-einwilligung`}
            name="einwilligung"
            type="checkbox"
            checked={felder.einwilligung}
            onChange={(e) => setFelder({ ...felder, einwilligung: e.target.checked })}
            aria-required="true"
            aria-invalid={!!fehler.einwilligung}
            aria-describedby={fehler.einwilligung ? `${id}-einwilligung-fehler` : undefined}
            className="mt-1 w-5 h-5 shrink-0 accent-brand-700"
          />
          <label htmlFor={`${id}-einwilligung`} className="text-sm text-ink-600 leading-relaxed">
            Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
            verarbeitet werden. <span className="text-red-700">*</span>
          </label>
        </div>
        {fehler.einwilligung && (
          <p id={`${id}-einwilligung-fehler`} className="mt-1 text-sm text-red-700">
            {fehler.einwilligung}
          </p>
        )}
      </div>

      <div aria-hidden="true" className="sr-only">
        <label htmlFor={`${id}-website`}>Bitte nicht ausfüllen</label>
        <input
          id={`${id}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honigtopf}
          onChange={(e) => setHonigtopf(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn-liquid mt-6 inline-flex items-center gap-2 px-6 py-3 font-medium"
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        Nachricht übernehmen
      </button>

      <p aria-live="polite" className="mt-4 text-sm text-ink-600 leading-relaxed">
        {uebergeben && (
          <>
            Ihre Angaben wurden an Ihr E-Mail-Programm übergeben. Bitte schicken Sie die Nachricht
            dort ab. Falls sich nichts geöffnet hat, schreiben Sie uns bitte direkt an{" "}
            <a href={`mailto:${schulinfo.email}`} className="text-brand-700 font-medium underline">
              {schulinfo.email}
            </a>
            .
          </>
        )}
      </p>
    </form>
  )
}
