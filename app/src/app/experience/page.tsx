import "@/styles/globals.css";
import "@/styles/animations.css";
import { FilterSelect } from "@/components/ShadCnSelect";
import { ProjectCard } from "@/components/ShadCnCard";

const components: { title: string; src: string; description: string }[] = [
  {
    title: "Web Engineering",
    src: "/150.svg",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Enterprise Systems",
    src: "/150.svg",
    description:
      "For sighted users to preview content available behind a link.",
  },
]


export default function Experience() {
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

          <ul className="grid w-[400px] mt-4 gap-8 md:grid-cols-2 md:w-[800px] ">
              {components.map((component) => (
                <ProjectCard 
                key={component.title} 
                title={component.title}
                src={component.src}
                />
              ))}
          </ul>

        </div>

      </div>
    </div>   
  );
}