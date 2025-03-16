import React from 'react'
import "./Category.css"
import Input from "../../Components/Input"

const Category = () => {
  return (
    <div>
      <h2 className='sidebar-title'> Category</h2>

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

export default Category