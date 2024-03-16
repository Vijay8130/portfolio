import './App.css'
import Navbar from './components/navbar'
import Content from './components/content'
import Footer from './components/footer'
import Certification from './components/certification'
import Skills from './components/skills'
import About from './components/about'
import Contact from './components/contact'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import data from './data'
import certificate from './certificate'


function App() {

  const cert = certificate.map(item => {
    return (
      <Certification 
          key={item.id}
          {...item}
       />
    )
  } )


  const cards = data.map(item => {
    return (
        <Content
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
          <Route path="/cert" element={<section> {cert}</section>}/>
          <Route path="/projects" element={<section> {cards}</section>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      
         {/* <section> {cards} 
         </section> */}
         <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
