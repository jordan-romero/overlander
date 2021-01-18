import React from 'react'
import Header from '../components/Header'
import Definition from '../components/Definition'
import About from '../components/About'
import Nav from '../components/Nav'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Definition />
            <About />
            <Nav />
        </div>
    )
}

export default Home
