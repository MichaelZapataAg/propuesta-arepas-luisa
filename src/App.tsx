import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { TechCapabilities } from './components/TechCapabilities';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main className="bg-(--color-cream)">
        <Hero />
        <ProblemSolution />
        <Features />
        <TechCapabilities />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
