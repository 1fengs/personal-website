"use client";

import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

export default function SkillCategory({ category }: any) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
        p-6
        rounded-2xl
        bg-white/2
        backdrop-blur-lg
        border border-white/5
        shadow-lg
        "
    >
        <h3 className="sec-txt mb-6">
            {category.title}
        </h3>

        <div className="
            grid
            grid-cols-2
            md:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-4
            2xl:grid-cols-4
            gap-4
        ">
            {category.skills.map((skill: any, i: number) => (
            <SkillItem key={i} skill={skill} />
            ))}
        </div>
    </motion.div>
  );
}