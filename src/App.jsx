import './App.css'
import React from "react"

import Navbar from './components/navbar'
import Project from './components/project'
import Footer from './components/footer'
import Certification from './components/certification'
import Skills from './components/skills'
import About from './components/about'
import Contact from './components/contact'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import data from './data'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
       setDarkMode(prevMode => !prevMode)
  }

  const certificate = data.map(item => {
    return (
      <Certification 
          key={item.id}
          {...item}
       />
    )
  } )

  const project = data.map(item => {
    return (
        <Project
            key={item.id}
            {...item}
            
        />
        
    )
})        



       
  return (
    <>
    <BrowserRouter>
         <Navbar 
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode}/> 
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/certificate" element={<section> {certificate}</section>}/>
                <Route path="/projects" element={<section> {project}</section>} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />}/>
              </Routes>
         <Footer darkMode={darkMode}/>
    </BrowserRouter>
    </>
  )
}

export default App
