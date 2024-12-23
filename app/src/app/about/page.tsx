import "@/styles/globals.css";
import "@/styles/animations.css";

import Link from 'next/link'


export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center"> 
      <div className="flex-grow mt-4 relative w-11/12 md:w-[700px] lg:w-[800px]">   

        <header>
          <div className="inline-block mt-2">
            <h1 className="">About Me</h1>
            <hr className="border-t-2 border-black mt-2 w-[115%]" />
          </div>
        </header>

        <div>
          <p className="my-4">
            About Me page in progress! <br/>
            My <Link href="https://github.com/evankins" className="link">GitHub</Link> <br/>
            My <Link href="https://www.linkedin.com/in/evan-kinsey/" className="link">LinkedIn</Link>
          </p>
        </div>

        <footer className="mt-12 flex flex-col justify-center items-center">
            <p className="text-sm absolute bottom-2">
              © 2024 / Evan Kinsey / <Link href="https://github.com/evankins" className="link">GitHub</Link> / <Link href="https://www.linkedin.com/in/evan-kinsey/" className="link">LinkedIn</Link> / <Link href="/credits" className="link">Credits</Link>
            </p>
        </footer>

      </div>
    </div>   
  );
}