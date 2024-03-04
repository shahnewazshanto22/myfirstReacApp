import React from 'react'
import { motion } from 'framer-motion'

function HeroText() {
    return (
        <motion.div className=' w-full md:w-[50%] lg:w-[50%]'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, }}
        >
            <h2 className=' text-[#28B463] font-bold text-4xl text-center md:text-left md:text-5xl md:leading-[70px] lg:text-left lg:text-6xl lg:leading-[70px] leading-[50px] lg:mb-7 mb-5'>One-click solution  for your static website.</h2>
            <p className='text-black font-normal lg:text-2xl text-xl text-center md:text-left lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, distinctio.</p>
            <div className='mt-7 flex gap-3 lg:gap-7 justify-center md:justify-start lg:justify-start'>
                <button className='text-xl text-white bg-[#28B463] lg:py-3 py-2 lg:px-6 px-3 capitalize rounded-md hover:bg-black transition-all'>
                    view more
                </button>
                <button className='text-xl text-[#28B463] border-[#28B463] border-2 lg:py-3 py-2 lg:px-6 px-3 capitalize rounded-md hover:border-black hover:border-2 hover:text-black transition-all '>
                    watch video
                </button>
            </div>
        </motion.div>
    )
}

export default HeroText