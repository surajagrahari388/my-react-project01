import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Contact <span className="text-sky-400">Us</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            Have a project in mind or need help? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        {/* CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Reach out to us through any of the following ways and our team will
            get back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 text-xl">
                📍
              </div>
              <div>
                <p className="font-semibold">Office Address</p>
                <p className="text-gray-400 text-sm">
                  New Delhi, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 text-xl">
                📧
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-400 text-sm">
                  support@myapp.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 text-xl">
                📞
              </div>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-400 text-sm">
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your project"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;