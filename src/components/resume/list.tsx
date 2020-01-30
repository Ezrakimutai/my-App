import React from 'react'
import TitleBox from '../titleBox'
import Job from './job'
import Tool from './tool'
import { ToolProps } from './tool'
import { JobProps } from './job'

export interface ListProps {
    headline: string
    list: (JobProps | ToolProps)[]
    tag: string
}

export const List: React.FC<ListProps> = props => {
    const components: any = { job: Job, tool: Tool }
    const TagName: any = components[props.tag || 'job']

    return (
        <React.Fragment>
            <TitleBox
                headline={props.headline}
                box="title-box-2"
                title="title-left"
            />
            {props.list.map((item, i) => (
                <TagName {...item} key={i} />
            ))}
        </React.Fragment>
    )
}

export default List
