import React from 'react'
import "./Nav.css"
import { FiHeart } from 'react-icons/fi'
import { CiShoppingCart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";





const Nav = () => {
    return (
        <nav>
            <div className='nav-container'>
                <input type="text" className='search-input' placeholder='Enter your search shoes'/>

            </div>

            <div className="profile-container">
                <a href="">
                    <FiHeart className='nav-icons'/>
                </a>

                <a href="">
                    <CiShoppingCart className='nav-icons'/>
                </a>
                <a href="">
                    <FaUser  className='nav-icons'/>
                </a>


            </div>
        </nav>
    )
}

export default Nav