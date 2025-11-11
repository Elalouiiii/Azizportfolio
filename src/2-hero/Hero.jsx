import React from 'react'
import './hero.css'
import Lottie from "lottie-react";
import developerAnimation from '../../public/animation/developerAnimation - 1731347718613 (1).json'

export default function Hero() {
  return (
    <section style={{justifyContent:'space-between'}} className='hero flex'>
<div className='left-section'>

<div className="perent-avtar flex">
  <img src="./DSC_1271.jpg" className='avatar' alt="" />
  <div className='icon-verified'></div>
</div>


<h1 className='title'>Software desgner, founder, and amateur astronaut.</h1>
<p className='sub-title'>
  I'm ALOUI Abdelaziz, asoftware designer and entrepreneur based in Tunisia.I'm the founder and CEO of planetaria , where we develop
  technologies that empower reguler people to explore space their own termson 
</p>
<div className='all-icons flex'>
  <div className="icon icon-twitter"></div>
  <div className="icon icon-instagram"></div>
  <div className="icon icon-github"></div>
  <div className="icon icon-linkedin"></div>
</div>
</div>




<div className='right-section animation'>


<Lottie className='devanimation' animationData={developerAnimation} />



</div>
    </section>
  )
}
