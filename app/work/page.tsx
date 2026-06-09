import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/site";

export default function WorkPage() {
  return (
    <main className="site-shell min-h-screen bg-black text-[#f4ede3]">
      <Navbar />

      <section className="border-b border-white/10 bg-black px-6 py-16 md:px-10 lg:px-16">
        <div className="section-frame">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d97a4a]">
            Work
          </p>

          <h1 className="font-editorial max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Selected work shaped with strategy, restraint, and depth.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#f4ede3]/70 md:text-base">
            A closer look at brand systems, product concepts, and digital
            experiences built to feel considered, cohesive, and commercially
            credible.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-20 md:px-10 lg:px-16">
        <div className="section-frame grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="flex min-h-[360px] flex-col justify-between border border-[#d8cfc2]/20 p-8"
            >
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#f4ede3]/50">
                  {study.category}
                </p>

                <h2 className="font-editorial text-3xl leading-[1.02] md:text-4xl">
                  {study.name}
                </h2>
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
      </section>

      <Footer />
    </main>
  );
}