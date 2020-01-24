import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Container, Row, Col } from 'react-bootstrap'

import List from './list'

const ResumeIntro = props => {
    return (
        <div className="pb-2 mb-5 pt-md-0">
            <p className="lead font-weight-normal">{props.headline}</p>
            {props.summary.map((content, i) => {
                return (
                    <p className="lead" key={i}>
                        {content}
                    </p>
                )
            })}
        </div>
    )
}

const Resume = props => {
    return (
        <Container className="about-mf sect-pt4 route">
            <Row id="about">
                <Col className="shadow-sm p-5 bg-light">
                    <Row>
                        <Col md={6}>
                            <ResumeIntro {...props} />
                            <List headline={props.toolsHeadline} list={props.tools} tag="tool" />
                        </Col>
                        <Col md={6}>
                            <List headline={props.jobsHeadline} list={props.jobs} tag="job" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return state.portfolio.resume
}

export default compose(connect(mapStateToProps))(Resume)
