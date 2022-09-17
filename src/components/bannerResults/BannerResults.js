import React from 'react'
import './style/BannerResults.css'
import { Image } from "@nextui-org/react";


const BannerResults = () => {
    return (
        <div className='results-banner'>
            <Image
                objectFit="cover"
                alt="Default Image"
                height={300}
            />
        </div>
    )
}

export default BannerResults