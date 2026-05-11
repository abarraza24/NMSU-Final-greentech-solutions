# NMSU-Final-greentech-solutions

Final project for NMSU Intro to Web Development. A multi-page client website for **GreenTech Solutions**, a fictional eco-tech startup based in Albuquerque, NM.

## GitHub
Live Website: [`https://abarraza24.github.io/NMSU-Final-greentech-solutions/index.html`]
Repo: [`https://github.com/abarraza24/NMSU-Final-greentech-solutions`]

## About the Project

GreenTech Solutions is the client for this assignment. They're a fictional startup (a subsidiary of GreenChile LLC) that builds eco-friendly tools for small and medium businesses, including energy efficient devices, smart recycling systems, and carbon tracking software.

This website was built from scratch as a final project to demonstrate everything covered across the semester: HTML structure, external CSS styling, JavaScript interactivity, mobile responsiveness, and accessibility.

## Pages

The site has five pages, all linked through a shared navigation bar:

- **Home** (`index.html`) — Intro to the company, mission, and key products
- **About** (`about.html`) — Company story, mission, team, and timeline of milestones
- **Products** (`products.html`) — Product catalog with live search and category filter
- **Resources** (`resources.html`) — Articles on sustainability plus a newsletter signup
- **Contact** (`contact.html`) — Contact form with JavaScript validation, plus business info

The navigation also includes a **Final** link as required by the assignment.

## Features

### Interactive (JavaScript)
- **Product search and filter** — Filter products by category (Energy, Recycling, Software, Service) or search by keyword. Both work together and update the result count live.
- **Contact form validation** — Checks for a name, valid email format, and a message of at least 10 characters before showing a personalized confirmation.
- **Newsletter signup** — Validates the email format and shows a thank-you message on submit.

### Design
- Green / white / earthy color palette using a single external stylesheet
- Card based layout reused across pages for visual consistency
- Custom timeline component on the About page
- Hover states on buttons and navigation links

### Accessibility
- Skip-to-main-content link on every page
- HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Alt text on every image
- Descriptive link text (no "click here")
- `aria-label` on the nav and `aria-live="polite"` on dynamic message areas
- Focus outlines kept visible for keyboard users

### Responsive
- Two breakpoints: 768px (tablet) and 480px (phone)
- Navigation collapses vertically on small screens
- Filter tools, footer grid, and team cards reflow to stack on mobile

## Technologies Used

- **HTML5** — markup for all five pages
- **CSS3** — External stylesheet (`css/styles.css`) with flexbox for layout and media queries for responsive design
- **JavaScript (vanilla)** — Single external file (`js/script.js`) for the product filter, form validation, and newsletter signup. No frameworks or libraries.

## File Structure

```
NMSU-Final-greentech-solutions/
├── index.html
├── about.html
├── products.html
├── resources.html
├── contact.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    ├── energy-device.jpg
    ├── smart-recycling.jpg
    └── carbon-tracking.jpg
```

## Setup and Running the Project

### Option 1: Open Locally

1. Clone or download this repository to your computer.
2. Open the project folder.
3. Double-click `index.html` to open the homepage in your browser.
4. Navigate between pages using the menu at the top.

No build tools, package managers, or server setup required. Everything runs as static HTML.

### Option 2: View on GitHub Pages

The live version of this site is hosted on GitHub Pages. See the **Live Site** link at the top of this README. or here                                                `https://abarraza24.github.io/NMSU-Final-greentech-solutions/index.html`

### Option 3: Run on a Local Server (Optional)

If you want to test it as if it were live, you can run a quick local server using Python:

```
python -m http.server 8000 
```
```
use the extension on VsCode called live server
```

Then open `http://localhost:8000` in your browser.

## Validation

- HTML validated using the [W3C Markup Validator](https://validator.w3.org/)
- CSS validated using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Accessibility checked using [WAVE](https://wave.webaim.org/)

## Author

Built by Alexis Barraza for the Intro to Web Development final project at New Mexico State University.