'use client';

import { skillCategories } from './data/Skillsdata';
import SkillCategory from './ui/SkillCategory';

export function Skills() {
    return (
        <section id="skills" className="section-customer mt-10">
            {/* Header (MATCHED with Projects) */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="main-txt mb-8">
                    My <span className="text-blue-400">Skillset</span>
                </h2>
                <p className="body-txt text-gray-400">Technologies and tools behind my work</p>
            </div>

            {/* Container (MATCHED with Projects) */}
            {/* <div className="m-2 md:m-10 bgcolor-dark rounded-2xl"> */}
            <div className="relative container-customer">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-blue-600/40 rounded-full blur-[150px]" />
                    <div className="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[140px]" />
                </div>
                {/* Categories */}
                <div className="flex flex-col gap-2 md:gap-4">
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={index} category={category} />
                    ))}
                </div>
            </div>
            {/* </div> */}
        </section>
    );
}
