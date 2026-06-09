import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function ReproductiveHealth() {
  const services = [
    {
      title: "Family Planning",
      body: "Title X clinics provide free or low-cost birth control, pregnancy testing, and counseling for anyone regardless of immigration status or income.",
    },
    {
      title: "Prenatal Care",
      body: "Emergency Medicaid covers prenatal care and labor & delivery for low-income pregnant women regardless of immigration status in most states.",
    },
    {
      title: "STI Testing & Treatment",
      body: "Federally qualified health centers and local health departments provide confidential STI testing and treatment on a sliding-fee scale, no immigration questions asked.",
    },
    {
      title: "WIC During Pregnancy",
      body: "WIC provides nutritional support (food vouchers, formula, education) for pregnant and postpartum women and infants. Available to immigrants regardless of status.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Reproductive Health</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Reproductive healthcare services are available to everyone in the US,
        regardless of immigration status or ability to pay.
      </p>

      <InfoBox type="success" title="Confidentiality is protected">
        Healthcare providers are bound by HIPAA privacy rules and cannot share your
        medical information with immigration authorities without your consent (except in
        very limited circumstances such as a court order).
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Services Available to All</h2>
        <div className="space-y-4">
          {services.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="font-semibold text-slate-800 mb-1">{s.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Resources</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://www.plannedparenthood.org/">Planned Parenthood</LinkButton>
          <LinkButton to="https://www.bedsider.org/">Bedsider Birth Control</LinkButton>
          <LinkButton to="https://www.womenshealth.gov/">Office on Women&apos;s Health</LinkButton>
          <LinkButton to="https://findahealthcenter.hrsa.gov/">Find a Health Center</LinkButton>
        </div>
      </section>
    </div>
  );
}
