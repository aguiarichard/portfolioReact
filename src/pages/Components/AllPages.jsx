import React from "react";

import Sobre from "./Sobre"
import Projetos from "./Projetos"

import "../../styles/all-pages.css"

export default function AllPages() {
    return (
        <div>
            <Sobre classeAll="all-sobre" txtAlternativo=" rolando a tela" />

            <h2 className="titulo">Projetos</h2>
            <Projetos classeAll="all-projetos" />
        </div>
    )
}