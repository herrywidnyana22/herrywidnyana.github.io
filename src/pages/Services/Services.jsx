import React from 'react'
import './Services.css'
import { services } from '../../assets/api/data'

const Services = () => {
  return (
    <div className='service-container'>
      {
        services.map((item, i) => (
          <div key={i} className='service-box'>
            <div className="service-icon" style={{'--j': item.j}}>
              <ion-icon name={item.icon}></ion-icon>
            </div>
            <div className="service-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))
      }
    </div>

  )
}

export default Services