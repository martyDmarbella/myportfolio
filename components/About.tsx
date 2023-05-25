import SectionTitle from "./SectionTitle";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/Io";
import { SiBootstrap, SiPhp, SiPreact, SiLaravel, SiJavascript, SiNextdotjs } from "react-icons/Si";
import Image from 'next/image';
import profileImg from '../public/assets/images/me.png';

function About() {
    return (
        <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle title="About Me" titleNo="01" />
            <div className="flex flex-col-reverse lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 textBase text-textDark font-medium flex flex-col gap-4">
                    <p>
                        Hello! My name is Marty D. Marbella and I enjoy creating things that
                        live on the internet. My interest in web development started back in
                        2021 when I decided to try editing custom Tumblr themes - turns out
                        hacking together a custom reblog taught me a lot about HTML and CSS!
                    </p>
                    <p>
                        I recently earned my Full Stack Developer certification from KodeGo
                        bootcamp. They instructed me in the fundamentals and more complex ideas
                        of front-end and back-end web programming. I gained the skills necessary
                        to build completely functional websites thanks to their instruction.
                    </p>
                    <p>
                        Despite the fact that I have no prior experience working as a web developer,
                        I am keen to learn more and advance my knowledge in this area. I'm confident
                        that my love of technology, along with my willpower and quick learning curve,
                        will help me succeed in this position.
                    </p>
                    <p>Here are few technologies I have been working with recently:</p>
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
};

export default About;
