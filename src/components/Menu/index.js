import React from 'react'
import logo from '../../assets/img/flix.png'
import {Link } from 'react-router-dom'
import './menu.css'
import Button from '../Button'


function Menu() {
    return (
        <nav className = 'menu'>
            <Link to = '/'>
                <img className='logo' src={logo} alt='joaoflfix logo' />
            </Link>

            <Button as = {Link} className ='ButtonLink' to = '/cadastro/video'>
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu