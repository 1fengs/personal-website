'use client';

import { Github, Linkedin, Mail, Instagram, MoreHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FloatingSocials() {
    const [open, setOpen] = useState(false);
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    const links = [
        { icon: <Github size={25} />, href: 'https://github.com/1fengs' },
        { icon: <Linkedin size={25} />, href: 'https://www.linkedin.com/in/yifeng-shen95/' },
        { icon: <Instagram size={25} />, href: 'https://www.instagram.com/esyf/' },
        { icon: <Mail size={25} />, href: 'mailto:evanshen95@gmail.com' },
    ];

    // 👇 Detect if hero is visible
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // if user has scrolled even 1px → hide hero socials
            if (currentScrollY > 10) {
                setIsHeroVisible(false);
            } else {
                setIsHeroVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* ========================= */}
            {/* BOTTOM BAR (HERO VISIBLE) */}
            {/* ========================= */}
            <AnimatePresence>
                {isHeroVisible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
                    >
                        <div className="flex items-center gap-6 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200">
                            {links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:scale-110 transition"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========================= */}
            {/* FLOATING FAB (SCROLLED) */}
            {/* ========================= */}
            <AnimatePresence>
                {!isHeroVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="fixed right-4 bottom-6 z-50 flex flex-col items-end gap-3"
                    >
                        {/* EXPANDED ICONS */}
                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="flex flex-col gap-3 mb-2"
                                >
                                    {links.map((link, i) => (
                                        <motion.a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="w-11 h-11 flex text-black items-center justify-center rounded-full
        bg-white/40 backdrop-blur-lg
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:bg-white/60"
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* MAIN BUTTON */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:scale-110 transition-all duration-300"
                        >
                            {open ? <X size={20} /> : <MoreHorizontal size={20} />}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
