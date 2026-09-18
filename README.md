# GreenLeaf Community Food Bank Website

GreenLeaf Community Food Bank began with a simple idea: neighbours helping neighbours. What started as a small WhatsApp group for sharing surplus food has grown into a community network of volunteers, donors, and local partners working together to make sure no one goes hungry.

Today, we distribute more than 1,200 food parcels every month, run a weekend soup kitchen that welcomes anyone who needs a hot meal, and work with 18 local businesses through regular donation drop-offs. Behind it all are more than 340 volunteer hours every month, driven by people who believe that a stronger community starts with looking out for one another.

At GreenLeaf, we believe access to food should never come with judgment. Every person deserves to be treated with dignity, and every family should be able to count on consistent support when they need it. That is why everything we do is built around dignity, transparency, and community.

## Project Overview

The website consists of:

* 5 HTML pages
* Shared header, navigation, and footer
* External CSS stylesheet
* Responsive layouts for desktop, tablet, and mobile
* Responsive images using `<picture>`
* Forms for donations, volunteering, partnerships, and assistance requests
* Responsive schedule tables
* Screenshot evidence for different viewport sizes
* JavaScript folder reserved for Part 3

## Pages

| Page         | File                 | Description                                         |
| ------------ | -------------------- | ---------------------------------------------------- |
| Home         | `index.html`         | Introduction, statistics, and services preview       |
| About Us     | `about.html`         | Organisation background, mission, and values         |
| Our Services | `services.html`      | Food bank services and schedules                     |
| Get Involved | `get-involved.html`  | Donate, volunteer, partner, and request assistance    |
| Contact      | `contact.html`       | Contact information and enquiry form                  |

## Repository Structure

### HTML Pages

* `index.html` — Home page
* `about.html` — About Us page
* `services.html` — Our Services page
* `get-involved.html` — Get Involved page
* `contact.html` — Contact page

### Folders

* `css/` — Contains the external stylesheet, `style.css`
* `js/` — Reserved for Part 3 JavaScript functionality
* `images/` — Contains website images and responsive image variants
* `screenshots/` — Contains desktop, tablet, and mobile screenshots

### Documentation

* `README.md` — Project documentation, implementation details, testing, and references

## Part 2: CSS and Responsive Design

### External Stylesheet

The website uses a single external stylesheet:

`css/style.css`

The stylesheet is linked from all five HTML pages.

The CSS is organised into sections covering:

1. Reset
2. Variables
3. Base styles
4. Typography
5. Header and navigation
6. Footer
7. Page sections
8. Components
9. Visual styles
10. Responsive breakpoints

### CSS Reset and Base Styles

A lightweight CSS reset was added to provide consistent styling across browsers.

This includes:

* `box-sizing`
* Margin and padding resets
* List styling
* Table borders
* Site-wide font, colour, and line-height defaults

### Typography

Two font families are used:

* Lora — headings
* Roboto — body text, form labels, and table/schedule labels

Font sizes use `rem` and `clamp()` where appropriate so that text can scale with browser settings and viewport size.

### Layout

Flexbox is used for layouts that need to reflow depending on the number of items, including:

* Hero section
* Statistics cards
* Service cards
* Values list
* Get Involved forms
* Contact page columns

CSS Grid is used for the footer because it contains three fixed layout areas:

* Address
* Contact information
* Copyright

The footer uses `grid-template-areas` to define the layout.

### Visual Styling

The stylesheet includes:

* Colour variables
* Background colours
* Borders
* Box shadows
* Card styling
* Link states
* Navigation states
* Form input states
* Button states

Interactive states include:

* `:hover`
* `:focus`
* `:active`

## Responsive Design

The website uses two responsive breakpoints.

### Desktop

**Width: greater than 1024px**

Desktop layouts include:

* Side-by-side hero
* 4-column statistics
* 3-column service cards
* 2×2 Get Involved form grid
* 2-column Contact layout
* 3-column footer

### Tablet

