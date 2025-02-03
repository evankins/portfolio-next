import "@/styles/globals.css";
import "@/styles/animations.css";
import Image from 'next/image'
import Link from 'next/link'
import { RevealFx } from "@/once-ui/components/RevealFx";


export default function Home() {
  return (
    <RevealFx
      speed="fast"
      delay={0}
      translateY={0}
    >
      <div className="min-h-screen flex flex-col justify-center items-center"> 
        <div className="mt-4 flex-grow relative w-11/12 md:w-[700px] lg:w-[800px]">   

          <header>
            <div className="inline-block mt-2">
              <h1 className="">Welcome!</h1>
              <hr className="border-t-2 border-black mt-2 w-[115%]" />
            </div>
          </header>

          <div>
            <p className="my-4">
              Hello 👋🏻 My name is <b>Evan Kinsey</b> <Image 
                src="/evan-kinsey-img.PNG" alt="Evan Kinsey"       
                width={100}
                height={100}
                className="inline-block w-8 h-8 rounded-full mr-2" 
                />
            </p>

            <p className="my-4">
              I&apos;m a...
          </p>
          </div>

          <div>
            <p className="my-2 mt-8">
              Third-year student at <span className="text-orange-600 font-bold">RIT</span> studying...
            </p>

            <h2 className="mb-12 text-orange-600">
              Software Engineering
            </h2>

            <p className="my-2">
              A <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span> certified...
            </p>

            <h2 className="mb-12 text-cornflower-blue">
              Data Analyst
            </h2>

            <p>
              I specialize in making the complex simple. Whether it&apos;s making <b>robust applications</b> or <b>powerful data visualizations</b>, I prioritize finding elegant solutions.
            </p>

          </div>

          <footer className="mt-12 flex flex-col justify-center items-center">
              <p className="text-sm absolute bottom-2">
                © 2024 / Evan Kinsey / <Link href="https://github.com/evankins" className="link">GitHub</Link> / <Link href="https://www.linkedin.com/in/evan-kinsey/" className="link">LinkedIn</Link> / <Link href="/credits" className="link">Credits</Link>
              </p>
          </footer>
        </div>
      </div>
    </RevealFx>
  );
}
