export const schulinfo = {
  name: "Berufliche Schulen Bebra",
  strasse: "Auestraße 30",
  ort: "36179 Bebra",
  telefon: "06622 - 43082-0",
  fax: "06622 - 43082-288",
  email: "info@bs-bebra.de",
  notfallSchulleitung: "0171 8327465",
} as const

export interface Person {
  name: string
  rolle: string
  seit?: string
  faecher?: string
  foto?: string
}

export const schulleitung: Person[] = [
  {
    name: "Ivonne Buchenau",
    rolle: "Schulleiterin",
    seit: "seit August 2017",
    faecher: "Mathematik, Chemie, Informationstechnik",
    foto: "/media/team/buchenau.png",
  },
  {
    name: "Bianca Feyerabend",
    rolle: "Stellvertretende Schulleiterin",
    seit: "seit August 2017, an der Schule seit 2004",
    faecher: "Elektrotechnik, Politik",
    foto: "/media/team/feyerabend.png",
  },
  {
    name: "Dieter Rössler",
    rolle: "Abteilungsleiter II",
    seit: "seit 2018, an der Schule seit 1994",
    faecher: "Bautechnik, Religion",
    foto: "/media/team/roessler.png",
  },
  {
    name: "Roberto Weyh",
    rolle: "Abteilungsleiter IV",
    seit: "seit Februar 2018, an der Schule seit 2000",
    faecher: "Wirtschaft und Verwaltung, Informationstechnik, Spanisch",
    foto: "/media/team/weyh.png",
  },
  {
    name: "Klaus Weger",
    rolle: "Technischer Lehrerkoordinator",
    seit: "seit 2014",
    faecher: "Holztechnik",
    foto: "/media/team/weger.png",
  },
]

export const sekretariat: Person[] = [
  { name: "Carola Bolz", rolle: "Schulsekretariat", foto: "/media/team/bolz.png" },
  { name: "Pia Weber", rolle: "Schulsekretariat", foto: "/media/team/weber.png" },
  { name: "Elisa Köhler", rolle: "Schulsekretariat", foto: "/media/team/koehler.png" },
]

export const hausmeister: Person[] = [
  { name: "Dirk Meise", rolle: "Hausmeister", foto: "/media/team/meise.png" },
  { name: "Dirk Diehl", rolle: "Hausmeister", foto: "/media/team/diehl.png" },
]

export const verwaltung = {
  ort: "Die Verwaltung finden Sie im Gebäude 1 im Erdgeschoss, Raum 1.0.07.",
  oeffnungszeiten: [
    "Donnerstag: 7:00 – 15:00 Uhr",
    "Freitag: 7:00 – 12:00 Uhr",
  ],
  hinweis:
    "Das Sekretariat ist außerdem in den Pausen und nach Unterrichtsschluss erreichbar.",
} as const

export const gruesswort = {
  anrede:
    "Liebe Schülerinnen und Schüler, sehr geehrte Eltern, verehrte Besucherinnen und Besucher unserer Internetseite,",
  absaetze: [
    "seit Sommer 2017 leite ich die Beruflichen Schulen Bebra – eine Schule mit über 125-jähriger Geschichte in der beruflichen Bildungslandschaft Nordhessens. Wir bieten ein breites Spektrum an Berufsfeldern mit hoher Qualität an und begleiten junge Menschen auf ihrem Weg in Ausbildung, Studium und Beruf.",
    "Meine Motivation lässt sich mit dem Wort SCHULE zusammenfassen: Wir wollen Schülerinnen und Schülern vielfältige Chancen bieten, individuelle Herausforderungen anzunehmen, Unterrichtsangebote in konstruktiver, kreativer und motivierender Lernatmosphäre mitzugestalten und ihre individuellen Ergebnisse bestmöglich zu erreichen.",
  ],
  unterschrift: "OStD'in Ivonne Buchenau, Schulleiterin",
} as const

export const geschichte = [
  {
    zeitraum: "1890 – Gründung",
    text: "Die Berufliche Schule Bebra wurde am 14. Januar 1890 als erste Fortbildungsschule im damaligen Kreis Rotenburg gegründet – auf Grundlage der Gewerbeordnung von 1861 und eines preußischen Erlasses von 1876. Der Unterricht fand zunächst an Abenden und Sonntagen statt, mit anfangs nur 19 Schülern.",
  },
  {
    zeitraum: "Frühes 20. Jahrhundert",
    text: "Die Schülerzahlen wuchsen kontinuierlich: 1898 auf 50, 1906 auf 84 Schüler. Nach einer Unterbrechung durch den Ersten Weltkrieg wurde der Unterricht 1919 wiederaufgenommen. 1923 führte Preußen amtlich die Bezeichnung „Berufsschule“ ein.",
  },
  {
    zeitraum: "1939 – Neubau Kasseler Straße",
    text: "Mit der Einweihung eines neuen Schulgebäudes in der Kasseler Straße mit zehn Klassenräumen wurde ein wichtiger Meilenstein erreicht. Die Schülerzahl war zu diesem Zeitpunkt bereits auf 1.140 gestiegen (1933: 433).",
  },
  {
    zeitraum: "Nachkriegszeit bis 1976",
    text: "Nach 1946 wuchs die Schule weiter: 1952 unterrichteten 75 Klassen 2.163 Jugendliche. 1962 entstand ein Neubau am heutigen Standort an der Auestraße/Hersfelder Straße, 1974 folgten neue Werkstattgebäude und 1976 ein kaufmännischer Trakt.",
  },
  {
    zeitraum: "21. Jahrhundert",
    text: "2011 wurde ein neues Gebäude für das Berufliche Gymnasium mit eigener Aula eröffnet, 2013 eine neue Cafeteria in Betrieb genommen. 2015 konnte die Schule auf 125 Jahre Geschichte zurückblicken.",
  },
] as const

