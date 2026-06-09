"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { caseStudies } from "@/data/site";
import { useState } from "react";

const journeyItems = [
  {
    label: "The Problem",
    title: "What once felt good enough now creates friction.",
    word: ["DIS", "CONNECT"],
    text: ["Businesses rarely struggle because they lack talent, expertise, or ambition. More often, growth creates a different problem. The website no longer reflects the quality of the work. The messaging has evolved in multiple directions. New services have been added without a clear structure. Marketing feels inconsistent because the foundation underneath it has become fragmented.", "", "What was once enough to get started becomes harder to scale. Decisions take longer. Opportunities are missed. Potential clients leave with questions instead of clarity."],
  },
  {
    label: "The Shift",
    title: "A stronger business needs a clearer system.",
    word: ["RE", "ALIGN"],
    text:["Growth doesn't require more noise. It requires alignment.", "When strategy, messaging, visual identity, and digital experience support one another, the business becomes easier to understand, easier to trust, and easier to grow.Marketing feels inconsistent because the foundation underneath it has become fragmented.", "The goal is not simply to look better. The goal is to create a foundation that supports better decisions, stronger positioning, and greater momentum."],
  },
  {
    label: "How We Work",
    title: "Thoughtful work starts with understanding.",
    word: ["PROCESS"],
    text: ["Every project begins with understanding.", "When strategy, messaging, visual identity, and digital experience support one another, the business becomes easier to understand, easier to trust, and easier to grow.", "Before visuals, before layouts, before development, we identify what matters most: who you're serving, what makes you different, and where friction is preventing growth.", "From there, we create the systems, messaging, and experiences needed to bring everything into alignment."],
  },
  {
    label: "Services",
    title: "Brand, website, and strategy support.",
    word: ["BUILD"],
    text: ["Growth doesn't require more noise. It requires alignment.", "When strategy, messaging, visual identity, and digital experience support one another, the business becomes easier to understand, easier to trust, and easier to grow.", "Marketing feels inconsistent because the foundation underneath it has become fragmented.", "The goal is not simply to look better. The goal is to create a foundation that supports better decisions, stronger positioning, and greater momentum."],
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeJourney, setActiveJourney] = useState<number | null>(null);

  return (
    <main className="site-shell min-h-screen bg-[#090706] text-[#f4ede3]">
      <Navbar />

      <Hero activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      {/* JOURNEY INTRO */}
      <section className="bg-[#00000] px-6 py-24 text-[#fffff] md:px-10 lg:px-16">
        <div className="section-frame mx-auto max-w-7xl">
          <h2 className="font-editorial max-w-5xl text-5xl leading-[0.92] tracking-[-0.04em] md:text-7xl">
            Growing businesses often reach a point where things no longer feel
            connected. <span className="text-[#fffff]">Why is that?</span>
          </h2>

          <div className="mt-20 border-y border-[#fffff]/20">
            {journeyItems.map((item, index) => {
              const isActive = activeJourney === index;

              return (
                <div key={item.label} className="border-b border-[#fffff]/20 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setActiveJourney(isActive ? null : index)}
                    className="flex w-full items-center justify-between py-7 text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-[#fffff] md:text-sm">
                      {item.label}
                    </span>

                    <span className="font-editorial text-4xl leading-none text-[#fffff]/60">
                      {isActive ? "—" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${isActive ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="grid gap-12 bg-[#f4ede3] px-0 py-16 text-[#fffff] md:grid-cols-[0.8fr_1.2fr]">
                      <div>
                        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#fffff]">
                          {item.label}
                        </p>

                        <div
                          className="
                  font-editorial
                  pointer-events-none
                  select-none
                  text-[7rem]
                  leading-none
                  tracking-[-0.04em]
                  text-transparent
                  [-webkit-text-stroke:1px_#00000036]
                "
                        >
                          {item.word.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-editorial max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] text-[#090706] md:text-6xl">
                          {item.title}
                        </h3>

                       <div className="mt-6 space-y-6">
  {item.text.map((paragraph, i) => (
    <p
      key={i}
      className="text-base leading-10 text-[#090706]/70"
    >
      {paragraph}
    </p>
  ))}
</div>
</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-[#090706] px-6 py-24 text-[#f4ede3] md:px-10 lg:px-16">
        <div className="section-frame">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d97a4a]">
                Selected work
              </p>

              <h2 className="font-editorial text-4xl leading-[1.02] md:text-6xl">
                Strategy made
                <br />
                visible.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#f4ede3]/70 md:text-base">
              Brand systems, digital experiences, and product concepts shaped
              with strategy, restraint, and stronger creative direction.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="flex min-h-[360px] flex-col justify-between border border-[#d8cfc2]/20 p-8 transition hover:border-[#d97a4a]/70"
              >
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#f4ede3]/50">
                    {study.category}
                  </p>

                  <h3 className="font-editorial text-3xl leading-[1.02] md:text-4xl">
                    {study.name}
                  </h3>
                </div>

                <div>
                  <p className="mb-8 text-sm leading-7 text-[#f4ede3]/70">
                    {study.shortDescription}
                  </p>

                  <Link
                    href={`/work/${study.slug}`}
                    className="font-editorial text-xl text-[#d97a4a] transition hover:opacity-80"
                  >
                    View case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-[#d8cfc2]/20 bg-[#090706] px-6 py-24 text-[#f4ede3] md:px-10 lg:px-16">
        <div className="section-frame grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d97a4a]">
            Our Philosophy
          </p>

          <div>
            <h2 className="font-editorial text-5xl leading-[0.95] md:text-7xl">
              Good design is not decoration.
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-[#f4ede3]/70 md:text-base md:leading-8">
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
      <section className="bg-[#090706] px-6 py-28 text-[#f4ede3] md:px-10 lg:px-16">
        <div className="section-frame bg-[#d97a4a] p-10 text-black md:p-16">
          <h2 className="font-editorial max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Ready to build with intention?
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-black/70 md:text-base md:leading-8">
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

      <Footer />
    </main>
  );
}