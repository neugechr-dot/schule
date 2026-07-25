import {
  GraduationCap,
  School,
  BookOpen,
  Wrench,
  Briefcase,
  type LucideIcon,
} from "lucide-react"

export interface Dokument {
  titel: string
  datei: string
}

export interface Abschnitt {
  titel: string
  absaetze?: string[]
  liste?: string[]
}

export interface Infovideo {
  titel: string
  beschreibung: string
  datei: string
  poster: string
}

export interface Bildungsgang {
  slug: string
  kuerzel: string
  name: string
  form: "Vollzeit" | "Teilzeit"
  beschreibung: string
  abschluss: string
  dauer: string
  icon: LucideIcon
  schwerpunkte?: { name: string; text: string }[]
  videos?: Infovideo[]
  abschnitte: Abschnitt[]
  dokumente: Dokument[]
}

export const fosAufnahme = {
  gemeinsam: [
    "Mittlerer Abschluss – zum Beispiel an einer Gesamtschule, Realschule oder Berufsfachschule – mit in Deutsch, Englisch und Mathematik mindestens zweimal der Note 3 und einmal der Note 4",
    "oder die Versetzung in die Einführungsphase der gymnasialen Oberstufe",
  ],
  formen: [
    {
      name: "Organisationsform A",
      klassen: "Klassen 11 und 12",
      voraussetzungen: [
        "Eignungsfeststellung der abgebenden Schule",
        "Bescheinigung über die Schullaufbahnberatung oder Berufsberatung",
        "Zusage über die fachpraktische Ausbildung (Praktikumsplatz)",
      ],
    },
    {
      name: "Organisationsform B",
      klassen: "Klasse 12",
      voraussetzungen: [
        "Nachweis einer Abschlussprüfung in einem anerkannten Ausbildungsberuf, der dem gewählten Schwerpunkt entspricht",
      ],
      hinweis:
        "Nicht hinreichende Noten können durch ein Abschlusszeugnis der Berufsschule mit einer Gesamtnote von 3,0 ersetzt werden.",
    },
  ],
  frist: "Der Antrag auf Aufnahme muss bis spätestens 31. März vorliegen.",
} as const

