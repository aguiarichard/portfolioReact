import React from "react";
import Nav from "./Nav";

import '../../styles/header.css'

export default function Header() {
  function burgerView() {
    const burger = document.querySelector('#burger')
    burger.classList.toggle('burger-open')
    
    const nav = document.querySelector('#nav')

    if (nav.style.transform == 'translateY(0px)') {
      nav.style.transform = 'translateY(-900px)'
      return
    }
    
    nav.style.transform = 'translateY(0)'
  }

  return (
    <header className="header">
      <div>
        <p>Richard de Aguiar</p>
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