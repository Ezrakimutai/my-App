import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Container, Row, Col } from 'react-bootstrap'

import Socials from './socials'

import './style.scss'

import sampleBg from '../../img/earth.jpg'

const Footer = props => {
    const imagePath = props.background ? 'img/' + props.background : sampleBg
    const bgStyle = { backgroundImage: 'url(' + imagePath + ')' }

    return (
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={bgStyle}>
            <div className="overlay-mf"></div>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Socials list={props.social} />
                            <div className="copyright-box">
                                <p className="copyright">{props.footerMessage}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </section>
    )
}

const mapStateToProps = state => {
    return state.portfolio.footer
}

export default compose(connect(mapStateToProps))(Footer)
