"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Trophy, FlaskConical } from 'lucide-react';

type JourneyItem = {
    title: string;
    organization: string;
    period: string;
    description: string;
    icon: React.ElementType;
};

const journey: JourneyItem[] = [
    {
        title: "Bachelor of Engineering – Automation",
        organization: "East China University of Science and Technology",
        period: "2014 – 2018 · Shanghai",
        description:
            "Specialized in Measurement & Control Technology. Awarded the National Scholarship (Top 0.2% in China).",
        icon: GraduationCap
    },
    // {
    //     title: "NXP Cup Intelligent Car Race",
    //     organization: "National Competition",
    //     period: "2017",
    //     description:
    //         "Programmed ARM Cortex-M4 Kinetis K60 controllers for UAV image processing and autonomous car navigation.",
    //     icon: Trophy
    // },
    {
        title: "Master of Science – Electrical Engineering",
        organization: "RWTH Aachen University",
        period: "2018 – 2022 · Aachen",
        description:
            "Focused on Information Technology and Computer Engineering with emphasis on embedded systems and software development.",
        icon: GraduationCap
    },
    // {
    //     title: "Master Thesis",
    //     organization: "E.ON Energy Research Center",
    //     period: "2020 – 2021 · Aachen",
    //     description:
    //         "Extended the open-source C library libiec61850 and implemented XMPP services to map IEC 61850 ASCI models into XMPP communication.",
    //     icon: FlaskConical
    // },
    {
        title: "Software Engineering Intern",
        organization: "Continental AG",
        period: "Apr 2021 – Sep 2021 · Hamburg",
        description:
            "Designed a software prototype in Figma for an RFID connector product and supported machine-learning data labeling.",
        icon: Briefcase
    },
    {
        title: "Software Engineer",
        organization: "EDAG Engineering Group",
        period: "Mar 2022 – Feb 2026 · Berlin",
        description:
            "Developed ROS2 trajectory planning nodes, automated HiL testing systems, and Linux-based automotive test frameworks.",
        icon: Briefcase
    }
];

export function Journey() {
    return (
        <section className="relative section-customer">
            <div className="container-customer">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-6xl font-bold text-white text-center mb-16"
                >
                    My <span className="text-blue-400">Journey</span>
                </motion.h2>

                <div className="relative">

                    {/* timeline line */}
                    <div className="absolute left-4 top-0 h-full w-px
                        bg-gradient-to-b
                        from-blue-500/70
                        via-blue-400/40
                        to-transparent
                    " />

                    <div className="space-y-10">

                        {journey.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    className="relative flex items-start gap-6"
                                >

                                    {/* timeline node */}
                                    <div className="relative z-10 flex items-center justify-center
                                        w-9 h-9 rounded-full
                                        bg-neutral-900
                                        border border-neutral-700
                                        shadow-md shadow-blue-500/10
                                    ">
                                        <Icon size={16} className="text-blue-400"/>
                                    </div>

                                    {/* card */}
                                    <div
                                        className="
                                        group relative flex-1
                                        rounded-xl
                                        border border-neutral-800
                                        bg-white/2
                                        backdrop-blur
                                        p-6
                                        transition-all duration-300
                                        hover:border-blue-500/60
                                        hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]
                                        "
                                    >

                                        {/* glow effect */}
                                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition
                                            bg-gradient-to-r
                                            from-blue-500/10
                                            via-transparent
                                            to-blue-500/10
                                        "/>

                                        <div className="relative">

                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                                <h3 className="text-3xl text-white font-semibold">
                                                    {item.title}
                                                </h3>

                                                <span className="text-lg text-white/90">
                                                    {item.period}
                                                </span>
                                            </div>

                                            <p className="text-blue-400 font-semibold text-2xl mb-2">
                                                {item.organization}
                                            </p>

                                            <p className="text-neutral-300 text-lg leading-relaxed">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
}