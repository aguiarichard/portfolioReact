import React from "react";
import { Link } from "react-router-dom";

export default function NavItem(props) {
    function fecharNav() {
        const nav = document.querySelector('#nav')
        const burger = document.querySelector('#burger')
        
        burger.classList.toggle('burger-open')
    
        nav.style.transform = 'translateY(-900px)'
      }

    return (        
        <Link to={`/${props.href ? props.href : ''}`} onClick={fecharNav}>
            {props.name}
        </Link>
    )
}