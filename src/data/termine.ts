export interface Termin {
  datum: string
  titel: string
  beschreibung?: string
}

export const termine: Termin[] = [
  {
    datum: "2026-08-10",
    titel: "Erster Schultag – Berufsschule (1. Lehrjahr)",
    beschreibung: "Beginn 7:30 Uhr.",
  },
  {
    datum: "2026-08-10",
    titel: "Erster Schultag – Berufsfachschule (Klasse 10)",
    beschreibung: "Beginn 9:15 Uhr.",
  },
  {
    datum: "2026-08-10",
    titel: "Erster Schultag – Fachoberschule (Klasse 11)",
    beschreibung: "Beginn 10:00 Uhr.",
  },
  {
    datum: "2026-08-10",
    titel: "Erster Schultag – Berufliches Gymnasium (Klasse 11)",
    beschreibung: "Beginn 11:00 Uhr.",
  },
]

export const sprechzeitenSommerferien = {
  hinweis:
    "Sprechzeiten der Schulleitung in den Sommerferien: jeweils mittwochs, 10:00–12:00 Uhr.",
  termine: ["2026-07-01", "2026-07-08", "2026-07-15", "2026-07-22", "2026-07-29", "2026-08-05"],
  notfallkontakt:
    "In dringenden Fällen erreichen Sie Frau Buchenau (Schulleiterin) unter 0171 8327465.",
} as const
