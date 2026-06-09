import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lex & Hue",
  description:
    "Strategy-led branding, web design, and web development for businesses that need clarity, beauty, and digital direction.",
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