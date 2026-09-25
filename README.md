# GreenLeaf Community Food Bank Website

GreenLeaf Community Food Bank began with a simple idea: neighbours helping neighbours. What started as a small WhatsApp group for sharing surplus food has grown into a community network of volunteers, donors, and local partners working together to make sure no one goes hungry.

Today, we distribute more than 1,200 food parcels every month, run a weekend soup kitchen that welcomes anyone who needs a hot meal, and work with 18 local businesses through regular donation drop-offs. Behind it all are more than 340 volunteer hours every month, driven by people who believe that a stronger community starts with looking out for one another.

At GreenLeaf, we believe access to food should never come with judgment. Every person deserves to be treated with dignity, and every family should be able to count on consistent support when they need it. That is why everything we do is built around dignity, transparency, and community.

## Contents

1. [Project overview](#project-overview)
2. [Pages](#pages)
3. [Repository structure](#repository-structure)
4. [How to preview locally](#how-to-preview-locally)
5. [Part 2: CSS and styling](#part-2-css-and-styling)
6. [Responsive design](#responsive-design)
7. [Screenshot evidence](#screenshot-evidence)
8. [Part 3 (planned)](#part-3-planned)
9. [Changelog](#changelog)
10. [References](#references)

---

## Project overview

The website includes:

- 5 HTML pages with a shared header, navigation, and footer
- One external CSS stylesheet
- Responsive layouts for desktop, tablet, and mobile
- Responsive images using `<picture>`
- Forms for donations, volunteering, partnerships, and assistance requests
- Responsive schedule tables
- Screenshot evidence at three viewport sizes
- A `js/` folder reserved for Part 3

---

## Pages

| Page         | File                | Description                                        |
| ------------ | ------------------- | -------------------------------------------------- |
| Home         | `index.html`        | Introduction, statistics, and services preview     |
| About Us     | `about.html`        | Organisation background, mission, and values       |
| Our Services | `services.html`     | Food bank services and schedules                   |
| Get Involved | `get-involved.html` | Donate, volunteer, partner, and request assistance |
| Contact      | `contact.html`      | Contact information and enquiry form               |

---

## Repository structure

```
greenleaf/
├── index.html           Home page
├── about.html           About Us page
├── services.html        Our Services page
├── get-involved.html    Get Involved page
├── contact.html         Contact page
├── README.md            Project documentation
├── css/
│   └── style.css        External stylesheet
├── js/                  Reserved for Part 3
├── images/              Site images and responsive variants
└── screenshots/         Desktop, tablet, and mobile evidence
```

---

## How to preview locally

**Option 1: Open directly**

Open `index.html` in a web browser.

**Option 2: VS Code Live Server** (recommended for live reloading and reliable relative paths)

1. Open the project in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

**Testing responsive layouts**

Resize the browser window or use the browser's developer tools device toolbar at these widths:

| Device  | Width  |
| ------- | ------ |
| Desktop | 1440px |
| Tablet  | 768px  |
| Mobile  | 375px  |

---

## Part 2: CSS and styling

### External stylesheet

All styling lives in one external stylesheet, `css/style.css`, which is linked from all five HTML pages. It is organised into numbered sections:

1. CSS Reset
2. CSS Variables
3. Base Styles
4. Typography
5. Layout: Header, Navigation, Footer
6. Layout: Page sections (Grid and Flexbox)
7. Components: Cards, Tables, Forms, Buttons
8. Visual styles: Status colours
9. Responsive: Tablet
10. Responsive: Mobile

### CSS reset and base styles

A lightweight reset gives consistent styling across browsers. It covers:

- `box-sizing`
- Margin and padding resets
- List styling
- Table borders
- Site-wide font, colour, and line-height defaults

### Typography

Two Google Fonts are used (Google Fonts, no date):

| Font   | Used for                                 |
| ------ | ---------------------------------------- |
| Lora   | Headings                                 |
| Roboto | Body text, form labels, and table labels |

Font sizes use `rem` and `clamp()` so text scales with browser settings and viewport size.

### Layout

**Flexbox** is used for layouts that need to reflow depending on the number of items (Mozilla Developer Network, no date a):

- Hero section
- Statistics cards
- Service cards
- Values list
- Get Involved forms
- Contact page columns

**CSS Grid** is used for the footer, because it has three fixed areas: address, contact information, and copyright. The layout is defined with `grid-template-areas` (Mozilla Developer Network, no date b).

### Layout wrappers added to the HTML

Extra wrapper elements were added so these sections could be controlled with Flexbox and Grid:

| Wrapper          | Purpose                                    |
| ---------------- | ------------------------------------------ |
| `.service-cards` | Home page service card layout              |
| `.help-grid`     | Get Involved form cards                    |
| `.contact-grid`  | Contact details beside the form            |
| `.media-row`     | Services page image beside its description |
| `.table-scroll`  | Horizontal scrolling for schedule tables   |

### Visual styling

The stylesheet includes colour variables, background colours, borders, box shadows, and card styling, along with interactive states for links, navigation, form inputs, and buttons:

- `:hover`
- `:focus`
- `:active`

---

## Responsive design

The site uses two breakpoints, set with media queries (Mozilla Developer Network, no date d).

### Desktop (wider than 1024px)

- Side-by-side hero
- 4-column statistics
- 3-column service cards
- 2×2 Get Involved form grid
- 2-column Contact layout
- 3-column footer

### Tablet (1024px and below)

- Statistics change to 2 columns
- Service cards change to 2 columns
- Get Involved sections stack
- Contact sections stack
- Spacing is reduced

### Mobile (640px and below)

- Single-column layouts
- Navigation stacks vertically
- Slightly smaller base font size
- Schedule tables scroll horizontally inside `.table-scroll` instead of squashing
- Spacing is reduced further

### Responsive images

Content images use the HTML `<picture>` element so smaller screens download smaller files (Mozilla Developer Network, no date c). Each image has two variants:

| Variant | Used for            | Example                 |
| ------- | ------------------- | ----------------------- |
| 400w    | Screens up to 640px | `food-parcels-400w.jpg` |
| 800w    | Larger screens      | `food-parcels-800w.jpg` |

---

## Screenshot evidence

Screenshots were captured with a headless rendering tool at 1440px (desktop), 768px (tablet), and 375px (mobile). Full-size images are in the `screenshots/` folder.

### Home

| Desktop | Tablet | Mobile |
| ------- | ------ | ------ |
| ![Home desktop](screenshots/home-desktop-1440px.jpg) | ![Home tablet](screenshots/home-tablet-768px.jpg) | ![Home mobile](screenshots/home-mobile-375px.jpg) |

### Get Involved

| Desktop | Tablet | Mobile |
| ------- | ------ | ------ |
| ![Get Involved desktop](screenshots/get-involved-desktop-1440px.jpg) | ![Get Involved tablet](screenshots/get-involved-tablet-768px.jpg) | ![Get Involved mobile](screenshots/get-involved-mobile-375px.jpg) |

### Services

| Desktop | Tablet | Mobile |
| ------- | ------ | ------ |
| ![Services desktop](screenshots/services-desktop-1440px.jpg) | ![Services tablet](screenshots/services-tablet-768px.jpg) | ![Services mobile](screenshots/services-mobile-375px.jpg) |

### About

| Desktop | Mobile |
| ------- | ------ |
| ![About desktop](screenshots/about-desktop-1440px.jpg) | ![About mobile](screenshots/about-mobile-375px.jpg) |

### Contact

| Desktop | Mobile |
| ------- | ------ |
| ![Contact desktop](screenshots/contact-desktop-1440px.jpg) | ![Contact mobile](screenshots/contact-mobile-375px.jpg) |

---

## Part 3 (planned)

The `js/` folder is reserved for Part 3. Planned functionality:

- Form validation
- Interactive navigation
- Client-side behaviour
- Other interactive features

For now, the forms use `action="#"` and do not submit data to a backend.

---

## Changelog

Newest changes first.

### Part 2: Comment clean-up and softer status badges

- Shortened and tidied comments in `index.html` and `css/style.css`. No code changes.
- Replaced the badges' solid coloured borders with a subtle ring: `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08)`.
- Muted the Critical and Low badge colours and slightly reduced badge text size.
- Combined the shared badge properties into one rule.

### Part 2: Real photography replaces placeholders

- Replaced all seven placeholder images with real photos supplied by the site owner: `hero-banner`, `food-parcels`, `soup-kitchen`, `donation-dropoff`, `about-depot`, `contact-map`, and `volunteers`.
- Cropped each photo to the sizes in `IMAGE_DIMENSIONS.txt` (16:9 for the hero banner, 4:3 for the rest) and regenerated the `-400w` and `-800w` variants.
- Removed a third-party charity's watermark from `about-depot` and `contact-map` by blending in clean background from the same photo, so no other organisation's branding appears on the site.
- Left `logo.png` unchanged, since it is GreenLeaf's own mark.
- Refreshed all screenshot evidence.
- **Testing note:** the screenshot tool (`wkhtmltoimage`) needs the `--enable-local-file-access` flag to load local CSS and images. Without it, pages render unstyled with broken images, even though the site itself is fine.

### Part 2: Muted badges, rounded nav tabs, rounded table box

- **Badges:** Critical and Low pills changed from bold solid fills to a pale tint, coloured text, and a thin 1px matching stroke. *(Since updated, see above.)*
- **Navigation:** links became pill-shaped tabs (`border-radius: 999px`) with a light tint on hover and focus, replacing the underline hover.
- **Table box:** `.table-scroll` now uses `--radius-card`, with `overflow-y: hidden` so the header corners are clipped to the rounded wrapper.
- **Mobile nav:** stacked links use `--radius-card` instead of a full pill.

### Part 2: White page background

- Changed `--paper` from cream (`#efe8d3`) to white (`#ffffff`).
- Kept card surfaces (`--card`) and `--paper-warm` cream, so cards stand out against the white page.
- Refreshed screenshot evidence.

### Part 2: Palette reverted; nav aligned right

- Reverted to the original forest green, wheat, tomato, and cream palette, replacing the short-lived mint and emerald palette.
- Restored red (Critical) and amber (Low) badges using `--tomato` and a new `--wheat-tint` variable.
- Restored the original footer and nav hover colours.
- Navigation links are now right-aligned (`justify-content: flex-end`), with the logo staying on the left.

### Part 2: Mint and emerald palette *(superseded)*

- Briefly replaced the palette with mint `#F0FDF4`, slate `#1F2937`, emerald `#10B981`, and dark emerald `#047857`.
- Updated the colour variables and hardcoded colours to match, and showed the badges in emerald only.
- Regenerated screenshots.

### Part 2: Font pairing

- Moved from three fonts (Fraunces, Public Sans, IBM Plex Mono) to a two-font pairing.
- Tried Lora and Montserrat first, then settled on **Lora** (headings) and **Roboto** (body and labels).
- Updated the Google Fonts link on all five pages and the `--font-*` variables.

### Part 2: CSS, responsive design, and README

- Added `css/style.css` and linked it to all five pages.
- Added a CSS reset and variables for colours, typography, and spacing.
- Added responsive typography with `rem` and `clamp()`.
- Added Flexbox layouts and a CSS Grid footer.
- Added hover, focus, and active states.
- Added tablet (1024px) and mobile (640px) breakpoints.
- Changed content images to `<picture>` elements with responsive variants.
- Added the `.service-cards`, `.help-grid`, `.contact-grid`, `.media-row`, and `.table-scroll` wrappers.
- Added screenshot evidence and updated this README.

### Part 1: Corrections

- Confirmed all five pages are present.
- Confirmed a consistent header, navigation, and footer.
- Confirmed image sizing using width attributes.
- Kept explanatory HTML comments for major sections.

### Part 1: Initial submission

- Created a five-page semantic HTML website with a header, navigation, main content, and footer on each page.
- Added placeholder images.
- Created the project proposal.
- Created a research folder with competitor analysis, target audience research, content inventory, and a photo shot list.

---

## References

Full research notes and citations are in the Part 1 proposal and research folder.

FoodForward SA (no date a) *About us*. Available at: https://www.foodforwardsa.org/about-us/ (Accessed: DD Month 2026).

FoodForward SA (no date b) *Donate food*. Available at: https://www.foodforwardsa.org/donate-food/ (Accessed: DD Month 2026).

FoodForward SA (no date c) *Home*. Available at: https://foodforwardsa.org/home/ (Accessed: DD Month 2026).

FoodForward SA (no date d) *Welcome to Food Forward SA*. Available at: https://foodforwardsa.org/welcome/ (Accessed: DD Month 2026).

Global FoodBanking Network (2024) *How FoodForward SA grew into the largest food bank in Sub-Saharan Africa: a Q&A with Andy Du Plessis*, 20 December. Available at: https://www.foodbanking.org/blogs/foodforward-sa-largest-food-bank-on-the-african-continent-qa-with-andy-du-plessis/ (Accessed: DD Month 2026).

Google Fonts (no date) *Lora; Roboto*. Available at: https://fonts.google.com/ (Accessed: 17 September 2026).

Ladles of Love (no date a) *About our charity*. Available at: https://ladlesoflove.org.za/about/ (Accessed: DD Month 2026).

Ladles of Love (no date b) *Soup kitchens for the homeless*. Available at: https://ladlesoflove.org.za/projects/soup-kitchens/ (Accessed: DD Month 2026).

Mozilla Developer Network (no date a) *CSS flexible box layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 16 September 2026).

Mozilla Developer Network (no date b) *CSS grid layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 16 September 2026).

Mozilla Developer Network (no date c) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 16 September 2026).

Mozilla Developer Network (no date d) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 16 September 2026).

News24 (2026) *One of SA's biggest child feeding schemes was once a small Cape Town soup kitchen*, 25 May. Available at: https://www.news24.com/life/food/news/one-of-sas-biggest-child-feeding-schemes-was-once-a-small-cape-town-soup-kitchen-20260525-0352 (Accessed: DD Month 2026).

Wander Cape Town (2023) *Interview with Danny Diliberto, CEO of Ladles of Love*, 29 October. Available at: https://wandercapetown.com/local-knowledge/interviews/danny-diliberto-ladles-of-love/ (Accessed: DD Month 2026).
