import React from "react";
import Nav from "./Nav";

import '../../styles/header.css'

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

  return (
    <header className="header">
      <div>
        <h1>Richard de Aguiar</h1>
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