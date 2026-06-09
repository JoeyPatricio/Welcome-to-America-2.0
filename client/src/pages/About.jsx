export default function About() {
  return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-gray-50 rounded-xl shadow-sm">
      <h1 className="text-3xl font-[Merriweather] font-bold text-blue-600 mb-6">
        About Welcome to America
      </h1>

      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          <strong>Welcome to America</strong> is a platform dedicated to helping newcomers and
          immigrants successfully navigate life in the United States. Our mission is to provide
          accessible resources, helpful guides, and a supportive community for anyone starting a
          new chapter in America.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded by a team of passionate computer science students at Western Washington
          University, we hope to better the lives of newcomers to America. We understand
          the challenges of moving to a new country and aim to make the immigration process
          as stress-free as possible.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Step-by-step guides for immigrating to the US</li>
          <li>Information on housing, jobs, healthcare, and education</li>
          <li>Community forums and support</li>
          <li>Stories from fellow newcomers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Contact Us</h2>
        <p className="text-gray-700">
          Have questions or suggestions? Reach out to us at{" "}
          <a
            href="mailto:info@welcometoamerica.com"
            className="text-blue-600 underline font-semibold break-all hover:text-blue-800 transition"
          >
            info@welcometoamerica.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
