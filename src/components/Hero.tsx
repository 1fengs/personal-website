'use client';
import { Github, Linkedin, Mail } from 'lucide-react'
import { ImageWithFallback} from './ui/ImageWithFallback';

function SocialLinks() {
    return (
        <div className="flex space-x-4 pt-4">
            <a
                href="https://github.com/1fengs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
                <Github size={24} className="text-gray-700" />
            </a>
            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
                <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
                href="mailto:your.email@example.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
                <Mail size={24} className="text-gray-700" />
            </a>
        </div>
    );
}

function BriefIntro() {
    return (
        <div className='space-y-6'>
            <h1 className="text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-600">Yifeng Shen</span>
            </h1>

            <p className="text-2xl mb-4">
                (Senior) Software Engineer
            </p>

            <p className="text-lg mb-4">
                I specialize in C++ and python.
            </p>

            <SocialLinks />

            <div className="pt-4">
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
                >
                    Get in Touch
                </button>
            </div>
        </div>

    );
}

function ProfilePicture() {
    return (
        <div className="relative">
            <div className="w-128 h-128 aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
                src="resizedProfilePhoto.jpeg"
                alt="Workspace"
                className="object-cover"
            />
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section id="home" className="flex min-h-screen items-center justify-center bg-gradient-to-br font-sans dark:bg-black">
            <div className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-2 gap-12 items-center">
                    <BriefIntro />
                    <ProfilePicture />
                </div>
            </div>
        </section>
    );
}