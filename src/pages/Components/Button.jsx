import React from "react";
import { Link } from "react-router-dom";

import "../../styles/button.css"

export default function Button(props) {

  if (props.href) {
    return (
      <button
        className={`botao ${props.classe ? props.classe : ''}`}
        onClick={props.onClick}
      >
        <Link to={`/${props.href ? props.href : ''}`} className="link-button">
          <p>{props.nomeBotao}</p>
          <i className="separator"></i>
          <div className={`flechas ${props.flechasOpen ? props.flechasOpen : ''}`}></div>
        </Link>

      </button>
    )
  } else {
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
}