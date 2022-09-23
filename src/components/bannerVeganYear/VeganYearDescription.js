import React from 'react'
import './style/VeganYearDescription.css'
import vegan_year from '../../assets/images/vegan_year.png'


const VeganYearDescription = () => {
    return (
        <div className='description'>
            <img
                className='vegan_year'
                src={vegan_year}
                alt="vegan_year"
            />
        </div>
    )
}

export default VeganYearDescription