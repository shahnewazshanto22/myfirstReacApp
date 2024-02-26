import React from 'react';
import banner from '../../Assets/banner.png';
function HeroImage() {
    return (
        <div className='w-[50%] flex justify-end'>
            <img src={banner} alt="HeroImage w-full" className='truncate h-[400px]' />
        </div>
    )
}

export default HeroImage