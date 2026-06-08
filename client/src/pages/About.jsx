import React from "react";

const About = () => (
  <div
    className="about-container"
    style={{
      maxWidth: 900,
      margin: "40px auto",
      padding: "32px",
      background: "#f9fafb",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    }}
  >
    <h1 style={{ color: "#2563eb", fontFamily: "Merriweather, serif" }}>
      About Welcome to America
    </h1>
    <section style={{ marginBottom: 32 }}>
      <p>
        <strong>Welcome to America</strong> is a platform dedicated to helping newcomers and immigrants successfully immigrate to the United States.
        Our mission is to provide accessible resources, helpful guides, and a supportive community for anyone trying to starting a new chapter in America.
      </p>
    </section>

    <section style={{ marginBottom: 32 }}>
      <h2 style={{ color: "#1e293b" }}>Our Story</h2>
      <p>
        Founded by a team of passionate computer science students at Western Washington University, we hope to better the lives of newcomers to America.
        We understand the challenges of moving to a new country and aim to make the immigration proccess as stress free as possible.
      </p>
    </section>

    <section style={{ marginBottom: 32 }}>
      <h2 style={{ color: "#1e293b" }}>What We Offer</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li>Step-by-step guides for immigrating to the US</li>
        <li>Information on housing, jobs, healthcare, and education</li>
        <li>Community forums and support</li>
        <li>Stories from fellow newcomers</li>
      </ul>
    </section>

    <section style={{ marginBottom: 32 }}>
      <h2 style={{ color: "#1e293b" }}></h2>
      <p>
      </p>
    </section>

    <section>
      <h2 style={{ color: "#1e293b" }}>Contact Us</h2>
      <p>
        Have questions or suggestions? Reach out to us at{" "}
        <a
          href="mailto:info@welcometoamerica.com"
          style={{
            color: "#2563eb",
            textDecoration: "underline",
            fontWeight: "bold",
            wordBreak: "break-all",
          }}
        >
          info@welcometoamerica.com
        </a>.
      </p>
    </section>
  </div>
);

export default About;