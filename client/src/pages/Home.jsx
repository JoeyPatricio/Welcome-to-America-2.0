import { useState, useEffect } from "react";
import LinkButton from "../components/LinkButton";

const alerts = [
  "Update: changes to immigration policy in effect from October 2025",
  "Learn more about the new alien registration requirements",
  "Healthcare resources are now available for 2025",
];

const topicGroups = [
  {
    title: "Immigration",
    links: [
      { label: "Registration",   to: "/registration"   },
      { label: "Green Cards",    to: "/green-cards"    },
      { label: "Legal Support",  to: "/legal-support"  },
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
      { label: "Mental Health",    to: "/mental-health"      },
      { label: "Healthcare",       to: "/healthcare"         },
      { label: "Reproductive",     to: "/reproductive-health"},
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

export default function Home() {
  const [alertIndex, setAlertIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setAlertIndex((i) => (i + 1) % alerts.length), 12000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen p-6">
      {/* Alert banner */}
      <div className="bg-emerald-100 border border-emerald-300 rounded-xl p-4 mb-8 text-center text-emerald-900 font-medium max-w-3xl mx-auto">
        {alerts[alertIndex]}
      </div>

      <h1 className="text-4xl text-center font-bold mb-4 font-[Merriweather]">
        Welcome to America
      </h1>
      <p className="max-w-2xl mx-auto mb-10 text-center text-lg text-gray-600">
        Free resources to help immigrants navigate life in the United States.
      </p>

      <div className="max-w-5xl mx-auto space-y-10">
        {topicGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{group.title}</h2>
            <div className="flex flex-wrap gap-3">
              {group.links.map((link) => (
                <LinkButton key={link.to} to={link.to}>
                  {link.label}
                </LinkButton>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-4">
          <LinkButton to="/find_help">Find Help Near You</LinkButton>
        </div>
      </div>
    </div>
  );
}
