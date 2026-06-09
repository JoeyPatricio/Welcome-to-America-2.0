# Welcome to America 2.0

A free, accessible resource hub helping immigrants and newcomers navigate life in the United States — rebuilt from the ground up as a full-stack 2.0 application.

> **This project is a continuation of the original [Welcome to America](https://github.com/juanms23/welcome-to-america)** — a React SPA built by a team of CS students at Western Washington University. Version 2.0 expands on that foundation with a real backend, a searchable organization directory, and comprehensive step-by-step civic guides across all topic areas.

---

## What's New in 2.0

| Feature | v1 (Original) | v2.0 (This Repo) |
|---|---|---|
| Architecture | Frontend-only SPA | Full-stack (React + Express) |
| Find Help | Hardcoded link list | Live API with 50+ real organizations |
| Resource Pages | Link dumps | Step-by-step guides with legal citations |
| Navigation | Desktop only | Responsive with mobile hamburger menu |
| Translation | Google Translate widget | Google Translate (retained, improved) |
| Styling | Basic Tailwind | "Civic warmth" design system |
| 404 Page | None | Branded with navigation recovery |

---

## Features

### Find Help Directory (`/find_help`)
The flagship 2.0 feature. A searchable, filterable directory of **50+ real immigration support organizations** across the US:
- Filter by category: Legal Aid, Healthcare, Mental Health, Employment, Education, Food, Housing
- Search by ZIP code with a "Broaden to statewide" toggle
- Rich organization cards showing location, languages served, immigration-status eligibility, phone, and website
- Data served from a real Express REST API (`GET /api/resources`)

### Comprehensive Resource Guides
Every topic page has been rewritten as a real civic guide — not just links, but actual information:
- **Registration** — USCIS account setup, Selective Service, AR-11 address change
- **Green Cards** — 5-step application process, adjustment of status, renewal
- **Legal Support** — Types of legal help, notario fraud warning, constitutional rights
- **Employment** — Work authorization by status, I-9 process, all-worker rights
- **Driver's Licenses** — REAL ID vs. Standard, 19 states allowing undocumented applicants
- **Government Assistance** — Public charge explained, program eligibility by status
- **Healthcare** — EMTALA emergency rights, 4 coverage options, public charge safe harbors
- **Mental Health** — 988 crisis line, immigrant stressor context, available services
- **Reproductive Health** — HIPAA confidentiality, Title X family planning, confidential care
- **K–12 Education** — Plyler v. Doe rights, enrollment steps, McKinney-Vento for homeless youth
- **Undocumented** — ICE encounter rights, safe locations, DACA, post-secondary options

### Design System
- **Colors:** Emerald-600 primary, Stone-50 warm background, Slate-900 text
- **Typography:** Merriweather (headings/brand) + Inter (body) via Google Fonts
- **Components:** `InfoBox` (info/warning/success/alert variants), `ResourceCard`, `LinkButton` (internal + external), `Footer`
- **Accessibility:** Visible focus rings, semantic headings, `aria-label` on icon buttons, keyboard navigation

---

## Tech Stack

**Frontend**
- React 19 + Vite 6
- React Router v7
- Tailwind CSS v4
- Google Translate widget

**Backend**
- Express 5 (Node.js)
- JSON flat-file data store (`server/data/resources.json`)
- REST API on port 3001

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/welcome-to-america-2.0.git
cd welcome-to-america-2.0

# Install all dependencies (root, client, server)
npm install

# Start both frontend and backend concurrently
npm run dev
```

The frontend will be available at **http://localhost:5173** and the API at **http://localhost:3001**.

> The Vite dev server proxies `/api/*` requests to `http://localhost:3001`, so you only need one URL in your browser.

### Run Separately (optional)

```bash
# Frontend only
cd client && npm run dev

# Backend only
cd server && npm run dev   # uses nodemon for hot-reload
```

### Production Build

```bash
npm run build     # builds client/dist
```

---

## Project Structure

```
welcome-to-america/
├── client/                    # React frontend (Vite)
│   ├── public/                # Static assets (app-icon.svg, etc.)
│   └── src/
│       ├── components/
│       │   ├── InfoBox.jsx        # Callout box (info/warning/success/alert)
│       │   ├── LinkButton.jsx     # Internal + external link button
│       │   └── ResourceCard.jsx   # Organization directory card
│       ├── layout/
│       │   ├── NavBar.jsx         # Sticky nav with Google Translate + mobile menu
│       │   └── Footer.jsx         # 3-column footer with topic links
│       └── pages/
│           ├── Home.jsx           # Hero + topic cards + CTA strip
│           ├── Topics.jsx         # Full topic directory
│           ├── Forms.jsx          # USCIS forms by category
│           ├── FindHelp.jsx       # Organization search (API-driven)
│           ├── About.jsx
│           ├── Registration.jsx
│           ├── GreenCards.jsx
│           ├── LegalSupport.jsx
│           ├── Employment.jsx
│           ├── DriversLicenses.jsx
│           ├── GovernmentAssistance.jsx
│           ├── Healthcare.jsx
│           ├── MentalHealth.jsx
│           ├── ReproductiveHealth.jsx
│           ├── K-12.jsx
│           ├── Undocumented.jsx
│           └── PageNotFound.jsx
├── server/                    # Express backend
│   ├── data/
│   │   └── resources.json     # 50+ real organizations (seed data)
│   └── server.js              # REST API (port 3001)
├── package.json               # Root — concurrently scripts
└── README.md
```

---

## API Reference

The backend exposes a simple REST API for the organization directory.

### `GET /api/resources`

Returns a filtered list of organizations.

| Query Param | Type | Description |
|---|---|---|
| `category` | string | Filter by category: `legal`, `healthcare`, `mental-health`, `employment`, `education`, `food`, `housing`, `general` |
| `zip` | string | 5-digit ZIP code to filter by location |
| `scope` | string | `exact` (city-level, default) or `state` (broaden to statewide) |

**Example:**
```
GET /api/resources?category=legal&zip=10001&scope=state
```

### `GET /api/resources/:id`

Returns a single organization by ID.

### `GET /api/categories`

Returns the list of available category slugs.

---

## Data

`server/data/resources.json` contains 50+ real organizations including:

- RAICES (TX), NIJC (IL), Northwest Immigrant Rights Project (WA)
- Legal Aid Society (NY), Pangea Legal (SF), Casa de Maryland
- IRC offices (LA, NY, Seattle, Atlanta)
- Catholic Charities affiliates, Esperanza Health (Chicago)
- La Clínica del Pueblo (DC), ICHS (WA), Upwardly Global (NY/IL)
- Florida Immigrant Coalition, and many more

Each organization record includes: `name`, `category`, `description`, `city`, `state`, `zip`, `phone`, `website`, `languages`, `all_statuses`.

---

## Original Project

This is a continuation of **[Welcome to America v1](https://github.com/juanms23/welcome-to-america)** — originally built as a team project at Western Washington University. The original version established the core concept: a single-page React app providing curated immigration resource links organized by topic.

Version 2.0 builds on that foundation by:
- Adding a real Node/Express backend with a live organization database
- Replacing link dumps with real step-by-step civic guides
- Introducing a professional design system built for trust and readability
- Making the app fully responsive for mobile users

---

## License

MIT — see [LICENSE](./LICENSE) for details.

---

*Welcome to America is an independent resource project. It is not affiliated with or endorsed by any government agency. Content is for informational purposes only and does not constitute legal advice. If you need legal help, please consult a licensed immigration attorney.*
