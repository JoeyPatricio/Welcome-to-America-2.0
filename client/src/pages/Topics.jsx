import { Link } from "react-router-dom";

const sections = [
  {
    title: "Immigration",
    links: [
      { label: "Registration",  to: "/registration"  },
      { label: "Green Cards",   to: "/green-cards"   },
      { label: "Legal Support", to: "/legal-support" },
    ],
  },
  {
    title: "Work & Life",
    links: [
      { label: "Driver's Licenses",      to: "/drivers-licenses"      },
      { label: "Government Assistance",  to: "/government-assistance" },
      { label: "Employment",             to: "/employment"            },
    ],
  },
  {
    title: "Health",
    links: [
      { label: "Mental Health",  to: "/mental-health"     },
      { label: "Healthcare",     to: "/healthcare"        },
      { label: "Reproductive",   to: "/reproductive-health" },
    ],
  },
  {
    title: "Education",
    links: [
      { label: "Forms & Aid",  to: "/forms"        },
      { label: "K–12",         to: "/k-12"         },
      { label: "Undocumented", to: "/undocumented" },
    ],
  },
];

export default function Topics() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-[Merriweather] font-bold text-slate-900 text-center mb-2">
        All Topics
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Browse resources by category.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
          >
            <h2 className="text-base font-bold text-slate-800 mb-4 pb-3 border-b border-gray-100">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center justify-between text-sm text-slate-700 hover:text-emerald-700 font-medium py-1.5 px-2 rounded-lg hover:bg-emerald-50 transition group"
                  >
                    {link.label}
                    <svg className="h-4 w-4 text-gray-300 group-hover:text-emerald-500 transition" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
