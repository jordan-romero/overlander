import React from 'react'
import { NavLink } from 'react-router-dom'
import Truck from '../imgs/truckshot.jpeg'

const Nav = () => {
    return (
        <nav className='nav'>
            <Navlink className='nav__link' to="/reviews">
                <h2>Gear Reviews</h2>
                <p>The top place for outfitting your vehicles and campers</p>
                <img src={Truck} alt='photo of truck'/>
            </Navlink>
        </nav>
    )
}

export default Nav
