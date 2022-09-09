import React from 'react'
import './style/DessertIntroduction.css'
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react'

const DessertButtonPage = () => {
  return (
    <div className='introduction'>
        <Link to='/dessertpage'>
          <Button>More dessert</Button>
        </Link>
    </div>
  );
}

export default DessertButtonPage