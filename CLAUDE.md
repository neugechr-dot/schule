# Schulwebsite bs-bebra.de – Relaunch

## Projektziel
Ablösung der bestehenden Website **bs-bebra.de** durch einen modernen, technisch
aktuellen Neubau. Die neue Seite soll denselben Informationsauftrag erfüllen
(Schule, Bildungsgänge, Aktuelles, Kontakt), dabei aber optisch und technisch
zeitgemäß sein: schnelle Ladezeiten, responsives Design, dezente aber
hochwertige Animationen.

Referenzprojekt für Look & Feel / Interaktionsmuster: [design.md.txt](design.md.txt)
(Hero mit Video-Hintergrund, gestaffelte Fade-up-Animationen, klare
Typografie). Das ist **nur eine Stil-/Interaktionsreferenz** (Farben,
Animationstiming, Aufbau) – Inhalte, Branding und Texte
dort sind fiktiv und werden nicht übernommen.

## Tech-Stack
- React + TypeScript + Vite
- Tailwind CSS
- `lucide-react` für Icons
- Google Fonts (Font noch offen, siehe TODO)
- Kein CMS/Backend geplant, sofern nicht anders entschieden – Inhalte werden
  als strukturierte Daten/Markdown/Komponenten im Repo gepflegt (TODO: final
  festlegen, siehe unten)

## Inhalte / Migration
**Ziel ist die vollständige Übernahme der Altseite bs-bebra.de – nicht nur der
Basisinhalte.** Alles, was auf der alten Seite steht, gehört ins neue Projekt:
Texte, Bilder, Dokumente, Listen, Untermenüs, Detailseiten. Die neue Seite soll
inhaltlich mindestens so vollständig sein wie die alte.

Vorgehen:
- Altseite systematisch durchgehen – **jeden** Menüpunkt und jede Unterseite,
  auch tiefe Ebenen (z. B. `Schule → Über Uns → Grußwort`) und Seiten, die nur
  aus Listen, Tabellen oder Downloads bestehen.
- Volltexte übernehmen, nicht nur Zusammenfassungen. Redaktionelles Glätten
  (Rechtschreibung, veraltete Formulierungen, Gendern) ist ok – Kürzen auf
  Stichpunkte ist es nicht, solange der Inhalt noch aktuell ist.
- Erkennbar veraltete Inhalte (abgelaufene Termine, tote Links, Verweise auf
  vergangene Schuljahre) nicht wegwerfen, sondern übernehmen und als
  TODO/„veraltet – prüfen" markieren, damit der Nutzer entscheiden kann.
- **Keine Fakten erfinden** (Namen, Kontaktdaten, Bildungsgänge, Termine,
  Zahlen). Was auf der Altseite fehlt oder unklar ist: als TODO markieren und
  beim Nutzer nachfragen statt zu raten. Inhalte aus externen Quellen (z. B.
  Kreis-/Schulamtsseiten) nur mit sichtbarem Freigabe-Hinweis ergänzen.
- **Bilder ebenfalls migrieren**: Fotos, Logos, Grafiken, Organigramme,
  Lagepläne von der Altseite herunterladen und nach `public/` übernehmen
  (sprechende Dateinamen). Für jedes Bild einen sinnvollen deutschen Alt-Text
  vergeben. Keine KI-generierten „Fantasie"-Fotos von echten Personen oder
  Gebäuden der Schule.
- **Dokumente migrieren**: PDFs und Downloads (Blockpläne, Formulare,
  Anmeldeunterlagen, Schulordnung) herunterladen und verlinkt bereitstellen,
  statt auf die Altseite zu verlinken.
- Längere Inhalte als strukturierte Daten in `src/data/` ablegen und in den
  Seiten rendern, statt Fließtext hart in JSX zu schreiben.
- Quellenpfad der Altseite bei größeren Migrationen im Commit oder als
  kurzer Kommentar festhalten, damit Nachvollziehbarkeit bleibt.

### Migrationsstand
Übernommen: Logo (Original als PNG inkl. Invers-Variante), Grußwort, Geschichte,
Auszeichnungen (Gesundheitsfördernde Schule, MINT, Umweltschule), Förderverein,
Kooperationen, Schulleitung, Sekretariat und Hausmeister inkl. Porträtfotos,
Unterrichtszeiten, Gebäude/Lageplan, Organigramm, alle fünf Bildungsgänge als
Detailseiten mit Volltext, Weitere Angebote (Moodle, ICDL, QuABB, UBUS,
Übungsfirmen), News-Volltexte inkl. Bildern, Service/Downloads inkl. Blockplänen,
Bereich „125 Jahre", Anreise, Instagram-Verlinkung. Alle Bilder liegen unter
`public/media/`, alle PDFs unter `public/dokumente/`.

Noch offen:
- [ ] Kollegiumsliste – die Altseite zeigt unter „Kollegium" nur historische
      Gruppenfotos, keine Namen. Aktuelle Liste bei der Schule anfordern.
- [ ] Vertretungsplan – der Menüpunkt der Altseite liefert einen 404. Verfahren
      und Zugang (DSBmobile/Untis?) klären.
