import '@/app/globals.css'
import '@/app/animations.css'


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
            About Me page in progress!
          </p>
        </div>



      </div>
    </div>   
  );
}