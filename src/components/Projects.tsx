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
    intro: string;
};

const projects: Project[] = [
    {
        title: 'Autonomous Driving with ROS2',
        description: 'MPC-based trajectory planning using ROS2 and CasADi.',
        image: 'CityBot-alt.png',
        about:
            'Developed ROS2 nodes in C++ for MPC-based trajectory planning. Created mock map data and visualized results using MATLAB. Tested and calibrated an autonomous tractor using Foxglove for real-time visualization.',
        technologies: ['C++', 'ROS2', 'CasADi', 'MATLAB', 'Foxglove'],
        intro:
            'This is an intro',
        demo: 'https://github.com',
        github: 'https://github.com',
    },
    {
        title: 'Linux-based OS Test Automation',
        description: 'Automated system validation for Volkswagen Linux platform.',
        image: 'VWOS-alt.png',
        about:
            'Designed test cases based on system requirements using CodeBeamer and automated testing with Robot Framework on Ubuntu. Documented results, reported defects, and maintained automated tests within an agile Scrum team.',
        technologies: ['Robot Framework', 'Ubuntu', 'CodeBeamer', 'Python'],
        intro:
            'This is an intro',
    },
    {
        title: 'Elevator HiL Component Testing',
        description: 'Python-based automation framework for hardware-in-the-loop testing.',
        image: 'OTIS-alt.png',
        about:
            'Developed a Python Tkinter application to parse serial data and interact with CANoe via pywin32. Implemented a Python-MATLAB-CANoe interface over TCP/IP and automated Simulink test model generation from Excel.',
        technologies: ['Python', 'Tkinter', 'MATLAB', 'CANoe', 'Simulink'],
        intro:
            'This is an intro',
    },
    {
        title: 'App Prototype',
        description: 'UX prototype for an RFID-enabled connector product.',
        image: 'Continental-alt.png',
        about:
            'Designed and prototyped a software application using Figma for an RFID-based connector product. Contributed to data labeling for a machine learning project related to golf training.',
        technologies: ['Figma', 'UX Design', 'Machine Learning'],
        intro:
            'This is an intro',
    },
    {
        title: 'Smart Grid Gateway',
        description: 'Master thesis on mapping IEC 61850 models to XMPP.',
        image: 'Master-alt.png',
        about:
            'Analyzed the mapping of IEC 61850 ASCI models and services into XMPP. Extended the open-source C library libiec61850 and implemented XMPP services to enable communication between systems.',
        technologies: ['C', 'IEC 61850', 'XMPP', 'Networking'],
        github: 'https://github.com',
        intro:
            'This is an intro',
    },
    {
        title: 'Intelligent Car Race',
        description: 'Embedded autonomous vehicle built for national competition.',
        image: 'NXP-alt.png',
        about:
            'Programmed Kinetis K60 (ARM Cortex-M4) to process camera data and control motors and servo systems for autonomous navigation in a university robotics competition.',
        technologies: ['Embedded C', 'ARM Cortex-M4', 'Image Processing'],
        intro:
            'This is an intro',
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="section-customer">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="main-txt mb-8">
                    My Projects
                </h2>
                <p className="body-txt text-gray-400">
                    Check out how I change the world around me
                </p>
            </div>

            <div className="mx-4 md:mx-10 p-2 md:p-10 bgcolor-light rounded-2xl">
            <div className="container-customer">

                {/* Card Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gp-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="p-4 group shadow-lg cursor-pointer rounded-lg overflow-hidden bg-white transition-all flex flex-row md:flex-col"
                        >

                            {/* Image */}
                            <div className="rounded-lg overflow-hidden w-1/3 md:w-full">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className= "flex flex-col w-full">
                            <div className="flex flex-col max-w-[60%] mx-4 md:mx-0 md:mt-4 text-left overflow-hidden">
                                <h3 className="sec-txt mb-2 text-black">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-1 mx-4 md:mx-0 mt-1 w-full mb-2">
                                {/* Tech tags */}
                                {project.technologies.slice(0, 3).map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] md:text-xs px-2 py-0.5 border border-gray-600 text-gray-600 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="text-[10px] md:text-xs py-0.5 text-gray-600">
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>
                            

                            <div className="flex flex-col w-full">
                                <button
                                    className="mte-auto self-end mcolor-txt text-sm hover:underline"
                                >
                                    View Details →
                                </button>
                            </div>
                            </div>

                        </div>
                    ))}

                </div>
                {/* footnote */}
                <div className="text-right bottom-2 right-2 text-[12px] text-gray-400">
                    * All project photos in this page are generated by AI
                </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-black/90 border border-blue-400/80 rounded-2xl max-w-4xl w-full p-8 relative">

                        {/* Close */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute right-6 top-6 text-white hover:text-black"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="sec-txt mb-4">
                            {selectedProject.title}
                        </h3>

                        <p className="body-txt mb-6">
                            {selectedProject.about}
                        </p>

                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-1 h-6 bg-blue-400 rounded"></div>
                          <div className="trd-txt">
                            About this project
                          </div>
                        </div>

                        <div className="w-full rounded bg-white/8 border-white/10 backdrop-blur-lg p-2 mb-6">
                            <p className="body-txt m-2">
                                {selectedProject.intro}
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-1 h-6 bg-blue-400 rounded"></div>
                          <div className="trd-txt font-semibold">
                                Technologies & Tools
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {selectedProject.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="body-txt bg-blue-400 px-3 py-1 rounded-full text-sm"
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
                                    className="flex items-center gap-2 hover:text-blue-400"
                                >
                                    <Github size={18} />
                                    Code
                                </a>
                            )}

                            {selectedProject.demo && (
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-blue-400"
                                >
                                    <ExternalLink size={18} />
                                    Visit
                                </a>
                            )}

                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}