import React from "react";

const industries = [
  {
    title: "E-commerce & Retail",
    description:
      "Scalable platforms, payment integration, and AI-powered analytics.",
  },
  {
    title: "Healthcare & Pharma",
    description:
      "Secure data management, telemedicine solutions, and digital transformation.",
  },
  {
    title: "Finance & Banking",
    description: "Fintech solutions, AI-driven automation, and cybersecurity.",
  },
  {
    title: "Manufacturing & Supply Chain",
    description: "ERP software, IoT integration, and cloud-based solutions.",
  },
  {
    title: "Education & EdTech",
    description:
      "E-learning platforms, LMS solutions, and mobile applications.",
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-monserat text-white mb-6">
          Who We Serve
        </h2>
        <p className="text-white font-roboto mb-10">
          Our tailored IT solutions cater to businesses across multiple
          industries.
        </p>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-stretch">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-slate-700 p-6 rounded-2xl w-full sm:w-[80%] md:w-[30%] hover:shadow-xl shadow-white hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {industry.title}
              </h3>
              <p className="text-white">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
