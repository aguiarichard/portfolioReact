import React from "react";

import "../../styles/sobre.css"

import Button from "./Button"

export default function Contatos() {
  return (
    <div className="container-sobre">
      <p className="apresentacao bold">
        Olá, meu nome é <span className="richard">Richard de Aguiar</span>,
        sou desenvolvedor <span className="front-end">Front-end</span> e 
        curso Análise e Desenvolvimento de Sistemas
      </p>

      <p className="apresentacao small">
        Ao longo dessa jornada de quase 2 anos estudando programação
        desenvolvi alguns projetos que podem ser vistos rolando a tela.
      </p>

      <Button nomeBotao="Projetos" flechasOpen="flechas-open" classe="botao-sobre"/>
    </div>
  )
}