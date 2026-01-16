# Timex Static Snapshot (Expo + web)

This repository is a minimal demo to:
- Scaffold an Expo React Native app that displays a static snapshot of https://www.timex.com when run on web.
- Provide a Node script that fetches the Timex homepage and writes it to `public/timex.html`.

Important legal note
- This is an educational demo. Scraping third-party sites can violate terms of service or copyright — obtain permission before scraping and using content.

Prerequisites
- Node 18+
- npm
- (Optional) `expo-cli` installed globally, or use `npx expo`.

Install

```bash
npm install
```

Scrape the homepage (writes `public/timex.html`)

```powershell
npm run scrape
```

Run the app in web mode (this will serve `public/timex.html` at `/timex.html`)

```bash
npm run web
# or
npx expo start --web
```

Native embedding

- The scraper also generates `AppAssets/timex_html.js` which exports the inlined HTML string. When running the Expo app on native (iOS/Android), the app will render that HTML inside a `WebView` if the module contains content.
- After running `npm run scrape`, rebuild/restart the native app so the new module is picked up by the bundler.

Notes on how this works
- The scraper is `scripts/scrape.js` and currently fetches only the homepage. It writes the raw HTML to `public/timex.html` and prepends a `<base>` tag so relative assets resolve to the original site.
- The Expo `App.js` renders an `<iframe>` when running on web that points at `/timex.html`. On native platforms it shows a button to open the live site.

Extending the scraper
- To capture more pages, fetch additional URLs and rewrite relative asset links to absolute ones, or download assets to `public/` and update references.

Feedback / next steps
- Tell me which additional pages or assets to capture and whether you want the scraper to mirror assets locally.
