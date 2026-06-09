// src/components/HomeJourney.tsx

import Link from "next/link";

const services = [
  {
    title: "Brand",
    text: "Identity systems, visual direction, and brand foundations that create clarity.",
  },
  {
    title: "Website",
    text: "Strategic websites built to feel polished, clear, and easy to navigate.",
  },
  {
    title: "Strategy",
    text: "Positioning, messaging, and creative direction before anything gets designed.",
  },
];

const process = [
  ["01", "Discover", "We learn the business, audience, goals, and friction points."],
  ["02", "Define", "We clarify positioning, messaging, priorities, and direction."],
  ["03", "Design", "We translate the strategy into identity, layout, and digital experience."],
  ["04", "Launch", "We refine, prepare, and support the work as it goes live."],
];

const work = [
  {
    title: "The Stillpoint Way",
    type: "Brand Direction / Web",
    image: "/images/stillpoint-preview.jpg",
  },
  {
    title: "Bloom Women’s Health",
    type: "Website / Visual System",
    image: "/images/bloom-preview.jpg",
  },
  {
    title: "Parti",
    type: "Product Concept / UX",
    image: "/images/parti-preview.jpg",
  },
];

export default function HomeJourney() {
  return (
    <main className="bg-black text-[#f4ede3]">
      {/* HERO */}
      <section className="px-6 py-28 md:px-10 lg:px-16">
        <div className="section-frame">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#d97a4a]">
            Lex & Hue Studio
          </p>

          <h1 className="font-editorial max-w-5xl text-6xl leading-[0.9] md:text-8xl lg:text-9xl">
            Clarity before design. Momentum after launch.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#f4ede3]/70 md:text-lg">
            A strategy and design studio helping growing businesses align their
            brand, website, and message into one cohesive digital presence.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block border border-[#d97a4a] px-6 py-4 text-sm uppercase tracking-[0.22em] text-[#d97a4a] transition hover:bg-[#d97a4a] hover:text-black"
          >
            Start a Project
          </Link>
        </div>
      </section>

 {/* PROBLEM */}
<section className="bg-[#f4ede3] px-6 py-24 text-black md:px-10 lg:px-16">
  <div className="section-frame mx-auto grid max-w-7xl gap-16 lg:grid-cols-[420px_1fr] lg:items-start">
    <div className="min-w-0">
      <p className="mb-10 text-xs uppercase tracking-[0.3em] text-[#d97a4a]">
        The Problem
      </p>

      <blockquote className="font-editorial max-w-[360px] text-5xl leading-[0.88] tracking-[-0.05em] text-black md:text-6xl">
        What once
        <br />
        felt good
        <br />
        enough
        <br />
        now creates
        <br />
        <span className="italic text-[#d97a4a]">friction.</span>
      </blockquote>
    </div>

    <div className="min-w-0">
      <h2 className="font-editorial max-w-4xl text-5xl leading-[0.9] tracking-[-0.04em] md:text-7xl">
        Growing businesses often reach a point where things no longer feel
        connected.
      </h2>

      <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-black/65">
        <p>
          For some, the business has evolved beyond the brand they started
          with. For others, the challenge is building a clear foundation from
          the beginning.
        </p>

        <p>
          The messaging feels inconsistent. The visual identity no longer
          reflects the quality of the work. Or there simply isn’t a cohesive
          system yet.
        </p>

        <p className="text-black">
          What once felt good enough — or never fully came together in the first
          place — now creates friction.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* SERVICES */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="section-frame grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="min-h-[340px] border border-[#d8cfc2]/40 p-7 transition hover:border-[#d97a4a]"
            >
              <div className="flex h-full flex-col justify-end">
                <h3 className="font-editorial text-5xl uppercase text-[#d97a4a]">
                  {service.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#f4ede3]/65">
                  {service.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f4ede3] px-6 py-24 text-black md:px-10 lg:px-16">
        <div className="section-frame">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9b4f2e]">
              How We Work
            </p>

            <h2 className="font-editorial text-5xl leading-[0.95] md:text-7xl">
              Thoughtful work starts with understanding.
            </h2>
          </div>

          <div className="grid border-l border-t border-black/30 md:grid-cols-4">
            {process.map(([number, title, text]) => (
              <article
                key={number}
                className="min-h-[300px] border-b border-r border-black/30 p-6"
              >
                <p className="text-sm text-black/45">{number}</p>

                <h3 className="font-editorial mt-20 text-3xl">{title}</h3>

                <p className="mt-5 text-sm leading-7 text-black/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="section-frame">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d97a4a]">
                Selected Work
              </p>

              <h2 className="font-editorial text-5xl md:text-7xl">
                Strategy made visible.
              </h2>
            </div>

            <Link
              href="/work"
              className="font-editorial text-2xl text-[#d97a4a] transition hover:opacity-80"
            >
              View work
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {work.map((item) => (
              <article key={item.title} className="group border border-[#d8cfc2]/40">
                <div className="h-[320px] overflow-hidden bg-[#17110d]">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-editorial text-3xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#f4ede3]/55">{item.type}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-[#d8cfc2]/30 px-6 py-24 md:px-10 lg:px-16">
        <div className="section-frame grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d97a4a]">
            Our Philosophy
          </p>

          <div>
            <h2 className="font-editorial text-5xl leading-[0.95] md:text-7xl">
              Good design is not decoration.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#f4ede3]/70">
              It is the result of understanding. Understanding the business, the
              audience, the goals, and the decisions that drive growth.
              Technology can accelerate execution. It cannot replace
              discernment.
            </p>

            <p className="mt-8 font-editorial text-3xl text-[#d97a4a] md:text-4xl">
              Less noise. More intention. Better alignment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 md:px-10 lg:px-16">
        <div className="section-frame bg-[#d97a4a] p-10 text-black md:p-16">
          <h2 className="font-editorial max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Ready to build with intention?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-black/70">
            Let’s create a brand and website that work together — not as
            separate pieces, but as one clear business presence.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block border border-black px-6 py-4 text-sm uppercase tracking-[0.22em] transition hover:bg-black hover:text-[#f4ede3]"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}