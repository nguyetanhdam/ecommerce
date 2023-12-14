import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online platform that allows users to browse,
            choose, and purchase products or services. Our platform offers a wide range
            of high-quality products, ensuring a convenient and secure shopping experience
            for our customers. Explore our catalog to discover the latest trends and
            find the perfect items to meet your needs.
            </p>
            <p>E-commerce website typically displays products or services through
            a user-friendly interface. Users can navigate categories, view detailed
            product information, and see high-quality images to make informed decisions.
            Our platform is designed to provide a seamless shopping experience, allowing
            customers to easily add items to their cart, proceed to checkout, and track
            their orders. Explore the diverse range of products available and enjoy the
            convenience of online shopping with us.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox