import React, { useEffect, useState } from 'react'
import './header.css'


export default function Header() {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("courentMode") ?? "dark");
  useEffect(() => {
    if (theme === "light") {

      document.body.classList.remove("dark")
      document.body.classList.add("light")

    } else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }

  }, [theme])
  return (
    <header className='flex'>
      <button onClick={() => {
        setshowModal(true)
      }} className='menu icon-menu'>

      </button>
      <div />

      <nav>
        <ul className='flex'>
          <li ><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>




      <button onClick={() => {
        // send value to local Storege   
        localStorage.setItem("courentMode", theme === "dark" ? "light" : "dark")

        // get value to local Storege   
        setTheme(localStorage.getItem("courentMode"))
      }}>

        {theme === "dark" ? (
          <span className='icon-moon-o'></span>

        ) : (
          <span className='icon-sun'></span>

        )

        }
      </button>






      {showModal && (

        <div className="border fixed">

          <ul className="model">
            <li className=''><button className='icon-close' onClick={() => { setshowModal(false) }} /></li>
            <li>  <a href="">About</a> </li>
            <li> <a href="">Articles</a> </li>
            <li><a href="">Projects</a>  </li>
            <li><a href="">Speaking</a> </li>
            <li><a href="">Uses</a> </li>
          </ul>

        </div>
      )}
    </header>
  )
}
