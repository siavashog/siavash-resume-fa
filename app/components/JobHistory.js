'use client'

import React from 'react'
import Image from "next/image";

import Laptop from '/public/computer-703.svg'
import Link from "next/link";
import {motion} from "framer-motion";
import {projects} from "../constants";
import {fadeIn} from "../motion/motion";
const JobHistory = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.2, 1)}
      initial="hidden"
      whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
      className="flex items-center justify-center h-screen bg-transparent">
      <div className="bg-white shadow-2xl p-2 mx-6 rounded-2xl">
        <div className='p-6'>

        <h4 className='text-4xl tracking-wide font-semibold text-center'>
                              سوابق شغلی
                            </h4>
        </div>
        <div className="flex flex-col  rounded-l-xl">
          <motion.div initial={{ y: -150, opacity: 0 }}
                            transition={{ duration:1.2 }}
                            whileInView={{ opacity:1, y:0 }}

                            viewport={{ once: true }} className='flex items-center justify-center'>
            <Image
            src={Laptop}
            alt=""
            className="object-fit rounded-xl h-24 w-24 md:h-36 md:w-36 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />

          </motion.div>

          <div className=' w-[300px] space-y-6 md:space-y-0 md:w-[500px] flex overflow-x-scroll
            overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar scrollbar-track-gray-400/20  scrollbar-thin
            '>
                {projects.map((project, i) => (
                    <div key={i} className=' flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center px-12 p-2 md:py-6 md:pb-7 md:px-44
                    '>

                        <div className='border-2 mb-6 md:mb-2 hover:shadow-md hover:rounded-lg duration-200 hover:scale-[102%] py-1 flex justify-center items-center flex-col px-3 md:px-10 max-w-6xl'>

                          <Link href={project.href}>
                            <p className='text-lg font-thin uppercase tracking-widest text-center'>
                                {project.title}
                            </p>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>


        </div>

      </div>
    </motion.div>
  )
}
export default JobHistory
