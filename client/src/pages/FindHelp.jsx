import { useState } from "react";

function FindHelp() {

// the useState in react creates variables with setter methods and default values
  const [zip, setZip] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");

  
    /* this is a mock "database" of made up resources, will need to be replaced
       by a more robust local array, a query to some remote real database, or an
       API call to google maps or something */
  const resources = [
    {
      name: "Immigration Legal Aid Center",
      zip: "98225",
      description: "Free legal help for immigration cases.",
    },
    {
      name: "Community Resource Hub",
      zip: "98372",
      description: "Multilingual support and guidance.",
    },
    {
      name: "Migrant Support Center",
      zip: "90210",
      description: "Help with forms, work permits, and more.",
    },
    {
      name: "Neighborhood Immigration Clinic",
      zip: "30303",
      description: "Free consultations and documentation help.",
    },
  ];

  function handleSearch() {
    const trimmedZip = zip.trim();
    const zipRegex = /^\d{5}$/;

    if (!zipRegex.test(trimmedZip)) {
      setError("Please enter a valid 5-digit zip code.");
      setResults([]);
      setHasSearched(false);
      return;
    }

    const filtered = resources.filter((r) => r.zip === trimmedZip);
    setResults(filtered);
    setHasSearched(true);
    setError("");
  };

  function handleShowAll() {
    setResults(resources);
    setHasSearched(true);
    setError("");
  };
  
  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-6">Find Help</h1>
      <p className="text-center mb-6">
        Enter your zip code to find immigration resources near you, or view all available resources.
      </p>

      <div className="flex gap-2 justify-center mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Enter zip code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="border border-gray-400 rounded px-4 py-2 w-48"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Search
        </button>
        <button
          onClick={handleShowAll}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Show All
        </button>
      </div>

      {/* text that pops up when zip code is invalid */}
      {error && <p className="text-center text-red-500 mb-6">{error}</p>}

      {/* display search results */}
      {results.length > 0 && (
        <div className="space-y-6">
          {results.map((res, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded p-4 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{res.name}</h2>
              <p className="text-gray-700">{res.description}</p>
              <p className="text-sm text-gray-500 mt-1">Zip code: {res.zip}</p>
            </div>
          ))}
        </div>
      )}

      {/* text that pops up when there are no results found */}
      {hasSearched && results.length === 0 && !error && (
        <p className="text-center text-gray-500">
          No resources found for zip code {zip}.
        </p>
      )}
    </div>
  );
}

export default FindHelp;