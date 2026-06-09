import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function Registration() {
  const steps = [
    {
      n: 1,
      title: "Create a USCIS Online Account",
      body: "A myUSCIS account lets you file applications, check case status, receive notices, and schedule appointments online. It is the starting point for almost every immigration process.",
    },
    {
      n: 2,
      title: "Register for Selective Service (if required)",
      body: "Almost all male persons who are not US citizens, ages 18–25 and living in the United States, are required by law to register with Selective Service within 30 days of arriving. Failing to register can affect eligibility for federal benefits.",
    },
    {
      n: 3,
      title: "Verify Your Immigration Status via SAVE",
      body: "The SAVE system allows federal, state, and local agencies to verify your immigration status. You can use the SAVE CaseCheck tool to look up your own records and confirm your information is accurate.",
    },
    {
      n: 4,
      title: "Keep Copies of All Documents",
      body: "Always keep certified copies of your visa, passport, I-94 arrival record, and any USCIS notices. You will need these for employment, benefits, and future immigration filings.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Registration</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Key registration steps for newly arrived immigrants. Completing these early
        protects your legal status and unlocks access to services.
      </p>

      <InfoBox type="info" title="Required for most non-citizens">
        Alien registration is required by federal law (8 U.S.C. § 1301–1306) for all
        non-citizens age 14 or older who remain in the US for 30 days or more. Carry
        your registration document at all times.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Steps to Get Registered</h2>
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

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Official Resources</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://myaccount.uscis.gov/sign-in">USCIS Account Creation</LinkButton>
          <LinkButton to="https://www.sss.gov/register/">Selective Service Registration</LinkButton>
          <LinkButton to="https://save.uscis.gov/save/app/client/ui/case-check">SAVE CaseCheck</LinkButton>
        </div>
      </section>
    </div>
  );
}
