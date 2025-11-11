import React, { useState } from 'react'
import './main.css'
import { listProjects } from './Myprojects'

export default function Main() {

  const [courntproject, setCourntproject] = useState("all")
  const [erray, setErray] = useState(listProjects)


  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button onClick={() => {
          setCourntproject("all");
          setErray(listProjects);
        }}
          className={courntproject === "all" ? 'active' : null}>
            All Projects
            </button>
        <button onClick={() => {
          setCourntproject("css");
          // filter array listProject
          const filterListProjects = listProjects.filter((item) => {
            return item.category === "css"
          })
          setErray(filterListProjects);
        }}
          className={courntproject === 'css' ? 'active' : null}>HTML & CSS</button>
        <button onClick={() => {
          setCourntproject("react");
          const filterListProjects = listProjects.filter((item) => {
            return item.category === "react"
          })
          setErray(filterListProjects)
        }}
          className={courntproject === 'react' ? 'active' : null}>React & MUI & STRAPI
        </button>

        <button onClick={() => {
          setCourntproject("node");
          const filterListProjects = listProjects.filter((item) => {
            return item.category === "node"
          })
          setErray(filterListProjects)
        }}
          className={courntproject === 'node' ? 'active' : null}>
       Node & Express 

        </button>
        <button onClick={() => {
          setCourntproject("bootstrap");
          const filterListProjects = listProjects.filter((item) => {
            return item.category === "bootstrap"
          })
          setErray(filterListProjects)
        }}
          className={courntproject === 'bootstrap' ? 'active' : null}>
       Bootstrap 

        </button>
        <button onClick={() => {
          setCourntproject("javascript");
          const filterListProjects = listProjects.filter((item) => {
            return item.category === "javascript"
          })
          setErray(filterListProjects)
        }}
          className={courntproject === 'javascript' ? 'active' : null}>
               Javascript


        </button>
      </section>


      <section className='flex right-section'>
        {erray.map((item) => {
          return (
            <article key={item.imhPath} className='card'>

              <img width={270} src={item.imhPath} alt="" />

              <div style={{ width: "270" }} className="box">
                <h1 className='title'>{item.projectTitle}</h1>
                <p className='sub-title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  temporibus maiores nam eaque aliquid itaque atque. Asperiores,
                  a necessitatibus earum nemo suscipit hic numquam quam odio pariatur,
                  veniam ipsam deleniti.
                </p>

                <div className="flex icons">
                  <div style={{ gap: '11px' }} className='flex'>
                    <div className='icon-link'></div>
                    <div className='icon-github'></div>
                  </div>
                  <a className='link flex' href="">more
                    <span style={{ alignSelf: 'end' }} className='icon-arrow-right'></span>
                  </a>


                </div>
              </div>

            </article>
          )
        })}

      </section>x
    </main>
  )
}