export const foerderverein = {
  gruendung: "1. Juli 1996",
  text: "Der Förderverein wurde 1996 mit 29 Mitgliedern gegründet und zählte 2015 bereits 90 Mitglieder – darunter Unternehmen und Handwerksbetriebe aus dem Landkreis, die Stadt Bebra, Handwerkerverbände, Vereine, Lehrkräfte und Privatpersonen. Ziel ist es, die Zusammenarbeit zwischen allen an der Berufsbildung beteiligten Stellen zu stärken und die schulische Ausstattung durch finanzielle und sachliche Mittel zu verbessern. Seit der Gründung hat der Verein rund 180.000 Euro bereitgestellt, unter anderem für eine Solaranlage, die Sanierung des Solarhauses sowie jährliche Auszeichnungen für die besten Absolventinnen und Absolventen.",
  vorsitzender: "Herbert Heisterkamp (1. Vorsitzender)",
  email: "herbert_heisterkamp@gmx.de",
  homepage: "fv.bs-bebra.de",
} as const

export const kooperationen = [
  {
    kategorie: "Allgemeinbildende Schulen",
    partner: [
      "Brüder-Grimm-Gesamtschule Bebra – langjährige Partnerschaft zur Heranführung junger Menschen an die Berufs- und Arbeitswelt",
      "Blumensteinschule Obersuhl – seit 2010 kooperativ verbunden, u. a. fachpraktischer Unterricht in Mechatronik, Bürotechnik, Holztechnik sowie Ernährung und Körperpflege",
      "Grundschulen in Bebra – MINT-Initiative, u. a. Solar-Boot-Rennen",
    ],
  },
  {
    kategorie: "Hochschulen",
    partner: [
      "Universität Kassel (seit 2008)",
      "Technische Hochschule Mittelhessen Gießen (seit 2011)",
      "Hochschule RheinMain Wiesbaden (seit 2012)",
    ],
  },
  {
    kategorie: "Wirtschaftspartner",
    partner: ["Hessen Mobil", "AOK"],
  },
] as const

export const anreise = {
  oeffentlich:
    "Die Schule ist mit öffentlichen Verkehrsmitteln gut zu erreichen – der Bahnhof Bebra liegt ca. 8 Minuten Fußweg entfernt.",
  auto:
    "Mit dem Pkw ist die Schule über die Auestraße erreichbar, im Kreuzungsbereich mit der Hersfelder Straße (K 72). Auf dem Schulgelände stehen begrenzte Stellplätze zur Verfügung.",
  parken:
    "Zusätzliche kostenlose Parkplätze gibt es auf dem Mehrzweckplatz (ca. 8 Gehminuten entfernt), erreichbar über die Rathausstraße und die Straße „Bei der Laubpfütze“.",
} as const

export const traeger = {
  schultraeger: "Landkreis Hersfeld-Rotenburg",
  aufsichtsbehoerde:
    "Staatliches Schulamt für den Landkreis Hersfeld-Rotenburg und den Werra-Meißner-Kreis",
} as const

