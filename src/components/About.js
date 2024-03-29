import React from 'react'
import AboutImg from '../imgs/about.jpg'

const About = () => {
    return (
        <section className='about'>
            <div className='about__content'>
                <img src={AboutImg} alt='photo of Glenn Romero' className='about__curve'/>
                <h1 className='heading-secondary'>Meet Glenn Romero</h1>
                <p className='about__text'>Glenn is an Attorney from Tampa, Florida. Throughout his life, he has traveled all across this country and in 2015, he decided he wanted to <span className='emphasis'>go anywhere</span>. 
                Join the journey for tips, gear reviews and campsite recommendations. Follow him on crazy adventures all across the country. 
                </p>
            </div>
        </section>
    )
}

export default About
