import React from 'react';
import './style/DessertBanner.css';
import sweets from '../../assets/images/vegan_sweets.png'

const DessertBanner = () => {
    return (
        <div className='dessert-banner'>
            <img className="sweets" src={sweets} alt="vegan_sweets"/>
        </div>
    )
}

export default DessertBanner