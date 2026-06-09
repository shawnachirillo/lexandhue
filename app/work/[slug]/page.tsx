import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/site";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function CaseStudyPage({ params }: PageProps) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="site-shell min-h-screen bg-black text-[#f4ede3]">
      <Navbar />

      <section className="border-b border-white/10 bg-black px-6 py-16 md:px-10 lg:px-16">
        <div className="section-frame">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d97a4a]">
            {study.category}
          </p>

          <h1 className="font-editorial max-w-5xl text-5xl leading-[0.95] md:text-7xl">
            {study.name}
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#f4ede3]/70 md:text-base">
            {study.shortDescription}
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-20 md:px-10 lg:px-16">
        <div className="section-frame grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="border border-[#d8cfc2]/20 p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#f4ede3]/50">
              Services
            </p>

            <ul className="space-y-3">
              {study.services.map((service) => (
                <li
                  key={service}
                  className="text-sm leading-6 text-[#f4ede3]/80"
                >
                  {service}
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-6">
            <article className="border border-[#d8cfc2]/20 p-8">
              <h2 className="font-editorial text-3xl">Overview</h2>
              <p className="mt-4 text-sm leading-7 text-[#f4ede3]/70 md:text-base">
                {study.overview}
              </p>
            </article>

            <article className="border border-[#d8cfc2]/20 p-8">
              <h2 className="font-editorial text-3xl">Challenge</h2>
              <p className="mt-4 text-sm leading-7 text-[#f4ede3]/70 md:text-base">
                {study.challenge}
              </p>
            </article>

            <article className="border border-[#d8cfc2]/20 p-8">
              <h2 className="font-editorial text-3xl">Solution</h2>
              <p className="mt-4 text-sm leading-7 text-[#f4ede3]/70 md:text-base">
                {study.solution}
              </p>
            </article>

            <article className="border border-[#d8cfc2]/20 p-8">
              <h2 className="font-editorial text-3xl">Outcome</h2>
              <p className="mt-4 text-sm leading-7 text-[#f4ede3]/70 md:text-base">
                {study.outcome}
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}