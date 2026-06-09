import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* Inline SVG icons — no external library needed */
const icons = {
  immigration: (
    <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 21V5.5L12 3l3 2.5V21M9 12h6M12 3v2.5" />
    </svg>
  ),
  work: (
    <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  ),
  health: (
    <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  education: (
    <svg className="h-6 w-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
    </svg>
  ),
};

const topics = [
  {
    icon: icons.immigration,
    title: "Immigration",
    color: "bg-emerald-50",
    links: [
      { label: "Registration",    to: "/registration"    },
      { label: "Green Cards",     to: "/green-cards"     },
      { label: "Legal Support",   to: "/legal-support"   },
    ],
  },
  {
    icon: icons.work,
    title: "Work & Life",
    color: "bg-sky-50",
    links: [
      { label: "Driver's Licenses",      to: "/drivers-licenses"      },
      { label: "Government Assistance",  to: "/government-assistance" },
      { label: "Employment",             to: "/employment"            },
    ],
  },
  {
    icon: icons.health,
    title: "Health",
    color: "bg-rose-50",
    links: [
      { label: "Mental Health",    to: "/mental-health"    },
      { label: "Healthcare",       to: "/healthcare"       },
      { label: "Reproductive",     to: "/reproductive-health" },
    ],
  },
  {
    icon: icons.education,
    title: "Education",
    color: "bg-amber-50",
    links: [
      { label: "Forms & Aid",    to: "/forms"        },
      { label: "K–12",           to: "/k-12"         },
      { label: "Undocumented",   to: "/undocumented" },
    ],
  },
];

const alerts = [
  "Update: changes to immigration policy in effect from October 2025",
  "Learn more about the new alien registration requirements",
  "Healthcare resources are now available for 2025",
];

export default function Home() {
  const [alertIndex, setAlertIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setAlertIndex((i) => (i + 1) % alerts.length), 12000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Rotating alert bar */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-center text-sm text-amber-900 font-medium">
        <span className="mr-1.5 text-amber-600 font-bold">Update:</span>
        {alerts[alertIndex]}
      </div>

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-[Merriweather] font-bold text-slate-900 leading-tight mb-5">
            Welcome to America
          </h1>
          <p className="text-xl text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto">
            Free resources and step-by-step guides to help you navigate life in the United States — no matter where you are in your journey.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/find_help"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition shadow-sm text-base"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find Help Near You
            </Link>
            <Link
              to="/topics"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition text-base"
            >
              Browse All Topics →
            </Link>
          </div>
        </div>
      </section>

      {/* Topic cards */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-xl font-semibold text-slate-700 text-center mb-8 tracking-wide uppercase text-sm">
          What can we help with?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col"
            >
              <div className={`w-11 h-11 rounded-xl ${topic.color} flex items-center justify-center mb-4`}>
                {topic.icon}
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-3">{topic.title}</h3>
              <ul className="space-y-2 mt-auto">
                {topic.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-emerald-700 hover:text-emerald-900 font-medium flex items-center gap-1 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition text-xs">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quick-action strip */}
      <section className="bg-emerald-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold mb-1">Need help fast?</p>
            <p className="text-emerald-200 text-sm">
              Search our directory of 50+ real immigration support organizations.
            </p>
          </div>
          <Link
            to="/find_help"
            className="shrink-0 bg-white text-emerald-800 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition text-sm shadow"
          >
            Search the Directory →
          </Link>
        </div>
      </section>
    </div>
  );
}
