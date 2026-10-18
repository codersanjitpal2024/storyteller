# WeTheMums — Premium Parenting Storytelling & Brand Partnership Platform

A digital editorial publication for **WeTheMums** ([@wethemums](https://www.instagram.com/wethemums/)), holding space for authentic experiences in motherhood, fatherhood, pregnancy, adoption, fertility, special needs parenting, loss, and everyday family life.

Designed and developed with pure **HTML5 and Tailwind CSS** (with responsive design, Google Fonts, and zero required build steps or backend servers).

---

## 🌟 Instant Viewing (Zero Setup Required)

You can open and view the website immediately in any web browser without installing Node.js, running a build tool, or configuring a backend server:

1. **Double-click `index.html`** in your file explorer, OR
2. Start a local lightweight server if you prefer:
   ```bash
   npx serve .
   # OR with Python:
   python -m http.server 3000
   ```
3. Open `http://localhost:3000` or double-click to view directly in Chrome, Safari, Edge, or Firefox.

---

## 📄 Complete Page Structure

| Page | File | Purpose |
| :--- | :--- | :--- |
| **Homepage** | [`index.html`](file:///c:/Users/MSI%201/Downloads/Parenting/index.html) | Editorial Hero, Ethos, 6 Categories, Featured Spotlight, Recent Stories Grid, Berry "Share Your Story" CTA, Values, Brand Feature, Instagram Grid, Newsletter. |
| **Stories Archive** | [`stories.html`](file:///c:/Users/MSI%201/Downloads/Parenting/stories.html) | Search bar with instant real-time filtering, category filter pills (Motherhood, Fatherhood, etc.), dynamic story counters, and responsive grid. |
| **Story Reader** | [`story-detail.html`](file:///c:/Users/MSI%201/Downloads/Parenting/story-detail.html) | Long-form reading typography (65ch column), pull quotes, estimated reading times, contributor attribution preferences, social share controls, related stories. |
| **Share Your Story** | [`share-your-story.html`](file:///c:/Users/MSI%201/Downloads/Parenting/share-your-story.html) | Sensitive submission form with real-time word counter, attribution selector (Real Name / Pseudonym / Anonymous), category picker, photo upload dropzone, consent checkboxes, and confirmation modal. |
| **Brand Partnerships** | [`brand-partnerships.html`](file:///c:/Users/MSI%201/Downloads/Parenting/brand-partnerships.html) | Dedicated B2B collaboration landing page with proposed campaign formats, commercial disclosure policy, comprehensive campaign brief form, and FAQs. |
| **About Us** | [`about.html`](file:///c:/Users/MSI%201/Downloads/Parenting/about.html) | Brand storytelling mission, origin, 6 core editorial values, medical separation notice, and invitation to contribute. |
| **Journal & Resources** | [`journal.html`](file:///c:/Users/MSI%201/Downloads/Parenting/journal.html) | Mindful reflections, essays on parenting burnout & communication, and clear healthcare disclaimers. |
| **Contact Desk** | [`contact.html`](file:///c:/Users/MSI%201/Downloads/Parenting/contact.html) | Categorized contact form, verified Instagram link, response time expectations, and submission guidance. |
| **Editorial Workspace** | [`editorial-dashboard.html`](file:///c:/Users/MSI%201/Downloads/Parenting/editorial-dashboard.html) | Passcode-protected internal review workspace (`wethemums2026`) allowing editorial staff to review, approve, or archive submissions and manage brand leads. |

---

## 🎨 Design Tokens & Palette

- **Muted Berry**: `#75454B` (Primary brand accent, prominent CTAs, editorial callouts)
- **Warm Ivory**: `#F7F2EC` (Background canvas, soothing and warm)
- **Dusty Rose**: `#D9A99C` (Secondary accents, borders, and badges)
- **Charcoal**: `#292725` (Primary reading typography)
- **Muted Gray**: `#716A65` (Metadata, dates, reading times, excerpts)
- **Subtle Borders**: `#E7DDD2` (Delicate divider rules and card outlines)
- **Typography**: 
  - Headlines: **Newsreader** (Editorial Serif)
  - Navigation & Body: **Plus Jakarta Sans** (Modern Sans-Serif)

---

## 🔒 Editorial Review & Privacy Workflow

In accordance with responsible storytelling principles:
- **No Automatic Public Posting**: Submissions entered on `share-your-story.html` are recorded in private storage (or `localStorage` for demo mode).
- **Attribution Control**: Contributors explicitly choose whether to be credited by their **Real Name**, a **Pseudonym / Pen Name**, or as an **Anonymous Contributor**.
- **Internal Editorial Review Portal**: Editors can open [`editorial-dashboard.html`](file:///c:/Users/MSI%201/Downloads/Parenting/editorial-dashboard.html) (Default passcode: `wethemums2026`), inspect submitted stories, communicate with authors, approve stories for publication, or archive them.
- **Brand Leads Desk**: B2B campaign inquiries are captured and viewable only within the private dashboard.

---

## 🧪 Automated Verification Test

To verify all internal links, color tokens, and markup:
```bash
node --test tests/verify-html.js
```
All 5 automated tests verify:
- Complete presence of all required pages
- Color token consistency across all pages
- Valid resolution of all internal HTML navigation links
- Form submission handlers and storage hooks
- Editorial authentication and dashboard logic
