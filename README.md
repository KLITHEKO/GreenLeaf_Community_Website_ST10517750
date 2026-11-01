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
8. [Part 3: JavaScript enhancements](#part-3-javascript-enhancements)
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
- JavaScript in the `js/` folder (Part 3)

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
├── robots.txt           Crawler instructions (SEO)
├── sitemap.xml         List of pages for search engines (SEO)
├── favicon.ico          Browser tab icon
├── .gitignore           Files git should ignore (such as .DS_Store)
├── css/
│   └── style.css        External stylesheet
├── data/
│   └── schedule.json    Session times loaded by the Services page
├── js/                  JavaScript (Part 3)
│   ├── accordion.js     FAQ accordion on Get Involved
│   ├── animations.js    Scroll reveal and animated counters
│   ├── lightbox.js      Photo gallery pop-up on Get Involved
│   ├── map.js           Interactive map on Contact
│   ├── menu.js          Mobile menu button
│   ├── schedule.js      Session finder (load, search, filter, sort) on Services
│   └── validation.js    Form validation messages
├── vendor/
│   └── leaflet/         Leaflet map library (self-hosted, BSD 2-Clause licence)
├── images/              Site images (descriptive names) and responsive variants
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

One Google Font is used for the whole site (Google Fonts, no date b):

| Font        | Used for                                                           |
| ----------- | ------------------------------------------------------------------ |
| Google Sans | Headings, site name, body text, navigation, form labels and tables |

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

The site uses media queries at 1024px and 640px for the layout, plus a third at 768px for the mobile menu (Mozilla Developer Network, no date d).

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
| 400w    | Screens up to 640px | `volunteers-packing-food-parcels-400w.jpg` |
| 800w    | Larger screens      | `volunteers-packing-food-parcels-800w.jpg` |

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

## Part 3: JavaScript enhancements

Part 3 adds interactivity with plain JavaScript (no frameworks). Each item is documented in the Changelog as it is completed.

| Brief item                          | Status                                                         |
| ----------------------------------- | -------------------------------------------------------------- |
| 2.1 Accordion, tabs or modal        | Done: FAQ accordion on the Get Involved page (`js/accordion.js`) |
| 2.1 Interactive map                 | Done: Leaflet and OpenStreetMap on the Contact page (`js/map.js`) |
| 2.1 Animations and transitions      | Done: scroll reveal and animated counters (`js/animations.js`), plus CSS hover transitions |
| 2.1 Advanced DOM manipulation       | Done: the menu button, lightbox, session table and form messages are built with JavaScript (`menu.js`, `lightbox.js`, `schedule.js`, `validation.js`) |
| 2.1 Gallery with lightbox           | Done: photo gallery on Get Involved opens in a lightbox (`js/lightbox.js`) |
| 2.2 Dynamic content loading         | Done: session times loaded from `data/schedule.json` with `fetch` (`js/schedule.js`) |
| 2.2 Search, filter and sort         | Done: "Find a session" on the Services page (`js/schedule.js`) |
| Form validation                     | Done: all five forms (`js/validation.js`) |
| SEO best practices                  | Done: see "SEO, page speed and security" below (3.1 on-page, 3.2 plan, 3.3 robots, sitemap, speed, security) |
| Deployment on a free platform       | Live on GitHub Pages                                           |
| Supporting change: shelf table      | Done: stock-level bars on Home (CSS only, no JavaScript)       |

For now, the forms use `action="#"` and do not submit data to a backend: a correct form shows a thank-you message and clears, but nothing is sent.

### SEO, page speed and security (brief 3.1, 3.2 and 3.3)

This section records every SEO item in the brief: what was done, where, and how it was checked. Items that cannot be completed from the code alone (backlinks, social profiles, Google Business Profile) are marked as a plan, not as done. All of it was added on 1 November 2026.

| Brief item | Status | Where |
| --- | --- | --- |
| 3.1 Keyword research | Done (method and limits explained below) | Keyword table in this section; wording in all five pages |
| 3.1 Title tags and meta descriptions | Done: unique on all five pages | `<head>` of every page |
| 3.1 Header tags | Done: one `<h1>` per page and no skipped levels | `services.html`, `get-involved.html`, `contact.html` fixed |
| 3.1 Image optimisation | Done: descriptive file names, accurate alt text, sizes set | `images/`, all pages |
| 3.1 URL structure | Done: clean names, canonical links | All pages |
| 3.1 Internal linking | Done: descriptive links between all pages | Body text of all pages |
| 3.1 Mobile friendliness | Done and tested from 320px to 768px | `css/style.css`, all pages |
| 3.2 Backlinks | Plan only: needs the real organisation | Off-page plan below |
| 3.2 Social media | Partly done: share previews built; accounts still to be created | `<head>` Open Graph tags, Contact page |
| 3.2 Local SEO | On-site done; Google Business Profile still to do | Structured data on Home and Contact, map |
| 3.3 `robots.txt` | Done | `robots.txt` |
| 3.3 `sitemap.xml` | Done | `sitemap.xml` |
| 3.3 Page speed | Done: page weight cut by 36% to 70% on four of five pages | Images, loading attributes |
| 3.3 Security | Done within what a static GitHub Pages site allows | Content Security Policy, safe links, no inline code |

#### 3.1 Keyword research

**Method.** On 1 November 2026 I ran these searches and read the titles and snippets of the results to see which words real organisations and news stories use: "food bank Randburg Johannesburg food parcels" and "volunteer soup kitchen Johannesburg donate food". The results used the terms *food bank*, *food parcels*, *soup kitchen*, *donate food*, *volunteer*, *Johannesburg* and *Randburg* (for example a "Gauteng sets up food banks" news item, a Business Day story about Foodbank Johannesburg closing, a ForGood.co.za donation listing and a Randburg Sun story). Google's own guide says to think about the words a user might search for, and warns against repeating the same words over and over (Google Search Central, no date g), so each keyword is used where it reads naturally.

**Limits, stated honestly.** I did not have access to a keyword tool such as Google Keyword Planner (it needs an account), so there are no search-volume numbers. The search tool I used is US-based, so results may differ from what someone in Johannesburg sees. The keywords were chosen by what people would search for when they need or want to give food help, not by measured volume.

| Keyword | Why it was chosen | Appears in (number of times in the visible text) |
| --- | --- | --- |
| food bank | The plain name of what we are; the most direct match for someone looking for help or wanting to give | Home 4, About Us 3, Our Services 2, Get Involved 3, Contact 3 |
| Randburg | The depot's suburb: people search by area (local search) | Home 2, About Us 2, Our Services 4, Get Involved 2, Contact 3 |
| Johannesburg | The wider city, for people who do not know the suburb | Home 1, About Us 1, Our Services 1 |
| food parcel(s) | What recipients ask for | Home 3, Our Services 4, Get Involved 3, Contact 1 |
| soup kitchen | A distinct service people search for by name | Home 2, About Us 1, Our Services 3, Get Involved 3, Contact 1 |
| donate / donation | What givers search for | Home 4, About Us 5, Our Services 4, Get Involved 10, Contact 2 |
| volunteer | What helpers search for | Home 4, About Us 6, Our Services 3, Get Involved 5, Contact 1 |
| food insecurity | The problem we address; used in headings and intro text | Home 1, About Us 2, Our Services 1, Get Involved 1 |

#### 3.1 Title tags and meta descriptions

Each page has its own title and description. Google's guidance is to avoid repeated or boilerplate titles, keep them descriptive and concise, and add the site name at the beginning or end of inner-page titles (Google Search Central, no date a). For descriptions it recommends a short, accurate summary of that specific page (Google Search Central, no date b). Google notes that it may still rewrite what it shows.

| Page | Title tag | Chars | Meta description | Chars |
| --- | --- | --- | --- | --- |
| Home | Community Food Bank in Randburg \| GreenLeaf | 43 | GreenLeaf is a volunteer-run food bank in Randburg, Johannesburg. Get a food parcel, volunteer, donate food or partner with us to fight hunger locally. | 151 |
| About Us | About GreenLeaf \| Volunteer-Run Food Bank, Randburg | 51 | Learn how GreenLeaf began, what we believe in and how our volunteers collect, sort and share food with families in Randburg and Johannesburg. | 141 |
| Our Services | Food Parcels, Soup Kitchen & Food Donations \| GreenLeaf | 55 | See when and where GreenLeaf hands out weekly food parcels, serves hot meals at the weekend soup kitchen and collects food donations in Randburg. | 145 |
| Get Involved | Volunteer, Donate Food or Request a Food Parcel \| GreenLeaf | 59 | Volunteer at our Randburg food bank, donate food or funds, partner your business or request a food parcel. Four simple forms, no experience needed. | 147 |
| Contact | Contact GreenLeaf Food Bank \| Randburg, Johannesburg | 52 | Find the GreenLeaf depot at 14 Marlboro Drive, Randburg. Opening hours, phone, email, an interactive map and a message form. | 124 |

- Four titles start with what the page is about and end with "| GreenLeaf". The Contact title carries the name inside it ("Contact GreenLeaf Food Bank | Randburg, Johannesburg"). All are 59 characters or fewer.
- No two titles or descriptions are the same (checked by a script).
- Each page also has `<link rel="canonical">`, `<meta name="robots" content="index, follow">` and `<meta name="theme-color">`.

#### 3.1 Header tags

Each page has exactly one `<h1>` and the levels never skip (an `<h2>` is never followed directly by an `<h4>`, and the first heading under the `<h1>` is an `<h2>`). Google says heading order does not affect how it ranks a page, so this was done for readers and for screen-reader users who move through a page by headings (Google Search Central, no date g).

| Page | Heading outline |
| --- | --- |
| Home | h1: Fighting food insecurity in our community<br>h2: GreenLeaf at a glance<br>h2: This week's shelf<br>h2: What we do<br>h3: Weekly food parcel distribution<br>h3: Weekend soup kitchen<br>h3: Donation drop-off & collection |
| About Us | h1: About GreenLeaf<br>h2: Our mission<br>h2: Our vision<br>h2: Our values<br>h2: How we started<br>h2: Our team |
| Our Services | h1: Our services<br>h2: Find a session<br>h2: 1. Weekly food parcel distribution<br>h2: 2. Weekend soup kitchen<br>h2: 3. Donation drop-off & collection<br>h2: Who we help |
| Get Involved | h1: Get involved<br>h2: See what volunteering looks like<br>h2: Donate funds or food<br>h2: Volunteer with us<br>h2: Partner your business<br>h2: Request a food parcel<br>h2: Frequently asked questions<br>h3: Do I need paperwork to get a food parcel?<br>h3: When and where are parcels handed out?<br>h3: What can I donate?<br>h3: Can my business set up a regular pickup?<br>h3: Do I need experience to volunteer?<br>h3: Where does a cash donation go? |
| Contact | h1: Contact us<br>h2: Visit<br>h2: Reach us<br>h2: Send us a message<br>h2: Find the depot on the map<br>h2: Follow GreenLeaf |

**What was fixed:** on Our Services, Get Involved and Contact the section titles were `<h3>` straight under the `<h1>`, which skips a level. They are now `<h2 class="subheading">`. The new `.subheading` rule in `css/style.css` keeps the smaller size the old `<h3>` had, so nothing changed visually.

#### 3.1 Image optimisation

Google recommends descriptive file names instead of generic ones such as `image1.jpg`, and says alt text is the most important attribute for image metadata, written descriptively without keyword stuffing (Google Search Central, no date e).

The old names did not match the photos (for example `contact-map` was a photo of volunteers and `hero-banner` was a black-and-white photo of hands). I opened every photo and renamed it to describe what it shows. Each photo has an original, a `-400w` (phones) and an `-800w` version.

| Old name | New name | Alt text now used |
| --- | --- | --- |
| `about-depot` | `volunteers-handing-out-food-at-depot` | Three GreenLeaf volunteers in white T-shirts handing a cup of water to a visitor at a food table |
| `contact-map` | `volunteers-unloading-food-aid-boxes` | Volunteers unloading boxes of food aid from a van at a community distribution table |
| `food-parcels` | `volunteers-packing-food-parcels` | Three volunteers packing boxes of food aid beside a van |
| `hero-banner` | `community-hands-together` | A circle of hands stacked together in a black-and-white photo of community members and children |
| `volunteers` | `volunteer-with-school-children` (a 400px version was added) | A GreenLeaf volunteer in a blue T-shirt facing a group of children in school uniforms |
| `donation-dropoff` | `canned-food-donation-crate` | A crate of canned food being sorted by gloved volunteers at the GreenLeaf depot |
| `soup-kitchen` | `hot-meals-soup-kitchen` | Rows of hot meals in takeaway containers at the weekend soup kitchen |
| `logo.png` (2000 x 2000 pixels, 205 KB) | `greenleaf-logo-96.png` (96 x 96, 11 KB); the original is kept as `greenleaf-logo-original.png` | Empty on purpose: the logo sits beside the site name, so it is decoration |

Other image changes: the Contact page photo is no longer described as a map (the real map is now interactive, see the changelog); every `<img>` has `width` and `height` so the page does not jump while loading; the top photo on each page has `fetchpriority="high"`; photos lower on the page have `loading="lazy"` (see Page speed). Google recommends `<picture>` or `srcset` with an `<img>` fallback for responsive images (Google Search Central, no date e), which the site already used.

New icon files: `favicon.ico`, `images/favicon-32.png` and `images/apple-touch-icon.png`, all made from the logo.

#### 3.1 URL structure

| Page | URL |
| --- | --- |
| Home | `https://klitheko.github.io/GreenLeaf_Community_Website_ST10517750/index.html` |
| About Us | `.../about.html` |
| Our Services | `.../services.html` |
| Get Involved | `.../get-involved.html` |
| Contact | `.../contact.html` |

- The names are readable words in lower case, separated by hyphens, with no numbers, IDs or query strings. Google recommends readable words instead of long ID numbers, and hyphens instead of underscores (Google Search Central, no date f).
- Google treats `/APPLE` and `/apple` as different URLs, so all file names are lower case and every link uses the same spelling (Google Search Central, no date f).
- Each page has a `<link rel="canonical">` pointing to its own `.html` address, so there is one preferred address per page.
- The repository name is part of every address because this is a GitHub Pages project site. That part cannot be shortened without a custom domain.
- Extension-free addresses (for example `/about`) were not forced, because they would need server settings that GitHub Pages does not offer.

#### 3.1 Internal linking

Links use descriptive text that says where they go (Google's guide says anchor text tells users and Google about the linked page: Google Search Central, no date g).

| From | Link text | To |
| --- | --- | --- |
| Every page (header) | Home, About Us, Our Services, Get Involved, Contact, Donate | The five pages and `get-involved.html#donate` |
| Home, hero | Volunteer with us, Partner your business, Request a food parcel | The matching forms on Get Involved |
| Home, "What we do" cards | Weekly food parcel distribution, Weekend soup kitchen, Donation drop-off & collection | `services.html#food-parcels`, `#soup-kitchen`, `#donation-dropoff` |
| Home, under the cards | See all our services and schedules, About GreenLeaf, Find the depot | Services, About, Contact |
| About, end of "Our team" | Volunteer, donate or partner with us; what our services offer; contact the depot | Get Involved, Services, Contact |
| Services, intro of each service | Request a food parcel; Volunteer with us; partner with us; Contact the depot | `get-involved.html#request-parcel`, `#volunteer`, `#partner`, and Contact |
| Get Involved, intro | what our services do; contact us | Services, Contact |
| Contact, intro and "Visit" | Get involved; services page | Get Involved, Services |

#### 3.1 Mobile friendliness

- Every page has `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- The layout is responsive (breakpoints at 1024px, 768px and 640px) and photos use `<picture>` so phones download the smaller 400px file.
- **Tested:** all five pages at 320, 360, 375, 414 and 768px wide. None scroll sideways (only tables inside their own scroll box and the map are allowed to be wider). The old sideways scroll at 320px on Home, Services and Contact no longer happens.
- **Fixed while testing:** form fields and the menu links were 38 to 40px tall, below the usual 44px touch target, and form text was about 14px, which makes iPhones zoom in when a field is tapped. On screens 640px and narrower, form fields are now at least 44px tall with 16px text, and the mobile menu links are at least 44px tall.
- The map does not capture page scrolling on a phone (scroll-wheel zoom is off), so it never traps a finger that is scrolling down the page.

#### 3.2 Off-page SEO (plan, not done by code)

Backlinks, social media and Google Business Profile happen outside the website files, and they need the real organisation's accounts and permissions, so this is a plan with an honest status.

| Item | Status | What to do |
| --- | --- | --- |
| Backlinks | Plan only | Ask the 18 partner businesses to link to the site from their own pages; ask local schools, churches, community groups and the local newspaper (for example the Randburg Sun) to mention and link to it; list the organisation on donation and non-profit directories (ForGood.co.za appeared in my keyword searches; I have not checked its listing rules). Aim for a few relevant links from real local sites. |
| What to avoid | Rule | Google's spam policy treats buying or selling links for ranking, "link to me and I'll link to you" swaps and automated link building as link spam. Paid or sponsored links are acceptable only when marked `rel="nofollow"` or `rel="sponsored"` (Google Search Central, no date i). |
| Social media | Partly done | **Done:** every page has Open Graph and Twitter card tags (`og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`), so a shared link shows the page title, description and a photo. **Still to do:** create the Facebook page, Instagram account and WhatsApp group, then replace the three `#` links in "Follow GreenLeaf" on the Contact page with the real addresses. I did not invent account links. |
| Local SEO (on the site) | Done | The same address, phone number and email are used in the footer, the Contact page and the structured data. Home and Contact carry JSON-LD structured data of type `NGO` with address, phone, email, opening hours (Monday to Friday, 08:00 to 17:00) and `areaServed` (Randburg, Alexandra, Diepsloot, Johannesburg). The Contact page has an interactive map. Google lists `name` and `address` as required and `telephone`, `geo`, `url` and `openingHoursSpecification` as recommended for local business markup (Google Search Central, no date h). |
| Local SEO (off the site) | Still to do | Claim a Google Business Profile with the same name, address and phone number as the site. This is my recommendation; I could not open Google's page about it, so I am not quoting it. |

**Placeholders to replace before this is treated as real:** the phone number (`+27 82 000 0000`), the email address, the street address and the map coordinates (`-26.09441, 28.00673`, which are approximate and only point to Randburg) are placeholders. The coordinates live in two places: `js/map.js` (`depot`) and the JSON-LD block on `index.html` and `contact.html`.

#### 3.3 `robots.txt`

`robots.txt` is in the project root:

```
User-agent: *
Allow: /
Disallow: /screenshots/

Sitemap: https://klitheko.github.io/GreenLeaf_Community_Website_ST10517750/sitemap.xml
```

- All pages may be crawled. Only `/screenshots/` is skipped, because the screenshots are marker evidence and not site content.
- The CSS, JavaScript and data files are **not** blocked, so search engines can render the pages the way visitors see them.
- Google says `robots.txt` mainly manages crawler traffic; it is "not a mechanism for keeping a web page out of Google" and does not secure content (Google Search Central, no date c). So nothing private is protected by it.
- **Limit:** search engines read `robots.txt` from the top of a website (`klitheko.github.io/robots.txt`), not from inside a project folder. On a GitHub Pages project site the file in this repository is therefore for the marker and for a future custom domain. This location rule is general knowledge, not something I read on the Google page.

#### 3.3 `sitemap.xml`

`sitemap.xml` lists the five pages with their full web addresses and a `<lastmod>` date of 2026-11-01.

- Google asks for fully qualified addresses (Google Search Central, no date d), which is what the file uses.
- Google ignores `<priority>` and `<changefreq>`, and only uses `<lastmod>` when it is accurate (Google Search Central, no date d), so only `<loc>` and `<lastmod>` are included. Update `<lastmod>` whenever a page changes in a meaningful way.
- It is referenced from `robots.txt`, which Google lists as one way to point to a sitemap (Google Search Central, no date d). It can also be submitted in the Search Console "Sitemaps" report.

#### 3.3 Page speed

**Method.** I served the site from a local web server and loaded each page in a headless Chromium browser, scrolling to the bottom so lazy images load. I added up the size of every file that came from the site itself. Google Fonts is excluded (it loads from Google). The numbers are uncompressed file sizes; GitHub Pages also compresses text files, so real downloads are a little smaller for HTML, CSS and JavaScript.

| Page | Desktop before | Desktop after | Phone (375px) before | Phone (375px) after |
| --- | --- | --- | --- | --- |
| Home | 506 KB | 326 KB (-36%) | 335 KB | 155 KB (-54%) |
| About Us | 303 KB | 121 KB (-60%) | 259 KB | 77 KB (-70%) |
| Our Services | 452 KB | 278 KB (-38%) | 315 KB | 141 KB (-55%) |
| Get Involved | 414 KB | 238 KB (-43%) | 414 KB | 187 KB (-55%) |
| Contact | 318 KB | 304 KB (-4%) | 259 KB | 246 KB (-5%) |

**What made the difference**

1. **Logo:** `logo.png` was 2000 x 2000 pixels (205 KB) but is shown at 40 x 40 on every page. It is now 96 x 96 (11 KB). This alone saves about 194 KB on every page.
2. **Lazy loading:** photos below the first screen have `loading="lazy"` and `decoding="async"`, so the browser fetches them only when the visitor scrolls near them. Chrome's guidance is to lazy-load images below the fold, never the main (largest) image, and not to combine `fetchpriority="high"` with `loading="lazy"` (Chrome for Developers, no date).
3. **Main photo first:** the top photo on each page has `fetchpriority="high"` and is not lazy.
4. **No layout jumps:** every image has `width` and `height`.
5. **Font connection started early:** `<link rel="preconnect">` for both `fonts.googleapis.com` and `fonts.gstatic.com`, and the font link already uses `display=swap` so text shows straight away.
6. **Code only where needed:** Leaflet (about 160 KB with its images) loads only on Contact, `schedule.js` only on Services, `validation.js` only on the two pages with forms. All scripts sit at the end of `<body>` so they never block the first paint.
7. **Self-hosted Leaflet:** no extra request to another company's server for the map library.

**Not done, and why:** the HTML, CSS and JavaScript are not minified, so they stay readable for marking and for a beginner to edit. Browser caching times cannot be set on GitHub Pages. The Contact page is the exception to the savings: it gained the map library, so it is about the same size as before even though its photo got lighter.

#### 3.3 Security

GitHub Pages serves static files and does not let a site set its own HTTP headers, so the protections below are the ones that can be done in the HTML and JavaScript.

| Measure | Where | What it protects against |
| --- | --- | --- |
| **Content Security Policy** (`<meta http-equiv="Content-Security-Policy">`): only this site's own scripts, plus Google Fonts for styles and fonts, `data:` and own-site images, no plugins (`object-src 'none'`), forms may only post to this site (`form-action 'self'`), `<base>` locked (`base-uri 'self'`). The Contact page also allows images from `tile.openstreetmap.org` for the map. | `<head>` of every page | Injected or third-party scripts running on the page (cross-site scripting). MDN explains that CSP controls which resources the browser may load and helps protect against cross-site scripting (Mozilla Developer Network, no date o). |
| **No inline scripts or `onclick` attributes** | All pages (checked by a script) | Lets the policy above block all injected script. The only inline `<script>` is the JSON-LD data block, which is data and does not run. |
| **Libraries kept on this site** | Leaflet in `vendor/leaflet/` | No dependency on another company's server staying safe; a changed CDN file cannot alter the site. Leaflet's licence (BSD 2-Clause) is included as `vendor/leaflet/LICENSE.txt`. |
| **Referrer policy** `strict-origin-when-cross-origin` | `<head>` | Limits what other sites learn about which page a visitor came from. It is not set to a stricter value because the OpenStreetMap tile policy says not to use a restrictive Referrer-Policy and to keep a valid Referer (OpenStreetMap Foundation, no date). |
| **`rel="noopener noreferrer"` on every external link** | Contact page map links, Leaflet credit and OpenStreetMap credit | A page opened from our site cannot reach back into ours. |
| **Safe handling of text** | `validation.js`, `schedule.js`, `lightbox.js`, `menu.js` | Text typed by a visitor or loaded from JSON is put on the page with `textContent` and `createElement`, never `innerHTML`, so it can never run as code. The only HTML string is the fixed map popup written by us. |
| **Form limits** | All forms | `maxlength`, `type="email"`, `type="tel"` with a pattern, and `min` on the donation amount limit what can be entered. This is a convenience for honest visitors. MDN is clear that client-side validation is not a security measure because it can be bypassed, so a real server must validate again (Mozilla Developer Network, no date m). |
| **No server and no secrets** | Whole site | The forms do not send data anywhere (`action="#"`), so there is no database or password to attack, and no keys, tokens or passwords are stored in the repository. |
| **HTTPS** | GitHub Pages setting | `github.io` sites are served over HTTPS, and "Enforce HTTPS" redirects any `http://` visit to HTTPS (GitHub, no date). Make sure the box is ticked: repository Settings, then Pages, then Enforce HTTPS. |
| **`.gitignore`** | Project root | Keeps computer-generated files such as `.DS_Store` (which lists folder contents) out of the repository. |

**What cannot be done here (honest limits)**

- The headers `X-Content-Type-Options`, `Strict-Transport-Security`, `Permissions-Policy` and `frame-ancestors` can only be set by a server. `frame-ancestors` (protection against the site being embedded in another page) does not work in a meta tag (content-security-policy.com, no date). On a real host, or behind a service such as Cloudflare, these would be added.
- A CSP in a meta tag only covers what loads after the tag, so it sits at the top of `<head>`, before any other file (content-security-policy.com, no date).
- Google Fonts is trusted for styles and fonts, so a problem at Google would affect the page. The alternative, hosting the font files myself, was not done because it needs permission checks on the font files.
- This is not a penetration test.


---

## Changelog

Newest changes first.

### Part 3: Form validation (all five forms)

- **Date implemented:** 1 November 2026
- **What:**
  - Every field on the five forms now has rules: required, minimum length, valid email, a South African phone number, and a donation amount of at least R10.
  - When a field is wrong, a short red message appears under it and the field gets a red border. When the form is correct, it is cleared and a green thank-you message appears under the button.
- **Why:** The brief asks for form validation. Before this, only the Contact email field was marked `required`.
- **Files changed:**
  - `contact.html` and `get-involved.html`: validation attributes on every field (listed below), a one-line "All fields are required." note in each form, a `data-success` message on each `<form>`, and the `validation.js` script tag.
  - `js/validation.js` (new): shows and clears the messages. One script serves all five forms.
  - `css/style.css`: new `.form-note`, `.error-message`, `[aria-invalid="true"]` and `.form-success` rules.
  - `README.md`: this entry.
- **The rules, field by field:**

| Form | Field | Rules |
| --- | --- | --- |
| Contact | Name | required, 2 to 80 characters |
| Contact | Email | required, valid email, up to 120 characters |
| Contact | Subject | required (cannot stay on "Select a topic") |
| Contact | Message | required, 10 to 1000 characters |
| Donate | Amount (ZAR) | required, number, minimum 10 |
| Donate | Full name, Email | as above |
| Volunteer | Name | required, 2 to 80 characters |
| Volunteer | WhatsApp number | required, pattern `(\+27\|0)[0-9 ]{9,12}` (for example 082 000 0000, +27 82 000 0000 or 0820000000) |
| Volunteer | Area | required (choose one) |
| Partner | Business name | required, 2 to 100 characters |
| Partner | Contact email | required, valid email |
| Partner | Frequency | required (choose one) |
| Request a parcel | Name, WhatsApp number | as for Volunteer |
| Request a parcel | Nearest area | required, 2 to 80 characters |

- **How it works:**
  - **Two layers.** The HTML attributes (`required`, `minlength`, `type="email"`, `pattern`, `min`) do the checking. Without JavaScript the browser's own validation still works. This is the approach MDN recommends starting with (Mozilla Developer Network, no date m).
  - **The script.** `form.noValidate = true` switches off the browser's pop-up bubbles. For each field the script calls `field.checkValidity()` and reads `field.validity` (`valueMissing`, `typeMismatch`, `tooShort`, `patternMismatch`, `rangeUnderflow`) to choose a message. MDN documents this Constraint Validation API and the `novalidate` approach for custom messages (Mozilla Developer Network, no date m).
  - **When it checks.** When the visitor leaves a field (`blur`), again as they type once the field has an error (so the message disappears as soon as it is fixed), and for all fields on submit. On submit, the first wrong field gets the focus.
  - **Accessibility.** A wrong field gets `aria-invalid="true"` and `aria-describedby` pointing to its message, and the thank-you box has `role="status"` so screen readers announce it. The error colour is `--tomato` (#c1432e, about 5:1 contrast on white) and is paired with the message text, so colour is not the only signal.
  - **Safety.** Messages are written with `textContent`, never `innerHTML`.
  - **No server.** The forms still have `action="#"`, so a valid form shows the thank-you message and clears; nothing is sent anywhere. Real sending needs a server, which this project does not have.
- **How to test:** On Contact, press "Send message" with the form empty: four red messages appear and the cursor jumps to Name. Type `A` in Name and click away: "Please enter at least 2 characters." Type `abc` in Email: "Please enter a valid email address." Fill everything correctly and send: a green thank-you message appears and the form clears. On Get Involved, try `12345` in a WhatsApp number (rejected) and `082 000 0000` (accepted), and `5` as a donation amount ("The minimum is 10."). In the browser's settings turn JavaScript off: the browser's own validation bubbles appear instead.
- **Tested:** 32 automated checks, including every phone format above, each form on Get Involved, the success messages and JavaScript switched off.

### Part 3: Session finder with dynamic loading, search, filter and sort (Services page)

- **Date implemented:** 1 November 2026
- **What:** A new "Find a session" section at the top of the Services page. It loads every food parcel, soup kitchen and drop-off time from a data file and lets the visitor search by word, filter by service and by day, and sort by day, start time, location or service. A line says "Showing 4 of 9 sessions", and a "Clear filters" button appears if nothing matches.
- **Why:** The brief asks for dynamic content loading (2.2) and search, filter and sort (2.2). The schedule is the content on the site that visitors most need to look up.
- **Files changed:**
  - `data/schedule.json` (new): the nine sessions (service, day, day number, start, end, location). To change a time, edit this file; the page updates by itself.
  - `js/schedule.js` (new): loads the file and runs the search, filter and sort.
  - `services.html`: the `#session-finder` section (hidden until it works) and the script tag.
  - `css/style.css`: `.finder-controls`, `#finder-count`, `#finder-empty button` and `.visually-hidden` rules.
  - `README.md`: this entry.
- **How it works:**
  - **Dynamic loading.** `fetch("data/schedule.json")` returns a promise. `fetch` only fails on network problems, so the script checks `response.ok` itself before reading the JSON with `response.json()` (Mozilla Developer Network, no date n).
  - **Filling the lists.** The "Service" and "Day" lists are built from the data, so a new service in the file appears in the list without editing the HTML. Days are put in week order using `dayNumber`.
  - **Filter and search.** A session is shown when it matches the typed word (in service, day, time or location, ignoring capitals), the chosen service and the chosen day.
  - **Sort.** Each option sorts by one key and breaks ties with a second key (for example start time, then day).
  - **Drawing the table.** The table body is emptied and rebuilt with `insertRow` and `insertCell`, filling each cell with `textContent`. The count line is an `aria-live="polite"` region, so screen readers hear "Showing 2 of 9 sessions".
  - **Falls back safely.** The finder is `hidden` in the HTML. It only appears, and hides the two fixed schedule tables it replaces, after the data has loaded. If JavaScript is off or the file cannot be loaded, the fixed tables stay visible, so the schedule is never lost. It also means search engines still see the schedule in the page's HTML.
- **How to test:** Open Our Services from the live site (or a local server such as VS Code Live Server; `fetch` does not work when a page is opened directly from the folder, because browsers block it). Under "Find a session": choose "Soup kitchen" (2 sessions), choose Tuesday (2), type `alex` (1: Alexandra), type `zzz` (message and Clear filters), and try each "Sort by" option.
- **Tested:** 16 automated checks, including a simulated failed download and JavaScript switched off.

### Part 3: Interactive map (Contact page)

- **Date implemented:** 1 November 2026
- **What:** The Contact page has a new "Find the depot on the map" section with a map you can drag and zoom, a pin for the depot and a popup with the address and opening hours.
- **Why:** The brief asks for an interactive map (2.1) and it supports local SEO.
- **Files changed:**
  - `vendor/leaflet/` (new): the Leaflet 1.9.4 library (`leaflet.js`, `leaflet.css`, the marker and control images and its licence).
  - `js/map.js` (new): builds the map.
  - `contact.html`: the `#find-us` section and `#map` box, the Leaflet stylesheet link, the two script tags, and a Content Security Policy that also allows map pictures from `tile.openstreetmap.org`.
  - `css/style.css`: `#map` rules (22rem high, rounded, light green while loading).
  - `README.md`: this entry.
- **How it works:**
  - **Library and tiles.** Leaflet draws the map. The map pictures (tiles) come from OpenStreetMap, as in Leaflet's own quick-start approach (Leaflet, no date). The credit "© OpenStreetMap contributors" is shown on the map, as the OpenStreetMap tile policy requires; the policy also forbids bulk downloading and requires the browser to send a valid Referer, which is why the referrer policy was not made stricter (OpenStreetMap Foundation, no date).
  - **Self-hosted.** Leaflet is copied into `vendor/leaflet/` instead of loaded from another company's server. This avoids an extra outside request and an outside script (see Security).
  - **`js/map.js`.** If the `#map` box and Leaflet both exist, it empties the box (removing the fallback link), creates the map with `L.map`, centres it with `setView` at zoom 15, adds the tile layer with the attribution text, and adds a marker with `bindPopup`. The depot position is one line, `var depot = [-26.09441, 28.00673];`. These coordinates are approximate (central Randburg), so change them to the real spot.
  - **Scroll-wheel zoom is off** (`scrollWheelZoom: false`), so the map does not capture the page scroll on a phone or trackpad. Zoom uses the + and - buttons. Leaflet's built-in keyboard controls still work.
  - **Without JavaScript or if the map fails**, the box shows a plain link to the area on OpenStreetMap.
  - **Safe links.** The two credit links carry `rel="noopener noreferrer"`.
- **How to test:** Open Contact and scroll to the map. Drag it, press + and -, click the pin (a popup shows the address). Check the credit in the bottom-right corner. On a phone, scroll the page with your finger across the map: the page should keep scrolling.
- **Tested:** 9 automated checks (map created, pin, credit, tile requests, zoom button, popup text, size, no errors, JavaScript-off fallback). The test environment cannot download real tiles, so I could not view the street map itself; please check it once on the live site.

### Part 3: On-page SEO and mobile friendliness (brief 3.1)

- **Date implemented:** 1 November 2026
- **What:**
  - Unique title tags, meta descriptions, canonical links, robots meta, Open Graph and Twitter card tags on all five pages.
  - Keyword wording added to titles, descriptions, headings and opening text (see the keyword table above).
  - Heading levels fixed so no level is skipped.
  - Photos renamed to describe what they show, alt text rewritten to match the actual photo, favicon and phone icon added.
  - Links added between pages with descriptive text.
  - Structured data (JSON-LD, type `NGO`) on Home and Contact.
  - Form fields and the mobile menu made easier to tap.
- **Why:** The brief's 3.1 lists keyword research, title tags and descriptions, header tags, image optimisation, URL structure, internal linking and mobile friendliness.
- **Files changed:**
  - All five HTML pages: new `<head>`, headings, image tags and alt text, internal links, header logo file name.
  - `images/`: files renamed (full table above), new `greenleaf-logo-96.png`, `favicon-32.png`, `apple-touch-icon.png`; `favicon.ico` in the project root.
  - `css/style.css`: `.subheading` rule; the 640px rule for 44px form fields with 16px text; 44px menu links in the 768px menu rules.
  - `README.md`: this entry and the "SEO, page speed and security" section.
- **How it works:** The full tables (titles and descriptions with their lengths, heading outlines, image names and alt text, URLs, links) are in the "SEO, page speed and security" section above. Two decisions worth noting: the Home page hero keeps its three action links and has no extra links in its text (you asked for it to stay uncluttered), so the links to each service sit on the three "What we do" card titles instead; and the Contact page photo was never a map, so it now has an accurate alt text and the real interactive map sits lower on the page.
- **How to test:** In the browser, view the page source of any page and look in `<head>`. Paste a page link into a social app or a link preview tool to see the share card (it works once the site is live). Look at the browser tab for the icon. On a phone-sized window, open the menu and tap through the links and form fields.
- **Tested:** 109 automated checks (105 across the five pages, plus the structured data, `robots.txt` and `sitemap.xml`): title and description lengths and uniqueness, canonical and Open Graph tags, one `<h1>` and no skipped heading levels, every image loads and has `width`, `height` and alt text, no generic image names, every internal link resolves, JSON-LD parses, no broken files, no console errors. Mobile: no sideways scroll at 320, 360, 375, 414 and 768px; form fields and menu links at least 44px tall.

### Part 3: Off-page SEO plan, robots.txt and sitemap.xml (brief 3.2 and 3.3)

- **Date implemented:** 1 November 2026
- **What:** Added `robots.txt` and `sitemap.xml`, the off-page SEO plan (backlinks, social media, local SEO) with an honest status for each item, and local-SEO markup on Home and Contact.
- **Why:** The brief lists backlinks, social media and local SEO under 3.2, and a robots file and a sitemap under 3.3.
- **Files changed:**
  - `robots.txt` (new) and `sitemap.xml` (new), both in the project root.
  - `index.html` and `contact.html`: JSON-LD structured data in `<head>`.
  - `README.md`: this entry and the plan in the "SEO, page speed and security" section.
- **How it works:** The contents and reasons for both files, and the limits (where search engines look for `robots.txt`), are in the "SEO, page speed and security" section above. The structured data uses `@type: NGO` with address, phone, email, opening hours and `areaServed`. The map coordinates are marked in the code as approximate.
- **What is still to be done by the organisation:** create the social media accounts and replace the three `#` links on the Contact page; ask partners and local sites for links; claim a Google Business Profile; submit `sitemap.xml` in Google Search Console. These cannot be done from the website files.
- **How to test:** Open `/robots.txt` and `/sitemap.xml` on the live site (they should show as plain text and XML). Run Google's Rich Results Test on the Home or Contact address to see the structured data (a tool outside this project that I have not run).
- **Tested:** the sitemap is valid XML and lists all five pages; `robots.txt` has the required lines; both JSON-LD blocks parse and include an address and opening hours.

### Part 3: Page speed (brief 3.3)

- **Date implemented:** 1 November 2026
- **What:** The pages download 36% to 70% less data on four of the five pages (the Contact page stays about the same because it gained the map library). Measured numbers are in the table in the "SEO, page speed and security" section.
- **Why:** The brief asks for optimised loading speed.
- **Files changed:** the logo files in `images/`; `loading="lazy"`, `decoding="async"` and `fetchpriority="high"` attributes and `preconnect` links in the HTML; the font link keeps `display=swap`; `README.md`.
- **How it works:** See the list of seven changes in the "Page speed" part of the SEO section. The biggest single saving is the logo: a 2000 x 2000 pixel, 205 KB file displayed at 40 x 40 pixels is now 96 x 96 pixels at 11 KB.
- **How to test:** Open the browser's developer tools, choose the Network tab, reload a page and read the total at the bottom. Then scroll down: the lower photos load only as you get near them.
- **Tested:** page weights before and after were measured with the same script at 1280px and 375px wide (method in the SEO section).

### Part 3: Security measures (brief 3.3)

- **Date implemented:** 1 November 2026
- **What:** A Content Security Policy and a referrer policy on every page, safe settings on external links, a rule that no page contains inline scripts, the map library hosted on this site, and a `.gitignore` for computer-made files.
- **Why:** The brief asks for security measures to protect the website from attacks.
- **Files changed:** the `<head>` of all five pages; `js/map.js`; `vendor/leaflet/`; `.gitignore` (new); `README.md`.
- **How it works:** See the Security table and the "What cannot be done here" list in the SEO section. The policy tells the browser to load scripts only from this site, which blocks most injected-script attacks. The honest limit is that GitHub Pages does not allow custom HTTP headers.
- **One step for you:** `.DS_Store` was already committed before `.gitignore` existed. To stop tracking it, run `git rm --cached .DS_Store` once and commit. Also tick "Enforce HTTPS" in the repository's Pages settings.
- **How to test:** Open the developer tools console on every page: there should be no red "Refused to load" messages. In the Network tab, the only outside requests should be Google Fonts (and, on Contact, OpenStreetMap map tiles).
- **Tested:** automated checks on all five pages: no console or Content Security Policy errors, no inline scripts or `onclick` attributes, and every external link has `rel="noopener noreferrer"`.

### Part 3: SVG icons for the four values (About page)

- **Date implemented:** 30 October 2026 (Transparency wording updated 31 October 2026)
- **What:** Each of the four values (Dignity, Transparency, Community, Reliability) now has a small icon in a round green badge beside its text. The icons are a heart, an eye, two people and a calendar with a tick.
- **Why:** The values were plain text in boxes. Icons make them quicker to scan, and they use the site's own green so they sit on theme.
- **Files changed:**
  - `about.html`: each value `<li>` now holds an inline `<svg class="value-icon">` followed by the text in a `<p>`.
  - `css/style.css`: new `.value-icon` rules (badge size, colours, line style), the value cards became a row (icon then text), and `#values li p` has no extra margin.
  - `README.md`: this entry.
  - `about.html` (wording): the Transparency value used to say "we publish how donations are used", but no page showed that. It now says "we show what is on our shelves each week and publish our distribution schedule", which the Home page shelf table and the Services schedule tables already do.
- **How it works:**
  - **Inline SVG:** the icons are written straight into the HTML on a 24 by 24 grid (`viewBox="0 0 24 24"`), so they need no extra file or request and stay sharp at any size.
  - **Theme colours from CSS:** `fill: none` with `stroke: var(--green)` draws each icon as an outline in the main green. The badge is a circle (`border-radius: 50%`) filled with `var(--green-tint)`. Changing those two variables recolours every icon.
  - **Accessibility:** the icons are decoration, because each value already has a text label, so they carry `aria-hidden="true"` and screen readers skip them.
  - **Layout:** each card is Flexbox (`display: flex`, icon then text). The cards still sit two per row and drop to one per row on phones.
- **How to test:** Open About and scroll to "Our values". Each card should show a green outline icon in a pale green circle. Narrow the window to a phone width: the cards stack in one column and the icons stay round.

### Part 3: Photo gallery lightbox and matching page heroes

- **Date implemented:** 30 October 2026
- **What:**
  - Get Involved has a new "See what volunteering looks like" section with four photo thumbnails. Clicking one opens it large in a pop-up (a lightbox) with a caption, "Photo 2 of 4", Previous, Next and Close buttons.
  - The first photo on About, Our Services, Contact and Get Involved now follows the Home layout: photo on top (800px wide at most, centred), then the heading and text underneath.
- **Why:** The brief asks for a gallery with a lightbox. The volunteering photos also help motivate visitors to sign up. The other pages had small photos beside or under the heading, which did not match the Home page.
- **Files changed:**
  - `js/lightbox.js` (new): builds the pop-up and controls it.
  - `get-involved.html`: the hero photo is now first (800px), a new `#gallery` section with four links wrapping thumbnails (each link holds the big photo in `href` and the caption in `data-caption`), and the `lightbox.js` script tag.
  - `about.html`: the depot photo moved above the heading into a `page-hero` section.
  - `services.html`: the food parcels photo moved from beside the first service to the top of the page as the hero. The first service now shows text and its schedule table.
  - `contact.html`: the map photo moved out of the details column into a new `#contact-intro` hero section with a one-line intro. The details and the form stay side by side below it.
  - `css/style.css`: the Home hero rules now also apply to `.page-hero` (one set of rules for all five pages), plus new `.gallery` (4 columns, 2 on phones) and `.lightbox` rules.
- **How it works:**
  - **Page heroes:** `.page-hero` is the same Flexbox column as `#hero`. The picture is `width: 100%` with `max-width: 800px`, so it is never stretched past its real size.
  - **Lightbox:** the script finds every `.gallery a`, creates a `<dialog>` with `document.createElement`, and opens it with `showModal()` when a thumbnail is clicked. `showModal()` shows the dark `::backdrop` and makes the rest of the page inert while it is open (Mozilla Developer Network, no date l). `event.preventDefault()` stops the link from leaving the page. Previous and Next use `(n + total) % total` so they wrap round. Arrow keys also move between photos. Escape, the Close button and a click on the dark area all close it; in testing, focus returned to the thumbnail afterwards.
  - **Without JavaScript:** the thumbnails are ordinary links, so each one just opens the full photo.
- **How to test:** Open Get Involved and scroll to the gallery. Click a photo: the pop-up opens with a caption. Press the left and right arrow keys, then Escape. Click Next on the last photo and it wraps to the first. Click the dark area to close. Then open About, Our Services and Contact: the first photo should sit centred above the heading, same as Home. Narrow the window to a phone width: the gallery becomes 2 columns and the pop-up still fits the screen.

### Part 3: Home page hero and "at a glance" simplified

- **Date implemented:** 30 October 2026
- **What:**
  - The hero photo now sits at the top of the Home page at 800px wide, with the headline, a shorter intro and the links centred underneath.
  - The "Donate food or funds" link was removed from the hero, because the Donate button in the header covers it. The other three links stay.
  - "GreenLeaf at a glance" now shows three big numbers with a short label each, in place of four boxed sentences. The "72 hours" statistic was dropped.
  - Space between sections is larger on every page.
- **Why:** The Home page felt dense. The hero photo was small and beside a long block of text, and the four statistic cards each held a full sentence.
- **Files changed:**
  - `index.html`: new hero markup (image first, 800px, then text), the intro shortened to two sentences, the Donate link removed, and the statistics changed to three items.
  - `css/style.css`: the hero rules were replaced (stacked, centred, image capped at 800px), the statistics rules were replaced (no boxes, large number, short label), the old tablet and phone overrides for the cards were removed, a phone rule keeps all three numbers side by side, and the gap between sections went from `var(--space-5)` to `var(--space-6)`.
  - `README.md`: this entry.
- **How it works:**
  - **Hero:** `#hero` is a Flexbox column. The picture is `width: 100%` with `max-width: 800px`, which is the image's own width, so it is never stretched and stays sharp. On phones it simply fills the width. The text block is capped at 40rem so lines stay comfortable to read.
  - **Statistics:** each `<li>` holds a `.stat-number` and a short label. The counters from the animations step still work, because the script only looks for the `.count` spans inside them.
  - **Spacing:** the single rule `main > section { margin-bottom }` controls the gaps, so every page changed together.
- **How to test:** Open the Home page. The photo should be centred at 800px on wide screens, with the headline and three links below it, and no "Donate food or funds" link. Scroll to "GreenLeaf at a glance" and watch the three numbers count up. Narrow the window to a phone width: the photo fills the width and the three numbers stay in one row.
- **Note on earlier entries:** the animated counters entry describes four numbers and the anchor links entry lists a Donate link in the banner. Both were changed by this entry.

### Part 3: Header, navigation and single font (all pages)

- **Date implemented:** 30 October 2026
- **What:**
  - The logo, site name and navigation links are now one bar across the top of every page, with a Donate button at the right-hand end. The bar stays at the top while scrolling.
  - The link for the page you are on is highlighted.
  - The tagline was removed from the header. The footer already carries it.
  - The whole site now uses one font, Google Sans. Lora and Roboto are no longer used.
  - Each page now has its own `<h1>`. Before, every page had the site name as its `<h1>`.
- **Why:** The previous header stacked the logo, name, tagline and nav in separate rows, which looked unbalanced. A single bar is cleaner and puts Donate in the same place on every page. One typeface follows the UI guideline to limit font families. Separate page headings suit search engines and screen readers better than the same `<h1>` on every page.
- **Files changed:**
  - `index.html`, `about.html`, `services.html`, `get-involved.html`, `contact.html`: new `<header class="site-header">` with the brand link and `<nav>`, `aria-current="page"` on the current link, the first main heading changed from `<h2>` to `<h1>`, one Google Fonts link instead of two, and the `menu.js` script tag.
  - `css/style.css`: new header, brand, nav and button rules replace the old `header` and `nav` rules. All three font variables now list Google Sans. Heading weight is bold (700). `.btn` and `.btn-accent` were added, and the form anchor offset (`scroll-margin-top`) was changed to `6rem`.
  - `README.md`: the typography section, breakpoint note, folder structure, checklist, and this entry.
- **How it works:**
  - **Header:** `.site-header` is `position: sticky` and uses Flexbox, with the brand on the left and the links on the right. Its side padding keeps the content aligned with the page content on wide screens.
  - **Donate button:** it is the only use of the wheat accent colour (`.btn-accent`). Dark green text on wheat has a contrast ratio of about 6.4 to 1, which meets the 4.5 to 1 AA level for normal text. White text on wheat would only reach about 2.2 to 1, so it was not used.
  - **Current page:** `aria-current="page"` tells screen readers which page is open, and the same attribute is used by the CSS to highlight the link.
  - **Fonts:** all headings and text read from `--font-display`, `--font-body` or `--font-mono`, and all three now point to Google Sans, so changing the font later takes one edit.
- **How to test:** Open every page. The header should be one row with the Donate button at the right, the current page's link highlighted, and each page showing its own large heading. Check that all text looks like Google Sans. Open the browser's Network tab to confirm only one font request.

### Part 3: Mobile menu (brief 2.1: advanced DOM manipulation)

- **Date implemented:** 30 October 2026
- **What:** On screens 768px wide or narrower, the navigation links are hidden behind a "Menu" button with a three-bar icon. Tapping it drops the links and the Donate button down under the header.
- **Where:** All five pages.
- **Files added or changed:**
  - `js/menu.js` (new): creates the button and handles opening and closing.
  - `css/style.css`: a "Mobile menu" block before section 9, a small rule on phones for the site name, and the button and dropdown styles.
  - All five HTML pages: the script tag for `js/menu.js`.
  - `README.md`: this entry, the checklist row, the folder structure and the references.
- **How it works:**
  - **Building the button:** the script creates the button in memory with `document.createElement("button")`, sets its attributes and inserts it into the nav (Mozilla Developer Network, no date k). The element is not on the page until it is inserted.
  - **Showing and hiding:** a `menu-open` class on the nav is toggled by the button. CSS shows the link list only when that class is present on screens 768px wide or narrower.
  - **Accessibility:** the button follows the disclosure pattern. It has `aria-expanded` set to true or false and `aria-controls` pointing at the link list, and as a real `<button>` it works with Enter and Space (World Wide Web Consortium, no date b; Mozilla Developer Network, no date e).
  - **Extras added by me:** the menu also closes when a link is chosen (a link to the same page does not reload it), when you click outside it, and when you press Escape, which returns focus to the button. The W3C page does not mention Escape, so that part is an added convenience.
  - **The icon:** the three bars are drawn with CSS, with no image file, using the middle bar plus its `::before` and `::after` pseudo-elements.
- **Without JavaScript:** the script is what creates the button, so with JavaScript off there is no button and the links wrap onto extra rows and stay visible.
- **Adjusting it:** the switch-over width is the `768px` in the "Mobile menu" media query in `css/style.css`.
- **How to test:** Narrow the browser to under 768px, or use a phone. The links should be hidden and a Menu button shown. Click it to open the links, then press Escape, click outside, or choose a link to close it. Make the window wider again and the normal links should return.

### Part 3: Font pairing change (Google Sans headings, Lora site name)

- **Date implemented:** 30 October 2026
- **Superseded:** this change was replaced by the single font Google Sans, described in the entry above (Part 3: Header, navigation and single font).
- **What:** Headings and the large counter numbers now use Google Sans. The site name in the header stays in Lora, because the lettering looked best in that font. Body text and labels are still Roboto.
- **Why:** The previous Lora and Roboto pairing was tried against several alternatives in side-by-side mockups. Google Sans and Roboto was chosen for a cleaner, more modern look. Lora was kept only for the site name.
- **Files changed:**
  - `css/style.css`: `--font-display` now lists Google Sans, and a new `--font-brand` variable holds Lora. `header h1` uses `--font-brand`.
  - `index.html`, `about.html`, `services.html`, `get-involved.html`, `contact.html`: a second Google Fonts `<link>` loads Google Sans, and the comment above the links was updated.
  - `README.md`: the font table, the design notes, a new reference, and this entry.
- **How it works:** Every heading (`h1` to `h4`) reads its font from `--font-display`, so changing that one variable changes them all. The header `h1` is the only place that overrides it with `--font-brand`. Google Sans is loaded by its own `<link>` tag, so if that request ever failed, Lora and Roboto would still load and the headings would fall back to the system sans-serif fonts listed after it.
- **How to test:** Open any page with an internet connection. Headings should look like Google Sans, the site name at the top should look like Lora, and body text should look like Roboto. In the browser's developer tools, the Network tab should show the Google Sans request succeeding.

### Part 3: Table borders and direct links to each form

- **Date implemented:** 30 October 2026
- **What:**
  - The two tables on the Services page now use the same thin, soft borders as the Home page table.
  - On the Home page, the links in the top banner ("Fighting food insecurity in our community") now jump straight to the right form on the Get Involved page. Before, three differently named links all opened the same page at the top.
  - A fourth link, "Partner your business", was added to that row.
- **Why:** The Services tables still had an old `border="1"` attribute, which draws hard black lines around every cell. The three Home links gave visitors no way to reach their form without scrolling and searching.
- **Files changed:**
  - `services.html`: `border="1"` removed from both `<table>` tags.
  - `index.html`: links now point to `get-involved.html#donate`, `#volunteer`, `#partner` and `#request-parcel`, and "Partner your business" was added.
  - `css/style.css`: `scroll-margin-top` added to the four form sections, with a larger value in the mobile section.
  - `README.md`: this entry.
- **How it works:** Each form section on the Get Involved page already had an `id`. A link ending in `#` plus that id makes the browser scroll to that section. The nav bar stays fixed at the top of the screen, so `scroll-margin-top` tells the browser to stop a little early and leave the form heading visible. The nav is about 59px tall on wide screens, about 110px on a narrow tablet where it wraps onto two rows, and about 215px on phones where the links stack. That is why the value is `8rem` normally and `15rem` in the mobile section.
- **Adjusting it:** If the nav height changes, for example when a burger menu is added, change the two `scroll-margin-top` values in `css/style.css`.
- **How to test:** Open the Home page and click each of the four links. Each should land on its form with the heading in view and not hidden behind the nav. Try this at a narrow browser width as well. Open the Services page and check the tables look like the Home table.

### Part 3: Animated counters (brief 2.1: animations and transitions, step 2 of 3)

- **Date implemented:** 30 October 2026
- **What:** The four numbers in "GreenLeaf at a glance" on the Home page (1,200, 18, 340 and 72) count up from 0 to their final value when they scroll into view. The count runs once per page load and takes 1.5 seconds.
- **Where:** Home page, "GreenLeaf at a glance" section.
- **Files changed:**
  - `index.html`: each number is wrapped in `<span class="count" data-target="...">`. The span still contains the final number as normal text, and `data-target` holds the value to count to.
  - `js/animations.js`: a `countUp` function and a second `IntersectionObserver` were added below the scroll reveal code. The "at a glance" section needed no CSS changes.
  - `README.md`: this entry, the checklist row, and two new references.
- **How it works:** The script finds every `.count` span and sets it to 0, so the final number never flashes before the count begins. An `IntersectionObserver` waits until a number is on screen, then `countUp` runs. It uses `requestAnimationFrame` to update the number before each screen repaint (Mozilla Developer Network, no date i). Each frame works out how far through the 1.5 seconds it is, from the browser's own frame timestamp, so the speed is the same on every screen. The number shown is the target multiplied by that progress and rounded. `toLocaleString("en-US")` adds the thousands comma, so 1200 appears as 1,200 and matches the text on the page (Mozilla Developer Network, no date j). When progress reaches 100% the loop stops, and the observer stops watching that number.
- **Reduced motion:** If the visitor has asked their device to reduce motion, the counters are skipped (the same `reduceMotion` check the scroll reveal uses), so the final numbers show straight away.
- **Without JavaScript:** The final numbers are already in the HTML, so nothing is lost.
- **How to test:** Open the Home page and scroll down to "GreenLeaf at a glance". The numbers should run from 0 up to 1,200, 18, 340 and 72, then stay put. Scroll away and back: they should not count again. Turn on "Reduce motion" in your device's accessibility settings and reload: the numbers appear instantly.

### Part 3: Stock status redesign ("This week's shelf" table on Home)

- **Date implemented:** 30 October 2026
- **What:** The Critical, Low and Stocked labels in the "This week's shelf" table are now shown as three small bars plus the word. One red bar means Critical, two amber bars mean Low and three green bars mean Stocked. The table no longer has hard black cell borders.
- **Why:** The old pill badges were set to `display: inline-block` on table cells, which pulled them out of line with their rows and cut the row lines short. "Stocked" also had no badge, so the three states looked inconsistent.
- **Where:** `index.html`, "This week's shelf" section.
- **Files changed:**
  - `index.html`: each status cell now holds a `<span class="stock stock-...">` with a row of three `<i>` bars, then the word. The old `border="1"` attribute was removed from this table.
  - `css/style.css`: the old pill rules in section 8 were replaced by the stock bar rules. Smaller bar sizes were added to the tablet (1024px) and mobile (640px) sections.
  - `README.md`: this entry and a checklist row.
- **How it works:** The word is still real text, so screen readers and visitors without CSS still read "Critical", "Low" or "Stocked". The bars are decoration only, so they carry `aria-hidden="true"`. Filled bars have the class `on`. Each status class sets a bar colour (`--level`) and a darker label colour, which keeps the text readable on white.
- **Adjusting it:** The bar size is set by three variables at the top of section 8 (`--bar-width`, `--bar-height`, `--bar-gap`). The tablet and mobile sections change these values on smaller screens. On mobile the shelf table drops its 480px minimum width, so it fits without sideways scrolling.
- **How to test:** Open the Home page and scroll to "This week's shelf". The bars and words should line up with every row. Narrow the browser window to about 375px: the table should still fit with no sideways scrolling.

### Part 3: Scroll reveal (brief 2.1: animations and transitions, step 1 of 3)

- **Date implemented:** 30 October 2026
- **What:** Sections now fade in and rise slightly as they scroll into view. This is the first of three animation steps. Animated counters and a smooth accordion follow.
- **Where:** All five pages (every `<section>` inside `<main>`).
- **Files added or changed:**
  - `js/animations.js` (new): the scroll reveal script.
  - `css/style.css`: new "Scroll reveal" block at the end of section 8, plus the Contents list at the top.
  - `index.html`, `about.html`, `services.html`, `get-involved.html`, `contact.html`: one `<script>` tag before `</body>`.
  - `README.md`: this entry, the Part 3 checklist, the folder structure, and three new references.
- **How it works:** When the page loads, the script adds the class `reveal` to every section in `<main>`. CSS gives `.reveal` an opacity of 0, a 20px downward offset and a 0.5 second transition. An `IntersectionObserver` watches the sections. When one comes into view it gets the class `visible`, which sets the opacity back to 1 and removes the offset, so the section fades in and rises into place. The observer then stops watching that section, so the effect happens once (Mozilla Developer Network, no date f).
- **Reduced motion:** `window.matchMedia("(prefers-reduced-motion: reduce)")` checks whether the visitor has asked their device to minimise motion (Mozilla Developer Network, no date g, h). If so, the script does nothing, the `reveal` class is never added, and every section appears normally.
- **Without JavaScript:** The script is what hides the sections, so with JavaScript off every section is visible.
- **How to test:** Open any page and scroll down slowly. Sections fade in as they arrive and do not repeat. Turn on "Reduce motion" in your device's accessibility settings and reload. Sections then appear without any animation.

### Part 3: FAQ accordion (brief 2.1: accordion)

- **Date implemented:** 30 October 2026
- **What:** Added a collapsible "Frequently asked questions" section with six questions. Each answer is hidden until its question is clicked, and clicking again hides it. An accordion suits this content because the questions are short and independent, and it keeps the page compact.
- **Where:** Get Involved page, below the four forms.
- **Files added or changed:**
  - `get-involved.html`: new `#faq` section and a `<script>` tag before `</body>`.
  - `js/accordion.js` (new): the accordion behaviour.
  - `css/style.css`: new "Accordion" block in section 7 (Components).
  - `README.md`: this entry, the Part 3 section, the Contents list, the folder structure, and two new references.
- **How it works:** Each question is a `<button>`. When the page loads, the script hides every answer and sets `aria-expanded="false"` on its button. Clicking a question switches `aria-expanded` between `"true"` and `"false"` and shows or hides the matching answer. Each question works on its own, so several can be open at once.
- **Accessibility:** Because the questions are buttons, Enter and Space work as well as the mouse. `aria-expanded` tells screen readers whether an answer is open, and `aria-controls` links each button to its answer (World Wide Web Consortium, no date a; Mozilla Developer Network, no date e). The questions sit inside `<h3>` headings so they appear in a screen reader's heading list, and the existing `:focus-visible` outline applies.
- **Without JavaScript:** All answers stay visible, so no content is lost.
- **How to test:** Open the Get Involved page and scroll to the FAQ. Click a question to open it and click again to close it. Press Tab to move between questions and Enter or Space to open one. A plus sign marks a closed question and a minus sign an open one.

### Part 2: Comment clean-up and softer status badges

- Shortened and tidied comments in `index.html` and `css/style.css`. No code changes.
- Replaced the badges' solid coloured borders with a subtle ring: `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08)`.
- Muted the Critical and Low badge colours and slightly reduced badge text size.
- Combined the shared badge properties into one rule.

### Part 2: Real photography replaces placeholders

- *Note: these files were renamed on 1 November 2026 to describe what they show. The old and new names are in the "Image optimisation" table in the SEO section.*
- Replaced all seven placeholder images with real photos supplied by the site owner: `hero-banner`, `food-parcels`, `soup-kitchen`, `donation-dropoff`, `about-depot`, `contact-map`, and `volunteers`.
- Cropped each photo to a standard size (16:9 for the hero banner, 4:3 for the rest) and regenerated the `-400w` and `-800w` variants.
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
- Part 3 later moved the whole site to a single font, Google Sans (see the Part 3 header, navigation and single font entry).

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

---

## References

FoodForward SA (no date a) *About us*. Available at: https://www.foodforwardsa.org/about-us/ (Accessed: DD Month 2026).

FoodForward SA (no date b) *Donate food*. Available at: https://www.foodforwardsa.org/donate-food/ (Accessed: DD Month 2026).

FoodForward SA (no date c) *Home*. Available at: https://foodforwardsa.org/home/ (Accessed: DD Month 2026).

FoodForward SA (no date d) *Welcome to Food Forward SA*. Available at: https://foodforwardsa.org/welcome/ (Accessed: DD Month 2026).

Global FoodBanking Network (2024) *How FoodForward SA grew into the largest food bank in Sub-Saharan Africa: a Q&A with Andy Du Plessis*, 20 December. Available at: https://www.foodbanking.org/blogs/foodforward-sa-largest-food-bank-on-the-african-continent-qa-with-andy-du-plessis/ (Accessed: DD Month 2026).

Google Fonts (no date a) *Lora; Roboto*. Available at: https://fonts.google.com/ (Accessed: 17 September 2026).

Google Fonts (no date b) *Google Sans*. Available at: https://fonts.google.com/specimen/Google+Sans (Accessed: 30 October 2026).

Ladles of Love (no date a) *About our charity*. Available at: https://ladlesoflove.org.za/about/ (Accessed: DD Month 2026).

Ladles of Love (no date b) *Soup kitchens for the homeless*. Available at: https://ladlesoflove.org.za/projects/soup-kitchens/ (Accessed: DD Month 2026).

Mozilla Developer Network (no date a) *CSS flexible box layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 16 September 2026).

Mozilla Developer Network (no date b) *CSS grid layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 16 September 2026).

Mozilla Developer Network (no date c) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 16 September 2026).

