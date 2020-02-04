import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Container, Row, Col } from 'react-bootstrap'
import List from './list'
import Intro from './intro'
import Tool from '../../models/tool'
import Job from '../../models/job'

export interface ResumeProps {
    toolsHeadline: string
    tools: Tool[]
    jobsHeadline: string
    jobs: Job[]
}

export const Resume: React.FC<ResumeProps> = props => (
    <Container className="section-wrapper">
        <Row id="about">
            <Col className="shadow-sm p-5 bg-light">
                <Row>
                    <Col md={6}>
                        <Intro {...props} />
                        <List
                            headline={props.toolsHeadline}
                            list={props.tools}
                            tag="tool"
                        />
                    </Col>
                    <Col md={6}>
                        <List
                            headline={props.jobsHeadline}
                            list={props.jobs}
                            tag="job"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
)

const mapStateToProps = (state: RootState) => {
    return state.portfolio.resume
}

export default compose(connect(mapStateToProps))(Resume)
