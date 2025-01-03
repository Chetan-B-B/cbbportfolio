import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Work from "./components/work/work";

export default function App() {
  // BG image is applied at the body
  return (
    <main className="max-w-7xl mx-auto ">
      <Nav />
      <Hero />
      <Work />
      <About />
    </main>
  );
}
