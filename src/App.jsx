import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroBanner from "./components/IntroBanner";
import SelectedWork from "./components/SelectedWork";
import DetailsSection from "./components/DetailsSection";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-navy-950 text-white min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <IntroBanner />
        <SelectedWork />
        <DetailsSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;