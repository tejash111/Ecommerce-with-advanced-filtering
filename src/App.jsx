import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recomended from './Recomended/Recomended'
import "./App.css"
import Sidebar from './SideBar/Sidebar'

//database
import products from "./db/data.jsx"
import Category from './SideBar/Category/Category'
import Card from './Components/Card'

const App = () => {
  const [selectedCategory,setSelectedCategory]=useState(null)

  //-----input filter----
  const [query,setQuery]=useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
)

// ----radio filter ----
const handleChange = event => {
  setSelectedCategory(event.target.value)
}

//----button filter-----
const handleClick = event => {
  setSelectedCategory(event.target.value)
}

function filteredData(products,selected,query){
  let filteredProducts = products

  //filtering input items
  if(query){
    filteredProducts = filteredItems
  }

  //selected filter
  if (selected){
    filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) => category === selected || color === selected || company === selected || newPrice === selected || title ===selected 
  );
  }

  return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) => (
    <Card key={Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews={reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice}
    />
))
  
}

  return (
    <div>
      <Sidebar/>
      <Nav/>
      <Recomended/>
      <Products/>
      
    </div>
  )
}

export default App