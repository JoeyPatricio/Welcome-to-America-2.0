import { useState } from "react";
import ResourceCard from "../components/ResourceCard";

const CATEGORIES = [
  { value: "all",          label: "All" },
  { value: "legal",        label: "Legal Aid" },
  { value: "healthcare",   label: "Healthcare" },
  { value: "mental-health",label: "Mental Health" },
  { value: "employment",   label: "Employment" },
  { value: "education",    label: "Education" },
  { value: "food",         label: "Food" },
  { value: "housing",      label: "Housing" },
  { value: "general",      label: "General Services" },
];

export default function FindHelp() {
  const [zip, setZip]               = useState("");
  const [category, setCategory]     = useState("all");
  const [scope, setScope]           = useState("state");
  const [results, setResults]       = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState("");

  async function fetchResources(overrideZip, overrideCategory) {
    const zipVal = overrideZip      !== undefined ? overrideZip      : zip;
    const catVal = overrideCategory !== undefined ? overrideCategory : category;

    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();
      if (zipVal && zipVal.trim()) params.set("zip", zipVal.trim());
      if (catVal && catVal !== "all") params.set("category", catVal);
      if (zipVal && zipVal.trim()) params.set("scope", scope);

      const res = await fetch(`/api/resources?${params}`);
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setResults(data);
      setHasSearched(true);
    } catch {
      setError("Could not connect to the resource server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    const zipRegex = /^\d{5}$/;
    if (zip.trim() && !zipRegex.test(zip.trim())) {
      setError("Please enter a valid 5-digit zip code.");
      return;
    }
    fetchResources();
  }

  function handleCategoryClick(cat) {
    setCategory(cat);
    if (hasSearched) fetchResources(undefined, cat);
  }

  function handleShowAll() {
    setZip("");
    setCategory("all");
    fetchResources("", "all");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero search bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2 text-slate-900">
            Find Help Near You
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Search for immigration support organizations by zip code, or browse by service type.
          </p>

          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              inputMode="numeric"
              placeholder="Enter zip code (e.g. 98104)"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-700 transition font-semibold whitespace-nowrap"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleShowAll}
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition font-medium whitespace-nowrap"
            >
              Show All
            </button>
          </form>

          {/* Scope toggle — only visible when zip is filled */}
          {zip.trim() && (
            <div className="flex items-center gap-3 mt-3 text-sm text-gray-600">
              <span>Search radius:</span>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  value="exact"
                  checked={scope === "exact"}
                  onChange={() => setScope("exact")}
                  className="accent-emerald-600"
                />
                Exact zip only
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  value="state"
                  checked={scope === "state"}
                  onChange={() => setScope("state")}
                  className="accent-emerald-600"
                />
                Statewide
              </label>
            </div>
          )}

          {error && <p className="text-red-600 text-sm mt-3 text-center">{error}</p>}
        </div>
      </div>

      {/* Category pills */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 overflow-x-auto">
        <div className="flex gap-2 max-w-5xl mx-auto min-w-max">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryClick(cat.value)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition ${
                category === cat.value
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results area */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {loading && (
          <div className="flex justify-center items-center py-16 gap-3 text-gray-500">
            <svg className="animate-spin h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Searching for resources…
          </div>
        )}

        {!loading && hasSearched && results.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg font-medium mb-2">No resources found.</p>
            <p className="text-sm">
              Try switching to &ldquo;Statewide&rdquo; search, clearing the zip code, or choosing a different category.
            </p>
          </div>
        )}

        {!loading && !hasSearched && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">Enter a zip code or click <strong>Show All</strong> to browse organizations.</p>
          </div>
        )}

        {!loading && results.length > 0 && (
          <>
            <p className="text-sm text-gray-500 mb-4">
              Showing <strong>{results.length}</strong> organization{results.length !== 1 ? "s" : ""}
              {zip.trim() ? ` near ${zip.trim()}` : ""}
              {category !== "all" ? ` · ${CATEGORIES.find((c) => c.value === category)?.label}` : ""}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer note */}
      <div className="max-w-5xl mx-auto px-4 pb-12 text-center">
        <p className="text-xs text-gray-400">
          Resource listings are curated for informational purposes. Always verify contact information directly with the organization. If you are in crisis, call or text <strong>988</strong>.
        </p>
      </div>
    </div>
  );
}
