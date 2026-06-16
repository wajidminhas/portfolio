import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" style={{ minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: "#8B949E" }}>// About section — coming next</p>
      </section>
      <Skills />
      <Projects />
      <section id="projects" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: "#8B949E" }}>// Projects section</p>
      </section>
      <section id="contact" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: "#8B949E" }}>// Contact section</p>
      </section>
    </>
  );
}