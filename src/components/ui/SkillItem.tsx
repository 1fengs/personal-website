"use client";

import { motion } from "framer-motion";

export default function SkillItem({ skill }) {
    const Icon = skill.icon;

    return (
        <motion.div
        whileHover={{ scale: 1.05 }}
        className="
        group
        p-4
        rounded-xl
        bg-white/5
        border border-white/10
        backdrop-blur
        transition
        hover:border-blue-500
        hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
        "
        >
        <div className="flex items-center gap-3 mb-3">
            <Icon className="text-blue-400 text-xl" />

            <span className="text-white text-sm font-medium">
            {skill.name}
            </span>
        </div>

        {/* progress bar */}

        <div className="w-full bg-neutral-800 rounded-full h-1.5">
            <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1 }}
            className="bg-blue-400 h-1.5 rounded-full"
            />
        </div>
        </motion.div>
    );
}