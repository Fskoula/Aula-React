import React from 'react'

export default function CardPromocao(img, titulo) {
    return (
        <div className='promo'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="titulo">
                <p>{titulo}</p>
            </div>
        </div>
    )
}
