'use client';

import { motion } from 'framer-motion';

export function CurveLine() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <svg viewBox="0 0 1000 600" className="w-full h-full" preserveAspectRatio="none">
                {/* Curve */}
                <motion.path
                    d="M 50 550 Q 300 350 600 250 T 950 80"
                    stroke="rgba(59,130,246,0.6)" // blue-500
                    strokeDasharray="10 6"
                    strokeWidth="3"
                    fill="transparent"
                    initial={{ pathLength: 0, strokeDashoffset: 20 }}
                    animate={{ pathLength: 1, strokeDashoffset: 0 }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                />

                {/* Arrow */}
                <motion.path
                    d="M 880 90 L 900 100 L 880 110"
                    stroke="rgba(59,130,246,0.6)"
                    strokeWidth="3"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                />
            </svg>
        </div>
    );
}
