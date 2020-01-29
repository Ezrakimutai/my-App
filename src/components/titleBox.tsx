import React from 'react'

export interface TitleBoxProps {
    box: string
    title: string
    headline: string
    subhead?: string
}

export const TitleBox: React.FC<TitleBoxProps> = props => (
    <div className={props.box || 'title-box'}>
        <h3 className={props.title || 'title-a'}>{props.headline}</h3>
        <p className="subtitle-a">{props.subhead}</p>
        <div className="line-mf"></div>
    </div>
)

export default TitleBox
