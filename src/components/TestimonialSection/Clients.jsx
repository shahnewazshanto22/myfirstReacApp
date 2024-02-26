import React from 'react'

function Clients({ isImage, myself, isName, title }) {
    return (
        <div className=' py-10 px-5 bg-[#e2e8f0] rounded-2xl w-[30%] text-center border-2 hover:border-2 hover:border-[#28B463] transition-all shadow-lg'>
            <div className='flex justify-center'>
                <img className='w-[150px]' src={isImage} alt="Web Developer" />
            </div>
            <p className=' font-normal text-lg pt-5'>{myself}</p>
            <h4 className=' text-[#28B463] font-semibold text-2xl py-2'>{isName} </h4>
            <h5 className=' text-lg'>{title}</h5>
        </div>
    )
}

export default Clients