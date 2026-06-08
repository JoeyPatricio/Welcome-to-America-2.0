import LinkButton from "../components/LinkButton";

function Forms() {
  const forms = [
    {
      title: "Most Accessed",
      buttons: [
        { label: "I-9, Employment Eligibility Verification", to: "https://www.uscis.gov/i-9" },
        { label: "I-485, Application to Register Permanent Residence or Adjust Status", to: "https://www.uscis.gov/i-485" },
        { label: "I-765, Application for Employment Authorization", to: "https://www.uscis.gov/i-765" },
      ],
    },
    {
      title: "Family",
      buttons: [
        { label: "I-129F, Petition for Alien Fiancé(e)", to: "https://www.uscis.gov/i-129f" },
        { label: "I-130, Petition for Alien Relative", to: "https://www.uscis.gov/i-130" },
        { label: "I-360, Petition for Amerasian, Widow(er), or Special Immigrant", to: "https://www.uscis.gov/i-360" },
      ],
    },
    {
      title: "Employment",
      buttons: [
        { label: "I-129, Petition for a Nonimmigrant Worker", to: "https://www.uscis.gov/i-129" },
        { label: "I-140, Immigrant Petition for Alien Workers", to: "https://www.uscis.gov/i-140" },
        { label: "I-526, Immigrant Petition by Standalone Investor", to: "https://www.uscis.gov/i-526" },
      ],
    },
    {
      title: "Humanitarian",
      buttons: [
        { label: "I-589, Application for Asylum and for Withholding of Removal", to: "https://www.uscis.gov/i-589" },
        { label: "I-730, Refugee/Asylee Relative Petition", to: "https://www.uscis.gov/i-730" },
        { label: "I-821, Application for Temporary Protected Status", to: "https://www.uscis.gov/i-821" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Forms</h1>
      {forms.map((form, index) => (
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

export default Forms;