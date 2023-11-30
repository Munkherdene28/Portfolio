import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Get from "@/components/Get";
export default function Home() {
  return (
    <section className="flex flex-col gap-10">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Get />
    </section>
  );
}
