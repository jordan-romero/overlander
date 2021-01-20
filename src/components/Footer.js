import React from 'react'
import sprite from '../imgs/sprite.svg'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__links'>
                <a href='https://www.linkedin.com/in/jordan-t-romero/'>
                    <svg className="icon icon--footer">
                        <use href={sprite + '#icon-linkedin'} />
                    </svg>
                </a>
                <a href='https://github.com/jordles113'>
                    <svg className="icon icon--footer">
                        <use href={sprite + '#icon-github'} />
                    </svg>
                </a>
                <a href='mailto: jordanromero1390@gmail.com'>
                    <svg className="icon icon--footer">
                        <use href={sprite + '#icon-mail'} />
                    </svg>
                </a>
            </div>
    
            <div className='footer__subscribe'>
            
            </div>
        </section>
    )
}

export default Footer
