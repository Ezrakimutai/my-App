import React from 'react'

export default props => (
    <div className={props.box || 'title-box'}>
        <h3 className={props.title || 'title-a'}>{props.headline}</h3>
        <p className="subtitle-a">{props.subhead}</p>
        <div className="line-mf"></div>
    </div>
)
