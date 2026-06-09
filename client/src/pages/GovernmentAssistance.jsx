import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function GovernmentAssistance() {
  const programs = [
    {
      name: "SNAP (Food Stamps)",
      eligibility: "Most LPRs after 5 years, refugees & asylees immediately.",
      note: "Children under 18 who are LPRs often qualify immediately, regardless of the 5-year bar.",
    },
    {
      name: "Medicaid / CHIP",
      eligibility: "Many LPRs after 5 years. Children and pregnant women often qualify sooner.",
      note: "Emergency Medicaid is available to everyone regardless of status.",
    },
    {
      name: "WIC (Women, Infants, Children)",
      eligibility: "Available to pregnant and postpartum women, infants, and children up to age 5 — regardless of immigration status in most states.",
      note: "WIC does NOT count as a public charge factor.",
    },
    {
      name: "SSI (Supplemental Security Income)",
      eligibility: "Generally limited to US citizens, refugees, asylees, and some LPRs who meet specific conditions.",
      note: "Receiving SSI can count as a public charge factor for future immigration benefits.",
    },
    {
      name: "TANF (Cash Assistance)",
      eligibility: "Mostly limited to US citizens. Some states use state funds to cover qualified LPRs.",
      note: "TANF counts as a public charge factor for green card applications.",
    },
    {
      name: "Disaster Assistance (FEMA)",
      eligibility: "US citizens and certain qualified non-citizens. Mixed-status households can still apply.",
      note: "Undocumented family members in a household do not prevent eligible members from applying.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Government Assistance</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Benefit eligibility for immigrants depends on your immigration status, length
        of residency, and program rules. Here is a plain-language overview.
      </p>

      <InfoBox type="warning" title="Public charge rule — know the facts">
        Using most benefits (Medicaid, SNAP, WIC, CHIP, ACA subsidies) does NOT make
        you a &ldquo;public charge&rdquo; for immigration purposes. Only SSI and long-term care
        under Medicaid are considered. Do not forgo benefits you are entitled to out of fear.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Key Programs at a Glance</h2>
        <div className="space-y-3">
          {programs.map((p, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="font-semibold text-slate-800 mb-1">{p.name}</p>
              <p className="text-sm text-gray-700"><span className="font-medium">Eligibility:</span> {p.eligibility}</p>
              <p className="text-xs text-gray-500 mt-1 italic">{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Resources</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://www.nilc.org/wp-content/uploads/2024/04/tbl1_ovrvw-fed-pgms-rev-2024-04-1.pdf">Overview Table (NILC)</LinkButton>
          <LinkButton to="https://www.benefits.gov/benefit-finder/">Benefits Finder</LinkButton>
          <LinkButton to="https://www.disasterassistance.gov/help/contact-us">Disaster Aid Resources</LinkButton>
        </div>
      </section>
    </div>
  );
}
