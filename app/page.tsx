"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Footer from "@/components/Footer";
import Link from "next/link";
import { caseStudies } from "@/data/site";
import { useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We learn the business, audience, goals, and friction points before making design decisions.",
  },
  {
    number: "02",
    title: "Define",
    text: "We clarify positioning, messaging, priorities, and the direction the brand needs to move in.",
  },
  {
    number: "03",
    title: "Design",
    text: "We translate the strategy into identity, layout, visuals, and digital experience.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We refine, prepare, and support the work as it moves into the world.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="site-shell min-h-screen bg-[#090706] text-[#f4ede3]">
      <Navbar />

      <Hero activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      {/* PROBLEM */}
      <section className="bg-[#090706] px-6 py-24 text-[#f4ede3] md:px-10 lg:px-16">
        <div className="section-frame grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d97a4a]">
            The Problem
          </p>

          <div>
            <h2 className="font-editorial text-4xl leading-[1.02] md:text-6xl">
              Growing businesses often reach a point where things no longer
              feel connected.
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-sm leading-7 text-[#f4ede3]/70 md:text-base md:leading-8">
              <p>
                For some, the business has evolved beyond the brand they started
                with. For others, the challenge is building a clear foundation
                from the beginning.
              </p>

              <p>
                The messaging feels inconsistent. The visual identity no longer
                reflects the quality of the work. Or there simply isn’t a
                cohesive system yet.
              </p>

              <p className="text-[#f4ede3]">
                What once felt good enough — or never fully came together in the
                first place — now creates friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-[#090706]px-6 py-24 text-[#f4ede3] md:px-10 lg:px-16">
        <div className="section-frame grid gap-12 lg:grid-cols-2 lg:items-end">
          <h2 className="font-editorial text-5xl leading-[0.95] md:text-7xl">
            Strategy, brand, and digital experience should work together.
          </h2>

          <p className="max-w-xl text-sm leading-7 text-[#f4ede3]/70 md:text-base md:leading-8">
            Lex &amp; Hue helps businesses bring these pieces into alignment,
            creating thoughtful systems that feel intentional, cohesive, and
            built for growth. The goal isn’t just a better-looking brand. It’s a
            clearer business presence.
          </p>
        </div>
      </section>

      <ServicesPreview activeIndex={activeIndex} />

      {/* PROCESS */}
      <section className="bg-[#f4ede3] px-6 py-24 text-[#0d0d0c] md:px-10 lg:px-16">
        <div className="section-frame">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9b4f2e]">
              How We Work
            </p>

            <h2 className="font-editorial text-5xl leading-[0.95] md:text-7xl">
              Thoughtful work starts with understanding.
            </h2>
          </div>

          <div className="grid border-l border-t border-black/25 md:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="min-h-[300px] border-b border-r border-black/25 p-6"
              >
                <p className="text-sm text-black/45">{step.number}</p>

                <h3 className="font-editorial mt-20 text-3xl">
                  {step.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-black/65">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-[#090706]px-6 py-24 text-[#f4ede3] md:px-10 lg:px-16">
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