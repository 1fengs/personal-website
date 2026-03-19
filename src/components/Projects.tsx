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
    intro: string[];
};

const projects: Project[] = [
    {
        title: 'Autonomous Driving',
        description: 'MPC-based trajectory planning using ROS2 and CasADi.',
        image: 'CityBot-alt.png',
        about:
            'Developed a trajectory planning module for an autonomous vehicle using Model Predictive Control (MPC), taking the system from proof of concept to real-world deployment. The project focused on generating safe, optimal trajectories within lane constraints while dynamically handling obstacles and vehicle behavior.',
        technologies: ['C++', 'ROS2', 'MATLAB/Simulink', 'MPC', 'CasADi', 'Trajectory Planning', 'Foxglove', 'Autosar', 'Git', 'BitBucket'],
        intro:[
"This project was part of an ADCU (Autonomous Driving Control Unit) team of four engineers, where I was responsible for the trajectory planning component. We started from scratch by evaluating the feasibility of Model Predictive Control (MPC) for real-time vehicle control.",

"I developed a MATLAB-based proof of concept, creating mock map data and implementing an MPC controller using CasADi. The system guided the vehicle to a target point while maintaining lane constraints, avoiding obstacles, and adapting behavior (e.g., stopping for critical objects). It also generated simulation videos for validation.",

"A key contribution was designing the optimization model, including dynamic elliptical obstacle boundaries for smoother avoidance.",

"Following validation, I implemented a multi-threaded ROS2 C++ node integrated with state machine, map, and control modules, deployed on an in-vehicle SoC. I also supported on-site testing and calibration on the real vehicle.",

"This project strengthened my skills in optimization, ROS2, and embedded systems, and I received strong feedback for proactively driving ideas and delivering effective solutions."],
        demo: 'https://www.edag-citybot.de',
    },
    {
        title: 'Linux OS Component Testing',
        description: 'Automated system validation for Volkswagen Linux platform.',
        image: 'VWOS-alt.png',
        about:
            'Worked on component testing for Volkswagen’s VW.OS, a Linux-based automotive operating system, focusing on requirement-based test design, automation, and continuous integration across multiple product clusters.',
        technologies: ['Robot Framework', 'Ubuntu', 'CI/CD', 'Shell script', 'CodeBeamer', 'Agile', 'Scrum', 'JIRA', 'Confluence', 'Component Testing', 'Git', 'BitBucket'],
        intro:
            ["In this project, I worked as a component tester for Volkswagen’s VW.OS, a Linux-based system tested in an Ubuntu environment. My responsibility was to maintain and develop tests across different clusters, representing various product lines.",

"I analyzed new and updated requirements to determine appropriate test coverage, then designed and maintained test conditions and test cases in Codebeamer. Based on these, I implemented automated test scripts using the Robot Framework.",

"The tests were executed in a CI pipeline using Jenkins. When failures occurred, I analyzed logs to determine whether the issue originated from the test design or the developers’ implementation. For confirmed defects, I created and tracked tickets for developers, while also monitoring daily builds and investigating any regressions.",

"To improve efficiency, I developed supporting scripts (e.g., Bash and Python) to streamline testing workflows and reduce manual effort.",

"All work was carried out in an agile Scrum team using JIRA for task and issue tracking.",

"As my first experience in software testing, this project was a steep learning curve. I quickly adapted to the tools and processes, and received outstanding feedback — including being recognized by the project manager for performing at a level comparable to a senior tester."],
        demo: 'https://cariad.technology/de/en/news/stories/vw-os-software-platform-explained.html'
    },
    {
        title: 'Elevator HiL Test Automation',
        description: 'Python-based automation framework for hardware-in-the-loop testing.',
        image: 'OTIS-alt.png',
        about:
            'Developed an end-to-end Hardware-in-the-Loop (HiL) test automation system for elevator control, replacing manual Excel-based testing with a fully integrated and automated workflow across Simulink, CANoe, and embedded hardware.',
        technologies: ['Python', 'MATLAB/Simulink', 'CAPL', 'pywin32', 'CANoe', 'CAN', 'TCP/IP', 'HiL', 'Serial Reading', 'Multithreading', 'pywin32', 'Git', 'BitBucket'],
        intro:
            ["This project focused on automating HiL testing for elevator systems at OTIS, where testing was previously performed manually using Excel-based test scripts on physical test stands. My role was to design and implement the missing software interfaces to enable a fully automated testing pipeline.",

"The system architecture consisted of a closed loop: MATLAB/Simulink → CANoe → Vector hardware → microcontrollers → laptop. I implemented the key interfaces required to connect these components and enable seamless data exchange.",

"I developed a MATLAB–CANoe interface using TCP/IP communication, where Simulink models triggered MATLAB functions acting as a client, while CANoe operated as a server. Through this interface, test commands and data were exchanged in real time during simulation.",

"On the CANoe side, I implemented CAPL-based API functions that executed specific elevator actions and returned system states and measurements back to MATLAB. In parallel, I built a Python application to read and parse serial data from the microcontroller (e.g., door speed, floor position), which was then injected into CANoe using pywin32 for further processing.",

"In addition, I created tools to automate the overall workflow, including scripts for generating Simulink test models from Excel definitions, automating test execution, and producing reports. This significantly reduced manual effort and improved testing efficiency.",

"Despite the system complexity and the project being in an early stage, I successfully delivered a working automation pipeline. The project was both challenging and rewarding, and I received very positive feedback from both the project manager and technical lead for my ability to structure, implement, and drive the solution forward."],
    },
    {
        title: 'App Prototype',
        description: 'UX prototype for an RFID-enabled connector product.',
        image: 'Continental-alt.png',
        about:
            'Designed a prototype application for an RFID-based automotive connector system, visualizing vehicle structure and highlighting faulty components through an intuitive user interface.',
        technologies: ['Figma', 'UX Design', 'Proof of Concept'],
        intro:
            ["During my internship at Continental, I was responsible for prototyping an application for an RFID-enabled connector product used in vehicles.",

"The goal of the application was to display a structured view of the vehicle and visualize the status of connectors based on RFID scan results, clearly identifying faulty components for users.",

"I designed the full application concept and user interface using Figma, focusing on clarity, usability, and effective visualization of technical data.",

"The prototype was presented to the project leader and later to senior management, where it was well received as a clear and practical concept for the product."],
    },
    {
        title: 'Smart Grid Communication',
        description: 'Master thesis on mapping IEC 61850 models to XMPP.',
        image: 'Master-alt.png',
        about:
            'Designed and implemented a communication solution for Smart Grid systems by integrating IEC 61850 with XMPP, extending an open-source C library to enable scalable, secure, and flexible machine-to-machine communication.',
        technologies: ['C', 'IEC 61850', 'XMPP', 'Smart Grid', 'Open-source', 'Git', 'GitLab'],
        intro:
            ["This project was my master thesis at RWTH Aachen University, focusing on enabling efficient and scalable communication in Smart Grid systems by integrating IEC 61850 with XMPP.",

"The core contribution was extending the open-source C library libiec61850 to support XMPP-based communication. This involved designing and implementing a sender/receiver architecture, enabling IEC 61850 services to be transmitted via XMPP using XML-based messaging.",

"I developed the communication interface by mapping IEC 61850 data models and services to XMPP protocols, ensuring compatibility with existing standards while enabling secure and flexible data exchange. The implementation followed a layered architecture and introduced event-driven handling for message processing.",

"The system was evaluated through both single-domain and multi-domain communication scenarios, demonstrating reliable message exchange, scalability, and applicability for real-world Smart Grid use cases.",

"This project strengthened my expertise in communication protocols, C programming, and system architecture design, while providing deep insights into Smart Grid technologies and standardized industrial systems."],
        demo: 'https://www.fein-aachen.org/projects/villas-node/'
    },
    {
        title: 'Intelligent Car Race',
        description: 'Embedded autonomous vehicle built for national competition.',
        image: 'NXP-alt.png',
        about:
            'Developed a vision-based autonomous navigation system for a model car in the NXP Intelligent Car Competition, using image data and embedded processing on an ARM-based microcontroller.',
        technologies: ['Embedded C', 'ARM Cortex-M4', 'Image Processing'],
        intro:
            ["This project was completed during my bachelor studies as part of the NXP Intelligent Car Competition, where the goal was to enable a model car to autonomously navigate toward target points defined by LED lights on a field.",

"The system architecture involved a UAV capturing real-time images of the field and transmitting the data to the vehicle. The model car then processed the incoming image data to detect illuminated targets and determine navigation paths.",

"I implemented the embedded software on an ARM-based microcontroller (Kinetis K60), focusing on image data processing, signal interpretation, and real-time control of the vehicle’s motor and steering system.",

"The vehicle was able to identify target lights and navigate accordingly by controlling speed and direction based on processed visual input.",

"This project provided early hands-on experience in embedded systems, real-time processing, and autonomous control, forming a strong foundation for my later work in robotics and autonomous driving."],
        demo: 'https://aiotcloud.nxp.com.cn/smartcar-vision?lan=en'
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="section-customer mt-10">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="main-txt mb-8">
                    My <span className="text-blue-400">Projects</span>
                </h2>
                <p className="body-txt text-gray-400">
                    Check out how I have changed the world around me
                </p>
            </div>

            {/* <div className="m-2 md:m-10 subtle-blur-card rounded-2xl"> */}
            <div className="container-customer">

                {/* Card Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gp-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="p-2 md:p-4 group shadow-lg shadow-[#F2F2F2]/50 cursor-pointer rounded-lg overflow-hidden bgcolor-light transition-all flex flex-row md:flex-col"
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
                            <div className="flex flex-col max-w-full mx-4 md:mx-0 md:mt-4 text-left overflow-hidden">
                                <h3 className="text-md md:text-2xl font-bold mb-2 md:mb-6 text-black">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-1 mx-4 md:mx-0 mt-1 w-full mb-2 md:mb-6">
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
                                    <span className="text-[10px] md:text-xs px-2 py-0.5 border border-gray-600 text-gray-600 rounded-full">
                                        + more
                                    </span>
                                )}
                            </div>
                            

                            {/* <div className="flex flex-col w-full"> */}
                                <button
                                    className="mt-auto self-end mcolor-txt text-[8px] md:text-xs hover:underline cursor-pointer"
                                >
                                    View Details
                                </button>
                            </div>
                            {/* </div> */}

                        </div>
                    ))}

                </div>
                {/* footnote */}
                <div className="text-right bottom-2 right-2 mt-2 text-[12px] text-gray-400">
                    * All project photos in this page are generated by AI
                </div>
                </div>
            {/* </div> */}

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start md:items-center justify-center z-50 p-4">

                    <div className="bg-black/90 rounded-lg max-w-4xl w-full p-8 relative max-h-[90vh] overflow-y-auto scroll-smooth">

                        {/* Close */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="sticky
        shadow-lg top-0 ml-auto block text-gray-400 hover:text-white z-10"
                            >
                            <X size={20} />
                        </button>

                        <h3 className="sec-txt mb-4">
                            {selectedProject.title}
                        </h3>

                        <p className="text-sm md:text-base mb-6">
                            {selectedProject.about}
                        </p>

                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-1 h-6 bg-blue-400 rounded"></div>
                          <div className="trd-txt">
                            About this project
                          </div>
                        </div>

                        <div className="w-full rounded bg-white/8 border-white/10 backdrop-blur-lg p-2 mb-6">
                            <div className="text-sm md:text-base m-2 space-y-2">
                                {selectedProject.intro.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
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
                                    className="text-sm md:text-md border border-blue-400 px-3 py-1 rounded-full text-sm"
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