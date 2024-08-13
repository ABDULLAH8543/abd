import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCsswizardry } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import './style.css'

const index = () => {
  return (
    <div>
      <section id='services-page'></section>
      <section id='services'>
      <h1>Services</h1>
      <div className="languagesgrid">
        <p id='react'><span><FaReact /></span> react js</p>
        <p id='js'><span><IoLogoJavascript /></span> java script</p>
        <p id='css'><span><SiCsswizardry /></span> css</p>
        <p id='html'><span><FaHtml5 /></span> html</p>
        <p id='native'><span><TbBrandReactNative /></span> react native</p>
      </div>
      </section>
    </div>
  )
}

export default index