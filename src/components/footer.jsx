import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import imageOverlay from '../img/earth.jpg'

const Footer = props => {
    return (
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: 'url(' + imageOverlay + ')' }}>
            <div className="overlay-mf"></div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="socials">
                                <ul>
                                    {props.meta.social.map(social => (
                                        <li key={social.service}>
                                            <a href={social.link} target="_blank" rel="noopener noreferrer">
                                                <span className="ico-circle">
                                                    <i className={'ion-social-' + social.service}></i>
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="copyright-box">
                                <p className="copyright">{props.meta.footerMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        meta: state.portfolio.meta,
    }
}

export default compose(connect(mapStateToProps))(Footer)
