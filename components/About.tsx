import SectionTitle from "./SectionTitle";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap, SiPhp, SiPreact, SiLaravel, SiJavascript, SiNextdotjs } from "react-icons/si";
import Image from 'next/image';
import profileImg from '../public/assets/images/aboutme.jpg';

function About() {
    return (
        <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle title="About Me" titleNo="01" />
            <div className="flex flex-col-reverse lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 textBase text-textDark font-medium flex flex-col gap-4">
                    <p>
                        I recently earned my Full Stack Developer certification from KodeGo
                        bootcamp with an award of most active student and Best Capstone Project. 
                        They taught me the fundamentals and more complex ideas
                        of front-end and back-end web programming. I gained the skills necessary
                        to build completely functional websites thanks to their instruction.
                    </p>
                    <p>
                        Despite my lack of work experience and a degree in computer-related courses, 
                        it doesn't bother me! I am determined and do not believe in giving up. I
                        possess a solid foundation in development skills and have a strong desire to 
                        continue learning and expanding my knowledge.
                    </p>
                    <p>Here are a few technologies I have been working with recently:</p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-4">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillHtml5 /></span>HTML
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><IoLogoCss3 /></span>CSS
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><SiJavascript /></span>Javascript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><SiBootstrap /></span>Bootstrap 5
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><SiPreact /></span>React
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><SiNextdotjs /></span>Next.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><SiPhp /></span>PHP
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><SiLaravel /></span>Laravel
                        </li>
                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -right-6 -top-6 rounded-lg">
                        <div className="w-full h-full relative z-20 flex pr-6 lgl:pr-0">
                            <Image className="rounded-lg h-full object-cover" src={profileImg} alt="profileImage" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
