"use client";

import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

export default function SkillCategory({ category }: any) {
  const CategoryIcon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        p-2
        md:p-4
        rounded-lg
        subtle-blur-card
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2 md:mb-4">

        {CategoryIcon && (
          <CategoryIcon className="w-5 h-5 text-white/60" />
        )}
        {/* <div className="w-1 h-6 bg-blue-400 rounded"></div> */}
        <h3 className="ml-2 tex-sm md:text-lg font-bold">
          {category.title}
        </h3>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-[repeat(auto-fill,minmax(100px,1fr))]
          md:grid-cols-6
          gap-2
            md:gap-4
        "
      >
        {category.skills.map((skill: any, i: number) => (
          <SkillItem key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}