import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="min-h-screen flex flex-col">{children}</main>
        </Provider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "GraphicLab",
  description: "A canvas for collaborative design",
};