**Width: 1024px and below**

Changes include:

* Statistics change to 2 columns
* Service cards change to 2 columns
* Get Involved sections stack
* Contact sections stack
* Spacing is reduced

### Mobile

**Width: 640px and below**

Changes include:

* Single-column layouts
* Navigation stacks vertically
* Slightly smaller base font size
* Schedule tables become horizontally scrollable
* Reduced spacing

Schedule tables are contained inside `.table-scroll` so that they do not become compressed on smaller screens.

## Responsive Images

Content images use the HTML `<picture>` element.

Two image variants are provided:

* 400w — for screens up to 640px
* 800w — for larger screens

Example:

* `food-parcels-400w.jpg`
* `food-parcels-800w.jpg`

The image variants were generated using Pillow.

## HTML Structure Changes

Additional wrapper elements were added to support the CSS layouts.

These include:

* `.service-cards`
* `.help-grid`
* `.contact-grid`
* `.media-row`
* `.table-scroll`

These wrappers allow the relevant sections to be controlled using Flexbox and CSS Grid.

## Screenshot Evidence

Screenshots were captured at the following viewport widths:

* Desktop — 1440px
* Tablet — 768px
* Mobile — 375px

Full-size screenshots are available in the `screenshots/` folder.

### Home

![Home desktop](screenshots/home-desktop-1440px.jpg)

![Home tablet](screenshots/home-tablet-768px.jpg)

![Home mobile](screenshots/home-mobile-375px.jpg)

### Get Involved

![Get Involved desktop](screenshots/get-involved-desktop-1440px.jpg)

![Get Involved tablet](screenshots/get-involved-tablet-768px.jpg)

![Get Involved mobile](screenshots/get-involved-mobile-375px.jpg)

### Services

![Services desktop](screenshots/services-desktop-1440px.jpg)

![Services tablet](screenshots/services-tablet-768px.jpg)

![Services mobile](screenshots/services-mobile-375px.jpg)

### About

![About desktop](screenshots/about-desktop-1440px.jpg)

![About mobile](screenshots/about-mobile-375px.jpg)

### Contact

![Contact desktop](screenshots/contact-desktop-1440px.jpg)

![Contact mobile](screenshots/contact-mobile-375px.jpg)

## Testing

Screenshots were captured using a headless rendering tool during development.

During testing, the tool did not correctly render responsive images using `srcset` on a standard `<img>` element. Some images appeared blank.

The images were therefore changed to use `<picture>` elements with separate 400w and 800w sources.

The `<picture>` implementation rendered correctly during testing.

Modern browsers including Chrome, Firefox, Edge, and Safari support both `<picture>` and `srcset`.

The screenshot tool also requires local file access to be explicitly enabled (`--enable-local-file-access`) to load the stylesheet and images from disk; without this flag it silently renders the page with no CSS and broken image icons, which looks like a styling bug but is a tool configuration issue, not a problem with the website itself.

## Changelog

This section records changes made for Part 1 and Part 2.

### Part 2 — Replaced placeholder photography with real images

* Replaced all seven placeholder content images with real photographs supplied by the site owner: `hero-banner`, `food-parcels`, `soup-kitchen`, `donation-dropoff`, `about-depot`, `contact-map`, and `volunteers`
* Cropped each photo to the exact aspect ratio and dimensions set out in `IMAGE_DIMENSIONS.txt` (16:9 for the hero banner, 4:3 for the rest), and regenerated matching `-400w`/`-800w` responsive variants for use in the existing `<picture>` elements
* Two of the supplied photos (`about-depot`, `contact-map`) carried a third-party charity's logo watermark in the corner; this was removed by sampling and blending clean background from elsewhere in the same photo, so no unrelated organisation's branding appears on the GreenLeaf site
* `logo.png` was left untouched, since it is GreenLeaf's own mark and has no photographic replacement
* Refreshed all desktop/tablet/mobile screenshot evidence across all five pages to reflect the real photography
* Discovered that the local screenshot tool (`wkhtmltoimage`) needs the `--enable-local-file-access` flag to load local CSS and image files at all in this environment; without it, pages rendered completely unstyled with broken image icons even though the site itself was unaffected — documented here so future evidence captures don't get mistaken for a real styling regression

