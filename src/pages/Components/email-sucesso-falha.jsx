import React from "react";

import "../../styles/email-sucesso-falha.css"

export default function emailSucessoFalha(props) {
    function removerBotao() {
        const mensagem = document.querySelector('#email-sucesso-falha')
  
        mensagem.style.display = "none"
      }

    return (
        <div className="container-email" id="email-sucesso-falha">
            <div className={props.status}>
                <p className="texto-status">{props.txtStatus}</p>

                <button className="button-email" onClick={() => removerBotao()}>X</button>
            </div>
        </div>
    )
}