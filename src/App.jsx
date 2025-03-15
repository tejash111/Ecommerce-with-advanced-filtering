import React from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recomended from './Recomended/Recomended'
import "./App.css"

const App = () => {
  return (
    <div>
      <Nav/>
      <Products/>
      <Recomended/>
    </div>
  )
}

export default App