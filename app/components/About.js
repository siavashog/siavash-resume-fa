import React from 'react'


import Main from '/public/Main.jpg'
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import {motion} from "framer-motion";
import {planetVariants, staggerContainer,fadeIn} from '../motion/motion'
const About = () => {

  return (
    <motion.div
    variants={fadeIn('left', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex items-center justify-center bg-transparent mt-[150px] ">

        <div className='flex flex-col p-6 m-3
    space-y-10 bg-white rounded-2xl
    shadow-2xl md:flex-row md:space-y-0
    md:space-x-10 md:m-0 md:p-16'>
          <BackgroundCircles/>


          <motion.div
          variants={planetVariants('right')}
          >
            <Image src={Main} alt="siavash maghsoudi"
                   className=" relative mx-10 ml-14 md:-mr-8 rounded-full hover:scale-[102%] hover:shadow-amber-900 hover:shadow-2xl shadow-[#251920] duration-300 w-60"/>
          </motion.div>
          <div className="flex flex-col space-y-6">

            <div className="flex flex-col mb-4 space-y-3 text-center md:text-right">
              <div>
                <div className="inline-block px-3 py-1 text-sm text- bg-grade-1 rounded-full ">
                  مشخصات
                </div>
              </div>

              <div className="max-w-small text-3xl font-medium tracking-wider">
                <h1>
                  سلام سیاوش مقصودی هستم
                </h1>
              </div>
              <div className="flex flex-col text-center space-y-3 md:text-center border-b-2">
                {/*<p className="text-5xl font-bold">$599</p>*/}
                <p className="text-sm font-light text-gray-400 pb-4">دانشجوی علوم کامپیوتر دانشگاه خوارزمی</p>

              </div>
              {/*<div className="group">*/}
              {/*  <button className="w-full bg-blue-700 text-white border-b-8*/}
              {/*      border-b-blue-700*/}
              {/*      rounded-lg*/}
              {/*      group-hover:border-t-8*/}
              {/*      group-hover:border-b-0*/}
              {/*      group-hover:bg-blue-700*/}
              {/*      group-hover:border-t-blue-700 group-hover:shadow-lg transition-all duration-150 ">*/}

              {/*    <div className="duration-150 px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-700">*/}
              {/*      add to cart*/}
              {/*    </div>*/}
              {/*  </button>*/}
              {/*</div>*/}
              <div className="flex items-center space-x-3 group">
                <div className="w-3 h-3 bg-grade-1 ml-3 mr-1 rounded-full animate-ping"></div>
                <div className="flex items-center  flex-row justify-between">
                  <p className='font-bold '>مدرک تحصیلی</p>
                  <p className='text-sm font-light text-gray-400 px-6'>دیپلم (دانشجو)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-3 h-3 bg-grade-1 ml-3 mr-1 rounded-full animate-ping"></div>
                <div className="flex items-center  flex-row justify-between">
                  <p className='font-bold '>رشته تحصیلی</p>
                  <p className='text-sm font-light text-gray-400 px-8'>علوم کامپیوتر</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-3 h-3 bg-grade-1 ml-3 mr-1 rounded-full animate-ping"></div>
                <div className="flex items-center  flex-row justify-between">
                  <p className='font-bold '>دانشگاه</p>
                  <p className='text-sm font-light text-gray-400 px-[60px]'>خوارزمی تهران</p>
                </div>
              </div>
              {/*<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">*/}
              {/*  <button className="flex items-center justify-center py-3 px-5 space-x-3*/}
              {/*      border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30*/}
              {/*      hover:shadow-lg hover:-translate-y-0.5*/}
              {/*      transition-all duration-150 ">*/}
              {/*    <img src="images/productModel/weight.png" className="w-8"/>*/}
              {/*      <span>Add to cart</span>*/}
              {/*  </button>*/}


              {/*  <button className="flex items-center justify-center py-3 px-5 space-x-3*/}
              {/*      border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30*/}
              {/*      hover:shadow-lg hover:-translate-y-0.5*/}
              {/*      transition-all duration-150 ">*/}
              {/*    <img src="images/productModel/heart.png" className="w-8"/>*/}
              {/*      <span>Add to wishlist</span>*/}
              {/*  </button>*/}
              {/*</div>*/}


            </div>


          </div>


        </div>
        <div>

        </div>


      </div>

    </motion.div>
  )
}
export default About
