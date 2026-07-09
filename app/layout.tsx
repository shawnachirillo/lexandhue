import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lex & Hue | Brand Strategy, Web Design & Development",
    template: "%s | Lex & Hue",
  },
  description:
    "Lex & Hue creates brand strategy, visual identity, web design, and web development for small businesses that need clarity, beauty, and strategy working together.",
  keywords: [
    "brand strategy",
    "web design",
    "web development",
    "branding studio",
    "small business branding",
    "creative direction",
    "Lex and Hue",
  ],
  openGraph: {
    title: "Lex & Hue | Brand Strategy, Web Design & Development",
    description:
      "Brand strategy, web design, and development for businesses ready for clarity, beauty, and stronger creative direction.",
    url: "https://lexandhue.com",
    siteName: "Lex & Hue",
    images: [
      {
        url: "/LH_symbol_black.png",
        width: 1200,
        height: 630,
        alt: "Lex & Hue brand and web design studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}