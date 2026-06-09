import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <main className="site-shell min-h-screen bg-black text-[#f4ede3]">
      <Navbar />

      <section className="border-b border-white/10 bg-black px-6 py-16 md:px-10 lg:px-16">
        <div className="section-frame">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d97a4a]">
            Services
          </p>

          <h1 className="font-editorial max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Strategy, design, and development built to move your brand forward.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#f4ede3]/70 md:text-base">
            Lex &amp; Hue helps businesses shape stronger identities, sharper
            websites, and more cohesive digital experiences through strategy-led
            creative work.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-20 md:px-10 lg:px-16">
        <div className="section-frame grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-[#d8cfc2]/20 p-8 md:p-10"
            >
              <h2 className="font-editorial text-3xl leading-tight md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#f4ede3]/70 md:text-base">
                {service.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}