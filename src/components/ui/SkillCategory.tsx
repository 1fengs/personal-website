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
        p-4
        "
    >
        <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-6 bg-blue-400 rounded"></div>
            <div className="trd-txt">
                {category.title}
                </div>
            </div>

        <div className="
            grid
            grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
            2xl:grid-cols-6
            gap-4
        ">
            {category.skills.map((skill: any, i: number) => (
            <SkillItem key={i} skill={skill} />
            ))}
        </div>
    </motion.div>
  );
}