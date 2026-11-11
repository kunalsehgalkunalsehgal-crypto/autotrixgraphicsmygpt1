# AUTOTRIX SIGNS & GRAPHICS — Animated Design Edition

Open `index.html` in a browser. Pure **HTML5 + CSS3 + vanilla JavaScript**, no npm, no frameworks, no build required.

## What's been changed
- Keeps the original working sticky navigation, 4-slide hero with autoplay/pause/arrows/swipe, service information dialogs, gallery filters and image lightbox, FAQ accordion, scroll progress, keyboard accessibility and smooth reveal effects.
- Updates card layout and typography to closely follow the latest approved red/black/white mockup.
- **New dedicated Wall & Window Graphics** split section with photo/visual overlay, feature list, detail popup and preselected quote link.
- **New dedicated Roadside Signs** full-width photograph/banner, detail popup and preselected quote link.
- **Contact section** revised with reference-style heading/spacing and actual validated inputs; moved closing CTA banner below the contact form.
- Services section now uses four lead cards with additional service chips; extra pre-existing Benefits and About sections remain to keep important business content.
- Mobile-first refinements for 1440px, 768px, 390px, and 320px layout targets. Scroll reveals, hover transforms, button sheen and gentle motion are disabled or reduced for people who prefer reduced motion.

## Files
- `index.html` — all sections and semantic markup.
- `style.css` — base styles, premium additions, final-reference enhancements at the end.
- `script.js` — no-framework behavior.
- `assets/` — local photos, fonts and logo from the existing project.

## Important: inquiry form sending
The form validates required fields and then **opens an email draft for the visitor to review and send**; it does **not** send mail automatically when `FORM_ENDPOINT` is empty. For real automatic delivery, configure a secure server-side API endpoint in `script.js`, implement validation/rate-limiting/spam controls and a mail service, and test the complete flow. Never claim a request was sent when only the email app was opened.

## Content and images
The Wall & Window section uses a graphic treatment over the supplied building photo for illustration. The Roadside Signs section uses a genuine existing property-sign photo from the provided gallery. Replace with approved authentic project images before launch if desired. No unverified public review quotes, ratings, experience counts or precise street address were invented.

## Contact
Phone: (406) 443-7881. Email: autotrixgraphics@gmail.com. Location: Helena, Montana. Confirm business details and review public facing text before go-live.


## Nov 11, 2026 viewport overflow fix
Added `position: relative` to the existing `.button` CSS rule. This anchors the absolutely positioned shine pseudo-element inside each button instead of letting it extend document width/height. Verified at 320px, 390px, 768px, 897px, 958px and 1440px viewports.

## Official logo update
- Replaced the header's CSS/text wordmark with the client-supplied official Autotrix logo.
- Updated the footer logo to the same official image.
- The source image has been trimmed of excess transparent margins and resized for practical web use: `assets/autotrix-official-logo.png`.
- Added responsive CSS for the logo only; existing layout, animations, slider, services, and form behavior stay unchanged.

## New thank-you page
- `thank-you.html` + `thank-you.css` — branded, fully responsive confirmation page with subtle animations, 2 main navigation buttons, what-happens-next steps and contact phone CTA.
- Open `thank-you.html` directly to preview it. It uses your current logo, assets, Manrope font and existing brand colors.
- Existing `script.js` has one intentional change: when **FORM_ENDPOINT is configured and the endpoint returns HTTP success**, the quote form redirects to `thank-you.html` after the validated submission.
- **Important:** `FORM_ENDPOINT` is empty by default. In this email-draft mode, no message is automatically sent, so the form correctly stays on the homepage and does not redirect to a false success page. To actually send and redirect, configure your own backend endpoint first.
- If you use a separate form service later, configure its *success redirect URL* to `thank-you.html` on the deployed site; ensure it is only triggered after confirmed success.
