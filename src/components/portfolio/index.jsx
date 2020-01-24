import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import ProjectSet from './projectSet'

import './style.scss'

const Portfolio = props => {
    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
            {props.sections.map((section, i) => (
                <ProjectSet {...section} key={i} />
            ))}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        sections: state.portfolio.sections,
    }
}

export default compose(connect(mapStateToProps))(Portfolio)
