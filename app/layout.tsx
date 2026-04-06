import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human Loyalty Project",
  description: "Manifesto + Livro + Talks",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}