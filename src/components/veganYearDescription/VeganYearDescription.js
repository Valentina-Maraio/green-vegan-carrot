import React from 'react'
import './style/VeganYearDescription.css'
import { Image } from "@nextui-org/react";


const VeganYearDescription = () => {
    return (
        <div className='description'>
            <Image
                objectFit="cover"
                alt="Default Image"
            />
        </div>
    )
}

export default VeganYearDescription