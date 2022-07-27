import React from 'react'
import { Intro, About, Contact, Projects, Resume } from "../../components/compIndex"

const  HomePg = () => {
  return (
    <div>
        <Intro />
        <About />
        <Projects />
        <Resume />
        <Contact />
    </div>
  )
}

export default  HomePg