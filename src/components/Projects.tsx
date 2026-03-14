'use client';

import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';

type Project = {
    title: string;
    description: string;
    about: string;
    image: string;
    technologies: string[];
    github?: string;
    demo?: string;
};

const projects: Project[] = [
    {
        title: 'Autonomous Driving Trajectory Planning',
        description: 'MPC-based trajectory planning using ROS2 and CasADi.',
        image: 'CityBot.png',
        about:
            'Developed ROS2 nodes in C++ for MPC-based trajectory planning. Created mock map data and visualized results using MATLAB. Tested and calibrated an autonomous tractor using Foxglove for real-time visualization.',
        technologies: ['C++', 'ROS2', 'CasADi', 'MATLAB', 'Foxglove'],
    },
    {
        title: 'Linux OS Test Automation',
        description: 'Automated system validation for Volkswagen Linux platform.',
        image: 'VWOS.png',
        about:
            'Designed test cases based on system requirements using CodeBeamer and automated testing with Robot Framework on Ubuntu. Documented results, reported defects, and maintained automated tests within an agile Scrum team.',
        technologies: ['Robot Framework', 'Ubuntu', 'CodeBeamer', 'Python'],
    },
    {
        title: 'Elevator HiL Test Automation',
        description: 'Python-based automation framework for hardware-in-the-loop testing.',
        image: 'OTIS.png',
        about:
            'Developed a Python Tkinter application to parse serial data and interact with CANoe via pywin32. Implemented a Python-MATLAB-CANoe interface over TCP/IP and automated Simulink test model generation from Excel.',
        technologies: ['Python', 'Tkinter', 'MATLAB', 'CANoe', 'Simulink'],
    },
    {
        title: 'RFID Connector Prototype',
        description: 'UX prototype for an RFID-enabled connector product.',
        image: 'Continental.png',
        about:
            'Designed and prototyped a software application using Figma for an RFID-based connector product. Contributed to data labeling for a machine learning project related to golf training.',
        technologies: ['Figma', 'UX Design', 'Machine Learning'],
    },
    {
        title: 'IEC 61850 XMPP Communication',
        description: 'Master thesis on mapping IEC 61850 models to XMPP.',
        image: 'Master.png',
        about:
            'Analyzed the mapping of IEC 61850 ASCI models and services into XMPP. Extended the open-source C library libiec61850 and implemented XMPP services to enable communication between systems.',
        technologies: ['C', 'IEC 61850', 'XMPP', 'Networking'],
        github: 'https://github.com',
    },
    {
        title: 'NXP Intelligent Car Challenge',
        description: 'Embedded autonomous vehicle built for national competition.',
        image: 'NXP.png',
        about:
            'Programmed Kinetis K60 (ARM Cortex-M4) to process camera data and control motors and servo systems for autonomous navigation in a university robotics competition.',
        technologies: ['Embedded C', 'ARM Cortex-M4', 'Image Processing'],
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="section-customer">
            <div className="container-customer">

                {/* Header */}
                <div className="text-center mb-20 mt-32">
                    <h2 className="text-4xl font-bold">Projects</h2>
                    <p className="text-xl mt-4 text-gray-600">
                        Selected engineering and software projects
                    </p>
                </div>

                {/* Card Stack */}
                <div className="flex flex-col gap-12">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all"
                        >

                            {/* Image */}
                            <div className="aspect-[16/7] overflow-hidden">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600">
                                    {project.description}
                                </p>

                                <button
                                    className="mt-4 text-blue-600 font-medium hover:underline"
                                >
                                    View Details →
                                </button>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-xl">

                        {/* Close */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute right-6 top-6 text-gray-500 hover:text-black"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-3xl font-bold mb-4">
                            {selectedProject.title}
                        </h3>

                        <p className="text-gray-700 mb-6">
                            {selectedProject.about}
                        </p>

                        <h4 className="font-semibold mb-2">
                            Technologies & Tools
                        </h4>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {selectedProject.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-6">

                            {selectedProject.github && (
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                                >
                                    <Github size={18} />
                                    Code
                                </a>
                            )}

                            {selectedProject.demo && (
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                                >
                                    <ExternalLink size={18} />
                                    Demo
                                </a>
                            )}

                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}