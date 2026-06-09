import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#d8cfc2]/20 bg-black px-6 py-12 text-[#f4ede3] md:px-10 lg:px-16">
      <div className="section-frame grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-editorial text-2xl text-[#d97a4a]">
            Lex &amp; Hue
          </h2>
          <p className="mt-3 max-w-xs text-sm leading-6 text-[#f4ede3]/70">
            Brand development, web design, and web development for businesses
            that want depth, clarity, and direction.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-[#f4ede3]/50">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-[#f4ede3]/80">
            <li>Brand Development</li>
            <li>Web Design</li>
            <li>Web Development</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-[#f4ede3]/50">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-[#f4ede3]/80">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-[#f4ede3]/50">
            Connect
          </h3>
          <p className="text-sm text-[#f4ede3]/80">hello@lexandhue.com</p>
          <p className="mt-2 text-sm text-[#f4ede3]/50">Milwaukee / Remote</p>
        </div>
      </div>

      <div className="section-frame mt-10 flex flex-col gap-3 border-t border-[#d8cfc2]/10 pt-6 text-xs text-[#f4ede3]/45 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Lex &amp; Hue. All rights reserved.</p>
        <p>Designed with intention.</p>
      </div>
    </footer>
  );
}