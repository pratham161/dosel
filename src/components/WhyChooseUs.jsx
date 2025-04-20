import React from "react";

const reasons = [
  {
    title: "Industry-Specific Customization",
    description:
      "We design and implement solutions tailored to your industry needs.",
  },
  {
    title: "Agile & Scalable Tech Solutions",
    description: "Future-proof strategies that grow with your business.",
  },
  {
    title: "Customer-First Approach",
    description:
      "We focus on user experience, engagement, and conversion optimization.",
  },
  {
    title: "Expert Team",
    description:
      "A diverse team of developers, data analysts, digital strategists, and marketers.",
  },
  {
    title: "Global Reach",
    description:
      "Supporting businesses in UAE, USA, UK, Germany, Australia, and India.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 lg:px-24 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-monserat">
            Why Choose <span className="text-white">Dosel Technologies</span>?
          </h2>
          <p className="text-base md:text-lg text-white font-roboto">
            We blend innovation, deep industry knowledge, and cutting-edge tech
            to help your business grow.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <img
            className="w-full lg:w-1/2 object-cover"
            src="conpany.png"
            alt="Company"
          />

          {/* Reasons */}
          <div className="space-y-8 w-full lg:w-1/2">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-400 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-1 font-monserat">
                    {reason.title}
                  </h3>
                  <p className="text-white text-base md:text-lg font-roboto">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;