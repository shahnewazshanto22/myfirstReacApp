import React from 'react'
import ContactInfo from './ContactInfo'
import ContactInput from './ContactInput'
function ContactMain() {
    return (
        <div id='contact' className='w-[70%] mx-auto flex justify-between items-center py-5 px-8 rounded-lg bg-white h-[500px] z-20'>
            <ContactInfo
            />

            <ContactInput />
        </div>
    )
}

export default ContactMain