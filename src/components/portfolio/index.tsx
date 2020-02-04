import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Container } from 'react-bootstrap'
import ProjectSet from './projectSet'
import Section from '../../models/section'
import './style.scss'

export const Portfolio: React.FC<{ sections: Section[] }> = props => (
    <Container>
        {props.sections.map((section: Section, i: number) => (
            <ProjectSet {...section} key={i} />
        ))}
    </Container>
)

const mapStateToProps = (state: RootState) => {
    return {
        sections: state.portfolio.sections,
    }
}

export default compose(connect(mapStateToProps))(Portfolio)
