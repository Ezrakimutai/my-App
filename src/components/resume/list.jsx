import React from 'react'

import TitleBox from '../titleBox'
import Job from './job'
import Tool from './tool'

export default props => {
    const components = { job: Job, tool: Tool }
    const TagName = components[props.tag] || 'job'

    return (
        <React.Fragment>
            <TitleBox headline={props.headline} box="title-box-2" title="title-left" />
            {props.list.map((item, i) => (
                <TagName {...item} key={i} />
            ))}
        </React.Fragment>
    )
}
