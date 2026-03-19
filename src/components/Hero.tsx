'use client';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FloatingSocials } from './ui/FloatingSocials';
import { TypingRole } from './ui/TypingRole';

function AvailableTag() {
    return (
        <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                text-white text-sm font-medium
                bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                bg-[length:200%_200%] animate-gradient"
        >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Available for Work
        </div>
    );
}

function BriefIntro() {
    const [showContent, setShowContent] = useState(false);

    return (
        <div className="hero-compact flex flex-col items-center">
            {/* TOP BLOCK (animated shift) */}
            <motion.div
                animate={{ y: showContent ? -20 : 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-[clamp(1rem,2vw,2rem)]"
            >
                {/* HELLO TEXT */}
                <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] leading-tight font-black text-black text-center">
                    Hello World,
                    <br />
                    I'm{' '}
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                        Yifeng Shen
                    </span>
                </h1>

                {/* Typing */}
                <TypingRole onFinish={() => setTimeout(() => setShowContent(true), 300)} />
            </motion.div>

            <div className="relative">
                <span className="invisible left-0 top-0 flex flex-col items-center gap-4">
                    <ProfilePicture />
                    <AvailableTag />

                    <button className="px-6 py-3 body-txt bg-blue-600 font-semibold text-white rounded-full hover:bg-blue-700 transition-colors shadow-md cursor-pointer">
                        Get in Touch
                    </button>
                </span>

                {/* BOTTOM CONTENT */}
                <AnimatePresence>
                    {showContent && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute left-0 top-0 flex flex-col items-center gap-4"
                        >
                            <ProfilePicture />
                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="will-change-transform overflow-hidden mt-2"
                            >
                                <AvailableTag />
                            </motion.div>

                            <button
                                onClick={() =>
                                    document
                                        .getElementById('contact')
                                        ?.scrollIntoView({ behavior: 'smooth' })
                                }
                                className="will-change-transform px-6 py-3 body-txt bg-blue-600 font-semibold text-white rounded-full hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
                            >
                                Get in Touch
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function ProfilePicture() {
    return (
        <div className="will-change-transform w-[clamp(180px,20vw,420px)] h-[clamp(180px,20vw,420px)] shadow-2xl rounded-full overflow-hidden">
            <ImageWithFallback
                src="resizedProfilePhoto.jpeg"
                alt="Workspace"
                className="w-full h-full object-cover object-[50%-30%] scale-220"
            />
        </div>
    );
}

export function Hero() {
    return (
        <section
            id="home"
            className="section-customer flex min-h-screen items-center justify-center bgcolor-light relative"
        >
            {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div
                className="w-full h-full"
                style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                }}
            />
            </div> */}
            <div className="container-customer justify-center w-full">
                <BriefIntro />
            </div>

            <FloatingSocials />
        </section>
    );
}
