import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function MentalHealth() {
  const challenges = [
    "Separation from family and community support networks",
    "Trauma from conflict, persecution, or dangerous migration journeys",
    "Uncertainty and stress from prolonged immigration processes",
    "Language barriers that make it difficult to access care",
    "Fear of seeking help due to immigration status concerns",
    "Cultural stigma around mental health in some communities",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">Mental Health</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Your mental health matters. Seeking help is a sign of strength, not weakness —
        and support is available regardless of your immigration status.
      </p>

      <InfoBox type="alert" title="Crisis? Call or text 988">
        The 988 Suicide &amp; Crisis Lifeline is free, confidential, and available 24/7
        in English and Spanish. Text HOME to 741741 to reach the Crisis Text Line.
        Calling 988 does not notify immigration authorities.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Common Mental Health Challenges for Immigrants</h2>
        <p className="text-gray-600 text-sm mb-4">
          Moving to a new country is one of the most stressful life events a person can experience. You are not alone if you experience:
        </p>
        <ul className="space-y-2">
          {challenges.map((c, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700">
              <span className="text-emerald-600 font-bold shrink-0">•</span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      <InfoBox type="success" title="Help is available regardless of status">
        Community mental health centers are required to provide emergency mental health
        services regardless of immigration status or ability to pay. Many have multilingual
        therapists and sliding-scale fees.
      </InfoBox>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Get Support</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://988lifeline.org/">988 Suicide &amp; Crisis Lifeline</LinkButton>
          <LinkButton to="https://www.crisistextline.org/">Crisis Text Line</LinkButton>
          <LinkButton to="https://www.mentalhealth.gov/">MentalHealth.gov</LinkButton>
          <LinkButton to="https://findtreatment.samhsa.gov/">SAMHSA Treatment Locator</LinkButton>
          <LinkButton to="https://www.nami.org">NAMI Helpline</LinkButton>
        </div>
      </section>
    </div>
  );
}
