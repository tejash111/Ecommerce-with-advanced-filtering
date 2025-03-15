import React from 'react'
import "./Recomended.css"

const Recomended = () => {
  return (
    <div>
        <h2 className='recomended-title'>Recomended</h2>
        <div className="recomended-btns">
            <button className='btns'>All products</button>
            <button className='btns'>Nike</button>
            <button className='btns'>Puma</button>
            <button className='btns'>Vans</button>
        </div>
    </div>
  )
}

export default Recomended