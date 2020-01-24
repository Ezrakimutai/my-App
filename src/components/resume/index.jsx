import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

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
        <div className="container about-mf sect-pt4 route">
            <div className="row" id="about">
                <div className="col-sm-12 box-shadow-full">
                    <div className="row">
                        <div className="col-md-6">
                            <ResumeIntro {...props} />
                            <List headline={props.toolsHeadline} list={props.tools} tag="tool" />
                        </div>
                        <div className="col-md-6">
                            <List headline={props.jobsHeadline} list={props.jobs} tag="job" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return state.portfolio.resume
}

export default compose(connect(mapStateToProps))(Resume)
