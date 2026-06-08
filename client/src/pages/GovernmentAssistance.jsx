import LinkButton from "../components/LinkButton";

function GovernmentAssistance() {
  const resources = [
    {
      buttons: [
        {
          label: "Overview Table",
          to: "https://www.nilc.org/wp-content/uploads/2024/04/tbl1_ovrvw-fed-pgms-rev-2024-04-1.pdf",
        },
        {
          label: "Disaster Aid Resources",
          to: "https://www.disasterassistance.gov/help/contact-us",
        },
        {
          label: "Benefit Finder",
          to: "https://www.benefits.gov/benefit-finder/",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">
        Government Assistance
      </h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are key resources for government assistance programs available to
        immigrants in the United States. The first link provides an overview
        table of federal programs, while the second link directs you to disaster
        aid resources. The third link is a benefit finder to help you identify
        available benefits.
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

export default GovernmentAssistance;
