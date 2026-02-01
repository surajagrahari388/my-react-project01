import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build <span className="text-sky-400">Modern</span> Web Apps
              <br /> Faster Than Ever
            </h1>
            <p className="mt-6 text-gray-400 text-lg">
              A powerful platform to design, build and scale your digital
              products with speed and confidence.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-semibold transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-slate-700 hover:border-sky-500 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-sky-500/20 blur-3xl rounded-full" />
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <p className="text-sm text-gray-400">Dashboard Preview</p>
              <div className="mt-4 h-48 rounded-lg bg-gradient-to-r from-sky-500/30 to-purple-500/30" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why Choose <span className="text-sky-400">MyApp</span>
        </h2>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Everything you need to launch a professional product — all in one
          place.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Fast Performance", "Secure by Default", "Scalable", "Modern UI"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-sky-500 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 text-xl mb-4">
                  ⚡
                </div>
                <h3 className="font-semibold text-lg">{item}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  High quality architecture built for modern applications and
                  future growth.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {["10K+ Users", "500+ Projects", "99.9% Uptime", "24/7 Support"].map(
            (stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-sky-400">{stat}</p>
                <p className="text-gray-400 mt-2">Trusted Worldwide</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Loved by Developers
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <p className="text-gray-300">
                “This platform completely changed the way we build products.
                Clean UI and amazing performance.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-500/30" />
                <div>
                  <p className="font-semibold">Developer {i}</p>
                  <p className="text-sm text-gray-400">Frontend Engineer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-purple-500/10" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-400 mt-4">
            Join thousands of developers building next-gen applications.
          </p>
          <button className="mt-8 px-8 py-4 bg-sky-500 hover:bg-sky-600 rounded-xl font-semibold text-lg transition">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home