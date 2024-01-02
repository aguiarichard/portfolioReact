import React from "react";

import GaleriaItem from "./Projetos-galeria-item";
import imgFlappyBird from "../../assets/imgs/flappy.png"
import imgPixelArt from "../../assets/imgs/pixel-art.png"
import imgCalculadora from "../../assets/imgs/calculadora.png"
import imgLoremIpsun from "../../assets/imgs/lorem-ipsun.png"

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
          descricao="Projeto desenvolvido com HTML, CSS e JS. Orientação a objetos implementada com Javascript."
        />
        <GaleriaItem
          href="https://pixel-art-js.netlify.app/"
          hrefGitHub="https://github.com/aguiarichard/pixelArtJs"
          src={imgPixelArt}
          alt="Projeto Pixel Art"
          tecnologias="HTML CSS Javascript"
          link="Pixel Art"
          descricao="Um dos primeiros projetos que desenvolvi sozinho, desde a parte do layout, até o desenvolvimento.
            Feito com HTML, CSS e Javascript puro."
        />
        <GaleriaItem
          href="https://calculadora-js-aguiar.netlify.app/"
          hrefGitHub="https://github.com/aguiarichard/calculadoraJs"
          src={imgCalculadora}
          alt="Projeto Calculadora JS"
          tecnologias="HTML CSS Javascript"
          link="Calculadora JS"
          descricao="Calculadora inspirada no modelo IOS, feita com JS e desenvolvida com todas as funcionalidades da original."
        />
        <GaleriaItem
          href="https://lorem-ipsum-aguiar.netlify.app/"
          hrefGitHub="https://github.com/aguiarichard/lorem-ipsum"
          src={imgLoremIpsun}
          alt="Projeto Lorem ipsun"
          tecnologias="HTML CSS"
          link="Lorem ipsun"
          descricao="Site e-commerce com HTML e CSS."
        />
      </div>
    </div>
  )
}