import React from "react";

import "../../styles/button.css"

export default function Button(props) {
  return (
    <button 
      className={`botao ${props.classe ? props.classe : ''}`}
      onClick={props.onClick}
    >
      <p>{props.nomeBotao}</p>
      <i className="separator"></i>
      <div className={`flechas ${props.flechasOpen ? props.flechasOpen : ''}`}></div>
    </button>
  )
}