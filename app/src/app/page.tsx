import { NavigationMenuDemo } from "@/app/NavigationMenuDemo"
import './globals.css'


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center"> 
      <div className="w-11/12 md:w-7/12">   
        <NavigationMenuDemo />

        <h1 className="">Welcome!</h1>

        <p className="my-4">
          Hello 👋🏻 My name is <b>Evan Kinsey</b>!
        </p>

        <p className="my-4">
          I&apos;m a...
        </p>

        <p className="my-2 mt-8">
          Third-year student at RIT studying...
        </p>

        <h2 className="mb-12">
          Software Engineering
        </h2>

        <p>
          A Google certified...
        </p>

        <h2 className="mb-12">
          Data Analyst
        </h2>

        <p>
          I specialize in making the complex simple. Whether it&apos;s making <b>robust applications</b> or <b>powerful data visualizations</b>, I prioritize finding elegant solutions.
        </p>

        <p className="my-8">
          To read more about me and my work ethic, you can head to my About Me page.
        </p>

        <p className="my-8">
          To see my skills and completed projects, you can head to my Experience page.
        </p>


      </div>
    </div>

  );
}
