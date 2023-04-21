import React from "react"
import { BrowserRouter } from "react-router-dom"

import Header from "../Components/Header"
import Routes from '../../Routes'
import Footer from "../Components/Footer"

import "../../styles/home.css"

function Home() {
  return (
    <BrowserRouter>
      <div className="grid">
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Home
