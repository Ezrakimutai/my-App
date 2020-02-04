import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Container } from 'react-bootstrap'
import ProjectSet from './projectSet'
import Section from '../../models/section'
import './style.scss'

export interface PortfolioProps {
    sections: Section[]
}

export const Portfolio: React.FC<PortfolioProps> = props => (
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

export default compose<any>(connect(mapStateToProps))(Portfolio)
