import React from "react";

import "../../styles/button.css"

export default function Button(props) {
  return (
    <button className="botao" onClick={props.onClick}>
      <p>{props.nomeBotao}</p>
      <i className="separator"></i>
      <div className="flechas"></div>
    </button>
  )
}