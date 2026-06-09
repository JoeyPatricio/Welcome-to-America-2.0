import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function Healthcare() {
  const options = [
    {
      title: "Marketplace Plans (ACA)",
      body: "Lawfully present immigrants can buy health insurance through Healthcare.gov. Depending on income, you may qualify for subsidies. Open enrollment runs November–January, with special enrollment for qualifying life events.",
    },
    {
      title: "Medicaid & CHIP",
      body: "Many legal immigrants who have been in the US for 5+ years may qualify for Medicaid. Children and pregnant women often qualify sooner. CHIP covers uninsured children in families that earn too much for Medicaid.",
    },
    {
      title: "Federally Qualified Health Centers (FQHCs)",
      body: "FQHCs receive federal funding to provide care on a sliding-fee scale based on income. They serve everyone regardless of immigration status or ability to pay. Use the HRSA locator to find one near you.",
    },
    {
      title: "Emergency Medicaid",
      body: "Most states provide Emergency Medicaid for emergency medical conditions regardless of immigration status. This covers emergency room treatment for life-threatening situations.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Healthcare</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Access to healthcare in the US can be confusing, but options exist for immigrants
        at every stage of the process.
      </p>

      <InfoBox type="success" title="Emergency care is available to everyone">
        Under federal law (EMTALA), hospitals that accept Medicare must provide emergency
        treatment to anyone regardless of immigration status or ability to pay. Never
        avoid an ER in a life-threatening emergency.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Healthcare Options for Immigrants</h2>
        <div className="space-y-4">
          {options.map((o, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="font-semibold text-slate-800 mb-1">{o.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      <InfoBox type="info" title="Public charge rule">
        Using most Medicaid benefits, CHIP, or marketplace subsidies does NOT count
        against you in a public charge determination for a green card. The 2024 public
        charge rule is narrowly focused on cash assistance and long-term institution care.
      </InfoBox>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Resources</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://www.healthcare.gov/">Healthcare.gov</LinkButton>
          <LinkButton to="https://findahealthcenter.hrsa.gov/">Find a Health Center (HRSA)</LinkButton>
          <LinkButton to="https://www.medicaid.gov/medicaid/eligibility/index.html">Medicaid Eligibility</LinkButton>
          <LinkButton to="https://www.cdc.gov/">CDC Health Topics</LinkButton>
        </div>
      </section>
    </div>
  );
}
