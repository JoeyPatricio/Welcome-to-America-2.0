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
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-4">All Topics</h1>
      <p className="text-center text-gray-600 mb-8">Browse resources by category.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-2">{section.title}</h2>
            <div className="flex flex-wrap gap-3">
              {section.links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block min-w-[10rem] px-4 py-3 bg-emerald-200 text-emerald-900 rounded-xl text-lg font-semibold text-center shadow hover:bg-emerald-100 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
