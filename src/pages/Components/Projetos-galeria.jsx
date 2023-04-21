import React from "react";

import GaleriaItem from "./Projetos-galeria-item";

import "../../styles/projetos-galeria.css"

export default function ProjetosGaleria() {
  return (
    <div className="galeria-bloco">
      <div className="galeria" id="galeria">
        <GaleriaItem
          href="https://flappy-bird-aguiar-js.netlify.app/"
          hrefGitHub="https://github.com/aguiarichard/flappyBirdJs"
          src="../../../../src/assets/imgs/flappy.png"
          alt="Projeto Flappy Bird"
          tecnologias="HTML CSS Javascript"
          link="Flappy Bird"
        />
        <GaleriaItem
          href="https://pixel-art-js.netlify.app/"
          hrefGitHub="https://github.com/aguiarichard/pixelArtJs"
          src="src/assets/imgs/pixel-art.png"
          alt="Projeto Pixel Art"
          tecnologias="HTML CSS Javascript"
          link="Pixel Art"
        />
        <GaleriaItem
          href="https://calculadora-js-aguiar.netlify.app/"
          hrefGitHub="https://github.com/aguiarichard/calculadoraJs"
          src="src/assets/imgs/calculadora.png"
          alt="Projeto Calculadora JS"
          tecnologias="HTML CSS Javascript"
          link="Calculadora JS"
        />
      </div>
    </div>
  )
}