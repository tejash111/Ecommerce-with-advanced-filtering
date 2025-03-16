import React from 'react'
import "./Recomended.css"
import Button from '../Components/Button'

const Recomended = ({handleClick}) => {
  return (
    <div>
        <h2 className='recomended-title'>Recomended</h2>
        <div className="recomended-btns">
           <Button onClickHandler={handleClick} value="" title="All Products"/>
            <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
            <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
            <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
            <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
        </div>
    </div>
  )
}

export default Recomended