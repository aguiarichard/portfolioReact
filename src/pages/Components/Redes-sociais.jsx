import React from "react";

import "../../styles/redes-sociais.css"

export default function RedesSociais(props) {
  return (
    <a href={props.href} target="_blank" className="link-redes-socias" style={{backgroundColor: props.backgroundImg}}>
      <img src={props.srcImg} alt={props.alt} className="img-redes-sociais"/>
    </a>
  )
}