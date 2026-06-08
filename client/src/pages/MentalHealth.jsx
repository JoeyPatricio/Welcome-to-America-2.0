import LinkButton from "../components/LinkButton";

function MentalHealth() {
  const resources = [
    {
      buttons: [
        { label: "988 Suicide & Crisis Lifeline", to: "https://988lifeline.org/" },
        { label: "MentalHealth.gov", to: "https://www.mentalhealth.gov/" },
        { label: "SAMHSA Treatment Locator", to: "https://findtreatment.samhsa.gov/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Mental Health</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are key mental health resources for new immigrants. These links can help you find support, learn about mental health, and connect with services in your area. Help is available to everyone, no matter your immigration status.
      </p>
      {resources.map((form, index) => (
        <div key={index} className="mb-10">
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

export default MentalHealth;