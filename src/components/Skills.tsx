"use client";
import { skillCategories } from "./data/Skillsdata";
import SkillCategory from "./ui/SkillCategory";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-customer"
    >
      <div className="container-customer">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="main-txt font-bold text-white">
            My <span className="text-blue-400">Skillset</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
}
