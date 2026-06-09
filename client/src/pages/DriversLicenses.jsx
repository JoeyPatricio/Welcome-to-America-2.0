import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function DriversLicenses() {
  const docs = [
    "Valid passport or passport card",
    "Foreign birth certificate (with certified translation if not in English)",
    "Proof of Social Security Number (if you have one) — SSN card or W-2",
    "Two proofs of state residency (utility bills, bank statements, lease agreement)",
    "Immigration document showing current legal status (green card, EAD, visa, I-94)",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Driver&apos;s Licenses</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Requirements for obtaining a driver&apos;s license vary by state, but options
        exist for immigrants across immigration statuses.
      </p>

      <InfoBox type="info" title="REAL ID vs. Standard License">
        A REAL ID-compliant license (marked with a star) is required to board domestic
        flights and enter federal buildings starting May 7, 2025. Most lawfully present
        immigrants can get a REAL ID. Standard licenses are accepted for everyday driving.
      </InfoBox>

      <InfoBox type="success" title="Many states allow undocumented residents to get a license">
        As of 2024, more than 19 states and Washington DC allow undocumented residents
        to obtain a standard driver&apos;s license. Check your state&apos;s DMV website for exact
        eligibility requirements.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Documents You Will Typically Need</h2>
        <ul className="space-y-2">
          {docs.map((d, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg px-4 py-3">
              <span className="text-emerald-600 font-bold shrink-0">✓</span>
              {d}
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-500 mt-3">
          Requirements vary. Always check your state DMV&apos;s official list before visiting.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Resources</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://www.nilc.org/work/drivers-licenses/">State-by-State Guide (NILC)</LinkButton>
          <LinkButton to="https://www.usa.gov/state-motor-vehicle-services">Find Your State DMV</LinkButton>
          <LinkButton to="https://www.dhs.gov/real-id">REAL ID Information (DHS)</LinkButton>
        </div>
      </section>
    </div>
  );
}
