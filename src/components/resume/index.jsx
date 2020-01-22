import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import './style.scss'

import Job from './job'
import Tool from './tool'

const Resume = props => {
    return (
        <section className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row" id="about">
                    <div className="col-sm-12">
                        <div className="box-shadow-full my-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="pt-4 pb-2 mb-5 pt-md-0">
                                        <div>
                                            <p className="lead font-weight-normal">{props.headline}</p>
                                            {props.summary.map((content, i) => {
                                                return (
                                                    <p className="lead" key={i}>
                                                        {content}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="title-box-2">
                                        <h5 className="title-left">{props.toolsHeadline}</h5>
                                    </div>
                                    {props.tools.map((tool, i) => (
                                        <Tool {...tool} key={i} />
                                    ))}
                                </div>
                                <div className="col-md-6">
                                    <div className="title-box-2">
                                        <h5 className="title-left">{props.jobsHeadline}</h5>
                                    </div>
                                    {props.jobs.map((job, i) => (
                                        <Job {...job} key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return state.portfolio.resume
}

export default compose(connect(mapStateToProps))(Resume)
