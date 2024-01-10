import React, { useState } from "react";
import emailJs from "@emailjs/browser"
import EmailSucessoFalha from "./email-sucesso-falha";

import { BiLoaderAlt } from "react-icons/bi"

import "../../styles/contatos.css"


export default function Contatos() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccesOrFailed, setIsSuccesOrFailed] = useState(false)

  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos!')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    const loadingForm = document.querySelector('#loading')
    const mensagem = document.querySelector('#email-sucesso-falha')

    loadingForm.style.display = "flex"

    emailJs.send("service_8tcly26", "template_o2tuijk", templateParams, "ZLP0GKKzyoem4ICXP")
      .then(response => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')

        loadingForm.style.display = "none"
        mensagem.style.display = "flex"
        setIsSuccesOrFailed(true)


      }, error => {
        console.log("ERRO", error)

        loadingForm.style.display = "none"
        mensagem.style.display = "flex"
        setIsSuccesOrFailed(false)
      })
  }

  return (
    <section id="contatos" className="container-contato section">
      <h2 className="titulo-contato">Entre em contato</h2>
      <form className="form" onSubmit={sendEmail}>

        <div className="container-input">
          <label className="label" htmlFor="nome">Nome</label>
          <input
            id="nome"
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="container-input">
          <label htmlFor="email" className="label">Email</label>
          <input
            id="email"
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="container-input">
          <label htmlFor="mensagem" className="label">Mensagem</label>
          <textarea
            id="mensagem"
            className="text-area"
            placeholder="Digite sua mensagem"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </div>

        <input className="button" type="submit" value="Enviar" />
      </form>

      <p className="text-contato">
        Você também pode entrar em contato comigo pelas
        redes sociais, que estão sempre no canto inferior
        esquerdo da página. Se preferir um contato mais pessoal,
        pode acessar o meu <a className="link-instagram"
          href="https://www.instagram.com/aguiarichard_/" target="_blank">Instagram
        </a>.
      </p>

      <div className="loading-form" id="loading">
        <BiLoaderAlt height="3em" />

        <p>Enviando e-mail...</p>
      </div>

      {
        isSuccesOrFailed ? <EmailSucessoFalha status="email-sucesso" txtStatus="Email enviado com sucesso!" />
          : <EmailSucessoFalha status="email-falha" txtStatus="Ops.. tente novamente mais tarde." />
      }
    </section>
  )
}