


import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Wajid Shabbir — Backend Developer",
  description: "Backend developer specializing in scalable APIs, microservices, and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0D1117] text-[#E6EDF3] antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}