import React from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Truck from '../imgs/truckshot.jpeg'

const Nav = () => {
    return (
        <Router>
            <nav className='nav'>
                <NavLink className='nav__link' to="/reviews">
                    <h2>Gear Reviews</h2>
                    <p>The top place for outfitting your vehicles and campers</p>
                    <img src={Truck} alt='photo of truck'/>
                </NavLink>
                <NavLink className='nav__link' to="/reviews">
                    <h2>Tips and Tricks</h2>
                    <p>Exclusive information & guides for travel and maintenance</p>
                    <img src={Truck} alt='photo of truck'/>
                </NavLink>
            </nav>
        </Router>
    )
}

export default Nav
