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
        <header className="fixed top-4 left-45 right-45 bg-gray-50/80 backdrop-blur-md z-50 rounded-full">
            <nav className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between items-center h-16">
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
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>
                {/* Mobile dropdown */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-4 pb-4">

                        <button onClick={() => scrollToSection("home")}>
                            Home
                        </button>

                        <button onClick={() => scrollToSection("about")}>
                            About
                        </button>

                        <button onClick={() => scrollToSection("skills")}>
                            Skills
                        </button>

                        <button onClick={() => scrollToSection("projects")}>
                            Projects
                        </button>

                        <button onClick={() => scrollToSection("contact")}>
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
                )}
            </nav>
        </header>
    );
}
