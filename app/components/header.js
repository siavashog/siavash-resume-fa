'use client'
import React from 'react'

import {motion} from "framer-motion";
import {navVariants} from "../motion/motion";

const Header = () => {
  return (
    <motion.nav
      variants={navVariants}
    initial="hidden"
    whileInView="show"
      className='hidden md:flex md:flex-row justify-start px-3 duration-300 hover:scale-[102%]'>
      <div className=' duration-300 flex hover:tracking-wider items-center justify-center text-center p-4 cursor-pointer hover:drop-shadow-lg	  rounded-2xl'>
        <a className='text-white text-xl ' href="/#about">
          مشخصات
        </a>
      </div>
      <div className=' duration-300 flex hover:tracking-wider items-center justify-center text-center p-4 cursor-pointer hover:drop-shadow-lg	hover:scale-[102%]  rounded-2xl'>
        <a className='text-white text-xl ' href="/#JobHistory">
          سوابق شغلی
        </a>
      </div>
      <div className=' duration-300 flex hover:tracking-wider items-center justify-center text-center p-4 cursor-pointer hover:drop-shadow-lg	hover:scale-[102%]  rounded-2xl'>
        <a className='text-white text-xl ' href="/#aboutMe">
          درباره من
        </a>
      </div>
      {/*<div className=' duration-300 flex hover:tracking-wider items-center justify-center text-center p-4 cursor-pointer hover:drop-shadow-lg	hover:scale-[102%]  rounded-2xl'>*/}
      {/*  <a className='text-white text-xl ' href="/#about">*/}
      {/*    علاقه مندی*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<div className=' duration-300 flex hover:tracking-wider items-center justify-center text-center p-4 cursor-pointer hover:drop-shadow-lg	hover:scale-[102%]  rounded-2xl'>*/}
      {/*  <a className='text-white text-xl ' href="/#about">*/}
      {/*    گالری عکس*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<div className=' duration-300 flex hover:tracking-wider items-center justify-center text-center p-4 cursor-pointer hover:drop-shadow-lg	hover:scale-[102%]  rounded-2xl'>*/}
      {/*  <a className='text-white text-xl ' href="/#about">*/}
      {/*    تماس با من*/}
      {/*  </a>*/}
      {/*</div>*/}
    </motion.nav>
  )
}
export default Header
