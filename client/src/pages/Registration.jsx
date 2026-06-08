import LinkButton from "../components/LinkButton";

function Resources() {
  const resources = [
    {
      buttons: [
        { label: "USCIS Account Creation", to: "https://myaccount.uscis.gov/sign-in" },
        { label: "Selective Service Registration", to: "https://www.sss.gov/register/" },
        { label: "SAVE casecheck", to: "https://save.uscis.gov/save/app/client/ui/case-check" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Registration</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are key registration links for new immigrants. Creating an account with USCIS is an important first step, as it allowed you to create and manage immigration applications
        online. Selective Service Registration is required for males aged 18 to 25 living in the U.S. The SAVE casecheck lets you check the status of your immigration records.
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