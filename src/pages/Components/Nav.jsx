import React from "react"

import '../../styles/nav.css'

export default function Nav() {
  return (
    <nav id="nav" className="nav">
      <a href="/projetos">Projetos</a>
      <a href="/sobre">Sobre</a>
      <a href="/contatos">Contato</a>
    </nav>
  )
}

{/* <NavItem href="projetos" name="Projetos"/>
<NavItem href="sobre" name="Sobre"/>
<NavItem href="contatos" name="Contatos"/> */}