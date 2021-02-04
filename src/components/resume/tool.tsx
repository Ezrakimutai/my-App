import React from 'react'
import Tool from '../../models/tool'

export const ToolBox: React.FC<Tool> = props => (
    <p>
        <span className="font-weight-bold">{props.name}</span>
        <br />
        <div dangerouslySetInnerHTML={{ __html: props.list }}></div>
    </p>
)

export default ToolBox
