export interface NewsBild {
  src: string
  alt: string
  bildunterschrift?: string
}

export interface NewsFoerderer {
  name: string
  logo: string
  alt: string
  url: string
}

export interface NewsItem {
  slug: string
  datum: string
  titel: string
  teaser: string
  vorspann?: string
  absaetze: { titel?: string; text: string }[]
  bilder: NewsBild[]
  foerderer?: NewsFoerderer[]
}

export const news: NewsItem[] = [
  {
    slug: "dialogp-veranstaltung",
    datum: "2026-04-21",
    titel: "DialogP-Veranstaltung am Beruflichen Gymnasium Bebra",
    teaser:
      "Schülerinnen und Schüler kamen im Rahmen von DialogP mit Politikerinnen aus dem Hessischen Landtag ins Gespräch.",
    absaetze: [
      {
        text: "Am Beruflichen Gymnasium in Bebra fand im Rahmen des Projekts „DialogP“ eine Diskussionsveranstaltung statt, bei der Schülerinnen und Schüler mit Politikerinnen aus dem Hessischen Landtag ins Gespräch kamen.",
      },
      {
        text: "Die Veranstaltung sollte den Schülerinnen und Schülern die Möglichkeit geben, politische Themen auf Augenhöhe zu diskutieren und demokratische Prozesse besser zu verstehen. Anwesend waren Carina Fissmann (SPD), Lena Arnold (CDU), Kaya Kinkel (Bündnis 90/Die Grünen) sowie Wiebke Knell (FDP). Der ebenfalls eingeladene AfD-Politiker Gerhard Schenk erschien aus unbekannten Gründen nicht.",
      },
      {
        text: "Schon zu Beginn zeigte sich, dass die Politikerinnen großes Interesse an den Fragen der Schülerinnen und Schüler hatten. Besonders das ÖPNV-Ticket sowie Fragen zum Wahlalter und zum Einsatz von Künstlicher Intelligenz im Unterricht standen im Mittelpunkt vieler Diskussionen.",
      },
      {
        text: "Im weiteren Verlauf wurde an verschiedenen Tischen intensiv über die einzelnen Themen diskutiert. Ein besonders kontroverses Thema war die mögliche Absenkung des Wahlalters auf 16 Jahre. Befürworter argumentierten, dass politische Entscheidungen auch junge Menschen betreffen und diese daher früher mitentscheiden sollten. Kritische Stimmen verwiesen hingegen auf die fehlende politische Reife sowie darauf, dass selbst viele Erwachsene Schwierigkeiten mit dem Wahlsystem haben.",
      },
      {
        text: "Auch die Einführung eines kostenlosen, landesweiten ÖPNV-Tickets spielte eine wichtige Rolle in den Diskussionen. Viele Teilnehmende sahen darin eine Chance für mehr Chancengleichheit, unabhängig vom Einkommen der Eltern oder dem Wohnort. Gleichzeitig wurde jedoch von allen Parteien betont, dass die Finanzierung ein zentrales Problem darstellt, da dem Land Hessen nicht ausreichend finanzielle Mittel zur Verfügung stehen.",
      },
      {
        text: "Auch über die Ausweitung der Videoüberwachung im öffentlichen Raum wurde intensiv gesprochen. Während einige diese Maßnahme zur besseren Aufklärung von Straftaten befürworteten, äußerten andere Bedenken hinsichtlich des Datenschutzes und der Privatsphäre. Zudem wurde darauf hingewiesen, dass alternative Maßnahmen wie eine stärkere Polizeipräsenz oder bessere Beleuchtung ebenfalls zur Sicherheit beitragen könnten.",
      },
      {
        text: "Beim Thema Numerus Clausus zeigte sich, dass viele eine Reform befürworten. Besonders kritisiert wurde, dass der NC individuelle Fähigkeiten und Interessen zu wenig berücksichtigt. Daher wurde vorgeschlagen, stärker auf alternative Auswahlverfahren wie Eignungstests zu setzen, auch wenn dies mit einem höheren organisatorischen Aufwand verbunden ist.",
      },
      {
        text: "Auch der Einsatz von Künstlicher Intelligenz im Unterricht wurde ausführlich diskutiert. Dabei zeigte sich, dass KI zwar als hilfreiches Werkzeug angesehen wird, jedoch nicht das eigenständige Lernen ersetzen darf. Viele sprachen sich für klare und einheitliche Regeln aus, um Fairness unter den Schülerinnen und Schülern zu gewährleisten.",
      },
    ],
    bilder: [
      {
        src: "/media/news/dialogp-06.jpg",
        alt: "Schülerinnen und Schüler im Gespräch mit Landtagsabgeordneten während der DialogP-Veranstaltung",
      },
      {
        src: "/media/news/dialogp-01.jpg",
        alt: "Eine Abgeordnete im Gespräch mit Schülerinnen und Schülern an einem Gruppentisch, im Hintergrund ein DialogP-Plakat",
      },
      {
        src: "/media/news/dialogp-02.jpg",
        alt: "Schülerinnen und Schüler verfolgen einen Videobeitrag auf der Leinwand in der Aula",
      },
      {
        src: "/media/news/dialogp-03.jpg",
        alt: "Diskussion an einem Gruppentisch mit einer Abgeordneten, auf dem Tisch liegen Pro- und Contra-Karten",
      },
      {
        src: "/media/news/dialogp-04.jpg",
        alt: "Schülerinnen und Schüler halten bei einer Abstimmung ihre Pro- und Contra-Karten hoch",
      },
      {
        src: "/media/news/dialogp-05.jpg",
        alt: "Die vier teilnehmenden Landtagsabgeordneten mit Pro- und Contra-Karten vor der Bühne",
      },
    ],
  },
  {
    slug: "makerspace",
    datum: "2025-12-02",
    titel: "Makerspace",
    teaser:
      "Mit 3-D-Druck, Lasercutter und T-Shirt-Presse steht ein neuer Makerspace für kreatives, praxisnahes Lernen zur Verfügung.",
    vorspann:
      "Berufsschule Bebra eröffnet Makerspace – Schüler tüfteln an eigenen Projekten",
    absaetze: [
      {
        text: "Ob 3-D-Druck, Lasercutter oder T-Shirt-Presse: In den Beruflichen Schulen Bebra können Schüler jetzt im neuen Makerspace ihre Ideen umsetzen. Der Raum bündelt vorhandene und neue Hightech und lässt ganz neue Arten von praxisnahem und kreativem Lernen zu.",
      },
      {
        text: "Bebra – Kugeln in ein Regal stapeln? Wie macht man das? Im neuen Technikraum der Beruflichen Schulen Bebra stehen Lucas Wolf, Laurin Heß, Jannis Baron und Taha Boylu rund um einen Arbeitstisch. Vor sich einen Technik-Baukasten.",
      },
      {
        text: "Auch ein großer DIN-A0-Drucker für das Drucken von Plakaten gehört zur Ausstattung. Mit ihm ist auch das Wandplakat für den Makerspace gedruckt worden. „Schülerinnen aus der Fachrichtung Gestaltung haben dafür mit geometrischen Symbolen den Schriftzug entwickelt“, berichtet Frank Wagner. Der Berufsschullehrer für Wirtschaft und Informatik gehört neben seinem für technische Berufe zuständigen Kollegen Heiko Adam zum festen Team, das den Makerspace mit aufgebaut hat und betreut.",
      },
      {
        text: "Auch Schulleiterin Ivonne Buchenau ist begeistert, was dort für die Berufsschüler entstanden ist. „Das ist eine sehr engagierte Arbeit, die wir hier erleben“, sagt sie. Der Raum sei ein Ort, an dem eigenverantwortlich gearbeitet werden könne und wo die Schüler lernen, respektvoll und wertschätzend sowohl mit den neuen Dingen als auch miteinander beim gemeinsamen Tüfteln an Problemen umzugehen. „Und das fächerübergreifend – das heißt, der Raum ist geöffnet für alle Schüler, die Interesse haben, unabhängig vom Fachbereich, in dem sie an der Berufsschule sind“, fügt Heiko Adam hinzu. „Die Schüler werden allerdings vorher eingewiesen, damit sie auch mit den Geräten zurechtkommen“, sagt Buchenau.",
      },
      {
        text: "Hinten rechts an der T-Shirt-Presse stehen Paul Schimmelpfennig, Tizian Schreiber und Maximilian Koch. Sie stellen die Maschine richtig ein, um das Logo und den Namen ihrer Schule auf die bereitliegenden weißen Kapuzenpullover zu drucken. Die Vorarbeit dafür leistet der ebenfalls neu angeschaffte Schneidplotter, der in der Lage ist, aus Folien auch filigrane Schriftzüge herauszuschneiden. „Jetzt in unserem Makerspace können wir das selbst herstellen – früher mussten wir dafür viel Geld ausgeben“, berichtet Wagner.",
      },
      {
        text: "Gefördert durch die Initiative ZUKUNFT MITGEMACHT, einer Gemeinschaftsaktion des Deutschen Kinderhilfswerkes, ROSSMANN und Procter & Gamble.",
      },
    ],
    bilder: [
      {
        src: "/media/news/makerspace-01.jpg",
        alt: "Schüler und Lehrkräfte im neuen Makerspace der Beruflichen Schulen Bebra",
        bildunterschrift:
          "Im neuen Makerspace-Raum: vorne von links die Berufsschullehrer Heiko Adam und Frank Wagner vom Makerspace-Team, im Hintergrund Schüler des Beruflichen Gymnasiums aus der 13. Klasse – am Tisch von links Lucas Wolf, Laurin Heß, Jannis Baron und Taha Boylu. © Peter Gottbehüt",
      },
      {
        src: "/media/news/makerspace-02.jpg",
        alt: "Arbeiten an den Geräten im Makerspace",
      },
    ],
    foerderer: [
      {
        name: "ZUKUNFT MITGEMACHT",
        logo: "/media/news/makerspace-logo-zukunft-mitgemacht.jpg",
        alt: "Logo der Initiative ZUKUNFT MITGEMACHT",
        url: "https://www.zukunftmitgemacht.de/",
      },
      {
        name: "Wir für Schule",
        logo: "/media/news/makerspace-logo-wir-fuer-schule.jpg",
        alt: "Logo der Initiative Wir für Schule",
        url: "https://www.wirfuerschule.de/",
      },
    ],
  },
  {
    slug: "deutscher-gruenderpreis",
    datum: "2025-12-02",
    titel: "Deutscher Gründerpreis für Schüler",
    teaser:
      "Ein Schülerteam wurde für seine innovative Auto-Diagnose-App von der Sparkasse Bad Hersfeld-Rotenburg geehrt.",
    vorspann:
      "Schülerteam der Beruflichen Schulen Bebra wird für seine innovative Auto-Diagnose-App von der Sparkasse Bad Hersfeld-Rotenburg geehrt.",
    absaetze: [
      {
        text: "Maximilian Koch und Paul Schimmelpfennig aus dem Beruflichen Gymnasium Bebra suchten im Kurs Unternehmensgründung bei Lehrer Frank Wagner nach einer vielversprechenden Geschäftsidee. Motiviert vom anstehenden Autokauf ihrer Freundin Paula fanden sie als Problem: Wie kann man möglichst objektiv und ohne besondere Vorkenntnisse feststellen, welche Schäden oder Probleme ein Auto hat?",
      },
      {
        text: "Die autobegeisterten Jungs erdachten als Problemlösung eine App, die mithilfe der Kamera und des Mikrofons eines herkömmlichen Smartphones Schäden am Fahrzeug identifiziert. Die App analysiert visuelle und akustische Daten, und eine fortschrittliche künstliche Intelligenz liefert innerhalb weniger Sekunden präzise Ergebnisse. Diese KI wird mit einer umfangreichen Datenbank von Fahrzeugbildern und -geräuschen trainiert, um Defekte wie Lackkratzer, Dellen oder ungewöhnliche Motorgeräusche zuverlässig zu erkennen. Die Bedienung soll intuitiv sein und keinerlei Vorkenntnisse erfordern.",
      },
      {
        text: "Nach einer schulinternen Präsentation vor Wirtschaftsjunior Björn Barkhoff aus Niederaula und einem Abgleich mit der Praxis nahmen sie mit ihrer Idee „AutoNexis“ am Businessplanwettbewerb Deutscher Gründerpreis für Schüler teil. Die Aufregung war groß, als zum Ende des letzten Schuljahres die E-Mail einging, dass sie in die engere Wahl für die TOP 10 gekommen sind und auch noch das Video ihres Pitches an die Jury schicken sollten.",
      },
      {
        text: "Nun steht das Ranking fest: Max, Paul und Paula konnten sich unter bundesweit 770 Teams den 21. Platz erarbeiten. Für diese besondere Leistung wurden sie von Lena Siebert von der Sparkasse Bad Hersfeld-Rotenburg mit einem Preisgeld in Höhe von 1.000 Euro geehrt. Auch der Förderverein der Beruflichen Schulen Bebra erhielt eine Spende in Höhe von 500 Euro, um die Aktivitäten im Bereich der Lernangebote zur Unternehmensgründung weiter zu unterstützen.",
      },
    ],
    bilder: [
      {
        src: "/media/news/gruenderpreis.jpg",
        alt: "Preisübergabe des Deutschen Gründerpreises für Schüler an das Team AutoNexis",
        bildunterschrift:
          "v. l. n. r.: Frank Wagner (Lehrer), Team AutoNexis mit Max Koch, Paul Schimmelpfennig (Paula Sander fehlt) und Lena Siebert (Sparkasse)",
      },
    ],
  },
  {
    slug: "future-lab",
    datum: "2025-12-02",
    titel: "Future-Lab",
    teaser:
      "Mirra Buller und Mariella Thiessen erreichten mit ihrer App-Idee zum Thema KI den zweiten Platz beim FAZ-Future-Lab.",
    vorspann:
      "FAZ-Future-Lab – zweiter Platz für Mirra Buller und Mariella Thiessen vom Beruflichen Gymnasium Bebra",
    absaetze: [
      {
        text: "Vielfachen Lohn für ihr Lernen zum Thema KI konnten Mirra Buller und Mariella Thiessen aus dem Beruflichen Gymnasium Bebra gerade einstreichen. Neben dem neu erworbenen Wissen zu einem der wichtigsten Zukunftsthemen und einer sehr guten Bewertung ihrer schulischen Leistungen erhielten sie auch viel Lob von einer hochrangigen Jury und den mit 1.000 Euro dotierten zweiten Platz beim FAZ-Future-Lab.",
      },
      {
        text: "Seit Beginn des Schuljahres konnten sich Schülerinnen und Schüler des Beruflichen Gymnasiums Bebra mit ihrem Lehrer Frank Wagner mit Künstlicher Intelligenz, deren Vorteilen, Gefahren, ethischen Problemen und Veränderungen für die Berufswelt auseinandersetzen. Auch der sinnvolle und verantwortungsbewusste Umgang mit KI kam nicht zu kurz.",
      },
      {
        text: "Auf der Suche nach einem spannenden Wettbewerbsbeitrag zum FAZ-Future-Lab der Frankfurter Allgemeinen Zeitung und der Google News Initiative fanden Mirra Buller und Mariella Thiessen ein Thema aus ihrem eigenen Politik-Unterricht: Motiviert von den irritierenden Ergebnissen der Juniorwahl nahmen sie wahr, dass politische Bildung – trotz jahrelangem Politikunterricht – in ihrer Altersgruppe nicht weit verbreitet ist. Gleichwohl erkannten sie, dass eine Demokratie von gut informierten und aktiven Bürgern lebt.",
      },
      {
        text: "Die traditionellen und gut recherchierten Informationsquellen aus Zeitungen oder Fernsehnachrichten passen offensichtlich nicht zum Medienkonsum der Jugendlichen. Die leicht zugänglichen Informationen auf den verschiedenen Social-Media-Plattformen sind dagegen oft populistisch, verkürzt oder sogar gänzlich falsch.",
      },
      {
        text: "Als Lösung war schnell die Idee für eine App entwickelt. „Politify – die App für politische Bildung“ soll junge Menschen gezielt mit geprüften politischen Informationen versorgen. Mit einer eigens dafür angepassten Künstlichen Intelligenz filtert Politify ausschließlich seriöse und vertrauenswürdige Quellen heraus, um Fake News und Populismus entgegenzuwirken. Die App bereitet komplexe politische Inhalte mit KI-Unterstützung verständlich und ansprechend auf und liefert bei Bedarf auch tiefergehende Informationen.",
      },
      {
        text: "In der Würdigung ihres Wettbewerbsbeitrages bei der Abschlussveranstaltung im FAZ-Verlagshaus in Frankfurt am Main lobte Marco Rodriguez Varela, Manager der Google News Initiative, die sehr gute Idee und den wichtigen Beitrag der App für unsere Gesellschaft. Im Namen der Jury stellte er fest, dass es sehr schwer gefallen war, sich zwischen Platz eins und zwei zu entscheiden. Beeindruckend waren das Fachwissen, die Begeisterung und das persönliche Engagement von Mirra und Mariella.",
      },
      {
        text: "Die beiden wurden von ihrer Klasse und ihrem Lehrer Frank Wagner zur Abschlussveranstaltung nach Frankfurt begleitet. Dort stellten sie ihren Wettbewerbsbeitrag in einem siebenminütigen Pitch der Jury und den anderen Siegerteams vor. Zuvor galt es für die TOP-3-Teams aus Bremen, Dillenburg und Bebra noch einen „digitalen Promptathon“ zu bestehen, in dem sie ihr Können zur Nutzung von KI beweisen mussten.",
      },
      {
        text: "Lehrer Wagner ist wichtig, dass sich seine Schülerinnen und Schüler kritisch und konstruktiv mit dem Thema KI auseinandersetzen. Er freut sich sehr darüber, dass sein Unterrichtsangebot so gut und erfolgreich angenommen wurde und Anfang März die Nachricht kam, dass sich sein Schülerinnen-Team in die TOP 3 der bundesweit 335 Einreichungen von rund 8.000 Schülerinnen und Schülern gearbeitet hatte.",
      },
      {
        text: "Für Mirra und Mariella ist dies erst der Anfang: Mit IT-technischer Unterstützung des Wirtschaftsjuniors Björn Barkhoff aus Niederaula planen sie, ihre App weiterzuentwickeln und damit zu einer besser informierten und aktiveren Demokratie beizutragen. Auch ein mögliches Praktikum bei der FAZ wird ihren Lebenslauf bereichern.",
      },
    ],
    bilder: [
      {
        src: "/media/news/futurelab-01.jpg",
        alt: "Mirra Buller und Mariella Thiessen bei ihrem Vortrag im Verlagshaus der FAZ in Frankfurt",
        bildunterschrift:
          "Mirra Buller und Mariella Thiessen bei ihrem Vortrag im Verlagshaus der FAZ in Frankfurt",
      },
      {
        src: "/media/news/futurelab-02.jpg",
        alt: "Preisübergabe beim FAZ-Future-Lab in Frankfurt",
        bildunterschrift:
          "v. l. n. r.: Marco Rodriguez Varela, Mirra Buller und Mariella Thiessen bei der Preisübergabe in Frankfurt",
      },
      {
        src: "/media/news/futurelab-03.jpg",
        alt: "Mirra Buller und Mariella Thiessen bei der Preisübergabe",
      },
      {
        src: "/media/news/futurelab-04.jpg",
        alt: "Abschlussveranstaltung des FAZ-Future-Lab",
      },
    ],
  },
  {
    slug: "fussballturnier-2025",
    datum: "2025-07-11",
    titel: "Fußballturnier der Beruflichen Schulen Bebra",
    teaser:
      "Das traditionelle Fußballturnier fand bei bestem Wetter statt und begeisterte mit Teamgeist und Fair Play.",
    vorspann:
      "Traditionelles Fußballturnier der Beruflichen Schulen Bebra begeistert mit Teamgeist, Fairplay und Spannung",
    absaetze: [
      {
        text: "Am 24. Juni 2025 war es wieder so weit: Das traditionelle Fußballturnier der Beruflichen Schulen Bebra fand bei bestem Wetter auf dem schuleigenen Sportplatz statt – ein sportliches Highlight im Schuljahr, das auch in diesem Jahr zahlreiche Schülerinnen und Schüler, Lehrkräfte und Gäste begeisterte.",
      },
      {
        text: "Organisiert wurde das Turnier von Sportlehrer Michael Mitkov, der mit Unterstützung seines Helferteams für einen reibungslosen Ablauf sorgte. Ein besonderer Dank gilt dem Abi-Komitee, das mit viel Engagement für das leibliche Wohl sorgte: Kaffee, Kuchen, kühle Getränke sowie Leckeres vom Grill trugen maßgeblich zur tollen Atmosphäre bei.",
      },
      {
        titel: "Faire Wettkämpfe",
        text: "Insgesamt nahmen 14 Klassen aus der Berufsschule sowie dem Beruflichen Gymnasium teil. Gespielt wurde in einer Vorrunde mit vier Gruppen. Die jeweils zwei besten Teams jeder Gruppe qualifizierten sich für die Zwischenrunde, aus der schließlich vier Mannschaften ins Halbfinale einzogen: 11 MECH (Herr Dirk Morgner), die INTEA-Klasse (Frau Sandy Hergenhan und Herr Reinhard Rost), 11 BG c (Frau Dr. Katrin Becker) sowie 12 BG Deutsch/Chemie LK (Frau Antonia Gregor und Frau Anke Ross). Die spannenden und fairen Spiele wurden souverän von den Lehrkräften Julian Holl, Luca Schlüter und Reinhard Rost geleitet.",
      },
      {
        titel: "Spannendes Finale mit verdientem Sieger",
        text: "Nach intensiven Halbfinalpartien standen sich im großen Finale die Teams der 12 BG Deutsch/Chemie LK und der 11 BG c gegenüber. In einem spannenden Spiel setzte sich schließlich die 12 BG mit einem 2:1-Sieg durch und sicherte sich den begehrten Wanderpokal, auf dem nun ihr Name verewigt wird. Im Spiel um Platz 3 triumphierte die INTEA-Klasse über die Klasse 11 MECH.",
      },
      {
        titel: "Ein gelungenes Sportevent für die gesamte Schulgemeinschaft",
        text: "Neben spannenden Spielen war das Turnier geprägt von Teamgeist, Fairness und viel guter Laune. Alle Mannschaften der Finalrunde erhielten kleine Preise – und vor allem großen Applaus für ihren Einsatz. Michael Mitkov zeigte sich sehr zufrieden: „Es war ein rundum gelungenes Turnier, das allen Beteiligten viel Freude bereitet hat. Mein Dank gilt allen Helferinnen und Helfern.“",
      },
      {
        text: "Ein großes Dankeschön geht an die Kolleginnen und Kollegen Anke Ross, Sabrina Ochmann, Julian Holl, Luca Schlüter, Reinhard Rost, Marco Vogel, Cornelius Reiser und Johannes Linke, die das Turnier vor Ort begleitet und unterstützt haben. Ebenso danken wir Herrn Rainer Gleim von der FSG Bebra für die Vorbereitung der Spielfelder sowie dem Förderverein der Schule für die Unterstützung im Hintergrund.",
      },
    ],
    bilder: [],
  },
  {
    slug: "bilderserie-verabschiedung-bg",
    datum: "2025-07-09",
    titel: "Bilderserie: Verabschiedung am Beruflichen Gymnasium",
    teaser:
      "Bilder von der Verabschiedung der Abiturientinnen und Abiturienten des Beruflichen Gymnasiums.",
    vorspann:
      "Impressionen von der Abschlussfeier des Beruflichen Gymnasiums – Zeugnisübergabe, Ehrungen und musikalische Beiträge.",
    absaetze: [],
    bilder: [
      { src: "/media/news/bg-verabschiedung-13.jpg", alt: "Gruppenfoto des gesamten Abiturjahrgangs mit Zeugnismappen vor dem Schulgebäude" },
      { src: "/media/news/bg-verabschiedung-01.jpg", alt: "Acht Absolventinnen und Absolventen mit Zeugnismappen auf der Bühne, links eine Lehrkraft" },
      { src: "/media/news/bg-verabschiedung-02.jpg", alt: "Ein Lehrer hält eine Ansprache am Mikrofon" },
      { src: "/media/news/bg-verabschiedung-03.jpg", alt: "Eine große Gruppe Absolventinnen und Absolventen mit Zeugnismappen auf der Bühne" },
      { src: "/media/news/bg-verabschiedung-04.jpg", alt: "Klassengruppe mit Zeugnismappen auf der Bühne vor dem Wappen des Kreises Hersfeld-Rotenburg" },
      { src: "/media/news/bg-verabschiedung-05.jpg", alt: "Weitere Klassengruppe mit Zeugnismappen auf der Bühne" },
      { src: "/media/news/bg-verabschiedung-06.jpg", alt: "Die Schulband mit zwei Sängerinnen, Cajon, Gitarre und Schlagzeug begleitet die Feier" },
      { src: "/media/news/bg-verabschiedung-07.jpg", alt: "Gruppenfoto vor dem vollbesetzten Veranstaltungssaal" },
      { src: "/media/news/bg-verabschiedung-08.jpg", alt: "Zwei Absolventinnen mit einem Gast der Abschlussfeier" },
      { src: "/media/news/bg-verabschiedung-09.jpg", alt: "Zwei Absolventen mit Buchpreisen neben einer Lehrkraft im Foyer" },
      { src: "/media/news/bg-verabschiedung-10.jpg", alt: "Zwei Absolventen mit Ehrenpreisen zwischen zwei Gratulanten" },
      { src: "/media/news/bg-verabschiedung-11.jpg", alt: "Eine Absolventin mit der Urkunde des Abiturpreises Mathematik neben einer Lehrkraft" },
      { src: "/media/news/bg-verabschiedung-12.jpg", alt: "Ein Absolvent mit einer Lehrkraft vor dem Wappen des Kreises Hersfeld-Rotenburg" },
      { src: "/media/news/bg-verabschiedung-14.jpg", alt: "Eine Rednerin richtet das Wort an die Gäste" },
      { src: "/media/news/bg-verabschiedung-15.jpg", alt: "Eine Sängerin der Schulband am Mikrofon" },
      { src: "/media/news/bg-verabschiedung-16.jpg", alt: "Eine weitere Sängerin der Schulband am Mikrofon" },
      { src: "/media/news/bg-verabschiedung-17.jpg", alt: "Die Rednerin während ihrer Ansprache" },
      { src: "/media/news/bg-verabschiedung-18.jpg", alt: "Ein Redner am Rednerpult" },
      { src: "/media/news/bg-verabschiedung-19.jpg", alt: "Ein Redner im Profil während seiner Ansprache" },
      { src: "/media/news/bg-verabschiedung-20.jpg", alt: "Ein weiterer Redner am Mikrofon" },
      { src: "/media/news/bg-verabschiedung-21.jpg", alt: "Ein Redner am Rednerpult mit Mikrofon" },
    ],
  },
  {
    slug: "bilderserie-verabschiedung-fos",
    datum: "2025-07-07",
    titel: "Bilderserie: Verabschiedung an der Fachoberschule",
    teaser:
      "Bilder von der Verabschiedung der Absolventinnen und Absolventen der Fachoberschule.",
    vorspann:
      "Impressionen von der Abschlussfeier der Fachoberschule – Zeugnisübergabe, Ansprachen und musikalische Beiträge.",
    absaetze: [],
    bilder: [
      { src: "/media/news/fos-verabschiedung-01.jpg", alt: "Gruppenfoto des gesamten Jahrgangs mit den roten Zeugnismappen vor dem Schulgebäude" },
      { src: "/media/news/fos-verabschiedung-02.jpg", alt: "Klassengruppe mit roten Zeugnismappen auf der Bühne vor dem Wappen des Kreises Hersfeld-Rotenburg" },
      { src: "/media/news/fos-verabschiedung-03.jpg", alt: "Kleinere Gruppe von Absolventinnen und Absolventen mit roten Zeugnismappen auf der Bühne" },
      { src: "/media/news/fos-verabschiedung-04.jpg", alt: "Weitere Klassengruppe mit roten Zeugnismappen auf der Bühne" },
      { src: "/media/news/fos-verabschiedung-05.jpg", alt: "Klassengruppe mit roten Zeugnismappen und begleitenden Lehrkräften auf der Bühne" },
      { src: "/media/news/fos-verabschiedung-06.jpg", alt: "Gruppenfoto vor dem vollbesetzten Veranstaltungssaal" },
      { src: "/media/news/fos-verabschiedung-07.jpg", alt: "Absolventen mit ihren roten Zeugnismappen auf der Rasenfläche vor der Schule" },
      { src: "/media/news/fos-verabschiedung-08.jpg", alt: "Eine Rednerin richtet das Wort an die Gäste" },
      { src: "/media/news/fos-verabschiedung-09.jpg", alt: "Ein Redner während seiner Ansprache am Mikrofon" },
      { src: "/media/news/fos-verabschiedung-10.jpg", alt: "Ein weiterer Redner am Mikrofon" },
      { src: "/media/news/fos-verabschiedung-11.jpg", alt: "Eine Absolventin liest ihre Rede vom Blatt ab" },
      { src: "/media/news/fos-verabschiedung-12.jpg", alt: "Die Absolventin während ihrer Rede am Mikrofon" },
      { src: "/media/news/fos-verabschiedung-13.jpg", alt: "Ein Absolvent hält eine Ansprache am Mikrofon" },
      { src: "/media/news/fos-verabschiedung-14.jpg", alt: "Die Schulband mit zwei Sängerinnen, Schlagzeug und Gitarre begleitet die Feier" },
      { src: "/media/news/fos-verabschiedung-15.jpg", alt: "Zwei Sängerinnen der Schulband am Mikrofon" },
    ],
  },
  {
    slug: "praxistag-landwirtschaft",
    datum: "2025-07-01",
    titel: "Sicher unterwegs auf dem Hof – Praxistag für angehende Landwirt*innen",
    teaser:
      "Auszubildende nahmen an einem Praxistag zum Thema Sicherheit auf dem landwirtschaftlichen Betrieb teil.",
    vorspann:
      "Berufliche Schulen Bebra setzen ein starkes Zeichen für Arbeitssicherheit in der Landwirtschaft",
    absaetze: [
      {
        text: "Am Freitag, den 27. Juni 2025, nahmen die Auszubildenden des ersten und zweiten Ausbildungsjahres im Beruf Landwirt*in an einem besonderen Praxistag zum Thema „Sicherheit auf dem landwirtschaftlichen Betrieb“ teil. Veranstaltungsort war der Betrieb Wetzel GbR in Cornberg-Königswald, wo sich Theorie und Praxis in idealer Weise ergänzten.",
      },
      {
        text: "Organisiert wurde der Tag von den Beruflichen Schulen Bebra in enger Zusammenarbeit mit der SVLFG (Sozialversicherung für Landwirtschaft, Forsten und Gartenbau) – vertreten durch Herrn Matthias Icke und sein Team – sowie der gastgebenden Familie Wetzel.",
      },
      {
        titel: "Gefahren erkennen – Risiken vermeiden",
        text: "Ziel des Vormittags war es, typische Gefahrenquellen im Alltag landwirtschaftlicher Arbeit zu erkennen und praxisnahe Vermeidungsstrategien zu entwickeln. Die Auszubildenden wurden dafür direkt vor Ort mit realistischen Situationen konfrontiert: im Kuhstall, wo der Umgang mit Tieren und bauliche Gegebenheiten Sicherheitsrisiken bergen können, auf dem Hofgelände, wo alltägliche Bewegungsabläufe schnell zur Gefahrenquelle werden, in der Werkstatt beim Umgang mit Werkzeugen oder Maschinen sowie beim An- und Abhängen von Arbeitsgeräten, wo Präzision und Aufmerksamkeit lebenswichtig sind.",
      },
      {
        titel: "Praxisnah und eindrücklich",
        text: "Die Auszubildenden reisten eigenständig an und beteiligten sich mit großem Interesse an den praktischen Lernstationen. „Solche Formate bringen den Lernstoff aus dem Klassenzimmer direkt ins echte Leben – und fördern genau die Handlungskompetenz, die es im späteren Berufsalltag braucht“, betonten die begleitenden Lehrkräfte Christian Roth und Henri Grave vom Fachbereich Agrarwirtschaft.",
      },
      {
        titel: "Ein starkes Signal für Ausbildungssicherheit",
        text: "Die Resonanz auf den Praxistag fiel durchweg positiv aus – sowohl von Seiten der Schüler*innen als auch der beteiligten Fachkräfte. Ein herzlicher Dank geht an die Wetzel GbR für die Gastfreundschaft sowie an die SVLFG für die fachlich fundierte Begleitung.",
      },
    ],
    bilder: [
      {
        src: "/media/news/praxistag-landwirte.jpg",
        alt: "Auszubildende beim Praxistag zur Arbeitssicherheit auf einem landwirtschaftlichen Betrieb",
      },
    ],
  },
  {
    slug: "lehrkraefteaustausch-finnland",
    datum: "2025-05-20",
    titel: "Internationaler Lehrkräfteaustausch an den BS Bebra",
    teaser:
      "Vier Fachlehrkräfte vom Hyria Education Center aus Hyvinkää, Finnland, besuchten den Fachbereich Agrarwirtschaft.",
    vorspann:
      "Internationaler Lehrkräfteaustausch an den BS Bebra: Besuch aus Finnland im Fachbereich Agrar",
    absaetze: [
      {
        text: "Am 8. Mai 2025 begrüßte der Fachbereich Agrarwirtschaft der Beruflichen Schulen Bebra vier Fachlehrkräfte vom Hyria Education Center aus Hyvinkää, Finnland. Der Besuch war Teil einer einwöchigen Informationsreise durch Hessen, organisiert vom Landesbetrieb Landwirtschaft Hessen (LLH) im Rahmen der langjährigen Partnerschaft zwischen dem Landkreis Hersfeld-Rotenburg und der Stadt Hyvinkää, rund 60 Kilometer nördlich von Helsinki.",
      },
      {
        titel: "Fachlicher Austausch auf Augenhöhe",
        text: "Empfangen wurden die Gäste von Agrarlehrer Christian Roth, der zunächst das duale Ausbildungssystem in Deutschland sowie die agrarische Berufsbildung am Standort Bebra vorstellte. Im Mittelpunkt stand dabei der intensive kollegiale Austausch zu didaktischen Konzepten, Praxisbezug und Zukunftsperspektiven in der beruflichen Bildung.",
      },
      {
        titel: "Begegnung mit Schüler*innen",
        text: "Besonders eindrucksvoll war die anschließende Diskussionsrunde im Unterricht mit angehenden Landwirtinnen und Landwirten der Berufsschule. Dabei stellten die finnischen Lehrkräfte ihr eigenes Bildungssystem sowie aktuelle Herausforderungen und Strukturen der finnischen Landwirtschaft vor. Die Gespräche auf Englisch entwickelten sich rasch zu einem lebhaften Austausch – fachlich fundiert, offen und respektvoll.",
      },
      {
        titel: "Perspektiven der Zusammenarbeit",
        text: "Christian Roth zeigte sich sehr zufrieden: „Der Austausch war für beide Seiten fachlich bereichernd und hat bei unseren Schülerinnen und Schülern echtes Interesse an internationalen Perspektiven geweckt.“ Ziel ist es, die entstandenen Kontakte weiter auszubauen – etwa durch digitale Austauschformate oder künftige Besuche deutscher Auszubildender in Finnland.",
      },
      {
        text: "Redaktioneller Hinweis: Der Besuch war Teil eines vom LLH koordinierten Bildungsprogramms mit weiteren Stationen am Eichhof Bad Hersfeld, der DEULA Witzenhausen, dem Umweltbildungszentrum HERO sowie dem forstlichen Bildungszentrum in Weilburg.",
      },
    ],
    bilder: [
      {
        src: "/media/news/finnland-01.jpg",
        alt: "Diskussionsrunde im Klassenzimmer mit den finnischen Gästen",
        bildunterschrift:
          "Die Schülerinnen und Schüler der Landwirtschaftsklasse beteiligten sich aktiv am Gespräch mit den finnischen Gästen.",
      },
      {
        src: "/media/news/finnland-02.jpg",
        alt: "Austausch im Schulgarten der Beruflichen Schulen Bebra",
        bildunterschrift:
          "Zwischen Theorie und Praxis: Auch die Gestaltung des Schulgeländes bot Anlass zum Austausch über praxisnahe Lernorte.",
      },
      {
        src: "/media/news/finnland-03.jpg",
        alt: "Vorstellung des finnischen Agrarsystems im Unterricht",
        bildunterschrift:
          "Vorstellung der finnischen Landwirtschaft im Unterricht – mit Karte, Zahlen und anschaulichen Beispielen.",
      },
    ],
  },
]
