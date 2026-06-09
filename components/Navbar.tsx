import Link from "next/link";
import { navItems } from "@/data/site";

export default function Navbar() {
  return (
    <header className="bg-black px-6 pt-6 text-[#f4ede3] md:px-10 lg:px-16">
      <div className="section-frame flex items-start justify-between">
        <Link
          href="/"
          className="font-editorial text-3xl leading-none tracking-[-0.02em] text-[#f4ede3]"
        >
          Lex<span className="text-[#d97a4a]">&amp;</span>Hue
        </Link>

        <nav className="flex items-center gap-8 font-editorial text-xl text-[#f4ede3] md:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#d97a4a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}