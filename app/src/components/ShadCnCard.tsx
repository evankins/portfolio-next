import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  src: string;
}

export function ProjectCard({ title, src }: ProjectCardProps) {
  return (
    <Card className="h-[240px] w-[380px] relative">
        <div className="absolute top-20 left-4">
            <p className="text-sm">{title}</p>
        </div>
        <div className="absolute bottom-4 right-4">
            <Image src={src} alt={title} width={150} height={150} className="rounded-md" />
        </div>
        <div className="absolute bottom-4 left-4">
            <Button className="hover:bg-slate-200 transition duration-300 rounded-md" variant="outline">View Project</Button>
        </div>
    </Card>
  );
}