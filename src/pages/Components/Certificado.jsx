import React from "react";

import "../../styles/all-pages.css"
import '../../styles/certificado.css'

export default function Certificacoes(props) {
    return (
        <div className="div-certificado">
          <p className="p-certificado">{props.titulo}</p>
          <img className="img-certificado" src={props.src} alt={props.alt} /> 
        </div> 
    )
}