import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Work from "./components/work/work";

export default function App() {
  // BG image is applied at the body
  return (
    <main className="mx-auto max-w-7xl ">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Experience/>
    </main>
  );
}
