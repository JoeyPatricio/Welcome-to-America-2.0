import LinkButton from "../components/LinkButton";

function Employment() {
  const resources = [
    {
      buttons: [
        {
          label: "Working in the US",
          to: "https://www.nilc.org/work/drivers-licenses/",
        },
        {
          label: "Finding a Job",
          to: "https://www.usa.gov/state-motor-vehicle-services",
        },
        {
          label: "Employment Rights",
          to: "https://www.nilc.org/issues/workers-rights/",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Employment</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are key resources for employment-related topics for immigrants in
        the United States. The first link provides an overview of working in the
        US, while the second link helps you find job opportunities. The third
        link outlines your employment rights.
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

export default Employment;
