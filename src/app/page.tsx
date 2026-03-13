import {Header} from '../components/Header';
import {Hero} from '../components/Hero';
import {About} from '../components/About';
import {Skills} from '../components/Skills';
import {Projects} from '../components/Projects';
import {Contact} from '../components/Contact';
import {Footer} from '../components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
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
