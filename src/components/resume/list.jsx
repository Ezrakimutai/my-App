import React from 'react'

import Job from './job'
import Tool from './tool'

export default props => {
    const components = { job: Job, tool: Tool }
    const TagName = components[props.tag] || 'job'

    return (
        <React.Fragment>
            <div className="title-box-2">
                <h5 className="title-left">{props.headline}</h5>
            </div>
            {props.list.map((item, i) => (
                <TagName {...item} key={i} />
            ))}
        </React.Fragment>
    )
}
