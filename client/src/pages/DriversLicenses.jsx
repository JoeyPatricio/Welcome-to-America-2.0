import LinkButton from "../components/LinkButton";

function DriversLicenses() {
  const resources = [
    {
      buttons: [
        {
          label: "Guide & Overview",
          to: "https://www.nilc.org/work/drivers-licenses/",
        },
        {
          label: "Your State's Website",
          to: "https://www.usa.gov/state-motor-vehicle-services",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Driver's License</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are key resources for obtaining a driver's license as a immigrant
        living in the United States. The first link provides a comprehensive
        guide and overview of the process, while the second link directs you to
        your state's official website for specific requirements and procedures.
      </p>
      {resources.map((form, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl text-center font-semibold">{form.title}</h2>
          <hr className="my-4 border-gray-300" />
          <div className="flex flex-wrap justify-center gap-4">
            {form.buttons.map((btn, idx) => (
              <LinkButton key={idx} to={btn.to} className="bg-gray-400">
                {btn.label}
              </LinkButton>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DriversLicenses;
