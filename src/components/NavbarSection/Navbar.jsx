
import React from 'react'
import Menu from './Menu'

function Navbar() {
    return (
        <div className=' w-[90%] mx-auto flex justify-between'>
            <a href="#home" className='logo text-[#28B463] text-3xl font-bold leading-[80px]'>DEBUG ENTITY</a>
            <Menu />
        </div>

    )
}

export default Navbar
