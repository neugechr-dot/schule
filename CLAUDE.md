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
Animationstiming, Button-Schnittkanten, Aufbau) – Inhalte, Branding und Texte
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
Die Inhalte werden von der bestehenden Seite **bs-bebra.de** übernommen und
migriert, nicht neu erfunden:
- Texte, Strukturen und Dokumente (z. B. Formulare, Termine, Ansprechpartner)
  von der Altseite sichten und in die neuen Komponenten/Seiten übertragen.
- Beim Migrieren: Inhalte sprachlich/redaktionell auffrischen ist ok, aber
  **keine Fakten erfinden** (Namen, Kontaktdaten, Bildungsgänge, Termine) –
  im Zweifel als TODO/Platzhalter markieren und beim Nutzer nachfragen statt
  zu raten.
- Bilder: nur verwenden, wenn sie von der Altseite stammen oder vom Nutzer
  bereitgestellt werden. Keine KI-generierten "Fantasie"-Fotos von echten
  Personen/Gebäuden der Schule.

## Seitenstruktur (Entwurf, an bs-bebra.de anzupassen)
- Startseite
- Die Schule (Leitbild, Kollegium/Ansprechpartner, Schulgeschichte)
- Bildungsgänge / Abteilungen
- Aktuelles / News
- Termine
- Kontakt / Anfahrt
- Impressum
- Datenschutzerklärung

→ Beim Sichten der Altseite prüfen, ob es abweichende oder zusätzliche
Bereiche gibt (z. B. Downloads, Elternbeirat, Schulleben, Kooperationen) und
diese Liste entsprechend anpassen.

## Design-Richtung
Modern & dynamisch mit Animationen, angelehnt an das Muster aus
`design.md.txt`:
- Ruhige, gestaffelte Fade-/Fade-up-Einblendungen statt aufdringlicher Effekte
- Klare, gut lesbare Typografie (Info-Dichte einer Schulwebsite beachten –
  nicht zu verspielt auf Kosten der Lesbarkeit)
- Konsistentes Animationstiming (vgl. Tabelle „Staggered Animation Delays"
  im Referenzdokument als Vorbild für eigene Werte)
- Eigene Farbwelt/Branding der Schule verwenden, nicht das VortxLab-Schwarz/
  Weiß-Scheme 1:1 übernehmen (TODO: Schulfarben/Logo klären)

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

## Offene Punkte (TODO – vor Umsetzung klären)
- [ ] Zugriff/Export der Inhalte von bs-bebra.de (wie werden Texte/Bilder
      bereitgestellt: Scraping, manuelle Kopie, CMS-Export?)
- [ ] Schulfarben, Logo, Schriftart (Corporate Design vorhanden?)
- [ ] Hosting-Zielplattform (aktuell/künftig)
- [ ] Zuständigkeit für Pflege der Inhalte nach Launch (braucht es doch ein
      leichtgewichtiges CMS/Admin-Bereich statt statischer Komponenten?)
- [ ] Ansprechpartner für Impressum/Datenschutz-Freigabe
