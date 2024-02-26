import React from 'react'

function ContactInput() {
    return (
        <div className='w-[50%] rounded-2xl'>
            <input type="text" name="name" id="name" placeholder='Enter your Name' className='block w-full bg-[#f1f5f9] p-4 border-2 border-[#22c55e] rounded-xl text-xl focus:border-0 mb-3' />
            <input type="email" name="name" id="name" placeholder='Enter your email address' className='block w-full bg-[#f1f5f9] p-4 border-2 border-[#22c55e] rounded-xl text-xl focus:border-0 mb-3' />
            <textarea name="textarea" id="textarea" placeholder='Enter your message ' className='block w-full bg-[#f1f5f9] p-4 border-2 border-[#22c55e] rounded-xl text-xl focus:border-0 mb-3'></textarea>
            <div className=''>
                <button className=' w-full text-xl text-white bg-[#15803d] py-3 px-6 rounded-md hover:bg-black transition-all uppercase'>
                    submit
                </button>
            </div>

        </div>
    )
}

export default ContactInput