import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWIFT",
  description: "SWIFT offers a seamless and reliable car rental experience with a wide range of vehicles to suit your every need. Whether you're planning a weekend getaway or a business trip, ZoomRides makes it easy to find, book, and hit the road in style. Enjoy competitive rates, flexible rental options, and exceptional customer service every time you choose ZoomRides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
