import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Socials from './socials'

import imageOverlay from '../../img/earth.jpg'
import './style.scss'

const Footer = props => {
    return (
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: 'url(' + imageOverlay + ')' }}>
            <div className="overlay-mf"></div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <Socials list={props.meta.social} />
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
