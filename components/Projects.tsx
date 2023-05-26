import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { KodeFlix } from "@/public/assets";
import { PrintStudio } from "@/public/assets";

function Projects() {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title="Some Things I Have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://martydmarbella.github.io/FinalKodeFlix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={KodeFlix}
                alt="KodeFlix"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">KodeFlix Movies</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A Movie Library website that offers a catalog of movies.providing users with detailed information, trailers, and recommendations for each film.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/martyDmarbella/print-studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={PrintStudio}
                alt="PrintStudio"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
            </p>
            <h3 className="text-2xl font-bold">Print Studio</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A website For people that needs innovative and
              High Quality Printing Solutions With a vast selection
              of High Quality Products.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap 5</li>
              <li>react</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
