# AGENTS.md

Instruktioner til kodningsagenter, der arbejder på XP Expression.

## Projektet

XP Expression er et dansk enkeltsideswebsite for en kristen gadedansgruppe ledet af Josva Daugaard Krog. Sitet skal føles varmt, modigt og enkelt: dans, gade og tro i samme visuelle sprog.

## Teknologi

- Brug plain HTML, CSS og JavaScript.
- Der er ingen build-proces, framework eller package manager.
- Sitet skal kunne åbnes direkte via `index.html` eller deployes som statisk site.

## Filstruktur

- `index.html` - markup og dansk indhold.
- `styles.css` - visuelt system, layout og responsive regler.
- `script.js` - let frontend-interaktion.
- `README.md` - kort projekt- og handoff-info.
- `assets/favicon.svg` - transparent XP-favicon i sort og koral.

Hold strukturen enkel. Tilføj kun mapper som `assets/` eller `images/`, når der faktisk kommer rigtige mediefiler.

## Indhold og tone

- Alt synligt indhold skal være på dansk.
- Tonen skal være varm, klar og tillidsfuld.
- Missionen er kristen streetdance outreach i Danmark.
- Brug `XP` som projektets moderne udgave af chi-rho-symbolet: et enkelt, nutidigt kristent mærke, der peger på Kristus uden at føles tungt eller gammeldags.
- Brug `XP` som visuelt symbol alle steder. Selve chi-rho-symbolet må kun omtales/forklares i visionsteksten eller projektdokumentation, ikke bruges som dekoration på siden.
- Undgå generisk marketingtekst. Skriv konkret om dans, fællesskab, tro, gaden, skoler, kirker og events.
- Josva Daugaard Krog omtales som grundlægger/leder, medmindre kunden giver anden formulering.

## Designretning

- Bevar det nuværende visuelle udtryk: varm papirbaggrund, mørk tekst, koral accent og store typografiske overskrifter.
- Behandl XP-logoet som et symbol, ikke bare tekst. Det må gerne fungere som et moderne chi-rho-motiv i favicon, header, grafiske pladsholdere og fremtidige brand-elementer.
- Brug eksisterende CSS-variabler i `:root`, før du introducerer nye farver.
- Sitet skal være responsivt og må ikke have horisontal overflow på mobil.
- Hold sektionerne tydelige og luftige.
- Galleri-sektionen viser udvalgte YouTube-videoer som thumbnail-kort, der linker til YouTube. Brug stabile `watch?v=VIDEO_ID`-links og `i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg` til thumbnails.
- Videoer i galleriet skal ligge nyeste først. Den aktuelle rækkefølge er:
  1. `quwqDIEkJDQ` - I Will Not Give Up // Dance 3 - 7. maj 2026
  2. `wt9O6r8UMqA` - I Will Not Give Up // Dance 2 - 7. maj 2026
  3. `7_GNF82x2nY` - I Will Not Give Up // Dance 1 - 4. maj 2026
  4. `ZyuXh3qyyGE` - You Are Holy // Flag Dance - 10. februar 2026
  5. `1Wr8yJfKu-s` - Shallow Water // Dance - 30. december 2025

## Funktionalitet

- Kontaktformularen er kun frontend lige nu og sender ikke data.
- Tilføj ikke backend, formularservice eller tracking uden eksplicit aftale.
- YouTube-sektionen skal fortsat linke til `https://www.youtube.com/@xp-expressiondance224/videos`.

## Kvalitetstjek

Før større ændringer afsluttes:

- Åbn eller servér `index.html` lokalt.
- Tjek desktop og mobilvisning.
- Bekræft at navigationens ankre stadig virker.
- Bekræft at kontaktformularens visuelle feedback stadig virker.
- Tjek at dansk specialtegn vises korrekt.
- Tjek at `☧` ikke bruges visuelt uden for chi-rho-forklaringen.

## Git

- Lav små, tydelige commits.
- Undgå store refactors uden behov.
- Revert ikke brugerens ændringer uden eksplicit tilladelse.