### Part 2 — Muted badges, rounded nav tabs, rounded table box

* **Muted the status badges**: "Critical" and "Low" pills on This Week's Shelf changed from solid, bold-filled colours to a lighter, muted style — pale tinted background, coloured text, and a thin 1px matching-colour stroke instead of a heavy solid fill
* **Rounded the navigation into tabs**: nav links now have `border-radius: 999px` (pill-shaped) with a light background tint on hover/focus, replacing the old underline-only hover state
* **Rounded the schedule table box**: `.table-scroll` now uses the larger card radius (`--radius-card`) instead of the smaller default, with `overflow-y: hidden` added so the table's square header corners are properly clipped to the rounded wrapper
* Adjusted the mobile nav tab styling so the pill shape looks right when links stack full-width (uses `--radius-card` instead of a full pill on small screens)

### Part 2 — Background colour changed to white

* Changed `--paper` (page/header background, and the semi-transparent nav bar tint) from cream (`#efe8d3`) to crisp white (`#FFFFFF`)
* Card surfaces (`--card`, warm cream `#fbf7ea`) and the alternate section background (`--paper-warm`) were left unchanged, so cards now stand out more clearly against the white page instead of blending into a cream page
* Refreshed screenshot evidence to reflect the white background

### Part 2 — Reverted colour palette; header/nav layout change

* Reverted the colour palette back to the original forest green / wheat / tomato / cream theme (`--green: #2c4a32`, `--wheat: #d9a441`, `--tomato: #c1432e`, `--paper: #efe8d3`), replacing the mint/slate/emerald palette used briefly before
* Restored proper red (Critical) and amber (Low) semantics on the This Week's Shelf status pills, now using `--tomato` and a new `--wheat-tint` variable instead of the emerald-only pills
* Restored the original footer text/link colours and nav hover accent to match the reverted palette
* **Changed nav alignment**: logo stays anchored to the far left in the header (unchanged, was already left by default); navigation links are now right-aligned (`justify-content: flex-end`) instead of centered or left-aligned

### Part 2 — Colour Palette Update (superseded above)

* Replaced the colour palette with: `#F0FDF4` (mint background), `#1F2937` (slate text), `#10B981` (emerald primary), `#047857` (dark emerald)
* Updated all colour variables in `css/style.css` (`--paper`, `--ink`, `--green`, `--green-dark`, and derived tones `--paper-warm`, `--card`, `--ink-soft`, `--green-tint`, `--line`)
* Removed the previous amber/tomato accent colours; "Critical" and "Low" status indicators on the This Week's Shelf table are now shown as pill badges using only the new palette (dark emerald fill for Critical, light emerald tint for Low)
* Updated hardcoded colour values that were not using variables (nav background, footer text/links, box-shadow tint) to match the new palette
* Regenerated all desktop/tablet/mobile screenshots to reflect the new colours

### Part 2 — Font Pairing Updates

* Changed typography from a three-font system (Fraunces, Public Sans, IBM Plex Mono) to a two-font pairing
* First updated to Lora (headings) and Montserrat (body/labels)
* Final pairing updated to Lora (headings) and Roboto (body/labels)
* Updated the Google Fonts `<link>` on all five HTML pages
* Updated `--font-display`, `--font-body`, and `--font-mono` variables in `css/style.css`

### Part 2 — CSS, Responsive Design, and README

