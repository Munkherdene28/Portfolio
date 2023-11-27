import Main from "@/components/Main";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import New from "@/components/New";
import Work from "@/components/Work";
import Get from "@/components/Get";
export default function Home() {
  return (
    <section className="flex flex-col gap-24">
      <Header />
      <Main />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Get />
    </section>
  );
}
