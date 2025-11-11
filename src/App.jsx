
import Contact from './4-contact/Contact'
import Header from './1-header/Header'
import Hero from './2-hero/Hero'
import Main from './3-main/Main'
import Footer from './5-footer/Footer'
import { useEffect, useState } from 'react'


function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowbleubottumifscroll(true)

      }else{
        setShowbleubottumifscroll(false)
      }

    })
  }, [])
  const [showbleubottumifscroll, setShowbleubottumifscroll] = useState(false)
  return (
    <div id='up' className='container'>
      <Header />


      <Hero />
      <div className='divider'></div>
      <Main />
      <div className='divider'></div>
      <Contact />
      <div className='divider'></div>
      <Footer />

        
        <a href="#up" style={{opacity: showbleubottumifscroll ? 1 : 0, transition:"3s"}}>
          <button className='icon-keyboard_arrow_up scrolalltoup'></button>

        </a>
    </div>
  )
}

export default App
