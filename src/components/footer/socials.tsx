import React from 'react'

export interface SocialsItem {
    service: string
    link: string
}

export interface SocialsProps {
    list: SocialsItem[]
}

export const Socials: React.FC<SocialsProps> = props => (
    <ul className="socials">
        {props.list.map(social => (
            <li key={social.service}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <span className="ico-circle">
                        <i className={'ion-social-' + social.service}></i>
                    </span>
                </a>
            </li>
        ))}
    </ul>
)

export default Socials
