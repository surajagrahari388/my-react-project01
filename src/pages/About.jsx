import React from "react";

const About = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            About <span className="text-sky-400">MyApp</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            We are building next-generation digital products with a strong focus
            on performance, design and user experience.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Story
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            MyApp started with a simple idea — to make building modern web
            applications easier, faster and more enjoyable for developers and
            businesses.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Today, we help thousands of teams worldwide launch scalable digital
            products using cutting-edge technologies and clean design systems.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 bg-sky-500/20 blur-3xl rounded-full" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="h-56 rounded-xl bg-gradient-to-r from-sky-500/30 to-purple-500/30" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our Core Values
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Innovation", "Quality", "Transparency", "Customer First"].map(
              (value, i) => (
                <div
                  key={i}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-sky-500 transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 text-xl mb-4">
                    ⭐
                  </div>
                  <h3 className="font-semibold text-lg">{value}</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    We believe in delivering consistent excellence through every
                    product we build.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Meet Our Team
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-sky-500/40 to-purple-500/40 mb-4" />
              <h3 className="font-semibold text-lg">Team Member {i}</h3>
              <p className="text-gray-400 text-sm">Product Engineer</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-purple-500/10" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-gray-400 mt-4">
            Empower developers and businesses to create impactful digital
            experiences with confidence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;