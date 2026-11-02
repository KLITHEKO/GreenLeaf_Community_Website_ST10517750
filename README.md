# GreenLeaf Community Food Bank Website

GreenLeaf Community Food Bank began with a simple idea: neighbours helping neighbours. What started as a small WhatsApp group for sharing surplus food has grown into a community network of volunteers, donors, and local partners working together to make sure no one goes hungry.

Today, we give out more than 1,200 food parcels every month, run a weekend soup kitchen that welcomes anyone who needs a hot meal, and work with 18 local businesses through regular donation drop-offs. Behind it all are more than 340 volunteer hours every month, driven by people who believe that a stronger community starts with looking out for one another.

At GreenLeaf, we believe access to food should never come with judgment. Every person deserves to be treated with dignity, and every family should be able to count on consistent support when they need it. That is why everything we do is built around dignity, transparency, and community.

## Contents

1. [Project overview](#project-overview)
2. [Pages](#pages)
3. [Repository structure](#repository-structure)
4. [How to preview locally](#how-to-preview-locally)
5. [How to update the website](#how-to-update-the-website)
6. [Part 2: CSS and styling](#part-2-css-and-styling)
7. [Responsive design](#responsive-design)
8. [Screenshot evidence](#screenshot-evidence)
9. [Part 3: JavaScript enhancements](#part-3-javascript-enhancements)
10. [Changelog](#changelog)
11. [References](#references)

---

## Project overview

The website has:

- 5 pages with the same header, menu and footer
- One stylesheet
- Layouts for desktop, tablet and phone
- Photos that load a smaller file on small screens
- Forms for donating, volunteering, partnering and asking for help
- Schedule tables that fit small screens
- Screenshots at three screen sizes
- Scripts in the `js/` folder (Part 3)

### Background research

The services, forms and wording on the site were shaped by how real South African food organisations work. The GreenLeaf numbers and story are the site's own content and are not taken from these sources.

FoodForward SA rescues quality surplus food from producers, manufacturers and retailers and passes it to vetted beneficiary organisations (FoodForward SA, no date a). This is the model behind the "Donation drop-off & collection" service on the Home and Services pages. Businesses across the food supply chain can donate edible surplus food by completing an online form, after which the operations team contacts them (FoodForward SA, no date b). The "Partner your business" form on Get Involved follows the same pattern: a short form, then a reply. FoodForward SA also offers two separate ways to give, "Donate Funds" for money and "Donate Food" for goods (FoodForward SA, no date c), which is why the "Donate funds or food" form covers both. It treats partnerships between businesses and non-profits as central to fighting hunger (FoodForward SA, no date d), which is why the Home and About pages mention local business partners.

The "How we started" story on the About page follows a pattern seen in real organisations. FoodForward SA began in 2003 when one person collected leftover food from film sets for community groups, and it became a food bank in 2009 (Global FoodBanking Network, 2024). Ladles of Love began with one soup kitchen in 2014 (Ladles of Love, no date a), and its founder says it grew from a single soup kitchen outside his restaurant (Wander Cape Town, 2023). News24 (2026) describes another large South African child feeding scheme that started as a small Cape Town soup kitchen. I could not open the full article, so I only use its headline.

The weekend soup kitchen and the volunteer options were shaped by Ladles of Love. Its volunteers cook, make sandwiches or organise fundraisers, and donors give money or groceries (Ladles of Love, no date a). Its soup kitchens serve hot meals to people facing homelessness and hardship, they are run by volunteers, and volunteers book a slot in advance (Ladles of Love, no date b). Its founder says that making volunteering easy is central to the work (Wander Cape Town, 2023), which is why the volunteer form is short and the FAQ says no experience is needed.

---

## Pages

| Page         | File                | What it has                                        |
| ------------ | ------------------- | -------------------------------------------------- |
| Home         | `index.html`        | Introduction, numbers, and a preview of services   |
| About Us     | `about.html`        | Who we are, our mission and values                 |
| Our Services | `services.html`     | What we offer and when                             |
| Get Involved | `get-involved.html` | Donate, volunteer, partner, or ask for help        |
| Contact      | `contact.html`      | Contact details, a map and a message form that builds an email |

---

## Repository structure

```
greenleaf/
├── index.html           Home page
├── about.html           About Us page
├── services.html        Our Services page
├── get-involved.html    Get Involved page
├── contact.html         Contact page
├── README.md            This guide
├── robots.txt           Tells search engines what to look at (SEO)
├── sitemap.xml          List of pages for search engines (SEO)
├── favicon.ico          Small icon in the browser tab
├── .gitignore           Files git should skip (such as .DS_Store)
├── css/
│   └── style.css        The stylesheet
├── data/
│   └── schedule.json    Session times used by the Services page
├── js/                  Scripts (Part 3)
│   ├── accordion.js     Open and close questions on Get Involved
│   ├── animations.js    Fade-in and counting numbers
│   ├── contact-email.js Builds the email from the Contact form
│   ├── enquiry.js       Replies to the four Get Involved forms
│   ├── lightbox.js      Photo pop-up on Get Involved
│   ├── map.js           Map on Contact
│   ├── menu.js          Menu button on phones
│   ├── schedule.js      Session finder on Services
│   └── validation.js    Form checking messages
├── vendor/
│   └── leaflet/         Map tool (kept on our own site, free BSD 2-Clause licence)
├── images/              Photos and their smaller copies
└── screenshots/         Pictures of the site (desktop, tablet, phone)
```

---

## How to preview locally

**Option 1: Open the file**

Open `index.html` in a web browser.

**Option 2: VS Code Live Server** (best: the page refreshes when you save)

1. Open the project in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

**Check the screen sizes**

Make the browser window narrower, or use the device icon in the browser's developer tools. Try these widths:

| Device  | Width  |
| ------- | ------ |
| Desktop | 1440px |
| Tablet  | 768px  |
| Phone   | 375px  |

---

## How to update the website

This guide is for GreenLeaf volunteers. You do not need to install anything. You change files on the GitHub website, and the live site updates by itself 1 to 2 minutes later.

### How to change a file

1. Go to the project on GitHub and sign in.
2. Click the file you want to change (for example `services.html`).
3. Click the **pencil icon** (Edit this file).
4. Change the words. Only change the text, not the symbols around it (the bits in `< >`).
5. Click **Commit changes**, then **Commit changes** again.
6. Wait 1 to 2 minutes, then refresh the live site.

If something looks wrong, tell the website helper. Every change can be undone.

### Common jobs

| I want to change... | Open this file |
| --- | --- |
| Session times | `data/schedule.json` and the tables in `services.html` (change both; in the JSON file keep every comma and quote mark exactly as it is) |
| This week's shelf (what is low on stock) | `index.html`, in the "This week's shelf" table |
| The three numbers on the home page | `index.html`, in "GreenLeaf at a glance" (change the number twice: in `data-target` and in the text) |
| Words on a page | The page's file: `index.html`, `about.html`, `services.html`, `get-involved.html` or `contact.html` |
| Phone, email or address | Many files. Use the search box at the top of the project, type the old phone number, and change it in every file that appears. |

### Changing the shelf

1. Open `index.html` and find the line for the item.
2. Change the word to `Critical`, `Low` or `Stocked`.
3. Change `stock-critical`, `stock-low` or `stock-stocked` on the same line to match.
4. Bars: Critical has one `class="on"`, Low has two, Stocked has three.

### Adding or changing photos

1. Make two copies of the photo: one 400 pixels wide and one 800 pixels wide.
2. Name them with plain words and dashes, ending `-400w.jpg` and `-800w.jpg`, for example `volunteers-sorting-vegetables-400w.jpg`.
3. In the `images` folder on GitHub, click **Add file**, then **Upload files**, and add both copies.
4. Open the page that uses the photo, click the pencil, and change the file names and the `alt` text (a short description of the photo for people who cannot see it).

### Please do not

- Rename or delete files and folders.
- Remove anything inside `< >` or any `id=` or `class=` words.
- Paste in code from other websites.

### Need something bigger?

New pages, new colours and new features need the website helper.

---

## Part 2: CSS and styling

### The stylesheet

All the styling is in one file, `css/style.css`. Every page uses it. It is split into numbered sections:

1. Reset (makes every browser start the same)
2. Variables (colours, sizes and spacing in one place)
3. Base styles
4. Text
5. Header, menu and footer
6. Page sections
7. Cards, tables, forms and buttons
8. Status colours
9. Tablet
10. Phone

### Reset and base styles

A small reset makes the site look the same in every browser. It covers:

- How box sizes are worked out
- Default space around things
- Lists
- Table borders
- The site's font, colour and line spacing

### Text

The whole site uses one Google font (Google Fonts, no date b):

| Font        | Used for                                                           |
| ----------- | ------------------------------------------------------------------ |
| Google Sans | Headings, site name, body text, menu, form labels and tables |

Text sizes use `rem` and `clamp()`. This means text grows and shrinks with the screen and with the visitor's own browser settings.

### Layout

**Flexbox** is used where items need to move around as the screen changes (Mozilla Developer Network, no date a):

- Hero (the top section of a page)
- Number cards
- Service cards
- Values list
- Get Involved forms
- Contact page columns

**CSS Grid** is used for the footer, because it always has three parts: address, contact details and copyright. The parts are named in `grid-template-areas` (Mozilla Developer Network, no date b).

### Extra boxes added to the HTML

These boxes were added so Flexbox and Grid could lay out the sections:

| Box              | What it does                               |
| ---------------- | ------------------------------------------ |
| `.service-cards` | Lays out the service cards on Home         |
| `.help-grid`     | Lays out the Get Involved form cards       |
| `.contact-grid`  | Puts contact details beside the form       |
| `.media-row`     | Puts a Services photo beside its text      |
| `.table-scroll`  | Lets schedule tables scroll sideways       |

### Looks

The stylesheet has colour variables, background colours, borders, shadows and card styles. Links, menu items, form boxes and buttons also change when you:

- `:hover` (point at them)
- `:focus` (tab to them)
- `:active` (press them)

---

## Responsive design

"Responsive" means the site changes to fit the screen. It uses breakpoints at 1024px and 640px for the layout, and a third at 768px for the phone menu (Mozilla Developer Network, no date d).

### Desktop (wider than 1024px)

- Hero with photo and text side by side
- 4 columns of numbers
- 3 columns of service cards
- Get Involved forms in a 2 by 2 grid
- Contact page in 2 columns
- Footer in 3 columns

### Tablet (1024px and below)

- Numbers in 2 columns
- Service cards in 2 columns
- Get Involved sections stack
- Contact sections stack
- Less space between things

### Phone (640px and below)

- Everything in one column
- Menu links stack
- Slightly smaller text
- Schedule tables scroll sideways in `.table-scroll` instead of being squashed
- Even less space between things

### Photos that fit the screen

Photos use the HTML `<picture>` tag so small screens load smaller files (Mozilla Developer Network, no date c). Each photo has two sizes:

| Size | Used for            | Example                 |
| ---- | ------------------- | ----------------------- |
| 400w | Screens up to 640px | `volunteers-packing-food-parcels-400w.jpg` |
| 800w | Bigger screens      | `volunteers-packing-food-parcels-800w.jpg` |

---

## Screenshot evidence

Screenshots were taken at 1440px (desktop), 768px (tablet) and 375px (phone). The full-size pictures are in the `screenshots/` folder. They were taken again on 2 November 2026 from the current site, with the Google Sans font loaded. On the two Contact screenshots the map shows the pin but not the map pictures, because the tool could not reach OpenStreetMap. On the live site the map pictures load.

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

Part 3 makes the site interactive using plain JavaScript (no extra tools). Every item is described in the Changelog.

| Brief item                          | Status                                                         |
| ----------------------------------- | -------------------------------------------------------------- |
| 2.1 Accordion, tabs or modal        | Done: open-and-close questions on Get Involved (`js/accordion.js`) |
| 2.1 Interactive map                 | Done: map on Contact using Leaflet and OpenStreetMap (`js/map.js`) |
| 2.1 Animations and transitions      | Done: sections fade in and numbers count up (`js/animations.js`), plus hover effects in the CSS |
| 2.1 Advanced DOM manipulation       | Done: the menu button, lightbox, session table and form messages are built by scripts (`menu.js`, `lightbox.js`, `schedule.js`, `validation.js`) |
| 2.1 Gallery with lightbox           | Done: photos on Get Involved open in a pop-up (`js/lightbox.js`) |
| 2.2 Dynamic content loading         | Done: session times are loaded from `data/schedule.json` (`js/schedule.js`) |
| 2.2 Search, filter and sort         | Done: "Find a session" on the Services page (`js/schedule.js`) |
| 4.1 HTML form                       | Done: Contact message form and four enquiry forms on Get Involved (see changelog) |
| 4.1 Form validation formats         | Done: phone, email, date, amount and length checks (`js/validation.js`) |
| JS checking and error messages      | Done: a message under each box, and the first mistake is selected (`js/validation.js`) |
| JS AJAX form submission             | Done, with limits: the reply loads in the background without reloading the page (`js/enquiry.js`); there is no server to send the form to (see changelog) |
| Contact form turned into an email   | Done: a preview, then "Open in my email app" (`js/contact-email.js`) |
| SEO best practices                  | Done: see "SEO, page speed and security" below (3.1 on-page, 3.2 plan, 3.3 robots, sitemap, speed, security) |
| Put the site online for free        | Live on GitHub Pages                                           |
| Extra: shelf table                  | Done: stock bars on Home (CSS only, no script)                 |

The site has no server, so no form sends data to a back end. The four Get Involved forms show a reply built from `data/schedule.json` (`js/enquiry.js`). The Contact form builds an email that the visitor sends from their own email app (`js/contact-email.js`).

### SEO, page speed and security (brief 3.1, 3.2 and 3.3)

SEO means helping people find the site on Google. This section lists every SEO item in the brief: what was done, where, and how it was checked. Some items cannot be done in the website files (links from other sites, social media accounts, Google Business Profile). Those are marked as a plan, not as done. All of it was added on 1 November 2026.

| Brief item | Status | Where |
| --- | --- | --- |
| 3.1 Keyword research | Done (method and limits below) | Keyword table in this section; the words are used on all five pages |
| 3.1 Title tags and meta descriptions | Done: different on all five pages | `<head>` of every page |
| 3.1 Header tags | Done: one `<h1>` per page and no skipped levels | `services.html`, `get-involved.html`, `contact.html` fixed |
| 3.1 Image optimisation | Done: clear file names, accurate alt text, sizes set | `images/`, all pages |
| 3.1 URL structure | Done: clean names, canonical links | All pages |
| 3.1 Internal linking | Done: clear links between all pages | Text on all pages |
| 3.1 Mobile friendliness | Done and tested from 320px to 768px | `css/style.css`, all pages |
| 3.2 Backlinks | Plan only: needs the real organisation | Off-page plan below |
| 3.2 Social media | Partly done: share previews built; accounts still to be made | Share tags in `<head>`, Contact page |
| 3.2 Local SEO | On the site: done. Google Business Profile: still to do | Business details on Home and Contact, map |
| 3.3 `robots.txt` | Done | `robots.txt` |
| 3.3 `sitemap.xml` | Done | `sitemap.xml` |
| 3.3 Page speed | Done: page size cut by 36% to 70% on four of five pages | Images, loading settings |
| 3.3 Security | Done, as far as a GitHub Pages site allows | Content Security Policy, safe links, no inline code |

#### 3.1 Keyword research

**How I did it.** On 1 November 2026 I ran these searches and read the titles and snippets of the results to see which words real organisations and news stories use: "food bank Randburg Johannesburg food parcels" and "volunteer soup kitchen Johannesburg donate food". The results used the words *food bank*, *food parcels*, *soup kitchen*, *donate food*, *volunteer*, *Johannesburg* and *Randburg* (for example a "Gauteng sets up food banks" news item, a Business Day story about Foodbank Johannesburg closing, a ForGood.co.za donation listing and a Randburg Sun story). Google's guide says to think about the words people might search for, and warns against repeating the same words again and again (Google Search Central, no date g). So each keyword is used where it reads naturally.

**What I could not do.** I did not have a keyword tool such as Google Keyword Planner (it needs an account), so there are no search numbers. The search tool I used is based in the US, so results may differ from what someone in Johannesburg sees. I chose the keywords by what people would search for when they need or want to give food help, not by measured numbers.

| Keyword | Why it was chosen | Times it appears in the visible text |
| --- | --- | --- |
| food bank | The plain name of what we are; the best match for someone looking for help or wanting to give | Home 4, About Us 3, Our Services 2, Get Involved 3, Contact 3 |
| Randburg | The depot's suburb: people search by area (local search) | Home 2, About Us 2, Our Services 4, Get Involved 2, Contact 3 |
| Johannesburg | The wider city, for people who do not know the suburb | Home 1, About Us 1, Our Services 1 |
| food parcel(s) | What people who need help ask for | Home 3, Our Services 4, Get Involved 3, Contact 1 |
| soup kitchen | A service people search for by name | Home 2, About Us 1, Our Services 3, Get Involved 3, Contact 1 |
| donate / donation | What givers search for | Home 4, About Us 5, Our Services 4, Get Involved 10, Contact 2 |
| volunteer | What helpers search for | Home 4, About Us 6, Our Services 3, Get Involved 5, Contact 1 |
| food insecurity | The problem we work on; used in headings and intro text | Home 1, About Us 2, Our Services 1, Get Involved 1 |

#### 3.1 Title tags and meta descriptions

The title is the headline shown in the browser tab and in Google results. The description is the short text under it. Each page has its own. Google's advice is to avoid repeated or generic titles, keep them clear and short, and put the site name at the start or end of inner-page titles (Google Search Central, no date a). For descriptions it recommends a short, accurate summary of that page (Google Search Central, no date b). Google says it may still rewrite what it shows.

| Page | Title tag | Chars | Meta description | Chars |
| --- | --- | --- | --- | --- |
| Home | Community Food Bank in Randburg \| GreenLeaf | 43 | GreenLeaf is a volunteer-run food bank in Randburg, Johannesburg. Get a food parcel, volunteer, donate food or partner with us to fight hunger locally. | 151 |
| About Us | About GreenLeaf \| Volunteer-Run Food Bank, Randburg | 51 | Learn how GreenLeaf began, what we believe in and how our volunteers collect, sort and share food with families in Randburg and Johannesburg. | 141 |
| Our Services | Food Parcels, Soup Kitchen & Food Donations \| GreenLeaf | 55 | See when and where GreenLeaf hands out weekly food parcels, serves hot meals at the weekend soup kitchen and collects food donations in Randburg. | 145 |
| Get Involved | Volunteer, Donate Food or Request a Food Parcel \| GreenLeaf | 59 | Volunteer at our Randburg food bank, donate food or funds, partner your business or request a food parcel. Four simple forms, no experience needed. | 147 |
| Contact | Contact GreenLeaf Food Bank \| Randburg, Johannesburg | 52 | Find the GreenLeaf depot at 14 Marlboro Drive, Randburg. Opening hours, phone, email, an interactive map and a message form. | 124 |

- Four titles start with what the page is about and end with "| GreenLeaf". The Contact title has the name inside it ("Contact GreenLeaf Food Bank | Randburg, Johannesburg"). All are 59 characters or fewer.
- No two titles or descriptions are the same (a script checked this).
- Each page also has a canonical link (the page's one preferred address), a robots tag (`index, follow`, which means "search engines may list this page") and a theme colour tag.

#### 3.1 Header tags

Each page has exactly one `<h1>` (the main heading), and the heading levels never skip. An `<h2>` is never followed straight by an `<h4>`, and the first heading under the `<h1>` is an `<h2>`. Google says heading order does not change how it ranks a page. I did this for readers, and for people using screen readers who jump through a page by headings (Google Search Central, no date g).

| Page | Heading outline |
| --- | --- |
| Home | h1: Fighting food insecurity in our community<br>h2: GreenLeaf at a glance<br>h2: This week's shelf<br>h2: What we do<br>h3: Weekly food parcel distribution<br>h3: Weekend soup kitchen<br>h3: Donation drop-off & collection |
| About Us | h1: About GreenLeaf<br>h2: Our mission<br>h2: Our vision<br>h2: Our values<br>h2: How we started<br>h2: Our team |
| Our Services | h1: Our services<br>h2: Find a session<br>h2: 1. Weekly food parcel distribution<br>h2: 2. Weekend soup kitchen<br>h2: 3. Donation drop-off & collection<br>h2: Who we help |
| Get Involved | h1: Get involved<br>h2: See what volunteering looks like<br>h2: Donate funds or food<br>h2: Volunteer with us<br>h2: Partner your business<br>h2: Request a food parcel<br>h2: Frequently asked questions<br>h3: Do I need paperwork to get a food parcel?<br>h3: When and where are parcels handed out?<br>h3: What can I donate?<br>h3: Can my business set up a regular pickup?<br>h3: Do I need experience to volunteer?<br>h3: Where does a cash donation go? |
| Contact | h1: Contact us<br>h2: Visit<br>h2: Reach us<br>h2: Send us a message<br>h2: Find the depot on the map |

**What was fixed:** on Our Services, Get Involved and Contact the section titles were `<h3>` straight under the `<h1>`, which skips a level. They are now `<h2 class="subheading">`. The new `.subheading` style in `css/style.css` keeps the smaller size the old `<h3>` had, so nothing looks different.

#### 3.1 Image optimisation

Google recommends clear file names instead of generic ones such as `image1.jpg`. It says alt text (the short description of a photo) is the most important part, and should describe the photo without stuffing in keywords (Google Search Central, no date e).

The old names did not match the photos. For example `contact-map` was a photo of volunteers, and `hero-banner` was a black-and-white photo of hands. I opened every photo and renamed it to describe what it shows. Each photo has an original, a `-400w` (phones) and an `-800w` version.

| Old name | New name | Alt text now used |
| --- | --- | --- |
| `about-depot` | `volunteers-handing-out-food-at-depot` | Three GreenLeaf volunteers in white T-shirts handing a cup of water to a visitor at a food table |
| `contact-map` | `volunteers-unloading-food-aid-boxes` | Volunteers unloading boxes of food aid from a van at a community distribution table |
| `food-parcels` | `volunteers-packing-food-parcels` | Three volunteers packing boxes of food aid beside a van |
| `hero-banner` | `community-hands-together` | A circle of hands stacked together in a black-and-white photo of community members and children |
| `volunteers` | `volunteer-handing-over-aid-box` (renamed on 2 November 2026 when the photo was replaced; a 400px version was added) | Two volunteers in white T-shirts passing a cardboard box marked AID beside a van, with people waiting behind them |
| `donation-dropoff` | `canned-food-donation-crate` | A crate of canned food being sorted by gloved volunteers at the GreenLeaf depot |
| `soup-kitchen` | `hot-meals-soup-kitchen` | Rows of hot meals in takeaway containers at the weekend soup kitchen |
| `logo.png` (2000 x 2000 pixels, 205 KB) | `greenleaf-logo-96.png` (96 x 96, 11 KB); the original is kept as `greenleaf-logo-original.png` | Empty on purpose: the logo sits beside the site name, so it is only decoration |

Other photo changes:

- The Contact page photo is no longer described as a map (the real map is now interactive, see the changelog).
- Every photo has `width` and `height`, so the page does not jump while loading.
- The top photo on each page has `fetchpriority="high"` (load this one first).
- Photos lower down have `loading="lazy"` (load only when the visitor scrolls near). See Page speed.
- Google recommends `<picture>` or `srcset` with a normal `<img>` as a backup for photos that fit the screen (Google Search Central, no date e). The site already did this.

New icon files: `favicon.ico`, `images/favicon-32.png` and `images/apple-touch-icon.png`, all made from the logo.

#### 3.1 URL structure

| Page | URL |
| --- | --- |
| Home | `https://klitheko.github.io/GreenLeaf_Community_Website_ST10517750/index.html` |
| About Us | `.../about.html` |
| Our Services | `.../services.html` |
| Get Involved | `.../get-involved.html` |
| Contact | `.../contact.html` |

- The names are plain words in lower case, joined by hyphens, with no numbers or odd codes. Google recommends readable words instead of long ID numbers, and hyphens instead of underscores (Google Search Central, no date f).
- Google treats `/APPLE` and `/apple` as different addresses. So all file names are lower case and every link uses the same spelling (Google Search Central, no date f).
- Each page has a canonical link pointing to its own `.html` address, so each page has one preferred address.
- The repository name is part of every address because this is a GitHub Pages project site. It cannot be shortened without our own domain name.
- Addresses without `.html` (for example `/about`) were not forced, because that needs server settings that GitHub Pages does not offer.

#### 3.1 Internal linking

Links use words that say where they go. Google's guide says link text tells people and Google about the page it leads to (Google Search Central, no date g).

| From | Link text | To |
| --- | --- | --- |
| Every page (header) | Home, About Us, Our Services, Get Involved, Contact, Donate | The five pages and `get-involved.html#donate` |
| Home, top section | Volunteer with us, Partner your business, Request a food parcel | The matching forms on Get Involved |
| Home, "What we do" cards | Weekly food parcel distribution, Weekend soup kitchen, Donation drop-off & collection | `services.html#food-parcels`, `#soup-kitchen`, `#donation-dropoff` |
| Home, under the cards | See all our services and schedules, About GreenLeaf, Find the depot | Services, About, Contact |
| About, end of "Our team" | Volunteer, donate or partner with us; what our services offer; contact the depot | Get Involved, Services, Contact |
| Services, start of each service | Request a food parcel; Volunteer with us; partner with us; Contact the depot | `get-involved.html#request-parcel`, `#volunteer`, `#partner`, and Contact |
| Get Involved, intro | what our services do; contact us | Services, Contact |
| Contact, intro and "Visit" | Get involved; services page | Get Involved, Services |

#### 3.1 Mobile friendliness

- Every page has `<meta name="viewport" content="width=device-width, initial-scale=1.0">` (this tells phones to use the real screen width).
- The layout changes at 1024px, 768px and 640px, and photos use `<picture>` so phones download the smaller 400px file.
- **Tested:** all five pages at 320, 360, 375, 414 and 768px wide. None scroll sideways. Only tables inside their own scroll box and the map are allowed to be wider. The old sideways scroll at 320px on Home, Services and Contact no longer happens.
- **Fixed while testing:** form boxes and menu links were 38 to 40px tall, which is below the 44 by 44 pixel size for tap targets (World Wide Web Consortium, no date d). That size is the stricter AAA level of the accessibility guidelines, so I used it as a target, not as a minimum. Form text was about 14px, which makes iPhones zoom in when a box is tapped. On screens 640px and narrower, form boxes are now at least 44px tall with 16px text, and the phone menu links are at least 44px tall.
- The map does not take over scrolling on a phone (scroll-wheel zoom is off), so it never traps a finger that is scrolling down the page.

#### 3.2 Off-page SEO (plan, not done in the files)

Links from other sites, social media and Google Business Profile happen outside the website files. They need the real organisation's accounts and permission. So this is a plan, with an honest status.

| Item | Status | What to do |
| --- | --- | --- |
| Backlinks (links to us from other sites) | Plan only | Ask the 18 partner businesses to link to the site from their own pages. Ask local schools, churches, community groups and the local newspaper (for example the Randburg Sun) to mention and link to it. List the organisation on donation and non-profit directories (ForGood.co.za appeared in my keyword searches; I have not checked its listing rules). Aim for a few good links from real local sites. |
| What to avoid | Rule | Google's spam policy treats buying or selling links to rank higher, "link to me and I'll link to you" swaps and automated link building as link spam. Paid or sponsored links are fine only when marked `rel="nofollow"` or `rel="sponsored"` (Google Search Central, no date i). |
| Social media | Partly done | **Done:** every page has share tags (Open Graph and Twitter card: `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`), so a shared link shows the page title, description and a photo. **Still to do:** create the Facebook page, Instagram account and WhatsApp group, then add the links to the Contact page. The three placeholder `#` links were removed on 2 November 2026 rather than leave links that go nowhere. |
| Local SEO (on the site) | Done | The same address, phone number and email are used in the footer, the Contact page and the hidden business data (JSON-LD). Home and Contact carry this data as type `NGO`, with address, phone, email, opening hours (Monday to Friday, 08:00 to 17:00) and `areaServed` (Randburg, Alexandra, Diepsloot, Johannesburg). The Contact page has an interactive map. Google lists `name` and `address` as required, and `telephone`, `geo`, `url` and `openingHoursSpecification` as recommended for local business data (Google Search Central, no date h). |
| Local SEO (off the site) | Still to do | Claim a Google Business Profile with the same name, address and phone number as the site. This is my advice. I could not open Google's page about it, so I am not quoting it. |

**Placeholders to replace before this is treated as real:** the email address (`hello@greenleaffoodbank.org`, which is the `action` of the Contact form), the street address and the map coordinates (`-26.09441, 28.00673`, which are approximate and only point to Randburg) are placeholders. The coordinates are in two places: `js/map.js` (`depot`) and the JSON-LD block on `index.html` and `contact.html`.

#### 3.3 `robots.txt`

`robots.txt` is a small text file in the project root. It tells search engine robots (also called crawlers: the programs Google uses to visit websites and collect their pages) which parts of the site they may visit.

```
User-agent: *
Allow: /
Disallow: /screenshots/

Sitemap: https://klitheko.github.io/GreenLeaf_Community_Website_ST10517750/sitemap.xml
```

**What each line means**

| Line | Meaning |
| --- | --- |
| `User-agent: *` | The rules below are for every robot. |
| `Allow: /` | Robots may visit every page on the site. |
| `Disallow: /screenshots/` | Robots should not visit the `screenshots/` folder. Those pictures are only in the project to show the person marking this assignment what the site looks like. They are not part of the website, so I do not want them appearing in Google results. |
| `Sitemap: ...` | Tells robots where to find the list of pages (`sitemap.xml`, explained below). |

**Things to know**

- **The style and script files are not blocked.** Google opens a page the way a visitor does, which needs `style.css` and the scripts. If those were blocked, Google would see a plain page with no design and could rank it worse.
- **It is a request, not a lock.** Good robots obey it, but it does not stop anyone. Google says `robots.txt` mainly manages how much robots visit the site, and that it is "not a mechanism for keeping a web page out of Google" (Google Search Central, no date c). A blocked page can still show up in Google if another site links to it, and anyone can still open the screenshots folder by typing its address. So never rely on it to hide anything private.
- **Limit: Google will not read our file.** Google only looks for `robots.txt` at the very top of a website, for example `klitheko.github.io/robots.txt`. Our site lives one level lower, at `klitheko.github.io/GreenLeaf_Community_Website_ST10517750/`, so Google never looks inside that folder. The file is still here to show the work for marking, and it would start working if the site got its own web address (for example `greenleaf.org`). This rule is general knowledge, not something I read on the Google page.

#### 3.3 `sitemap.xml`

`sitemap.xml` lists the five pages with their full web addresses and a `<lastmod>` (last changed) date of 2026-11-01.

- Google asks for full web addresses (Google Search Central, no date d), and the file uses them.
- Google ignores `<priority>` and `<changefreq>`, and only uses `<lastmod>` when it is correct (Google Search Central, no date d). So only `<loc>` and `<lastmod>` are included. Change `<lastmod>` whenever a page changes in a real way.
- `robots.txt` points to it, which Google lists as one way to share a sitemap (Google Search Central, no date d). It can also be added in the Search Console "Sitemaps" report.

#### 3.3 Page speed

**How I measured.** I ran the site on a local web server and opened each page in a headless Chromium browser (a browser with no window). I scrolled to the bottom so lazy photos loaded. Then I added up the size of every file that came from the site itself. Google Fonts is left out, because it loads from Google. The numbers are uncompressed file sizes. GitHub Pages also squashes text files, so real downloads are a little smaller for HTML, CSS and JavaScript.

| Page | Desktop before | Desktop after | Phone (375px) before | Phone (375px) after |
| --- | --- | --- | --- | --- |
| Home | 506 KB | 327 KB (-35%) | 335 KB | 155 KB (-54%) |
| About Us | 303 KB | 122 KB (-60%) | 259 KB | 78 KB (-70%) |
| Our Services | 452 KB | 279 KB (-38%) | 315 KB | 142 KB (-55%) |
| Get Involved | 414 KB | 226 KB (-45%) | 414 KB | 193 KB (-53%) |
| Contact | 318 KB | 309 KB (-3%) | 259 KB | 251 KB (-3%) |

*Measured again on 2 November 2026 after the form scripts and the photo changes on Get Involved.*

**What made the difference**

1. **Logo:** `logo.png` was 2000 x 2000 pixels (205 KB) but is shown at 40 x 40 on every page. It is now 96 x 96 (11 KB). This alone saves about 194 KB on every page.
2. **Lazy loading:** photos below the first screen have `loading="lazy"` and `decoding="async"`, so the browser gets them only when the visitor scrolls near. Chrome's advice is to lazy-load photos below the fold, never the main (largest) photo, and not to use `fetchpriority="high"` together with `loading="lazy"` (Chrome for Developers, no date).
3. **Main photo first:** the top photo on each page has `fetchpriority="high"` and is not lazy.
4. **No jumping:** every photo has `width` and `height`.
5. **Font connection starts early:** `<link rel="preconnect">` for both `fonts.googleapis.com` and `fonts.gstatic.com`. The font link also uses `display=swap`, so text shows straight away.
6. **Scripts only where needed:** Leaflet (about 160 KB with its pictures) loads only on Contact, `schedule.js` only on Services, and `validation.js` only on the two pages with forms. All scripts sit at the end of `<body>`, so they never slow down the first thing the visitor sees.
7. **Map tool kept on our site:** no extra request to another company's server for the map.

**Not done, and why:** the HTML, CSS and JavaScript are not shrunk (minified), so they stay readable for marking and for a beginner to edit. Browser caching times cannot be set on GitHub Pages. Contact is the exception to the savings: it gained the map tool, so it is about the same size as before even though its photo got lighter.

#### 3.3 Security

GitHub Pages serves plain files and does not let a site set its own HTTP headers (instructions the server sends to the browser). So the protections below are the ones that can be done in the HTML and JavaScript.

| Measure | Where | What it protects against |
| --- | --- | --- |
| **Content Security Policy** (`<meta http-equiv="Content-Security-Policy">`). It is a list of what the page may load: only this site's own scripts, plus Google Fonts for styles and fonts, `data:` and own-site images, no plugins (`object-src 'none'`), forms may only send to this site (`form-action 'self'`; on the Contact page also `mailto:`, so the form can open an email app), and `<base>` is locked (`base-uri 'self'`). The Contact page also allows pictures from `tile.openstreetmap.org` for the map. | `<head>` of every page | Bad or third-party scripts running on the page (cross-site scripting). MDN explains that CSP controls which things the browser may load and helps protect against cross-site scripting (Mozilla Developer Network, no date o). |
| **No inline scripts or `onclick` attributes** | All pages (a script checked this) | Lets the policy above block all injected scripts. The only inline `<script>` is the JSON-LD data block, which is data and does not run. |
| **Libraries kept on this site** | Leaflet in `vendor/leaflet/` | The site does not depend on another company's server staying safe, and a changed outside file cannot alter the site. Leaflet's licence (BSD 2-Clause) is included as `vendor/leaflet/LICENSE.txt`. |
| **Referrer policy** `strict-origin-when-cross-origin` | `<head>` | Limits what other sites learn about which page a visitor came from. With this setting the full address is sent only inside our own site, and only the site name is sent to other secure sites (Mozilla Developer Network, no date y). It is not stricter, because the OpenStreetMap tile policy says not to use a very strict Referrer-Policy and to keep a valid Referer (OpenStreetMap Foundation, no date). |
| **`rel="noopener noreferrer"` on every outside link** | Contact page map links, Leaflet credit and OpenStreetMap credit | A page opened from our site cannot reach back into ours: `noopener` stops the new page getting access to the page that opened it (Mozilla Developer Network, no date w), and `noreferrer` stops the browser sending the address of our page (Mozilla Developer Network, no date x). |
| **Safe handling of text** | `validation.js`, `schedule.js`, `lightbox.js`, `menu.js` | Text typed by a visitor or loaded from the JSON file is put on the page as plain text (`textContent` and `createElement`), never as HTML (`innerHTML`), so it can never run as code (Mozilla Developer Network, no date v). The only HTML string is the fixed map popup that we wrote. |
| **Form limits** | All forms | `maxlength`, `type="email"`, `type="tel"` with a pattern, and `min` on the donation amount limit what can be typed. This helps honest visitors. MDN is clear that checking in the browser is not a security measure, because it can be bypassed, so a real server must check again (Mozilla Developer Network, no date m). |
| **No server and no secrets** | Whole site | The forms do not send data to a server (the Get Involved forms use `action="#"`; the Contact form builds an email in the visitor's own email app). So there is no database or password to attack, and no keys, tokens or passwords are stored in the repository. |
| **HTTPS** | GitHub Pages setting | `github.io` sites are served over HTTPS (the secure version of http), and "Enforce HTTPS" sends any `http://` visit to HTTPS (GitHub, no date). Make sure the box is ticked: repository Settings, then Pages, then Enforce HTTPS. |
| **`.gitignore`** | Project root | Keeps computer-made files such as `.DS_Store` (which lists folder contents) out of the repository. |

**What cannot be done here (honest limits)**

- The headers `X-Content-Type-Options`, `Strict-Transport-Security`, `Permissions-Policy` and `frame-ancestors` can only be set by a server. `frame-ancestors` (stops the site being shown inside another page) does not work in a meta tag (content-security-policy.com, no date). On a real host, or behind a service such as Cloudflare, these would be added.
- A CSP in a meta tag only covers what loads after the tag. So it sits at the top of `<head>`, before any other file (content-security-policy.com, no date).
- Google Fonts is trusted for styles and fonts, so a problem at Google would affect the page. The other option, hosting the font files myself, was not done because it needs permission checks on the font files.
- This is not a full security test by an expert (a penetration test).


---


## Changelog

Newest changes first. Every entry says what changed, why, which files, how it works, and how to test it.

### Part 3: Screenshots refreshed to match the current site

- **Date implemented:** 2 November 2026
- **What:** All 13 screenshots in the `screenshots/` folder were taken again, so they show the site as it is now.
- **Why:** The old screenshots were taken on 25 September, before the new header, top photo layout, gallery, session finder, map, forms and photos. They no longer matched the live site.
- **Files changed:** the 13 files in `screenshots/` (same names as before, so the Screenshot evidence tables needed no new links), and `README.md` (the note above the tables and this entry).
- **How it works:**
  - Each page was opened in a headless browser (a browser with no window that a script controls) at 1440px (desktop), 768px (tablet) and 375px (phone). About and Contact have desktop and phone pictures only, as before.
  - The script scrolled each page to the bottom and back first. This makes the sections that fade in, the lazy photos and the counting numbers all appear in the full-page picture.
  - The Google Sans font was loaded from a copy on the computer, because the tool could not reach Google Fonts. So the screenshots show the same font as the live site.
  - The two Contact screenshots show the map pin but not the map pictures. The tool could not reach OpenStreetMap, where the map pictures come from. On the live site they load.
- **How to test:** Open `screenshots/get-involved-desktop-1440px.jpg`. It should show the new top photo, the four gallery photos and the volunteer form with its date box. `services-desktop-1440px.jpg` should show the "Find a session" table. Compare any screenshot with the live page.

### Part 3: "How to update the website" guide (README)

- **Date implemented:** 2 November 2026
- **What:** A new README section, "How to update the website", written for volunteers. It explains how to change a file on GitHub, which file holds each common thing (session times, the shelf table, the home page numbers, page text, contact details), how to add photos, and what not to touch.
- **Why:** Volunteers look after the website and may not use code editors. A short guide means a time, a number or a photo can be changed without the original developer.
- **Files changed:** `README.md` (the new section, a new line in the Contents list, and this entry). The page size table was also measured again, because the form scripts and photos changed since the last time (see "3.3 Page speed").
- **How it works:** The guide uses the GitHub website instead of VS Code, so nothing needs installing. Each job names the exact file, and the steps for the shelf and for photos are numbered. The session times row says to change both `data/schedule.json` and the tables in `services.html`. The finder and the Get Involved replies read the JSON file. The fixed tables in `services.html` are what visitors see if the scripts fail. The guide warns volunteers to keep every comma and quote mark in the JSON file, because one wrong mark stops the finder loading (visitors would then see the fixed tables instead).
- **How to test:** Follow the steps with a small test change, such as one word on `about.html`. After you commit, wait 1 to 2 minutes and refresh the live site to see it.

### Part 3: New photo in the lightbox and a corrected Get Involved top photo (Get Involved page)

- **Date implemented:** 2 November 2026
- **What:** One repeated photo in the lightbox gallery was replaced with a new photo. The file names and descriptions of the Get Involved top photo were corrected to match the photo it now shows.
- **Why:** All four gallery photos were also used on other pages, so visitors saw the same pictures twice. The Get Involved top photo had been replaced with a new photo, but its file names and description still described the old one (a volunteer facing school children). That is wrong for screen readers and for search engines.
- **Files changed:**
  - `get-involved.html`: the fourth gallery link now opens the new photo (new `href`, `src` and `alt`; the caption stays "Welcome donors and sort their gifts at our drop-off point."). The top photo's `<source>`, `<img>`, `og:image` and `og:image:alt` lines use the new names and description.
  - `images/volunteers-passing-box-of-canned-food-800w.jpg` and `-400w.jpg` (new): the new gallery photo, made from the picture supplied at 800px. The 800px copy opens in the lightbox. The 400px copy is the small thumbnail.
  - `images/volunteer-handing-over-aid-box-800w.jpg` and `-400w.jpg` (renamed from `volunteer-with-school-children-...`): the top photo. The 400px copy was remade at 400 by 300 so it has the same shape as the 800px photo.
  - `README.md`: this entry and the image table row.
- **How it works:** The lightbox script (`js/lightbox.js`) opens every link inside `.gallery`, so no JavaScript needed changing. The pictures supplied were PNG files of 644 KB (800px) and 235 KB (400px). They were saved as JPG files of 67 KB and 23 KB, which keeps the page light. Three of the four gallery photos are still the earlier ones, which are also used on other pages. More new photos can be added the same way.
- **How to test:** Open Get Involved and scroll to "See what volunteering looks like". The fourth thumbnail should show hands passing a clear box of canned food. Click it: the large photo and its caption open. Press Next and Previous to go through all four photos. At the top of the page, the photo should show two volunteers passing a box marked AID beside a van.

### Part 3: Submit button no longer jumps away (all five forms)

- **Date implemented:** 2 November 2026
- **What:** Fixed a bug in the form checking. If a visitor typed a wrong value and clicked the Submit button straight away, nothing happened on the first click.
- **Why:** Clicking Submit makes the box the visitor was typing in lose focus. At that moment its red error message appeared and pushed the button down before the mouse button was released, so the click missed the button. I found it while testing the new forms. A visitor would have seen a button that "does nothing" the first time.
- **Files changed:** `js/validation.js`, `README.md`.
- **How it works:**
  - When the Submit button is pressed down (`pointerdown`, an event that fires when a mouse button is pressed or a finger touches the screen: Mozilla Developer Network, no date aa), the script sets a note to itself: `pressingSubmit = true`.
  - While that note is true, the "check this box when the visitor leaves it" step is skipped. The submit step still checks every box, so the messages still appear, but at the right moment.
  - When the mouse button or finger is released (`pointerup`), the note is set back to `false`.
- **How to test:** On Get Involved, in "Request a food parcel" type `L` in Name and `123` in WhatsApp number, then click "Send me the details" once. The red messages should appear and the cursor should jump to Name on that one click.
- **Tested:** automatically: a form was filled in and submitted, then filled in wrongly and submitted again, with a single click each time.

### Part 3: Contact form builds an email (brief 4.1, Contact page)

- **Date implemented:** 2 November 2026
- **What:** When the Contact form is filled in correctly, the page writes the visitor's details into an email. It shows the email (To, Subject and the full text) and a button, "Open in my email app". The visitor presses Send in their own email app.
- **Why:** The brief says the Contact form's information, once checked, should be put into an email that the visitor can send to the address written in the code.
- **Files changed:**
  - `contact.html`: the form now has `action="mailto:hello@greenleaffoodbank.org"`, `method="post"` and `enctype="text/plain"`. The address in `action` is who receives the email. The page's Content Security Policy (the list of what the page may load) now says `form-action 'self' mailto:`, so the form is allowed to open an email app. The script tag for `contact-email.js` was added.
  - `js/contact-email.js` (new): builds and shows the email.
  - `css/style.css`: `.form-success` rules for paragraphs, lists and the preview box, and the `.email-button` rule.
  - `README.md`: this entry.
- **How it works:**
  - **Who receives it.** `contact-email.js` reads the form's `action` and removes the `mailto:` part. To change who receives the emails, change only the `action` in `contact.html`.
  - **After the checks pass.** `validation.js` announces a custom event called `formvalid` when every box is correct. A custom event is an event the site defines itself, with its own name (Mozilla Developer Network, no date s). `contact-email.js` hears it and takes over from there (`event.preventDefault()` stops the form's normal action: Mozilla Developer Network, no date ae).
  - **The email.** Subject: `GreenLeaf website: ` plus the chosen topic. Body: Name, Email, Topic, then the message. The button is a `mailto:` link made of the address, `?subject=` and `&body=`. `encodeURIComponent` turns spaces, line breaks and characters such as `&` into a safe form that a link can carry, so typed text cannot be mistaken for part of the link itself (Mozilla Developer Network, no date r).
  - **The preview.** The details are shown as plain text in a `<pre>` box (`textContent`), so anything typed stays plain text and can never run as code. MDN notes that `innerHTML`, the alternative, "can be susceptible to XSS attacks" (Mozilla Developer Network, no date v). The button is a normal link with the `btn` class, so the site's link colour does not hide its white text.
  - **The form is not cleared**, so the visitor can fix a typo and press the button again.
  - **Nothing is sent until the visitor sends it.** The site has no server. The message leaves only when the visitor presses Send in their email app. The page says so under the button.
  - **Without JavaScript** the browser still checks the required boxes. Submitting then opens the visitor's email app with the form text (`enctype="text/plain"`). I could not test that step, because it depends on which email app the visitor has.
- **Also changed on this page:**
  - Removed the "Follow GreenLeaf" section and the "WhatsApp community group" link. All three links went to `#` and led nowhere.
  - The phone number on every page (Reach us, footers) and in the hidden business data is now `+27 65 823 4298`.
- **How to test:** On Contact, fill in all four boxes and press "Send message". A green box should show the email. Press "Open in my email app": your email app should open with the To address, subject and message already filled in. Change the Subject back to "Select a topic" and press the main button again: the old box disappears and the error shows.
- **Tested:** 18 automatic checks: empty and wrong input, the `mailto:` link, the subject, the body, a name typed as HTML staying as plain text, the button's text colour, and no sideways scrolling at desktop and phone width.

### Part 3: Enquiry forms reply with live times (brief: AJAX form submission, Get Involved page)

- **Date implemented:** 2 November 2026
- **What:** When a Get Involved form is filled in correctly, the page loads the session times in the background and shows a reply that suits that form, without reloading the page. A "Checking availability..." line shows first.
- **Why:** The brief says the enquiry form, once checked, should be processed and give the visitor a response about cost, availability or another useful detail. It also asks for AJAX (updating the page without reloading it).
- **Files changed:**
  - `js/enquiry.js` (new): the replies.
  - `get-involved.html`: the script tag.
  - `css/style.css`: reply box rules (shared with the Contact entry above).
  - `README.md`: this entry.
- **The replies:**

| Form | What the visitor sees |
| --- | --- |
| Request a food parcel | Thanks by name, "No paperwork is needed for a first visit" (the site already says this), and the parcel sessions whose place contains the area typed (for example "Alexandra"). If none match, all parcel times are shown with a line saying so. |
| Volunteer | Thanks by name, the start date in words (for example "2 November 2026"), and the sessions for the chosen area: parcel sessions for sorting, soup kitchen sessions for the soup kitchen, depot hours for driving, and all sessions for "something else". |
| Donate | Thanks by name, the amount (for example "R350"), a line saying payment instructions will be emailed, and the drop-off hours for anyone who would rather give food. |
| Partner your business | Thanks to the business, the email and how often they said they could donate, and the depot drop-off hours. |

- **How it works:**
  - **The "enquire" page.** The site has five pages and no separate `enquire.html`. The four Get Involved forms are the enquiry forms (volunteering, donating, partnering and requesting a parcel).
  - **After the checks pass.** `enquiry.js` hears the `formvalid` event from `validation.js`, copies what was typed with `FormData`, a set of name and value pairs made from the form's boxes (Mozilla Developer Network, no date u) and shows "Checking availability...".
  - **The background request.** `fetch("data/schedule.json")` asks for the times file without reloading the page. The script checks `response.ok` (did the file arrive?) and then reads the contents with `response.json()`. This is the same file the session finder uses, so changing a time in the file changes the replies too.
  - **Short lines.** Sessions with the same time and place are joined into one line: "Monday, Tuesday, Wednesday, Thursday and Friday, 08:00 to 17:00 at GreenLeaf Depot, Randburg".
  - **Safe text.** The reply is built with `createElement` and `textContent` (plain text, never HTML), in a box with `role="status"` so screen readers read it out.
  - **If the file cannot load**, the visitor sees "Thank you! We have your details. We could not load the session times just now. Please see our Services page for the latest times.", and the error goes to the browser console.
  - **After the reply** the form is cleared.
- **What AJAX means here, and its limit:** AJAX means the page asks for data in the background without reloading. `fetch` does that here. The site is on GitHub Pages and has no server, so no form data is sent anywhere. The background request only fetches the times that the reply is made from. To send the form to a real service later (a form service such as Formspree, for example), the request would change to `fetch(url, { method: "POST", body: data })`. I did not add that because it needs an account and I could not test it.
- **How to test:** Open the live site (or a local server such as VS Code Live Server; `fetch` does not work from a page opened straight from the folder). On Get Involved, fill in "Request a food parcel" with the area `Alexandra` and press the button: the Tuesday session in Alexandra should appear. Try `Soweto`: all parcel times should appear with a line saying there was no match. In the Donate form enter 350: the reply should show R350 and the drop-off hours.
- **Tested:** 13 automatic checks for the four replies, including a failed download (the file returns 404, which means "not found").

### Part 3: Date field and the formats the forms check (brief 4.1 validation)

- **Date implemented:** 2 November 2026
- **What:** The Volunteer form has a new required box, "Earliest date you can start", with a date picker. A date in the past, or more than a year ahead, is rejected with a clear message.
- **Why:** The brief lists dates among the formats to check. Before this, the forms checked phone numbers, email addresses, numbers and lengths, but not dates.
- **Files changed:** `get-involved.html` (the box `vol-date`), `js/enquiry.js` (sets the earliest and latest date), `js/validation.js` (the date messages), `README.md`.
- **How it works:**
  - The box is `<input type="date" required>`. The browser gives a date picker and refuses text that is not a date (Mozilla Developer Network, no date q).
  - When the page loads, `enquiry.js` sets `min` to today and `max` to one year from today, so the limits are always up to date. `min` is the earliest date accepted and `max` the latest, and dates outside that range fail the browser's check (Mozilla Developer Network, no date q).
  - `validation.js` shows "Please choose today or a later date." (`rangeUnderflow`, which means the date is too early), "Please choose a date within the next year." (`rangeOverflow`, too late) and "Please enter a valid date." (`badInput`, not a date at all).
- **Every format now checked:**

| Format | Where | Rule |
| --- | --- | --- |
| South African phone number | Volunteer, Request a parcel | `(\+27\|0)[0-9 ]{9,12}`: starts with +27 or 0, then 9 to 12 digits or spaces. For example 082 000 0000 or +27 82 000 0000 |
| Email address | Contact, Donate, Partner | `type="email"` and up to 120 characters |
| Date | Volunteer | from today up to one year ahead |
| Money amount | Donate | a whole number from 10 up to 1 000 000 |
| Number of characters | Names (2 to 80, business 2 to 100), area (2 to 80), message (10 to 1000) | `minlength` and `maxlength` |
| Choice from a list | Contact subject, Volunteer area, Partner frequency | cannot stay on the first "Select" line |

- **How to test:** On Get Involved, in "Volunteer with us" leave the date empty and press the button: you should see "This field is required." Type a past date: "Please choose today or a later date." Type a date in 2099: "Please choose a date within the next year."
- **Tested:** 4 automatic checks (empty, past, too far ahead, valid).

### Part 3: HTML forms and their purposes (brief 4.1)

- **Date implemented:** 2 November 2026
- **What:** I checked all five forms against the brief and wrote down how they differ. Two pages have forms: the Contact page sends a general message, and the Get Involved page holds four enquiry forms.
- **Why:** The brief asks for forms on the enquire and contact pages with different purposes, built with suitable elements, with checking, and with an `action` (where the form goes when submitted).
- **Files changed:** `contact.html` and `get-involved.html` (the changes are in the entries above), `README.md`.
- **The two kinds of form:**

| | Contact (`contact.html`) | Enquiry (`get-involved.html`) |
| --- | --- | --- |
| Purpose | A general message to the organisation | Ask about a service or offer help: request a parcel, volunteer, donate or partner |
| Collects | Name, email, topic (a list) and a message (up to 1000 characters) | Depends on the form: name, WhatsApp number, area, amount, email, date, frequency |
| Result | An email written for the visitor to send | A reply with times and availability |
| `action` | `mailto:hello@greenleaffoodbank.org` | `#` (the page's script handles it) |

- **Form parts used:** `<label for>` joined to each box by its `id`, input types `text`, `email`, `tel`, `number`, `date` and `submit`, `<select>` with a "Select..." first option, and `<textarea>` for the message. Also `autocomplete` (so browsers can fill in names and emails), `inputmode` (number keyboards on phones), `maxlength` and `placeholder`.
- **Tested:** the whole Contact and Get Involved flows are covered by the automatic checks in the entries above.

### Part 3: Form validation (all five forms)

- **Date implemented:** 1 November 2026
- **What:**
  - Every box on the five forms now has rules: required, minimum length, valid email, a South African phone number, and a donation of at least R10.
  - When a box is wrong, a short red message appears under it and the box gets a red border. When the form is correct, the messages are cleared and a green thank-you message appears under the button.
- **Why:** The brief asks for form validation (checking what the visitor typed). Before this, only the Contact email box was marked `required`.
- **Files changed:**
  - `contact.html` and `get-involved.html`: checking rules on every box (listed below), a one-line "All fields are required." note in each form, a `data-success` message on each `<form>`, and the `validation.js` script tag.
  - `js/validation.js` (new): shows and clears the messages. One script serves all five forms.
  - `css/style.css`: new `.form-note`, `.error-message`, `[aria-invalid="true"]` and `.form-success` rules.
  - `README.md`: this entry.
- **The rules, box by box:**

| Form | Box | Rules |
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
| Volunteer | Earliest start date | required, a date from today up to one year ahead (added 2 November 2026) |
| Partner | Business name | required, 2 to 100 characters |
| Partner | Contact email | required, valid email |
| Partner | Frequency | required (choose one) |
| Request a parcel | Name, WhatsApp number | as for Volunteer |
| Request a parcel | Nearest area | required, 2 to 80 characters |

- **How it works:**
  - **Two layers.** The HTML rules (`required`, `minlength`, `type="email"`, `pattern`, `min`) do the checking. Without JavaScript the browser's own checking still works. This is the approach MDN recommends starting with (Mozilla Developer Network, no date m).
  - **The script.** `form.noValidate = true` switches off the browser's own pop-up bubbles so we can show our own messages. For each box the script runs `field.checkValidity()` and reads `field.validity` (`valueMissing` = empty, `typeMismatch` = wrong kind, for example not an email, `tooShort`, `patternMismatch` = does not fit the pattern, `rangeUnderflow` = number too small) to choose the message. MDN describes this Constraint Validation API and the `novalidate` approach for custom messages (Mozilla Developer Network, no date m).
  - **When it checks.** When the visitor leaves a box (`blur`). Again as they type once the box has an error, so the message disappears as soon as it is fixed. And for all boxes when they press submit. On submit, the first wrong box gets the cursor.
  - **Accessibility.** A wrong box gets `aria-invalid="true"`, which tells assistive technology that the value "has failed validation" (Mozilla Developer Network, no date p), and `aria-describedby` pointing to its message, so screen readers read the message with the box. The thank-you box has `role="status"` so screen readers announce it. The error colour is `--tomato` (#c1432e, about 5:1 contrast on white, above the 4.5:1 minimum for normal text: World Wide Web Consortium, no date c), and it always comes with message text, so colour is not the only signal.
  - **Safety.** Messages are written with `textContent`, never `innerHTML`, so they can never run as code.
  - **No server.** When this entry was written, the forms only showed a thank-you message. On 2 November 2026 the Get Involved forms were changed to show a reply with live times, and the Contact form to build an email (see the entries above). The site still has no server.
- **How to test:** On Contact, press "Send message" with the form empty: four red messages appear and the cursor jumps to Name. Type `A` in Name and click away: "Please enter at least 2 characters." Type `abc` in Email: "Please enter a valid email address." Fill everything in correctly and send: a green thank-you message appears and the form clears. On Get Involved, try `12345` in a WhatsApp number (rejected) and `082 000 0000` (accepted), and `5` as a donation amount ("The minimum is 10."). In the browser's settings turn JavaScript off: the browser's own bubbles appear instead.
- **Tested:** 32 automatic checks, including every phone format above, each form on Get Involved, the success messages and JavaScript switched off.

### Part 3: Session finder with dynamic loading, search, filter and sort (Services page)

- **Date implemented:** 1 November 2026
- **What:** A new "Find a session" section at the top of the Services page. It loads every food parcel, soup kitchen and drop-off time from a data file. The visitor can search by word, filter by service and by day, and sort by day, start time, location or service. A line says "Showing 4 of 9 sessions", and a "Clear filters" button appears if nothing matches.
- **Why:** The brief asks for dynamic content loading (2.2) and search, filter and sort (2.2). The schedule is the part of the site that visitors most need to look up.
- **Files changed:**
  - `data/schedule.json` (new): the nine sessions (service, day, day number, start, end, location). To change a time, edit this file and the page updates by itself.
  - `js/schedule.js` (new): loads the file and does the search, filter and sort.
  - `services.html`: the `#session-finder` section (hidden until it works) and the script tag.
  - `css/style.css`: `.finder-controls`, `#finder-count`, `#finder-empty button` and `.visually-hidden` rules.
  - `README.md`: this entry.
- **How it works:**
  - **Loading the file.** `fetch("data/schedule.json")` asks for the file in the background. `fetch` gives a result even when the server answers with an error (Mozilla Developer Network, no date n), so the script checks `response.ok` itself (did the file really arrive?) before reading it with `response.json()`. The `response.ok` check is standard practice, not something that page states.
  - **Filling the lists.** The "Service" and "Day" lists are built from the data. A new service in the file appears in the list without editing the HTML. Days are put in week order using `dayNumber`.
  - **Search and filter.** A session is shown when it matches the typed word (in the service, day, time or location, ignoring capital letters), the chosen service and the chosen day, all together.
  - **Sort.** Each option sorts by one thing and uses a second thing to break ties (for example start time, then day).
  - **Drawing the table.** The table body is emptied and rebuilt with `insertRow` and `insertCell`, and each cell is filled with `textContent` (plain text). The count line is an `aria-live="polite"` area, which tells screen readers to announce changes at the next suitable moment without interrupting what they are reading (Mozilla Developer Network, no date t), so they say "Showing 2 of 9 sessions" when it changes.
  - **Safe fallback.** The finder is `hidden` in the HTML. It only appears, and only hides the two fixed schedule tables it replaces, after the data has loaded. If JavaScript is off or the file cannot load, the fixed tables stay visible, so the schedule is never lost. It also means search engines still see the schedule in the page's HTML.
- **How to test:** Open Our Services from the live site (or a local server such as VS Code Live Server; `fetch` does not work when a page is opened straight from the folder, because browsers block it). Under "Find a session": choose "Soup kitchen" (2 sessions), choose Tuesday (2), type `alex` (1: Alexandra), type `zzz` (a message and "Clear filters" appear), and try each "Sort by" option.
- **Tested:** 16 automatic checks, including a pretend failed download and JavaScript switched off.

### Part 3: Interactive map (Contact page)

- **Date implemented:** 1 November 2026
- **What:** The Contact page has a new "Find the depot on the map" section with a map you can drag and zoom, a pin for the depot and a popup with the address and opening hours.
- **Why:** The brief asks for an interactive map (2.1), and it helps local SEO.
- **Files changed:**
  - `vendor/leaflet/` (new): the Leaflet 1.9.4 map tool (`leaflet.js`, `leaflet.css`, the marker and control pictures and its licence).
  - `js/map.js` (new): builds the map.
  - `contact.html`: the `#find-us` section and `#map` box, the Leaflet stylesheet link, the two script tags, and a Content Security Policy that also allows map pictures from `tile.openstreetmap.org`.
  - `css/style.css`: `#map` rules (22rem high, rounded corners, light green while loading).
  - `README.md`: this entry.
- **How it works:**
  - **Map tool and map pictures.** Leaflet draws the map. The map pictures (called tiles) come from OpenStreetMap, as in Leaflet's own quick-start guide (Leaflet, no date). The credit "© OpenStreetMap contributors" is shown on the map, as the OpenStreetMap tile policy requires. That policy also forbids bulk downloading and requires the browser to send a valid Referer (the address of the page asking). That is why the referrer policy was not made stricter (OpenStreetMap Foundation, no date).
  - **Kept on our own site.** Leaflet is copied into `vendor/leaflet/` instead of being loaded from another company's server. This avoids an extra outside request and an outside script (see Security).
  - **`js/map.js`.** If the `#map` box and Leaflet both exist, the script empties the box (which removes the fallback link), creates the map with `L.map`, centres it with `setView` at zoom 15, adds the map pictures with the credit text, and adds a pin with a popup (`bindPopup`). The depot position is one line: `var depot = [-26.09441, 28.00673];`. These numbers are approximate (central Randburg), so change them to the real spot.
  - **Scroll-wheel zoom is off** (`scrollWheelZoom: false`), so the map does not take over page scrolling on a phone or trackpad. Zoom with the + and - buttons. Leaflet's built-in keyboard controls still work.
  - **Without JavaScript, or if the map fails**, the box shows a plain link to the area on OpenStreetMap.
  - **Safe links.** The two credit links carry `rel="noopener noreferrer"`.
- **How to test:** Open Contact and scroll to the map. Drag it, press + and -, and click the pin (a popup shows the address). Check the credit in the bottom-right corner. On a phone, scroll the page with your finger across the map: the page should keep scrolling.
- **Tested:** 9 automatic checks (map created, pin, credit, map picture requests, zoom button, popup text, size, no errors, JavaScript-off fallback). The test environment cannot download real map pictures, so I could not see the street map itself. Please check it once on the live site.

### Part 3: On-page SEO and mobile friendliness (brief 3.1)

- **Date implemented:** 1 November 2026
- **What:**
  - Different title tags, meta descriptions, canonical links, robots tags, and share tags (Open Graph and Twitter card) on all five pages.
  - Keyword wording added to titles, descriptions, headings and opening text (see the keyword table above).
  - Heading levels fixed so no level is skipped.
  - Photos renamed to describe what they show, alt text rewritten to match the real photo, and a favicon and phone icon added.
  - Links added between pages with clear link text.
  - Hidden business data (JSON-LD, type `NGO`) on Home and Contact.
  - Form boxes and the phone menu made easier to tap.
- **Why:** The brief's 3.1 lists keyword research, title tags and descriptions, header tags, image optimisation, URL structure, internal linking and mobile friendliness.
- **Files changed:**
  - All five HTML pages: new `<head>`, headings, photo tags and alt text, internal links, header logo file name.
  - `images/`: files renamed (full table above), plus new `greenleaf-logo-96.png`, `favicon-32.png` and `apple-touch-icon.png`. `favicon.ico` is in the project root.
  - `css/style.css`: the `.subheading` rule, the 640px rule for 44px form boxes with 16px text, and 44px menu links in the 768px menu rules.
  - `README.md`: this entry and the "SEO, page speed and security" section.
- **How it works:** The full tables (titles and descriptions with their lengths, heading outlines, image names and alt text, addresses, links) are in the "SEO, page speed and security" section above. Two decisions to note. First, the Home page's top section keeps its three action links and has no extra links in its text, because you asked for it to stay uncluttered. So the links to each service sit on the three "What we do" card titles instead. Second, the Contact page photo was never a map, so it now has a true alt text and the real interactive map sits lower on the page.
- **How to test:** In the browser, view the page source of any page and look inside `<head>`. Paste a page link into a social app or a link preview tool to see the share card (this works once the site is live). Look at the browser tab for the icon. In a phone-sized window, open the menu and tap through the links and form boxes.
- **Tested:** 109 automatic checks (105 across the five pages, plus the hidden business data, `robots.txt` and `sitemap.xml`): title and description lengths and that none repeat, canonical and share tags, one `<h1>` and no skipped heading levels, every photo loads and has `width`, `height` and alt text, no generic photo names, every internal link works, the JSON-LD is valid, no broken files, no console errors. Mobile: no sideways scroll at 320, 360, 375, 414 and 768px, and form boxes and menu links are at least 44px tall.

### Part 3: Off-page SEO plan, robots.txt and sitemap.xml (brief 3.2 and 3.3)

- **Date implemented:** 1 November 2026
- **What:** Added `robots.txt` and `sitemap.xml`, the off-page SEO plan (links from other sites, social media, local SEO) with an honest status for each item, and local-SEO business data on Home and Contact.
- **Why:** The brief lists backlinks, social media and local SEO under 3.2, and a robots file and a sitemap under 3.3.
- **Files changed:**
  - `robots.txt` (new) and `sitemap.xml` (new), both in the project root.
  - `index.html` and `contact.html`: JSON-LD business data in `<head>`.
  - `README.md`: this entry and the plan in the "SEO, page speed and security" section.
- **How it works:** What each file says, and why, is in the "SEO, page speed and security" section above, including the limit that Google will not read our `robots.txt`. The business data uses `@type: NGO` with address, phone, email, opening hours and `areaServed`. The map coordinates are marked in the code as approximate.
- **What the organisation still has to do:** create the social media accounts and add their links to the Contact page, ask partners and local sites for links, claim a Google Business Profile, and submit `sitemap.xml` in Google Search Console. These cannot be done in the website files.
- **How to test:** Open `/robots.txt` and `/sitemap.xml` on the live site. They should show as plain text and XML. Run Google's Rich Results Test on the Home or Contact address to see the business data (a tool outside this project that I have not run).
- **Tested:** the sitemap is valid XML and lists all five pages. `robots.txt` has the required lines. Both JSON-LD blocks are valid and include an address and opening hours.

### Part 3: Page speed (brief 3.3)

- **Date implemented:** 1 November 2026
- **What:** Four of the five pages now download 36% to 70% less data. The Contact page stays about the same, because it gained the map tool. The measured numbers are in the table in the "SEO, page speed and security" section.
- **Why:** The brief asks for faster loading.
- **Files changed:** the logo files in `images/`; the `loading="lazy"`, `decoding="async"` and `fetchpriority="high"` settings and `preconnect` links in the HTML; the font link keeps `display=swap`; `README.md`.
- **How it works:** See the list of seven changes in the "Page speed" part of the SEO section. The biggest single saving is the logo. It was a 2000 x 2000 pixel, 205 KB file shown at 40 x 40 pixels. It is now 96 x 96 pixels and 11 KB.
- **How to test:** Open the browser's developer tools, choose the Network tab, reload a page and read the total at the bottom. Then scroll down: the lower photos should load only as you get near them.
- **Tested:** page sizes before and after were measured with the same script at 1280px and 375px wide (method in the SEO section).

### Part 3: Security measures (brief 3.3)

- **Date implemented:** 1 November 2026
- **What:** A Content Security Policy (a list of what each page may load) and a referrer policy on every page, safe settings on outside links, a rule that no page contains inline scripts, the map tool kept on this site, and a `.gitignore` for computer-made files.
- **Why:** The brief asks for security measures that protect the website from attacks.
- **Files changed:** the `<head>` of all five pages; `js/map.js`; `vendor/leaflet/`; `.gitignore` (new); `README.md`.
- **How it works:** See the Security table and the "What cannot be done here" list in the SEO section. The policy tells the browser to load scripts only from this site, which blocks most attacks that sneak in a script. The honest limit is that GitHub Pages does not allow custom HTTP headers.
- **One step for you:** `.DS_Store` was already committed before `.gitignore` existed. To stop tracking it, run `git rm --cached .DS_Store` once and commit. Also tick "Enforce HTTPS" in the repository's Pages settings.
- **How to test:** Open the developer tools console on every page. There should be no red "Refused to load" messages. In the Network tab, the only outside requests should be Google Fonts (and, on Contact, OpenStreetMap map pictures).
- **Tested:** automatic checks on all five pages: no console or Content Security Policy errors, no inline scripts or `onclick` attributes, and every outside link has `rel="noopener noreferrer"`.

### Part 3: SVG icons for the four values (About page)

- **Date implemented:** 30 October 2026 (Transparency wording updated 31 October 2026)
- **What:** Each of the four values (Dignity, Transparency, Community, Reliability) now has a small icon in a round green badge beside its text. The icons are a heart, an eye, two people and a calendar with a tick.
- **Why:** The values were plain text in boxes. Icons make them quicker to scan, and they use the site's own green.
- **Files changed:**
  - `about.html`: each value `<li>` now holds an inline `<svg class="value-icon">` followed by the text in a `<p>`.
  - `css/style.css`: new `.value-icon` rules (badge size, colours, line style). The value cards became a row (icon, then text), and `#values li p` has no extra margin.
  - `README.md`: this entry.
  - `about.html` (wording): the Transparency value used to say "we publish how donations are used", but no page showed that. It now says "we show what is on our shelves each week and publish our distribution schedule", which the Home page shelf table and the Services schedule tables already do.
- **How it works:**
  - **Inline SVG.** An SVG is a picture made of lines and shapes. These are written straight into the HTML on a 24 by 24 grid (`viewBox="0 0 24 24"`), so they need no extra file or request and stay sharp at any size.
  - **Colours from the CSS.** `fill: none` with `stroke: var(--green)` draws each icon as an outline in the main green. The badge is a circle (`border-radius: 50%`) filled with `var(--green-tint)`. Changing those two variables recolours every icon.
  - **Accessibility.** The icons are decoration, because each value already has a text label. They carry `aria-hidden="true"`, so screen readers skip them (Mozilla Developer Network, no date ad).
  - **Layout.** Each card uses Flexbox (`display: flex`, icon then text). The cards still sit two per row and drop to one per row on phones.
- **How to test:** Open About and scroll to "Our values". Each card should show a green outline icon in a pale green circle. Narrow the window to a phone width: the cards should stack in one column and the icons should stay round.

### Part 3: Photo gallery lightbox and matching page top photos

- **Date implemented:** 30 October 2026
- **What:**
  - Get Involved has a new "See what volunteering looks like" section with four small photos. Clicking one opens it large in a pop-up (a lightbox) with a caption, "Photo 2 of 4", and Previous, Next and Close buttons.
  - The first photo on About, Our Services, Contact and Get Involved now follows the Home layout: photo on top (800px wide at most, centred), then the heading and text underneath.
- **Why:** The brief asks for a gallery with a lightbox. The volunteering photos also encourage visitors to sign up. The other pages had small photos beside or under the heading, which did not match the Home page.
- **Files changed:**
  - `js/lightbox.js` (new): builds the pop-up and controls it.
  - `get-involved.html`: the top photo is now first (800px), a new `#gallery` section has four links that wrap small photos (each link holds the big photo in `href` and the caption in `data-caption`), and the `lightbox.js` script tag.
  - `about.html`: the depot photo moved above the heading into a `page-hero` section.
  - `services.html`: the food parcels photo moved from beside the first service to the top of the page. The first service now shows text and its schedule table.
  - `contact.html`: the map photo moved out of the details column into a new `#contact-intro` section with a one-line intro. The details and the form stay side by side below it.
  - `css/style.css`: the Home top-section rules now also apply to `.page-hero`, so one set of rules covers all five pages. New `.gallery` rules (4 columns, 2 on phones) and `.lightbox` rules.
- **How it works:**
  - **Top photos.** `.page-hero` is the same Flexbox column as `#hero`. The picture is `width: 100%` with `max-width: 800px`, so it is never stretched bigger than its real size.
  - **Lightbox.** The script finds every `.gallery a` link and creates a `<dialog>` (a built-in pop-up element) with `document.createElement`. It opens it with `showModal()` when a small photo is clicked. `showModal()` shows the dark background (`::backdrop`) and makes the rest of the page unclickable while the pop-up is open (Mozilla Developer Network, no date l). `event.preventDefault()` stops the link from leaving the page, because it cancels the browser's normal action for the click (Mozilla Developer Network, no date ae). Previous and Next use `(n + total) % total`, which goes back to the first photo after the last one, and to the last photo before the first. The left and right arrow keys also move between photos. Escape, the Close button and a click on the dark area all close it. In testing, the cursor went back to the small photo afterwards.
  - **Without JavaScript.** The small photos are ordinary links, so each one just opens the full photo.
- **How to test:** Open Get Involved and scroll to the gallery. Click a photo: the pop-up opens with a caption. Press the left and right arrow keys, then Escape. Click Next on the last photo and it should go to the first. Click the dark area to close. Then open About, Our Services and Contact: the first photo should sit centred above the heading, like Home. Narrow the window to a phone width: the gallery becomes 2 columns and the pop-up still fits the screen.

### Part 3: Home page top section and "at a glance" simplified

- **Date implemented:** 30 October 2026
- **What:**
  - The top photo now sits at the top of the Home page at 800px wide, with the headline, a shorter intro and the links centred underneath.
  - The "Donate food or funds" link was removed from that section, because the Donate button in the header does the same job. The other three links stay.
  - "GreenLeaf at a glance" now shows three big numbers with a short label each, instead of four boxes with a sentence in each. The "72 hours" number was dropped.
  - There is more space between sections on every page.
- **Why:** The Home page felt crowded. The photo was small and beside a long block of text, and the four number boxes each held a full sentence.
- **Files changed:**
  - `index.html`: new top section (photo first at 800px, then the text), the intro shortened to two sentences, the Donate link removed, and the numbers changed to three.
  - `css/style.css`: the top section rules were replaced (stacked, centred, photo no wider than 800px). The numbers rules were replaced (no boxes, large number, short label). The old tablet and phone rules for the boxes were removed. A phone rule keeps all three numbers side by side. The gap between sections went from `var(--space-5)` to `var(--space-6)`.
  - `README.md`: this entry.
- **How it works:**
  - **Top section.** `#hero` is a Flexbox column. The picture is `width: 100%` with `max-width: 800px`, which is the photo's own width, so it is never stretched and stays sharp. On phones it simply fills the width. The text block is no wider than 40rem so lines stay easy to read.
  - **Numbers.** Each `<li>` holds a `.stat-number` and a short label. The counting animation still works, because the script only looks for the `.count` spans inside them.
  - **Spacing.** The single rule `main > section { margin-bottom }` sets the gaps, so every page changed together.
- **How to test:** Open the Home page. The photo should be centred at 800px on wide screens, with the headline and three links below it, and no "Donate food or funds" link. Scroll to "GreenLeaf at a glance" and watch the three numbers count up. Narrow the window to a phone width: the photo fills the width and the three numbers stay in one row.
- **Note on earlier entries:** the animated counters entry below describes four numbers, and the direct links entry lists a Donate link in the top banner. This entry changed both.

### Part 3: Header, navigation and single font (all pages)

- **Date implemented:** 30 October 2026
- **What:**
  - The logo, site name and menu links are now one bar across the top of every page, with a Donate button at the right-hand end. The bar stays at the top while scrolling.
  - The link for the page you are on is highlighted.
  - The tagline was removed from the header. The footer already has it.
  - The whole site now uses one font, Google Sans. Lora and Roboto are no longer used.
  - Each page now has its own `<h1>` (main heading). Before, every page had the site name as its `<h1>`.
- **Why:** The old header stacked the logo, name, tagline and menu in separate rows, which looked unbalanced. One bar is cleaner and puts Donate in the same place on every page. One font follows the design advice to limit the number of fonts. A different main heading on each page suits search engines and screen readers better than the same one everywhere.
- **Files changed:**
  - `index.html`, `about.html`, `services.html`, `get-involved.html`, `contact.html`: new `<header class="site-header">` with the brand link and `<nav>`, `aria-current="page"` on the current link, the first main heading changed from `<h2>` to `<h1>`, one Google Fonts link instead of two, and the `menu.js` script tag.
  - `css/style.css`: new header, brand, menu and button rules replace the old `header` and `nav` rules. All three font variables now list Google Sans. Headings are bold (700). `.btn` and `.btn-accent` were added, and the gap left above a form when you jump to it (`scroll-margin-top`) was changed to `6rem`.
  - `README.md`: the text section, the breakpoint note, the folder structure, the checklist, and this entry.
- **How it works:**
  - **Header.** `.site-header` is `position: sticky` (it stays at the top of the screen once you scroll to it: Mozilla Developer Network, no date z) and uses Flexbox, with the brand on the left and the links on the right. Its side space lines the bar up with the page content on wide screens.
  - **Donate button.** It is the only place the wheat (gold) accent colour is used (`.btn-accent`). Dark green text on wheat has a contrast ratio of about 6.4 to 1, which passes the 4.5 to 1 level (called AA) needed for normal text (World Wide Web Consortium, no date c). White text on wheat would only reach about 2.2 to 1, so it was not used.
  - **Current page.** `aria-current="page"` tells screen readers which page is open (Mozilla Developer Network, no date ab). The CSS uses the same attribute to highlight the link.
  - **Fonts.** All headings and text take their font from `--font-display`, `--font-body` or `--font-mono`. All three now point to Google Sans, so changing the font later takes one edit.
- **How to test:** Open every page. The header should be one row with the Donate button at the right, the current page's link highlighted, and each page showing its own large heading. Check that all text looks like Google Sans. Open the browser's Network tab to confirm there is only one font request.

### Part 3: Mobile menu (brief 2.1: advanced DOM manipulation)

- **Date implemented:** 30 October 2026
- **What:** On screens 768px wide or narrower, the menu links are hidden behind a "Menu" button with a three-bar icon. Tapping it drops the links and the Donate button down under the header.
- **Where:** All five pages.
- **Files added or changed:**
  - `js/menu.js` (new): creates the button and opens and closes the menu.
  - `css/style.css`: a "Mobile menu" block before section 9, a small rule on phones for the site name, and the button and dropdown styles.
  - All five HTML pages: the script tag for `js/menu.js`.
  - `README.md`: this entry, the checklist row, the folder structure and the references.
- **How it works:**
  - **Making the button.** The script creates the button with `document.createElement("button")`, sets its attributes and puts it into the nav (Mozilla Developer Network, no date k). Until it is put in, the button is not on the page.
  - **Showing and hiding.** The button adds and removes a `menu-open` class on the nav. The CSS shows the link list only when that class is there, on screens 768px wide or narrower.
  - **Accessibility.** The button follows the "disclosure" pattern. It has `aria-expanded` set to true or false (so screen readers know if the menu is open) and `aria-controls` pointing at the link list. As a real `<button>`, it works with Enter and Space (World Wide Web Consortium, no date b; Mozilla Developer Network, no date e).
  - **Extras I added.** The menu also closes when a link is chosen (a link to the same page does not reload it), when you click outside it, and when you press Escape, which sends the cursor back to the button. The W3C page does not mention Escape, so that part is an extra I added for convenience.
  - **The icon.** The three bars are drawn with CSS, with no picture file: the middle bar plus its `::before` and `::after` parts.
- **Without JavaScript:** the script is what creates the button, so with JavaScript off there is no button. The links wrap onto extra rows and stay visible.
- **Changing it:** the width where the menu switches is the `768px` in the "Mobile menu" media query in `css/style.css`.
- **How to test:** Make the browser narrower than 768px, or use a phone. The links should be hidden and a Menu button shown. Click it to open the links, then press Escape, click outside, or choose a link to close it. Make the window wider again and the normal links should come back.

### Part 3: Font pairing change (Google Sans headings, Lora site name)

- **Date implemented:** 30 October 2026
- **Superseded:** this change was replaced by the single font Google Sans, described in the entry "Header, navigation and single font" above.
- **What:** Headings and the large counter numbers now use Google Sans. The site name in the header stays in Lora, because the lettering looked best in that font. Body text and labels are still Roboto.
- **Why:** The earlier Lora and Roboto pairing (Google Fonts, no date a) was tried against several other pairs in side-by-side mockups. Google Sans with Roboto was chosen for a cleaner, more modern look. Lora was kept only for the site name.
- **Files changed:**
  - `css/style.css`: `--font-display` now lists Google Sans, and a new `--font-brand` variable holds Lora. `header h1` uses `--font-brand`.
  - `index.html`, `about.html`, `services.html`, `get-involved.html`, `contact.html`: a second Google Fonts `<link>` loads Google Sans, and the comment above the links was updated.
  - `README.md`: the font table, the design notes, a new reference, and this entry.
- **How it works:** Every heading (`h1` to `h4`) takes its font from `--font-display`, so changing that one variable changes them all. The header `h1` is the only place that overrides it, with `--font-brand`. Google Sans is loaded by its own `<link>` tag. If that request ever failed, Lora and Roboto would still load, and the headings would fall back to the system sans-serif fonts listed after it.
- **How to test:** Open any page with an internet connection. Headings should look like Google Sans, the site name at the top should look like Lora, and body text should look like Roboto. In the browser's developer tools, the Network tab should show the Google Sans request succeeding.

### Part 3: Table borders and direct links to each form

- **Date implemented:** 30 October 2026
- **What:**
  - The two tables on the Services page now use the same thin, soft borders as the Home page table.
  - On the Home page, the links in the top banner ("Fighting food insecurity in our community") now jump straight to the right form on the Get Involved page. Before, three differently named links all opened the same page at the top.
  - A fourth link, "Partner your business", was added to that row.
- **Why:** The Services tables still had an old `border="1"` setting, which draws hard black lines around every cell. The three Home links gave visitors no way to reach their form without scrolling and searching.
- **Files changed:**
  - `services.html`: `border="1"` removed from both `<table>` tags.
  - `index.html`: links now point to `get-involved.html#donate`, `#volunteer`, `#partner` and `#request-parcel`, and "Partner your business" was added.
  - `css/style.css`: `scroll-margin-top` added to the four form sections, with a larger value in the phone section.
  - `README.md`: this entry.
- **How it works:** Each form section on the Get Involved page already had an `id`. A link that ends in `#` plus that id makes the browser scroll to that section. The menu bar stays fixed at the top of the screen, so `scroll-margin-top` tells the browser to stop a little early and leave the form heading visible (Mozilla Developer Network, no date ac). The menu bar is about 59px tall on wide screens, about 110px on a narrow tablet where it wraps onto two rows, and about 215px on phones where the links stack. That is why the value is `8rem` normally and `15rem` in the phone section.
- **Changing it:** If the menu bar height changes, for example when a mobile menu button is added, change the two `scroll-margin-top` values in `css/style.css`.
- **How to test:** Open the Home page and click each of the four links. Each should land on its form with the heading in view and not hidden behind the menu bar. Try this at a narrow browser width as well. Open the Services page and check the tables look like the Home table.

### Part 3: Animated counters (brief 2.1: animations and transitions, step 2 of 3)

- **Date implemented:** 30 October 2026
- **What:** The four numbers in "GreenLeaf at a glance" on the Home page (1,200, 18, 340 and 72) count up from 0 to their final value when they scroll into view. The count runs once per page load and takes 1.5 seconds.
- **Where:** Home page, "GreenLeaf at a glance" section.
- **Files changed:**
  - `index.html`: each number is wrapped in `<span class="count" data-target="...">`. The span still contains the final number as normal text, and `data-target` holds the number to count up to.
  - `js/animations.js`: a `countUp` function and a second `IntersectionObserver` were added below the scroll reveal code. The "at a glance" section needed no CSS changes.
  - `README.md`: this entry, the checklist row, and two new references.
- **How it works:** The script finds every `.count` span and sets it to 0, so the final number never flashes before the counting begins. An `IntersectionObserver` (a browser tool that tells you when something comes into view) waits until a number is on screen, then `countUp` runs. It uses `requestAnimationFrame`, which updates the number just before each screen redraw (Mozilla Developer Network, no date i). Each frame works out how far through the 1.5 seconds it is, using the browser's own frame time, so the speed is the same on every screen. The number shown is the target multiplied by that progress and rounded. `toLocaleString("en-US")` adds the comma between thousands, so 1200 appears as 1,200 and matches the text on the page (Mozilla Developer Network, no date j). When progress reaches 100% the loop stops, and the observer stops watching that number.
- **Reduced motion:** If the visitor has asked their device to reduce motion, the counters are skipped (the same `reduceMotion` check the scroll fade-in uses), so the final numbers show straight away.
- **Without JavaScript:** The final numbers are already in the HTML, so nothing is lost.
- **How to test:** Open the Home page and scroll down to "GreenLeaf at a glance". The numbers should run from 0 up to 1,200, 18, 340 and 72, then stay put. Scroll away and back: they should not count again. Turn on "Reduce motion" in your device's accessibility settings and reload: the numbers appear instantly.

### Part 3: Stock status redesign ("This week's shelf" table on Home)

- **Date implemented:** 30 October 2026
- **What:** The Critical, Low and Stocked labels in the "This week's shelf" table are now shown as three small bars plus the word. One red bar means Critical, two amber bars mean Low and three green bars mean Stocked. The table no longer has hard black cell borders.
- **Why:** The old pill-shaped badges were set to `display: inline-block` inside table cells, which pulled them out of line with their rows and cut the row lines short. "Stocked" also had no badge, so the three states looked different from each other.
- **Where:** `index.html`, "This week's shelf" section.
- **Files changed:**
  - `index.html`: each status cell now holds a `<span class="stock stock-...">` with a row of three `<i>` bars, then the word. The old `border="1"` setting was removed from this table.
  - `css/style.css`: the old badge rules in section 8 were replaced by the stock bar rules. Smaller bar sizes were added to the tablet (1024px) and phone (640px) sections.
  - `README.md`: this entry and a checklist row.
- **How it works:** The word is still real text, so screen readers and visitors without CSS still read "Critical", "Low" or "Stocked". The bars are decoration only, so they carry `aria-hidden="true"`, which hides an element from screen readers (Mozilla Developer Network, no date ad). Filled bars have the class `on`. Each status class sets a bar colour (`--level`) and a darker label colour, which keeps the text easy to read on white.
- **Changing it:** The bar size is set by three variables at the top of section 8 (`--bar-width`, `--bar-height`, `--bar-gap`). The tablet and phone sections change these values on smaller screens. On phones the shelf table drops its 480px minimum width, so it fits without sideways scrolling.
- **How to test:** Open the Home page and scroll to "This week's shelf". The bars and words should line up with every row. Make the browser window about 375px wide: the table should still fit with no sideways scrolling.

### Part 3: Scroll reveal (brief 2.1: animations and transitions, step 1 of 3)

- **Date implemented:** 30 October 2026
- **What:** Sections now fade in and rise slightly as they scroll into view. This is the first of three animation steps. Animated counters and a smooth accordion follow.
- **Where:** All five pages (every `<section>` inside `<main>`).
- **Files added or changed:**
  - `js/animations.js` (new): the scroll reveal script.
  - `css/style.css`: new "Scroll reveal" block at the end of section 8, plus the Contents list at the top.
  - `index.html`, `about.html`, `services.html`, `get-involved.html`, `contact.html`: one `<script>` tag before `</body>`.
  - `README.md`: this entry, the Part 3 checklist, the folder structure, and three new references.
- **How it works:** When the page loads, the script adds the class `reveal` to every section in `<main>`. The CSS gives `.reveal` an opacity of 0 (invisible), a 20px downward shift and a 0.5 second transition. An `IntersectionObserver` watches the sections. When one comes into view it gets the class `visible`, which sets the opacity back to 1 and removes the shift, so the section fades in and rises into place. The observer then stops watching that section, so the effect happens once (Mozilla Developer Network, no date f).
- **Reduced motion:** `window.matchMedia("(prefers-reduced-motion: reduce)")` checks whether the visitor has asked their device to keep motion to a minimum (Mozilla Developer Network, no date g, h). If so, the script does nothing, the `reveal` class is never added, and every section just appears normally.
- **Without JavaScript:** The script is what hides the sections, so with JavaScript off every section is visible.
- **How to test:** Open any page and scroll down slowly. Sections should fade in as they arrive and not repeat. Turn on "Reduce motion" in your device's accessibility settings and reload. The sections should then appear without any animation.

### Part 3: FAQ accordion (brief 2.1: accordion)

- **Date implemented:** 30 October 2026
- **What:** Added a collapsible "Frequently asked questions" section with six questions. Each answer is hidden until its question is clicked, and clicking again hides it. An accordion suits this content because the questions are short and separate, and it keeps the page compact.
- **Where:** Get Involved page, below the four forms.
- **Files added or changed:**
  - `get-involved.html`: new `#faq` section and a `<script>` tag before `</body>`.
  - `js/accordion.js` (new): the accordion behaviour.
  - `css/style.css`: new "Accordion" block in section 7 (Components).
  - `README.md`: this entry, the Part 3 section, the Contents list, the folder structure, and two new references.
- **How it works:** Each question is a `<button>`. When the page loads, the script hides every answer and sets `aria-expanded="false"` on its button. Clicking a question switches `aria-expanded` between `"true"` and `"false"` and shows or hides the matching answer. Each question works on its own, so several can be open at once.
- **Accessibility:** Because the questions are buttons, Enter and Space work as well as the mouse. `aria-expanded` tells screen readers whether an answer is open, and `aria-controls` links each button to its answer (World Wide Web Consortium, no date a; Mozilla Developer Network, no date e). The questions sit inside `<h3>` headings so they appear in a screen reader's list of headings, and the existing `:focus-visible` outline (the ring that shows which item the keyboard is on) applies.
- **Without JavaScript:** All answers stay visible, so no content is lost.
- **How to test:** Open the Get Involved page and scroll to the FAQ. Click a question to open it and click again to close it. Press Tab to move between questions and Enter or Space to open one. A plus sign marks a closed question and a minus sign an open one.

### Part 2: Comment clean-up and softer status badges

- Shortened and tidied the comments in `index.html` and `css/style.css`. No code changes.
- Replaced the badges' solid coloured borders with a soft ring: `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08)`.
- Made the Critical and Low badge colours more muted and slightly reduced the badge text size.
- Combined the shared badge settings into one rule.

### Part 2: Real photography replaces placeholders

- *Note: these files were renamed on 1 November 2026 to describe what they show. The old and new names are in the "Image optimisation" table in the SEO section.*
- Replaced all seven placeholder images with real photos supplied by the site owner: `hero-banner`, `food-parcels`, `soup-kitchen`, `donation-dropoff`, `about-depot`, `contact-map`, and `volunteers`.
- Cropped each photo to a standard shape (16:9 for the hero banner, 4:3 for the rest) and remade the `-400w` and `-800w` versions.
- Removed another charity's watermark from `about-depot` and `contact-map` by blending in clean background from the same photo, so no other organisation's branding appears on the site.
- Left `logo.png` unchanged, since it is GreenLeaf's own logo.
- Took all the screenshots again.
- **Testing note:** the screenshot tool (`wkhtmltoimage`) needs the `--enable-local-file-access` setting to load local CSS and photos. Without it, pages show with no styling and broken photos, even though the site itself is fine.

### Part 2: Muted badges, rounded nav tabs, rounded table box

- **Badges:** Critical and Low pills changed from bold solid fills to a pale tint, coloured text, and a thin 1px matching outline. *(Changed again since, see above.)*
- **Navigation:** links became pill-shaped tabs (`border-radius: 999px`) with a light tint when pointed at or focused, replacing the underline effect.
- **Table box:** `.table-scroll` now uses `--radius-card`, with `overflow-y: hidden` so the header corners are cut to the rounded box.
- **Phone menu:** stacked links use `--radius-card` instead of a full pill.

### Part 2: White page background

- Changed `--paper` from cream (`#efe8d3`) to white (`#ffffff`).
- Kept the card colour (`--card`) and the cream `--paper-warm`, so cards stand out against the white page.
- Took the screenshots again.

### Part 2: Palette reverted; nav aligned right

- Went back to the original forest green, wheat, tomato and cream colours, replacing the short-lived mint and emerald colours.
- Restored the red (Critical) and amber (Low) badges using `--tomato` and a new `--wheat-tint` variable.
- Restored the original footer and menu hover colours.
- Menu links are now right-aligned (`justify-content: flex-end`), with the logo staying on the left.

### Part 2: Mint and emerald palette *(superseded)*

- Briefly replaced the colours with mint `#F0FDF4`, slate `#1F2937`, emerald `#10B981`, and dark emerald `#047857`.
- Updated the colour variables and the fixed colours to match, and showed the badges in emerald only.
- Made the screenshots again.

### Part 2: Font pairing

- Moved from three fonts (Fraunces, Public Sans, IBM Plex Mono) to two fonts.
- Tried Lora and Montserrat first, then settled on **Lora** (headings) and **Roboto** (body text and labels) (Google Fonts, no date a).
- Updated the Google Fonts link on all five pages and the `--font-*` variables.
- Part 3 later moved the whole site to a single font, Google Sans (see the Part 3 entry "Header, navigation and single font").

### Part 2: CSS, responsive design, and README

- Added `css/style.css` and linked it to all five pages.
- Added a CSS reset and variables for colours, text and spacing.
- Made text sizes responsive with `rem` and `clamp()`.
- Added Flexbox layouts and a CSS Grid footer.
- Added hover, focus and active effects.
- Added tablet (1024px) and phone (640px) breakpoints.
- Changed content photos to `<picture>` tags with smaller versions for small screens.
- Added the `.service-cards`, `.help-grid`, `.contact-grid`, `.media-row` and `.table-scroll` boxes.
- Added screenshot evidence and updated this README.

### Part 1: Corrections

- Confirmed all five pages are present.
- Confirmed the header, menu and footer are the same on every page.
- Confirmed photo sizes are set with width attributes.
- Kept explanatory HTML comments for the main sections.

### Part 1: Initial submission

- Created a five-page HTML website with a header, menu, main content and footer on each page (semantic HTML means using tags that describe what each part is).
- Added placeholder images.

---

## References

FoodForward SA (no date a) *About us*. Available at: https://www.foodforwardsa.org/about-us/ (Accessed: 2 November 2026).

FoodForward SA (no date b) *Donate food*. Available at: https://www.foodforwardsa.org/donate-food/ (Accessed: 2 November 2026).

FoodForward SA (no date c) *Home*. Available at: https://foodforwardsa.org/home/ (Accessed: 2 November 2026).

FoodForward SA (no date d) *Welcome to Food Forward SA*. Available at: https://foodforwardsa.org/welcome/ (Accessed: 2 November 2026).

Global FoodBanking Network (2024) *How FoodForward SA grew into the largest food bank in Sub-Saharan Africa: a Q&A with Andy Du Plessis*, 20 December. Available at: https://www.foodbanking.org/blogs/foodforward-sa-largest-food-bank-on-the-african-continent-qa-with-andy-du-plessis/ (Accessed: 2 November 2026).

Google Fonts (no date a) *Lora; Roboto*. Available at: https://fonts.google.com/ (Accessed: 17 September 2026).

Google Fonts (no date b) *Google Sans*. Available at: https://fonts.google.com/specimen/Google+Sans (Accessed: 30 October 2026).

Ladles of Love (no date a) *About our charity*. Available at: https://ladlesoflove.org.za/about/ (Accessed: 2 November 2026).

Ladles of Love (no date b) *Soup kitchens for the homeless*. Available at: https://ladlesoflove.org.za/projects/soup-kitchens/ (Accessed: 2 November 2026).

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

News24 (2026) *One of SA's biggest child feeding schemes was once a small Cape Town soup kitchen*, 25 May. Available at: https://www.news24.com/life/food/news/one-of-sas-biggest-child-feeding-schemes-was-once-a-small-cape-town-soup-kitchen-20260525-0352 (Accessed: 2 November 2026).

Wander Cape Town (2023) *Interview with Danny Diliberto, CEO of Ladles of Love*, 29 October. Available at: https://wandercapetown.com/local-knowledge/interviews/danny-diliberto-ladles-of-love/ (Accessed: 2 November 2026).

World Wide Web Consortium (no date a) *Accordion example*. ARIA Authoring Practices Guide. Available at: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/ (Accessed: 30 October 2026).

World Wide Web Consortium (no date b) *Disclosure (Show/Hide) Pattern*. ARIA Authoring Practices Guide. Available at: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ (Accessed: 30 October 2026).

World Wide Web Consortium (no date c) *Understanding Success Criterion 1.4.3: Contrast (Minimum)*. Web Content Accessibility Guidelines 2.1. Available at: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum (Accessed: 2 November 2026).

World Wide Web Consortium (no date d) *Understanding Success Criterion 2.5.5: Target Size (Enhanced)*. Web Content Accessibility Guidelines 2.2. Available at: https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html (Accessed: 2 November 2026).

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

Mozilla Developer Network (no date p) *ARIA: aria-invalid attribute*. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid (Accessed: 2 November 2026).

Mozilla Developer Network (no date q) *<input type="date">*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date (Accessed: 2 November 2026).

Mozilla Developer Network (no date r) *encodeURIComponent()*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent (Accessed: 2 November 2026).

Mozilla Developer Network (no date s) *CustomEvent*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent (Accessed: 2 November 2026).

Mozilla Developer Network (no date t) *ARIA: aria-live attribute*. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live (Accessed: 2 November 2026).

Mozilla Developer Network (no date u) *FormData*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/FormData (Accessed: 2 November 2026).

Mozilla Developer Network (no date v) *Node: textContent property*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent (Accessed: 2 November 2026).

Mozilla Developer Network (no date w) *rel="noopener" HTML attribute value*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener (Accessed: 2 November 2026).

Mozilla Developer Network (no date x) *rel="noreferrer" HTML attribute value*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noreferrer (Accessed: 2 November 2026).

Mozilla Developer Network (no date y) *Referrer-Policy header*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy (Accessed: 2 November 2026).

Mozilla Developer Network (no date z) *position CSS property*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position (Accessed: 2 November 2026).

Mozilla Developer Network (no date aa) *Element: pointerdown event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event (Accessed: 2 November 2026).

Mozilla Developer Network (no date ab) *ARIA: aria-current attribute*. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current (Accessed: 2 November 2026).

Mozilla Developer Network (no date ac) *scroll-margin-top CSS property*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-margin-top (Accessed: 2 November 2026).

Mozilla Developer Network (no date ad) *ARIA: aria-hidden attribute*. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden (Accessed: 2 November 2026).

Mozilla Developer Network (no date ae) *Event: preventDefault() method*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault (Accessed: 2 November 2026).

OpenStreetMap Foundation (no date) *Tile usage policy*. Available at: https://operations.osmfoundation.org/policies/tiles/ (Accessed: 1 November 2026).
