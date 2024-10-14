import type { Metadata } from "next";
import "./globals.css";

import { Jost } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash Rahman",
  description: "A Site Of Minhazur Rahman Akash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>{children}</body>
    </html>
  );
}
