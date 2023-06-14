'use client'

import React from 'react'
import Instagram from '/public/Instagram_simple_icon.svg'
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../motion/motion";

const Skills = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0, 0.5)}
      initial="hidden"
      whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
      className="flex items-center justify-center mb-[10px]  bg-transparent">
      <div className="bg-white flex flex-col text-center justify-center shadow-2xl p-2  md:w-[700px] rounded-2xl">
      <div className='text-6xl border-b pb-12 p-6  ' >
        <h1 className='tracking-wider font-bold'>درباره من !</h1>
      </div>
        <div className='flex flex-col justify-center items-center '>
          <div className='px-6 pt-5 pb-7'>

            <h4 className='text-4xl tracking-wide font-semibold text-center'>
              مهارت ها
            </h4>
          </div>
          <div className='flex mb-3 flex-col border-t-2 items-center justify-center'>

            <div className='text-xl mt-2 tracking-widest uppercase'>
              next js

            </div>
            <div className='flex flex-col  justify-center  items-center  w-[400px]'>

              <div className="flex justify-between">
                <span className="text-lg font-medium text-black">90%</span>
              </div>
              <div className="w-full bg-grade-2 rounded-2xl  h-2.5 ">
                <div className="bg-black h-2.5 rounded-r-2xl  w-[10%]"></div>
              </div>
            </div>
          </div>
          <div className='flex mb-3 flex-col border-t-2 items-center justify-center'>

            <div className='text-xl mt-2 tracking-widest uppercase'>
              react js

            </div>
            <div className='flex flex-col  justify-center  items-center  w-[400px]'>

              <div className="flex justify-between">
                <span className="text-lg font-medium text-black">90%</span>
              </div>
              <div className="w-full bg-grade-2 rounded-2xl  h-2.5 ">
                <div className="bg-black h-2.5 rounded-r-2xl  w-[10%]"></div>
              </div>
            </div>
          </div>
          <div className='flex mb-3 flex-col border-t-2 items-center justify-center'>

            <div className='text-xl mt-2 tracking-widest uppercase'>
              tailwind css

            </div>
            <div className='flex flex-col  justify-center  items-center  w-[400px]'>

              <div className="flex justify-between">
                <span className="text-lg font-medium text-black">90%</span>
              </div>
              <div className="w-full bg-grade-2 rounded-2xl  h-2.5 ">
                <div className="bg-black h-2.5 rounded-r-2xl  w-[10%]"></div>
              </div>
            </div>
          </div>
          <div className='flex mb-3 flex-col border-t-2 items-center justify-center'>

            <div className='text-xl mt-2 tracking-widest uppercase'>
              type script

            </div>
            <div className='flex flex-col  justify-center  items-center  w-[400px]'>

              <div className="flex justify-between">
                <span className="text-lg font-medium text-black">50%</span>
              </div>
              <div className="w-full bg-grade-2 rounded-2xl  h-2.5 ">
                <div className="bg-black h-2.5 rounded-r-2xl  w-[50%]"></div>
              </div>
            </div>
          </div>
          <div className='flex mb-3 flex-col border-t-2 items-center justify-center'>

            <div className='text-xl mt-2 tracking-widest uppercase'>
              html & css

            </div>
            <div className='flex flex-col  justify-center  items-center  w-[400px]'>

              <div className="flex justify-between">
                <span className="text-lg font-medium text-black">90%</span>
              </div>
              <div className="w-full bg-grade-2 rounded-2xl  h-2.5 ">
                <div className="bg-black h-2.5 rounded-r-2xl  w-[10%]"></div>
              </div>
            </div>
          </div>
          <div className='flex mb-3 flex-col border-t-2 items-center justify-center'>

            <div className='text-xl mt-2 tracking-widest uppercase'>
              Express js

            </div>
            <div className='flex flex-col  justify-center  items-center  w-[400px]'>

              <div className="flex justify-between">
                <span className="text-lg font-medium text-black">40%</span>
              </div>
              <div className="w-full bg-grade-2 rounded-2xl  h-2.5 ">
                <div className="bg-black h-2.5 rounded-r-2xl  w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t-2'>
          <div className='p-4'>
            <h4 className='text-4xl tracking-wide font-semibold text-center'>
              علاقه مندی
            </h4>
          </div>
          <div className='flex flex-col  text-center space-y-3 md:text-center border-b-2'>
            <div className='flex flex-row items-center justify-center'>

              <div className='flex justify-center items-center px-2 '>

                <p className="text-sm font-light text-gray-600 ">ادیت کردن فیلم و سریال ها</p>
              </div>
              <div className='flex justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-4 h-4 animate-pulse">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

              </div>

            </div>
            <div className='flex flex-row items-center justify-center'>

              <div className='flex justify-center items-center px-2 '>

                <p className="text-sm font-light text-gray-600 ">بدنسازی</p>
              </div>
              <div className='flex justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-4 h-4 animate-pulse">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

              </div>

            </div>
            <div className='flex flex-row items-center justify-center '>

              <div className='flex justify-center items-center px-2 '>

                <p className="text-sm font-light text-gray-600 ">بوکس</p>
              </div>
              <div className='flex justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-4 h-4 animate-pulse">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

              </div>

            </div>
            <div className='flex flex-row items-center justify-center '>

              <div className='flex justify-center items-center px-2 '>

                <p className="text-sm font-light text-gray-600 ">فوتبال</p>
              </div>
              <div className='flex justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-4 h-4 animate-pulse">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

              </div>

            </div>
            <div className='flex flex-row items-center justify-center '>

              <div className='flex justify-center items-center px-2 '>

                <p className="text-sm font-light text-gray-600 ">برنامه نویسی</p>
              </div>
              <div className='flex justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-4 h-4 animate-pulse">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

              </div>

            </div>
            <div className='flex flex-row items-center justify-center'>

              <div className='flex justify-center items-center px-2 '>

                <p className="text-sm font-light text-gray-600 ">شطرنج</p>
              </div>
              <div className='flex justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-4 h-4 animate-pulse">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

              </div>

            </div>
            <div className='flex flex-row items-center justify-center '>

              <div className='flex justify-center items-center px-2 '>

                <p className="text-sm font-light text-gray-600 ">عکاسی</p>
              </div>
              <div className='flex justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-4 h-4 animate-pulse">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

              </div>

            </div>
            <div className='flex flex-row items-center justify-center pb-7'>

              <div className='flex justify-center items-center px-2 '>

                <p className="text-sm font-light text-gray-600 ">دیزاین لوگو</p>
              </div>
              <div className='flex justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-4 h-4 animate-pulse">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

              </div>

            </div>
          </div>
        </div>
        <div className='border-t-2'>
          <div className='p-4'>
            <h4 className='text-4xl tracking-wide font-semibold text-center'>
              تماس با من
            </h4>
          </div>
          <div className="mt-32 mx-auto md:px-6">
            <section className="mb-32">
              {/*<div*/}
              {/*  className="relative h-[100px] overflow-hidden bg-transparent bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]">*/}
              {/*</div>*/}
              <div className="container  px-6 md:px-12">
                <div
                  className="block bg-transparent px-6 py-12   md:py-16 md:px-8 -mt-[150px]">
                  <div className="mb-6 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="mx-auto mb-12 text-center lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                           stroke="currentColor" className="mx-auto mb-6 h-8 w-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"/>
                      </svg>
                      <h6 className="font-medium">ایران</h6>
                    </div>
                    <div className="mx-auto mb-12 text-center lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                           stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                      </svg>
                      <h6 className="font-medium">کرج</h6>
                    </div>
                    <div className="mx-auto mb-6 text-center md:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                           stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                      </svg>
                      <h6 className="font-medium">۰۹۱۲۰۲۳۷۲۸۱</h6>
                    </div>
                    <div className="mx-auto text-center">
                      <Image src={Instagram} alt={'instagram'} className='mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400'/>
                      <h6 className="font-medium tracking-wider">siavash_og</h6>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
        {/*<div className="flex flex-col  rounded-l-xl">*/}


        {/*  <div className=' w-[300px] space-y-6 md:space-y-0 md:w-[500px] flex overflow-x-scroll*/}
        {/*    overflow-y-hidden snap-x snap-mandatory z-20*/}
        {/*    scrollbar scrollbar-track-gray-400/20  scrollbar-thin*/}
        {/*    '>*/}


        {/*    </div>*/}


        {/*</div>*/}

      </div>
    </motion.div>
  )
}
export default Skills
