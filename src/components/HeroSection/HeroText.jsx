import React from 'react'

function HeroText() {
    return (
        <div className='w-[50%]'>
            <h2 className=' text-[#28B463] font-bold text-6xl leading-[70px] mb-7'>One-click solution for your static website.</h2>
            <p className='text-black font-normal text-2xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, distinctio.</p>
            <div className='mt-7'>
                <button className='text-xl text-white bg-[#28B463] py-3 px-6 capitalize rounded-md hover:bg-black transition-all'>
                    view more
                </button>
                <button className='text-xl text-[#28B463] border-[#28B463] border-2 py-3 px-6 capitalize rounded-md hover:border-black hover:border-2 hover:text-black transition-all ms-8'>
                    watch video
                </button>
            </div>
        </div>
    )
}

export default HeroText