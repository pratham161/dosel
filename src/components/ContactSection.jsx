const ContactSection = () => {
  return (
    <section id="contactus" className="bg-gray-900 py-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-monserat">
          Contact <span className="text-teal-400">Us</span>
        </h2>
        <p className="text-gray-300 mb-10 font-roboto">
          We'd love to hear from you. Fill out the form and we'll get back to
          you soon.
        </p>

        {/* Form */}
        <form className="space-y-6 text-left">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-bold font-roboto shadow-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
