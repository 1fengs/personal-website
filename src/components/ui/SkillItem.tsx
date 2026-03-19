'use client';

import { motion } from 'framer-motion';

const levelStyles: any = {
    expert: 'bg-blue-400/60 text-blue-600 border-blue-400/60',
    advanced: 'bg-blue-400/30 text-blue-600 border-blue-400/40',
    intermediate: 'bg-blue-400/10 text-blue-600 border-blue-400/20',
    basic: 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20',
};

export default function SkillItem({ skill }: any) {
    const Icon = skill.icon;

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.03 }}
            className="
        group
        p-2
        md:p-4
        rounded-lg
        bgcolor-light
        border border-gray-200
        backdrop-blur-md
        transition-all
        duration-50
        hover:border-blue-500/60
        hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]
      "
        >
            <div className="flex flex-col items-center justify-center gap-1 md:gap-3 text-center">
                {/* Icon */}
                <Icon className="w-6 h-6 text-gray-700 group-hover:text-black transition" />

                {/* Name */}
                <p className="text-xs md:text-sm font-medium text-gray-700 overflow-hidden">
                    {skill.name}
                </p>

                {/* Level */}
                <span
                    className={`
            text-[10px]
            md:text-xs
            px-2 py-0.5
            rounded-full
            border
            capitalize
            ${levelStyles[skill.level]}
          `}
                >
                    {skill.level}
                </span>
            </div>
        </motion.div>
    );
}
