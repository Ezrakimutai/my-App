import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import ProjectSet from './projectSet'
import './style.scss'

export interface PortfolioSection {
    id: string
    menu: string
    headline: string
    subhead: string
    projects: object[]
}

export interface PortfolioProps {
    sections: PortfolioSection[]
}

export const Portfolio: React.FC<PortfolioProps> = props => (
    <section id="work" className="portfolio-mf sect-pt4 route">
        {props.sections.map((section, i) => (
            <ProjectSet {...section} key={i} />
        ))}
    </section>
)

const mapStateToProps = (state: RootState) => {
    return {
        sections: state.portfolio.sections,
    }
}

export default compose(connect(mapStateToProps))(Portfolio)
