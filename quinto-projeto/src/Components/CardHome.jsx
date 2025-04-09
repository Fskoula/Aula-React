import React from 'react'
import "./CardHome.css"

export default function CardHome({img, titulo}) {
    
  return (
    <div className='home'>
        <div className="img">
            <img src={img} alt="" />
        </div>
        <div className="infos">
            <p className="titulo">{titulo}</p>
        </div>
    </div>
  )
}
