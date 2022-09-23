import React from 'react'
import './style/Banner.css'
import logo from '../../assets/images/home_banner_name.png'

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src={logo} alt="banner"/>
      </div>
    </>
  )
}

export default Banner;