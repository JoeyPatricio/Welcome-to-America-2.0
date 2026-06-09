import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function Undocumented() {
  const rights = [
    "The right to remain silent — you do not have to answer questions about your immigration status.",
    "The right to refuse to consent to a search of yourself, your car, or your home.",
    "The right to a hearing before an immigration judge before being deported.",
    "The right to contact your consulate if you are detained.",
    "The right to an attorney — though the government does not pay for one in immigration cases.",
    "The right to call a family member or friend if you are detained.",
  ];

  const postSecondary = [
    {
      title: "Community Colleges",
      body: "Many community colleges accept undocumented students. Some states (California, Texas, NY, and others) allow undocumented residents to pay in-state tuition under state DREAM Acts.",
    },
    {
      title: "Private Scholarships",
      body: "Numerous private scholarships are open to undocumented students, including TheDream.US, Golden Door Scholars, and many college-specific awards. FAFSA is not available, but some state aid is.",
    },
    {
      title: "DACA (Deferred Action for Childhood Arrivals)",
      body: "DACA allows certain individuals who arrived as children to receive a 2-year, renewable deferral from deportation and work authorization. New applications are currently paused; renewals are ongoing.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Undocumented Students & Immigrants</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Even without legal immigration status, you have important rights in the United
        States. Know them — and know your options.
      </p>

      <InfoBox type="alert" title="Know your rights if approached by ICE">
        You have constitutional rights regardless of immigration status. You do NOT have
        to open the door for immigration officers unless they have a judicial warrant signed
        by a judge (not an administrative warrant). Stay calm, do not run, and document
        everything you can.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Your Rights</h2>
        <ul className="space-y-2">
          {rights.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg px-4 py-3">
              <span className="text-emerald-600 font-bold shrink-0">✓</span>
              {r}
            </li>
          ))}
        </ul>
      </section>

      <InfoBox type="info" title="Safe locations">
        Schools, churches, and hospitals have historically been considered &ldquo;sensitive
        locations&rdquo; where enforcement actions should be avoided. Always seek medical care
        and keep your children in school.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Post-Secondary Education Options</h2>
        <div className="space-y-4">
          {postSecondary.map((p, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="font-semibold text-slate-800 mb-1">{p.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Resources</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://www.glsen.org/article/daca-undocumented-students-rights-equal-access-k-12-public-schools">Students&apos; Rights (K-12)</LinkButton>
          <LinkButton to="https://www.higheredimmigrationportal.org/effective_practice/beyond-daca-a-directory-of-resources-for-undocumented-students-individuals/">Beyond DACA Resources</LinkButton>
          <LinkButton to="https://www.informedimmigrant.com/resources/undocumented-students/options-for-undocumented-high-school-students/">Post-High School Options</LinkButton>
          <LinkButton to="https://www.uscis.gov/DACA">DACA Information (USCIS)</LinkButton>
        </div>
      </section>
    </div>
  );
}
