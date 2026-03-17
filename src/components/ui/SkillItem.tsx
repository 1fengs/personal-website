"use client";

import { motion } from "framer-motion";

const levelStyles: any = {
  expert:
    "bg-blue-500/20 text-blue-400 border-blue-500/30",
  advanced:
    "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  intermediate:
    "bg-violet-500/20 text-violet-400 border-violet-500/30",
  basic:
    "bg-neutral-500/20 text-neutral-400 border-neutral-500/30",
};

export default function SkillItem({ skill }: any) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="
      p-4
      rounded-xl
      bg-white/4
      border border-white/8
      backdrop-blur
      transition
      hover:border-blue-500
      hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
      "
    >
      <div className="flex flex-col grid grid-rows-3 gap-1 items-center justify-center">

        <div className="flex w-fit mx-auto overflow-hidden">
          <Icon className="sec-txt mcolor-txt" />
        </div>
                  
        <div className="font-sm flex items-center justify-center overflow-hidden">
            {skill.name}
        </div>

        <div className={`mx-auto w-fit overflow-hidden text-xs px-2 py-1 rounded-full border capitalize
          ${levelStyles[skill.level]}
          `}
        >
          {skill.level}
        </div>

      </div>
    </motion.div>
  );
}