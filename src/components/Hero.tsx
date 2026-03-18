"use client";
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { ImageWithFallback } from './ui/ImageWithFallback';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingSocials } from "./ui/FloatingSocials";

function SocialLinks() {
    return (
        <div className="flex space-x-4">
            <a
                href="https://github.com/1fengs"
                target="_blank"
                rel="noopener noreferrer"
                className="sociallink-button"
            >
                <Github size={24} className="text-gray-700" />
            </a>
            <a
                href="https://www.linkedin.com/in/yifeng-shen95/"
                target="_blank"
                rel="noopener noreferrer"
                className="sociallink-button"
            >
                <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
                href="https://www.instagram.com/esyf/"
                target="_blank"
                rel="noopener noreferrer"
                className="sociallink-button"
            >
                <Instagram size={24} className="text-gray-700" />
            </a>
            <a
                href="mailto:evanshen95@gmail.com"
                className="sociallink-button"
            >
                <Mail size={24} className="text-gray-700" />
            </a>
        </div>
    );
}

function RotatingRoles() {

    const roles = [
        "Robotics · Autonomous Driving",
        "Test Automation · Component Testing",
        "C/C++ · ROS2 · Python · Matlab/Simulink",
        "A Growth-Focused Senior Software Engineer",
    ];

    const [index, setIndex] = useState(0);
    const [locked, setLocked] = useState(false);

    useEffect(() => {
        if (locked) return;
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev === roles.length - 1) {
                    setLocked(true);
                    return prev; // go back to first and stop
                }
                return prev + 1;
            });
        }, 1500);
        return () => clearInterval(interval);
    }, [locked]);

    return (
        <div className="min-h-[60px] flex justify-center text-center">
            <AnimatePresence mode="wait">

                <motion.p
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="main-txt text-black text-center"
                >
                    {roles[index]}
                </motion.p>

            </AnimatePresence>
        </div>
    );
}

function BriefIntro() {
    return (
        <div className='space-y-12 flex flex-col items-center mt-2'>
            
            {/* HELLO TEXT */}
            <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="hero-txt text-black text-center"
            >
                Hello World,<br />
                I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                    Yifeng Shen
                </span>
            </motion.h1>

            {/* ROLES */}
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <RotatingRoles />
            </motion.div>

            {/* PROFILE PIC (MOVED UP) */}
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <ProfilePicture />
            </motion.div>

            {/* OPTIONAL: keep only CTA button */}
            <motion.button
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 body-txt bg-blue-600 font-semibold text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
            >
                Get in Touch
            </motion.button>

        </div>
    );
}

function ProfilePicture() {
    return (
        <div className="w-[360px] h-[360px] rounded-full overflow-hidden">
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
        <section id="home" className="section-customer min-h-screen items-center justify-center bgcolor-light relative">
            <div className="container-customer hero-gap">
                <div className="justify-center">
                    <BriefIntro />
                </div>
            </div>

            <FloatingSocials />
        </section>
    );
}