- [ ] Kurzfilme zu den BG-/FOS-Schwerpunkten (fünf MP4-Dateien auf der Altseite):
      Einbindung und Hosting klären, statt sie ins Repo zu legen.
- [ ] Aktualisiertes Organigramm (die übernommene Grafik ist von 2020).
- [ ] Bildergalerien der News (Fußballturnier, BG-/FOS-Verabschiedung mit je
      15–21 Fotos): Persönlichkeitsrechte/Einwilligungen vor Übernahme klären.
- [ ] Presse- und Galerie-Archiv der Altseite (`/index.php/presse/…`,
      `/index.php/galerie/…`) sichten – wird es weiter benötigt?

## Seitenstruktur

Struktur der **Altseite** (Stand Juli 2026) – Referenz für die Vollständigkeit
der Migration:

- Home
- Aktuelles
- Schule
  - Auszeichnungen (Gesundheitsfördernde Schule, MINT, Umwelt-Schule)
  - Förderverein
  - Geschichte
  - Kooperationen
  - Organisation (Organigramm, Unterrichtszeiten)
  - Über Uns (Grußwort, Kollegium, Schulleitung, Verwaltung)
- Angebote
  - Berufliches Gymnasium (BG)
  - Fachoberschule (FOS)
  - Berufsfachschule (BFS)
  - Berufsschule
  - Fachschule für Technik
  - Weitere Angebote (Moodle, ICDL, QuABB, UBUS, Übungsfirmen)
- Service (Vertretung, Anreise, Kontakt, Lageplan, Blockpläne, Downloads,
  Impressum)
- 125 Jahre
- Instagram (extern)

Struktur der **neuen Seite** (darf gebündelt/umsortiert werden, solange kein
Inhalt verloren geht):

- Startseite
- Die Schule (Grußwort, Geschichte, Förderverein, Kooperationen,
  Auszeichnungen, Organisation, Kollegium/Ansprechpartner)
- Bildungsgänge (Übersicht + Detailseite je Bildungsgang)
- Aktuelles / News
- Termine
- Service / Downloads
- Kontakt / Anfahrt
- Impressum
- Datenschutzerklärung

## Design-Richtung
Modern & dynamisch mit Animationen, angelehnt an das Muster aus
`design.md.txt`:
- Ruhige, gestaffelte Fade-/Fade-up-Einblendungen statt aufdringlicher Effekte
- Klare, gut lesbare Typografie (Info-Dichte einer Schulwebsite beachten –
  nicht zu verspielt auf Kosten der Lesbarkeit)
- Konsistentes Animationstiming (vgl. Tabelle „Staggered Animation Delays"
  im Referenzdokument als Vorbild für eigene Werte)
- Eigene Farbwelt/Branding der Schule verwenden, nicht das VortxLab-Schwarz/
  Weiß-Scheme 1:1 übernehmen. Logo: `public/logo-bs-bebra.png` (aus dem
  Original-GIF der Altseite konvertiert, transparenter Hintergrund) und
  `public/logo-bs-bebra-invers.png` für dunkle Flächen. `brand-500` = `#43ad47`
  ist exakt das Grün aus dem Logo; die übrige Skala ist daraus abgeleitet
  (`--color-brand-*` in `src/index.css`)
- Kontrast: Weiße Schrift auf Grün erst ab `brand-700` WCAG-AA-tauglich –
  deshalb `bg-brand-700` für Buttons/Badges, `brand-500/600` nur dekorativ

## Barrierefreiheit & Recht (öffentliche Schule!)
- Als öffentliche Bildungseinrichtung in Hessen unterliegt die Seite
  voraussichtlich der Barrierefreiheit-Pflicht (BITV 2.0 / WCAG 2.1 AA).
  Bei Umsetzung auf semantisches HTML, Kontraste, Tastaturbedienbarkeit und
  Alt-Texte achten.
- Impressum und Datenschutzerklärung sind Pflichtseiten und müssen inhaltlich
  korrekt von der Altseite übernommen bzw. mit dem Träger abgestimmt werden –
  hier nichts frei erfinden.

## Entwicklungs-Konventionen
- Komponenten klein und fokussiert halten, keine vorzeitige Abstraktion
- Tailwind-Utility-Klassen direkt in JSX, gemeinsame Muster (z. B.
  Button-Cut-Shapes) als CSS-Klassen in `index.css` wie im Referenzprojekt
- Keine Kommentare, die nur beschreiben was der Code tut
- Inhalte aus der Migration nach `src/data/` (typisierte Exporte), Assets nach
  `public/`

## Workflow
Änderungen werden **immer zuerst lokal auf dem Dev-Server** (`npm run dev`)
bereitgestellt und vom Nutzer geprüft. Erst nach dessen ausdrücklicher Freigabe
wird nach GitHub gepusht.

## Offene Punkte (TODO – vor Umsetzung klären)
- [ ] Schriftart final festlegen (aktuell Inter)
- [ ] Hosting-Zielplattform (aktuell/künftig)
- [ ] Zuständigkeit für Pflege der Inhalte nach Launch (braucht es doch ein
      leichtgewichtiges CMS/Admin-Bereich statt statischer Komponenten?)
- [ ] Ansprechpartner für Impressum/Datenschutz-Freigabe
