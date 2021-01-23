import React from 'react'
import { NavLink } from 'react-router-dom'
import Truck from '../imgs/truckshot.jpeg'
import Tips from '../imgs/tips.jpg'
import Camper from '../imgs/camper.jpg'

const Nav = () => {
    return (
            <nav className='nav'>
            <div className='nav__card'>
                <NavLink className='nav__link' to="/reviews">
                    <div className='nav__content'>
                        <h2 className='heading-tertiary'>Gear Reviews</h2>
                        <p className='nav__text'>The top place for outfitting your vehicles and campers</p>
                    </div>
                    <img src={Truck} alt='truck' className='nav__img'/>
                </NavLink>
            </div>
            <div className='nav__card'>
                <NavLink className='nav__link' to="/tips">
                    <div className='nav__content'>
                        <h2 className='heading-tertiary'>Tips and Tricks</h2>
                        <p className='nav__text'>Exclusive information & guides for travel and maintenance</p>
                    </div>
                    <img src={Tips} alt='glenn and dog' className='nav__img'/>
                </NavLink>
            </div>
            <div className='nav__card'>
                <NavLink className='nav__link' to="/recommendations">
                    <div className='nav__content'>
                        <h2 className='heading-tertiary'>Camping Recs</h2>
                        <p className='nav__text'>Recommendations for interesting and unique places to overland</p>
                    </div>
                    <img src={Camper} alt='camper' className='nav__img'/>
                </NavLink>
            </div>
            </nav>
    )
}

export default Nav
