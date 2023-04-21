import React from "react";
import { Link } from "react-router-dom";

export default function NavItem(props) {
    function fecharNav() {
        const nav = document.querySelector('#nav')
    
        nav.style.transform = 'translateY(-900px)'
      }

    return (        
        <Link to={`/${props.href ? props.href : ''}`} onClick={fecharNav}>
            {props.name}
        </Link>
    )
}