import React from "react";
import Nav from "./Nav";

import '../../styles/header.css'
import { Link } from "react-router-dom";

export default function Header() {
  function burgerView() {
    const burger = document.querySelector('#burger')
    burger.classList.toggle('burger-open')

    const nav = document.querySelector('#nav')

    if (nav.style.transform == 'translateY(0px)') {
      nav.style.transform = 'translateY(-1000px)'
      return
    }

    nav.style.transform = 'translateY(0)'
  }

  function carregamento(e) {
    const body = document.querySelector('body')
    const div = document.querySelector('.carregamento')

    body.appendChild(div)

    div.style.transform = `translateX(${div.offsetWidth - 200}px)`

    setTimeout(() => {
      div.style.transform = `translateX(0)`

    }, 800)

    console.log(body, div.offsetWidth, e);
  }

  return (
    <header className="header">
      <div>
        <Link to={`/`} onClick={carregamento}>
          <h1>Richard de Aguiar</h1>
        </Link>
        <div className="carregamento"></div>
        <div id="burger" className="burger" onClick={burgerView}>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <Nav />
      </div>
    </header>
  )
}