import React from 'react'
import logo from '../../assets/img/flix.png'
import './menu.css'
import Button from '../Button'


function Menu() {
    return (
        <nav className = 'menu'>
            <a href = '/'>
                <img className='logo' src={logo} alt='joaoflfix logo' />
            </a>

            <Button as = 'a' className ='ButtonLink'href = '/'>
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu