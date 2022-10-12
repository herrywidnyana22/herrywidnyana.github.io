import React from 'react'
import { MyMap } from '../../components'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="contact form">
          <h2>Send a Message</h2>
          <form>
            <div className="form-box">
              <div className="row50">
                <div className="input-box">
                  <span>First Name</span>
                  <input type="text" placeholder='Made' /> 
                </div>
                <div className="input-box">
                  <span>Last Name</span>
                  <input type="text" placeholder='Leso' /> 
                </div>
              </div>
            

              <div className="row50">
                <div className="input-box">
                  <span>Email</span>
                  <input type="email" placeholder='madeleso@gmail.com' /> 
                </div>
                <div className="input-box">
                  <span>Phone Number</span>
                  <input type="text" placeholder='+6281 234 567 890' /> 
                </div>
              </div>

              <div className="row100">
                <div className="input-box">
                  <span>Message</span>
                  <textarea placeholder='Write Your Message here' /> 
                </div>
              </div>

              <div className="row100">
                <div className="input-box">
                  <input type="submit" value={"Send"} /> 
                </div>
              </div>
            </div>

          </form>
        </div>
        <div className="contact info">info</div>
        <div className="contact map">
          <MyMap/>
        </div>
    </div>
  )
}

export default Contact