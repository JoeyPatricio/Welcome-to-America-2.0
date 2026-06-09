import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function GreenCards() {
  const steps = [
    {
      n: 1,
      title: "Determine Your Eligibility Category",
      body: "Green cards are available through family (immediate relatives, family preference), employment (EB-1 through EB-5), refugee/asylee status, the Diversity Visa Lottery, and special programs. Your category determines your timeline.",
    },
    {
      n: 2,
      title: "Sponsor Files a Petition",
      body: "A family member files Form I-130, or an employer files Form I-140. In some categories (EB-1A, EB-2 NIW) you may self-petition. USCIS must approve the petition before you can proceed.",
    },
    {
      n: 3,
      title: "Wait for Visa Availability",
      body: "Immediate relatives of US citizens have no wait. All other categories are subject to annual per-country limits. Check the monthly Visa Bulletin at travel.state.gov to track your priority date.",
    },
    {
      n: 4,
      title: "Apply for the Green Card",
      body: "If you are inside the US, file Form I-485 (Adjustment of Status). If outside, go through consular processing (NVC + DS-260 + embassy interview). You may be able to file I-485 concurrently with the petition in some categories.",
    },
    {
      n: 5,
      title: "Biometrics, Interview & Decision",
      body: "USCIS will schedule a biometrics appointment and, in most cases, an interview at a local field office. After the interview, you receive a decision. Conditional green cards (2 years) are issued in some family cases and must be converted to permanent ones.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Green Cards</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        A Green Card (Lawful Permanent Resident card) gives you the right to live and
        work permanently in the United States. Here is how the process works.
      </p>

      <InfoBox type="warning" title="Processing times vary widely">
        Green card timelines range from a few months (immediate relatives of US citizens)
        to 20+ years (some employment or family preference categories from oversubscribed
        countries). Check the USCIS processing times tool regularly.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">The Green Card Process</h2>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <span className="text-2xl font-bold text-emerald-600 shrink-0 w-8">{s.n}.</span>
              <div>
                <p className="font-semibold text-slate-800">{s.title}</p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <InfoBox type="info" title="Conditional Green Cards">
        If you got your green card through marriage of less than 2 years, it is conditional
        (valid 2 years). You must file Form I-751 within 90 days before it expires to remove
        the conditions and get a permanent card.
      </InfoBox>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Key Forms & Resources</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://www.uscis.gov/green-card/green-card-eligibility-categories">Eligibility Categories</LinkButton>
          <LinkButton to="https://www.uscis.gov/i-130">Form I-130 (Family)</LinkButton>
          <LinkButton to="https://www.uscis.gov/i-140">Form I-140 (Employment)</LinkButton>
          <LinkButton to="https://www.uscis.gov/i-485">Form I-485 (Adjustment)</LinkButton>
          <LinkButton to="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/forms/online-immigrant-visa-forms/ds-260-faqs.html">DS-260 Consular Processing</LinkButton>
        </div>
      </section>
    </div>
  );
}
