# Hunters Academy — Grand Opening LP
**Stack:** React 19 · Vite 8 · TypeScript 6 · Tailwind 4 · GSAP 3

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production
```bash
npm run build      # output → dist/
```

## Deploy (Vercel)
Push to `main` → auto deploy. Add env vars in Vercel dashboard.

## Update content
| What | Where |
|---|---|
| Programs | `src/data/programs.ts` |
| Coach bio & achievements | `src/data/coach.ts` |
| FAQ | `src/data/faq.ts` |
| Countdown target date | `src/components/layout/CountdownBanner.tsx` |
| Spots remaining | `src/components/layout/CountdownBanner.tsx` + `src/components/layout/StickyCTABar.tsx` |
| Founding offer price | `src/components/sections/Offer.tsx` |

## Pending — confirm with client
- Founding member price + regular price post-opening
- Total founding spots + spots already taken
- Opening date (update CountdownBanner TARGET_DATE)
- Full address, phone, email
- Social media URLs (Footer.tsx)
- GHL webhook URL

All pending items are marked with `className="text-red-600 font-bold"` in the codebase.

## Environment variables
```
GHL_WEBHOOK_URL         → GoHighLevel webhook (server-side only)
VITE_META_PIXEL_ID      → Meta Pixel ID
VITE_GTM_ID             → Google Tag Manager ID
```
