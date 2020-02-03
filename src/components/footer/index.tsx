import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Container, Row, Col } from 'react-bootstrap'
import Socials, { SocialsItem } from './socials'
import './style.scss'
import sampleBg from '../../img/earth.jpg'

export interface FooterProps {
    background?: string
    social: SocialsItem[]
    footerMessage: string
}

export const Footer: React.FC<FooterProps> = props => {
    const imagePath = props.background ? 'img/' + props.background : sampleBg
    const bgStyle = { backgroundImage: 'url(' + imagePath + ')' }

    return (
        <Container
            className="paralax-mf footer-paralax bg-image section-wrapper"
            style={bgStyle}
            fluid={true}
        >
            <div className="overlay-mf"></div>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Socials list={props.social} />
                            <div className="copyright-box">
                                <p className="copyright">
                                    {props.footerMessage}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Container>
    )
}

const mapStateToProps = (state: RootState) => {
    return state.portfolio.footer
}

export default compose(connect(mapStateToProps))(Footer)
