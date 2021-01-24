import React, { useState } from 'react'
import CamperAndTruck from '../imgs/campertruck.jpg'
import Tires from '../imgs/tires.jpeg'
import Pass from '../imgs/about.jpg'

const Reviews = () => {

    let state = {
          reviews: [{
            title: 'The Best Off-the-Beaten path drives in CO',
            image: `${ CamperAndTruck }`,
            synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia ut turpis non facilisis. Aenean lobortis nibh ut purus euismod, tincidunt rutrum justo pulvinar. Etiam at ex sit amet est euismod euismod. Vivamus eu dui iaculis, pretium urna at, condimentum dui. Proin quis diam convallis, semper est id, tristique nunc. Phasellus elit neque, ornare vel massa vel, ullamcorper molestie metus. Nunc quis dapibus nisl. Sed porta imperdiet massa eu laoreet. Vestibulum dolor magna, vestibulum et tempor ac, aliquet et lorem. Etiam semper bibendum metus quis congue. Phasellus et orci non felis auctor pulvinar in sit amet nulla.'
            },
         {
            title: 'Best Tires Ever',
            image: `${ Tires }`,
            synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia ut turpis non facilisis. Aenean lobortis nibh ut purus euismod, tincidunt rutrum justo pulvinar. Etiam at ex sit amet est euismod euismod. Vivamus eu dui iaculis, pretium urna at, condimentum dui. Proin quis diam convallis, semper est id, tristique nunc. Phasellus elit neque, ornare vel massa vel, ullamcorper molestie metus. Nunc quis dapibus nisl. Sed porta imperdiet massa eu laoreet. Vestibulum dolor magna, vestibulum et tempor ac, aliquet et lorem. Etiam semper bibendum metus quis congue. Phasellus et orci non felis auctor pulvinar in sit amet nulla.'
            },
         {
            title: 'Canopy Nightmares',
            image: `${ Pass }`,
            synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia ut turpis non facilisis. Aenean lobortis nibh ut purus euismod, tincidunt rutrum justo pulvinar. Etiam at ex sit amet est euismod euismod. Vivamus eu dui iaculis, pretium urna at, condimentum dui. Proin quis diam convallis, semper est id, tristique nunc. Phasellus elit neque, ornare vel massa vel, ullamcorper molestie metus. Nunc quis dapibus nisl. Sed porta imperdiet massa eu laoreet. Vestibulum dolor magna, vestibulum et tempor ac, aliquet et lorem. Etiam semper bibendum metus quis congue. Phasellus et orci non felis auctor pulvinar in sit amet nulla.'
            }]
        } 
   
    let [reviews, setReviews] = useState(state)
    console.log(reviews)
    
    return (
        <section className='review'>
        { reviews.reviews.map(review => {
            return (
            <div className='review__card'>
                <h1 className='review__title'> { review.title }</h1>
                <img src={ review.image } alt={ review.title } />
                <p className='review__synopsis'> { review.synopsis }</p>
                <button className='btn'>Keep Reading</button>
            </div>
            )
        })}
        </section>
    )
    } 
    

export default Reviews
