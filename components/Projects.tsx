import Image from "next/image";
import SectionTitle from "./SectionTitle";
import KodeFlix from "../public/assets/images/kode.png";
import PrintStudio from "../public/assets/images/PrintStudio.png";
import Event from "../public/assets/images/event.png";

function Projects() {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
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
              A Movie Library website that offers a catalog of movies, providing users with detailed information, trailers, and recommendations for each film.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>

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
           
            <h3 className="text-2xl font-bold">Print Studio</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A website for people that need innovative and high-quality printing solutions with a vast selection of high-quality products.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap 5</li>
              <li>React</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/martyDmarbella/enchanting-affairs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={Event}
                alt="Event"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            
            <h3 className="text-2xl font-bold">Enchanting Affairs</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A website for managing and organizing events, providing users with event information, registration, and other related features.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React Js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
