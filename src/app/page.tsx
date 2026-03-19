'use client';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Journey } from '../components/Journey';
import { BackToTop } from '../components/ui/BackToTop';
import { track } from '@vercel/analytics';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent =
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercent > 25) track('Scroll Depth', { depth: '25%' });
            if (scrollPercent > 50) track('Scroll Depth', { depth: '50%' });
            if (scrollPercent > 75) track('Scroll Depth', { depth: '75%' });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen">
            <Header />
            <BackToTop />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <About />
                <Journey />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}
