const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors()); // Public read-only API — wildcard origin is intentional
app.use(express.json());

app.use(
  "/api",
  rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

const resources = require("./data/resources.json");

const VALID_CATEGORIES = new Set([
  "legal",
  "healthcare",
  "mental-health",
  "employment",
  "education",
  "food",
  "housing",
  "general",
]);

// GET /api/resources
// Query params:
//   zip      — 5-digit zip code (exact match or statewide fallback)
//   category — one of: legal, healthcare, mental-health, employment, education, food, housing, general
//   scope    — "exact" (default) | "state" (broaden to entire state)
app.get("/api/resources", (req, res) => {
  const { zip, category, scope } = req.query;

  if (zip && !/^\d{5}$/.test(zip.trim())) {
    return res.status(400).json({ error: "Invalid zip code" });
  }

  if (category && category !== "all" && !VALID_CATEGORIES.has(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  let results = resources;

  // Filter by category first
  if (category && category !== "all") {
    results = results.filter((r) => r.category === category);
  }

  // Filter by location
  if (zip) {
    const trimmed = zip.trim();
    const exact = results.filter((r) => r.zip === trimmed);

    if (exact.length > 0 || scope === "exact") {
      results = exact;
    } else {
      // Statewide fallback: find matching state from the zip provided
      const zipEntry = resources.find((r) => r.zip === trimmed);
      if (zipEntry) {
        results = results.filter((r) => r.state === zipEntry.state);
      } else {
        results = [];
      }
    }
  }

  // Always include national resources (zip "00000") when location filter is active
  if (zip) {
    const national = resources.filter(
      (r) =>
        r.zip === "00000" &&
        (!category || category === "all" || r.category === category)
    );
    const ids = new Set(results.map((r) => r.id));
    national.forEach((r) => {
      if (!ids.has(r.id)) results.push(r);
    });
  }

  res.json(results);
});

// GET /api/resources/:id
app.get("/api/resources/:id", (req, res) => {
  const resource = resources.find((r) => r.id === parseInt(req.params.id));
  if (!resource) return res.status(404).json({ error: "Not found" });
  res.json(resource);
});

// GET /api/categories — returns all distinct categories with counts
app.get("/api/categories", (req, res) => {
  const counts = {};
  resources.forEach((r) => {
    counts[r.category] = (counts[r.category] || 0) + 1;
  });
  res.json(counts);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`WtoA API running on http://localhost:${PORT}`);
});
