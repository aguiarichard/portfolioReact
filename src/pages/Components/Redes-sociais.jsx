import React from "react";

import RedesSociaisLink from "./Redes-sociais-link";

import ImgLinkedin from "../../assets/imgs/linkedin.png"
import ImgGitHub from "../../assets/imgs/github.png"
import ImgWhatsApp from "../../assets/imgs/whatsapp-logo.png"

import "../../styles/redes-sociais.css"

export default function RedesSociais() {
    return (
        <div className="container-redes-sociais">
            <RedesSociaisLink href="https://www.linkedin.com/in/aguiarichard/" srcImg={ImgLinkedin} alt="Linkedin" backgroundImg="#ffffff"/>
            <RedesSociaisLink href="https://github.com/aguiarichard" srcImg={ImgGitHub} alt="Github" backgroundImg="#d7d7d7"/>
            <RedesSociaisLink href="https://api.whatsapp.com/send?phone=5551984867728&text=Fala%20dev!" srcImg={ImgWhatsApp} alt="Whatsapp" backgroundImg="#ffffff"/>
        </div>
    )
}