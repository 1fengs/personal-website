'use client';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { ImageWithFallback} from './ui/ImageWithFallback';

function TextEmphasis({ children }: { children: React.ReactNode }) {
    return (
        <span className="font-semibold">{children}</span>
    );
}

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
                href="https://www.linkedin.com/in/yifeng-shen95/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
                <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
                href="https://www.instagram.com/esyf/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
>
                <Instagram size={24} className="text-gray-700" />
            </a>
            <a
                href="mailto:evanshen95@gmail.com"
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
            <h1 className="text-6xl font-bold mb-8">
                Welcome,<br /> I'm <span className="text-blue-600">Yifeng Shen</span>
            </h1>

            <p className="text-2xl mb-4">
                Senior Software Engineer
            </p>

            {/* <p className="text-lg mb-4 text-justify">
                with experience in automotive software development, robotics, and test automation. 
                Skilled in <TextEmphasis>C/C++</TextEmphasis>, <TextEmphasis>Python</TextEmphasis>, <TextEmphasis>Matlab/Simulink</TextEmphasis>, and <TextEmphasis>ROS2</TextEmphasis> with a strong background in Linux-based systems, embedded development, and validation. Experienced in autonomous driving projects, HiL testing, and building reliable engineering tools in agile environments.
            </p> */}

            <div className="flex items-center gap-8 pt-4">
                <SocialLinks />

                <div className="flex space-x-4">
                    <div className="pt-4">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-blue-600 font-semibold text-white rounded-full hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
                        >
                            Get in Touch
                        </button>
                    </div>

                    {/* <div className="pt-4">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-blue-600 font-semibold text-white rounded-full hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
                        >
                            Check out My Resume
                        </button>
                    </div> */}
                </div>
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
        <section id="home" className="home-section">
            <div className="container">
                <div className="grid grid-cols-2 gap-12 items-center">
                    <BriefIntro />
                    <ProfilePicture />
                </div>
            </div>
        </section>
    );
}