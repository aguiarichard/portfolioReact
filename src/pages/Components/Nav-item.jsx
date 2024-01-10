import React from "react";
import { Link } from "react-router-dom";

export default function NavItem(props) {
    function fecharNav() {
        const nav = document.querySelector('#nav')
        const burger = document.querySelector('#burger')
        
        burger.classList.toggle('burger-open')
    
        nav.style.transform = 'translateY(-1000px)'
      }

      const links = document.querySelectorAll(".js-link")
      const sections = document.querySelectorAll(".section")
    
      window.addEventListener("scroll", () => {
        sections.forEach(section => {
          const scrollAtual = window.scrollY
          const topSection = section.offsetTop - 80
          const heightSection = section.offsetHeight
          const idSection = section.getAttribute("id")
          
          if (scrollAtual >= topSection && scrollAtual < topSection + heightSection) {
            links.forEach(link => {
              link.classList.remove("actived")
    
              document.querySelector(`a[href*='${idSection}']`).classList.add("actived")
    
            })
          }
        })
      })

      function scrollSection(e) {
        if (e.target.innerHTML == 'Carousel') {
          return
        }

        fecharNav()
    
        e.preventDefault()
    
        const href = e.currentTarget.getAttribute("href")
        window.href = href
        const section = document.querySelector(href.substr(1))
        const topSection = section.offsetTop - 80
    
        window.scroll({
          top: topSection,
          behavior: 'smooth'
        })
      }

    return (        
        <Link 
            to={`/${props.href ? props.href : ''}`} 
            onClick={scrollSection} 
            className={`${ props.href == '#sobre' ? 'activedd' : '' } js-link`}>

            {props.name}
        </Link>
    )
}