import React, { Component, Fragment } from "react";
import '../../styles/projetos.css'

import ProjetosGaleria from "./Projetos-galeria";

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
      <section className={`container ${this.props.classeAll ? this.props.classeAll : ''} section`}>
        <ProjetosGaleria onTitulo={ this.props.onTitulo ? this.props.onTitulo : '' }/>

        {
          this.props.buttons &&
          <Fragment>
            <button className="button-projetos-left" onClick={e => this.andarCarrocel(e)}></button>
            <button className="button-projetos-right" onClick={e => this.andarCarrocel(e)}></button>
          </Fragment>
        }
      </section>
    )
  }
}