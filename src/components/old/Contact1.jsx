import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        {/* <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none shadow-sm"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none shadow-sm"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full min-h-32 px-4 py-2 border rounded-lg focus:outline-none shadow-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form> */}
        <a href="mailto:maityshubham1510@gmail.com" target="_blank" rel="noopener noreferrer">maityshubham1510@gmail.com</a>
      </div>
    </section>
  );
};

export default Contact;