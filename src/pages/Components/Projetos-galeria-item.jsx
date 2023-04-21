import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons"

import "../../styles/projetos-galeria-item.css"

export default function GaleriaItem(props) {
  const arrayTecnologias = props.tecnologias.split(' ')

  return (
    <div className="container-projeto">
      <div className={`vidro-tecnologias`}>
        {
          arrayTecnologias.map(tecnologia => {
            return <p className="itens-tecnologias" >{tecnologia}</p>
          })
        }
      </div>
      <img id="projeto" className="img-projeto" src={props.src} alt={props.alt} />
      <div className={`container-link ${props.deslocar ? props.deslocar : ''}`}>
        <div className="item-link">
          <FontAwesomeIcon icon={faLink} style={{ color: "#00cdff", }} />
          <a className="link-projeto" href={props.href} target="_blank">{props.link}</a>
        </div>
        <div className="item-link">
          <FontAwesomeIcon icon={faCodeBranch} style={{ color: "#00358f", }} />
          <a className="link-projeto" href={props.hrefGitHub} target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  )
}