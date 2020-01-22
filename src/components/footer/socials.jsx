import React from 'react'

export default props => {
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
