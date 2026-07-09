"use client";

import { useEffect } from "react";
import Image from "next/image";

const heroSlides = [
  {
    word: "websites",
    image: "/hero-3.png",
  },
  {
    word: "strategy",
    image: "/hero-2.png",
  },
  {
    word: "branding",
    image: "/hero-1.png",
  },
];

type HeroProps = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function Hero({ activeIndex, setActiveIndex }: HeroProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [setActiveIndex]);

  const currentSlide = heroSlides[activeIndex];

  return (
    <section className="border-b border-white/10 bg-[#141414] px-6 py-10 text-[#f4ede3] md:px-10 lg:px-16">
      <div className="section-frame">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          <div className="pt-6 lg:pt-10">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d97a4a]">
              Lex &amp; Hue
            </p>

            <h1 className="font-editorial max-w-[760px] text-5xl leading-[0.92] md:text-7xl lg:text-[7rem]">
              Let us design
              <br />
              &amp; build your{" "}
              <span className="inline-block text-[#d97a4a]">
                {currentSlide.word}
              </span>
            </h1>

            <p className="mt-8 max-w-[560px] text-sm leading-7 text-[#f4ede3]/70 md:text-base">
              Brand development, web design, and web development for businesses
              that need clarity, beauty, and strategy working together.
            </p>
          </div>

          <div className="relative mt-10 flex justify-end lg:mt-16">
            <div className="relative h-[360px] w-[360px]">

              <div className="absolute inset-0 rounded-full bg-orange-500/25 blur-[90px]" />
              <div className="absolute left-[8%] top-[68%] h-[150px] w-[150px] rounded-full bg-green-600/20 blur-[80px]" />
              <div className="absolute left-[35%] top-[12%] h-[120px] w-[120px] rounded-full bg-white/10 blur-[70px]" />

              <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full border border-[#d97a4a]/65 ">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.word}
                  width={200}
                  height={200}
                  className="h-[200px] w-[200px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-10 overflow-hidden border-y border-[#d8cfc2]/20 py-4">
          <div className="animate-marquee whitespace-nowrap text-sm uppercase tracking-[0.3em] text-[#d97a4a]">
            Start your project • Start your project • Start your project • Start
            your project • Start your project •
          </div>
        </div>
        </div>
      </section>
   
  );
}