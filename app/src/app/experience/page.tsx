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

const projects: { title: string; src: string; skills: string[] }[] = [
  {
    title: "An Enterprise Scale system for a K-12 school district",
    src: "/150.svg",
    skills: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "Linux", "NoSQL", "Apache", "Ubuntu", "Git", "Integration", "Deployment"]
  },
  {
    title: "A charity website that funded villains; used by donators, villains, and managers",
    src: "/150.svg",
    skills: ["Angular", "TypeScript", "Spring Boot", "Java", "Node.js", "JaCoCo", "SonarQube", "Docker", "Trello", "Git"]
  },
  {
    title: "A back-end system to store Dungeons & Dragons characters",
    src: "/150.svg",
    skills: ["Python", "PostgreSQL", "SQL", "Flask", "Flask-RESTful", "Github Actions (CI)", "Git"]
  },
  {
    title: "A Comic book database application that employed a multitude of software design patterns",
    src: "/150.svg",
    skills: ["Java", "PostgreSQL", "SQL", "Trello", "Git", "Design Patterns"]
  },
  {
    title: "Wawa wiwa",
    src: "/150.svg",
    skills: ["Java", "PostgreSQL", "SQL", "Trello", "Git", "Design Patterns"]
  },
]

const skills: { name: string; src?: string; type: string; color?: string }[] = [
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
    color: "text-blue-700"
  },
  {
    name: "Deployment",
    type: "Keyword",
    color: "text-green-700"
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
    color: "text-blue-700"
  },
]


export default function Experience() {
  //const [filteredSkill, setFilteredSkill] = React.useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = React.useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
  };

  const filteredProjects = selectedSkill 
    ? projects.filter(project => project.skills.includes(selectedSkill)) : projects;

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

          <FilterSelect />

          <ul className="my-4 flex flex-wrap md:w-[800px]">
            {
              skills.map((skill) => (
                <Button 
                  key={skill.name}
                  className="bg-slate-50 text-sm hover:bg-slate-200 transition duration-300 rounded-md"
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
                />
              ))}
          </ul>

        </div>

      </div>
    </div>   
  );
}