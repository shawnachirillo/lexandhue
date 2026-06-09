import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="site-shell min-h-screen bg-black text-[#f4ede3]">
      <Navbar />

      <section className="border-b border-white/10 bg-black px-6 py-16 md:px-10 lg:px-16">
        <div className="section-frame">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d97a4a]">
            About
          </p>

          <h1 className="font-editorial max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Lex &amp; Hue is a strategy-led studio for brands that need beauty
            and backbone.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#f4ede3]/70 md:text-base">
            The work sits at the intersection of brand development, web design,
            and web development—built for businesses that want a stronger
            identity and a more intentional digital presence.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-20 md:px-10 lg:px-16">
        <div className="section-frame grid gap-6 lg:grid-cols-2">
          <article className="border border-[#d8cfc2]/20 p-8 md:p-10">
            <h2 className="font-editorial text-3xl md:text-4xl">What we do</h2>
            <p className="mt-5 text-sm leading-7 text-[#f4ede3]/70 md:text-base">
              Lex &amp; Hue helps shape brand systems, websites, and digital
              experiences with stronger direction, cleaner structure, and more
              cohesive visual thinking.
            </p>
          </article>

          <article className="border border-[#d8cfc2]/20 p-8 md:p-10">
            <h2 className="font-editorial text-3xl md:text-4xl">How we work</h2>
            <p className="mt-5 text-sm leading-7 text-[#f4ede3]/70 md:text-base">
              Every project starts with clarity. Strategy leads, design refines,
              and development brings the work into a form that feels usable,
              aligned, and credible.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}