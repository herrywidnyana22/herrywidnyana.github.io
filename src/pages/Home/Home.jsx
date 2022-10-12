import React from 'react'
import './Home.css'
import { contact, infoProfile, skills, summary } from '../../assets/api/data'
import photo from '../../assets/images/pc.jpg'
import MyMap from '../../components/map/MyMap'
import { Cuaca } from '../../components'

const Home = () => {
  return (
    <div className='home-container'>

      {/* Info */}
      <div className='home-profile-box'>
        <div className="photo">
          <img src={photo} alt="" />
        </div>

        <div className="summary-box">
        {
          summary.map((item, i) =>(
            <div key={i} className="info-box">
              <div className="info-icon">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <div className="info-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))
        }
        </div>
      
        <div className="text-profile">
          <h1>Hi, I'm <span> {infoProfile.name}</span></h1>
          <p>{infoProfile.desc}</p>
        </div>
      </div>

      <div className="map-container">
        <MyMap/>
      </div>

      {/* kontak */}
      <div className="home-contact-box">
        {
          contact.map((item, i) =>(
          <div key={i} className="contact-box">
            <div className="contact-icon" style={{'--icon-contact':item.color}}>
              <ion-icon name={item.icon}></ion-icon>
            </div>
            <div className="contact-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
          ))
        }
      </div>

      <div className="home-skill-box">
        {
          skills.map((item, i) =>(
            <div key={i} className="skill-box" style={{'--bg-skill': item.color, '--no': item.percentage}}>
              <div className="skill-icon" style={{'--clr': item.color}}>
              <ion-icon name={item.icon}></ion-icon>
              </div>
              <div className="skill-percent" style={{'--clr': item.color, '--num': item.percentage}}>
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number-skill">
                  <h2>{item.percentage}<span>%</span></h2>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="cuaca-container">
        <Cuaca/>
      </div>
    </div>
  )
}

export default Home