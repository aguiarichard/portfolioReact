import React, { useState } from "react";

import "../../styles/all-pages.css"
import '../../styles/certificado.css'

export default function Certificacoes(props) {
    const [lupaStyle, setLupaStyle] = useState({ backgroundImage: `url(${ props.src })` }) 

    const handleMouseMove = (e) => {
      const { offsetX, offsetY, target } = e.nativeEvent
      const { offsetWidth, offsetHeight } = target

      const xPercentage = (offsetX / offsetWidth) * 100
      const yPercentage = (offsetY / offsetHeight) * 100

      setLupaStyle((prev) => ({
        ...prev, 
        display: `block`,
        top: `${offsetY - 75}px`,
        left:`${offsetX - 75}px`,
        backgroundPosition: `${xPercentage}% ${yPercentage}%`
      
      }))
    }

    const handleMouseLeave = () => {
      setLupaStyle((prev) => ({ ...prev, display: `none` }))
    }
    
    return (
        <div className="div-certificado">
          <img className="img-certificado" src={props.src} alt={props.alt} draggable={false} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}/>
          <div className="lupa" style={lupaStyle}></div> 
        </div> 
    )
}