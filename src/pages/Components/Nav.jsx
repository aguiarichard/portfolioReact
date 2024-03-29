import React from "react"

import NavItem from "./Nav-item"

import '../../styles/nav.css'

export default function Nav() {
  return (
    <nav id="nav" className="nav">
      <NavItem href="sobre" name="Sobre" />
      <NavItem href="projetos" name="Projetos" />
      <NavItem href="contatos" name="Contatos" />
      {/* <NavItem href="carousel" name="Carousel"/> */}
    </nav>
  )
}