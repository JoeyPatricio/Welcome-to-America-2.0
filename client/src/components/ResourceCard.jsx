const categoryConfig = {
  legal:           { label: "Legal Aid",         classes: "bg-blue-50 text-blue-700 border-blue-200"       },
  healthcare:      { label: "Healthcare",        classes: "bg-green-50 text-green-700 border-green-200"     },
  "mental-health": { label: "Mental Health",     classes: "bg-purple-50 text-purple-700 border-purple-200"  },
  employment:      { label: "Employment",        classes: "bg-orange-50 text-orange-700 border-orange-200"  },
  education:       { label: "Education",         classes: "bg-yellow-50 text-yellow-700 border-yellow-200"  },
  food:            { label: "Food Assistance",   classes: "bg-lime-50 text-lime-700 border-lime-200"        },
  housing:         { label: "Housing",           classes: "bg-pink-50 text-pink-700 border-pink-200"        },
  general:         { label: "General Services",  classes: "bg-gray-50 text-gray-600 border-gray-200"        },
};

export default function ResourceCard({ resource }) {
  const { name, category, description, city, state, phone, website, languages, all_statuses } = resource;
  const cfg = categoryConfig[category] ?? categoryConfig.general;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-5 flex flex-col gap-3">

      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-900 text-base leading-snug flex-1">{name}</h3>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full border shrink-0 ${cfg.classes}`}>
          {cfg.label}
        </span>
      </div>

      {/* Location */}
      {city && state && state !== "US" && (
        <p className="text-xs text-gray-400 -mt-1 flex items-center gap-1">
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {city}, {state}
        </p>
      )}

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      {/* Languages */}
      {languages?.length > 0 && (
        <p className="text-xs text-gray-400">
          <span className="font-medium text-gray-500">Languages:</span> {languages.join(" · ")}
        </p>
      )}

      {/* All-statuses badge */}
      {all_statuses && (
        <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2.5 py-1 rounded-full border border-emerald-200 w-fit">
          ✓ Available to all immigration statuses
        </span>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 mt-auto pt-1">
        {phone && (
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="text-sm text-slate-600 hover:text-emerald-700 font-medium flex items-center gap-1 transition"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phone}
          </a>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-emerald-600 text-white font-semibold px-3.5 py-1.5 rounded-lg hover:bg-emerald-700 transition flex items-center gap-1"
          >
            Visit Website
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
