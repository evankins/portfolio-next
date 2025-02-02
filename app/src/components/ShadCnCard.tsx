import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Skill } from "@/app/projects/page";
import { Portal } from "@radix-ui/react-tooltip";

interface ProjectCardProps {
  title: string,
  color: string,
  src: string,
  skills: Skill[]
}

export function ProjectCard({ title, color, src, skills }: ProjectCardProps) {
  return (
    <Card className={"h-[320px] w-[380px] relative " + color}>
        <div className="m-2 mx-3 absolute bottom-0">
            <ul className="flex flex-row items-center flex-wrap">
                {skills.map((skill, index) => (
                    <TooltipProvider key={index} >
                        <Tooltip>
                            {skill.src && 
                            <TooltipTrigger className="m-1 rounded-md p-1 h-[27px] bg-white w-[27px]" >   
                                <div className="flex justify-center items-center">
                                    <Image className="h-4 w-auto" src={skill.src} alt={skill.name + " logo"} height={18} width={18} />
                                </div>
                            </TooltipTrigger>}
                            {skill.src &&
                                <Portal>
                                    <TooltipContent className="bg-white text-sm">
                                        <p className="text-sm">{skill.name}</p>
                                    </TooltipContent>
                                </Portal>
                            }
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </ul>
        </div>

        <div className="flex justify-between m-4">
            <p className="text-slate-50 text-center md:text-left">{title}</p>
            <Button className="bg-slate-50 hover:bg-slate-200 transition duration-300 rounded-md" variant="outline">View</Button>
        </div>
        <div className="flex justify-center items-center w-full">
            <Image src={src} alt={title} width={320} height={180} className="rounded-md h-[194px] w-[345px]" />
        </div>
    </Card>
  );
}