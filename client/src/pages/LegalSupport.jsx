import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function LegalSupport() {
  const types = [
    {
      title: "EOIR Accredited Representatives",
      body: "The Department of Justice authorizes non-lawyers to provide immigration legal services through accredited representatives at recognized organizations. They are often free or low-cost.",
    },
    {
      title: "Pro Bono Attorneys",
      body: "Many immigration attorneys volunteer their services for free (pro bono) to low-income clients. EOIR maintains a nationwide list of pro bono legal service providers by state.",
    },
    {
      title: "Nonprofit Legal Aid Organizations",
      body: "Organizations like RAICES, NIJC, and Catholic Charities provide low-cost or free immigration legal help. They prioritize asylum seekers, domestic violence survivors, and children.",
    },
    {
      title: "Law School Clinics",
      body: "Many law schools operate free immigration clinics supervised by licensed attorneys. Search for clinics near you through your local bar association.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Legal Support</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Immigration law is complex. Getting proper legal help early can prevent costly
        mistakes and protect your rights throughout the process.
      </p>

      <InfoBox type="alert" title="Beware of notario fraud">
        In many Latin American countries, a &ldquo;notario&rdquo; is a high-level legal official. In
        the US, notaries public have no authority to give immigration legal advice. Unauthorized
        practitioners frequently cause irreversible harm. Only work with licensed attorneys or
        EOIR-accredited representatives.
      </InfoBox>

      <InfoBox type="success" title="You have rights regardless of immigration status">
        The Fifth and Fourteenth Amendments protect all persons in the US — not just citizens.
        You have the right to remain silent, the right to an attorney, and the right to a
        hearing before an immigration judge before being removed.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Types of Legal Help Available</h2>
        <div className="space-y-4">
          {types.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="font-semibold text-slate-800 mb-1">{t.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Find Legal Help</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://www.justice.gov/eoir">Executive Office for Immigration Review</LinkButton>
          <LinkButton to="https://www.justice.gov/eoir/list-pro-bono-legal-service-providers">EOIR Pro Bono List</LinkButton>
          <LinkButton to="https://www.immi.org/en">Immi — Anonymous Legal Planning</LinkButton>
          <LinkButton to="https://www.immigrationadvocates.org">Find Legal Aid Near You</LinkButton>
        </div>
      </section>
    </div>
  );
}
