import LinkButton from "../components/LinkButton";

// Stage 2: plain layout, section headers without colored bands
const sections = [
  {
    title: "Most Accessed",
    color: "bg-emerald-50 text-emerald-800",
    forms: [
      { label: "I-9 — Employment Eligibility Verification",                to: "https://www.uscis.gov/i-9"   },
      { label: "I-485 — Application to Register Permanent Residence",      to: "https://www.uscis.gov/i-485" },
      { label: "I-765 — Application for Employment Authorization",         to: "https://www.uscis.gov/i-765" },
    ],
  },
  {
    title: "Family",
    color: "bg-sky-50 text-sky-800",
    forms: [
      { label: "I-129F — Petition for Alien Fiancé(e)",                                to: "https://www.uscis.gov/i-129f" },
      { label: "I-130 — Petition for Alien Relative",                                  to: "https://www.uscis.gov/i-130"  },
      { label: "I-360 — Petition for Amerasian, Widow(er), or Special Immigrant",      to: "https://www.uscis.gov/i-360"  },
    ],
  },
  {
    title: "Employment",
    color: "bg-amber-50 text-amber-800",
    forms: [
      { label: "I-129 — Petition for a Nonimmigrant Worker",       to: "https://www.uscis.gov/i-129" },
      { label: "I-140 — Immigrant Petition for Alien Workers",     to: "https://www.uscis.gov/i-140" },
      { label: "I-526 — Immigrant Petition by Standalone Investor",to: "https://www.uscis.gov/i-526" },
    ],
  },
  {
    title: "Humanitarian",
    color: "bg-rose-50 text-rose-800",
    forms: [
      { label: "I-589 — Application for Asylum",                   to: "https://www.uscis.gov/i-589" },
      { label: "I-730 — Refugee/Asylee Relative Petition",         to: "https://www.uscis.gov/i-730" },
      { label: "I-821 — Application for Temporary Protected Status",to: "https://www.uscis.gov/i-821" },
    ],
  },
];

export default function Forms() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-4">USCIS Forms</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Key immigration forms organized by purpose. Click any form to open the official USCIS page.
      </p>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-2">{section.title}</h2>
            <div className="flex flex-wrap gap-3">
              {section.forms.map((form) => (
                <LinkButton key={form.to} to={form.to}>
                  {form.label}
                </LinkButton>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        All links go directly to official USCIS.gov pages.
      </p>
    </div>
  );
}
