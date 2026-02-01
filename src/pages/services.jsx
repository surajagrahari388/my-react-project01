import React from "react";

const Services = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Our <span className="text-sky-400">Services</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            Powerful services designed to help your business grow faster with
            modern technology and great user experience.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {["Web Development", "UI/UX Design", "Mobile Apps", "Backend APIs", "Cloud & DevOps", "Maintenance"].map(
            (service, i) => (
              <div
                key={i}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-sky-500 transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 text-2xl mb-6 group-hover:scale-110 transition">
                  🚀
                </div>
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We deliver high-quality solutions using modern frameworks and
                  best practices tailored to your business needs.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How We Work
          </h2>
          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Our proven process ensures smooth delivery and great results every
            time.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Plan", "Design", "Build", "Launch"].map((step, i) => (
              <div
                key={i}
                className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center hover:border-sky-500 transition"
              >
                <div className="text-sky-400 text-3xl font-bold mb-3">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg">{step}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Structured approach focused on clarity, quality and speed.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-purple-500/10" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-400 mt-4">
            Tell us about your idea and we’ll help you turn it into reality.
          </p>
          <button className="mt-8 px-8 py-4 bg-sky-500 hover:bg-sky-600 rounded-xl font-semibold text-lg transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;