const VisionSection = () => {
  return (
    <section id="vision" className="bg-gray-900 py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/src/components/images/vision.png"
            alt="Vision"
            className="w-full h-auto rounded-xl  object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="w-16 h-1 bg-teal-400 mb-4 mx-auto md:mx-0 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-monserat">
            Our <span className="text-teal-400">Vision</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-roboto">
            To be a trusted digital partner for businesses, providing reliable,
            high-performance, and scalable IT solutions that drive success in
            the ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
