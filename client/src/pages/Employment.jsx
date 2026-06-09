import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function Employment() {
  const authorizations = [
    { status: "Green Card holders (LPR)", auth: "May work for any employer without restriction." },
    { status: "Asylees & Refugees",       auth: "Immediately authorized to work. Apply for an EAD for a physical card (Form I-765)." },
    { status: "H-1B / H-2A / H-2B",       auth: "Authorized only for the sponsoring employer. Changing jobs requires new petition." },
    { status: "DACA recipients",           auth: "Authorized with a valid EAD (Form I-765). Must renew every 2 years." },
    { status: "TPS holders",               auth: "Authorized with a valid EAD. Renew when USCIS extends your country's TPS designation." },
    { status: "Pending asylum (180+ days)","auth": "May apply for an EAD after 180 days of pending asylum application." },
    { status: "Undocumented",              auth: "Not authorized to work. However, all workers have the same wage and safety rights once employed." },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Employment</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Understanding your work authorization and rights as an immigrant worker
        protects you from exploitation and keeps you in compliance with the law.
      </p>

      <InfoBox type="success" title="All workers have rights — regardless of status">
        Federal and state labor laws protect all workers in the US, including undocumented
        workers. Employers cannot legally pay below minimum wage, deny overtime, or
        retaliate against you for reporting unsafe conditions — regardless of your immigration status.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Work Authorization by Immigration Status</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Immigration Status</th>
                <th className="px-4 py-3 text-left font-semibold">Work Authorization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {authorizations.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-slate-800">{row.status}</td>
                  <td className="px-4 py-3 text-gray-600">{row.auth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <InfoBox type="info" title="The I-9 verification process">
        Employers must verify work authorization for all new hires using Form I-9.
        Employers cannot request more documents than required, specify which documents
        to present, or treat employees differently based on citizenship or national origin.
        If an employer does this, it may be illegal discrimination.
      </InfoBox>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Resources</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://www.uscis.gov/working-in-the-united-states">Working in the US (USCIS)</LinkButton>
          <LinkButton to="https://www.usa.gov/job-search">Finding a Job (USA.gov)</LinkButton>
          <LinkButton to="https://www.nilc.org/issues/workers-rights/">Employment Rights (NILC)</LinkButton>
          <LinkButton to="https://www.dol.gov/agencies/whd/workers">Worker Rights (DOL)</LinkButton>
        </div>
      </section>
    </div>
  );
}
