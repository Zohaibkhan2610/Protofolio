import React from 'react'
import Herosection from './Herosection'
import './../App.css'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
export default function Home() {
  return (
    <>
        <Herosection/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
    </>
  )
}
