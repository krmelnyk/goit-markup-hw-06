# WebStudio

An educational responsive single-page website created for the GoIT HTML and
CSS course. This version implements the requirements of
`goit-markup-hw-06`, including adaptive layouts, responsive images, a mobile
menu, forms, and a modal window.

## Implemented Sections

- Header with navigation, contact information, and a mobile menu button
- Hero section with responsive background images and an action button
- Features section
- Team section with four profile cards and social links
- Portfolio section with six project cards and animated overlays
- Footer with contact information, social links, and a subscription form
- Mobile navigation menu
- Service request modal with a custom form

## Technologies

- Semantic HTML5
- CSS3
- Flexbox
- Mobile First responsive design
- JavaScript for the mobile menu and modal window
- Modern Normalize
- Google Fonts: Roboto and Raleway
- SVG sprite for icons

## Responsive Design

The layout uses three target widths:

- Mobile: from `320px`
- Tablet: from `768px`
- Desktop: from `1158px`

Base styles target mobile devices. Tablet and desktop layouts are added with
`min-width` media queries. Styles needed only on tablets use the
`768px–1157px` range.

Content images use `src` and density-based `srcset` values for x1 and x2
screens. The Hero section has separate mobile, tablet, and desktop background
files, with Retina versions selected through `min-resolution` media queries.

## Mobile Menu

The mobile menu markup is placed after the footer, and its styles are isolated
in `css/mobile-menu.css`. It covers the entire viewport and is hidden by
default. JavaScript toggles the `.is-open` class to show or hide it.

The menu can be closed with its close button, the Escape key, or by selecting
a navigation link.

## Project Structure

```text
.
├── css/
│   ├── common.css
│   ├── features.css
│   ├── footer.css
│   ├── header.css
│   ├── hero.css
│   ├── main.css
│   ├── mobile-menu.css
│   ├── modal.css
│   ├── portfolio.css
│   └── team.css
├── images/
│   ├── hero-bg-mobile.jpg
│   ├── hero-bg-mobile@2x.jpg
│   ├── hero-bg-tablet.jpg
│   ├── hero-bg-tablet@2x.jpg
│   ├── hero-bg.jpg
│   ├── hero-bg@2x.jpg
│   ├── icons.svg
│   ├── portfolio-*.jpg
│   ├── portfolio-*@2x.jpg
│   ├── team-*.jpg
│   └── team-*@2x.jpg
├── js/
│   └── modal.js
├── index.html
└── README.md
```

Only `css/main.css` is linked directly in `index.html`. It imports the shared
styles and the stylesheet for each page component.

## Getting Started

Open `index.html` in a browser. The project does not require dependency
installation or a build step.

For responsive testing, inspect the page at widths of `320px`, `768px`, and
`1158px`, as well as with device pixel ratios of x1 and x2.

## Checks

- The viewport meta tag is present.
- Minified Modern Normalize is connected before the local stylesheet.
- All content JPG images have x1 and x2 sources.
- Responsive backgrounds use `min-resolution` media queries.
- The layout follows the Mobile First approach.
- The mobile menu is hidden by default and opens with `.is-open`.
- Team cards have a fixed width of `264px` on all screen sizes.
- Portfolio overlays are available at every breakpoint.
- `git diff --check` passes without whitespace errors.
