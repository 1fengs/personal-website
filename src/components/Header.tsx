"use client";
import { useEffect, useRef, useState } from "react";

export function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [scrolled, setScrolled] = useState(false);

    const navRefs: Record<string, React.RefObject<HTMLButtonElement | null>> = {
        home: useRef<HTMLButtonElement>(null),
        about: useRef<HTMLButtonElement>(null),
        skills: useRef<HTMLButtonElement>(null),
        projects: useRef<HTMLButtonElement>(null),
        contact: useRef<HTMLButtonElement>(null),
    };

    const sections = ["home", "about", "skills", "projects", "contact"];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // Close menu on mobile after clicking
    };

    /* Detect scroll position */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // scrolling down 50px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* scroll spy */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // 60% of the section is visible
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect(); 
    }, []);

    /* move sliding indicator */
    useEffect(() => {
        const ref = navRefs[activeSection]?.current;
        if (ref) {
            setIndicatorStyle({
                left: ref.offsetLeft - 10,
                width: ref.offsetWidth + 20,
            });
        }
    }, [activeSection]);

    return (
        <header className="fixed top-0 left-0 right-0 md:top-4 lg:top-4 xl:top-4 2xl:top-4 w-full flex flex-col items-center justify-center z-50 ">
            <nav 
                className={`relative flex items-center justify-between transition-all duration-300
                    ${scrolled? "h-14 max-w-4xl": "h-16 max-w-6xl"}
                    w-full bg-white/40 backdrop-blur-lg md:rounded-full lg:rounded-full xl:rounded-full 2xl:rounded-full shadow-sm px-6`}
            >
                {/* Logo, Name */}
                <div className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg font-bold text-gray-900">
                    Yifeng Shen
                </div> 
                
                {/* Desktop Menu */}
                <div className="relative hidden md:flex items-center gap-6">
                    {sections.map((section) => (
                        <button
                            key={section}
                            ref={navRefs[section]}
                            onClick={() => scrollToSection(section)}
                            className={`relative pb-1 transition cursor-pointer
                                ${activeSection === section 
                                ? "text-blue-700 font-bold" 
                                : "text-gray-700"}
                            `}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}

                        {/* underline */}
                        <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                            ${
                            activeSection === section
                                ? "w-full"
                                : "w-0"
                            }
                        `}
                        />
                        </button>
                    ))}

                    {/* download CV button */}
                    <a
                        href="CV.pdf"
                        download
                        className="transition font-bold cursor-pointer text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700"
                    >
                        Download CV
                    </a>
                </div>

                {/* Hamburger menu */}
                <button
                    className="text-gray-900 md:hidden pb-1 transition cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </nav>
            {/* Mobile dropdown */}
            <div
            className={`md:hidden absolute top-full left-0 w-full 
            bg-gray-50/90 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col gap-4 
            transition-all duration-300 ease-out z-40
            ${
                menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            >
                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="text-black font-semi-bold hover:text-blue-700"
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}

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
