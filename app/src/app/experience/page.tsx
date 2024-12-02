"use client"

import "@/styles/globals.css";
import "@/styles/animations.css";
import { FilterSelect } from "@/components/ShadCnSelect";
import { ProjectCard } from "@/components/ShadCnCard";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
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
    src: "/mongodb-icon-2.svg",
    type: "Database"
  },
  {
    name: "Express",
    src: "/express.svg",
    type: "Framework"
  },
  {
    name: "React",
    src: "/React-icon.svg",
    type: "Framework"
  },
  {
    name: "Node.js",
    src: "/Font Awesome 5 brands node-js.svg",
    type: "Framework"
  },
  {
    name: "JavaScript",
    src: "/Unofficial_JavaScript_logo_2.svg",
    type: "Language"
  },
  {
    name: "Linux",
    src: "/NewTux.svg",
    type: "Other"
  },
  {
    name: "NoSQL",
    type: "Database",
    color: "bg-black"
  },
  {
    name: "Apache",
    src: "/Apache_HTTP_Server_Logo_(2016).svg",
    type: "Other"
  },
  {
    name: "Ubuntu",
    src: "/Ubuntu-logo-no-wordmark-solid-o-2022.svg",
    type: "Other"
  },
  {
    name: "Git",
    src: "/git-logo.svg",
    type: "Other"
  },
  {
    name: "Angular",
    src: "/Angular_full_color_logo.svg",
    type: "Framework"
  },
  {
    name: "TypeScript",
    src: "/Typescript_logo_2020.svg",
    type: "Language",
  },
  {
    name: "Spring Boot",
    src: "/Spring_Boot.svg",
    type: "Framework",
  },
  {
    name: "Java",
    src: "/Eo_circle_red_letter-j.svg",
    type: "Language",
  },
  {
    name: "JaCoCo",
    src: "/jacoco.svg",
    type: "Other",
  },
  {
    name: "SonarQube",
    src: "/sonarqube.svg",
    type: "Other",
  },
  {
    name: "Docker",
    src: "/Docker-svgrepo-com.svg",
    type: "Other",
  },
  {
    name: "Trello",
    src: "/Antu trello.svg",
    type: "Other",
  },
  {
    name: "Python",
    src: "/Python_logo_01.svg",
    type: "Language",
  },
  {
    name: "PostgreSQL",
    src: "/Postgresql_elephant.svg",
    type: "Database",
  },
  {
    name: "SQL",
    type: "Database",
    color: "bg-black"
  },
  {
    name: "Flask",
    src: "/flask.svg",
    type: "Other",
  },
  {
    name: "Github Actions (CI)",
    src: "/github-actions-seeklogo.svg",
    type: "Other",
  },
]

const skillMap: { [name: string]: Skill } = Object.fromEntries(
  skills.map((skill) => [skill.name, skill])
);


const projects: Project[] = [
  {
    title: "An Enterprise Scale system for a K-12 school district",
    src: "/enterprise.png",
    skills: [ "React", "MongoDB", "Express", "Node.js", "JavaScript", "NoSQL", "Apache", "Ubuntu", "Linux", "Git"].map((name) => skillMap[name]),
  },
  {
    title: "A charity website that funded villains; used by donators, villains, and managers",
    src: "/charity.png",
    skills: ["Angular", "TypeScript", "Spring Boot", "Java", "Node.js", "JaCoCo", "SonarQube", "Docker", "Trello", "Git"].map((name) => skillMap[name]),
  },
  {
    title: "A back-end system to store Dungeons & Dragons characters",
    src: "/Twenty_sided_dice.png",
    skills: ["Python", "PostgreSQL", "SQL", "Flask", "Github Actions (CI)", "Git"].map((name) => skillMap[name]),
  },
  {
    title: "A Comic book database application that employed a multitude of software design patterns",
    src: "/comix.png",
    skills: ["Java", "PostgreSQL", "SQL", "SonarQube", "Trello", "Git"].map((name) => skillMap[name]),
  },
]


export default function Experience() {
  const [selectedSkill, setSelectedSkill] = React.useState<string | null>(null);
  const [filteredSkill, setFilteredSkill] = React.useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [filteredSkills, setFilteredSkills] = React.useState(skills.sort((a, b) => a.name.localeCompare(b.name)));

  const handleSkillClick = (skill: string) => {
    // unselect if already selected
    if (selectedSkill === skill) {
      setSelectedSkill(null);
      return;
    }

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
      <div className="flex-grow mt-4 relative w-11/12 lg:w-[800px]">   

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

                  {skill.src && 
                    <div className="flex justify-center items-center">
                      <Image className="h-5 w-5" src={skill.src} alt={skill.name + " logo"} height={20} width={20} />
                    </div>
                  }
                  {skill.name}
                </Button>
              ))
            }
          </ul>
          <div className="flex flex-col justify-center items-center">
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
        
        <footer className="mt-12 flex flex-col justify-center items-center">
            <p className="text-sm absolute bottom-2">
              © 2024 / Evan Kinsey / <Link href="/credits" className="link">Credits</Link>
            </p>
        </footer>
      </div>
    </div>   
  );
}