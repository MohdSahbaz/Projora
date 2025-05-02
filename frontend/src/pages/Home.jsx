import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Projora – Buy & Sell Academic Project Templates</title>
        <meta
          name="description"
          content="Projora is a marketplace where students and developers can buy and sell academic and technical project templates for learning and reference purposes."
        />
        <meta
          name="keywords"
          content="projora, academic projects, student projects, code marketplace, sell code, download source code, project templates"
        />
        <meta name="author" content="Projora Team" />
        <meta
          property="og:title"
          content="Projora – Academic Project Marketplace"
        />
        <meta
          property="og:description"
          content="Explore and sell academic and technical projects. Learn by example and empower your coding journey with Projora."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="p-6 space-y-10">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Projora
          </h1>
          <p className="text-lg text-gray-600">
            A marketplace for academic and technical projects
          </p>
        </section>

        {/* Featured Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="h-32 bg-gray-100 rounded-sm flex items-center justify-center text-gray-500">
            Coming Soon...
          </div>
        </section>

        {/* Top Categories */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Top Categories
          </h2>
          <div className="h-32 bg-gray-100 rounded-sm flex items-center justify-center text-gray-500">
            Coming Soon...
          </div>
        </section>

        {/* Why Choose Projora */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why choose Projora?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Quick Access</li>
            <li>Built for Students</li>
            <li>Download Source Code</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-4 bg-gray-100 rounded-sm p-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Start selling your projects to students around India
          </h2>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-700 transition">
            Explore Projects
          </button>
        </section>
      </div>
    </>
  );
};

export default Home;
