import React from 'react'

function Menu() {
    return (
        <div className='lg:w-full bg-[#22c55e] lg:bg-transparent mt-5 lg:mt-0'>

            <div id='humburger' className=' lg:hidden text-end absolute right-[5%] top-6 text-white font-medium text-2xl cursor-pointer'>Nav</div>


            <ul id='nav' className=' hidden lg:flex justify-end text-white font-semibold text-xl capitalize leading-[60px] lg:leading-[80px]'>
                <li className='hover:bg-[#28B463] hover:lg:bg-transparent text-center'><a href="#home" className='lg:px-4 hover:bg-[#28B463] py-2 rounded'>home</a></li>
                <li className='hover:bg-[#28B463] hover:lg:bg-transparent text-center'><a href="#services" className='lg:px-4 hover:bg-[#28B463] py-2 rounded'>services</a></li>
                <li className='hover:bg-[#28B463] hover:lg:bg-transparent text-center'><a href="#testimonials" className='lg:px-4 hover:bg-[#28B463] py-2 rounded'>testimonials</a></li>
                <li className='hover:bg-[#28B463] hover:lg:bg-transparent text-center'><a href="#pricing" className='lg:px-4 hover:bg-[#28B463] py-2 rounded'>pricing</a></li>
                <li className='hover:bg-[#28B463] hover:lg:bg-transparent text-center'><a href="#contact" className='lg:px-4 hover:bg-[#28B463] py-2 rounded'>contact</a></li>
            </ul>

        </div>
    )
}

export default Menu