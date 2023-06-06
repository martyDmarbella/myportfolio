import { motion } from "framer-motion";
import Image from 'next/image';
import profileImage from '../public/assets/images/me.png';
import Link from 'next/link';

function Banner() {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:order-2 ml-4 md:ml-20 xl:ml-40 "
        >
          <Image className="rounded-lg h-full object-cover border border-textGreen" src={profileImage} alt="profileImage" width={300} height={300} />
        </motion.div>
        <div className="md:order-1">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='text-lg font-titleFont tracking-wide text-textGreen mb-4'
          >
            Hi, my name is
          </motion.h3>

          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col "
          >
            Marty D. Marbella
            <span className="text-textDark mt-2 lgl:mt-4 mb-4">Web Developer.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base md:max-w-[650px] text-textDark font-medium mb-5"
          >
            As a beginner, I am aware that there will be obstacles to overcome, but I am ready to view them as chances for improvement. I firmly believe in the value of ongoing education and practice. I can&apos;t wait to work on projects with others. I&apos;m eager to work with others as it will hasten my learning process.
          </motion.p>
          <Link href="#projects" passHref>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Check out my project
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
