import { useState, useEffect } from "react";
import LinkButton from "../components/LinkButton";

export default function Home() {
  const bannerMessages = [
    "Update: changes to immigration policy in effect from October 2025",
    "Learn more about the new alien registration requirements",
    "Healthcare resources are now available for 2025",
  ];
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 15000); // Change message every 15 seconds
    return () => clearInterval(interval);
  }, [bannerMessages.length]);

  const topics = [
    {
      title: "Immigration",
      buttons: [
        { label: "Registration", to: "/Registration" },
        { label: "Green Cards", to: "/Green-cards" },
        { label: "Legal Support", to: "/Legal-support" },
      ],
    },
    {
      title: "Work & Life",
      buttons: [
        { label: "Driver's Licenses", to: "/Drivers-licenses" },
        { label: "Government Assistance", to: "/Government-assistance" },
        { label: "Employment", to: "/Employment" },
      ],
    },
    {
      title: "Health",
      buttons: [
        { label: "Mental Health", to: "/Mental-health" },
        { label: "Healthcare", to: "/Healthcare" },
        { label: "Reproductive", to: "/Reproductive-health" },
      ],
    },
    {
      title: "Education",
      buttons: [
        { label: "Financial Aid", to: "/Financial-aid" },
        { label: "K-12", to: "/K-12" },
        { label: "Undocumented", to: "/Undocumented" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-3">
      <div className="w-full bg-emerald-200 text-emerald-900 font-semibold text-center py-10 rounded mb-8 shadow">
        {bannerMessages[bannerIndex]}
      </div>

      <h1 className="text-5xl font-serif font-bold text-center mb-4">
        Welcome to America
      </h1>
      <p className="text-base font-sans text-center mb-8">
        Find resources and information to help you navigate the immigrations process
      </p>

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