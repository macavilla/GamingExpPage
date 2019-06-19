import React from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"
import coreFamily from "../img/badges-1.png"
import SimpleSlider from "../components/simpleSlider"
import Layout from "../components/layout"

export default () => (
  <div className="home">
    <img src={logo} alt="Intel Logo" className="intel-logo" />
    <div className="top-wrapper">
 
      <div className="headlines-wrapper">
        <h1>
          ENCONTRE O PC CERTO <span>PARA A MELHOR EXPERIÊNCIA</span> DE GAMING COM INTEL®
        </h1>
        <p>QUE TIPO DE GAMER VOCÊ É?</p>
      </div>

      <img
      src={coreFamily}
      alt="Intel Core family 8th Generation: i5, i7, i8"
      className="coreFamily"/>
    </div>

    <ul className="links-wrapper desktop">
      <li className="link casual">
        <Link to="/casual/">casual</Link>
      </li>
      <li className="link competitivo">
        <Link to="/competitivo/">competitivo</Link>
      </li>
      <li className="link extremo">
        <Link to="/extremo/">extremo</Link>
      </li>
    </ul>

    <SimpleSlider className="slider-mobile" />

    <div className="btn-wrapper">
      <a href="" className="main-btn">Ver Produtos ></a>
    </div>
  </div>
)
