"use client";
import { skillCategories } from "./data/Skillsdata";
import SkillCategory from "./ui/SkillCategory";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
    >
      {/* background glow */}

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/20 blur-[200px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white">
            My <span className="text-blue-400">Skillset</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
}
