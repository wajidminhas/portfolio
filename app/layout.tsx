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
  title: "Wajid — Backend Developer",
  description: "Backend developer specializing in scalable APIs, microservices, and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
        backgroundColor: "#0D1117",
        color: "#E6EDF3",
        margin: 0,
        padding: 0,
        WebkitFontSmoothing: "antialiased",
        minHeight: "100vh",
      }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}