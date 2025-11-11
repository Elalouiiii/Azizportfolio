import React from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../public/animation/Animation - 1731345593830.json";
import lettreAnimation from '../../public/animation/LettreAnimation - 1731346574238.json'

export default function Contact() {
  const [state, handleSubmit] = useForm("xovqwedp");



  return (
    <section className="contact-us">

      <h1 className='title'>
        <span className='icon-mail'></span>
        Contact us
      </h1>
      <p className='sub-title'>Contact us for more information and Get notified when i publish something new </p>

      <div style={{justifyContent:'space-between'}} className="flex">
        <form onSubmit={handleSubmit} className='' >

          <div className="flex">

            <label htmlFor="email">Email Address:</label>
            <input autoComplete='off' required type="email" name="email" id="email" placeholder='Enter Your Email ...' />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div style={{ marginTop: '24px' }} className="flex">

            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message" placeholder='Enter Your Message ...'></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className='submit'>
            {state.submitting  ? "submiting ....": "submit"}
          </button>

          { state.succeeded && ( <p className='flex' style={{fontSize:"22px",marginTop:"1.8rem"}}>
            <Lottie loop={false} style={{height:"44px"}} animationData={doneAnimation} />
            Your message has been sent successfully Thanks for joining!</p> ) }

        </form>




        <div className="animation">
            <Lottie className='contactanimation'  style={{height:"350px"}} animationData={lettreAnimation} />
          


        </div>
      </div>
    </section>
  )
}
