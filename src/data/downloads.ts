export interface DownloadItem {
  titel: string
  datei: string
}

export interface DownloadGruppe {
  kategorie: string
  items: DownloadItem[]
}

export const downloads: DownloadGruppe[] = [
  {
    kategorie: "Berufliches Gymnasium (BG)",
    items: [
      { titel: "Anmeldeformular BG", datei: "/dokumente/anmeldung-bg.pdf" },
      { titel: "Gutachten BG", datei: "/dokumente/gutachten-bg.pdf" },
      { titel: "Schülerstammblatt Vollzeit", datei: "/dokumente/schuelerstammblatt-vollzeit.pdf" },
      { titel: "Flyer BG", datei: "/dokumente/flyer-bg.pdf" },
    ],
  },
  {
    kategorie: "Fachoberschule (FOS)",
    items: [
      { titel: "Anmeldeformular FOS", datei: "/dokumente/anmeldung-fos.pdf" },
      { titel: "Gutachten FOS", datei: "/dokumente/gutachten-fos.pdf" },
      { titel: "Schülerstammblatt Vollzeit", datei: "/dokumente/schuelerstammblatt-vollzeit.pdf" },
      { titel: "Praktikantenvertrag", datei: "/dokumente/fos-praktikantenvertrag.pdf" },
      { titel: "Urlaubsregelung im Praktikum", datei: "/dokumente/fos-praktikumstage.pdf" },
      { titel: "Flyer FOS Technik", datei: "/dokumente/flyer-fos-technik.pdf" },
      { titel: "Flyer FOS Wirtschaft", datei: "/dokumente/flyer-fos-wirtschaft.pdf" },
      { titel: "Flyer FOS Gestaltung", datei: "/dokumente/flyer-fos-gestaltung.pdf" },
    ],
  },
  {
    kategorie: "Berufsfachschule (BFS)",
    items: [
      { titel: "Anmeldeformular BFS", datei: "/dokumente/anmeldung-bfs.pdf" },
      { titel: "Gutachten BFS", datei: "/dokumente/gutachten-bfs.pdf" },
      { titel: "Schülerstammblatt Vollzeit", datei: "/dokumente/schuelerstammblatt-vollzeit.pdf" },
      { titel: "Flyer BFS", datei: "/dokumente/flyer-bfs.pdf" },
    ],
  },
  {
    kategorie: "Berufsschule",
    items: [
      { titel: "Schülerstammblatt Teilzeit", datei: "/dokumente/schuelerstammblatt-teilzeit.pdf" },
      { titel: "Erste Schultage 2026/2027", datei: "/dokumente/erste-schultage-2026-2027.pdf" },
    ],
  },
  {
    kategorie: "Fachschule für Technik",
    items: [
      { titel: "Anmeldeformular Fachschule", datei: "/dokumente/anmeldung-fachschule.pdf" },
      { titel: "Schülerstammblatt Teilzeit", datei: "/dokumente/schuelerstammblatt-teilzeit.pdf" },
    ],
  },
]

export interface Blockplan {
  titel: string
  datei: string
  stand: string
}

export const blockplaene: Blockplan[] = [
  { titel: "Bauklassen", datei: "/dokumente/blockplaene/BAU_2026_27c.pdf", stand: "19.05.2026" },
  { titel: "Baugeräteführer", datei: "/dokumente/blockplaene/BAGE_2026_27.pdf", stand: "23.02.2026" },
  {
    titel: "Land- und Baumaschinenmechatroniker",
    datei: "/dokumente/blockplaene/LBM_2026_27b.pdf",
    stand: "11.06.2026",
  },
  { titel: "Straßenwärter", datei: "/dokumente/blockplaene/STR_2026_27.pdf", stand: "26.02.2026" },
  {
    titel: "Fachkräfte für Straßen- und Verkehrstechnik",
    datei: "/dokumente/blockplaene/FSV_2026_27.pdf",
    stand: "26.02.2026",
  },
  { titel: "Schornsteinfeger", datei: "/dokumente/blockplaene/SCHO_2026_27.pdf", stand: "23.04.2026" },
  {
    titel: "Technische Systemplaner",
    datei: "/dokumente/blockplaene/TSP_2026_27.pdf",
    stand: "23.04.2026",
  },
  {
    titel: "Verwaltungsfachangestellte der Bundesverwaltung",
    datei: "/dokumente/blockplaene/VWBW_2026_27.pdf",
    stand: "28.01.2026",
  },
]

export const blockplaeneSchuljahr = "2026/2027"
