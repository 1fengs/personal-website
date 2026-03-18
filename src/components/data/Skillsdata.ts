import {
    SiC,
    SiCplusplus,
    SiPython,
    SiDocker,
    SiJenkins,
    SiGit,
    SiReact,
    SiRos,
    SiJavascript,
    SiCmake,
    SiConfluence,
    SiJira,
    SiUbuntu,
    SiRobotframework,
    SiTypescript,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiVercel
} from "react-icons/si";
import {
    IoLanguage,
    IoDocumentText
} from "react-icons/io5";
import {
    VscVscode
} from "react-icons/vsc";
import { 
    PiMathOperationsFill 
} from "react-icons/pi";
import { 
    FaCar 
} from "react-icons/fa";
import { 
    TbRulerMeasure 
} from "react-icons/tb";
import { 
    FaCarOn 
} from "react-icons/fa6";
import { 
    PiComputerTowerFill 
} from "react-icons/pi";

export const skillCategories = [
    {
        title: "Languages",
        skills: [
        { name: "Mandarin", icon: IoLanguage, level: "expert" },
        { name: "English", icon: IoLanguage, level: "expert" },
        { name: "German", icon: IoLanguage, level: "advanced" },
        ]
    },
    {
        title: "Programming Languages",
        skills: [
        { name: "C", icon: SiC, level: "expert" },
        { name: "C++", icon: SiCplusplus, level: "expert" },
        { name: "Python", icon: SiPython, level: "advanced" },
        { name: "Assembly", icon: SiC, level: "basic" },
        { name: "Typescript", icon: SiTypescript, level: "basic" },
        ]
    },
    {
        title: "Robotics & Automotive",
        skills: [
        { name: "ROS2", icon: SiRos, level: "expert" },
        { name: "CasADi", icon: SiCplusplus, level: "expert" },
        { name: "CANoe", icon: TbRulerMeasure, level: "intermediate" },
        { name: "AUTOSAR", icon: FaCar, level: "intermediate" },
        { name: "Foxglove", icon: FaCarOn, level: "basic" },
        { name: "PLC", icon: PiComputerTowerFill, level: "basic" },
        ]
    },
    {
        title: "Testing & Validation",
        skills: [
        { name: "Robot Framework", icon: SiRobotframework, level: "expert" },
        { name: "CodeBeamer", icon: IoDocumentText, level: "expert" },
        { name: "Simulink", icon: PiMathOperationsFill, level: "expert" },
        { name: "Matlab", icon: PiMathOperationsFill, level: "expert" }
        ]
    },
    {
        title: "Tools & Dev Environment",
        skills: [
        { name: "Git", icon: SiGit, level: "expert" },
        { name: "Ubuntu", icon: SiUbuntu, level: "expert" },
        { name: "VS Code", icon: VscVscode, level: "expert" },
        { name: "JIRA", icon: SiJira, level: "expert" },
        { name: "Confluence", icon: SiConfluence, level: "expert" }
        ]
    },
    {
        title: "Build & CI/CD",
        skills: [
        { name: "Jenkins", icon: SiJenkins, level: "advanced" },
        { name: "CMake", icon: SiCmake, level: "intermediate" },
        { name: "Docker", icon: SiDocker, level: "intermediate" },
        { name: "Vercel", icon: SiVercel, level: "basic" },
        ]
    },
        {
        title: "Web Development",
        skills: [
        { name: "HTML5", icon: SiHtml5, level: "intermediate" },
        { name: "CSS3", icon: SiCss, level: "intermediate" },
        { name: "Next.js", icon: SiJavascript, level: "basic" },
        { name: "React", icon: SiReact, level: "basic" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: "basic" },
        ]
    }
];