import React from 'react'

function Menu() {
    return (
        <div>
            <ul className='flex text-white font-semibold text-xl capitalize leading-[80px]'>
                <li><a href="#home" className='px-4 hover:bg-[#28B463] py-2 rounded'>home</a></li>
                <li><a href="#services" className='px-4 hover:bg-[#28B463] py-2 rounded'>services</a></li>
                <li><a href="#testimonials" className='px-4 hover:bg-[#28B463] py-2 rounded'>testimonials</a></li>
                <li><a href="#pricing" className='px-4 hover:bg-[#28B463] py-2 rounded'>pricing</a></li>
                <li><a href="#contact" className='px-4 hover:bg-[#28B463] py-2 rounded'>contact</a></li>
            </ul>
        </div>
    )
}

export default Menu