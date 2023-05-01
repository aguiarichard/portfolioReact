import React from "react";

import "../../styles/sobre.css"

import Button from "./Button"

export default function Contatos() {
  return (
    <div className="container-sobre">
      <div className="container-skills">
        <h2 className="titulo-skills">Habilidades</h2>
        <div className="habilidades">
          <div className="habilidade-item">HTML</div>
          <div className="habilidade-item">CSS</div>
          <div className="habilidade-item">Javascript</div>
          <div className="habilidade-item">JQuery</div>
          <div className="habilidade-item">Bootstrap</div>
          <div className="habilidade-item">React</div>
          <div className="habilidade-item">React-Router</div>
          <div className="habilidade-item">Java</div>
          <div className="habilidade-item">JUnit</div>
          <div className="habilidade-item">Jest</div>
          <div className="habilidade-item">Git</div>
        </div>
      </div>

      <p className="apresentacao bold">
        Olá, meu nome é <span className="richard">Richard de Aguiar</span>,
        sou desenvolvedor <span className="front-end">Front-end</span> e
        curso Análise e Desenvolvimento de Sistemas
      </p>

      <p className="apresentacao small">
        Ao longo dessa jornada de quase 2 anos estudando programação
        desenvolvi alguns projetos que podem ser vistos rolando a tela.
      </p>

      <Button nomeBotao="Projetos" flechasOpen="flechas-open" classe="botao-sobre" />
    </div>
  )
}