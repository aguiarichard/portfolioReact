import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons"

import Button from "./Button";

import "../../styles/projetos-galeria-item.css"

export default function GaleriaItem(props) {
  const arrayTecnologias = props.tecnologias.split(' ')

  function mostrarDescricao(e) {
    const vidroAtual = e.target.offsetParent
    const flechas = e.target.children[2]
    const button = e.target

    flechas.classList.toggle('flechas-open')

    if (vidroAtual.classList.contains('vidro-tecnologias-closed')) {


      vidroAtual.style.backgroundColor = 'rgb(23 23 23 / 79%)'
      vidroAtual.classList.remove('vidro-tecnologias-closed')
      button.style.top = '0'
  
      vidroAtual.classList.toggle('blur')

      return
    }
    
    vidroAtual.classList.add('vidro-tecnologias-closed')

    vidroAtual.style.backgroundColor = 'rgb(87 87 87 / 80%)'
    vidroAtual.classList.toggle('blur')
    button.style.top = '-10px'
  }

  return (
    <div className="projeto">
      <div className="container-projeto">
        <div className="vidro-tecnologias vidro-tecnologias-closed">
          <div className="container-tecnologias-utilizadas">
            {
              arrayTecnologias.map(tecnologia => {
                return <p className="itens-tecnologias" >{tecnologia}</p>
              })
            }

            <Button nomeBotao="descrição" onClick={(e) => mostrarDescricao(e)}/>
          </div>
          <div className="sobre-projeto">
            <p className="descricao">
              {props.descricao}
            </p>
          </div>
        </div>
        <img id="projeto" className="img-projeto" src={props.src} alt={props.alt} />
      </div>
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