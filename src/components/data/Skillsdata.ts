import {
    SiC,
    SiCplusplus,
    SiPython,
    SiDocker,
    SiJenkins,
    SiGit,
    SiLinux,
    SiRos,
    SiJson
} from "react-icons/si";

export const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
        { name: "C", icon: SiC, level: 90 },
        { name: "C++", icon: SiCplusplus, level: 90 },
        { name: "Python", icon: SiPython, level: 85 },
        { name: "Assembly", icon: SiC, level: 40 }
        ]
    },
    {
        title: "Robotics & Automotive",
        skills: [
        { name: "ROS2", icon: SiRos, level: 85 },
        { name: "CANoe", icon: SiJson, level: 80 },
        { name: "AUTOSAR", icon: SiJson, level: 70 },
        { name: "CasADi", icon: SiJson, level: 65 },
        { name: "Foxglove", icon: SiJson, level: 70 }
        ]
    },
    {
        title: "Testing & Validation",
        skills: [
        { name: "Robot Framework", icon: SiPython, level: 85 },
        { name: "CodeBeamer", icon: SiJson, level: 80 },
        { name: "Simulink", icon: SiJson, level: 70 },
        { name: "Matlab", icon: SiJson, level: 75 }
        ]
    },
    {
        title: "Tools & Dev Environment",
        skills: [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "Ubuntu", icon: SiLinux, level: 90 },
        { name: "VS Code", icon: SiJson, level: 90 },
        { name: "JIRA", icon: SiJson, level: 80 },
        { name: "Confluence", icon: SiJson, level: 80 }
        ]
    },
    {
        title: "Build & CI/CD",
        skills: [
        { name: "CMake", icon: SiJson, level: 85 },
        { name: "Docker", icon: SiDocker, level: 75 },
        { name: "Jenkins", icon: SiJenkins, level: 70 }
        ]
    }
];