export interface Angebot {
  slug: string
  name: string
  untertitel: string
  absaetze: string[]
  liste?: { titel: string; punkte: string[] }
  kontakt?: { name: string; rolle?: string; details: string[] }
  links?: { label: string; url: string }[]
  bild?: { src: string; alt: string }
}

export const angebote: Angebot[] = [
  {
    slug: "moodle",
    name: "Moodle",
    untertitel: "Digitale Lernplattform der Schule",
    absaetze: [
      "Moodle ist eine modulare, objektorientierte, dynamische Lernumgebung – ein Lern-Management-System, das den Präsenzunterricht ergänzt.",
      "Die Plattform wurde ab 2009 aufgebaut und ging 2010 online. Schülerinnen und Schüler greifen darüber auf kursgebundene Informationen zu, die orts- und zeitunabhängig zur Verfügung stehen. Kommunikationsfunktionen wie Chat sind integriert.",
    ],
    links: [{ label: "Zur Moodle-Plattform", url: "https://mo9703.schule.hessen.de" }],
  },
  {
    slug: "icdl",
    name: "ICDL",
    untertitel: "International Certification of Digital Literacy",
    absaetze: [
      "Die Beruflichen Schulen Bebra sind seit 2011 offizielles Testzentrum für den ICDL. Schülerinnen und Schüler können hier ihre IT-Kompetenzen zertifizieren lassen.",
    ],
    liste: {
      titel: "Module des ICDL Workforce Base",
      punkte: [
        "Computer- und Online Essentials",
        "Textverarbeitung (Word)",
        "Tabellenkalkulation (Excel)",
        "Präsentationen (PowerPoint)",
      ],
    },
    kontakt: {
      name: "Regina Röse",
      rolle: "Session-Managerin",
      details: ["Telefon: 06622 43082-0"],
    },
    bild: {
      src: "/media/angebote/icdl-workforce.jpg",
      alt: "Übersichtsgrafik der Module des ICDL Workforce",
    },
  },
  {
    slug: "quabb",
    name: "QuABB",
    untertitel: "Qualifizierte Ausbildungsbegleitung in Betrieb und Berufsschule",
    absaetze: [
      "QuABB unterstützt Auszubildende bei Problemen im Betrieb, bei Schwierigkeiten in der Berufsschule und bei persönlichen Herausforderungen. Die Beratung ist vertraulich und kostenfrei.",
      "QuABB wird gefördert durch die Europäische Union, hessische Ministerien und den Landkreis Hersfeld-Rotenburg. Umgesetzt wird das Angebot seit dem 1. Juli 2022 durch das Bildungswerk der nordhessischen Wirtschaft.",
    ],
    kontakt: {
      name: "Thomas Sackmann",
      rolle: "Systemischer Coach, QuABB-Ausbildungsbegleiter",
      details: [
        "Mobil: 0152 31971881",
        "Sprechzeiten: Montag und Mittwoch, 9:00–11:00 Uhr",
        "Raum 3.1.01, Berufliche Schulen Bebra",
        "Termine nach Vereinbarung",
        "Weitere Niederlassung: BWNW Bad Hersfeld, Landecker Str. 13, 36251 Bad Hersfeld",
      ],
    },
    links: [{ label: "quabb-hessen.de", url: "https://www.quabb-hessen.de" }],
  },
  {
    slug: "ubus",
    name: "UBUS",
    untertitel: "Unterrichtsbegleitende Unterstützung durch sozialpädagogische Fachkräfte",
    absaetze: ["Alle Gespräche sind vertraulich."],
    liste: {
      titel: "Angebot",
      punkte: [
        "Beratung von Schülerinnen und Schülern im schulischen Alltag bei Fragen und Problemen",
        "Begleitung in schwierigen Situationen",
        "Vermittlung bei Konflikten",
        "Unterstützung von Lehrkräften und Lehrkräfteteams",
        "Koordinierung und Vernetzung mit Kooperationspartnern",
        "Angebote zur individuellen Förderung",
      ],
    },
    kontakt: {
      name: "Sonja Strache",
      rolle: "Diplom-Sozialpädagogin",
      details: [
        "Dienstag und Donnerstag, 7:30–15:30 Uhr sowie nach Vereinbarung",
        "Raum 3.1.01",
        "ubus@bs-bebra.de",
      ],
    },
  },
  {
    slug: "uebungsfirmen",
    name: "Übungsfirmen",
    untertitel: "Praxisnahes Lernen in simulierten Unternehmen",
    absaetze: [
      "Übungsfirmen sind virtuelle Unternehmen für die kaufmännische Aus- und Weiterbildung. Sie arbeiten wie echte Firmen – allerdings ohne physische Waren und ohne Bargeld.",
      "Das Lernbüro bietet 25 Arbeitsplätze, die den Bereichen Einkauf, Lagerhaltung, Verkauf, Werbung, Personalwesen und Rechnungswesen zugeordnet sind.",
      "Die Automobil-Handels-GmbH (AHG) besteht seit 1963, hinzu kommt die Bebraer Handelskontor GmbH (BEB). Beide sind Mitglied im Deutschen Übungsfirmenring mit rund 600 Mitgliedern und agieren in einem internationalen Netzwerk von über 7.000 Firmen.",
    ],
    links: [
      { label: "Automobil-Handels-GmbH (AHG)", url: "http://www.ahg.bs-bebra.de/" },
      { label: "Bebraer Handelskontor GmbH (BEB)", url: "https://6459e942ad0b3.site123.me" },
      { label: "Deutscher Übungsfirmenring", url: "http://www.die-zentralstelle.de/" },
    ],
  },
]
