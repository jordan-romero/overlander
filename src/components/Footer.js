import React from 'react'
import sprite from '../imgs/sprite.svg'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__links'>
                <a href='https://www.linkedin.com/in/jordan-t-romero/'>
                    <svg className="icon icon--footer">
                        <use href={sprite + '#icon-youtube'} />
                    </svg>
                </a>
                <a href='mailto: jordanromero1390@gmail.com'>
                    <svg className="icon icon--footer">
                        <use href={sprite + '#icon-mail'} />
                    </svg>
                </a>
                <a href='https://github.com/jordles113'>
                    <svg className="icon icon--footer">
                        <use href={sprite + '#icon-facebook'} />
                    </svg>
                </a>
            </div>
    
            <div className='footer__subscribe'>
                <h2>Subscribe to the Newsletter</h2>
                <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
            </div>
        </section>
    )
}

export default Footer
