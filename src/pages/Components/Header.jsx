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

  function goInitial() {
    const sectionSobre = document.querySelector("#sobre")
    const topSection = sectionSobre ? sectionSobre.offsetTop -80 : false

    window.scroll({
      top: topSection
    })
  }

  return (
    <header className="header">
      <div>
        <Link to={`/`} onClick={goInitial}>
          <h1>Richard de Aguiar</h1>
        </Link>
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