export const bildungsgaenge: Bildungsgang[] = [
  {
    slug: "berufliches-gymnasium",
    kuerzel: "BG",
    name: "Berufliches Gymnasium",
    form: "Vollzeit",
    beschreibung:
      "Studienqualifizierender Bildungsgang mit der Möglichkeit des Erwerbs der Allgemeinen Hochschulreife (Abitur) und beruflicher Grundbildung.",
    abschluss: "Allgemeine Hochschulreife (Abitur)",
    dauer: "3 Jahre (Klassen 11 bis 13)",
    icon: GraduationCap,
    schwerpunkte: [
      {
        name: "Gestaltungs- und Medientechnik",
        text: "Über drei Jahre zehn Wochenstunden im Schwerpunktfach – mit Drucktechnik, Film-, Foto- und Audiotechnik sowie Medienkunde und digitaler Bildbearbeitung.",
      },
      {
        name: "Mechatronik",
        text: "Zehn Wochenstunden mit Antriebstechnik, Automatisierungstechnik, Werkstoffkunde, Technischem Zeichnen, elektrischer Messtechnik und Robotik.",
      },
      {
        name: "Wirtschaft",
        text: "Wirtschaftswissenschaftliche Grundbildung in allgemeiner Wirtschaftslehre, Finanzwirtschaft, Rechnungswesen und wirtschaftsbezogener Datenverarbeitung.",
      },
    ],
    videos: [
      {
        titel: "Überblick",
        beschreibung:
          "Einführung in das Berufliche Gymnasium und die Unterschiede zwischen den Schwerpunkten.",
        datei: "/media/videos/bg-ueberblick.mp4",
        poster: "/media/videos/bg-ueberblick-poster.jpg",
      },
      {
        titel: "Schwerpunkt Gestaltungs- und Medientechnik",
        beschreibung:
          "Einblick in den Schwerpunkt Gestaltungs- und Medientechnik.",
        datei: "/media/videos/bg-gestaltungs-und-medientechnik.mp4",
        poster: "/media/videos/bg-gestaltungs-und-medientechnik-poster.jpg",
      },
      {
        titel: "Schwerpunkt Mechatronik",
        beschreibung: "Einblick in den Schwerpunkt Mechatronik.",
        datei: "/media/videos/bg-mechatronik.mp4",
        poster: "/media/videos/bg-mechatronik-poster.jpg",
      },
      {
        titel: "Schwerpunkt Wirtschaft",
        beschreibung: "Einblick in den Schwerpunkt Wirtschaft.",
        datei: "/media/videos/bg-wirtschaft.mp4",
        poster: "/media/videos/bg-wirtschaft-poster.jpg",
      },
    ],
    abschnitte: [
      {
        titel: "Ziel",
        absaetze: [
          "Das Berufliche Gymnasium führt zur allgemeinen Hochschulreife. Das dort erworbene Abitur unterscheidet sich nicht vom Abitur eines allgemeinbildenden Gymnasiums und berechtigt bei entsprechender Gesamtnote zum Studium aller Fachrichtungen.",
        ],
      },
      {
        titel: "Aufbau",
        absaetze: [
          "Die Einführungsphase (Klasse 11) wird ein Schuljahr lang im Klassenverband entsprechend der gewählten Fachrichtung unterrichtet und führt die Lernenden auf ein einheitliches Leistungsniveau.",
          "In der Qualifikationsphase (Klassen 12 und 13) folgen vier Halbjahre Q1 bis Q4. Die Anmeldung zur Abiturprüfung erfolgt am Ende von Q3, die schriftlichen Abiturarbeiten werden in Q4 geschrieben, die mündlichen Prüfungen schließen sich an.",
        ],
      },
      {
        titel: "Aufnahmevoraussetzungen",
        liste: [
          "Versetzung in die gymnasiale Oberstufe",
          "Qualifizierender Realschulabschluss",
          "Mittlerer Bildungsabschluss mit Empfehlung der Klassenkonferenz und einer Durchschnittsnote besser als 3 in Deutsch, Mathematik, erster Fremdsprache und einer Naturwissenschaft",
        ],
      },
      {
        titel: "Rechtsgrundlage",
        absaetze: [
          "Oberstufen- und Abiturverordnung (OAVO) vom 20. Juli 2009, zuletzt geändert durch Verordnung vom 4. April 2013.",
        ],
      },
    ],
    dokumente: [
      { titel: "Anmeldeformular BG", datei: "/dokumente/anmeldung-bg.pdf" },
      { titel: "Gutachten der abgebenden Schule", datei: "/dokumente/gutachten-bg.pdf" },
      { titel: "Schülerstammblatt Vollzeit", datei: "/dokumente/schuelerstammblatt-vollzeit.pdf" },
      { titel: "Flyer Berufliches Gymnasium", datei: "/dokumente/flyer-bg.pdf" },
    ],
  },
  {
    slug: "fachoberschule",
    kuerzel: "FOS",
    name: "Fachoberschule",
    form: "Vollzeit",
    beschreibung:
      "Studienqualifizierender Bildungsgang mit der Möglichkeit des Erwerbs der Allgemeinen Fachhochschulreife, kombiniert mit beruflicher Grundbildung.",
    abschluss: "Allgemeine Fachhochschulreife",
    dauer: "2 Jahre (Form A) oder 1 Jahr (Form B)",
    icon: School,
    schwerpunkte: [
      {
        name: "Technik",
        text: "Metalltechnik und Elektrotechnik – an den Beruflichen Schulen Bebra seit 1971.",
      },
      {
        name: "Bautechnik",
        text: "Einziges Angebot dieser Fachrichtung im Landkreis Hersfeld-Rotenburg.",
      },
      {
        name: "Wirtschaft",
        text: "Wirtschaft und Verwaltung sowie Wirtschaftsinformatik – seit 1979 im Angebot.",
      },
      {
        name: "Gestaltung",
        text: "Seit 2003 an der Schule. Zusätzlich zur Bewerbung ist ein Nachweis der gestalterischen Befähigung erforderlich; im Februar finden dazu Informationsveranstaltungen statt.",
      },
    ],
    videos: [
      {
        titel: "Info-Film",
        beschreibung: "Die Fachoberschule an den Beruflichen Schulen Bebra im Überblick.",
        datei: "/media/videos/fos-infofilm.mp4",
        poster: "/media/videos/fos-infofilm-poster.png",
      },
    ],
    abschnitte: [
      {
        titel: "Ziel",
        absaetze: [
          "Die Fachoberschule vermittelt Kenntnisse, Fertigkeiten und Methoden, die auf ein Studium vorbereiten. Mit der Fachhochschulreife steht der Zugang zu Fachhochschulen und – je nach Bundesland und Studiengang – auch zu Universitäten offen.",
        ],
      },
      {
        titel: "Organisationsformen",
        liste: [
          "Form A (zweijährig): In Klasse 11 findet an drei Tagen pro Woche ein gelenktes Praktikum im Betrieb statt, an zwei Tagen Unterricht. Klasse 12 wird vollzeitschulisch unterrichtet.",
          "Form B (einjährig): Nur Klasse 12 im Vollzeitunterricht – Voraussetzung ist eine abgeschlossene Berufsausbildung.",
        ],
      },
      {
        titel: "Praktikum in Form A",
        absaetze: [
          "Mit der Suche eines Platzes für das Praktikum sollte möglichst frühzeitig begonnen werden – empfohlen wird der Zeitraum Januar bis März. Anmeldeschluss ist der 31. März.",
        ],
      },
      {
        titel: "Wichtiger Hinweis zur Aufnahme",
        absaetze: [
          "Entscheidend für die Aufnahme ist nicht das Halbjahreszeugnis, mit dem Sie sich bewerben – maßgebend sind die Noten des Abschlusszeugnisses.",
        ],
      },
      {
        titel: "Erforderliche Unterlagen",
        liste: [
          "Anmeldeformular",
          "Gutachten der bisherigen Schule",
          "Eignungsfeststellung (für Form A, Klasse 11)",
          "Schülerstammblatt Vollzeit",
          "Lebenslauf",
        ],
      },
    ],
    dokumente: [
      { titel: "Anmeldeformular FOS", datei: "/dokumente/anmeldung-fos.pdf" },
      { titel: "Gutachten der abgebenden Schule", datei: "/dokumente/gutachten-fos.pdf" },
      { titel: "Schülerstammblatt Vollzeit", datei: "/dokumente/schuelerstammblatt-vollzeit.pdf" },
      { titel: "Praktikantenvertrag", datei: "/dokumente/fos-praktikantenvertrag.pdf" },
      { titel: "Urlaubsregelung im Praktikum", datei: "/dokumente/fos-praktikumstage.pdf" },
      { titel: "Flyer FOS Technik", datei: "/dokumente/flyer-fos-technik.pdf" },
      { titel: "Flyer FOS Wirtschaft", datei: "/dokumente/flyer-fos-wirtschaft.pdf" },
      { titel: "Flyer FOS Gestaltung", datei: "/dokumente/flyer-fos-gestaltung.pdf" },
    ],
  },
  {
    slug: "berufsfachschule",
    kuerzel: "BFS",
    name: "Berufsfachschule",
    form: "Vollzeit",
    beschreibung:
      "Ermöglicht den Erwerb eines Mittleren Bildungsabschlusses parallel zur beruflichen Grundbildung.",
    abschluss: "Mittlerer Bildungsabschluss",
    dauer: "2 Jahre",
    icon: BookOpen,
    schwerpunkte: [
      {
        name: "Wirtschaft",
        text: "Ernährung, Gastronomie und Hauswirtschaft sowie Wirtschaft und Verwaltung.",
      },
      { name: "Technik", text: "Schwerpunkt Mechatronik." },
    ],
    abschnitte: [
      {
        titel: "Ziel",
        absaetze: [
          "Die Berufsfachschule vermittelt eine breit angelegte fachrichtungsbezogene Grundbildung, die auf eine berufliche Ausbildung vorbereitet, und ermöglicht zugleich den Erwerb eines mittleren Schulabschlusses.",
          "Der zweijährige Bildungsgang schließt mit einem dem mittleren Schulabschluss gleichwertigen Zeugnis ab. Der Besuch kann auf eine anschließende Berufsausbildung angerechnet werden.",
        ],
      },
      {
        titel: "Aufnahmevoraussetzungen",
        absaetze: [
          "Erforderlich ist ein qualifizierender Hauptschulabschluss – alternativ ein Hauptschulabschluss mit bestimmten Notenbedingungen in Deutsch, Mathematik und Englisch.",
        ],
      },
      {
        titel: "Anmeldung",
        absaetze: [
          "Die Unterlagen (Anmeldeformular, Gutachten der abgebenden Schule und Lebenslauf) müssen bis zum 30. April eingereicht werden.",
        ],
      },
    ],
    dokumente: [
      { titel: "Anmeldeformular BFS", datei: "/dokumente/anmeldung-bfs.pdf" },
      { titel: "Gutachten der abgebenden Schule", datei: "/dokumente/gutachten-bfs.pdf" },
      { titel: "Schülerstammblatt Vollzeit", datei: "/dokumente/schuelerstammblatt-vollzeit.pdf" },
      { titel: "Flyer Berufsfachschule", datei: "/dokumente/flyer-bfs.pdf" },
    ],
  },
  {
    slug: "berufsschule",
    kuerzel: "BS",
    name: "Berufsschule",
    form: "Teilzeit",
    beschreibung:
      "Schulform, die im Rahmen der dualen Berufsausbildung besucht wird. Absolventinnen und Absolventen können einen Hauptschulabschluss oder Mittleren Bildungsabschluss erwerben.",
    abschluss: "Berufsabschluss im dualen System",
    dauer: "Ausbildungsbegleitend, je nach Beruf 2 bis 3,5 Jahre",
    icon: Briefcase,
    abschnitte: [
      {
        titel: "Auftrag",
        liste: [
          "Vermittlung einer beruflichen Grund- und Fachbildung",
          "Erweiterung der Allgemeinbildung",
          "Beitrag zur Orientierung in Beruf, Arbeitswelt und Gesellschaft",
        ],
      },
      {
        titel: "Abschlüsse",
        absaetze: [
          "Je nach Voraussetzungen kann ein Abschlusszeugnis erworben werden, das dem Hauptschulabschluss oder dem mittleren Abschluss entspricht. Theoretische Prüfungen werden mit der Abschlussprüfung verbunden.",
        ],
      },
      {
        titel: "Unterrichtsorganisation",
        liste: [
          "Teilzeitform: Ein Unterrichtstag pro Woche wechselt mit den Tagen im Ausbildungsbetrieb.",
          "Blockunterricht: Längere Schulphasen von einer oder mehreren Wochen wechseln mit Betriebsphasen ab.",
        ],
      },
      {
        titel: "Abteilung 1 – Metall-, Elektro- und Fahrzeugtechnik",
        liste: [
          "Industriemechaniker:in",
          "Mechatroniker:in",
          "Technische:r Produktdesigner:in",
          "Werkzeugmechaniker:in",
          "Kraftfahrzeugmechatroniker:in",
          "Baugeräteführer:in",
        ],
      },
      {
        titel: "Abteilung 2 – Bau-, Holz- und Farbtechnik",
        liste: [
          "Maurer:in",
          "Beton- und Stahlbetonbauer:in",
          "Tischler:in",
          "Maler:in und Lackierer:in",
          "Zimmerer / Zimmerin",
        ],
      },
      {
        titel: "Abteilung 3 – Agrarwirtschaft, Körperpflege und Ernährung",
        liste: ["Landwirt:in", "Friseur:in", "Schornsteinfeger:in"],
      },
      {
        titel: "Abteilung 4 – Wirtschaft und Verwaltung",
        liste: [
          "Kaufleute für Büromanagement",
          "Kaufleute im Einzelhandel",
          "Industriekaufleute",
          "Verkäufer:in",
          "Verwaltungsfachangestellte",
        ],
      },
      {
        titel: "Anmeldung",
        absaetze: [
          "Die Anmeldung erfolgt über den Ausbildungsbetrieb per Mail mit ausgefülltem Schülerstammblatt Teilzeit.",
        ],
      },
    ],
    dokumente: [
      { titel: "Schülerstammblatt Teilzeit", datei: "/dokumente/schuelerstammblatt-teilzeit.pdf" },
    ],
  },
  {
    slug: "fachschule-technik",
    kuerzel: "FST",
    name: "Fachschule für Technik",
    form: "Teilzeit",
    beschreibung:
      "Schulform im Rahmen der beruflichen Weiterbildung mit der Möglichkeit des Erwerbs eines Abschlusses als Staatlich geprüfte:r Techniker:in.",
    abschluss: "Staatlich geprüfte:r Techniker:in",
    dauer: "8 Semester (4 Jahre) berufsbegleitend",
    icon: Wrench,
    schwerpunkte: [
      {
        name: "Maschinentechnik, Schwerpunkt Allgemeiner Maschinenbau",
        text: "An den Beruflichen Schulen Bebra seit 1993, derzeit berufsbegleitend in Teilzeitform.",
      },
    ],
    abschnitte: [
      {
        titel: "Ziel",
        absaetze: [
          "Die Fachschule bildet Fachkräfte für mittlere Funktionsbereiche aus. Absolventinnen und Absolventen erwerben den Abschluss Staatlich geprüfte:r Techniker:in und arbeiten anschließend etwa in Entwicklung, Qualitätssicherung oder Automatisierung.",
          "Bei entsprechendem Bedarf können auch die Vollzeitform der Fachrichtung Maschinentechnik sowie die Fachrichtung Umweltschutztechnik mit Schwerpunkt auf nachhaltigen Energietechniken angeboten werden.",
        ],
      },
      {
        titel: "Unterrichtszeiten",
        liste: [
          "Dienstag und Donnerstag von 17:30 bis 20:45 Uhr",
          "Samstag von 7:30 bis 14:15 Uhr",
        ],
      },
      {
        titel: "Nächster Start",
        absaetze: ["Der nächste Durchgang beginnt im August 2027."],
      },
    ],
    dokumente: [
      { titel: "Anmeldeformular Fachschule", datei: "/dokumente/anmeldung-fachschule.pdf" },
      { titel: "Schülerstammblatt Teilzeit", datei: "/dokumente/schuelerstammblatt-teilzeit.pdf" },
    ],
  },
]

export const lehrplanFachschule =
  "https://kultus.hessen.de/sites/kultus.hessen.de/files/2021-07/lehrplan_maschinentechnik_maschinenbau_ausgabe_2020.pdf"
