import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "BRAND",
    description: "Identity systems, logo direction, visual language",
    image: "/images/brand-preview.jpg",
  },
  {
    id: 2,
    title: "WEBSITE",
    description: "Strategic sites built for clarity, trust, and conversion",
    image: "/images/website-preview.jpg",
  },
  {
    id: 3,
    title: "STRATEGY",
    description: "Positioning, messaging, and creative direction",
    image: "/images/strategy-preview.jpg",
  },
];

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="bg-black px-6 py-20 text-[#f4ede3] md:px-10 lg:px-16"
    >
      <div className="section-frame">
        <div className="mb-12 max-w-4xl">
          <h2 className="font-editorial max-w-3xl text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
            Strategy-led design for brands ready to grow
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#f4ede3]/70 md:text-base">
            Lex &amp; Hue helps businesses shape stronger identities, sharper
            websites, and more cohesive digital presence.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr_1fr_1fr]">
          <Link
            href="/services"
            className="group flex min-h-[420px] flex-col justify-between border-2 border-[#f4ede3] bg-[#d97a4a] p-7 text-black transition hover:bg-[#f4ede3]"
          >
            <div className="text-4xl">✦</div>

            <div>
              <h3 className="font-editorial text-4xl leading-none md:text-5xl">
                View
                <br />
                Services
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-6">
                Explore brand, website, and strategy offers.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <span className="text-sm font-medium">Let’s go</span>
                <span className="h-px w-20 bg-black transition group-hover:w-28" />
                <span className="text-2xl">→</span>
              </div>
            </div>
          </Link>

          {cards.map((card) => (
            <article
              key={card.id}
              className="group overflow-hidden border-2 border-[#f4ede3]"
            >
              <div className="h-[300px] overflow-hidden bg-[#17110d]">
                <img
                  src={card.image}
                  alt=""
                  className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>

              <div className="bg-[#1f1c1d] p-6">
                <h3 className="font-editorial text-2xl uppercase text-[#f4ede3]">
                  {card.title}
                </h3>

                <div className="mt-2 h-px w-full bg-[#f4ede3]/70" />

                <p className="mt-4 text-sm leading-6 text-[#f4ede3]/75">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}