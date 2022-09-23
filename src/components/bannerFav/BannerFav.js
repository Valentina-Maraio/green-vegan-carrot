import React from 'react'
import './style/BannerFav.css'
import logo from '../../assets/images/home_banner_name.png'

const BannerFav = () => {
    return (
        <div className='img'>
            <img src={logo} alt="favRec" />
        </div>
    )
}

export default BannerFav