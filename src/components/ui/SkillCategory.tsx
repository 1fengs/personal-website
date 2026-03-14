"use client";

import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

export default function SkillCategory({ category }) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
        p-10
        rounded-2xl
        bg-white/5
        backdrop-blur-lg
        border border-white/10
        shadow-lg
        "
        >
        <h3 className="text-2xl font-semibold text-white mb-6">
            {category.title}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.skills.map((skill, i) => (
            <SkillItem key={i} skill={skill} />
            ))}
        </div>
        </motion.div>
    );
}