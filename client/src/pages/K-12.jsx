import InfoBox from "../components/InfoBox";
import LinkButton from "../components/LinkButton";

export default function K12() {
  const steps = [
    {
      n: 1,
      title: "Contact Your Local School District",
      body: "Call or visit the school district office for the area where you live. They will direct you to the right school and explain the enrollment process.",
    },
    {
      n: 2,
      title: "Gather Enrollment Documents",
      body: "Most districts require: proof of residency (lease, utility bill), child's birth certificate or proof of age, immunization records, and previous school records if available. Schools cannot require a Social Security number.",
    },
    {
      n: 3,
      title: "Request an Interpreter if Needed",
      body: "Schools that receive federal funds must provide language assistance to families with limited English proficiency. Ask the school office for an interpreter — this is free.",
    },
    {
      n: 4,
      title: "Ask About English Language Learner (ELL) Services",
      body: "If your child's primary language is not English, the school must assess their English proficiency and provide ELL services. This is a federal requirement.",
    },
    {
      n: 5,
      title: "Know About McKinney-Vento Rights",
      body: "Children experiencing homelessness (including those in shelters, motels, or doubled-up housing) have the right to immediate school enrollment, transportation, and services under the McKinney-Vento Act.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-3 text-slate-900">K–12 Education</h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        All children in the United States have the right to a free public education,
        regardless of their immigration status or that of their parents.
      </p>

      <InfoBox type="success" title="Constitutional right — Plyler v. Doe (1982)">
        The US Supreme Court ruled in <em>Plyler v. Doe</em> that public schools cannot
        deny enrollment to children based on undocumented status. Schools also cannot
        require Social Security numbers or ask about immigration status during enrollment.
      </InfoBox>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">How to Enroll Your Child</h2>
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
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Resources</h2>
        <div className="flex flex-wrap gap-4">
          <LinkButton to="https://www.inmigreat.com/blogs-en/como-inscribir-a-tus-hijos-en-la-escuela-publica-en-estados-unidos">Enrollment Guide for Migrant Parents</LinkButton>
          <LinkButton to="https://www.learningforjustice.org/supporting-students-from-immigrant-families">Supporting Immigrant Students</LinkButton>
          <LinkButton to="https://www.uscis.gov/citizenship/civic-assimilation/settling-in-the-us/education-and-child-care">USCIS: Education & Child Care</LinkButton>
        </div>
      </section>
    </div>
  );
}
