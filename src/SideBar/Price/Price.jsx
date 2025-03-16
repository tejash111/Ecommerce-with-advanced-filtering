import React from 'react'
import "./Price.css"
import Input from "../../Components/Input"

const Price = () => {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>
      
      <div className='sidebar-items'>
       
       <Input/>
       <Input/>
       <Input/>
       <Input/>
       <Input/>

      </div>

    </div>
  )
}

export default Price