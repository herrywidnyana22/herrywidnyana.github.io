import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import './Menu.css'
import { menu } from '../../assets/api/data';

const Menu = () => {
    const [active, setActive] = useState(0)
    const [hover, setHover] = useState('')

    // let list = document.querySelectorAll('.list')
    // for(let i=0; i<list.length; i++){
    //     list[i].onmouseover = () => {
    //         let j = 0
    //         while (j < list.length){
    //             list[j++].className = 'list'
    //         }
    //         list[i].className = 'list active'
    //     }
    // }

    // list.forEach(elements =>{
    //     elements.addEventListener("mouseenter", (e) => {
    //         let bg = document.querySelector('main')
    //         let color = e.target.getAttribute('bg-color')
    //         bg.style.backgroundColor = color
    //     })
    //  })

  return (
    <div className='nav'>
        <ul>
            {
                menu.map((item, i) => (
                <li key={i} className={`list ${hover === i ?  'hover' : ''} ${(active) === i ? 'active' : ''}`} bg-color={item.hoverColor} onClick = {() => setActive(i)} onMouseOver={() => setHover(i)} onMouseLeave={() => setHover('')}>
                    <NavLink to = {item.link}>
                        <div className='icon-list'>
                            <span className="icon-menu" style={{color: active === i ? item.hoverColor : ''}}><ion-icon name={item.icon}></ion-icon></span>
                            <span className="title">{item.title}</span>
                        </div>
                    </NavLink>
                </li>
                ))
            }
            <div className="indicator"></div>
        </ul>
    </div>
  )
}

export default Menu