export const auszeichnungen = [
  {
    slug: "gesundheitsfoerdernde-schule",
    name: "Gesundheitsfördernde Schule",
    jahr: "2011",
    absaetze: [
      "Am 7. Februar 2011 erhielten die Beruflichen Schulen Bebra von Kultusministerin Dorothea Henzler das Gesamtzertifikat „Gesundheitsfördernde Schule“ – als damals erst zweite berufliche Schule in Hessen.",
      "Seit 2003 läuft das Projekt „Rückenschule“ mit klassenübergreifenden Maßnahmen. Alle zwei Jahre findet seit 2009 ein Gesundheitstag mit über 25 Stationen statt. Befragungen ergaben, dass sich 84 Prozent der Schülerinnen und Schüler in der Schule wohlfühlen und 94 Prozent der Lehrkräfte gerne in die Schule kommen.",
    ],
    teilzertifikate: [
      { name: "Bewegung und Wahrnehmung", jahr: "2007" },
      { name: "Ernährungs- und Verbraucherbildung", jahr: "2008" },
      { name: "Verkehrserziehung und Mobilitätsbildung", jahr: "2008" },
      { name: "Sucht- und Gewaltprävention", jahr: "2009" },
    ],
    dokument: {
      titel: "Gesamtzertifikat (PDF)",
      datei: "/dokumente/zertifikat-gesundheitsfoerdernde-schule.pdf",
    },
    link: { label: "Schule und Gesundheit Hessen", url: "https://www.schuleundgesundheit.hessen.de/" },
  },
  {
    slug: "mint-freundliche-schule",
    name: "MINT-freundliche Schule",
    jahr: "2012 und 2015",
    absaetze: [
      "Die Beruflichen Schulen Bebra gehören zum Netzwerk der MINT-freundlichen Schulen, die sich der Förderung von Mathematik, Informatik, Naturwissenschaften und Technik verschrieben haben.",
      "Am 20. September 2012 erfolgte in Darmstadt die erste Auszeichnung – als eine von elf Schulen in Hessen. Am 14. Oktober 2015 folgte in Dreieich die zweite Auszeichnung für weitere drei Jahre.",
      "Die Initiative „MINT – Zukunft schaffen“ wurde 2008 gegründet und adressiert den Mangel an Nachwuchs in den MINT-Qualifikationen.",
    ],
    ansprechpartner: "Karin Allmeroth (Abteilungsleiterin), unterstützt von Bianca Feyerabend und Alexander Betjen",
  },
  {
    slug: "umwelt-schule",
    name: "Umweltschule",
    jahr: "seit den 1980er Jahren",
    absaetze: [
      "Die Schule verfolgt seit den 1980er Jahren Projekte zu regenerativen Energien und integriert Nachhaltigkeit systematisch in den Unterricht.",
      "Seit 2002 gibt es das Solarhaus – ein Schulgebäude mit 2 kWp Photovoltaikanlagen, das projektbasiert von Schülerinnen und Schülern verschiedener Berufsfelder geplant und gebaut wurde. Ab 2008 kam LumiSol hinzu, eine vierstündige verpflichtende Unterrichtseinheit für alle Schülerinnen und Schüler, die Grundlagen der Photovoltaik an Stationen vermittelt – einschließlich „Energie erfahren“ am Ergometer.",
      "Weitere Maßnahmen: ein 300-W-Windrad auf dem Schuldach (2010), der Umbau des Solarzentrums (2013/14), Teilnahmen am Hessen SolarCup mit ferngelenkten Solarfahrzeugen sowie Sonnenbootregatten für Grundschülerinnen und Grundschüler.",
    ],
  },
] as const

export const unterrichtszeiten = {
  regulaer: [
    { stunde: "1. Stunde", zeit: "7:30 – 8:15 Uhr" },
    { stunde: "2. Stunde", zeit: "8:15 – 9:00 Uhr" },
    { stunde: "Pause", zeit: "9:00 – 9:15 Uhr", pause: true },
    { stunde: "3. Stunde", zeit: "9:15 – 10:00 Uhr" },
    { stunde: "4. Stunde", zeit: "10:00 – 10:45 Uhr" },
    { stunde: "Pause", zeit: "10:45 – 11:00 Uhr", pause: true },
    { stunde: "5. Stunde", zeit: "11:00 – 11:45 Uhr" },
    { stunde: "6. Stunde", zeit: "11:45 – 12:30 Uhr" },
    { stunde: "Pause", zeit: "12:30 – 12:45 Uhr", pause: true },
    { stunde: "7. Stunde", zeit: "12:45 – 13:30 Uhr" },
    { stunde: "8. Stunde", zeit: "13:30 – 14:15 Uhr" },
    { stunde: "Pause", zeit: "14:15 – 14:30 Uhr", pause: true },
    { stunde: "9. Stunde", zeit: "14:30 – 15:15 Uhr" },
    { stunde: "10. Stunde", zeit: "15:15 – 16:00 Uhr" },
  ],
  fachschule: [
    { stunde: "1. Stunde", zeit: "17:30 – 18:15 Uhr" },
    { stunde: "2. Stunde", zeit: "18:15 – 19:00 Uhr" },
    { stunde: "Pause", zeit: "19:00 – 19:15 Uhr", pause: true },
    { stunde: "3. Stunde", zeit: "19:15 – 20:00 Uhr" },
    { stunde: "4. Stunde", zeit: "20:00 – 20:45 Uhr" },
  ],
} as const

export const gebaeude = [
  {
    nummer: "Gebäude 1",
    name: "Hauptgebäude",
    beschreibung: "Verwaltung und Schulleitung im Erdgeschoss.",
  },
  {
    nummer: "Gebäude 2",
    name: "Kaufmännischer Trakt",
    beschreibung: "Räume für Naturwissenschaften, Übungsfirmen und EDV-Ausstattung.",
  },
  {
    nummer: "Gebäude 3",
    name: "Nebengebäude",
    beschreibung: "Räumlichkeiten für Gestaltung, Küchen und Friseure.",
  },
  {
    nummer: "Gebäude 4",
    name: "Berufliches Gymnasium",
    beschreibung: "Neubau für das Berufliche Gymnasium mit Aula im Erdgeschoss.",
  },
  {
    nummer: "Gebäude 5",
    name: "Werkstatt-Trakt",
    beschreibung: "Holz-, Maler- und Metallbereiche sowie Elektro- und Fahrzeugtechnik.",
  },
] as const
