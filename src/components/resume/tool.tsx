import React from 'react'

export interface ToolProps {
    name: string
    list: []
}

export const ToolBox: React.FC<ToolProps> = props => (
    <p>
        <span className="font-weight-bold">{props.name}</span>
        <br />
        {props.list}
    </p>
)

export default ToolBox
