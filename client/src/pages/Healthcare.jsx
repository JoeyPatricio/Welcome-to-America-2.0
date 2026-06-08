import LinkButton from "../components/LinkButton";

function Healthcare() {
  const resources = [
    {
      buttons: [
        { label: "Healthcare.gov", to: "https://www.healthcare.gov/" },
        { label: "Find a Health Center (HRSA)", to: "https://findahealthcenter.hrsa.gov/" },
        { label: "CDC Health Topics", to: "https://www.cdc.gov/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Healthcare</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are important healthcare resources for new immigrants. These links can help you find health insurance, local clinics, and information on staying healthy. Many services are available regardless of your immigration status.
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

export default Healthcare;