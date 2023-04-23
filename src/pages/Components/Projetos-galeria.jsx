import React from "react";

import GaleriaItem from "./Projetos-galeria-item";
import imgFlappyBird from "../../assets/imgs/flappy.png"
import imgPixelArt from "../../assets/imgs/pixel-art.png"
import imgCalculadora from "../../assets/imgs/calculadora.png"

import "../../styles/projetos-galeria.css"

export default function ProjetosGaleria() {
  return (
    <div className="galeria-bloco">
      <div className="galeria" id="galeria">
        <GaleriaItem
          href="https://flappy-cat-aguiar-js.netlify.app/"
          hrefGitHub="https://github.com/aguiarichard/flappyCatJs"
          src={imgFlappyBird}
          alt="Projeto Flappy Cat"
          tecnologias="HTML CSS Javascript"
          link="Flappy Cat"
        />
        <GaleriaItem
          href="https://pixel-art-js.netlify.app/"
          hrefGitHub="https://github.com/aguiarichard/pixelArtJs"
          src={imgPixelArt}
          alt="Projeto Pixel Art"
          tecnologias="HTML CSS Javascript"
          link="Pixel Art"
        />
        <GaleriaItem
          href="https://calculadora-js-aguiar.netlify.app/"
          hrefGitHub="https://github.com/aguiarichard/calculadoraJs"
          src={imgCalculadora}
          alt="Projeto Calculadora JS"
          tecnologias="HTML CSS Javascript"
          link="Calculadora JS"
        />
      </div>
    </div>
  )
}