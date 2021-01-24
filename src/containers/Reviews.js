import React, { useState } from 'react'

const Reviews = () => {

    let state = {
          reviews: [{
            title: 'The Best Off-the-Beaten path drives in CO',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia ut turpis non facilisis. Aenean lobortis nibh ut purus euismod, tincidunt rutrum justo pulvinar. Etiam at ex sit amet est euismod euismod. Vivamus eu dui iaculis, pretium urna at, condimentum dui. Proin quis diam convallis, semper est id, tristique nunc. Phasellus elit neque, ornare vel massa vel, ullamcorper molestie metus. Nunc quis dapibus nisl. Sed porta imperdiet massa eu laoreet. Vestibulum dolor magna, vestibulum et tempor ac, aliquet et lorem. Etiam semper bibendum metus quis congue. Phasellus et orci non felis auctor pulvinar in sit amet nulla.'
            },
         {
            title: 'Best Tires Ever',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia ut turpis non facilisis. Aenean lobortis nibh ut purus euismod, tincidunt rutrum justo pulvinar. Etiam at ex sit amet est euismod euismod. Vivamus eu dui iaculis, pretium urna at, condimentum dui. Proin quis diam convallis, semper est id, tristique nunc. Phasellus elit neque, ornare vel massa vel, ullamcorper molestie metus. Nunc quis dapibus nisl. Sed porta imperdiet massa eu laoreet. Vestibulum dolor magna, vestibulum et tempor ac, aliquet et lorem. Etiam semper bibendum metus quis congue. Phasellus et orci non felis auctor pulvinar in sit amet nulla.'
            },
         {
            title: 'Canopy Nightmares',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia ut turpis non facilisis. Aenean lobortis nibh ut purus euismod, tincidunt rutrum justo pulvinar. Etiam at ex sit amet est euismod euismod. Vivamus eu dui iaculis, pretium urna at, condimentum dui. Proin quis diam convallis, semper est id, tristique nunc. Phasellus elit neque, ornare vel massa vel, ullamcorper molestie metus. Nunc quis dapibus nisl. Sed porta imperdiet massa eu laoreet. Vestibulum dolor magna, vestibulum et tempor ac, aliquet et lorem. Etiam semper bibendum metus quis congue. Phasellus et orci non felis auctor pulvinar in sit amet nulla.'
            }]
        } 
   
    let [reviews, setReviews] = useState(state)
    console.log(reviews)
    
    return (
        <div>
        { reviews.reviews.map(review => {
            return (
            <div>
                <h1> { review.title }</h1>
                <p> { review.content }</p>
            </div>
            )
        })}
        </div>
    )
    } 
    

export default Reviews
