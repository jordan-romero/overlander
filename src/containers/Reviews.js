import React, { useState } from 'react'
import CamperAndTruck from '../imgs/campertruck.jpg'
import Tires from '../imgs/tires.jpeg'
import Pass from '../imgs/about.jpg'

const Reviews = () => {

    let state = {
          reviews: [{
            title: 'The Best Off-the-Beaten path drives in CO',
            image: `${ CamperAndTruck }`,
            synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia ut turpis non facilisis. Aenean lobortis nibh ut purus euismod, tincidunt rutrum justo pulvinar. Etiam at ex sit amet est euismod euismod. Vivamus eu dui iaculis, pretium urna at, condimentum dui. Proin quis diam convallis, semper est id, tristique nunc. Phasellus elit neque, ornare vel massa vel, ullamcorper molestie metus. Nunc quis dapibus nisl. Sed porta imperdiet massa eu laoreet. Vestibulum dolor magna, vestibulum et tempor ac, aliquet et lorem. Etiam semper bibendum metus quis congue. Phasellus et orci non felis auctor pulvinar in sit amet nulla.',
            content: 'Aenean tempus leo sit amet erat dapibus, ut dignissim erat dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas tempor nisl sit amet molestie aliquam. Donec sem enim, pharetra vitae vulputate iaculis, rutrum sed urna. Nullam maximus felis a mattis aliquet. Suspendisse tortor ex, lacinia eget sollicitudin eu, pulvinar vel nisl. Praesent congue neque vel consectetur sollicitudin. Mauris nulla nisl, mollis quis nibh et, pulvinar imperdiet mauris. Praesent nisi dui, tempus in turpis non, tempor suscipit lacus. Donec magna felis, aliquam vel magna id, tincidunt ultricies erat. Sed iaculis tincidunt augue, pellentesque interdum velit faucibus et. Nunc eget faucibus mi, at pellentesque nulla. Curabitur non est eget arcu feugiat cursus. Phasellus hendrerit est malesuada, finibus sem ut, semper justo. Maecenas in rutrum ipsum, eget placerat sem. '
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
        <section className='reviews'>
        { reviews.reviews.map(review => {
            return (
            <div className='review'>
                <h1 className='review__title'> { review.title }</h1>
                <img className='review__img' src={ review.image } alt={ review.title } />
                <p className='review__synopsis'> { review.synopsis }</p>
                <button className='btn'>Keep Reading</button>
            </div>
            )
        })}
        </section>
    )
    } 
    

export default Reviews
