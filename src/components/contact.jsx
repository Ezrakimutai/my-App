import React from 'react'
import imageOverlay from '../img/earth.jpg'

class Contact extends React.Component {
    render() {
        return (
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: 'url(' + imageOverlay + ')' }}>
                <div className="overlay-mf"></div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <div className="socials">
                                    <ul>
                                        <li>
                                            <a href="https://www.doublejosh.com" target="_blank" rel="noopener noreferrer">
                                                <span className="ico-circle">
                                                    <i className="ion-social-tumblr"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/doublejosh" target="_blank" rel="noopener noreferrer">
                                                <span className="ico-circle">
                                                    <i className="ion-social-github"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/doublejosh" target="_blank" rel="noopener noreferrer">
                                                <span className="ico-circle">
                                                    <i className="ion-social-linkedin"></i>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-box">
                                    <p className="copyright">Thanks for reading.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        )
    }
}

export default Contact
