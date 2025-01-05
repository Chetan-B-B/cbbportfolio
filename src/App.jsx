import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Work from "./components/work/work";

export default function App() {
  return (
    <>
      {/* Place Nav at the top level */}
      <Nav />
      {/* Constrained content */}
      <main className="mx-auto max-w-7xl">
        <Hero />
        <Work />
        <About />
        <Experience />
      </main>
      {/* Full-width Contact section */}
      <Contact />
    </>
  );
}
