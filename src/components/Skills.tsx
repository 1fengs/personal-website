'use client';
import { Code, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';

const skills = [
    {
        icon: Code,
        title: 'Programming',
        description: 'Proficient in JavaScript, TypeScript, Python, and more.',
        skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
    },
    {
        icon: Palette,
        title: 'Design',
        description: 'Experienced in UI/UX design and graphic design.',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
    },
    {
        icon: Smartphone,
        title: 'Mobile Development',
        description: 'Skilled in developing mobile applications.',
        skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
    {
        icon: Database,
        title: 'Database Management',
        description: 'Knowledgeable in database design and management.',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],    
    }
];

function SkillCard() {
    return (
        <div className="grid grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="section-customer relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                {/* Background glow */}
                <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-[120px]" />
            </div>
            <div className="container-customer">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold">My Skillset</h2>
                </div>
                <SkillCard />
            </div>
        </section>
    );
}
