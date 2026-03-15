'use client';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="section-customer pb-2">
            <div className="container-customer border-t border-gray-700 pt-10 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">

                    {/* About */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Yifeng Shen</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Senior Software Engineer specializing in C++ and Python.
                            Passionate about building scalable software solutions and
                            exploring new technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                                className="block w-full md:w-auto text-gray-400 hover:text-white transition-colors"
                            >
                                Home
                            </button>

                            <button
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                className="block w-full md:w-auto text-gray-400 hover:text-white transition-colors"
                            >
                                About
                            </button>

                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="block w-full md:w-auto text-gray-400 hover:text-white transition-colors"
                            >
                                Projects
                            </button>

                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="block w-full md:w-auto text-gray-400 hover:text-white transition-colors"
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Connect</h3>

                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href="https://github.com/1fengs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                            >
                                <Github size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/yifeng-shen95/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>

                            <a
                                href="https://www.instagram.com/esyf/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                            >
                                <Instagram size={20} />
                            </a>

                            <a
                                href="mailto:evanshen95@gmail.com"
                                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-10 pt-6 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Yifeng Shen. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}