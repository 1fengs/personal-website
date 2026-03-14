'use client';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        image: '/project1.png',
        tags: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/user/project1',
        demo: 'https://project1.demo.com',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        image: '/project2.png',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
        github: 'https://github.com/user/project2',
        demo: 'https://project2.demo.com',
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        image: '/project3.png',
        tags: ['Vue.js', 'Firebase'],
        github: 'https://github.com/user/project3',
        demo: 'https://project3.demo.com',
    },
];

function ProjectCard() {
    return (
        <div className="grid grid-cols-3 gap-8 mb-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="text-center mb-16 mt-32">
                    <h2 className="text-4xl font-bold">My Projects</h2>
                    <p className="mt-4 text-xl mb-4">
                        Some of my past work and projects.
                    </p>
                </div>
                <ProjectCard />
            </div>
        </section>
    );
}
