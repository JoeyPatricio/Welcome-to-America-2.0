import LinkButton from "../components/LinkButton";

function Resources() {
  const resources = [
    {
      buttons: [
        { label: "Executive Office for Immigration Review", to: "https://www.justice.gov/eoir" },
        { label: "EOIR Free and Low-Cost Legal Service Providers", to: "https://www.justice.gov/eoir/list-pro-bono-legal-service-providers" },
        { label: "Immi - Anonymous Legal Planmaking", to: "https://www.immi.org/en"},
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Registration</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are several useful legal resources for immigrants. One of the most important legal resources to utilize is 
        the Executive Office for Immigration Review's website, which allows you to check immigration court case status, find immigration courts, and access free and low-cost legal help. Additionally, the immi online interview allows you to recieve personalized results explaining immigration options, based on an anonymous survey. It also has options to make a plan if you are concerned about being detained or deported.
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