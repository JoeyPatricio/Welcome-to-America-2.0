import LinkButton from "../components/LinkButton";

function Resources() {
  const resources = [
    {
      buttons: [
        { label: "How to Enroll Your Child in Public School for Migrant Parents", to: "https://www.inmigreat.com/blogs-en/como-inscribir-a-tus-hijos-en-la-escuela-publica-en-estados-unidos" },
        { label: "Supporting Students from Immigrant Families", to: "https://www.learningforjustice.org/supporting-students-from-immigrant-families" },
        { label: "Education and Chiild Care Immigrant Resources", to: "https://www.uscis.gov/citizenship/civic-assimilation/settling-in-the-us/education-and-child-care" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">K-12</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are resources about primary education for immigrants. The first link is a guide for migrant parents on how to enroll their children in public school. There is also a link to immigrants' right to education and resources. Finally, there is a link to federal resources about immigrants' access to education.
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