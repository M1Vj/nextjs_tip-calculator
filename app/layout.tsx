import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono(
    {
        weight: '700',
        subsets: ["latin"]
    }
)

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Tip calculator app by Vj Mabansag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceMono.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
