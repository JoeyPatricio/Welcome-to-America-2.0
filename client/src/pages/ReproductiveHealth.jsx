import LinkButton from "../components/LinkButton";

function ReproductiveHealth() {
  const resources = [
    {
      buttons: [
        { label: "Planned Parenthood", to: "https://www.plannedparenthood.org/" },
        { label: "Bedsider Birth Control", to: "https://www.bedsider.org/" },
        { label: "Office on Women's Health", to: "https://www.womenshealth.gov/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Reproductive Health</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are key reproductive health resources for new immigrants. These links can help you find clinics, learn about birth control, and get answers to your questions. Services are available to everyone, no matter your immigration status.
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

export default ReproductiveHealth;