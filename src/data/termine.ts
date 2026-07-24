export interface Termin {
  datum: string
  titel: string
  beschreibung?: string
}

export const termine: Termin[] = [
  {
    datum: "2026-08-10",
    titel: "Einschulung – alle Schulformen",
    beschreibung:
      "Einschulungstermine für die verschiedenen Schulformen. Details folgen. (TODO: genaue Uhrzeiten/Räume von der Altseite übernehmen)",
  },
]
