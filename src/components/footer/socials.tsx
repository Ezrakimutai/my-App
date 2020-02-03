import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faTumblr,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export interface SocialsItem {
    service: string
    link: string
}

export interface SocialsProps {
    list: SocialsItem[]
}

export const Socials: React.FC<SocialsProps> = props => {
    const icons: { [key: string]: any } = {
        github: faGithub,
        tumblr: faTumblr,
        linkedin: faLinkedin,
    }

    return (
        <ul className="socials">
            {props.list.map(social => (
                <li key={social.service}>
                    <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        <span className="ico-circle">
                            <FontAwesomeIcon icon={icons[social.service]} />
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
