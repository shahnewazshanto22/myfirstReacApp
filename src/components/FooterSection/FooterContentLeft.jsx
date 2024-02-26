import React from 'react'
import FooterSocialLInk from './FooterSocialLInk'
import facebook from '../../Assets/instragram.svg'
import instragram from '../../Assets/instragram.svg'
import twitter from '../../Assets/twitter.svg'
import youtube from '../../Assets/youtube.svg'
function FooterContentLeft() {
    return (
        <div className='w-[45%]'>
            <a href="#" className='logo text-[#28B463] text-4xl font-bold' >DEBUG ENTITY</a>
            <p className=' text-xl text-white mt-5 pr-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore tenetur id tempore dolor nisi perspiciatis alias modi quos laboriosam.</p>
            <div className='flex gap-5 mt-9'>
                <FooterSocialLInk
                    footerImage={instragram}
                />
                <FooterSocialLInk
                    footerImage={instragram}
                />
                <FooterSocialLInk
                    footerImage={twitter}
                />
                <FooterSocialLInk
                    footerImage={youtube}
                />
            </div>


        </div>
    )
}

export default FooterContentLeft