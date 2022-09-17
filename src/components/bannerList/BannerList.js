import React from 'react'
import './style/BannerList.css'
import { Image } from "@nextui-org/react";

const BannerList = () => {
    return (
        <div className='list-banner'>
            <Image
                objectFit="cover"
                alt="Default Image"
                height={300}
            />
        </div>
    )
}

export default BannerList