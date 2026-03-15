import {Header} from '../components/Header';
import {Hero} from '../components/Hero';
import {About} from '../components/About';
import {Skills} from '../components/Skills';
import {Projects} from '../components/Projects';
import {Contact} from '../components/Contact';
import {Footer} from '../components/Footer';
import {Journey} from '../components/Journey';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
