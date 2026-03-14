"use client";
import { useState } from "react";

export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // Close menu on mobile after clicking
    };

    return (
        <header className="fixed top-4 w-full flex flex-col items-center justify-center z-50 ">
            <nav className="w-full max-w-5xl mx-auto px-8 bg-gray-50/80 backdrop-blur-md rounded-full flex justify-between items-center h-16">
                {/* Logo, Name */}
                <div className="text-xl font-semibold text-gray-900">
                    Yifeng Shen
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <button onClick={() => scrollToSection('home')} className="nav-button">
                        Home
                    </button>
                    <button onClick={() => scrollToSection('about')} className="nav-button">
                        About
                    </button>
                    <button onClick={() => scrollToSection('skills')} className="nav-button">
                        Skills
                    </button>
                    <button onClick={() => scrollToSection('projects')} className="nav-button">
                        Projects
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="nav-button">
                        Contact
                    </button>

                    {/* download CV button */}
                    <a
                        href="CV.pdf"
                        download
                        className="nav-button text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700"
                    >
                        Download CV
                    </a>
                </div>

                {/* Hamburger menu */}
                <button
                    className="md:hidden nav-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </nav>
            {/* Mobile dropdown */}
            <div
            className={`md:hidden mt-2 w-full max-w-5xl bg-gray-50/90 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-all duration-300 ease-out ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            >
                <button onClick={() => scrollToSection("home")} className="nav-button">
                    Home
                </button>

                <button onClick={() => scrollToSection("about")} className="nav-button">
                    About
                </button>

                <button onClick={() => scrollToSection("skills")} className="nav-button">
                    Skills
                </button>

                <button onClick={() => scrollToSection("projects")} className="nav-button">
                    Projects
                </button>

                <button onClick={() => scrollToSection("contact")} className="nav-button">
                    Contact
                </button>

                <a
                    href="CV.pdf"
                    download
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-center"
                >
                    Download CV
                </a>
            </div>
        </header>
    );
}
