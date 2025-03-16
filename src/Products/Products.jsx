import React from 'react'
import "./Products.css"
import { FaStar } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import Card from '../Components/Card';


const Products = () => {
  return (
   <div className='card-container'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   </div>
  )
}

export default Products