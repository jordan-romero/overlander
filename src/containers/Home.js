import React from 'react'
import Header from '../components/Header'
import Definition from '../components/Definition'
import About from '../components/About'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Definition />
            <About />
            <Nav />
            <Footer />
        </div>
    )
}

export default Home