Mozilla Developer Network (no date d) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 16 September 2026).

Mozilla Developer Network (no date e) *ARIA: aria-expanded attribute*. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded (Accessed: 30 October 2026).

Mozilla Developer Network (no date f) *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 30 October 2026).

Mozilla Developer Network (no date g) *prefers-reduced-motion CSS media feature*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion (Accessed: 30 October 2026).

Mozilla Developer Network (no date h) *Window: matchMedia() method*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia (Accessed: 30 October 2026).

Mozilla Developer Network (no date i) *Window: requestAnimationFrame() method*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame (Accessed: 30 October 2026).

Mozilla Developer Network (no date j) *Number.prototype.toLocaleString()*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString (Accessed: 30 October 2026).

Mozilla Developer Network (no date k) *Document: createElement() method*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement (Accessed: 30 October 2026).

Mozilla Developer Network (no date l) *HTMLDialogElement: showModal() method*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal (Accessed: 30 October 2026).

News24 (2026) *One of SA's biggest child feeding schemes was once a small Cape Town soup kitchen*, 25 May. Available at: https://www.news24.com/life/food/news/one-of-sas-biggest-child-feeding-schemes-was-once-a-small-cape-town-soup-kitchen-20260525-0352 (Accessed: DD Month 2026).

