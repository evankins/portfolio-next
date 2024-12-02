import * as React from "react";
import { Button } from "@/components/ui/button";
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
    <Card className={"h-[260px] w-[380px] relative " + color}>
        <div className="m-2">
            <ul className="flex flex-row items-center flex-wrap">
                {skills.map((skill, index) => (
                    <TooltipProvider key={index} >
                        <Tooltip>
                            <TooltipTrigger 
                                className={"m-1 rounded-md p-1 h-[26px]"
                                    + (skill.color ? " " + skill.color : " bg-white")
                                    + (skill.src ? " w-[26px]" : "")
                                }
                            >
                                {skill.src && <Image src={skill.src} alt={skill.name + " logo"} height={18} width={18} />}
                                {!skill.src && <p className="mx-1 text-sm text-slate-50">{skill.name}</p>}
                            </TooltipTrigger>
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
        <div className="absolute top-[95px] left-4 w-[180px] text-wrap">
            <p className="text-sm font-medium text-slate-50">{title}</p>
        </div>
        <div className="absolute bottom-4 right-4">
            <Image src={src} alt={title} width={150} height={150} className="rounded-md" />
        </div>
        <div className="absolute bottom-4 left-4">
            <Button className="bg-slate-50 hover:bg-slate-200 transition duration-300 rounded-md" variant="outline">View Project</Button>
        </div>
    </Card>
  );
}