import React from 'react'
import AboutImg from '../imgs/about.jpg'

const About = () => {
    return (
        <section className='about'>
            <img src={AboutImg} alt='photo of Glenn Romero' className='about__curve'/>
            <h1 className='heading-secondary'>Meet Glenn Romero</h1>
            <p className='about__text'>Glenn is an Attorney from Tampa, Florida. Throughout his life, he has travelled all across this country and in 2015, he decided he wanted to go anywhere. 
            Come along on the journey for tips, gear reviews and campsite recommendations. Follow him on crazy adventures all across the country. 
            </p>
            
        </section>
    )
}

export default About
