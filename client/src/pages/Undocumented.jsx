import LinkButton from "../components/LinkButton";

function Resources() {
  const resources = [
    {
      buttons: [
        { label: "Undocumented Students' Rights", to: "https://www.glsen.org/article/daca-undocumented-students-rights-equal-access-k-12-public-schools" },
        { label: "Beyond DACA Resources", to: "https://www.higheredimmigrationportal.org/effective_practice/beyond-daca-a-directory-of-resources-for-undocumented-students-individuals/" },
        { label: "Options for Undocumented Students Post-Highschool", to: "https://www.informedimmigrant.com/resources/undocumented-students/options-for-undocumented-high-school-students/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Undocumented</h1>
      <p className="max-w-2xl mx-auto mb-8 text-center text-lg text-gray-700">
        Below are links to information about the right to education for undocumented students. There are several more resources on the Beyond DACA page for students who complete their K-12 education. There are even more options for post-highschool undocumented students at the next link.
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