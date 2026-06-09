import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="site-shell min-h-screen bg-black text-[#f4ede3]">
      <Navbar />

      <section className="border-b border-white/10 bg-black px-6 py-16 md:px-10 lg:px-16">
        <div className="section-frame">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d97a4a]">
            Contact
          </p>

          <h1 className="font-editorial max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Start your project.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#f4ede3]/70 md:text-base">
            For branding, web design, and web development inquiries, get in
            touch and share a little about what you’re building.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-20 md:px-10 lg:px-16">
        <div className="section-frame grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="border border-[#d8cfc2]/20 p-8 md:p-10">
            <h2 className="font-editorial text-3xl md:text-4xl">
              Let’s talk.
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-7 text-[#f4ede3]/75 md:text-base">
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@lexandhue.com"
                  className="text-[#d97a4a]"
                >
                  hello@lexandhue.com
                </a>
              </p>

              <p>Location: Milwaukee / Remote</p>

              <p>
                Project types: brand development, web design, web development,
                and creative direction.
              </p>
            </div>
          </article>

          <article className="border border-[#d8cfc2]/20 p-8 md:p-10">
            <h2 className="font-editorial text-3xl md:text-4xl">
              What to include
            </h2>

            <ul className="mt-8 space-y-4 text-sm leading-7 text-[#f4ede3]/70 md:text-base">
              <li>Your business or project name</li>
              <li>What you need help with</li>
              <li>Your timeline</li>
              <li>Your current website, if you have one</li>
              <li>Any references or inspiration</li>
            </ul>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}