Wander Cape Town (2023) *Interview with Danny Diliberto, CEO of Ladles of Love*, 29 October. Available at: https://wandercapetown.com/local-knowledge/interviews/danny-diliberto-ladles-of-love/ (Accessed: DD Month 2026).

World Wide Web Consortium (no date a) *Accordion example*. ARIA Authoring Practices Guide. Available at: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/ (Accessed: 30 October 2026).

World Wide Web Consortium (no date b) *Disclosure (Show/Hide) Pattern*. ARIA Authoring Practices Guide. Available at: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ (Accessed: 30 October 2026).

Chrome for Developers (no date) *Optimize image priority*. Available at: https://developer.chrome.com/docs/modern-web-guidance/guides/performance/optimize-image-priority (Accessed: 1 November 2026).

content-security-policy.com (no date) *Content Security Policy (CSP) meta tag examples*. Available at: https://content-security-policy.com/examples/meta (Accessed: 1 November 2026).

GitHub (no date) *Securing your GitHub Pages site with HTTPS*. Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https (Accessed: 1 November 2026).

Google Search Central (no date a) *Influencing your title links in search results*. Available at: https://developers.google.com/search/docs/appearance/title-link?hl=en&rd=1 (Accessed: 1 November 2026).

Google Search Central (no date b) *Control your snippets in search results*. Available at: https://developers.google.com/search/docs/advanced/appearance/snippet (Accessed: 1 November 2026).

