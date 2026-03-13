import {Header} from '../components/Header';
import {Hero} from '../components/Hero';
import {About} from '../components/About';
import {Skills} from '../components/Skills';
import {Projects} from '../components/Projects';
import {Contact} from '../components/Contact';
import {Footer} from '../components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center bg-blue-50 justify-center">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
