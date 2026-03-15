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

export const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
        { name: "C", icon: SiC, level: 95 },
        { name: "C++", icon: SiCplusplus, level: 95 },
        { name: "Python", icon: SiPython, level: 80 },
        { name: "Assembly", icon: SiC, level: 30 },
        { name: "Typescript", icon: SiTypescript, level: 45 },
        ]
    },
    {
        title: "Robotics & Automotive",
        skills: [
        { name: "ROS2", icon: SiRos, level: 85 },
        { name: "CANoe", icon: TbRulerMeasure, level: 70 },
        { name: "AUTOSAR", icon: FaCar, level: 50 },
        { name: "CasADi", icon: SiCplusplus, level: 90 },
        { name: "Foxglove", icon: FaCarOn, level: 40 }
        ]
    },
    {
        title: "Testing & Validation",
        skills: [
        { name: "Robot Framework", icon: SiRobotframework, level: 85 },
        { name: "CodeBeamer", icon: IoDocumentText, level: 80 },
        { name: "Simulink", icon: PiMathOperationsFill, level: 90 },
        { name: "Matlab", icon: PiMathOperationsFill, level: 90 }
        ]
    },
    {
        title: "Tools & Dev Environment",
        skills: [
        { name: "Git", icon: SiGit, level: 100 },
        { name: "Ubuntu", icon: SiUbuntu, level: 90 },
        { name: "VS Code", icon: VscVscode, level: 100 },
        { name: "JIRA", icon: SiJira, level: 100 },
        { name: "Confluence", icon: SiConfluence, level: 100 }
        ]
    },
    {
        title: "Build & CI/CD",
        skills: [
        { name: "CMake", icon: SiCmake, level: 60 },
        { name: "Docker", icon: SiDocker, level: 70 },
        { name: "Jenkins", icon: SiJenkins, level: 70 },
        { name: "Vercel", icon: SiVercel, level: 50 },
        ]
    },
        {
        title: "Languages",
        skills: [
        { name: "Mandarin", icon: IoLanguage, level: 100 },
        { name: "English", icon: IoLanguage, level: 95 },
        { name: "German", icon: IoLanguage, level: 67 },
        ]
    },
        {
        title: "Web Development",
        skills: [
        { name: "Next.js", icon: SiJavascript, level: 50 },
        { name: "React", icon: SiReact, level: 45 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 60 },
        { name: "HTML5", icon: SiHtml5, level: 70 },
        { name: "CSS3", icon: SiCss, level: 70 },
        ]
    }
];