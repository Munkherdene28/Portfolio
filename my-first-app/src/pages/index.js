import Main from "@/components/Main";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <section className="Portfolio">
      <Header />
      <Main />
      <About />
      <Skills />
      <Experience />
    </section>
  );
}
