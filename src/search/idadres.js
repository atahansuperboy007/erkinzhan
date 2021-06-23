import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { things } from '../data/product'
import '../css/style.css'

function Idadres() {
    const { id } = useParams()
    return (
        <div>
            {things.map(el => {
                if (el.id == id) {
                    return (
                        <div className="element-div">
                            <img className="element-image" src={el.img} />
                            <div className="element-div-2">
                                <h1 className="element-title" >{el.title}</h1>
                                <h3 className="element-summa" >{el.sum}</h3>
                            </div>
                        </div>
                    )
                } else {
                    return null
                }
            })}
        </div>
    )
}

export default Idadres
