import LinkButton from "../components/LinkButton";

function Resources() {
  const resources = [
    {
      buttons: [
        { label: "Green Card Eligibility Categories", to: "https://www.uscis.gov/green-card/green-card-eligibility-categories" },
        { label: "Form I-350 - Petition for Alien Relative", to: "https://www.uscis.gov/i-130" },
        { label: "I-140, Immigrant Petition for Alien Workers", to: "https://www.uscis.gov/i-140" },
        { label: "Form I-485 - Adjustment of Status", to: "https://www.uscis.gov/i-485" },
        { label: "Consular Processing via DS-260", to: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/forms/online-immigrant-visa-forms/ds-260-faqs.html" },
        { label: "Applying With a Criminal Record", to: "https://www.boundless.com/immigration-resources/green-card-applicants-with-criminal-records/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Registration</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are important resources for immigrants seeking to obtain a Green Card in the United States. After determining whether you are eligible through the green card eligibility categories, the green card application process consists of these key steps:
          <ul className="list-disc list-inside text-left mt-4">
    <li>Your sponsor, usually a family member or employer, files Form I-130 or I-140</li>
    <li>Wait for visa availability</li>
    <li>Apply for a green card using Form I-485 if within the U.S. or through consular processing and DS-260</li>
    <li>Attend a biometrics appointment and interview</li>
    <li>Wait for decision</li>
  </ul>
        
      </p>
      {resources.map((form, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl text-center font-semibold">{form.title}</h2>
          <hr className="my-4 border-gray-300" />
          <div className="flex flex-wrap justify-center gap-4">
            {form.buttons.map((btn, idx) => (
              <LinkButton key={idx} to={btn.to}>
                {btn.label}
              </LinkButton>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Resources;