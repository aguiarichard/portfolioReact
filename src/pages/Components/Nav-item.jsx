import React from "react";
import { Link } from "react-router-dom";

export default function NavItem(props) {
    return (        
        <Link to={`/${props.href ? props.href : ''}`}>
            {props.name}
        </Link>
    )
}