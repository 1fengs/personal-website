"use client";
import { ImageWithFallback } from './ui/ImageWithFallback';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingSocials } from "./ui/FloatingSocials";
import { TypingRole } from "./ui/TypingRole"

function AvailableTag() {
    return(
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                text-white text-sm font-medium
                bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                bg-[length:200%_200%] animate-gradient">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        Available for Work
        </div>
    )
}

// function RotatingRoles() {

//     const roles = [
//         "Robotics · Autonomous Driving",
//         "Test Automation · Component Testing",
//         "C/C++ · ROS2 · Python · Matlab/Simulink",
//         "A Growth-Focused Senior Software Engineer",
//     ];

//     const [index, setIndex] = useState(0);
//     const [locked, setLocked] = useState(false);

//     useEffect(() => {
//         if (locked) return;
//         const interval = setInterval(() => {
//             setIndex((prev) => {
//                 if (prev === roles.length - 1) {
//                     setLocked(true);
//                     return prev; // go back to first and stop
//                 }
//                 return prev + 1;
//             });
//         }, 1500);
//         return () => clearInterval(interval);
//     }, [locked]);

//     return (
//         <div className="min-h-[60px] flex justify-center text-center">
//             <AnimatePresence mode="wait">

//                 <motion.p
//                     key={index}
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     exit={{ y: -20, opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold text-black text-center"
//                 >
//                     {roles[index]}
//                 </motion.p>

//             </AnimatePresence>
//         </div>
//     );
// }

function BriefIntro() {
    const [showContent, setShowContent] = useState(false);
    return (
        <div className="hero-compact flex flex-col items-center gap-[clamp(1rem,3vw,3rem)]">

            {/* HELLO TEXT */}
            <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] leading-tight font-black text-black text-center">
                Hello World,<br />
                I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                    Yifeng Shen
                </span>
            </h1>

            {/* ROLES */}
            <TypingRole onFinish={() => setTimeout(() => setShowContent(true), 300)} />

            <AnimatePresence>
            {showContent && (
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-4"
                >
            <ProfilePicture />
            <AvailableTag />
            <button className="px-6 py-3 body-txt bg-blue-600 font-semibold text-white rounded-full hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
            >
                Get in Touch
            </button>

                        </motion.div>
                        )}
            </AnimatePresence>
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
        <section id="home" className="section-customer flex min-h-screen items-center justify-center bgcolor-light relative">

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
            <div className="container-customer">
                <div className="justify-center">
                    <BriefIntro />
                </div>
            </div>

            <FloatingSocials />
        </section>
    );
}