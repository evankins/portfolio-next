"use client"

import "@/styles/globals.css";
import "@/styles/animations.css";
import { FilterSelect } from "@/components/ShadCnSelect";
import { ProjectCard } from "@/components/ShadCnCard";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import * as React from "react";

const colors = [
  "bg-blue-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500"
]

export interface Skill {
  name: string;
  src?: string;
  type: string;
  color?: string;
}

interface Project {
  title: string;
  src: string;
  skills: Skill[];
}

const skills: Skill[] = [
  {
    name: "MongoDB",
    src: "/18.svg",
    type: "Database"
  },
  {
    name: "Express",
    src: "/18.svg",
    type: "Framework"
  },
  {
    name: "React",
    src: "/18.svg",
    type: "Framework"
  },
  {
    name: "Node.js",
    src: "/18.svg",
    type: "Framework"
  },
  {
    name: "JavaScript",
    src: "/18.svg",
    type: "Language"
  },
  {
    name: "Linux",
    src: "/18.svg",
    type: "Other"
  },
  {
    name: "NoSQL",
    src: "/18.svg",
    type: "Database"
  },
  {
    name: "Apache",
    src: "/18.svg",
    type: "Other"
  },
  {
    name: "Ubuntu",
    src: "/18.svg",
    type: "Other"
  },
  {
    name: "Git",
    src: "/18.svg",
    type: "Other"
  },
  {
    name: "Integration",
    type: "Keyword",
    color: "bg-blue-700"
  },
  {
    name: "Deployment",
    type: "Keyword",
    color: "bg-green-700"
  },
  {
    name: "Angular",
    src: "/18.svg",
    type: "Framework"
  },
  {
    name: "TypeScript",
    src: "/18.svg",
    type: "Language",
  },
  {
    name: "Spring Boot",
    src: "/18.svg",
    type: "Framework",
  },
  {
    name: "Java",
    src: "/18.svg",
    type: "Language",
  },
  {
    name: "JaCoCo",
    src: "/18.svg",
    type: "Other",
  },
  {
    name: "SonarQube",
    src: "/18.svg",
    type: "Other",
  },
  {
    name: "Docker",
    src: "/18.svg",
    type: "Other",
  },
  {
    name: "Trello",
    src: "/18.svg",
    type: "Other",
  },
  {
    name: "Python",
    src: "/18.svg",
    type: "Language",
  },
  {
    name: "PostgreSQL",
    src: "/18.svg",
    type: "Database",
  },
  {
    name: "SQL",
    src: "/18.svg",
    type: "Database",
  },
  {
    name: "Flask",
    src: "/18.svg",
    type: "Other",
  },
  {
    name: "Flask-RESTful",
    src: "/18.svg",
    type: "Other",
  },
  {
    name: "Github Actions (CI)",
    src: "/18.svg",
    type: "Other",
  },
  {
    name: "Design Patterns",
    type: "Keyword",
    color: "bg-blue-700"
  },
]

const skillMap: { [name: string]: Skill } = Object.fromEntries(
  skills.map((skill) => [skill.name, skill])
);


const projects: Project[] = [
  {
    title: "An Enterprise Scale system for a K-12 school district",
    src: "/150.svg",
    skills: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "Linux", "NoSQL", "Apache", "Ubuntu", "Git", "Integration", "Deployment"].map((name) => skillMap[name]),
  },
  {
    title: "A charity website that funded villains; used by donators, villains, and managers",
    src: "/150.svg",
    skills: ["Angular", "TypeScript", "Spring Boot", "Java", "Node.js", "JaCoCo", "SonarQube", "Docker", "Trello", "Git"].map((name) => skillMap[name]),
  },
  {
    title: "A back-end system to store Dungeons & Dragons characters",
    src: "/150.svg",
    skills: ["Python", "PostgreSQL", "SQL", "Flask", "Flask-RESTful", "Github Actions (CI)", "Git"].map((name) => skillMap[name]),
  },
  {
    title: "A Comic book database application that employed a multitude of software design patterns",
    src: "/150.svg",
    skills: ["Java", "PostgreSQL", "SQL", "Trello", "Git", "Design Patterns"].map((name) => skillMap[name]),
  },
]


export default function Experience() {
  const [selectedSkill, setSelectedSkill] = React.useState<string | null>(null);
  const [filteredSkill, setFilteredSkill] = React.useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [filteredSkills, setFilteredSkills] = React.useState(skills);

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
  };

  const handleFilterSelect = (filter: string) => {
    setFilteredSkill(filter);
    setSelectedSkill(null);
  };

  React.useEffect(() => {
    const newFilteredProjects = selectedSkill && selectedSkill !== null
      ? projects.filter(project => project.skills.some(skill => skill.name === selectedSkill)) 
      : projects;
    setFilteredProjects(newFilteredProjects);
  }, [selectedSkill]);

  React.useEffect(() => {
    const newFilteredSkills =
      filteredSkill && filteredSkill !== "All"
        ? skills.filter((skill) => skill.type === filteredSkill)
        : skills;
    setFilteredSkills(newFilteredSkills);
  }, [filteredSkill]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center"> 
      <div className="flex-grow mt-4 relative w-11/12 md:w-[700px] lg:w-[800px]">   

        <header>
          <div className="inline-block mt-2">
            <h1 className="">Experience</h1>
            <hr className="border-t-2 border-black mt-2 w-[115%]" />
          </div>
        </header>

        <div>
          <p className="mt-4">
          This page displays all of my in-progress and completed projects.
          </p>

          <p className="my-2">
          You can select to see projects filtered by language, framework, and other tools.
          </p>

          <p className="mt-12 mb-2">
            Filter:
          </p>

          <FilterSelect onChange={handleFilterSelect} />

          <ul className="my-4 flex flex-wrap md:w-[800px]">
            {
              filteredSkills.map((skill) => (
                <Button 
                  key={skill.name}
                  className={
                    "bg-white shadow-md m-1 text-sm hover:bg-slate-200 transition duration-300 rounded-md" 
                    + (skill.name === selectedSkill ? " bg-slate-200" : "")
                  }
                  onClick={() => handleSkillClick(skill.name)}
                >
                  {skill.src && <Image src={skill.src} alt={skill.name + " logo"} width={18} height={18} />}
                  {skill.name}
                </Button>
              ))
            }
          </ul>

          <ul className="grid w-[400px] my-4 gap-8 md:grid-cols-2 md:w-[800px]">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                key={project.title} 
                color={(colors[index % colors.length])}
                title={project.title}
                src={project.src}
                skills={project.skills}
                />
              ))}
          </ul>

        </div>

      </div>
    </div>   
  );
}