import React from 'react'
import { Button, Spacer } from '@nextui-org/react'
import './style/DessertFiltro.css'

const DessertFiltro = () => {
  return (
    <>
      <div className='filtro-btn'>
        <Button  size="xs">Reset</Button>
        <Spacer y={0.5} />
        <Button size="xs">Gluten Free</Button>
        <Spacer y={0.5} />
        <Button size="xs">Lactose Free</Button>
      </div>
    </>
  )
}

export default DessertFiltro