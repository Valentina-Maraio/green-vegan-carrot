import React from 'react'
import './style/BannerResults.css'
import recipes from '../../assets/images/recipes.png'

const BannerResults = () => {
    return (
        <div>
            <img
                className='recipes'
                alt="recipes"
                src={recipes}
            />
        </div>
    )
}

export default BannerResults