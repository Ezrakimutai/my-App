import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Container } from 'react-bootstrap'

import './stars.scss'
import './style.scss'
import Typed from 'react-typed'

const Intro = props => {
    return (
        <div id="home" className="intro route bg-image background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="intro-content display-table">
                <div className="table-cell">
                    <Container>
                        <h1 className="intro-title mb-4">{props.headline}</h1>
                        <p className="intro-subtitle">
                            <span className="text-slider-items"></span>
                            <strong className="text-slider">
                                <Typed strings={props.typed} typeSpeed={80} backDelay={1100} backSpeed={30} loop />
                            </strong>
                        </p>
                        <p className="pt-3">
                            <a className="btn btn-primary btn-lg js-scroll px-4" href="#about" role="button">
                                <i className="ion-arrow-down-c"></i>
                            </a>
                        </p>
                    </Container>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return state.portfolio.intro
}

export default compose(connect(mapStateToProps))(Intro)
