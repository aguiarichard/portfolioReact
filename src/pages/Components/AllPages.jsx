import React from "react";

import Sobre from "./Sobre"
import Projetos from "./Projetos"

import "../../styles/all-pages.css"
import Contatos from "./Contatos";

export default function AllPages() {
    return (
        <main>
            <Sobre classeAll="all-sobre" txtAlternativo=" rolando a tela" />
            <Projetos classeAll="all-projetos" />
            <Contatos />
        </main>
    )
}