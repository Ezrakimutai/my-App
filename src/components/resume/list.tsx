import React from 'react'
import TitleBox from '../titleBox'
import Job from './job'
import Tool from './tool'
import JobModel from '../../models/job'
import ToolModel from '../../models/tool'

export interface ListProps {
    headline: string
    list: (JobModel | ToolModel)[]
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
                titleType="title-left"
            />
            {props.list.map((item: ToolModel | JobModel, i: number) => (
                <TagName {...item} key={i} />
            ))}
        </React.Fragment>
    )
}

export default List
