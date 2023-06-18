'use client'

import Image from 'next/image'
import About from "./components/About";
import JobHistory from "./components/JobHistory";
import Skills from "./components/skills";
import Header from "./components/header";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <>

      <motion.div
        initial={{
                opacity:0,
            }}
        animate={{
                opacity:1,
            }}
            transition={{
                duration:1,

            }}
        className='snap-y   snap-mandatory scrollbar '>
          <Header/>
        <section id='about' className='snap-start flex justify-center'>
          <About/>
        </section>
        <section id='JobHistory' className='snap-center  '>
          <JobHistory/>
        </section>
        <section id='aboutMe' className='snap-start'>
          <Skills/>
        </section>

      </motion.div>
    </>
  )
}
