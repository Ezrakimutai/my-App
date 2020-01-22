import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import MetaTags from 'react-meta-tags'

const Document = props => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta property="og:title" content={props.title} />
            </MetaTags>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return state.portfolio.meta
}

export default compose(connect(mapStateToProps))(Document)
