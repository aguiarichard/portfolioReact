import React from "react"

import NavItem from "./Nav-item"

import '../../styles/nav.css'

export default function Nav() {
  return (
    <nav id="nav" className="nav">
      <NavItem href="projetos" name="Projetos"/>
      <NavItem href="sobre" name="Sobre"/>
      <NavItem href="contatos" name="Contatos"/>
    </nav>
  )
}