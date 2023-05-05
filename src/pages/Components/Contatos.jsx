import React, { useState } from "react";
import emailJs from "@emailjs/browser"

import "../../styles/contatos.css"


export default function Contatos() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()
    
    if(name === '' || email === '' || message === '') {
      alert('Preencha todos os campos!')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailJs.send("service_8tcly26", "template_o2tuijk", templateParams, "ZLP0GKKzyoem4ICXP")
      .then(response => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')

      }, error => {
        console.log("ERRO", error)
      })
  }

  return (
    <div className="container-contato">
      <h2 className="titulo-contato">Entre em contato</h2>
      <form className="form" onSubmit={sendEmail}>

        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="text-area"
          placeholder="Digite sua mensagem"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <input className="button" type="submit" value="Enviar" />
      </form>

      <p className="text-contato">
        Você também pode entrar em contato comigo pelas 
        redes sociais que estão sempre no canto inferior 
        esquerdo da página, se preferir um contato mais pessoal, 
        pode acessar o meu <a className="link-instagram" 
        href="https://www.instagram.com/aguiarichard_/" target="_blank">Instagram
        </a>.
      </p>
    </div>
  )
}