import React from 'react';
import banner from '../../Assets/banner.png';
import { motion } from 'framer-motion'
function HeroImage() {
    return (
        <motion.div className=' w-full md:w-[50%] lg:w-[50%] flex justify-center md:justify-end mt-16 lg:mt-0'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, }}
        >
            <img src={banner} alt="HeroImage w-full" className='truncate h-[400px]' />
        </motion.div>
    )
}

export default HeroImage