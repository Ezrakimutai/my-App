import React from 'react'
import Tool from '../../models/tool'

export const ToolBox: React.FC<Tool> = props => (
    <p>
        <span className="font-weight-bold">{props.name}</span>
        <br />
        {props.list}
    </p>
)

export default ToolBox
