import React from 'react'
import FooterRightItems from './FooterRightItems'

function FooterContentRignt() {
    return (
        <div className='w-[55%] flex justify-around'>
            <FooterRightItems
                itemsHead="PAGES"
                isHome="home"
                Services="Services"
                Testimonials="Testimonials"
                isPricing="Pricing"
                isContact="Contact"
            />
            <FooterRightItems
                itemsHead="PAGES"
                isHome="home"
                Services="Services"
                Testimonials="Testimonials"
                isPricing="Pricing"
                isContact="Contact"
            />
            <FooterRightItems
                itemsHead="PAGES"
                isHome="home"
                Services="Services"
                Testimonials="Testimonials"
                isPricing="Pricing"
                isContact="Contact"
            />
        </div>
    )
}

export default FooterContentRignt