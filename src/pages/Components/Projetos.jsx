import React, { Component } from "react";
import '../../styles/projetos.css'

import ProjetosGaleria from "./Projetos-galeria";
import RedesSociais from "./Redes-sociais";

import ImgLinkedin from "../../assets/imgs/linkedin.png"
import ImgGitHub from "../../assets/imgs/github.png"

const initialState = {
  projetoAtual: 0
}

export default class Projetos extends Component {
  state = {
    ...initialState
  }

  andarCarrocel(e) {
    const galeria = document.querySelector('#galeria')
    const quantidadeProjetosNodeList = document.querySelectorAll('#projeto')
    const quantidadeProjetos = Array.from(quantidadeProjetosNodeList).length

    let projetoAtual = this.state.projetoAtual

    const isLeft = e.target.classList.contains('button-projetos-left')

    if (isLeft) {
      projetoAtual -= 1

      this.setState({ projetoAtual: this.state.projetoAtual - 1 })
    } else {
      projetoAtual += 1

      this.setState({ projetoAtual: this.state.projetoAtual + 1 })
    }

    if (projetoAtual >= quantidadeProjetos) {
      projetoAtual = 0

      this.setState({ projetoAtual: 0 })
    }

    if (projetoAtual < 0) {
      projetoAtual = quantidadeProjetos - 1

      this.setState({ projetoAtual: quantidadeProjetos - 1 })
    }

    quantidadeProjetosNodeList[projetoAtual].classList
    galeria.style.transform = `translateX(-${(projetoAtual) * 750}px)`
  }


  render() {
    return (
      <main className="main">
        <div className="container">
          <ProjetosGaleria />
          
          <button className="button-projetos-left" onClick={e => this.andarCarrocel(e)}></button>
          <button className="button-projetos-right" onClick={e => this.andarCarrocel(e)}></button>
        </div>

        <div className="container-redes-sociais">
          <RedesSociais href="https://www.linkedin.com/in/aguiarichard/" srcImg={ImgLinkedin} alt="Linkedin" backgroundImg="#ffffff"/>
          <RedesSociais href="https://github.com/aguiarichard" srcImg={ImgGitHub} alt="Github" backgroundImg="#d7d7d7"/>
        </div>
      </main>
    )
  }
}