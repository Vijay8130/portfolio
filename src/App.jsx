import './App.css'
import Navbar from './components/navbar'
import Project from './components/project'
import Footer from './components/footer'
import Certification from './components/certification'
import Skills from './components/skills'
import About from './components/about'
import Contact from './components/contact'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import data from './data'
import Tri from './components/Tri'

function App() {
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

const tri = data.map(item => {
  return (
      <Tri
          key={item.id}
          {...item}
          
      />
      
  )
})
       
  return (
    <>
    <BrowserRouter>
         <Navbar /> 
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/certificate" element={<section> {certificate}</section>}/>
          <Route path="/projects" element={<section> {project}</section>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/tri" element={tri} />
        </Routes>
      
         {/* <section> {cards} 
         </section> */}
         <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
