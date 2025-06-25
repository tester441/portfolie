# Portfolio Website

Deze repository bevat een responsieve portfolio website gebouwd met HTML, CSS en JavaScript. De website volgt moderne webontwikkelingspraktijken, waaronder responsief ontwerp, toegankelijkheid en een correcte semantische structuur.

## Functies

- **Responsief ontwerp** - Werkt perfect op alle apparaten (mobiel, tablet, desktop)
- **Dynamische navigatie** - Inclusief hamburgermenu voor mobiele apparaten
- **Smooth scrolling** - Voor een betere gebruikerservaring
- **Dynamische tekstanimatie** - Op de homepagina
- **CSS animaties** - Fade-in en slide-in effecten
- **Contactformulier** - Gebruiksvriendelijk contactformulier met validatie
- **Skills visualisatie** - Overzichtelijke weergave van technische vaardigheden
- **Project showcase** - Grid-gebaseerde layout voor projecten
- **Terug-naar-boven knop** - Voor betere navigatie
- **Dark/Light mode** - Ondersteuning voor gebruikersvoorkeuren (via media queries)
- **Social media integratie** - Eenvoudig te koppelen aan social media profielen

## Responsieve Ontwerp Strategie

### Ondersteunde Apparaten
- **Mobiele Telefoons**
  - iPhone SE (375px)
  - iPhone 13/14/15 (390px)
  - Samsung Galaxy S series (360px - 412px)
  - Google Pixel series (411px - 412px)
  - Foldable apparaten (in uitgeklapte staat)

- **Tablets**
  - iPad Mini (768px)
  - iPad (768px - 1024px)
  - iPad Pro (1024px - 1366px)
  - Samsung Galaxy Tab (800px - 1280px)
  - Microsoft Surface (768px - 1024px)

- **Desktops**
  - Laptops (1280px - 1440px)
  - Desktop monitoren (1440px - 2560px)
  - Ultrawide monitoren (3440px+)
  - 4K displays (ondersteund met passende scaling)

### Browser Ondersteuning
- Chrome (laatste 3 versies)
- Firefox (laatste 3 versies)
- Safari (laatste 3 versies)
- Edge (laatste 3 versies)
- Opera (laatste 2 versies)
- Chrome voor Android (laatste 3 versies)
- Safari iOS (laatste 3 versies)
- Samsung Internet (laatste 2 versies)

### Breekpunten
De website gebruikt deze belangrijke breekpunten:
- Mobiel: 320px - 480px
- Mobiel liggend/Tablet portret: 481px - 767px
- Tablet liggend: 768px - 1023px
- Desktop: 1024px - 1279px
- Grote Desktop: 1280px en hoger

## Document Structuur

De website volgt een correcte HTML5 documentstructuur met semantische elementen:

- `<header>`: Bevat de websitenavigatie
- `<nav>`: Navigatiemenu
- `<main>`: Hoofdinhoudsgebied
- `<section>`: Verschillende secties van de pagina (Home, Over Mij, enz.)
- `<article>`: Zelfstandige inhoudselementen zoals projectkaarten
- `<footer>`: Voettekst van de site met copyrightinformatie

## Layout Technieken

### CSS Grid
CSS Grid wordt gebruikt voor:
- Algemene pagina layout
- Vaardigheden sectie grid
- Projecten grid
- Contact sectie layout

### Flexbox
Flexbox wordt gebruikt voor:
- Navigatiemenu
- Over Mij sectie layout
- Knoppengroepen
- Formulierelementen uitlijning
- Social media iconen

## Toegankelijkheidsfuncties (WCAG A Compliance)

Deze portfolio voldoet aan WCAG 2.1 Level A eisen:

1. **Semantische HTML**
   - Correcte koppenstructuur (h1-h6)
   - Semantische elementen (nav, main, section, enz.)
   - ARIA-rollen waar nodig

2. **Toetsenbordtoegankelijkheid**
   - Focusbare elementen
   - Zichtbare focustoestanden
   - Skip to content link

3. **Kleur & Contrast**
   - Voldoende kleurcontrastratio's
   - Niet alleen afhankelijk van kleur om informatie over te brengen

4. **Afbeeldingtoegankelijkheid**
   - Alle afbeeldingen hebben alt-tekst
   - Decoratieve afbeeldingen gebruiken lege alt-attributen of worden ingesteld als achtergrondafbeeldingen

5. **Formuliertoegankelijkheid**
   - Correcte formulierlabels
   - Foutidentificatie
   - Formuliervalidatie

6. **Schermlezerondersteuning**
   - ARIA-attributen waar nodig
   - Correcte aankondiging van dynamische inhoud
   - Toegankelijke namen voor interactieve elementen

## JavaScript Functionaliteiten

- **Hamburger menu toggle** - Voor mobiele navigatie
- **Smooth scroll** - Voor interne linknavigatie
- **Typ-effect animatie** - Voor de typende tekst op de homepagina
- **Formuliervalidatie** - Voor het contactformulier
- **Scroll-to-top knop** - Verschijnt bij naar beneden scrollen
- **Intersection Observer** - Voor scroll-gebaseerde animaties
- **Dynamische projectfiltering** - Voor het filteren van projecten op categorie

## Prestatie-optimalisatie

De website is geoptimaliseerd voor snelle laadtijden:

- **Minified CSS en JavaScript** - Verkleinde bestandsgrootte
- **Geoptimaliseerde afbeeldingen** - Correcte formaten en compressie
- **Lazy loading** - Voor afbeeldingen en niet-kritieke inhoud
- **Font loading optimalisatie** - Met font-display: swap
- **Asynchrone scriptladen** - Voorkomt blokkerende resources
- **Caching strategie** - Voor herhaalde bezoeken

## Installatie & Gebruik

1. **Repository klonen:**
   ```bash
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website
   ```

2. **Lokaal starten:**
   - Open `index.html` in je browser, of
   - Gebruik een lokale server zoals Live Server extensie in VS Code

3. **Voor productie:**
   - Optimaliseer afbeeldingen verder
   - Minify HTML/CSS/JS bestanden
   - Implementeer op je webhosting of GitHub Pages

## Aanpassing

### Inhoud wijzigen
1. Open `index.html` in een code-editor
2. Zoek naar de secties die je wilt wijzigen
3. Vervang tekst, afbeeldingen en linkverwijzingen

### Styling aanpassen
1. Open `styles.css` in een code-editor
2. Pas de CSS-variabelen aan voor kleuren en typografie:
   ```css
   :root {
     --primary-color: #4285f4;
     --secondary-color: #34a853;
     --text-color: #333;
     /* meer variabelen */
   }
   ```

### Projecten toevoegen
1. Dupliceer een bestaande project-card in de HTML
2. Werk de inhoud bij (titel, beschrijving, tags, links)
3. Voeg een afbeelding toe in de images map (indien van toepassing)
