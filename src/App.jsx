import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";

export default function App() {
  // BG image is applied at the body
  return (
    <main className="max-w-7xl mx-auto ">
      <Nav />
      <Hero/>
    </main>
  );
}
