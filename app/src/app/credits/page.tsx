import "@/styles/globals.css";
import "@/styles/animations.css";
import Link from "next/link";


export default function Credits() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center"> 
      <div className="flex-grow mt-4 relative w-11/12 md:w-[700px] lg:w-[800px]">   

        <header>
          <div className="inline-block mt-2">
            <h1 className="">Credits</h1>
            <hr className="border-t-2 border-black mt-2 w-[115%]" />
          </div>
        </header>

        <div>
          <p className="my-4 text-sm">
            You can download or view the credits document here: <Link className="link" href="https://docs.google.com/document/d/1yugqlkTeK1zBSXoIZg9V8M21ysLVpSM0OXEmoN_hD0w/edit?usp=sharing">Portfolio Credits</Link>
          </p>
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