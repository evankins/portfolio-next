import * as React from "react";
// import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Skill } from "@/app/experience/page";

interface ProjectCardProps {
  title: string,
  color: string,
  src: string,
  skills: Skill[]
}

export function ProjectCard({ title, color, src, skills }: ProjectCardProps) {
  return (
    <Card className={"h-[320px] md:h-[240px] w-[380px] relative " + color}>
        <div className="m-2">
            <ul className="flex flex-row items-center flex-wrap">
                {skills.map((skill, index) => (
                    <TooltipProvider key={index} >
                        <Tooltip>
                            {skill.src && 
                            <TooltipTrigger className="m-1 rounded-md p-1 h-[26px] bg-white w-[26px]" >   
                                <div className="flex justify-center items-center">
                                    <Image className="h-4 w-auto" src={skill.src} alt={skill.name + " logo"} height={18} width={18} />
                                </div>
                            </TooltipTrigger>}
                            {skill.src &&
                                <TooltipContent className="bg-white text-sm">
                                    <p className="text-sm">{skill.name}</p>
                                </TooltipContent>
                            }
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </ul>
        </div>

        <div className="absolute top-[75px] left-4 w-11/12 md:w-[180px] text-wrap">
            <p className="text-base text-slate-50 text-center md:text-left">{title}</p>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:right-4">
            <Image src={src} alt={title} width={150} height={150} className="rounded-md h-[150px] w-[150px]" />
        </div>

        <div className="absolute bottom-4 left-4">
            {/*<Button className="bg-slate-50 hover:bg-slate-200 transition duration-300 rounded-md" variant="outline">View Project</Button>*/}
        </div>
    </Card>
  );
}