"use client";

import Image from "next/image";
import { useState } from "react";

const panels = [
  {
    label: "The Problem",
    title: "What once felt good enough now creates friction.",
    body: [
      "Businesses rarely struggle because they lack talent, expertise, or ambition. More often, growth creates a different problem.",
      "The website no longer reflects the quality of the work. The messaging has evolved in multiple directions. New services have been added without a clear structure.",
      "What was once enough to get started becomes harder to scale. Decisions take longer. Opportunities are missed.",
    ],
    watermark: "DISCONNECT",
    images: [
      { src: "/problem-1.jpg", caption: "friction" },
      { src: "/problem-2.jpg", caption: "gaps" },
      { src: "/problem-3.jpg", caption: "drift" },
    ],
  },
  {
    label: "The Shift",
    title: "Clarity changes how everything connects.",
    body: [
      "When the foundation is clear, the brand becomes easier to explain, easier to recognize, and easier to grow.",
    ],
    watermark: "CLARITY",
    images: [
      { src: "/shift_1.jpg", caption: "focus" },
      { src: "/shift_2.jpg", caption: "direction" },
      { src: "/shift_3.jpg", caption: "ease" },
    ],
  },
  {
    label: "How We Work",
    title: "We build the system underneath the surface.",
    body: [
      "We align strategy, identity, website structure, and visual direction so the brand feels intentional from every angle.",
    ],
    watermark: "SYSTEM",
    images: [
      { src: "/work_1.jpg", caption: "structure" },
      { src: "/work_2.jpg", caption: "flow" },
      { src: "/work_3.jpg", caption: "build" },
    ],
  },
  {
    label: "Services",
    title: "Branding, strategy, web design, and development.",
    body: [
      "Everything works together so your business looks clear, considered, and ready for what comes next.",
    ],
    watermark: "SERVICES",
    images: [
      { src: "/service_1.jpg", caption: "brand" },
      { src: "/service_2.jpg", caption: "strategy" },
      { src: "/service_3.jpg", caption: "website" },
    ],
  },
];

function FallingWord({ word }: { word: string }) {
  return (
    <div className="pointer-events-none absolute left-[-1.5rem] top-1/2 -translate-y-1/2 select-none overflow-hidden text-[5rem] font-bold uppercase leading-[0.8] tracking-[-0.08em] text-black/[0.055] md:text-[8rem] lg:text-[10rem]">
      {word.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="inline-block animate-letter-fall"
          style={{ animationDelay: `${index * 0.055}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

export default function ProblemAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const activePanel = panels[openIndex];

  return (
    <section className="border-b border-white/10 bg-[#030303] px-6 py-20 text-[#f4ede3] md:px-10 lg:px-16">
      <div className="section-frame">
        <h2 className="font-editorial max-w-[860px] text-4xl leading-[0.95] md:text-6xl">
          Growing businesses often reach a point where things no longer feel
          connected. Why is that?
        </h2>

        <div className="mt-12 border-t border-[#f4ede3]/40">
          {panels.map((panel, index) => {
            const isOpen = index === openIndex;

            return (
              <div key={panel.label} className="border-b border-[#f4ede3]/30">
                <button
                  onClick={() => setOpenIndex(index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                    {panel.label}
                  </span>

                  <span className="text-2xl text-[#d97a4a]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="relative mb-8 overflow-hidden bg-[#f4ede3] px-8 py-12 text-[#141414] md:px-16 md:py-16">
                    <FallingWord word={panel.watermark} />

                    <div className="relative z-10 ml-auto max-w-[720px]">
                      <h3 className="font-editorial text-4xl leading-[0.95] md:text-6xl">
                        {panel.title}
                      </h3>

                      <div className="mt-10 space-y-6 text-base leading-8 text-[#141414]/75 md:text-lg">
                        {panel.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {panel.images.map((image, imageIndex) => (
                          <div
                            key={image.caption}
                            className="animate-image-fade"
                            style={{
                              animationDelay: `${0.45 + imageIndex * 0.12}s`,
                            }}
                          >
                            <div className="relative h-32 overflow-hidden md:h-40">
                              <Image
                                src={image.src}
                                alt=""
                                fill
                                className="object-cover grayscale"
                              />
                            </div>

                            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#d97a4a]">
                              {image.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}