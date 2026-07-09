"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { caseStudies } from "@/data/site";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import FallingWord from "@/components/FallingWord";
import Image from "next/image";


const journeyItems = [
  {
    label: "The Problem",
    title: "What once felt good enough now creates friction.",
    word: ["DIS", "CONNECT"],
    text: [
      "Businesses rarely struggle because they lack talent, expertise, or ambition. More often, growth creates a different problem. The website no longer reflects the quality of the work. The messaging has evolved in multiple directions. New services have been added without a clear structure.",
      "What was once enough to get started becomes harder to scale. Decisions take longer. Opportunities are missed. Potential clients leave with questions instead of clarity.",
    ],
    images: [
      { src: "/problem_1.jpg", caption: "friction" },
      { src: "/problem_2.jpg", caption: "gaps" },
      { src: "/problem_3.jpg", caption: "drift" },
    ],
  },
  {
    label: "The Shift",
    title: "A stronger business needs a clearer system.",
    word: ["RE", "ALIGN"],
    text: [
      "Growth does not require more noise. It requires alignment.",
      "When strategy, messaging, visual identity, and digital experience support one another, the business becomes easier to understand, easier to trust, and easier to grow.",
      "The goal is not simply to look better. The goal is to create a foundation that supports better decisions, stronger positioning, and greater momentum.",
    ],
    images: [
      { src: "/shift_1.jpg", caption: "clarity" },
      { src: "/shift_2.jpg", caption: "direction" },
      { src: "/shift_3.jpg", caption: "momentum" },
    ],
  },
  {
    label: "How We Work",
    title: "Thoughtful work starts with understanding.",
    word: ["PROCESS"],
    text: [
      "Every project begins with understanding.",
      "Before visuals, before layouts, before development, we identify what matters most: who you're serving, what makes you different, and where friction is preventing growth.",
      "From there, we create the systems, messaging, and experiences needed to bring everything into alignment.",
    ],
    images: [
      { src: "/work_1.jpg", caption: "listen" },
      { src: "/work_2.jpg", caption: "shape" },
      { src: "/work_3.jpg", caption: "build" },
    ],
  },
  {
    label: "Services",
    title: "Brand, website, and strategy support.",
    word: ["BUILD"],
    text: [
      "Some businesses need strategic clarity. Others need a stronger identity. Others need a website that finally reflects the quality of the work being delivered.",
      "Our services are designed to solve the underlying problem and not simply produce deliverables.",
      "Brand strategy, identity systems, websites, messaging, and creative direction all work together to create a more cohesive business presence.",
    ],
    images: [
      { src: "/service_1.jpg", caption: "brand" },
      { src: "/service_2.jpg", caption: "strategy" },
      { src: "/service_3.jpg", caption: "website" },
    ],
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
<section
  className="
    relative
    overflow-hidden
    px-6
    pb-32
    pt-48
    text-white
    md:px-10
    md:pt-56
    lg:px-16
  "
 style={{
  background: `
    radial-gradient(
      ellipse at -15% 115%,
      rgba(42, 70, 49, 0.22) 0%,
      rgba(42, 70, 49, 0.12) 22%,
      rgba(42, 70, 49, 0.04) 42%,
      transparent 72%
    ),
    linear-gradient(
      180deg,
      #090706 0%,
      #031403 3%,
      #050505 100%
    )
  `,
}}
>
  
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  
</div>
<div className="pointer-events-none absolute inset-0">
  <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#d97a4a]/10 blur-[140px]" />
  <div className="absolute left-[-10%] top-[25%] h-[420px] w-[420px] rounded-full bg-[#f4ede3]/5 blur-[130px]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,237,227,0.08),transparent_38%)]" />
</div>
  <div className="section-frame mx-auto max-w-7xl">
    <h2 className="font-editorial max-w-5xl text-5xl leading-[0.92] tracking-[-0.04em] md:text-7xl">
      Growing businesses often reach a point where things no longer feel
      connected. <span className="text-white">Why is that?</span>
    </h2>

    <div className="mt-20 border-y border-white/20">
      {journeyItems.map((item, index) => {
        const isActive = activeJourney === index;

        return (
          <div
            id={`journey-${index}`}
            key={item.label}
            className="border-b border-white/20 last:border-b-0"
          >
           <button
  type="button"
  onClick={() => {
    setActiveJourney(isActive ? null : index);
  }}
  className="group relative flex w-full items-center justify-between py-7 text-left transition-colors duration-500"
>
  <span className="absolute left-0 right-0 top-0 h-px bg-white/15 transition-colors duration-500 group-hover:bg-[#d97a4a]" />

  <span className="absolute bottom-0 left-0 right-0 h-px bg-white/15 transition-colors duration-500 group-hover:bg-[#d97a4a]" />

  <span className="relative z-10 text-xs uppercase tracking-[0.3em] text-white transition-colors duration-500 group-hover:text-[#d97a4a] md:text-sm">
    {item.label}
  </span>

  <span className="relative z-10 font-editorial text-4xl leading-none text-white/60 transition-colors duration-500 group-hover:text-[#d97a4a]">
    {isActive ? "—" : "+"}
  </span>
</button>

            <div
              className={`overflow-hidden transition-all duration-1100 ease-out ${
                isActive ? "max-h-[1100px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid gap-12 overflow-hidden bg-[#f4ede3] px-8 py-14 text-[#090706] md:grid-cols-[0.8fr_1.2fr] md:px-12 lg:px-16">
                <div className="relative overflow-hidden">
                  <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#d97a4a]">
                    {item.label}
                  </p>

                  <div
                    className="
                      font-editorial
                      text-[5rem]
                      leading-none
                      tracking-[-0.06em]
                      text-transparent
                      [-webkit-text-stroke:1px_#00000036]
                      md:text-[7rem]
                      lg:text-[8rem]
                    "
                  >
                    {isActive && <FallingWord words={item.word} />}
                  </div>
                </div>

                <div>
                  {isActive && (
                    <>
                      <Reveal delay={1.0}>
                        <h3 className="font-editorial max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] text-[#090706] md:text-6xl">
                          {item.title}
                        </h3>
                      </Reveal>

                      <div className="mt-8 space-y-5">
                        {item.text.map((paragraph, i) => (
                          <Reveal key={i} delay={1.45}>
                            <p className="text-base leading-8 text-[#090706]/70">
                              {paragraph}
                            </p>
                          </Reveal>
                        ))}
                      </div>

                      <div className="mt-12 grid max-w-[560px] gap-4 md:grid-cols-3">
                        {item.images.map((image, imageIndex) => (
                          <Reveal
                            key={image.caption}
                            delay={0.6 + imageIndex * 0.12}
                          >
                            <figure className="group">
                              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#090706]/10">
                                <Image
                                  src={image.src}
                                  alt={image.caption}
                                  fill
                                  sizes="160px"
                                  className="object-cover transition duration-1100 group-hover:scale-105"
                                />
                              </div>

                              <figcaption className="mt-3 text-xs uppercase tracking-[0.32em] text-[#d97a4a]">
                                {image.caption}
                              </figcaption>
                            </figure>
                          </Reveal>
                        ))}
                      </div>
                    </>
                  )}
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
                {/* Featured work */}
              </p>

              <h2 className="font-editorial text-4xl text-[#d97a4a] leading-[1.02] md:text-6xl">
                Featured 
                <br />
                Work
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#f4ede3]/70 md:text-base">
              {/* Brand systems, digital experiences, and product concepts shaped
              with strategy, restraint, and stronger creative direction. */}
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