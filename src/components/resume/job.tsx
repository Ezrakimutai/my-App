import React from 'react'

export interface JobProps {
    timeframe: string
    title: string
    company: string
    summary: string
}

export const Job: React.FC<JobProps> = props => (
    <React.Fragment>
        <span className="pull-right badge badge-secondary">
            {props.timeframe}
        </span>
        <h5>
            {props.title} -{' '}
            <span className="font-weight-normal">{props.company}</span>
        </h5>
        <p className="font-weight-light">{props.summary}</p>
    </React.Fragment>
)

export default Job
