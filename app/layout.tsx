import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Mehdi Bensouda | Data Science Portfolio",
  description:
    "Portfolio of El Mehdi Bensouda, a Data Science student interested in machine learning, analytics, research, and software development.",
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