Google Search Central (no date c) *Robots.txt introduction and guide*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro.md.txt (Accessed: 1 November 2026).

Google Search Central (no date d) *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/guides/create-URLs (Accessed: 1 November 2026).

Google Search Central (no date e) *Google image SEO best practices*. Available at: https://support.google.com/webmasters/answer/114016 (Accessed: 1 November 2026).

Google Search Central (no date f) *URL structure best practices for Google*. Available at: https://developers.google.cn/search/docs/crawling-indexing/url-structure?hl=en (Accessed: 1 November 2026).

Google Search Central (no date g) *SEO starter guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 1 November 2026).

Google Search Central (no date h) *Local business structured data*. Available at: https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=ko (Accessed: 1 November 2026).

Google Search Central (no date i) *Spam policies for Google web search*. Available at: https://developers.google.com/search/docs/essentials/spam-policies (Accessed: 1 November 2026).

Leaflet (no date) *Leaflet tutorials*. Available at: https://leafletjs.com/examples.html (Accessed: 1 November 2026).

Mozilla Developer Network (no date m) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation (Accessed: 1 November 2026).

Mozilla Developer Network (no date n) *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch%5FAPI (Accessed: 1 November 2026).

Mozilla Developer Network (no date o) *Content-Security-Policy (CSP) header*. Available at: https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Content-Security-Policy (Accessed: 1 November 2026).

OpenStreetMap Foundation (no date) *Tile usage policy*. Available at: https://operations.osmfoundation.org/policies/tiles/ (Accessed: 1 November 2026).