* Added `css/style.css`
* Linked the stylesheet to all five HTML pages
* Added CSS reset
* Added CSS variables for colours, typography, and spacing
* Added responsive typography using `rem` and `clamp()`
* Added Flexbox layouts
* Added CSS Grid footer layout
* Added hover, focus, and active states
* Added tablet breakpoint at 1024px
* Added mobile breakpoint at 640px
* Added responsive image variants
* Changed content images to `<picture>` elements
* Added `.service-cards`
* Added `.help-grid`
* Added `.contact-grid`
* Added `.media-row`
* Added `.table-scroll`
* Added screenshot evidence
* Updated README documentation
* Documented responsive-image testing issue and solution

### Part 1 Corrections

* Confirmed all five required pages are present
* Confirmed consistent header, navigation, and footer structure
* Confirmed appropriate image sizing using width attributes
* Retained explanatory HTML comments for major structural sections

### Part 1 — Initial Submission

* Created five-page semantic HTML website
* Added header, navigation, main content, and footer to each page
* Added placeholder imagery
* Created project proposal
* Created research folder containing competitor analysis, target audience research, content inventory, and photo shot list

## References

The full research and citation information is included in the Part 1 proposal and research folder.

### Research Sources

1. FoodForward SA. (n.d.). *About Us*. Available at:
   https://www.foodforwardsa.org/about-us/

2. Global FoodBanking Network. (2024). *How FoodForward SA Grew Into the Largest Food Bank in Sub-Saharan Africa: A Q&A with Andy Du Plessis*. 20 December. Available at:
   https://www.foodbanking.org/blogs/foodforward-sa-largest-food-bank-on-the-african-continent-qa-with-andy-du-plessis/

3. FoodForward SA. (n.d.). *Home*. Available at:
   https://foodforwardsa.org/home/

4. FoodForward SA. (n.d.). *Donate Food*. Available at:
   https://www.foodforwardsa.org/donate-food/

5. FoodForward SA. (n.d.). *Welcome to Food Forward SA*. Available at:
   https://foodforwardsa.org/welcome/

6. Ladles of Love. (n.d.). *About Our Charity*. Available at:
   https://ladlesoflove.org.za/about/

7. Ladles of Love. (n.d.). *Soup Kitchens for the Homeless*. Available at:
   https://ladlesoflove.org.za/projects/soup-kitchens/

8. News24. (2026). *One of SA's biggest child feeding schemes was once a small Cape Town soup kitchen*. 25 May. Available at:
   https://www.news24.com/life/food/news/one-of-sas-biggest-child-feeding-schemes-was-once-a-small-cape-town-soup-kitchen-20260525-0352

9. Wander Cape Town. (2023). *Interview with Danny Diliberto, CEO of Ladles of Love*. 29 October. Available at:
   https://wandercapetown.com/local-knowledge/interviews/danny-diliberto-ladles-of-love/

### Part 2 References

10. Mozilla Developer Network. (n.d.). *CSS Flexible Box Layout*. Accessed 16 September 2026.
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout

11. Mozilla Developer Network. (n.d.). *CSS Grid Layout*. Accessed 16 September 2026.
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

12. Mozilla Developer Network. (n.d.). *Responsive Images*. Accessed 16 September 2026.
    https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images

13. Mozilla Developer Network. (n.d.). *Using Media Queries*. Accessed 16 September 2026.
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries

14. Google Fonts. (n.d.). *Lora, Roboto*. Accessed 17 September 2026.
    https://fonts.google.com/

15. WEDE5020W. (2026). *Part 2 Guide*. Module handout.

## How to Preview Locally

### Option 1: Open Directly

Open `index.html` in a web browser.

### Option 2: VS Code Live Server

For live reloading and more reliable relative paths:

1. Open the project in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Testing Responsive Layouts

Resize the browser window or use the browser's developer tools/device toolbar.

Recommended viewport sizes:

* Desktop — 1440px
* Tablet — 768px
* Mobile — 375px

## Part 3

The `js/` folder is reserved for Part 3 functionality.

Planned functionality includes:

* Form validation
* Interactive navigation
* Client-side behaviour
* Other JavaScript functionality required by the module

At this stage, the forms use:

```html
action="#"
```

and do not submit data to a backend.
