import LinkButton from "../components/LinkButton";

function Topics() {
  const topics = [
    {
      title: "Immigration",
      buttons: [
        { label: "Registration", to: "/registration" },
        { label: "Green Cards", to: "/green-cards" },
        { label: "Legal Support", to: "/legal-support" },
      ],
    },
    {
      title: "Work & Life",
      buttons: [
        { label: "Driver's Licenses", to: "/drivers-licenses" },
        { label: "Government Assistance", to: "/government-assistance" },
        { label: "Employment", to: "/employment" },
      ],
    },
    {
      title: "Health",
      buttons: [
        { label: "Mental Health", to: "/mental-health" },
        { label: "Healthcare", to: "/healthcare" },
        { label: "Reproductive", to: "/reproductive-health" },
      ],
    },
    {
      title: "Education",
      buttons: [
        { label: "Financial Aid", to: "/financial-aid" },
        { label: "K-12", to: "/k-12" },
        { label: "Undocumented", to: "/undocumented" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Topics</h1>

      {topics.map((topic, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl text-center font-semibold">{topic.title}</h2>
          <hr className="my-4 border-gray-300" />
          <div className="flex gap-4 flex-wrap justify-center items-center">
            {topic.buttons.map((btn, idx) => (
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

export default Topics;
