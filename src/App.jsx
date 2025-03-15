import React from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recomended from './Recomended/Recomended'
import "./App.css"
import Sidebar from './SideBar/Sidebar'

const App = () => {
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