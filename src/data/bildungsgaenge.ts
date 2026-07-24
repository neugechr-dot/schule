import {
  GraduationCap,
  School,
  BookOpen,
  Wrench,
  Briefcase,
  type LucideIcon,
} from "lucide-react"

export interface Bildungsgang {
  slug: string
  kuerzel: string
  name: string
  form: "Vollzeit" | "Teilzeit"
  beschreibung: string
  abschluss: string
  icon: LucideIcon
}

export const bildungsgaenge: Bildungsgang[] = [
  {
    slug: "berufliches-gymnasium",
    kuerzel: "BG",
    name: "Berufliches Gymnasium",
    form: "Vollzeit",
    beschreibung:
      "Studienqualifizierender Bildungsgang mit der Möglichkeit des Erwerbs der Allgemeinen Hochschulreife (Abitur) und beruflicher Grundbildung.",
    abschluss: "Allgemeine Hochschulreife (Abitur)",
    icon: GraduationCap,
  },
  {
    slug: "fachoberschule",
    kuerzel: "FOS",
    name: "Fachoberschule",
    form: "Vollzeit",
    beschreibung:
      "Studienqualifizierender Bildungsgang mit der Möglichkeit des Erwerbs der Allgemeinen Fachhochschulreife, kombiniert mit beruflicher Grundbildung.",
    abschluss: "Allgemeine Fachhochschulreife",
    icon: School,
  },
  {
    slug: "berufsfachschule",
    kuerzel: "BFS",
    name: "Berufsfachschule",
    form: "Vollzeit",
    beschreibung:
      "Ermöglicht den Erwerb eines Mittleren Bildungsabschlusses parallel zur beruflichen Grundbildung.",
    abschluss: "Mittlerer Bildungsabschluss",
    icon: BookOpen,
  },
  {
    slug: "berufsschule",
    kuerzel: "BS",
    name: "Berufsschule",
    form: "Teilzeit",
    beschreibung:
      "Schulform, die im Rahmen der dualen Berufsausbildung besucht wird. Absolventinnen und Absolventen können einen Hauptschulabschluss oder Mittleren Bildungsabschluss erwerben.",
    abschluss: "Berufsabschluss im dualen System",
    icon: Briefcase,
  },
  {
    slug: "fachschule-technik",
    kuerzel: "FST",
    name: "Fachschule für Technik",
    form: "Teilzeit",
    beschreibung:
      "Schulform im Rahmen der beruflichen Weiterbildung mit der Möglichkeit des Erwerbs eines Abschlusses als Staatlich geprüfte:r Techniker:in.",
    abschluss: "Staatlich geprüfte:r Techniker:in",
    icon: Wrench,
  },
]

export const weitereAngebote = [
  { name: "Moodle", beschreibung: "Digitale Lernplattform der Schule" },
  { name: "Übungsfirmen", beschreibung: "Praxisnahes Lernen in simulierten Unternehmen" },
  { name: "ICDL", beschreibung: "International anerkanntes Zertifikat für digitale Kompetenzen" },
  { name: "QuABB", beschreibung: "Qualifizierte Ausbildungsbegleitung in Betrieb und Berufsschule" },
  { name: "UBUS", beschreibung: "Unterrichtsbegleitende Unterstützung durch sozialpädagogische Fachkräfte" },
]
