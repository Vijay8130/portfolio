import './App.css'
import Navbar from './components/navbar'
import Main from './components/main'
import Footer from './components/footer'
import data from './data'


function App() {

  const cards = data.map(item => {
    return (
        <Main
            key={item.id}
            {...item}
            
        />
    )
})        

  return (
    <>
      <Navbar />
     <section> {cards} 
     </section>
      <Footer />
    </>
  )
}

export default App
