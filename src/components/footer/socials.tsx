import React from 'react'

interface SocialsItem {
    service: string
    link: string
}

interface SocialsProps {
    list: SocialsItem[]
}

export default (props: SocialsProps) => {
    return (
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
}
